(function(){
var cfg = {
  id: 'day14',
  type: 'choukai',
  title: 'Ngày 14 — Luyện <span class="jp">聴解</span> (Nghe hiểu)',
  subtitle: '4 bộ · 12 câu · Điện thoại từ khách hàng · Dời lịch: <span class="jp">社内説明会</span> + <span class="jp">商品研修</span> · Tiến độ xuất hàng + <span class="jp">契約書</span> · Thông báo <span class="jp">社内研修の案内</span> · Thứ Hai 09/11/2026',
  timeSeconds: 40*60,
  questionCount: 12,
  segmentCount: 4,
  segLabel: 'Đoạn',
  segments: {
  1: { title:'第1問 — Điện thoại từ khách hàng', mp3:'assets/ngay14-doan1.mp3', desc:'Câu 1–3 · Nghe đoạn hội thoại rồi trả lời cả 3 câu của bộ này. Chú ý: gắn nhãn từng số — đã đặt 100個 / đã gửi 60個 / còn lại 40個; 見積書 vẫn chưa gửi.',
    lines:[
      'お電話ありがとうございます。納期の件ですね。',
      'はい。注文した商品100個のうち、納期を早めたいのですが。',
      '承知いたしました。現在、60個は発送済みで、残りは40個です。',
      '残りの40個は、11月16日月曜日までに届きますか。',
      'はい、11月16日月曜日までにお届けいたします。なお、見積書はまだお送りしていませんので、金額をご確認いただいてからお送りいたします。',
      '分かりました。金額を確認してから、ご連絡します。'
    ],
    vi:['Cảm ơn quý khách đã gọi điện. Về vấn đề thời hạn giao hàng phải không ạ.', 'Vâng. Trong số 100 sản phẩm tôi đã đặt, tôi muốn rút ngắn thời hạn giao hàng.', 'Tôi đã rõ ạ. Hiện tại 60 sản phẩm đã được gửi đi, còn lại 40 sản phẩm.', '40 sản phẩm còn lại có đến được trước thứ Hai ngày 16 tháng 11 không?', 'Vâng, chúng tôi sẽ giao trước thứ Hai ngày 16 tháng 11. Ngoài ra, báo giá chúng tôi vẫn chưa gửi, nên sau khi quý khách xác nhận số tiền chúng tôi mới gửi ạ.', 'Tôi hiểu rồi. Tôi sẽ liên lạc sau khi xác nhận số tiền.']},
  2: { title:'第2問 — Dời lịch: 社内説明会 + 商品研修', mp3:'assets/ngay14-doan2.mp3', desc:'Câu 4–6 · Hai sự kiện cùng ngày 4/12: 社内説明会 đã dời sang buổi sáng, 商品研修 giữ nguyên buổi chiều — đừng ghép chéo giờ. Tài liệu 商品研修 chưa được duyệt nên hôm đó chỉ giải thích 概要.',
    lines:[
      '12月の予定について、変更があるよ。',
      'はい。社内説明会は、12月2日水曜日の午後2時でしたね。',
      'そうだったんだけど、会場の都合で12月4日金曜日の午前11時に変更になった。商品研修は12月4日金曜日の午後4時のままだから、午前と午後で両方できるね。',
      '分かりました。商品研修の資料ですが、まだ承認を得ていないので、当日は概要のみの説明になりますね。',
      'そのとおり。資料は承認が下りてから、参加者に送ることにしよう。'
    ],
    vi:['Về lịch tháng 12, có thay đổi đấy.', 'Vâng. Buổi giới thiệu nội bộ là 2 giờ chiều thứ Tư ngày 2 tháng 12 phải không ạ?', 'Đúng là vậy, nhưng vì lý do hội trường nên đã đổi sang 11 giờ sáng thứ Sáu ngày 4 tháng 12. Buổi đào tạo sản phẩm vẫn giữ nguyên 4 giờ chiều thứ Sáu ngày 4 tháng 12, nên sáng và chiều đều tham gia được cả hai.', 'Tôi đã rõ. Về tài liệu của buổi đào tạo sản phẩm, vì vẫn chưa được phê duyệt nên hôm đó chỉ giải thích phần tổng quan thôi phải không ạ?', 'Đúng vậy. Tài liệu sẽ gửi cho người tham dự sau khi được phê duyệt.']},
  3: { title:'第3問 — Tiến độ xuất hàng + 契約書 chưa ký', mp3:'assets/ngay14-doan3.mp3', desc:'Câu 7–9 · Gắn đúng nhãn từng số: tổng 200個 / đã xuất 120個 / còn lại 80個. 契約書 vẫn chưa ký — sẽ ký ngay khi số tiền được quyết định.',
    lines:[
      '課長、新商品の在庫についてご報告します。全200個のうち、120個はすでに出荷しました。残りは80個です。',
      '残りの80個は、11月19日木曜日までに全部出荷できるかな。',
      'はい。11月19日木曜日までに発送する予定です。なお、契約書はまだ結んでいませんので、金額が決まり次第、契約を結びます。',
      '分かった。では、その内容で進めてくれ。'
    ],
    vi:['Trưởng phòng, tôi xin báo cáo về tồn kho sản phẩm mới. Trong tổng số 200 sản phẩm, 120 sản phẩm đã xuất hàng. Còn lại 80 sản phẩm.', '80 sản phẩm còn lại có xuất hết được trước thứ Năm ngày 19 tháng 11 không?', 'Vâng, dự kiến sẽ gửi đi trước thứ Năm ngày 19 tháng 11. Ngoài ra, hợp đồng vẫn chưa được ký, nên ngay khi số tiền được quyết định chúng tôi sẽ ký hợp đồng.', 'Hiểu rồi. Vậy cứ tiến hành theo nội dung đó nhé.']},
  4: { title:'第4問 — 説明・案内：社内研修の案内 (thông báo 1 người nói)', mp3:'assets/ngay14-doan4.mp3', desc:'Câu 10–12 · Dạng mới 説明・案内 — thông báo 1 người nói: tách rõ ngày tổ chức研修 (9/12) với hạn đăng ký (7/12); 資料 chưa chuẩn bị xong nên phát tại hội trường hôm đó.',
    lines:[
      '皆様にお知らせいたします。',
      '12月9日水曜日に、新入社員向けのビジネスマナー研修を行います。',
      '時間は午前10時から午後3時まで、場所は本社5階の会議室Bです。',
      '参加費は無料です。',
      '申し込みは、12月7日月曜日までにお願いいたします。',
      'なお、資料はまだ用意できていませんので、当日会場でお配りいたします。',
      'ご不明な点がございましたら、総務部までご連絡ください。'
    ],
    vi:['Xin thông báo tới mọi người.', 'Vào thứ Tư ngày 9 tháng 12, chúng tôi sẽ tổ chức khóa đào tạo nghi thức kinh doanh dành cho nhân viên mới.', 'Thời gian từ 10 giờ sáng đến 3 giờ chiều, địa điểm là phòng họp B tầng 5 trụ sở chính.', 'Phí tham dự miễn phí.', 'Vui lòng đăng ký trước thứ Hai ngày 7 tháng 12.', 'Ngoài ra, tài liệu vẫn chưa chuẩn bị xong nên chúng tôi sẽ phát tại hội trường vào hôm đó.', 'Nếu có điểm nào chưa rõ, xin vui lòng liên hệ phòng Tổng vụ.']}
},
  segNames: null,
  questions: [
  {n:1, seg:1, q:'注文した商品は何個ですか。', opts:['40個','60個','100個','160個'], ans:'C', trap:'Số đã đặt vs số đã gửi vs số còn lại', explain:'注文は100個；60個 là số đã発送, 40個 là số còn lại.'},
  {n:2, seg:1, q:'残りの商品はいつまでに届きますか。', opts:['11月12日木曜日','11月16日月曜日','11月19日木曜日','まだ決まっていない'], ans:'B', trap:'Hạn giao phần còn lại', explain:'残り40個は11月16日月曜日までにお届けする.'},
  {n:3, seg:1, q:'見積書について正しいものはどれですか。', opts:['すでに送った','まだ送っていないので、金額を確認してから送る','送らないことになった','商品と一緒に送った'], ans:'B', trap:'「まだ送っていない」— 見積書 chưa gửi', explain:'見積書はまだ送っていないので、金額を確認してから送る.'},
  {n:4, seg:2, q:'社内説明会はいつになりましたか。', opts:['12月2日水曜日の午後2時','12月4日金曜日の午前11時','12月4日金曜日の午後4時','12月2日水曜日の午前11時'], ans:'B', trap:'Lịch cũ vs lịch mới + hai sự kiện cùng ngày', explain:'社内説明会 đổi từ 12月2日水曜日午後2時 sang 12月4日金曜日午前11時；午後4時 cùng ngày là商品研修, không phải説明会.'},
  {n:5, seg:2, q:'商品研修の資料について正しいものはどれですか。', opts:['資料はすでに承認を得ている','資料を持参して詳しく説明する','承認がまだ得られていないので当日は概要のみの説明になる','商品研修は中止になった'], ans:'C', trap:'「まだ承認を得ていない」— chưa được duyệt thì chỉ giải thích 概要', explain:'資料はまだ承認を得ていないので当日は概要のみ；資料 sẽ gửi sau khi承認が下りてから.'},
  {n:6, seg:2, q:'商品研修はいつですか。', opts:['12月4日金曜日の午後4時','12月4日金曜日の午前11時','12月2日水曜日の午後2時','12月2日水曜日の午後4時'], ans:'A', trap:'Ghép chéo giờ của hai sự kiện cùng ngày', explain:'商品研修 giữ nguyên 12月4日金曜日午後4時；午前11時 cùng ngày là社内説明会 đã dời tới.'},
  {n:7, seg:3, q:'出荷済みは何個ですか。', opts:['200個','80個','120個','320個'], ans:'C', trap:'Đã xuất vs còn lại vs tổng số', explain:'全200個のうち出荷済み120個；80 là số còn lại, 200 là tổng số.'},
  {n:8, seg:3, q:'残りの個数は何個ですか。', opts:['200個','120個','80個','40個'], ans:'C', trap:'Gắn đúng số với đúng đối tượng', explain:'残りは80個；120 là số đã出荷, 200 là tổng số.'},
  {n:9, seg:3, q:'契約書について正しいものはどれですか。', opts:['すでに結んだ','まだ結んでいないので、金額が決まり次第、契約を結ぶ','契約しないことになった','出荷と一緒に結んだ'], ans:'B', trap:'「まだ結んでいない」— 契約書 chưa ký', explain:'契約書はまだ結んでいない、金額が決まり次第結ぶ.'},
  {n:10, seg:4, q:'研修はいつ、どこで行われますか。', opts:['12月9日水曜日、午前10時から午後3時まで、本社5階の会議室B','12月9日水曜日、午前10時から午後3時まで、本社3階の会議室A','12月7日月曜日、午前10時から午後3時まで、本社5階の会議室B','12月9日水曜日、午後3時から午後5時まで、本社5階の会議室B'], ans:'A', trap:'Ghép đúng ngày + giờ + địa điểm; 12月7日 là hạn đăng ký', explain:'研修は12月9日水曜日午前10時から午後3時まで、本社5階の会議室B；12月7日 là hạn申し込み, không phải ngày研修.'},
  {n:11, seg:4, q:'申し込みはいつまでですか。', opts:['12月4日金曜日','12月7日月曜日','12月9日水曜日','申し込みは不要'], ans:'B', trap:'Hạn đăng ký vs ngày tổ chức研修', explain:'申し込みは12月7日月曜日まで；12月9日 là ngày研修, 参加費は無料 nhưng vẫn cần申し込み.'},
  {n:12, seg:4, q:'資料について正しいものはどれですか。', opts:['すでに配った','まだ用意できていないので、当日会場で配る','申し込み時に送る','配らないことになった'], ans:'B', trap:'「まだ用意できていない」— 資料 chưa chuẩn bị xong', explain:'資料はまだ用意できていないので当日会場で配る.'}
],
  instructions: `<li><strong>40 phút</strong> cho 12 câu nghe. Đồng hồ bắt đầu chạy khi bạn bấm <em>Bắt đầu làm bài</em>; hết giờ bài tự nộp.</li>
          <li>Bài gồm <strong>4 bộ nghe</strong>, mỗi bộ có 3 câu hỏi và <strong>cả 3 câu của bộ hiển thị cùng nhau trên một màn hình</strong> ngay dưới nút phát của bộ đó, trong khung làm bài kiểu phòng thi CBT — nghe xong trả lời luôn cả 3 câu, không phải chuyển qua lại từng câu. Bấm <strong>▶ Phát đoạn nghe</strong> ở đầu mỗi bộ — audio MP3 thu sẵn, <strong>không đọc tên người nói</strong>, đúng như phòng thi.</li>
          <li>Bộ 1 là <strong>điện thoại từ khách hàng</strong>: gắn nhãn từng con số ngay khi nghe (đã đặt <span class="jp">100個</span> / đã gửi <span class="jp">60個</span> / còn lại <span class="jp">40個</span>) và chú ý <span class="jp">見積書</span> <span class="jp">まだ送っていない</span> — gửi sau khi khách xác nhận số tiền. Bộ 2 là <strong>dời lịch</strong>: <span class="jp">社内説明会</span> và <span class="jp">商品研修</span> cùng ngày 4/12 nhưng khác giờ — ghi cặp “sự kiện → giờ” ra nháp, đừng ghép chéo; tài liệu <span class="jp">商品研修</span> <span class="jp">まだ承認を得ていない</span> nên hôm đó chỉ giải thích <span class="jp">概要</span>. Bộ 3 là <strong>tiến độ xuất hàng</strong> (tổng <span class="jp">200個</span> / đã xuất <span class="jp">120個</span> / còn lại <span class="jp">80個</span>) và <span class="jp">契約書</span> <span class="jp">まだ結んでいない</span> — ký ngay khi số tiền được quyết định. Bộ 4 là <strong>dạng mới <span class="jp">説明・案内</span></strong> — thông báo 1 người nói về <span class="jp">社内研修</span>: tách rõ ngày tổ chức (9/12) với hạn đăng ký (7/12), và <span class="jp">資料</span> <span class="jp">まだ用意できていない</span> nên phát tại hội trường hôm đó.</li>
          <li>Ở chế độ <strong>Thi thật</strong>, mỗi bộ chỉ phát <strong>1 lần duy nhất</strong>. Hãy nghe hết bộ rồi mới trả lời 3 câu của bộ đó.</li>
          <li>Dùng cột <strong>Danh sách câu hỏi</strong> bên trái để nhảy tới câu bất kỳ (trang tự cuộn tới câu đó), hoặc phím <kbd>←</kbd> <kbd>→</kbd> để cuộn tới câu trước / câu tiếp. Phím <kbd>A</kbd>–<kbd>D</kbd> chọn đáp án cho câu bạn vừa bấm vào. Mỗi câu chỉ chọn <strong>một</strong> đáp án — chọn đáp án khác sẽ thay đáp án cũ.</li>
          <li>Câu nào chưa chắc, bấm <strong>⚑ Đánh dấu</strong> ở ngay câu đó để quay lại sau.</li>
          <li>Nút <strong>Nộp bài</strong> luôn nằm ở thanh cuối trang (và trong cột bên trái) — bấm vào sẽ hiện hộp xác nhận, bấm <em>Nộp bài</em> trong hộp đó mới chấm điểm. Nộp xong mới hiện đáp án, giải thích tiếng Việt, transcript kèm bản dịch tiếng Việt và sổ lỗi sai.</li>`,
  candidateInfo: { subject: 'BJT 聴解 — Luyện tập Ngày 14', questionInfo: '12 câu · 4 bộ', time: '40 phút', format: '説明・案内 — thông báo 1 người nói' },
  tips: ``,
  footerNote: 'Bài Ngày 14 — Luyện 聴解 (Nghe hiểu): điện thoại từ khách hàng, dời lịch 社内説明会 + 商品研修, tiến độ xuất hàng và thông báo 社内研修の案内. Audio là file MP3 thu sẵn, không đọc tên người nói.',
  scoreMessages: [
    {min: 12, text: 'Xuất sắc — sạch cả 12 câu nghe Ngày 14!'},
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
