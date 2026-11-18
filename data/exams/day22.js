(function(){
var cfg = {
  id: 'day22',
  type: 'choudokkai',
  title: 'Ngày 22 — Luyện <span class="jp">聴読解</span> (Nghe + Đọc)',
  subtitle: '4 bộ · 12 câu · Biểu đồ cột doanh số <span class="jp">製品A / 製品B</span> · Hai sự kiện cùng ngày: <span class="jp">研修 + 商談</span> · Bảng giá thuê <span class="jp">大会議室</span> giảm 1割 · Form <span class="jp">納品依頼書</span> + audio sửa trường (bộ 4 xoay vòng) · Thứ Tư 18/11/2026',
  timeSeconds: 40*60,
  questionCount: 12,
  segmentCount: 4,
  segLabel: 'Bộ',
  segments: {
  1: { title:'第1問 — 棒グラフ：製品A・製品Bの売上（10–12月）', mp3:'assets/ngay22-doan1.mp3', desc:'Câu 1–3 · Nhìn biểu đồ cột doanh số 10–12月 (đơn vị 万円) rồi nghe hội thoại báo cáo: 製品A — 10月 320, 11月 350, 12月 380; 製品B — 10月 210, 11月 240, 12月 260. Gắn nhãn từng con số (sản phẩm nào, tháng nào) trước khi cộng; chú ý con số tháng 12 của 製品B đang ở trạng thái nào.',
    visual:'<div class="jp" style="font-size:15px;line-height:1.7"><strong>棒グラフ：売上（万円）</strong><table style="border-collapse:collapse;margin-top:8px;min-width:320px"><tr><th style="border:1px solid #999;padding:4px 10px"></th><th style="border:1px solid #999;padding:4px 10px">10月</th><th style="border:1px solid #999;padding:4px 10px">11月</th><th style="border:1px solid #999;padding:4px 10px">12月</th></tr><tr><td style="border:1px solid #999;padding:4px 10px">製品A</td><td style="border:1px solid #999;padding:4px 10px">320</td><td style="border:1px solid #999;padding:4px 10px">350</td><td style="border:1px solid #999;padding:4px 10px">380</td></tr><tr><td style="border:1px solid #999;padding:4px 10px">製品B</td><td style="border:1px solid #999;padding:4px 10px">210</td><td style="border:1px solid #999;padding:4px 10px">240</td><td style="border:1px solid #999;padding:4px 10px">260</td></tr></table></div>',
    lines:[
      '10月から12月までの売上についてご報告します。製品Aの売上は、10月が320万円、11月が350万円、12月が380万円でした。',
      '製品Bはどうでしたか。',
      '製品Bは、10月が210万円、11月が240万円、12月が260万円です。ただし、12月の製品Bの数字は、まだ確定していません。見込みの数字です。',
      '分かりました。では、製品Aの10月から12月までの合計はいくらですか。',
      '320万円と350万円と380万円で、合計1,050万円です。'
    ],
    vi:['Tôi xin báo cáo về doanh số từ tháng 10 đến tháng 12. Doanh số sản phẩm A: tháng 10 là 320 vạn yên, tháng 11 là 350 vạn yên, tháng 12 là 380 vạn yên.', 'Sản phẩm B thì thế nào?', 'Sản phẩm B: tháng 10 là 210 vạn yên, tháng 11 là 240 vạn yên, tháng 12 là 260 vạn yên. Tuy nhiên, con số tháng 12 của sản phẩm B vẫn chưa được xác nhận chính thức. Đó là con số dự kiến.', 'Tôi hiểu rồi. Vậy tổng doanh số sản phẩm A từ tháng 10 đến tháng 12 là bao nhiêu?', '320 vạn yên cộng 350 vạn yên và 380 vạn yên, tổng cộng là 1.050 vạn yên.']},
  2: { title:'第2問 — Hai sự kiện cùng ngày: 社内研修 + 商談', mp3:'assets/ngay22-doan2.mp3', desc:'Câu 4–6 · Hai sự kiện gần ngày nhau: buổi 社内研修 đổi ngày nhưng giữ nguyên giờ và phòng; buổi 商談 diễn ra chiều ngày cũ — ghi cặp “sự kiện → ngày / giờ / phòng” ra nháp cho từng sự kiện, đừng ghép chéo. Chú ý tình trạng tài liệu của buổi 商談.',
    lines:[
      '11月26日木曜日の予定を確認します。',
      'はい。午前10時から社内研修が本社3階の会議室Aでありますね。',
      '研修は、11月27日金曜日の午前10時に変更になりました。場所は、本社3階の会議室Aのままです。商談は、11月26日木曜日の午後3時から、本社5階の会議室Bで行います。',
      '分かりました。商談の資料ですが、まだ承認を得ていませんので、26日は口頭での説明のみになりますね。',
      'はい。よろしくお願いします。'
    ],
    vi:['Tôi xác nhận lịch ngày thứ Năm 26 tháng 11.', 'Vâng. Từ 10 giờ sáng có buổi đào tạo nội bộ tại phòng họp A tầng 3 trụ sở chính phải không ạ.', 'Buổi đào tạo đã đổi sang 10 giờ sáng thứ Sáu ngày 27 tháng 11. Địa điểm vẫn là phòng họp A tầng 3 trụ sở chính. Buổi đàm phán thương mại sẽ diễn ra từ 3 giờ chiều thứ Năm ngày 26 tháng 11 tại phòng họp B tầng 5 trụ sở chính.', 'Tôi hiểu rồi. Về tài liệu buổi đàm phán, vì vẫn chưa được phê duyệt nên ngày 26 chỉ giải thích bằng miệng thôi phải không ạ.', 'Ừ, nhờ em nhé.']},
  3: { title:'第3問 — 料金表：大会議室レンタル + プロジェクター', mp3:'assets/ngay22-doan3.mp3', desc:'Câu 7–9 · Đọc bảng giá thuê phòng họp rồi nghe hội thoại đặt thuê: thuê 大会議室 3 ngày được giảm 1割 theo điều kiện của bảng — ghi rõ “giá trước giảm → giá sau giảm” ra nháp rồi mới cộng tiền thuê プロジェクター 2台. Chú ý tình trạng của 請求書 (hóa đơn).',
    visual:'<div class="jp" style="font-size:15px;line-height:1.7"><strong>料金表 — 会議室利用料</strong><table style="border-collapse:collapse;margin-top:8px;min-width:320px"><tr><td style="border:1px solid #999;padding:4px 10px">大会議室</td><td style="border:1px solid #999;padding:4px 10px">1日 8万円</td></tr><tr><td style="border:1px solid #999;padding:4px 10px">中会議室</td><td style="border:1px solid #999;padding:4px 10px">1日 5万円</td></tr><tr><td style="border:1px solid #999;padding:4px 10px">小会議室</td><td style="border:1px solid #999;padding:4px 10px">1日 3万円</td></tr><tr><td style="border:1px solid #999;padding:4px 10px">プロジェクター</td><td style="border:1px solid #999;padding:4px 10px">1台 1万円</td></tr></table><p style="margin:8px 0 0">※3日以上利用の場合、利用料が1割引になります。</p></div>',
    lines:[
      '大会議室の利用についてご連絡します。大会議室を3日間借りたいのですが、利用料はいくらになりますか。',
      '大会議室は、1日8万円です。3日間ですので、24万円になります。3日以上のご利用ですので、1割引で21万6千円になります。',
      'プロジェクターも2台お願いします。',
      'プロジェクターは、1台1万円です。2台で2万円です。合計で23万6千円になります。なお、請求書は、まだ発行していませんので、ご利用後に発行いたします。'
    ],
    vi:['Tôi liên hệ về việc sử dụng phòng họp lớn. Tôi muốn thuê phòng họp lớn trong 3 ngày, phí sử dụng là bao nhiêu ạ?', 'Phòng họp lớn là 80.000 yên một ngày. 3 ngày sẽ là 240.000 yên. Vì sử dụng từ 3 ngày trở lên nên được giảm 10%, còn 216.000 yên.', 'Cho tôi thuê thêm 2 máy chiếu nữa.', 'Máy chiếu là 10.000 yên một máy. 2 máy là 20.000 yên. Tổng cộng là 236.000 yên. Ngoài ra, hóa đơn vẫn chưa được phát hành nên chúng tôi sẽ phát hành sau khi quý khách sử dụng.']},
  4: { title:'第4問 — 納品依頼書：form giao hàng + audio sửa trường (dạng xoay vòng)', mp3:'assets/ngay22-doan4.mp3', desc:'Câu 10–12 · Dạng xoay vòng — đọc form 納品依頼書 rồi nghe hội thoại: một trường trên form bị audio sửa lại, một trường được giữ nguyên (〜のまま), và một trường tuy có số trên form nhưng chưa xác nhận. Trường nào audio nhắc sau cùng thì lấy theo audio; trường nào audio nói chưa xác nhận thì không lấy số trên form làm đáp án.',
    visual:'<div class="jp" style="font-size:15px;line-height:1.7"><strong>納品依頼書</strong><table style="border-collapse:collapse;margin-top:8px;min-width:320px"><tr><td style="border:1px solid #999;padding:4px 10px">商品名</td><td style="border:1px solid #999;padding:4px 10px">プリンター PX-200</td></tr><tr><td style="border:1px solid #999;padding:4px 10px">数量</td><td style="border:1px solid #999;padding:4px 10px">20台</td></tr><tr><td style="border:1px solid #999;padding:4px 10px">納品日</td><td style="border:1px solid #999;padding:4px 10px">11月25日水曜日</td></tr><tr><td style="border:1px solid #999;padding:4px 10px">納品先</td><td style="border:1px solid #999;padding:4px 10px">大阪支店</td></tr><tr><td style="border:1px solid #999;padding:4px 10px">金額</td><td style="border:1px solid #999;padding:4px 10px">40万円</td></tr></table></div>',
    lines:[
      '納品依頼書の件でご連絡します。納品日ですが、11月25日水曜日から11月27日金曜日に変更になりました。',
      '分かりました。11月27日金曜日ですね。数量は20台のままでよろしいでしょうか。',
      'はい。数量は20台のままです。なお、金額ですが、見積書はまだお客様の承認を得ていませんので、金額はまだ確定していません。',
      '承知しました。'
    ],
    vi:['Tôi liên hệ về phiếu yêu cầu giao hàng. Ngày giao hàng đã đổi từ thứ Tư ngày 25 tháng 11 sang thứ Sáu ngày 27 tháng 11.', 'Tôi hiểu rồi. Là thứ Sáu ngày 27 tháng 11 phải không ạ. Số lượng vẫn giữ nguyên 20 chiếc phải không ạ?', 'Đúng vậy. Số lượng vẫn là 20 chiếc. Ngoài ra, về số tiền, vì bản báo giá vẫn chưa được khách hàng phê duyệt nên số tiền vẫn chưa được xác nhận chính thức.', 'Tôi đã rõ.']}
},
  segNames: null,
  questions: [
  {n:1, seg:1, q:'製品Aの10月から12月までの合計はいくらですか。', opts:['1,000万円','1,050万円','710万円','1,760万円'], ans:'B', trap:'Tổng của A vs tổng của B vs tổng A+B', explain:'320+350+380=1,050万円; 710万円 là tổng 製品B (210+240+260); 1,760万円 là tổng A+B; 1,000万円 là số tròn nhiễu.'},
  {n:2, seg:1, q:'製品Bの10月と11月の合計はいくらですか。', opts:['450万円','710万円','500万円','470万円'], ans:'A', trap:'Cộng đúng cặp tháng được hỏi', explain:'210+240=450万円; 710万円 là tổng 製品B cả quý (kể cả 12月見込み — không phải hai tháng được hỏi); 500万円 là 240+260 (11月+12月, cặp sai); 470万円 là 210+260 (10月+12月, cặp sai).'},
  {n:3, seg:1, q:'12月の製品Bの数字について正しいものはどれですか。', opts:['12月の数字はない','11月の数字と同じだ','まだ確定していないので、見込みの数字だ','すでに確定している'], ans:'C', trap:'「まだ確定していない」— số tháng 12 của B chưa chốt', explain:'12月の製品Bの数字はまだ確定していない、見込みの数字です — bẫy まだ〜ていない: nghe thấy まだ〜ていない thì ghi ngay “CHƯA + hệ quả”; đáp án D là bẫy “đã xong rồi” mặc định.'},
  {n:4, seg:2, q:'社内研修はいつになりましたか。', opts:['11月26日木曜日午前10時','11月26日木曜日午後3時','11月27日金曜日午後3時','11月27日金曜日午前10時'], ans:'D', trap:'Ngày mới của 研修 vs giờ của 商談', explain:'研修 đổi sang 11月27日金曜日午前10時 (đổi ngày, giữ giờ); 11月26日午前10時 là lịch cũ; 午後3時 là giờ của 商談 cùng ngày cũ — bẫy gắn chéo giờ sự kiện khác.'},
  {n:5, seg:2, q:'商談はどこで行われますか。', opts:['本社5階の会議室B','本社3階の会議室A','本社3階の会議室B','本社5階の会議室A'], ans:'A', trap:'Phòng của 商談 vs phòng của 研修', explain:'商談は本社5階の会議室B; 本社3階の会議室A là nơi tổ chức 研修 — bẫy hoán đổi phòng của hai sự kiện (giữ đúng cặp “sự kiện → phòng”).'},
  {n:6, seg:2, q:'商談の資料について正しいものはどれですか。', opts:['27日に渡すことになった','資料は必要ない','まだ承認を得ていないので、26日は口頭での説明のみ','すでに承認を得ている'], ans:'C', trap:'「まだ承認を得ていない」— tài liệu chưa duyệt', explain:'商談の資料はまだ承認を得ていないので、26日は口頭での説明のみ — bẫy まだ〜ていない gắn với hệ quả + ngày cụ thể (26日); đáp án D là bẫy “đã xong rồi” mặc định.'},
  {n:7, seg:3, q:'大会議室を3日間借りる場合、割引後の利用料はいくらですか。', opts:['8万円','16万円','21万6千円','24万円'], ans:'C', trap:'Giá sau giảm 1割 vs giá gốc 3 ngày', explain:'8万円×3日=24万円, 1割引 → 24×0.9=21万6千円; 24万円 là giá trước giảm; 8万円 là 1 ngày; 16万円 = 8万円×2日.'},
  {n:8, seg:3, q:'プロジェクター2台と合わせて、合計でいくらになりますか。', opts:['23万6千円','21万6千円','26万円','25万6千円'], ans:'A', trap:'Tổng = giá phòng sau giảm + thuê 2 máy chiếu', explain:'21万6千円 + プロジェクター1万円×2台=2万円 → 23万6千円; 26万円 là 24万円 (chưa giảm) + 2万円; 25万6千円 là cộng trùng 2万円 hai lần.'},
  {n:9, seg:3, q:'請求書について正しいものはどれですか。', opts:['発行しないことになった','すでに発行した','利用料と一緒に送った','まだ発行していないので、ご利用後に発行する'], ans:'D', trap:'「まだ発行していない」— hóa đơn chưa phát hành', explain:'請求書はまだ発行していませんので、ご利用後に発行いたします — bẫy まだ〜ていない; đáp án B là bẫy “đã xong rồi” mặc định.'},
  {n:10, seg:4, q:'納品日はいつになりましたか。', opts:['11月26日木曜日','11月28日土曜日','11月27日金曜日','11月25日水曜日'], ans:'C', trap:'Ngày giao mới trong audio vs ngày cũ trên form', explain:'納品日 đổi 11月25日水曜日 → 11月27日金曜日; 11月25日 là ngày cũ trên biểu mẫu (audio ghi đè biểu mẫu); 11月26日・11月28日 không được nhắc tới.'},
  {n:11, seg:4, q:'数量は何台ですか。', opts:['25台','10台','40台','20台'], ans:'D', trap:'Số lượng vs số tiền trên form (nhãn số)', explain:'数量は20台のまま (không đổi); 40 là 金額 (40万円) trên biểu mẫu — bẫy nhãn số: 40 thuộc về 金額, không phải 数量.'},
  {n:12, seg:4, q:'金額について正しいものはどれですか。', opts:['20万円に変更になった','金額は依頼書に書いていない','40万円で確定している','まだ確定していない（見積書はまだ承認を得ていないため）'], ans:'D', trap:'「まだ確定していない」— số tiền chưa chốt dù form ghi 40万円', explain:'見積書はまだお客様の承認を得ていないので、金額はまだ確定していない — bẫy まだ〜ていない hai lớp (見積書 chưa duyệt → 金額 chưa chốt); đáp án C lấy số 40万円 trên biểu mẫu làm số đã chốt — sai vì trạng thái chưa xác nhận.'}
],
  instructions: `<li><strong>40 phút</strong> cho 12 câu nghe + đọc. Đồng hồ bắt đầu chạy khi bạn bấm <em>Bắt đầu làm bài</em>; hết giờ bài tự nộp.</li>
          <li>Bài gồm <strong>4 bộ</strong>, mỗi bộ có một tài liệu để đọc (biểu đồ cột / bảng giá / form) kèm <strong>audio hội thoại</strong> và <strong>cả 3 câu của bộ hiển thị cùng nhau trên một màn hình</strong> ngay dưới tài liệu đó, trong khung làm bài kiểu phòng thi CBT — nghe xong trả lời luôn cả 3 câu, không phải chuyển qua lại từng câu. Bấm <strong>▶ Phát đoạn nghe</strong> ở đầu mỗi bộ — audio MP3 thu sẵn, <strong>không đọc tên người nói</strong>, đúng như phòng thi.</li>
          <li>Bộ 1 là <strong>biểu đồ cột doanh số <span class="jp">製品A / 製品B</span> 10–12月</strong>: viết nhãn từng số ngay khi nghe (A: 320・350・380; B: 210・240・260), cộng từng cặp trước khi nhìn đáp án; chú ý số tháng 12 của B là <span class="jp">見込み</span> (chưa <span class="jp">確定</span>) nên câu 2 chỉ cộng 10月+11月. Bộ 2 là <strong>hai sự kiện gần ngày nhau</strong>: buổi <span class="jp">研修</span> đổi ngày nhưng giữ giờ và phòng, buổi <span class="jp">商談</span> diễn ra chiều ngày cũ — ghi ngay “<span class="jp">研修</span>→11/27 thứ Sáu 10h・3F会議室A”, “<span class="jp">商談</span>→11/26 thứ Năm 15h・5F会議室B”. Bộ 3 là <strong>bảng giá thuê <span class="jp">大会議室</span></strong>: 8<span class="jp">万円</span>×3 ngày=24<span class="jp">万円</span> → giảm 1割 → 21<span class="jp">万</span>6<span class="jp">千円</span>, rồi mới cộng <span class="jp">プロジェクター</span> 2<span class="jp">万円</span>; đừng cộng giá chưa giảm. Bộ 4 là <strong>dạng xoay vòng</strong> — form <span class="jp">納品依頼書</span> + audio sửa trường: ngày giao trên form bị audio đổi, số lượng giữ nguyên (<span class="jp">〜のまま</span>), số tiền chưa <span class="jp">確定</span> dù form có ghi số.</li>
          <li>Cả 4 bộ đều có một câu bẫy <strong><span class="jp">まだ〜ていない</span></strong> — nghe thấy cụm này thì ghi ngay ra nháp “CHƯA + hệ quả” trước khi nhìn 4 lựa chọn; hai lựa chọn kiểu “đã xong rồi” là bẫy mặc định phải loại đầu tiên.</li>
          <li>Ở chế độ <strong>Thi thật</strong>, mỗi bộ chỉ phát <strong>1 lần duy nhất</strong>. Hãy nghe hết bộ rồi mới trả lời 3 câu của bộ đó.</li>
          <li>Dùng cột <strong>Danh sách câu hỏi</strong> bên trái để nhảy tới câu bất kỳ (trang tự cuộn tới câu đó), hoặc phím <kbd>←</kbd> <kbd>→</kbd> để cuộn tới câu trước / câu tiếp. Phím <kbd>A</kbd>–<kbd>D</kbd> chọn đáp án cho câu bạn vừa bấm vào. Mỗi câu chỉ chọn <strong>một</strong> đáp án — chọn đáp án khác sẽ thay đáp án cũ.</li>
          <li>Câu nào chưa chắc, bấm <strong>⚑ Đánh dấu</strong> ở ngay câu đó để quay lại sau.</li>
          <li>Nút <strong>Nộp bài</strong> luôn nằm ở thanh cuối trang (và trong cột bên trái) — bấm vào sẽ hiện hộp xác nhận, bấm <em>Nộp bài</em> trong hộp đó mới chấm điểm. Nộp xong mới hiện đáp án, giải thích tiếng Việt, transcript kèm bản dịch tiếng Việt và sổ lỗi sai.</li>`,
  candidateInfo: { subject: 'BJT 聴読解 — Luyện nghe + đọc Ngày 22', questionInfo: '12 câu · 4 bộ', time: '40 phút', format: '棒グラフ · 予定確認 · 料金表 · 納品依頼書' },
  tips: `<p><strong>Kỹ thuật ghi nhãn số dưới tải nghe:</strong> Bộ 1 — viết nhãn từng số ngay khi nghe (A: 320・350・380; B: 210・240・260), cộng từng cặp trước khi nhìn đáp án; chú ý 12月 của B là 見込み (chưa 確定) nên câu 2 chỉ cộng 10月+11月. Bộ 3 — ghi rõ “8万円×3日=24万円 → 1割引 → 21万6千円” rồi mới cộng プロジェクター 2万円; đừng cộng 24万円 (chưa giảm) với 2万円.</p>
          <p><strong>Kỹ thuật sự kiện → ngày/giờ/phòng:</strong> Bộ 2 — nghe tới sự kiện ghi ngay “研修→11/27 thứ Sáu 10h・3F会議室A (đổi ngày, giữ giờ/phòng)”, “商談→11/26 thứ Năm 15h・5F会議室B”; khi một lựa chọn tái dùng giờ/phòng của sự kiện kia, đó là đáp án nhiễu mặc định.</p>
          <p><strong>Bẫy まだ〜ていない ở dạng Nghe:</strong> cả 4 bộ Ngày 22 đều có 1 câu bẫy — câu 3 (12月 của B chưa 確定 → 見込み), câu 6 (資料 chưa 承認 → 口頭のみ ngày 26), câu 9 (請求書 chưa 発行 → phát hành sau khi sử dụng), câu 12 (見積書 chưa 承認 → 金額 chưa 確定). Nghe thấy まだ〜ていない thì ghi ngay “CHƯA + hệ quả” trước khi nhìn lựa chọn.</p>
          <p><strong>Kỹ thuật audio ghi đè biểu mẫu:</strong> Bộ 4 — biểu mẫu ghi 納品日 11月25日 nhưng audio đổi sang 11月27日; số nào audio nhắc tới sau cùng thì lấy số đó; trường nào audio nói “〜のまま” thì giữ nguyên số trên biểu mẫu (数量 20台); trường nào audio nói chưa 確定 thì không lấy số trên biểu mẫu làm đáp án (金額 40万円).</p>`,
  footerNote: 'Bài Ngày 22 — Luyện 聴読解 (Nghe + Đọc): biểu đồ cột doanh số 製品A・製品B 10–12月, hai sự kiện cùng ngày 研修 + 商談, bảng giá thuê 大会議室 + プロジェクター và form 納品依頼書 + audio sửa trường. Audio là file MP3 thu sẵn, không đọc tên người nói.',
  scoreMessages: [
    {min: 12, text: 'Xuất sắc — sạch cả 12 câu nghe + đọc Ngày 22!'},
    {min: 10, text: 'Rất tốt — gần như sạch bẫy'},
    {min: 8, text: 'Khá chắc tay — còn vài bẫy chi tiết'},
    {min: 5, text: 'Đang vào form — để ý nhãn số, gắn chéo sự kiện và việc chưa xong'},
    {min: 1, text: 'Cần luyện thêm — bẫy nhãn số và gắn chéo vẫn đang thắng'},
    {min: 0, text: 'Nền nghe + đọc đang hổng — nghe lại transcript từng bộ nhé'}
  ]
};
if(!window.EXAM_DAYS) window.EXAM_DAYS = {};
window.EXAM_DAYS[cfg.id] = cfg;
})();
