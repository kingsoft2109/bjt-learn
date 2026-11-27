(function(){
var cfg = {
  id: 'day5',
  type: 'choukai',
  title: 'Ngày 5 — Luyện <span class="jp">聴解</span> (Nghe hiểu)',
  subtitle: '4 đoạn · 12 câu · 3 đoạn hội thoại + 1 đoạn thông báo <span class="jp">説明・案内</span> (dạng mới) · Thứ Năm 29/10/2026',
  timeSeconds: 40*60,
  questionCount: 12,
  segmentCount: 4,
  segLabel: 'Đoạn',
  segments: {
  1: { title:'第1問 — In tài liệu cho cuộc họp ngày mai', mp3:'assets/ngay5-doan1.mp3', desc:'Câu 1–3 · Nghe đoạn hội thoại rồi trả lời cả 3 câu của đoạn này. Chú ý: số người × số bản mỗi người.',
    lines:[
      '部長、明日の会議の資料ですが、印刷部数を確認させてください。',
      'ああ、参加者は12名だね。資料は1人2部ずつ必要だ。',
      '承知しました。24部ですね。ただ、経理部から、予算の承認がまだ来ていませんので、カラー印刷は控えたほうがよろしいでしょうか。',
      'そうだね。承認が来るまでは、白黒で印刷しておいてくれ。カラーは承認が来てからでいい。',
      '分かりました。白黒24部で準備いたします。'
    ],
    vi:['Thưa Trưởng phòng, về tài liệu cho cuộc họp ngày mai, cho phép tôi xác nhận số bản in ạ.', 'À, số người tham dự là 12 người nhé. Tài liệu cần mỗi người 2 bộ.', 'Vâng, tôi đã rõ. Vậy là 24 bộ ạ. Tuy nhiên, phê duyệt ngân sách từ phòng Kế toán vẫn chưa về, vậy có nên tạm tránh in màu không ạ?', 'Đúng vậy. Trong lúc chờ phê duyệt, cứ in đen trắng trước giúp tôi. In màu thì để sau khi có phê duyệt cũng được.', 'Vâng, tôi hiểu rồi. Tôi sẽ chuẩn bị 24 bộ đen trắng ạ.'], en:['Manager, regarding the materials for tomorrow\'s meeting, may I confirm the number of copies to print?', 'Ah, the number of participants is 12. Each person needs 2 sets of the materials.', 'Yes, I understand. That makes 24 sets. However, the budget approval from the Accounting Department has not come back yet, so should we avoid color printing for now?', 'That\'s right. While waiting for approval, please print in black and white first. Color printing can be done after approval is obtained.', 'Yes, I understand. I will prepare 24 sets in black and white.'], ja:['課長、明日の会議資料について、印刷部数を確認させてください。', 'ああ、参加者は12人です。資料は1人2部ずつ必要です。', 'はい、分かりました。それでは24部ですね。ただ、経理部からの予算承認がまだ来ていないので、カラー印刷は一時的に避けたほうがよろしいでしょうか。', 'その通りです。承認を待つ間、まず白黒で印刷してください。カラー印刷は承認が下りてからでも構いません。', 'はい、分かりました。白黒で24部準備いたします。']},
  2: { title:'第2問 — Đổi lịch công tác Nagoya', mp3:'assets/ngay5-doan2.mp3', desc:'Câu 4–6 · Chú ý: lịch cũ đã bị thay bằng lịch mới — lấy lịch mới làm chuẩn.',
    lines:[
      '来週の名古屋出張だけど、訪問先の都合で日程が変わったよ。',
      'はい。もともとは火曜日の午前11時でしたね。',
      'そう。新しい日程は水曜日の午後3時になった。ホテルは火曜日の夜から1泊で取ってあったよね。',
      'はい。その場合、ホテルは水曜日の夜に変更する必要がありますね。',
      'そのとおり。あと、資料は月曜日までに完成させておいてくれ。先方から依頼された売上データは、まだ経理部から届いていないそうだ。',
      '承知しました。経理部に今日中に確認いたします。'
    ],
    vi:['Về chuyến công tác Nagoya tuần tới, do lịch phía nơi đến thay đổi nên lịch trình đã thay đổi rồi đấy.', 'Vâng. Ban đầu là 11 giờ sáng thứ Ba đúng không ạ.', 'Đúng vậy. Lịch mới chuyển thành 3 giờ chiều thứ Tư. Khách sạn đã đặt 1 đêm từ tối thứ Ba rồi đúng không?', 'Vâng. Trong trường hợp đó, khách sạn cần đổi sang đêm thứ Tư ạ.', 'Đúng vậy. Ngoài ra, hoàn thành tài liệu trước thứ Hai giúp tôi nhé. Nghe nói dữ liệu doanh số mà phía đối tác yêu cầu vẫn chưa được phòng Kế toán gửi tới.', 'Vâng, tôi đã rõ. Tôi sẽ xác nhận với phòng Kế toán ngay trong hôm nay ạ.'], en:['Regarding next week\'s business trip to Nagoya, the itinerary has changed because the schedule at the destination has changed.', 'Yes. Originally it was Tuesday at 11:00 a.m., is that correct?', 'That\'s right. The new schedule has been changed to Wednesday at 3:00 p.m. The hotel has been booked for 1 night from Tuesday evening, hasn\'t it?', 'Yes. In that case, the hotel needs to be changed to Wednesday night.', 'That\'s right. In addition, please complete the materials before Monday. I hear that the sales data requested by the partner has not yet been sent by the Accounting Department.', 'Yes, I understand. I will check with the Accounting Department right away today.'], ja:['来週の名古屋出張について、訪問先のスケジュールが変わったため、日程が変更になりました。', 'はい。当初は火曜日の午前11時でしたよね。', 'その通りです。新しいスケジュールは水曜日の午後3時に変更になりました。ホテルは火曜日の夜から1泊で予約してありますよね。', 'はい。その場合は、ホテルを水曜日の夜に変更する必要があります。', 'その通りです。それから、月曜日までに資料を完成させてください。先方から依頼された売上データが、経理部からまだ送られていないそうです。', 'はい、分かりました。本日中に経理部に確認いたします。']},
  3: { title:'第3問 — Đơn hàng của A社 và tồn kho', mp3:'assets/ngay5-doan3.mp3', desc:'Câu 7–9 · Chú ý gắn đúng số: đơn hàng, tồn kho, số thiếu và đơn của B社.',
    lines:[
      '課長、A社からの注文についてご報告します。注文は800個です。',
      '在庫は足りているかな。',
      '現在の在庫は500個で、300個不足しています。追加で300個、来週月曜日までに入荷する予定です。',
      '分かった。では、納期は来週火曜日でA社に連絡しておいてくれ。',
      'はい。なお、B社からの注文200個は、別途対応いたしますので、今回の不足には含めておりません。',
      '了解した。'
    ],
    vi:['Thưa Tổ trưởng, tôi xin báo cáo về đơn hàng từ Công ty A. Đơn hàng là 800 cái ạ.', 'Tồn kho có đủ không?', 'Tồn kho hiện tại là 500 cái, đang thiếu 300 cái ạ. Dự kiến 300 cái bổ sung sẽ nhập kho trước thứ Hai tuần tới ạ.', 'Được rồi. Vậy hãy liên lạc với Công ty A rằng thời hạn giao hàng là thứ Ba tuần tới nhé.', 'Vâng. Ngoài ra, đơn hàng 200 cái của Công ty B chúng tôi sẽ xử lý riêng, nên không tính vào số thiếu lần này ạ.', 'Rõ rồi.'], en:['Section Chief, I would like to report on the order from Company A. The order is for 800 units.', 'Is there enough stock?', 'The current stock is 500 units, so we are short by 300 units. The additional 300 units are expected to arrive in stock before next Monday.', 'All right. Then please contact Company A to say that the delivery deadline is next Tuesday.', 'Yes. In addition, we will handle Company B\'s order of 200 units separately, so it is not counted in this shortage.', 'Understood.'], ja:['係長、A社からの注文についてご報告いたします。注文は800個です。', '在庫は足りますか。', '現在の在庫は500個で、300個不足しています。追加の300個は来週月曜日までに入荷する予定です。', '分かりました。それでは、納期は来週火曜日であるとA社に連絡してください。', 'はい。それから、B社の200個の注文は別に対応いたしますので、今回の不足分には含めません。', '分かりました。']},
  4: { title:'第4問 — Thông báo giờ mở cửa nhà ăn （説明・案内）', mp3:'assets/ngay5-doan4.mp3', desc:'Câu 10–12 · Dạng mới 説明・案内: một người đọc thông báo. Chú ý ngày áp dụng 11月1日 và ngoại lệ ngày thứ Sáu.',
    lines:[
      '総務部から、食堂の営業時間についてお知らせします。11月1日から、お昼の営業時間は11時半から13時半までとなります。なお、金曜日は清掃のため、13時で閉店いたしますので、ご注意ください。また、水曜日の日替わり定食は、アプリからの事前予約のみとなり、当日の予約はできません。朝食の営業時間に変更はありません。ご協力をお願いいたします。'
    ],
    vi:['Phòng Hành chính tổng hợp xin thông báo về giờ mở cửa của nhà ăn. Từ ngày 1 tháng 11, giờ mở cửa buổi trưa sẽ là từ 11 giờ 30 đến 13 giờ 30. Lưu ý, vào thứ Sáu, do dọn dẹp nên nhà ăn sẽ đóng cửa lúc 13 giờ. Ngoài ra, suất ăn thay đổi theo ngày (định thực) vào thứ Tư chỉ nhận đặt trước qua ứng dụng, không thể đặt trong ngày. Giờ mở cửa bữa sáng không thay đổi. Rất mong nhận được sự hợp tác của mọi người.'], en:['The General Affairs Department would like to announce the cafeteria\'s opening hours. From November 1, lunch hours will be from 11:30 to 13:30. Please note that on Fridays, due to cleaning, the cafeteria will close at 13:00. In addition, the daily set meal (teishoku) on Wednesdays can only be pre-ordered via the app and cannot be ordered on the day. Breakfast hours remain unchanged. We appreciate everyone\'s cooperation.'], ja:['総務部より食堂の営業時間についてお知らせいたします。11月1日から、昼食の営業時間は11時30分から13時30分までとなります。なお、金曜日は清掃のため、食堂は13時に閉店いたします。また、水曜日の日替わり定食はアプリでの事前注文のみで、当日注文はできません。朝食の営業時間に変更はありません。皆様のご協力をお願いいたします。']}
},
  segNames: null,
  questions: [
  {n:1, seg:1, q:'資料は何部印刷することになりましたか。', opts:['12部','24部','36部','48部'], ans:'B', trap:'Số người vs số bản in', explain:'12名 × 1人2部 = 24部；12部 là số người, không phải số bản in.'},
  {n:2, seg:1, q:'カラー印刷について正しいものはどれですか。', opts:['承認が来たのでカラーで印刷する','カラー印刷は中止になった','承認がまだ来ていないので白黒で印刷する','経理部がカラー印刷を担当する'], ans:'C', trap:'「承認がまだ来ていない」— chưa được duyệt', explain:'予算の承認がまだ来ていないので、白黒で印刷し、カラーは承認が来てから。'},
  {n:3, seg:1, q:'参加者は何名ですか。', opts:['24名','10名','2名','12名'], ans:'D', trap:'Gắn đúng số với đúng đối tượng', explain:'参加者は12名；24 là số bản in, 2 là số bản mỗi người.'},
  {n:4, seg:2, q:'訪問は何曜日の何時に変更になりましたか。', opts:['水曜日の午後3時','火曜日の午前11時','木曜日の午後3時','水曜日の午前11時'], ans:'A', trap:'Lịch cũ vs lịch mới đã thay đổi', explain:'Lịch mới là 水曜日午後3時；火曜日11時 là lịch cũ đã bị thay.'},
  {n:5, seg:2, q:'ホテルは何曜日の夜に変更する必要がありますか。', opts:['火曜日の夜','木曜日の夜','水曜日の夜','月曜日の夜'], ans:'C', trap:'Đêm khách sạn đổi theo lịch thăm', explain:'Vì lịch thăm đổi sang thứ Tư nên khách sạn đổi từ đêm thứ Ba sang đêm thứ Tư.'},
  {n:6, seg:2, q:'売上データについて正しいものはどれですか。', opts:['すでに届いている','月曜日までに届く予定だ','先方が送る必要はない','まだ経理部から届いていない'], ans:'D', trap:'「まだ届いていない」— chưa đến', explain:'先方から依頼された売上データは、まだ経理部から届いていない；cần xác nhận với 経理部 trong hôm nay.'},
  {n:7, seg:3, q:'A社の注文は何個ですか。', opts:['500個','200個','800個','300個'], ans:'C', trap:'Phân biệt số của A社 / B社 / tồn kho', explain:'注文は800個；500 là tồn kho, 300 là số thiếu, 200 là đơn B社 riêng.'},
  {n:8, seg:3, q:'不足しているのは何個ですか。', opts:['300個','200個','500個','800個'], ans:'A', trap:'Số thiếu = đơn hàng − tồn kho', explain:'在庫500個に対して注文800個なので不足300個；300個追加 sẽ nhập về trước thứ Hai tuần sau.'},
  {n:9, seg:3, q:'A社への納期はいつですか。', opts:['来週月曜日','来週水曜日','今週金曜日','来週火曜日'], ans:'D', trap:'Ngày nhập hàng vs ngày giao hàng', explain:'納期は来週火曜日；thứ Hai là hạn nhập hàng bổ sung, không phải ngày giao.'},
  {n:10, seg:4, q:'このお知らせの目的は何ですか。', opts:['食堂の営業時間の変更を知らせる','新しいメニューを紹介する','アプリの使い方を説明する','清掃の担当者を募集する'], ans:'A', trap:'Mục đích chính của thông báo', explain:'Thông báo nhằm báo thay đổi giờ mở cửa nhà ăn từ 1/11.'},
  {n:11, seg:4, q:'金曜日の昼食は何時までですか。', opts:['13時半','13時','11時半','14時'], ans:'B', trap:'Giờ đóng cửa riêng ngày thứ Sáu', explain:'Thứ Sáu đóng cửa 13:00 để dọn dẹp; 13時半 là giờ đóng cửa ngày thường — bẫy nghe nhầm.'},
  {n:12, seg:4, q:'水曜日の日替わり定食について正しいものはどれですか。', opts:['当日でも予約できる','アプリで前もって予約する必要がある','水曜日は食べられない','金曜日だけ予約できる'], ans:'B', trap:'「事前予約のみ」— chỉ đặt trước qua app', explain:'Suất đặc biệt thứ Tư chỉ nhận đặt trước qua ứng dụng, không đặt trong ngày.'}
],
  instructions: `<li><strong>Khoảng 40 phút</strong> cho 12 câu nghe. Đồng hồ bắt đầu chạy khi bạn bấm <em>Bắt đầu làm bài</em>; hết giờ bài tự nộp.</li>
          <li>Bài gồm <strong>4 đoạn nghe</strong>, mỗi đoạn có 3 câu hỏi và <strong>cả 3 câu của đoạn hiển thị cùng nhau</strong> ngay dưới nút phát của đoạn đó, trong khung làm bài kiểu phòng thi CBT — nghe xong trả lời luôn cả 3 câu, không phải chuyển qua lại từng câu. Bấm <strong>▶ Phát đoạn nghe</strong> ở đầu mỗi đoạn — audio MP3 thu sẵn, <strong>không đọc tên người nói</strong>, đúng như phòng thi.</li>
          <li>Đoạn 1–3 là hội thoại nghiệp vụ (số bản in, đổi lịch công tác, đơn hàng &amp; tồn kho) — chú ý <strong>gắn đúng số với đúng đối tượng</strong> và phân biệt <strong>thông tin cũ đã bị thay</strong> với thông tin mới. Đoạn 4 là dạng mới <strong><span class="jp">説明・案内</span></strong>: một người đọc thông báo về giờ mở cửa nhà ăn — chú ý ngày áp dụng và các ngoại lệ theo thứ trong tuần.</li>
          <li>Ở chế độ <strong>Thi thật</strong>, mỗi đoạn chỉ phát <strong>1 lần duy nhất</strong>. Hãy nghe hết đoạn rồi mới trả lời 3 câu của đoạn đó.</li>
          <li>Dùng cột <strong>Danh sách câu hỏi</strong> bên trái để nhảy tới câu bất kỳ (trang tự cuộn tới câu đó), hoặc phím <kbd>←</kbd> <kbd>→</kbd> để cuộn tới câu trước / câu tiếp. Phím <kbd>A</kbd>–<kbd>D</kbd> chọn đáp án cho câu bạn vừa bấm vào.</li>
          <li>Câu nào chưa chắc, bấm <strong>⚑ Đánh dấu</strong> ở ngay câu đó để quay lại sau.</li>
          <li>Nút <strong>Nộp bài</strong> luôn nằm ở thanh cuối trang (và trong cột bên trái) — bấm vào sẽ hiện hộp xác nhận, bấm <em>Nộp bài</em> trong hộp đó mới chấm điểm. Nộp xong mới hiện đáp án, giải thích tiếng Việt, transcript và sổ lỗi sai.</li>`,
  candidateInfo: { subject: 'BJT 聴解 — Luyện tập Ngày 5', questionInfo: '12 câu · 4 đoạn', time: '~40 phút', format: '説明・案内 — thông báo của một người nói' },
  tips: ``,
  footerNote: 'Bài Ngày 5 — Luyện 聴解 (Nghe hiểu): 3 đoạn hội thoại + 1 đoạn thông báo 説明・案内. Audio là file MP3 thu sẵn, không đọc tên người nói.',
  scoreMessages: [
    {min: 12, text: 'Xuất sắc — sạch cả 12 câu, cả dạng thông báo mới!'},
    {min: 10, text: 'Rất tốt — gần như sạch bẫy'},
    {min: 8, text: 'Khá chắc tay — còn vài bẫy chi tiết'},
    {min: 5, text: 'Đang vào form — để ý các câu số liệu và lịch đã đổi'},
    {min: 1, text: 'Cần luyện thêm — bẫy gắn nhầm số vẫn đang thắng'},
    {min: 0, text: 'Nền nghe đang hổng — nghe lại transcript từng đoạn nhé'}
  ]
};
if(!window.EXAM_DAYS) window.EXAM_DAYS = {};
window.EXAM_DAYS[cfg.id] = cfg;
})();
