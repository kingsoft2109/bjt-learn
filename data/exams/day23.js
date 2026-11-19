(function(){
var cfg = {
  id: 'day23',
  type: 'choukai',
  title: 'Ngày 23 — Luyện <span class="jp">聴解</span> (Nghe hiểu)',
  subtitle: '4 bộ · 12 câu · <span class="jp">社内研修</span>の参加者と資料 · Hai sự kiện: <span class="jp">社内説明会 + 商品研修</span> · <span class="jp">出荷</span>の進捗 · Họp 3 người: <span class="jp">新製品の発売</span> (bộ 4 xoay vòng) · Thứ Năm 19/11/2026',
  timeSeconds: 40*60,
  questionCount: 12,
  segmentCount: 4,
  segLabel: 'Đoạn',
  segments: {
  1: { title:'第1問 — 社内研修の参加者と資料', mp3:'assets/ngay23-doan1.mp3', desc:'Câu 1–3 · Báo cáo về buổi 研修 nhân viên mới ngày 3/12: 30 người tham gia, tài liệu mỗi người 3 bộ; hội trường đổi từ tầng 2 lên tầng 4; bản xác nhận cuối của tài liệu đang ở trạng thái nào. Gắn nhãn từng con số (số người × số bộ) trước khi nhân.',
    lines:[
      '課長、12月3日木曜日の新入社員研修について、ご報告します。参加者は30名で、資料は1人3部ずつ用意いたします。',
      '30名で、1人3部だと、全部で90部だね。',
      'はい。90部です。なお、研修の会場ですが、本社2階の研修室から、本社4階の大会議室に変更になりました。',
      '分かった。資料の最終確認はどうなっているかな。',
      '資料の最終確認は、まだ部長からいただいていません。確認が終わり次第、印刷いたします。'
    ],
    vi:['Thưa trưởng phòng, tôi xin báo cáo về buổi đào tạo nhân viên mới vào thứ Năm ngày 3 tháng 12. Số người tham gia là 30 người, tài liệu sẽ chuẩn bị mỗi người 3 bộ.','30 người, mỗi người 3 bộ thì tổng cộng là 90 bộ nhỉ.','Vâng, 90 bộ ạ. À, về địa điểm buổi đào tạo, đã đổi từ phòng đào tạo ở tầng 2 trụ sở chính sang phòng họp lớn ở tầng 4 trụ sở chính ạ.','Hiểu rồi. Việc xác nhận cuối cùng về tài liệu thì thế nào rồi?','Bản xác nhận cuối cùng của tài liệu thì tôi vẫn chưa nhận được từ trưởng bộ phận ạ. Ngay khi xác nhận xong, tôi sẽ cho in ạ.']},
  2: { title:'第2問 — Hai sự kiện: 社内説明会 + 商品研修', mp3:'assets/ngay23-doan2.mp3', desc:'Câu 4–6 · 説明会 đổi cả ngày lẫn giờ (12/4 11:00 → 12/3 14:00) nhưng giữ nguyên phòng; 商品研修 vẫn chiều 12/4 ở tầng 5. Gạch bỏ cả hàng cũ của sự kiện bị đổi lịch, viết lại hàng mới đầy đủ (ngày + giờ + phòng) kẻo gắn chéo thuộc tính giữa hai sự kiện.',
    lines:[
      '12月4日金曜日の予定を確認します。',
      'はい。午前11時から社内説明会が本社3階の会議室Aでありますね。',
      '説明会は、12月3日木曜日の午後2時に変更になりました。場所は、本社3階の会議室Aのままです。商品研修は、12月4日金曜日の午後4時から、本社5階の会議室Bで行います。',
      '分かりました。研修の案内ですが、まだ全員に送っていませんので、今日中に送りますね。',
      'よろしくお願いします。'
    ],
    vi:['Tôi xác nhận lịch trình thứ Sáu ngày 4 tháng 12 nhé.','Vâng. Từ 11 giờ sáng có buổi thuyết minh nội bộ ở phòng họp A tầng 3 trụ sở chính đúng không ạ.','Buổi thuyết minh đã đổi sang 14 giờ thứ Năm ngày 3 tháng 12. Địa điểm vẫn giữ nguyên là phòng họp A tầng 3 trụ sở chính. Buổi đào tạo sản phẩm sẽ diễn ra từ 16 giờ thứ Sáu ngày 4 tháng 12 tại phòng họp B tầng 5 trụ sở chính.','Tôi hiểu rồi ạ. Về thông báo buổi đào tạo, tôi vẫn chưa gửi cho tất cả mọi người, nên sẽ gửi trong hôm nay ạ.','Nhờ cậu nhé.']},
  3: { title:'第3問 — 出荷の進捗', mp3:'assets/ngay23-doan3.mp3', desc:'Câu 7–9 · Báo cáo tiến độ xuất hàng: tổng 60台, đã xuất 45台 — còn lại bao nhiêu, hạn gửi là khi nào; 請求書 đang ở trạng thái nào. Lấy tổng trừ đã xuất, đừng lấy nhầm số đã xuất làm số còn lại.',
    lines:[
      '課長、出荷の進捗についてご報告します。全60台のうち、45台が出荷済みです。残りは15台です。',
      '11月27日金曜日までに全部出荷できるかな。',
      'はい。残りの15台は、11月27日金曜日までに発送する予定です。なお、請求書はまだ発行していませんので、納品後に発行いたします。',
      '分かった。では、その内容で進めてくれ。'
    ],
    vi:['Thưa trưởng phòng, tôi xin báo cáo tiến độ xuất hàng. Trong tổng số 60 chiếc, 45 chiếc đã xuất xong. Còn lại là 15 chiếc ạ.','Đến thứ Sáu ngày 27 tháng 11 có xuất hết được không?','Vâng. 15 chiếc còn lại dự kiến sẽ gửi đi trước thứ Sáu ngày 27 tháng 11. À, hóa đơn thì vẫn chưa phát hành, nên sẽ phát hành sau khi giao hàng ạ.','Hiểu rồi. Vậy cứ tiến hành theo nội dung đó nhé.']},
  4: { title:'第4問 — Họp 3 người: 新製品の発売', mp3:'assets/ngay23-doan4.mp3', desc:'Câu 10–12 · Dạng xoay vòng — họp 3 người về phát hành sản phẩm mới: ngày phát hành 12/10, giá 8,000円/台 và số lượng sản xuất đợt đầu 1,000台 là ba nhãn số hoàn toàn khác nhau; 広告 chưa nhận được xác nhận cuối.',
    lines:[
      '新製品の発売について、確認します。発売日はどうなっていますか。',
      'はい。発売日は、12月10日木曜日です。価格は、1台8,000円です。',
      '初回の生産台数は、1,000台の予定です。なお、広告の最終確認は、まだ部長からいただいていません。',
      '分かった。広告は、確認が終わり次第、出すことにしよう。発売日の変更はないね。',
      'はい。発売日は、12月10日木曜日のままです。'
    ],
    vi:['Tôi xác nhận về việc phát hành sản phẩm mới nhé. Ngày phát hành thế nào rồi?','Vâng. Ngày phát hành là thứ Năm ngày 10 tháng 12. Giá là 8.000 yên một chiếc ạ.','Số lượng sản xuất đợt đầu dự kiến là 1.000 chiếc. À, bản xác nhận cuối cùng của quảng cáo thì vẫn chưa nhận được từ trưởng bộ phận ạ.','Hiểu rồi. Quảng cáo thì ngay khi xác nhận xong sẽ đăng nhé. Ngày phát hành không thay đổi chứ?','Vâng. Ngày phát hành vẫn giữ nguyên là thứ Năm ngày 10 tháng 12 ạ.']}
  },
  segNames: null,
  questions: [
  {n:1, seg:1, q:'資料は全部で何部用意しますか。', opts:['30部','60部','90部','120部'], ans:'C', trap:'Nhân số người × số bộ mỗi người', explain:'参加者は30名、資料は1人3部 → 30×3=90部; 60部 là 30×2 (nhân nhầm số bộ); 120部 là 30×4.'},
  {n:2, seg:1, q:'研修の会場はどこに変更になりましたか。', opts:['本社2階の研修室','本社4階の大会議室','本社3階の会議室A','本社5階の会議室B'], ans:'B', trap:'Địa điểm mới vs địa điểm cũ', explain:'会場 đổi 本社2階の研修室 → 本社4階の大会議室; A là địa điểm cũ; C/D là phòng của hai sự kiện ở bộ 2.'},
  {n:3, seg:1, q:'資料の最終確認について正しいものはどれですか。', opts:['すでに部長からいただいている','まだ部長からいただいていないので、確認が終わり次第印刷する','印刷はもう終わった','確認は必要ない'], ans:'B', trap:'「まだいただいていない」— chưa nhận xác nhận cuối', explain:'資料の最終確認はまだ部長からいただいていません — bẫy まだ〜ていない: chưa nhận xác nhận thì chưa in; hệ quả là 確認が終わり次第印刷する. Đáp án A là bẫy “đã xong rồi” mặc định.'},
  {n:4, seg:2, q:'社内説明会はいつになりましたか。', opts:['12月4日金曜日午前11時','12月4日金曜日午後4時','12月3日木曜日午後2時','12月3日木曜日午前11時'], ans:'C', trap:'Ngày giờ mới của 説明会 vs giờ của 商品研修', explain:'説明会 đổi sang 12月3日木曜日午後2時 (đổi cả ngày lẫn giờ, giữ phòng); 12月4日午前11時 là lịch cũ; 午後4時 là giờ của 商品研修 — bẫy gắn chéo.'},
  {n:5, seg:2, q:'商品研修はどこで行われますか。', opts:['本社5階の会議室B','本社3階の会議室A','本社5階の会議室A','本社3階の会議室B'], ans:'A', trap:'Phòng của 商品研修 vs phòng của 説明会', explain:'商品研修は本社5階の会議室B; 本社3階の会議室A là phòng của 説明会 — bẫy hoán đổi phòng giữa hai sự kiện.'},
  {n:6, seg:2, q:'研修の案内について正しいものはどれですか。', opts:['すでに全員に送った','まだ全員に送っていないので、今日中に送る','送らないことになった','説明会の案内と一緒に送った'], ans:'B', trap:'「まだ送っていない」— thông báo chưa gửi hết', explain:'研修の案内はまだ全員に送っていないので、今日中に送ります — bẫy まだ〜ていない gắn với hệ quả + mốc thời gian cụ thể (今日中).'},
  {n:7, seg:3, q:'残りの出荷台数は何台ですか。', opts:['45台','60台','15台','105台'], ans:'C', trap:'Số còn lại vs số đã xuất vs tổng số', explain:'全60台のうち45台が出荷済み → 残りは60−45=15台; 45台 là số đã xuất xong; 105台 là cộng tổng với đã xuất (60+45).'},
  {n:8, seg:3, q:'残りの出荷はいつまでに発送しますか。', opts:['11月27日金曜日','11月30日月曜日','12月1日火曜日','12月2日水曜日'], ans:'A', trap:'Hạn gửi của phần còn lại', explain:'残りの15台は11月27日金曜日までに発送する予定です — hạn này được trưởng phòng nêu và nhân viên xác nhận lại.'},
  {n:9, seg:3, q:'請求書について正しいものはどれですか。', opts:['すでに発行した','発行しないことになった','まだ発行していないので、納品後に発行する','出荷と一緒に送った'], ans:'C', trap:'「まだ発行していない」— hóa đơn chưa phát hành', explain:'請求書はまだ発行していませんので、納品後に発行いたします — bẫy まだ〜ていない; đáp án A là bẫy “đã xong rồi” mặc định.'},
  {n:10, seg:4, q:'新製品の発売日はいつですか。', opts:['12月1日火曜日','12月3日木曜日','12月10日木曜日','12月4日金曜日'], ans:'C', trap:'Ngày phát hành vs ngày của các sự kiện khác', explain:'発売日は12月10日木曜日 (xác nhận cuối buổi: 日木曜日のまま — không đổi); 12月3日・12月4日 là ngày của các sự kiện ở bộ 1 và bộ 2.'},
  {n:11, seg:4, q:'初回の生産台数は何台ですか。', opts:['800台','1,000台','8,000台','100台'], ans:'B', trap:'Số lượng sản xuất vs giá tiền (nhãn số)', explain:'初回の生産台数は1,000台; 8,000 là 価格 (8,000円/台) — bẫy nhãn số: 8,000 thuộc về giá, không phải số lượng.'},
  {n:12, seg:4, q:'広告について正しいものはどれですか。', opts:['すでに部長から最終確認をいただいた','最終確認はまだいただいていないので、確認が終わり次第出す','広告は出さないことになった','発売日と一緒に変更になった'], ans:'B', trap:'「まだいただいていない」— quảng cáo chưa được xác nhận cuối', explain:'広告の最終確認はまだ部長からいただいていません — bẫy まだ〜ていない; hệ quả: 確認が終わり次第、出す. Đáp án A là bẫy “đã xong rồi” mặc định.'}
],
  instructions: `<li><strong>40 phút</strong> cho 12 câu nghe. Đồng hồ bắt đầu chạy khi bạn bấm <em>Bắt đầu làm bài</em>; hết giờ bài tự nộp.</li>
          <li>Bài gồm <strong>4 bộ nghe</strong>, mỗi bộ có 3 câu hỏi và <strong>cả 3 câu của bộ hiển thị cùng nhau trên một màn hình</strong> ngay dưới nút phát của bộ đó, trong khung làm bài kiểu phòng thi CBT — nghe xong trả lời luôn cả 3 câu, không phải chuyển qua lại từng câu. Bấm <strong>▶ Phát đoạn nghe</strong> ở đầu mỗi bộ — audio MP3 thu sẵn, <strong>không đọc tên người nói</strong>, đúng như phòng thi.</li>
          <li>Bộ 1 là <strong>báo cáo <span class="jp">研修</span></strong>: 30 người × 3 bộ — nhân ngay khi nghe; hội trường đổi từ tầng 2 lên tầng 4, ghi cặp “nơi cũ → nơi mới”. Bộ 2 là <strong>hai sự kiện</strong>: buổi <span class="jp">説明会</span> đổi cả ngày lẫn giờ nhưng giữ phòng, buổi <span class="jp">商品研修</span> vẫn chiều ngày cũ — ghi lưới 2 hàng “sự kiện → ngày/giờ/phòng”, sự kiện nào đổi lịch thì gạch cả hàng cũ và viết lại hàng mới. Bộ 3 là <strong>tiến độ <span class="jp">出荷</span></strong>: tổng 60<span class="jp">台</span>, đã xuất 45<span class="jp">台</span> — còn lại = tổng − đã xuất. Bộ 4 là <strong>dạng xoay vòng</strong> — họp 3 người về <span class="jp">新製品</span>: ngày phát hành, giá 1<span class="jp">台</span> và số lượng sản xuất đợt đầu là 3 nhãn số khác nhau, gắn nhãn từng con số ngay khi nghe.</li>
          <li>Cả 4 bộ đều có một câu bẫy <strong><span class="jp">まだ〜ていない</span></strong> — nghe thấy cụm này thì ghi ngay ra nháp “CHƯA + hệ quả” trước khi nhìn 4 lựa chọn; hai lựa chọn kiểu “đã xong rồi” là bẫy mặc định phải loại đầu tiên.</li>
          <li>Ở chế độ <strong>Thi thật</strong>, mỗi bộ chỉ phát <strong>1 lần duy nhất</strong>. Hãy nghe hết bộ rồi mới trả lời 3 câu của bộ đó.</li>
          <li>Dùng cột <strong>Danh sách câu hỏi</strong> bên trái để nhảy tới câu bất kỳ (trang tự cuộn tới câu đó), hoặc phím <kbd>←</kbd> <kbd>→</kbd> để cuộn tới câu trước / câu tiếp. Phím <kbd>A</kbd>–<kbd>D</kbd> chọn đáp án cho câu bạn vừa bấm vào. Mỗi câu chỉ chọn <strong>một</strong> đáp án — chọn đáp án khác sẽ thay đáp án cũ.</li>
          <li>Câu nào chưa chắc, bấm <strong>⚑ Đánh dấu</strong> ở ngay câu đó để quay lại sau.</li>
          <li>Nút <strong>Nộp bài</strong> luôn nằm ở thanh cuối trang (và trong cột bên trái) — bấm vào sẽ hiện hộp xác nhận, bấm <em>Nộp bài</em> trong hộp đó mới chấm điểm. Nộp xong mới hiện đáp án, giải thích tiếng Việt, transcript kèm bản dịch tiếng Việt và sổ lỗi sai.</li>`,
  candidateInfo: { subject: 'BJT 聴解 — Luyện nghe Ngày 23', questionInfo: '12 câu · 4 bộ', time: '40 phút', format: '社内研修 · 予定確認 · 出荷進捗 · 新製品会議（3人）' },
  tips: `<p><strong>Kỹ thuật gạch hàng cũ, viết lại hàng mới:</strong> Bộ 2 — khi một sự kiện đổi lịch, gạch bỏ CẢ hàng cũ của nó rồi viết lại hàng mới đầy đủ (ngày + giờ + phòng) ngay khi nghe; khi trả lời, chỉ đọc đúng hàng của sự kiện được hỏi. Bộ 4 — ba con số 12月10日 / 8,000円 / 1,000台 thuộc ba nhãn khác nhau (ngày / giá / số lượng); viết nhãn trước rồi mới điền số.</p>
<p><strong>Bẫy <span class="jp">まだ〜ていない</span>:</strong> cả 4 bộ đều có một việc “chưa xong” kèm hệ quả cụ thể （確認が終わり次第印刷 / 今日中に送る / 納品後に発行 / 確認が終わり次第出す) — nghe thấy cụm này thì ghi ngay “CHƯA + hệ quả” ra nháp trước khi nhìn đáp án.</p>`,
  footerNote: 'Bài Ngày 23 — Luyện 聴解 (Nghe hiểu): báo cáo 社内研修 (30名×3部=90部, hội trường đổi lên tầng 4), hai sự kiện 説明会 + 商品研修, tiến độ 出荷 (60台−45台=15台) và họp 3 người về 新製品の発売. Audio là file MP3 thu sẵn, không đọc tên người nói.',
  scoreMessages: [
    {min: 12, text: 'Xuất sắc — sạch cả 12 câu nghe Ngày 23!'},
    {min: 10, text: 'Rất tốt — gần như sạch bẫy'},
    {min: 8, text: 'Khá chắc tay — còn vài bẫy chi tiết'},
    {min: 5, text: 'Đang vào form — để ý nhãn số, gắn chéo sự kiện và việc chưa xong'},
    {min: 1, text: 'Cần luyện thêm — bẫy nhãn số và gắn chéo vẫn đang thắng'},
    {min: 0, text: 'Nền nghe đang hổng — nghe lại transcript từng bộ nhé'}
  ]
};
if(!window.EXAM_DAYS) window.EXAM_DAYS = {};
window.EXAM_DAYS[cfg.id] = cfg;
})();
