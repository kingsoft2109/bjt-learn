(function(){
var cfg = {
  id: 'day19',
  type: 'choukai',
  title: 'Ngày 19 — Kiểm tra bấm giờ <span class="jp">聴解</span> (Nghe hiểu)',
  subtitle: '4 bộ · 12 câu · Điện thoại: đổi lịch giao hàng + số lượng · Đổi phòng họp + hai sự kiện cùng ngày · Đặt hàng + thanh toán · <span class="jp">留守番電話</span> — lời nhắn thoại (bộ 4 xoay vòng) · Thứ Bảy 14/11/2026',
  timeSeconds: 40*60,
  questionCount: 12,
  segmentCount: 4,
  segLabel: 'Đoạn',
  segments: {
  1: { title:'第1問 — Điện thoại: đổi lịch giao hàng + số lượng', mp3:'assets/ngay19-doan1.mp3', desc:'Câu 1–3 · Nghe đoạn hội thoại rồi trả lời cả 3 câu của bộ này. Chú ý: ngày giao có thay đổi — ghi cặp “ngày cũ → ngày mới” ra nháp và gắn nhãn từng con số (tổng số / giao trước / còn lại giao sau).',
    lines:[
      '納品の件でご連絡します。11月18日水曜日に納品する予定でしたが、都合により、11月20日金曜日に変更させていただきたいのですが。',
      '分かりました。11月20日金曜日ですね。何時ごろになりますか。',
      '午前10時ごろを予定しております。数量は、全部で500個のうち、300個を先に納品し、残りの200個は、11月23日月曜日にお届けします。',
      '承知しました。では、11月20日金曜日の午前10時に300個、よろしくお願いします。'
    ],
    vi:['Tôi gọi điện về việc giao hàng. Dự kiến giao vào thứ Tư ngày 18 tháng 11, nhưng vì lý do riêng nên tôi muốn đổi sang thứ Sáu ngày 20 tháng 11.', 'Tôi hiểu rồi. Là thứ Sáu ngày 20 tháng 11 phải không ạ. Khoảng mấy giờ ạ?', 'Dự kiến khoảng 10 giờ sáng. Về số lượng, trong tổng số 500 sản phẩm, chúng tôi sẽ giao trước 300 sản phẩm, còn 200 sản phẩm còn lại sẽ giao vào thứ Hai ngày 23 tháng 11.', 'Tôi đã rõ. Vậy xin nhờ giao 300 sản phẩm vào 10 giờ sáng thứ Sáu ngày 20 tháng 11.'], en:['I\'m calling about the delivery. It was scheduled for Wednesday, November 18, but due to personal circumstances, I would like to change it to Friday, November 20.', 'I understand. Friday, November 20, is that right? At about what time?', 'It is scheduled for around 10 a.m. As for the quantity, out of a total of 500 products, we will deliver 300 products first, and the remaining 200 products will be delivered on Monday, November 23.', 'Understood. Then please deliver 300 products at 10 a.m. on Friday, November 20.'], ja:['納品の件でお電話しています。11月18日水曜日の予定でしたが、こちらの都合により、11月20日金曜日に変更したいのですが。', '分かりました。11月20日金曜日ですね。何時頃ですか。', '午前10時頃の予定です。数量については、全500製品のうち、まず300製品をお届けし、残りの200製品は11月23日月曜日に納品いたします。', '承知いたしました。それでは、11月20日金曜日午前10時に300製品の納品をお願いいたします。']},
  2: { title:'第2問 — Đổi phòng họp + hai sự kiện cùng ngày', mp3:'assets/ngay19-doan2.mp3', desc:'Câu 4–6 · Hai sự kiện diễn ra cùng một ngày: một sự kiện đổi phòng họp, sự kiện còn lại dùng chính căn phòng cũ — ghi cặp “sự kiện → giờ + phòng” ra nháp, đừng ghép chéo. Chú ý tình trạng tài liệu của buổi giới thiệu sản phẩm.',
    lines:[
      '12月3日木曜日の予定を確認します。',
      'はい。午前10時から営業会議が3階会議室Aでありますね。',
      '営業会議は、午前10時のままですが、会議室が5階会議室Cに変更になりました。商品説明会は、同じ日の午後2時から、3階会議室Aで行います。',
      '分かりました。商品説明会の資料ですが、まだ部長の確認が終わっていませんので、当日は、概要のみの説明になりますね。',
      'そのとおりです。確認が終わり次第、資料を送ります。'
    ],
    vi:['Tôi muốn xác nhận lịch ngày thứ Năm 3 tháng 12.', 'Vâng. Từ 10 giờ sáng có cuộc họp kinh doanh tại phòng họp A tầng 3 phải không ạ.', 'Cuộc họp kinh doanh vẫn giữ nguyên 10 giờ sáng, nhưng phòng họp đã đổi sang phòng họp C tầng 5. Buổi giới thiệu sản phẩm sẽ diễn ra cùng ngày từ 2 giờ chiều tại phòng họp A tầng 3.', 'Tôi đã rõ. Về tài liệu của buổi giới thiệu sản phẩm, vì vẫn chưa được trưởng bộ phận xác nhận nên hôm đó chỉ giải thích phần tổng quan thôi phải không ạ?', 'Đúng vậy. Ngay khi xác nhận xong tôi sẽ gửi tài liệu.'], en:['I would like to confirm the schedule for Thursday, December 3.', 'Yes. There is a business meeting from 10 a.m. in Meeting Room A on the 3rd floor, isn\'t there?', 'The business meeting remains at 10 a.m., but the meeting room has been changed to Meeting Room C on the 5th floor. The product presentation will be held on the same day from 2 p.m. in Meeting Room A on the 3rd floor.', 'Understood. As for the materials for the product presentation, since they have not yet been confirmed by the department manager, on that day you will only explain the overview, is that right?', 'That\'s right. As soon as the confirmation is done, I will send the materials.'], ja:['12月3日木曜日の予定を確認したいのですが。', 'はい。午前10時から3階の会議室Aで営業会議がありますね。', '営業会議は午前10時のままですが、会議室が5階の会議室Cに変更になりました。製品説明会は同日午後2時から3階の会議室Aで行われます。', '承知いたしました。製品説明会の資料については、まだ部長の確認が取れていないため、当日は概要のみの説明になるということですね。', 'そのとおりです。確認が取れ次第、資料をお送りします。']},
  3: { title:'第3問 — Đặt hàng + thanh toán', mp3:'assets/ngay19-doan3.mp3', desc:'Câu 7–9 · Gắn nhãn từng con số ngay khi nghe: số lượng từng mặt hàng, tổng số lượng và tổng số tiền là ba con số khác nhau. Chú ý tình trạng của 請求書 (hóa đơn).',
    lines:[
      'ご注文の件でご連絡します。A商品を200個、B商品を150個、合計350個のご注文ですね。',
      'はい。そのとおりです。代金は、合計で70万円ですね。',
      'はい。なお、お支払いですが、請求書はまだ発行していませんので、納品後に発行いたします。',
      '分かりました。よろしくお願いします。'
    ],
    vi:['Tôi gọi điện về đơn hàng. Quý khách đặt 200 sản phẩm A và 150 sản phẩm B, tổng cộng 350 sản phẩm phải không ạ?', 'Vâng, đúng vậy. Tổng số tiền là 700.000 yên phải không ạ?', 'Vâng. Ngoài ra, về việc thanh toán, hóa đơn vẫn chưa được phát hành nên chúng tôi sẽ phát hành sau khi giao hàng.', 'Tôi hiểu rồi. Xin nhờ anh/chị giúp.'], en:['I\'m calling about the order. You ordered 200 of Product A and 150 of Product B, for a total of 350 products, is that correct?', 'Yes, that\'s right. The total amount is 700,000 yen, isn\'t it?', 'Yes. In addition, regarding payment, the invoice has not yet been issued, so we will issue it after delivery.', 'I understand. Please take care of it.'], ja:['ご注文の件でお電話しております。製品Aを200点、製品Bを150点、合計350点ご注文いただいておりますが、よろしいでしょうか。', 'はい、そのとおりです。合計金額は700,000円ですね。', 'はい。また、お支払いにつきましては、請求書がまだ発行されておりませんので、納品後に発行いたします。', 'わかりました。よろしくお願いいたします。']},
  4: { title:'第4問 — 留守番電話：lời nhắn thoại về buổi 打ち合わせ (dạng xoay vòng)', mp3:'assets/ngay19-doan4.mp3', desc:'Câu 10–12 · Dạng xoay vòng — một người nói để lại lời nhắn thoại (留守番電話): giờ họp có thay đổi; địa điểm đổi hay giữ nguyên phải nghe kỹ 〜のまま; và tài liệu cuộc họp còn một việc ở trạng thái “chưa làm”.',
    lines:[
      '田中です。お世話になっております。11月24日火曜日の打ち合わせの件でご連絡しました。',
      '打ち合わせの時間ですが、午後3時から午後4時に変更になりました。場所は、本社2階の会議室Dのままです。',
      'なお、会議の資料は、まだ部長に送っていません。確認が終わり次第、11月20日金曜日までにメールでお送りします。よろしくお願いいたします。'
    ],
    vi:['Tôi là Tanaka. Cảm ơn anh/chị đã luôn giúp đỡ. Tôi gọi điện về buổi họp ngày thứ Ba 24 tháng 11.', 'Thời gian buổi họp đã đổi từ 3 giờ chiều sang 4 giờ chiều. Địa điểm vẫn là phòng họp D tầng 2 của trụ sở chính.', 'Ngoài ra, tài liệu cuộc họp vẫn chưa gửi cho trưởng bộ phận. Sau khi xác nhận xong, tôi sẽ gửi qua email trước thứ Sáu ngày 20 tháng 11. Xin nhờ anh/chị giúp đỡ.'], en:['This is Tanaka. Thank you for your continued support. I\'m calling about the meeting on Tuesday, November 24.', 'The meeting time has been changed from 3 p.m. to 4 p.m. The venue remains Meeting Room D on the 2nd floor of the head office.', 'In addition, the meeting materials have not yet been sent to the department manager. Once confirmation is done, I will send them by email before Friday, November 20. Thank you for your cooperation.'], ja:['田中です。いつもお世話になっております。11月24日火曜日の会議の件でお電話しております。', '会議の時間が午後3時から午後4時に変更になりました。場所は本社2階の会議室Dのままです。', 'また、会議資料はまだ部長に送っておりません。確認が取れ次第、11月20日金曜日までにメールでお送りします。よろしくお願いいたします。']}
},
  segNames: null,
  questions: [
  {n:1, seg:1, q:'納品日はいつになりましたか。', opts:['11月18日水曜日','11月20日金曜日','11月19日木曜日','11月23日月曜日'], ans:'B', trap:'Ngày giao cũ vs ngày giao mới', explain:'納品 đổi từ 11月18日水曜日 sang 11月20日金曜日; 11月23日月曜日 là ngày giao 200個 còn lại, không phải ngày giao chính.'},
  {n:2, seg:1, q:'11月20日金曜日に納品する数量は何個ですか。', opts:['500個','200個','300個','800個'], ans:'C', trap:'Tổng số vs giao trước vs còn lại', explain:'全部500個のうち300個を先に納品; 200個 là số còn lại giao sau; 500個 là tổng số.'},
  {n:3, seg:1, q:'残りの200個はいつ届きますか。', opts:['11月20日金曜日','11月23日月曜日','11月18日水曜日','まだ決まっていない'], ans:'B', trap:'Ngày giao phần còn lại', explain:'残りの200個は11月23日月曜日にお届けします; 11月20日 là ngày giao 300個 đầu.'},
  {n:4, seg:2, q:'営業会議はどこで行われますか。', opts:['3階会議室A','5階会議室C','3階会議室B','5階会議室A'], ans:'B', trap:'Phòng cũ vs phòng mới + hai sự kiện cùng ngày', explain:'営業会議 giữ giờ 午前10時 nhưng đổi phòng sang 5階会議室C; 3階会議室A là nơi tổ chức 商品説明会 cùng ngày.'},
  {n:5, seg:2, q:'商品説明会はいつですか。', opts:['12月3日木曜日午前10時','12月3日木曜日午後2時','12月4日金曜日午後2時','12月3日木曜日午前11時'], ans:'B', trap:'Ghép chéo giờ của hai sự kiện cùng ngày', explain:'商品説明会は同じ日 (12月3日木曜日) の午後2時から; 午前10時 cùng ngày là 営業会議.'},
  {n:6, seg:2, q:'商品説明会の資料について正しいものはどれですか。', opts:['資料はすでに部長の確認が終わっている','当日は詳しく説明する','まだ部長の確認が終わっていないので当日は概要のみの説明になる','資料は送らないことになった'], ans:'C', trap:'「まだ確認が終わっていない」— tài liệu chưa được 部長 xác nhận', explain:'資料はまだ部長の確認が終わっていないので当日は概要のみ; 確認が終わり次第送る.'},
  {n:7, seg:3, q:'注文の合計は何個ですか。', opts:['200個','150個','350個','500個'], ans:'C', trap:'Số từng mặt hàng vs tổng số lượng', explain:'A商品200個 + B商品150個 = 合計350個; 200個・150個 là số từng mặt hàng.'},
  {n:8, seg:3, q:'代金はいくらですか。', opts:['70万円','35万円','50万円','20万円'], ans:'A', trap:'Tổng tiền của đơn hàng', explain:'代金は合計で70万円; 35万円 là một nửa của 70万円, không xuất hiện trong audio.'},
  {n:9, seg:3, q:'請求書について正しいものはどれですか。', opts:['すでに発行した','発行しないことになった','まだ発行していないので納品後に発行する','代金と一緒に送った'], ans:'C', trap:'「まだ発行していない」— hóa đơn chưa phát hành', explain:'請求書はまだ発行していませんので、納品後に発行いたします.'},
  {n:10, seg:4, q:'打ち合わせは何時に変更になりましたか。', opts:['午後2時','午後3時','午後4時','午前10時'], ans:'C', trap:'Giờ cũ vs giờ mới của buổi họp', explain:'打ち合わせの時間は午後3時から午後4時に変更; 午後3時 là giờ cũ.'},
  {n:11, seg:4, q:'打ち合わせの場所はどこですか。', opts:['本社2階の会議室D','本社3階の会議室D','本社2階の会議室A','まだ決まっていない'], ans:'A', trap:'Địa điểm giữ nguyên (〜のまま)', explain:'場所は本社2階の会議室Dのまま (không đổi); 3階・会議室A không được nhắc tới.'},
  {n:12, seg:4, q:'会議の資料について正しいものはどれですか。', opts:['すでに部長に送った','まだ部長に送っていないので、確認が終わり次第、11月20日金曜日までにメールで送る','送らないことになった','会議の当日に渡す'], ans:'B', trap:'「まだ送っていない」— tài liệu chưa gửi cho 部長', explain:'会議の資料はまだ部長に送っていない; 確認が終わり次第、11月20日金曜日までにメールで送る.'}
],
  instructions: `<li><strong>40 phút</strong> cho 12 câu nghe. Đồng hồ bắt đầu chạy khi bạn bấm <em>Bắt đầu làm bài</em>; hết giờ bài tự nộp.</li>
          <li>Bài gồm <strong>4 bộ nghe</strong>, mỗi bộ có 3 câu hỏi và <strong>cả 3 câu của bộ hiển thị cùng nhau trên một màn hình</strong> ngay dưới nút phát của bộ đó, trong khung làm bài kiểu phòng thi CBT — nghe xong trả lời luôn cả 3 câu, không phải chuyển qua lại từng câu. Bấm <strong>▶ Phát đoạn nghe</strong> ở đầu mỗi bộ — audio MP3 thu sẵn, <strong>không đọc tên người nói</strong>, đúng như phòng thi.</li>
          <li>Bộ 1 là <strong>điện thoại về việc giao hàng</strong>: ngày giao được đề nghị đổi — ghi cặp “ngày cũ → ngày mới” ra nháp ngay khi nghe; số lượng chia làm hai đợt, gắn nhãn từng con số (tổng số / giao trước / còn lại giao sau) kẻo nhầm đợt này sang đợt kia. Bộ 2 là <strong>xác nhận lịch một ngày có hai sự kiện</strong>: một sự kiện đổi phòng họp, sự kiện còn lại diễn ra ở chính căn phòng vừa bỏ trống — ghi cặp “sự kiện → giờ + phòng” cho từng sự kiện, đừng ghép chéo; đồng thời nghe kỹ tình trạng tài liệu của buổi giới thiệu sản phẩm (đã được <span class="jp">部長</span> xác nhận hay chưa). Bộ 3 là <strong>đặt hàng + thanh toán</strong>: hai mặt hàng với hai số lượng khác nhau cộng thành tổng — đừng lấy số của một mặt hàng làm tổng; và nghe kỹ <span class="jp">請求書</span> đang ở trạng thái nào. Bộ 4 là <strong>dạng xoay vòng</strong> — <span class="jp">留守番電話</span>, một người nói để lại lời nhắn về buổi <span class="jp">打ち合わせ</span>: giờ họp có thay đổi (phân biệt giờ cũ / giờ mới), địa điểm thì nghe kỹ cụm <span class="jp">〜のまま</span>, và tài liệu cuộc họp còn một việc ở trạng thái “chưa làm” kèm hạn gửi cụ thể.</li>
          <li>Ở chế độ <strong>Thi thật</strong>, mỗi bộ chỉ phát <strong>1 lần duy nhất</strong>. Hãy nghe hết bộ rồi mới trả lời 3 câu của bộ đó.</li>
          <li>Dùng cột <strong>Danh sách câu hỏi</strong> bên trái để nhảy tới câu bất kỳ (trang tự cuộn tới câu đó), hoặc phím <kbd>←</kbd> <kbd>→</kbd> để cuộn tới câu trước / câu tiếp. Phím <kbd>A</kbd>–<kbd>D</kbd> chọn đáp án cho câu bạn vừa bấm vào. Mỗi câu chỉ chọn <strong>một</strong> đáp án — chọn đáp án khác sẽ thay đáp án cũ.</li>
          <li>Câu nào chưa chắc, bấm <strong>⚑ Đánh dấu</strong> ở ngay câu đó để quay lại sau.</li>
          <li>Nút <strong>Nộp bài</strong> luôn nằm ở thanh cuối trang (và trong cột bên trái) — bấm vào sẽ hiện hộp xác nhận, bấm <em>Nộp bài</em> trong hộp đó mới chấm điểm. Nộp xong mới hiện đáp án, giải thích tiếng Việt, transcript kèm bản dịch tiếng Việt và sổ lỗi sai.</li>`,
  candidateInfo: { subject: 'BJT 聴解 — Kiểm tra bấm giờ Ngày 19', questionInfo: '12 câu · 4 bộ', time: '40 phút', format: '留守番電話 — lời nhắn thoại 1 người nói (xoay vòng)' },
  tips: ``,
  footerNote: 'Bài Ngày 19 — Kiểm tra bấm giờ 聴解 (Nghe hiểu): điện thoại đổi lịch giao hàng + số lượng, đổi phòng họp + hai sự kiện cùng ngày, đặt hàng + thanh toán và lời nhắn thoại 留守番電話 về buổi 打ち合わせ. Audio là file MP3 thu sẵn, không đọc tên người nói.',
  scoreMessages: [
    {min: 12, text: 'Xuất sắc — sạch cả 12 câu nghe Ngày 19!'},
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
