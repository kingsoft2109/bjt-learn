/* ============ GENERIC EXAM ENGINE ============
   Replaces 21 duplicated per-day JS blocks with one shared engine.
   Each day registers its config into window.EXAM_DAYS via data/exams/dayN.js.
   The engine reads that config and drives the entire exam flow. */

(function(){
'use strict';

if(!window.EXAM_DAYS) window.EXAM_DAYS = {};

var engines = {};

function el(id){ return document.getElementById(id); }

function ExamEngine(cfg){
  this.cfg = cfg;
  this.id = cfg.id;
  this.p = cfg.id.replace('day','d');
  this.qCount = cfg.questions.length;
  this.segNums = [];
  var seen = {};
  cfg.questions.forEach(function(q){ if(!seen[q.seg]){ seen[q.seg]=1; this.segNums.push(q.seg); } }.bind(this));

  this.sel = {};
  this.flag = {};
  this.current = 1;
  this.started = false;
  this.submitted = false;
  this.mode = 'real';
  this.remain = cfg.timeSeconds;
  this.timerId = null;

  this.hasAudio = (cfg.type === 'choukai' || cfg.type === 'choudokkai');
  if(this.hasAudio){
    this.plays = {};
    this.segNums.forEach(function(s){ this.plays[s] = 0; }.bind(this));
    this.speaking = false;
    this.audioSeg = 0;
    this.player = null;
    this.playWatchdog = null;
  }
}

ExamEngine.prototype.setMode = function(m){
  if(this.started && !this.submitted) return;
  this.mode = m;
  var realBtn = el('modeReal' + this.idSuffix());
  var pracBtn = el('modePrac' + this.idSuffix());
  if(realBtn) realBtn.classList.toggle('active', m==='real');
  if(pracBtn) pracBtn.classList.toggle('active', m==='practice');
  if(this.hasAudio){
    var g = el(this.p + 'Groups');
    if(g && g.children.length){ try{ this.buildGroups(); }catch(e){ this.refreshPlayUI(); } }
    else this.refreshPlayUI();
  }
};

ExamEngine.prototype.idSuffix = function(){
  return this.id === 'day1' ? '' : this.id.replace('day','');
};

ExamEngine.prototype.openExam = function(){
  var sp = el(this.p + 'Start');
  var ex = el(this.p + 'Exam');
  if(sp){ sp.classList.add('hidden'); sp.style.display = 'none'; }
  if(ex){ ex.classList.remove('hidden'); ex.style.display = ''; }
};

ExamEngine.prototype.start = function(){
  if(this.started && !this.submitted) return;
  var status = el(this.p + 'StartStatus');
  if(status) status.textContent = 'Đang mở bài…';
  this.started = true;
  var self = this;
  try{
    this.openExam();
    try{ this.buildGroups(); }catch(e1){}
    try{ this.renderPalette(); }catch(e2){}
    try{ this.updateSubmitHint(); }catch(e2b){}
    clearInterval(this.timerId);
    this.timerId = setInterval(function(){
      if(self.remain<=0){ clearInterval(self.timerId); el(self.p+'Timer').textContent='00:00'; if(!self.submitted) self.grade(true); return; }
      self.remain--;
      var t = el(self.p+'Timer');
      t.textContent = fmtT(self.remain);
      if(self.remain<=60) t.classList.add('warn');
    },1000);
    safeScrollToEl(el(this.p+'Exam'));
    if(status) status.textContent = '';
    setTimeout(function(){
      var ex = el(self.p+'Exam');
      if(ex && ex.classList.contains('hidden')){ ex.classList.remove('hidden'); ex.style.display='block'; safeScrollToEl(ex); }
    }, 400);
  }catch(err){
    try{
      this.openExam();
      try{ this.buildGroups(); this.renderPalette(); this.updateSubmitHint(); }catch(e3){}
      if(status) status.textContent = 'Đã mở bài — nếu chưa thấy câu hỏi, hãy cuộn xuống một chút.';
    }catch(e4){}
  }
};

ExamEngine.prototype.buildGroups = function(){
  var wrap = el(this.p + 'Groups');
  if(!wrap) return;
  wrap.innerHTML = '';
  var self = this;
  var cfg = this.cfg;
  var isReading = (cfg.type === 'dokkai');

  this.segNums.forEach(function(segNum){
    var seg = cfg.segments[segNum];
    var group = document.createElement('div');
    group.className = 'seg-group'; group.id = self.p + 'SegGroup' + segNum;

    var banner = document.createElement('div'); banner.className = 'seg-banner';
    var st = document.createElement('div'); st.className = 'seg-title jp'; st.textContent = seg.title;
    var sd = document.createElement('div'); sd.className = 'seg-desc';
    if(self.hasAudio){
      sd.textContent = seg.desc + (self.mode==='real' ? ' · Chế độ thi thật: đoạn này chỉ phát 1 lần.' : ' · Chế độ luyện tập: nghe lại được.');
    } else {
      sd.textContent = seg.desc;
    }
    banner.appendChild(st); banner.appendChild(sd);

    if(self.hasAudio && seg.mp3){
      var arow = document.createElement('div'); arow.className = 'audio-row';
      var pb = document.createElement('button');
      pb.type = 'button'; pb.className = 'play-btn'; pb.id = self.p + 'playBtn' + segNum;
      pb.innerHTML = '<span class="tri">▶</span><span>Phát đoạn ' + segNum + '</span>';
      (function(s){ pb.addEventListener('click', function(){ self.playSegment(s); }); })(segNum);
      var ps = document.createElement('span'); ps.className = 'play-state'; ps.id = self.p + 'playState' + segNum;
      arow.appendChild(pb); arow.appendChild(ps);
      banner.appendChild(arow);
    }

    group.appendChild(banner);

    if(isReading && seg.subject){
      var passage = document.createElement('div'); passage.className = 'read-passage jp';
      var subj = document.createElement('span'); subj.className = 'subj'; subj.textContent = seg.subject;
      passage.appendChild(subj);
      passage.appendChild(document.createTextNode('\n\n' + seg.body));
      group.appendChild(passage);
    }

    if(cfg.type === 'choudokkai' && seg.visual){
      var vis = document.createElement('div'); vis.className = 'visual-material';
      vis.innerHTML = seg.visual;
      group.appendChild(vis);
    }

    cfg.questions.forEach(function(item){
      if(item.seg !== segNum) return;
      var card = document.createElement('div');
      card.className = 'qcard'; card.id = self.p + 'qcard-' + item.n;

      var meta = document.createElement('div'); meta.className = 'q-meta';
      var qn = document.createElement('span'); qn.className = 'q-num';
      var segLabel = cfg.segLabel || (isReading ? 'Bộ' : 'Đoạn');
      var segName = cfg.segNames ? cfg.segNames[item.seg] : (isReading ? '' : '');
      qn.textContent = 'Câu ' + item.n + ' / ' + self.qCount + ' · ' + segLabel + ' ' + item.seg + (segName ? ' — ' + segName : '');

      var fb = document.createElement('button');
      fb.type = 'button'; fb.className = 'flag-btn'; fb.id = self.p + 'flagBtn' + item.n;
      (function(n){ fb.addEventListener('click', function(){ self.toggleFlag(n); }); })(item.n);
      meta.appendChild(qn); meta.appendChild(fb);

      var qt = document.createElement('p'); qt.className = 'q-text jp'; qt.textContent = item.q;
      var opts = document.createElement('div');
      opts.className = 'options'; opts.id = self.p + 'qOptions' + item.n;
      opts.setAttribute('role','radiogroup'); opts.setAttribute('aria-label','Đáp án câu ' + item.n);

      card.appendChild(meta); card.appendChild(qt); card.appendChild(opts);
      (function(n){ card.addEventListener('click', function(){ self.setActiveQ(n, false); }); })(item.n);
      group.appendChild(card);
    });
    wrap.appendChild(group);
  });

  for(var i=1;i<=this.qCount;i++) this.updateQuestion(i);
  this.markActiveCard();
  if(this.hasAudio) this.refreshPlayUI();
};

ExamEngine.prototype.renderPalette = function(){
  var g = el(this.p + 'PalGrid'); if(!g) return; g.innerHTML='';
  var self = this;
  var cfg = this.cfg;
  var isReading = (cfg.type === 'dokkai');
  var segLabel = cfg.segLabel || (isReading ? 'Bộ' : 'Đoạn');

  for(var i=1;i<=this.qCount;i++){
    var item = cfg.questions[i-1];
    var b = document.createElement('button');
    b.className = 'pal-btn'; b.setAttribute('aria-label','Câu '+i);
    b.innerHTML = '<span class="pnum">' + i + '</span><span class="plabel"></span><span class="pstat"></span>';
    var segName = cfg.segNames ? cfg.segNames[item.seg] : (isReading ? '' : '聴解');
    b.querySelector('.plabel').textContent = segLabel + ' ' + item.seg + (segName ? ' · ' + segName : '');
    var st = b.querySelector('.pstat');
    if(this.sel[i]) b.classList.add('answered');
    if(this.flag[i]) b.classList.add('flagged');
    if(this.sel[i] && !this.submitted) st.textContent = '✓';
    if(this.flag[i]) st.textContent = '⚑' + (st.textContent ? ' ✓' : '');
    if(i===this.current) b.classList.add('current');
    if(this.submitted){
      b.classList.remove('answered');
      var ok = this.sel[i]===item.ans;
      b.classList.add(ok ? 'correct' : 'wrong');
      st.textContent = ok ? '✓' : '✗';
    }
    (function(n){ b.addEventListener('click', function(){ self.gotoQ(n); }); })(i);
    g.appendChild(b);
  }
  var done = Object.keys(this.sel).filter(function(k){return self.sel[k];}).length;
  var palCount = el(this.p + 'PalCount');
  if(palCount) palCount.textContent = this.submitted ? ('Đã chấm — đúng ' + this.score() + ' / ' + this.qCount) : ('Đã trả lời ' + done + ' / ' + this.qCount);
  this.updateFootNav();
};

ExamEngine.prototype.updateFootNav = function(){
  var fs = el(this.p + 'FootStatus');
  var done = Object.keys(this.sel).filter(function(k){return this.sel[k];}.bind(this)).length;
  if(fs) fs.textContent = 'Đang xem câu ' + this.current + ' / ' + this.qCount + ' · Đã trả lời ' + done + ' / ' + this.qCount;
};

ExamEngine.prototype.markActiveCard = function(){
  for(var i=1;i<=this.qCount;i++){
    var c = el(this.p + 'qcard-' + i);
    if(c) c.classList.toggle('current', i === this.current);
  }
};

ExamEngine.prototype.setActiveQ = function(n, scroll){
  this.current = n;
  this.markActiveCard();
  this.renderPalette();
  if(scroll){
    var e = el(this.p + 'qcard-' + n);
    if(e) safeScrollToEl(e);
  }
};

ExamEngine.prototype.updateQuestion = function(n){
  var item = this.cfg.questions[n-1];
  var fb = el(this.p + 'flagBtn' + n);
  if(fb){
    fb.classList.toggle('on', !!this.flag[n]);
    fb.textContent = this.flag[n] ? '⚑ Đã đánh dấu — bấm để bỏ' : '⚑ Đánh dấu câu này';
  }
  var box = el(this.p + 'qOptions' + n);
  if(!box) return;
  box.innerHTML = '';
  var letters = ['A','B','C','D'];
  var self = this;
  item.opts.forEach(function(opt, idx){
    var b = document.createElement('button');
    b.className = 'd1opt'; b.type = 'button';
    if(self.sel[n] === letters[idx]) b.classList.add('selected');
    b.innerHTML = '<span class="letter">' + letters[idx] + '</span><span class="jp"></span>';
    b.querySelector('.jp').textContent = opt;
    (function(nn, v){ b.addEventListener('click', function(){ self.pick(nn, v); }); })(n, letters[idx]);
    box.appendChild(b);
  });
};

ExamEngine.prototype.updateSubmitHint = function(){
  var done = Object.keys(this.sel).filter(function(k){ return this.sel[k]; }.bind(this)).length;
  var hint = el(this.p + 'SubmitHint');
  if(hint) hint.textContent = done === this.qCount
    ? 'Đã trả lời đủ ' + this.qCount + ' / ' + this.qCount + ' — bấm Nộp bài để chấm điểm.'
    : 'Đã trả lời ' + done + ' / ' + this.qCount + ' — còn ' + (this.qCount - done) + ' câu chưa chọn. Bấm Nộp bài vẫn nộp được (câu trống tính là sai).';
};

ExamEngine.prototype.pick = function(n, v){
  if(this.submitted) return;
  if(typeof v === 'undefined'){ v = n; n = this.current; }
  this.sel[n] = v;
  this.current = n;
  this.updateQuestion(n);
  this.markActiveCard();
  this.renderPalette();
  this.updateSubmitHint();
};

ExamEngine.prototype.toggleFlag = function(n){
  if(typeof n !== 'number') n = this.current;
  this.flag[n] = !this.flag[n];
  this.current = n;
  this.updateQuestion(n);
  this.markActiveCard();
  this.renderPalette();
};

ExamEngine.prototype.gotoQ = function(n){
  if(n>this.qCount) n = 1;
  if(n<1) n = 1;
  this.setActiveQ(n, true);
};

ExamEngine.prototype.score = function(){
  var s=0;
  for(var i=1;i<=this.qCount;i++){
    if(this.sel[i]===this.cfg.questions[i-1].ans) s++;
  }
  return s;
};

ExamEngine.prototype.askSubmit = function(){
  if(this.submitted || !this.started) return;
  var done = Object.keys(this.sel).filter(function(k){return this.sel[k];}.bind(this)).length;
  var missing = [];
  for(var i=1;i<=this.qCount;i++){ if(!this.sel[i]) missing.push(i); }
  var modalText = el(this.p + 'ModalText');
  if(modalText) modalText.textContent = done===this.qCount
    ? 'Bạn đã trả lời đủ ' + this.qCount + '/' + this.qCount + ' câu. Nộp bài để xem đáp án và giải thích?'
    : 'Bạn mới trả lời ' + done + '/' + this.qCount + ' câu. Câu chưa làm: ' + missing.join(', ') + '. Nộp bây giờ thì các câu trống tính là sai — vẫn nộp chứ?';
  var modal = el(this.p + 'Modal');
  modal.classList.add('show');
  modal.style.display = 'flex';
  var cf = el(this.p + 'ModalConfirm');
  if(cf){ try{ cf.focus(); }catch(e){} }
};

ExamEngine.prototype.closeModal = function(){
  var modal = el(this.p + 'Modal');
  modal.classList.remove('show');
  modal.style.display = '';
};

ExamEngine.prototype.confirmSubmit = function(){
  this.closeModal();
  this.grade(false);
};

ExamEngine.prototype.grade = function(auto){
  if(this.submitted) return;
  this.submitted = true;
  clearInterval(this.timerId);
  if(this.hasAudio) this.stopAudio();

  el(this.p + 'Exam').classList.add('hidden');
  var score = this.score();
  var box = el(this.p + 'Result');
  box.classList.add('show');
  el(this.p + 'ScoreBig').textContent = score + ' / ' + this.qCount;

  var scoreTitle = '';
  if(this.cfg.scoreMessages){
    for(var si=0;si<this.cfg.scoreMessages.length;si++){
      if(score >= this.cfg.scoreMessages[si].min){ scoreTitle = this.cfg.scoreMessages[si].text; break; }
    }
  }
  el(this.p + 'ScoreTitle').textContent = scoreTitle || ('Kết quả ' + this.cfg.id);

  var cfg = this.cfg;
  var self = this;
  var isReading = (cfg.type === 'dokkai');
  var segLabel = cfg.segLabel || (isReading ? 'Bộ' : 'Đoạn');

  var segScore = this.segNums.map(function(s){
    var c = 0;
    cfg.questions.forEach(function(q){ if(q.seg===s && self.sel[q.n]===q.ans) c++; });
    var perSeg = cfg.questions.filter(function(q){return q.seg===s;}).length;
    var name = cfg.segNames ? cfg.segNames[s] : '';
    return segLabel + ' ' + s + (name ? ' (' + name + ')' : '') + ': ' + c + '/' + perSeg;
  });
  el(this.p + 'ScoreDetail').textContent = (auto ? '⏱ Hết giờ — bài đã tự nộp. ' : '') + segScore.join('  ·  ');

  var rv = el(this.p + 'Review'); rv.innerHTML = '';
  var lastSeg = 0;
  cfg.questions.forEach(function(item){
    if(isReading && item.seg !== lastSeg){
      lastSeg = item.seg;
      var seg = cfg.segments[item.seg];
      var tcard = document.createElement('div'); tcard.className = 'review-card';
      var segName = cfg.segNames ? cfg.segNames[item.seg] : '';
      var thtml = '<div class="q-num">' + segLabel + ' ' + item.seg + (segName ? ' — ' + segName : '') + '</div>';
      thtml += '<p class="q-text jp" style="font-size:16px;margin:6px 0 8px"></p>';
      thtml += viTrHtml(seg.vi, 'Bản dịch gợi ý — ' + segLabel + ' ' + item.seg);
      tcard.innerHTML = thtml;
      tcard.querySelector('.q-text').textContent = seg.subject || '';
      rv.appendChild(tcard);
    }

    var card = document.createElement('div'); card.className = 'review-card';
    var isOk = self.sel[item.n] === item.ans;
    var segName2 = cfg.segNames ? cfg.segNames[item.seg] : '';
    var html = '<div class="q-num">Câu ' + item.n + ' · ' + segLabel + ' ' + item.seg + (segName2 ? ' — ' + segName2 : '') + '</div>';
    html += '<p class="q-text jp" style="font-size:17px;margin:6px 0 10px"></p>';
    html += '<p style="margin:0 0 6px">Đáp án của bạn: <strong>' + (self.sel[item.n] ? self.sel[item.n] + ' — ' : 'Chưa chọn') + '</strong>' + (self.sel[item.n] ? '<span class="jp"></span>' : '') + '</p>';
    html += '<p style="margin:0 0 6px">Đáp án đúng: <strong>' + item.ans + ' — </strong><span class="jp"></span></p>';
    html += '<div class="verdict" style="font-weight:800;color:' + (isOk ? 'var(--ok)' : 'var(--bad)') + '">' + (isOk ? '✓ Đúng' : '✗ Sai');
    if(item.trap) html += ' · Bẫy: ' + item.trap;
    html += '</div>';
    html += '<p style="margin:8px 0 0"></p>';

    if(!isReading && item.seg !== lastSeg){
      lastSeg = item.seg;
      var segData = cfg.segments[item.seg];
      if(segData){
        if(segData.mp3) html += reviewAudioHtml(segData.mp3, 'Nghe lại ' + segLabel.toLowerCase() + ' ' + item.seg);
        if(segData.lines){
          var tr = segData.lines.map(function(l){ return l.text; }).join('\n');
          html += '<div class="transcript jp"><strong>Transcript ' + segLabel.toLowerCase() + ' ' + item.seg + ':</strong>\n' + tr + '</div>';
        }
        html += viTrHtml(segData.vi, 'Bản dịch ' + segLabel.toLowerCase() + ' ' + item.seg);
      }
    }

    card.innerHTML = html;
    card.querySelector('.q-text').textContent = item.q;
    var spans = card.querySelectorAll('span.jp');
    if(self.sel[item.n] && spans[0]) spans[0].textContent = item.opts['ABCD'.indexOf(self.sel[item.n])];
    var ansSpan = spans[self.sel[item.n] ? 1 : 0];
    if(ansSpan) ansSpan.textContent = item.opts['ABCD'.indexOf(item.ans)];
    var ps = card.querySelectorAll('p');
    ps[ps.length-1].textContent = item.explain;
    rv.appendChild(card);
  });

  var lb = el(this.p + 'LogBody'); lb.innerHTML = '';
  var wrong = cfg.questions.filter(function(q){ return self.sel[q.n] !== q.ans; });
  if(wrong.length === 0){
    var tr0 = document.createElement('tr');
    var td0 = document.createElement('td'); td0.colSpan = 3; td0.style.color = 'var(--ok)';
    td0.textContent = 'Không có câu sai — sạch cả ' + this.qCount + ' câu. 🎉';
    tr0.appendChild(td0); lb.appendChild(tr0);
  } else {
    wrong.forEach(function(q){
      var tr = document.createElement('tr');
      var td1 = document.createElement('td'); td1.innerHTML = '<strong>Câu ' + q.n + '</strong><br>Bạn chọn: ' + (self.sel[q.n] || '—') + ' · Đúng: ' + q.ans;
      var td2 = document.createElement('td'); td2.textContent = q.trap;
      var td3 = document.createElement('td'); td3.textContent = q.explain;
      tr.appendChild(td1); tr.appendChild(td2); tr.appendChild(td3);
      lb.appendChild(tr);
    });
  }
  this.renderPalette();
  box.scrollIntoView({behavior:'smooth', block:'center'});
};

ExamEngine.prototype.reset = function(){
  this.sel = {}; this.flag = {};
  this.current = 1; this.submitted = false; this.started = false;
  this.remain = this.cfg.timeSeconds; clearInterval(this.timerId);
  if(this.hasAudio){
    this.plays = {};
    this.segNums.forEach(function(s){ this.plays[s] = 0; }.bind(this));
    this.speaking = false;
    this.stopAudio();
  }
  var t = el(this.p+'Timer'); t.textContent = fmtT(this.remain); t.classList.remove('warn');
  el(this.p+'Result').classList.remove('show');
  el(this.p+'Review').innerHTML = '';
  var lb = el(this.p+'LogBody');
  if(lb) lb.innerHTML = '<tr><td colspan="3" style="color:var(--muted)">Chưa có dữ liệu — nộp bài ở trên, sổ lỗi sai sẽ tự điền các câu bạn làm sai.</td></tr>';
  var ex = el(this.p+'Exam'); ex.classList.add('hidden'); ex.style.display = '';
  var g = el(this.p+'Groups'); if(g) g.innerHTML = '';
  var h = el(this.p+'SubmitHint'); if(h) h.textContent = 'Đã trả lời 0 / ' + this.qCount + ' — trả lời xong bấm Nộp bài để chấm điểm.';
  var sp = el(this.p+'Start'); sp.classList.remove('hidden'); sp.style.display = '';
  var st = el(this.p+'StartStatus'); if(st) st.textContent = '';
  window.scrollTo({top:0, behavior:'smooth'});
};

// ---- Audio playback (listening days) ----
ExamEngine.prototype.refreshPlayUI = function(){
  if(!this.hasAudio) return;
  var self = this;
  this.segNums.forEach(function(s){ self.refreshOnePlayUI(s); });
};

ExamEngine.prototype.refreshOnePlayUI = function(seg){
  var btn = el(this.p + 'playBtn' + seg), st = el(this.p + 'playState' + seg);
  if(!btn || !st) return;
  if(this.speaking && this.audioSeg===seg){ btn.disabled = true; st.textContent = 'Đang phát đoạn ' + seg + '…'; return; }
  if(this.mode==='real' && this.plays[seg]>=1){ btn.disabled = true; st.textContent = 'Đoạn ' + seg + ' đã phát 1/1 lần (chế độ thi thật).'; return; }
  btn.disabled = false;
  if(this.speaking){ st.textContent = 'Đang phát đoạn ' + this.audioSeg + ' — bấm nút này để dừng đoạn đó và phát đoạn ' + seg + '.'; return; }
  st.textContent = this.plays[seg]>0 ? ('Đã phát ' + this.plays[seg] + ' lần' + (this.mode==='practice' ? ' — nghe lại được.' : '')) : 'Chưa phát — bấm để nghe đoạn ' + seg + '.';
};

ExamEngine.prototype.setPlayState = function(seg, msg){
  var st = el(this.p + 'playState' + seg);
  if(st) st.textContent = msg;
};

ExamEngine.prototype.stopAudio = function(){
  if(this.playWatchdog){ clearTimeout(this.playWatchdog); this.playWatchdog = null; }
  if(this.player){
    var old = this.player; this.player = null;
    try{ old.onended = null; old.onerror = null; old.onplaying = null; old.pause(); old.removeAttribute('src'); old.load(); }catch(e){}
  }
  this.speaking = false;
};

ExamEngine.prototype.playSegment = function(seg){
  if(typeof seg !== 'number') seg = this.cfg.questions[this.current-1].seg;
  if(this.speaking && this.audioSeg===seg) return;
  if(this.mode==='real' && this.plays[seg]>=1) return;
  this.stopAudio();
  var a = new Audio();
  this.player = a;
  this.audioSeg = seg;
  this.speaking = true; this.refreshPlayUI();
  var self = this;
  var counted = false;
  a.onplaying = function(){
    if(self.player!==a) return;
    if(self.playWatchdog){ clearTimeout(self.playWatchdog); self.playWatchdog = null; }
    if(!counted){ counted = true; self.plays[seg]++; }
  };
  a.onended = function(){
    if(self.player!==a) return;
    self.player = null; self.speaking = false;
    self.refreshPlayUI();
  };
  a.onerror = function(){
    if(self.player!==a || counted) return;
    if(self.playWatchdog){ clearTimeout(self.playWatchdog); self.playWatchdog = null; }
    self.player = null; self.speaking = false;
    self.refreshPlayUI();
    self.setPlayState(seg, 'Không tải được file audio — kiểm tra kết nối mạng rồi bấm phát lại.');
  };
  var wdWaits = 0;
  function armStartWatchdog(){
    self.playWatchdog = setTimeout(function(){
      self.playWatchdog = null;
      if(self.player!==a || !self.speaking || counted) return;
      wdWaits++;
      var loading = false;
      try{ loading = (a.readyState > 0) || (a.networkState === 2) || (a.buffered && a.buffered.length > 0); }catch(e){}
      if(loading && wdWaits < 5){
        self.setPlayState(seg, 'Đang tải audio đoạn ' + seg + '… mạng hơi chậm, đợi thêm một chút.');
        armStartWatchdog();
        return;
      }
      if(!loading && wdWaits === 1 && typeof bjtAutoRetryOnce === 'function' && bjtAutoRetryOnce(self.id + '-' + seg)){
        self.stopAudio();
        self.playSegment(seg);
        self.setPlayState(seg, 'Lần phát đầu bị kẹt — đang tự thử phát lại…');
        return;
      }
      self.stopAudio();
      self.refreshPlayUI();
      self.setPlayState(seg, 'Audio chưa phát được — bấm lại nút Phát.');
    }, 8000);
  }
  bjtStartAudio(a, this.cfg.segments[seg].mp3, {
    isCurrent: function(){ return self.player===a; },
    arm: armStartWatchdog,
    onLoading: function(){ self.setPlayState(seg, 'Đang tải audio đoạn ' + seg + '…'); },
    onBlocked: function(){
      if(self.player!==a || counted) return;
      if(self.playWatchdog){ clearTimeout(self.playWatchdog); self.playWatchdog = null; }
      self.player = null; self.speaking = false;
      self.refreshPlayUI();
      self.setPlayState(seg, 'Trình duyệt chặn phát audio — bấm lại nút Phát.');
    }
  });
};

// ---- HTML generation ----
ExamEngine.prototype.generateHTML = function(){
  var cfg = this.cfg;
  var p = this.p;
  var isReading = (cfg.type === 'dokkai');
  var dayNum = cfg.id.replace('day','');
  var suffix = this.idSuffix();

  var html = '';
  html += '<main class="wrap hidden" id="examDay' + dayNum + '">';

  html += '<div class="cbt-head"><div>';
  html += '<h1>' + cfg.title + '</h1>';
  html += '<div class="sub">' + cfg.subtitle + '</div>';
  html += '<div class="mode-row"><span class="lbl">Chế độ:</span>';
  if(this.hasAudio){
    html += '<button class="mode-btn active" id="modeReal' + suffix + '">Thi thật — audio phát 1 lần</button>';
    html += '<button class="mode-btn" id="modePrac' + suffix + '">Luyện tập — nghe lại được</button>';
  } else {
    html += '<button class="mode-btn active" id="modeReal' + suffix + '">Thi thật</button>';
    html += '<button class="mode-btn" id="modePrac' + suffix + '">Luyện tập</button>';
  }
  html += '</div></div>';
  html += '<div class="cbt-timer"><div class="t" id="' + p + 'Timer">' + fmtT(cfg.timeSeconds) + '</div>';
  html += '<div class="lbl">Thời gian còn lại</div></div></div>';

  html += '<section class="start-panel" id="' + p + 'Start">';
  html += '<h2>Hướng dẫn làm bài — đọc trước khi bấm Bắt đầu</h2>';
  html += '<div class="start-grid"><div>';
  html += cfg.instructions || '';
  html += '<p style="margin-top:14px"><button class="btn btn-primary" id="' + p + 'StartBtn" type="button" style="font-size:16px">Bắt đầu làm bài</button></p>';
  html += '<p class="start-status" id="' + p + 'StartStatus" role="status" aria-live="polite"></p>';
  html += '<p class="note js-warn" id="' + p + 'JsWarn">Trang đang tải…</p>';
  html += '</div><div>';
  if(cfg.candidateInfo){
    html += '<div class="candidate" aria-label="Thông tin bài thi">';
    var ci = cfg.candidateInfo;
    html += '<div><span>Môn thi</span><b class="jp">' + (ci.subject||'') + '</b></div>';
    html += '<div><span>Số câu hỏi</span><b>' + (ci.questionInfo||'') + '</b></div>';
    html += '<div><span>Thời gian</span><b>' + (ci.time||'') + '</b></div>';
    if(ci.format) html += '<div><span>Dạng bài</span><b class="jp">' + ci.format + '</b></div>';
    html += '</div>';
  }
  if(cfg.tips) html += '<div class="note" style="margin-top:14px">' + cfg.tips + '</div>';
  html += '</div></div></section>';

  html += '<section id="' + p + 'Exam" class="hidden"><div class="cbt-layout">';
  html += '<aside class="palette"><h3>Danh sách câu hỏi</h3>';
  html += '<div class="count" id="' + p + 'PalCount">Đã trả lời 0 / ' + this.qCount + '</div>';
  html += '<div class="pal-grid" id="' + p + 'PalGrid"></div>';
  html += '<div class="legend"><span><i style="background:var(--card)"></i>Chưa làm</span>';
  html += '<span><i style="background:var(--ok);border-color:var(--ok)"></i>Đã chọn</span>';
  html += '<span><i style="background:var(--card);outline:3px solid var(--accent);outline-offset:-1px"></i>Đang mở</span>';
  html += '<span>⚑ Đã đánh dấu</span></div>';
  html += '<button class="btn btn-primary submit-wide" id="' + p + 'SubmitBtnSide" type="button">Nộp bài</button>';
  html += '<div class="kbd-hint">Phím tắt: <kbd>A</kbd> <kbd>B</kbd> <kbd>C</kbd> <kbd>D</kbd> chọn đáp án · <kbd>←</kbd> <kbd>→</kbd> chuyển câu</div>';
  html += '</aside>';
  html += '<div class="cbt-main"><div id="' + p + 'Groups"></div>';
  html += '<div class="cbt-footnav">';
  html += '<button class="nav-btn" id="' + p + 'PrevBtn" type="button">← Câu trước</button>';
  html += '<span class="foot-status" id="' + p + 'FootStatus">Câu 1 / ' + this.qCount + '</span>';
  html += '<button class="nav-btn primary" id="' + p + 'NextBtn" type="button">Câu tiếp →</button>';
  html += '</div></div></div>';
  html += '<div class="d1-submitbar">';
  html += '<p id="' + p + 'SubmitHint">Đã trả lời 0 / ' + this.qCount + ' — trả lời xong bấm Nộp bài để chấm điểm.</p>';
  html += '<button class="btn btn-primary" id="' + p + 'SubmitBtnBottom" type="button" style="font-size:16px;padding:14px 34px">Nộp bài</button>';
  html += '</div></section>';

  html += '<section class="result-panel" id="' + p + 'Result">';
  html += '<div class="big" id="' + p + 'ScoreBig">0 / ' + this.qCount + '</div>';
  html += '<h2 id="' + p + 'ScoreTitle">Kết quả</h2>';
  html += '<p id="' + p + 'ScoreDetail"></p>';
  html += '<p style="font-size:14px">Chi tiết từng câu kèm giải thích và sổ lỗi sai nằm ngay bên dưới.</p>';
  html += '<button class="btn" style="background:#fff;color:#14365e;margin-top:10px" id="' + p + 'ResetBtn">↺ Làm lại</button>';
  html += '</section>';
  html += '<div id="' + p + 'Review"></div>';

  html += '<h2 class="section-title">Sổ lỗi sai</h2>';
  html += '<p class="section-sub">Sau khi nộp bài, các câu sai sẽ tự liệt kê ở đây.</p>';
  html += '<div class="card" style="padding:6px 6px"><div class="log-wrap">';
  html += '<table class="log"><thead><tr><th style="width:70px">Câu</th><th style="width:180px">Loại bẫy</th><th>Điểm cần nhớ</th></tr></thead>';
  html += '<tbody id="' + p + 'LogBody"><tr><td colspan="3" style="color:var(--muted)">Chưa có dữ liệu — nộp bài ở trên, sổ lỗi sai sẽ tự điền các câu bạn làm sai.</td></tr></tbody>';
  html += '</table></div></div>';

  if(cfg.footerNote) html += '<p class="footer-note">' + cfg.footerNote + '</p>';
  html += '</main>';

  html += '<div class="modal-overlay" id="' + p + 'Modal" role="dialog" aria-modal="true">';
  html += '<div class="modal"><h3>Nộp bài?</h3>';
  html += '<p id="' + p + 'ModalText"></p>';
  html += '<div class="row">';
  html += '<button class="btn btn-ghost" id="' + p + 'ModalCancel" type="button">Làm tiếp</button>';
  html += '<button class="btn btn-primary" id="' + p + 'ModalConfirm" type="button">Nộp bài</button>';
  html += '</div></div></div>';

  return html;
};

ExamEngine.prototype.bindEvents = function(){
  var self = this;
  var p = this.p;
  var startBtn = el(p + 'StartBtn');
  if(startBtn) startBtn.addEventListener('click', function(){ self.start(); });
  var submitSide = el(p + 'SubmitBtnSide');
  if(submitSide) submitSide.addEventListener('click', function(){ self.askSubmit(); });
  var submitBottom = el(p + 'SubmitBtnBottom');
  if(submitBottom) submitBottom.addEventListener('click', function(){ self.askSubmit(); });
  var modalConfirm = el(p + 'ModalConfirm');
  if(modalConfirm) modalConfirm.addEventListener('click', function(){ self.confirmSubmit(); });
  var modalCancel = el(p + 'ModalCancel');
  if(modalCancel) modalCancel.addEventListener('click', function(){ self.closeModal(); });
  var resetBtn = el(p + 'ResetBtn');
  if(resetBtn) resetBtn.addEventListener('click', function(){ self.reset(); });
  var prevBtn = el(p + 'PrevBtn');
  if(prevBtn) prevBtn.addEventListener('click', function(){ self.gotoQ(self.current-1); });
  var nextBtn = el(p + 'NextBtn');
  if(nextBtn) nextBtn.addEventListener('click', function(){ self.gotoQ(self.current+1); });

  var suffix = this.idSuffix();
  var modeReal = el('modeReal' + suffix);
  if(modeReal) modeReal.addEventListener('click', function(){ self.setMode('real'); });
  var modePrac = el('modePrac' + suffix);
  if(modePrac) modePrac.addEventListener('click', function(){ self.setMode('practice'); });

  var jsWarn = el(p + 'JsWarn');
  if(jsWarn) jsWarn.style.display = 'none';

  document.addEventListener('keydown', function(e){
    if(currentExam!==self.id || !self.started || self.submitted) return;
    var modal = el(self.p + 'Modal');
    if(modal && (modal.classList.contains('show') || modal.style.display==='flex')) return;
    var k = e.key.toLowerCase();
    if(['a','b','c','d'].indexOf(k)>=0){ self.pick(self.current, k.toUpperCase()); }
    else if(e.key==='ArrowRight'){ self.gotoQ(self.current+1); }
    else if(e.key==='ArrowLeft'){ self.gotoQ(self.current-1); }
  });
};

// ---- Static initialization ----
function initAllExams(){
  var container = el('examContainer');
  if(!container) return;

  var ids = Object.keys(window.EXAM_DAYS);
  ids.sort(function(a,b){
    var na = parseInt(a.replace('day',''),10);
    var nb = parseInt(b.replace('day',''),10);
    return na - nb;
  });

  ids.forEach(function(id){
    var cfg = window.EXAM_DAYS[id];
    var engine = new ExamEngine(cfg);
    engines[id] = engine;
    container.insertAdjacentHTML('beforeend', engine.generateHTML());
    engine.bindEvents();
  });
}

window.examEngines = engines;
window.initAllExams = initAllExams;

window.getExamEngine = function(id){ return engines[id]; };

})();
