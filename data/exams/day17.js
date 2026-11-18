(function(){
var cfg = {
  id: 'day17',
  type: 'choukai',
  title: 'Ngày 17 — Luyện <span class="jp">聴解</span> (Nghe hiểu)',
  subtitle: '4 bộ · 12 câu · Điện thoại: nhập hàng + <span class="jp">契約書</span> · Dời lịch: <span class="jp">商談</span> + lịch cùng ngày · Chuẩn bị tài liệu họp · Họp chuẩn bị <span class="jp">新製品発表会</span> (bộ 4 xoay vòng) · Thứ Năm 12/11/2026',
  timeSeconds: 40*60,
  questionCount: 12,
  segmentCount: 4,
  segLabel: 'Đoạn',
  segments: {
  1: { title:'第1問 — Điện thoại: nhập hàng + 契約書', mp3:'assets/ngay17-doan1.mp3', desc:'Câu 1–3 · Nghe đoạn hội thoại rồi trả lời cả 3 câu của bộ này. Chú ý: gắn nhãn từng số — tổng 300個 / đã nhập 180個 / còn lại 120個; 契約書 vẫn chưa ký.',
    lines:[
      '入荷の件でご連絡します。全300個のうち、180個はすでに入荷しました。残りは120個です。',
      '残りの120個は、11月26日木曜日までに入荷しますか。',
      'はい。11月26日木曜日までに入荷する予定です。なお、契約書はまだ結んでいませんので、金額が決まり次第、契約を結びます。',
      '分かりました。金額が決まったら、ご連絡します。'
    ],
    vi:['Tôi gọi điện về việc nhập hàng. Trong tổng số 300 sản phẩm, 180 sản phẩm đã nhập rồi. Còn lại 120 sản phẩm.', '120 sản phẩm còn lại có nhập về kịp trước thứ Năm ngày 26 tháng 11 không?', 'Vâng, dự kiến sẽ nhập về trước thứ Năm ngày 26 tháng 11. Ngoài ra, hợp đồng vẫn chưa được ký, nên ngay khi số tiền được quyết định chúng tôi sẽ ký hợp đồng.', 'Tôi hiểu rồi. Khi số tiền được quyết định, tôi sẽ liên lạc.']},
  2: { title:'第2問 — Dời lịch: A社との商談 + 社内研修', mp3:'assets/ngay17-doan2.mp3', desc:'Câu 4–6 · 商談 đã dời sang chiều 19/11, 社内研修 giữ nguyên sáng 19/11 — đừng ghép chéo giờ. Tài liệu研修 chưa được duyệt nên hôm đó chỉ giải thích 概要.',
    lines:[
      '11月の予定について、変更があるよ。',
      'はい。A社との商談は、11月17日火曜日の午前10時でしたね。',
      'そうだったんだけど、先方の都合で11月19日木曜日の午後3時に変更になった。社内研修は11月19日木曜日の午前11時のままだから、午前と午後で両方できるね。',
      '分かりました。研修の資料ですが、まだ承認を得ていないので、当日は概要のみの説明になりますね。',
      'そのとおり。資料は承認が下りてから送ることにしよう。'
    ],
    vi:['Về lịch tháng 11, có thay đổi đấy.', 'Vâng. Buổi thương thảo với công ty A là 10 giờ sáng thứ Ba ngày 17 tháng 11 phải không ạ?', 'Đúng là vậy, nhưng vì lý do của đối tác nên đã đổi sang 3 giờ chiều thứ Năm ngày 19 tháng 11. Buổi đào tạo nội bộ vẫn giữ nguyên 11 giờ sáng thứ Năm ngày 19 tháng 11, nên sáng và chiều đều tham gia được cả hai.', 'Tôi đã rõ. Về tài liệu của buổi đào tạo, vì vẫn chưa được phê duyệt nên hôm đó chỉ giải thích phần tổng quan thôi phải không ạ?', 'Đúng vậy. Tài liệu sẽ gửi sau khi được phê duyệt.']},
  3: { title:'第3問 — Chuẩn bị tài liệu họp', mp3:'assets/ngay17-doan3.mp3', desc:'Câu 7–9 · 25名 × 1人2部 — nhân đúng số bộ tài liệu, đừng lấy số người làm số bộ. 発表会の案内 vẫn chưa gửi cho取引先.',
    lines:[
      '課長、12月1日火曜日の会議の資料について、ご確認させてください。参加者は25名でよろしいでしょうか。',
      'ああ、25名だ。資料は1人2部ずつ用意してくれ。',
      '承知しました。50部ですね。なお、発表会の案内は、まだ取引先に送っていませんので、参加者が決まり次第、送ります。',
      '分かった。では、その内容で進めてくれ。'
    ],
    vi:['Trưởng phòng, xin cho tôi xác nhận về tài liệu của cuộc họp ngày thứ Ba 1 tháng 12. Số người tham gia là 25 người, có đúng không ạ?', 'Ừ, 25 người. Tài liệu chuẩn bị mỗi người 2 bản nhé.', 'Tôi đã rõ ạ. Là 50 bản phải không ạ. Ngoài ra, thông báo về buổi thuyết trình vẫn chưa gửi cho đối tác, nên sau khi chốt được người tham gia chúng tôi sẽ gửi.', 'Hiểu rồi. Vậy cứ tiến hành theo nội dung đó nhé.']},
  4: { title:'第4問 — 会議：新製品発表会の準備 (họp 3 người, dạng xoay vòng)', mp3:'assets/ngay17-doan4.mp3', desc:'Câu 10–12 · Dạng xoay vòng — họp chuẩn bị 新製品発表会： 40名 × 1人3部 = 120部. 最終確認 chưa nhận được từ部長 nên chưa in; 案内 vẫn chưa gửi.',
    lines:[
      '新製品発表会について、確認します。日程はどうなっていますか。',
      'はい。発表会は、11月27日金曜日の午後2時から、会議室Bで予約しております。参加者は40名の予定です。',
      '分かった。資料はどうかな。',
      '資料は、参加者40名分、1人3部で、合計120部用意いたします。なお、最終確認は、まだ部長からいただいていません。',
      'そうか。確認が終わるまでは、印刷は控えてくれ。確認が終わり次第、印刷するように。',
      '承知しました。なお、発表会の案内は、まだ取引先に送っていませんので、参加者が決まり次第、送ります。',
      '分かった。では、その内容で進めてくれ。'
    ],
    vi:['Về buổi giới thiệu sản phẩm mới, tôi muốn xác nhận. Lịch trình thế nào rồi?', 'Vâng. Buổi giới thiệu sẽ diễn ra từ 2 giờ chiều thứ Sáu ngày 27 tháng 11, tại phòng họp B. Dự kiến có 40 người tham gia.', 'Hiểu rồi. Còn tài liệu thì sao?', 'Tài liệu sẽ chuẩn bị cho 40 người tham gia, mỗi người 3 bản, tổng cộng 120 bản. Ngoài ra, việc xác nhận cuối cùng vẫn chưa nhận được từ trưởng bộ phận.', 'Vậy à. Cho đến khi xác nhận xong thì đừng in nhé. Ngay khi xác nhận xong thì in.', 'Tôi đã rõ ạ. Ngoài ra, thông báo về buổi giới thiệu vẫn chưa gửi cho đối tác, nên sau khi chốt được người tham gia chúng tôi sẽ gửi.', 'Hiểu rồi. Vậy cứ tiến hành theo nội dung đó nhé.']}
},
  segNames: null,
  questions: [
  {n:1, seg:1, q:'入荷済みは何個ですか。', opts:['300個','120個','180個','480個'], ans:'C', trap:'Đã nhập vs còn lại vs tổng số', explain:'全300個のうち入荷済み180個；120個 là số còn lại, 300個 là tổng số.'},
  {n:2, seg:1, q:'残りの荷物はいつまでに入荷する予定ですか。', opts:['11月24日火曜日','11月26日木曜日','11月25日水曜日','まだ決まっていない'], ans:'B', trap:'Hạn nhập phần còn lại', explain:'残り120個は11月26日木曜日までに入荷する予定.'},
  {n:3, seg:1, q:'契約書について正しいものはどれですか。', opts:['すでに結んだ','結ばないことになった','まだ結んでいないので、金額が決まり次第結ぶ','契約書はいらない'], ans:'C', trap:'「まだ結んでいない」— 契約書 chưa ký', explain:'契約書はまだ結んでいませんので、金額が決まり次第、契約を結びます — bẫy まだ〜ていない: nghe thấy まだ〜ていない thì ghi ngay "CHƯA + hệ quả".'},
  {n:4, seg:2, q:'A社との商談はいつになりましたか。', opts:['11月17日火曜日の午前10時','11月19日木曜日の午前11時','11月19日木曜日の午後3時','11月17日火曜日の午後3時'], ans:'C', trap:'Lịch cũ vs lịch mới + hai sự kiện cùng ngày', explain:'商談 đổi từ 11月17日火曜日午前10時 sang 11月19日木曜日午後3時；午前11時 cùng ngày là社内研修, không phải商談.'},
  {n:5, seg:2, q:'研修の資料について正しいものはどれですか。', opts:['資料はすでに承認を得ている','当日は詳しく説明する','まだ承認を得ていないので当日は概要のみの説明になる','研修は中止になった'], ans:'C', trap:'「まだ承認を得ていない」— chưa được duyệt thì chỉ giải thích 概要', explain:'資料はまだ承認を得ていないので当日は概要のみ；資料 sẽ gửi sau khi承認が下りてから.'},
  {n:6, seg:2, q:'社内研修はいつですか。', opts:['11月19日木曜日の午前11時','11月19日木曜日の午後3時','11月17日火曜日の午前10時','11月19日木曜日の午後1時'], ans:'A', trap:'Ghép chéo giờ của hai sự kiện cùng ngày', explain:'研修 giữ nguyên 11月19日木曜日午前11時；午後3時 cùng ngày là商談 đã dời tới. Ghi cặp "sự kiện → giờ/ngày" ra nháp ngay khi nghe （商談19日15時・研修19日11時), không giữ trong đầu.'},
  {n:7, seg:3, q:'資料は何部用意することになりましたか。', opts:['25部','50部','2部','75部'], ans:'B', trap:'Số người × số bản mỗi người', explain:'25名 × 1人2部 = 50部；25部 là số người, 2部 là số bản mỗi người.'},
  {n:8, seg:3, q:'会議はいつ、どこで開かれますか。', opts:['12月1日火曜日、本社3階会議室A','12月1日火曜日、本社3階会議室B','12月2日水曜日、本社3階会議室A','12月1日火曜日、本社5階会議室A'], ans:'A', trap:'Ghép đúng ngày + địa điểm của会議', explain:'会議は12月1日火曜日、本社3階会議室A；会議室B・12月2日・本社5階 không được nhắc tới.'},
  {n:9, seg:3, q:'発表会の案内について正しいものはどれですか。', opts:['すでに取引先に送った','案内は送らないことになった','まだ取引先に送っていないので、参加者が決まり次第、送る','会場が決まってから送るかどうか決める'], ans:'C', trap:'「まだ送っていない」— 案内 chưa gửi', explain:'案内はまだ取引先に送っていないので、参加者が決まり次第送る — bẫy "chưa làm" gắn với điều kiện tiếp theo.'},
  {n:10, seg:4, q:'発表会はいつ、どこで開かれますか。', opts:['11月27日金曜日の午後2時から、会議室B','11月27日金曜日の午後2時から、会議室A','11月26日木曜日の午後2時から、会議室B','11月27日金曜日の午前10時から、会議室B'], ans:'A', trap:'Ghép đúng ngày + giờ + phòng họp', explain:'発表会は11月27日金曜日午後2時から会議室B；11月26日 không xuất hiện trong audio, 会議室A không được nhắc tới.'},
  {n:11, seg:4, q:'資料は何部用意することになりましたか。', opts:['40部','120部','3部','160部'], ans:'B', trap:'Số người × số bản mỗi người', explain:'参加者40名 × 1人3部 = 120部；40 là số người, 3 là số bản mỗi người.'},
  {n:12, seg:4, q:'発表会の案内について正しいものはどれですか。', opts:['すでに取引先に送った','案内は送らないことになった','まだ取引先に送っていないので、参加者が決まり次第、送る','参加者が決まってから送るかどうか決める'], ans:'C', trap:'「まだ送っていない」— 案内 chưa gửi', explain:'案内はまだ取引先に送っていないので、参加者が決まり次第送る — bẫy "chưa làm" gắn với điều kiện tiếp theo.'}
],
  instructions: `<li><strong>40 phút</strong> cho 12 câu nghe. Đồng hồ bắt đầu chạy khi bạn bấm <em>Bắt đầu làm bài</em>; hết giờ bài tự nộp.</li>
          <li>Bài gồm <strong>4 bộ nghe</strong>, mỗi bộ có 3 câu hỏi và <strong>cả 3 câu của bộ hiển thị cùng nhau trên một màn hình</strong> ngay dưới nút phát của bộ đó, trong khung làm bài kiểu phòng thi CBT — nghe xong trả lời luôn cả 3 câu, không phải chuyển qua lại từng câu. Bấm <strong>▶ Phát đoạn nghe</strong> ở đầu mỗi bộ — audio MP3 thu sẵn, <strong>không đọc tên người nói</strong>, đúng như phòng thi.</li>
          <li>Bộ 1 là <strong>điện thoại về nhập hàng</strong>: gắn nhãn từng con số ngay khi nghe (tổng <span class="jp">300個</span> / đã nhập <span class="jp">180個</span> / còn lại <span class="jp">120個</span>), hạn nhập phần còn lại là <span class="jp">11月26日木曜日</span> và <span class="jp">契約書</span> <span class="jp">まだ結んでいない</span> — ký ngay khi số tiền được quyết định. Bộ 2 là <strong>dời lịch</strong>: <span class="jp">商談</span> với A社 dời từ <span class="jp">11月17日火曜日午前10時</span> sang <span class="jp">11月19日木曜日午後3時</span>, còn <span class="jp">社内研修</span> giữ nguyên <span class="jp">11月19日木曜日午前11時</span> — ghi cặp “sự kiện → giờ” ra nháp, đừng ghép chéo; tài liệu <span class="jp">研修</span> <span class="jp">まだ承認を得ていない</span> nên hôm đó chỉ giải thích <span class="jp">概要</span>. Bộ 3 là <strong>chuẩn bị tài liệu họp</strong> ngày <span class="jp">12月1日火曜日</span>: <span class="jp">25名</span> × <span class="jp">1人2部</span> = <span class="jp">50部</span> — nhân đúng, đừng lấy số người làm số bộ; <span class="jp">発表会の案内</span> <span class="jp">まだ取引先に送っていない</span>, gửi khi chốt được người tham gia. Bộ 4 là <strong>dạng xoay vòng</strong> — họp 3 người chuẩn bị <span class="jp">新製品発表会</span> ngày <span class="jp">11月27日金曜日午後2時</span> ở <span class="jp">会議室B</span>: tài liệu <span class="jp">40名</span> × <span class="jp">1人3部</span> = <span class="jp">120部</span>, <span class="jp">最終確認</span> <span class="jp">まだ部長からいただいていない</span> nên chưa in, và <span class="jp">案内</span> cũng vẫn chưa gửi.</li>
          <li>Ở chế độ <strong>Thi thật</strong>, mỗi bộ chỉ phát <strong>1 lần duy nhất</strong>. Hãy nghe hết bộ rồi mới trả lời 3 câu của bộ đó.</li>
          <li>Dùng cột <strong>Danh sách câu hỏi</strong> bên trái để nhảy tới câu bất kỳ (trang tự cuộn tới câu đó), hoặc phím <kbd>←</kbd> <kbd>→</kbd> để cuộn tới câu trước / câu tiếp. Phím <kbd>A</kbd>–<kbd>D</kbd> chọn đáp án cho câu bạn vừa bấm vào. Mỗi câu chỉ chọn <strong>một</strong> đáp án — chọn đáp án khác sẽ thay đáp án cũ.</li>
          <li>Câu nào chưa chắc, bấm <strong>⚑ Đánh dấu</strong> ở ngay câu đó để quay lại sau.</li>
          <li>Nút <strong>Nộp bài</strong> luôn nằm ở thanh cuối trang (và trong cột bên trái) — bấm vào sẽ hiện hộp xác nhận, bấm <em>Nộp bài</em> trong hộp đó mới chấm điểm. Nộp xong mới hiện đáp án, giải thích tiếng Việt, transcript kèm bản dịch tiếng Việt và sổ lỗi sai.</li>`,
  candidateInfo: { subject: 'BJT 聴解 — Luyện tập Ngày 17', questionInfo: '12 câu · 4 bộ', time: '40 phút', format: '会議 — họp chuẩn bị 新製品発表会 (xoay vòng)' },
  tips: ``,
  footerNote: 'Bài Ngày 17 — Luyện 聴解 (Nghe hiểu): điện thoại nhập hàng + hợp đồng, dời lịch 商談 + lịch cùng ngày, chuẩn bị tài liệu họp và họp chuẩn bị 新製品発表会. Audio là file MP3 thu sẵn, không đọc tên người nói.',
  scoreMessages: [
    {min: 12, text: 'Xuất sắc — sạch cả 12 câu nghe Ngày 17!'},
    {min: 10, text: 'Rất tốt — gần như sạch bẫy'},
    {min: 8, text: 'Khá chắc tay — còn vài bẫy chi tiết'},
    {min: 5, text: 'Đang vào form — để ý các câu số liệu, lịch đã đổi và việc chưa xong'},
    {min: 1, text: 'Cần luyện thêm — bẫy gắn nhầm số và việc chưa xong vẫn đang thắng'},
    {min: 0, text: 'Nền nghe đang hổng — nghe lại transcript từng bộ nhé'}
  ]
};
if(!window.EXAM_DAYS) window.EXAM_DAYS = {};
window.EXAM_DAYS[cfg.id] = cfg;
})();
