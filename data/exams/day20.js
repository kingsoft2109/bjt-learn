(function(){
var cfg = {
  id: 'day20',
  type: 'choukai',
  title: 'Ngày 20 — Luyện <span class="jp">聴解</span> (Nghe hiểu)',
  subtitle: '4 bộ · 12 câu · Điện thoại: đổi giờ <span class="jp">打ち合わせ</span> + số người tham dự · Hai sự kiện cùng ngày: <span class="jp">研修 + 懇親会</span> · <span class="jp">会議室の利用料 + 備品レンタル</span> · <span class="jp">説明・案内</span> — thông báo <span class="jp">社内研修</span> (bộ 4 xoay vòng) · Thứ Hai 16/11/2026',
  timeSeconds: 40*60,
  questionCount: 12,
  segmentCount: 4,
  segLabel: 'Đoạn',
  segments: {
  1: { title:'第1問 — Điện thoại: đổi giờ 打ち合わせ + số người tham dự', mp3:'assets/ngay20-doan1.mp3', desc:'Câu 1–3 · Nghe đoạn hội thoại rồi trả lời cả 3 câu của bộ này. Chú ý: giờ họp có thay đổi — ghi cặp “giờ cũ → giờ mới” ra nháp; số người tham dự có ba con số khác nhau (tổng số / đã xác nhận / chưa trả lời), gắn nhãn từng con số.',
    lines:[
      '11月24日火曜日の打ち合わせの件でご連絡します。打ち合わせの時間ですが、午後2時から午後3時に変更になりました。',
      '分かりました。11月24日火曜日の午後3時ですね。参加者は何名になりますか。',
      '全部で25名のうち、18名は参加が決まっています。残りの7名は、まだ返事が来ていません。',
      '承知しました。では、11月24日火曜日の午後3時に18名でお願いします。'
    ],
    vi:['Tôi gọi điện về buổi họp ngày thứ Ba 24 tháng 11. Thời gian buổi họp đã đổi từ 2 giờ chiều sang 3 giờ chiều.', 'Tôi hiểu rồi. Là 3 giờ chiều thứ Ba ngày 24 tháng 11 phải không ạ. Sẽ có bao nhiêu người tham dự ạ?', 'Trong tổng số 25 người, 18 người đã xác nhận tham dự. 7 người còn lại vẫn chưa trả lời.', 'Tôi đã rõ. Vậy xin nhờ tổ chức buổi họp với 18 người vào 3 giờ chiều thứ Ba ngày 24 tháng 11.'], en:['I\'m calling about the meeting on Tuesday, November 24. The meeting time has been changed from 2 p.m. to 3 p.m.', 'I understand. It\'s 3 p.m. on Tuesday, November 24, isn\'t it? How many people will attend?', 'Out of a total of 25 people, 18 have confirmed their attendance. The remaining 7 have not yet replied.', 'Understood. Then please hold the meeting with 18 people at 3 p.m. on Tuesday, November 24.'], ja:['11月24日火曜日の会議の件でお電話しております。会議の時間が午後2時から午後3時に変更になりました。', 'わかりました。11月24日火曜日午後3時ですね。何名が参加されますか。', '全25名のうち、18名が出席を確認しております。残りの7名はまだ返信がありません。', '承知いたしました。それでは、11月24日火曜日午後3時に18名で会議の開催をお願いいたします。']},
  2: { title:'第2問 — Hai sự kiện cùng ngày: 研修 + 懇親会', mp3:'assets/ngay20-doan2.mp3', desc:'Câu 4–6 · Hai sự kiện diễn ra cùng một ngày: buổi 研修 giữ nguyên giờ nhưng đổi hội trường — ghi cặp “sự kiện → giờ + nơi” ra nháp, đừng ghép chéo. Chú ý tình trạng thư mời 懇親会 (đã gửi cho tất cả mọi người chưa).',
    lines:[
      '11月26日木曜日の予定を確認します。',
      'はい。午前10時から新入社員研修が2階研修室でありますね。',
      '研修は、午前10時のままですが、会場が3階大会議室に変更になりました。懇親会は、同じ日の午後6時から、1階食堂で行います。',
      '分かりました。懇親会の案内ですが、まだ全員に送っていませんので、今日中に送りますね。',
      'よろしくお願いします。'
    ],
    vi:['Tôi muốn xác nhận lịch ngày thứ Năm 26 tháng 11.', 'Vâng. Từ 10 giờ sáng có buổi đào tạo nhân viên mới tại phòng đào tạo tầng 2 phải không ạ.', 'Buổi đào tạo vẫn giữ nguyên 10 giờ sáng, nhưng địa điểm đã đổi sang phòng họp lớn tầng 3. Buổi liên hoan sẽ diễn ra cùng ngày từ 6 giờ chiều tại nhà ăn tầng 1.', 'Tôi hiểu rồi. Về thư mời dự liên hoan, tôi vẫn chưa gửi cho tất cả mọi người nên hôm nay tôi sẽ gửi.', 'Xin nhờ anh/chị giúp.'], en:['I would like to confirm the schedule for Thursday, November 26.', 'Yes. There is new employee training from 10 a.m. in the training room on the 2nd floor, isn\'t there?', 'The training remains at 10 a.m., but the venue has been changed to the large meeting room on the 3rd floor. The social gathering will be held on the same day from 6 p.m. in the cafeteria on the 1st floor.', 'I understand. As for the invitation to the social gathering, I haven\'t sent it to everyone yet, so I will send it today.', 'Please take care of it.'], ja:['11月26日木曜日の予定を確認したいのですが。', 'はい。午前10時から2階の研修室で新入社員研修がありますね。', '研修は午前10時のままですが、場所が3階の大会議室に変更になりました。懇親会は同日午後6時から1階の食堂で行われます。', 'わかりました。懇親会の招待状については、まだ皆様にお送りしていないので、本日お送りします。', 'よろしくお願いいたします。']},
  3: { title:'第3問 — 会議室の利用料 + 備品レンタル', mp3:'assets/ngay20-doan3.mp3', desc:'Câu 7–9 · Gắn nhãn từng con số ngay khi nghe: phí phòng họp, phí thuê 1 máy chiếu và tổng cộng là ba con số khác nhau — tính tổng phải nhân với số máy thuê. Chú ý tình trạng của 請求書 (hóa đơn).',
    lines:[
      '会議室の利用料についてご連絡します。会議室の利用料は、1日5万円です。プロジェクターのレンタル料は、1台1万円です。プロジェクターは2台借りますので、合計7万円になります。',
      'はい。合計7万円ですね。なお、請求書は、まだ発行していませんので、ご利用後に発行いたします。',
      'はい。よろしくお願いします。'
    ],
    vi:['Tôi gọi điện về phí sử dụng phòng họp. Phí sử dụng phòng họp là 50.000 yên một ngày. Phí thuê máy chiếu là 10.000 yên một máy. Chúng tôi sẽ thuê 2 máy chiếu nên tổng cộng là 70.000 yên.', 'Vâng. Tổng cộng là 70.000 yên phải không ạ. Ngoài ra, hóa đơn vẫn chưa được phát hành nên chúng tôi sẽ phát hành sau khi quý khách sử dụng.', 'Vâng. Xin nhờ anh/chị giúp.'], en:['I\'m calling about the meeting room usage fee. The meeting room usage fee is 50,000 yen per day. The projector rental fee is 10,000 yen per unit. We will rent 2 projectors, so the total is 70,000 yen.', 'Yes. The total is 70,000 yen, isn\'t it? In addition, the invoice has not yet been issued, so we will issue it after you use the room.', 'Yes. Please take care of it.'], ja:['会議室の使用料の件でお電話しております。会議室の使用料は1日50,000円です。プロジェクターのレンタル料は1台10,000円です。プロジェクターを2台借りますので、合計70,000円になります。', 'はい。合計70,000円ですね。また、請求書はまだ発行されておりませんので、ご利用後に発行いたします。', 'はい。よろしくお願いいたします。']},
  4: { title:'第4問 — 説明・案内：thông báo về 社内研修 (dạng xoay vòng)', mp3:'assets/ngay20-doan4.mp3', desc:'Câu 10–12 · Dạng xoay vòng — một người nói thông báo (説明・案内) về buổi đào tạo nội bộ: có ba mốc ngày khác nhau (ngày 研修 / hạn đăng ký / ngày gửi 資料) — ghi nhãn vai trò của từng ngày, đừng gắn nhầm; và tài liệu 研修 còn ở trạng thái “chưa làm” kèm hạn gửi cụ thể.',
    lines:[
      '人事部の佐藤です。12月2日水曜日に行う社内研修についてご案内します。研修の時間は、午前9時から午後4時までです。場所は、本社3階の大会議室です。参加費は、1人5千円です。申込の締め切りは、11月27日金曜日です。なお、研修の資料は、まだ用意していません。研修の前日、12月1日火曜日までに、メールでお送りします。よろしくお願いいたします。'
    ],
    vi:['Tôi là Sato, phòng Nhân sự. Tôi xin thông báo về buổi đào tạo nội bộ sẽ diễn ra vào thứ Tư ngày 2 tháng 12. Thời gian đào tạo là từ 9 giờ sáng đến 4 giờ chiều. Địa điểm là phòng họp lớn tầng 3 của trụ sở chính. Phí tham dự là 5.000 yên một người. Hạn đăng ký là thứ Sáu ngày 27 tháng 11. Ngoài ra, tài liệu đào tạo vẫn chưa được chuẩn bị. Tôi sẽ gửi qua email trước thứ Ba ngày 1 tháng 12, tức ngày trước buổi đào tạo. Xin nhờ anh/chị giúp đỡ.'], en:['This is Sato from the Human Resources Department. I would like to inform you about the internal training session to be held on Wednesday, December 2. The training time is from 9 a.m. to 4 p.m. The venue is the large meeting room on the 3rd floor of the head office. The participation fee is 5,000 yen per person. The registration deadline is Friday, November 27. In addition, the training materials have not yet been prepared. I will send them by email before Tuesday, December 1, the day before the training session. Thank you for your cooperation.'], ja:['人事部の佐藤です。12月2日水曜日に行われる社内研修についてご案内いたします。研修時間は午前9時から午後4時までです。場所は本社3階の大会議室です。参加費は1名5,000円です。申込期限は11月27日金曜日です。また、研修資料はまだ準備できておりません。研修前日の12月1日火曜日までにメールでお送りします。よろしくお願いいたします。']}
},
  segNames: null,
  questions: [
  {n:1, seg:1, q:'打ち合わせはいつになりましたか。', opts:['11月24日火曜日午後2時','11月24日火曜日午後3時','11月25日水曜日午後3時','11月23日月曜日午後3時'], ans:'B', trap:'Giờ cũ vs giờ mới của buổi họp', explain:'打ち合わせの時間は午後2時から午後3時に変更; 午後2時 là giờ cũ; 11月25日・11月23日 không được nhắc tới.'},
  {n:2, seg:1, q:'参加が決まっているのは何名ですか。', opts:['25名','7名','18名','43名'], ans:'C', trap:'Tổng số vs đã xác nhận vs chưa trả lời', explain:'全部25名のうち18名は参加が決まっている; 7名 là số chưa trả lời; 25名 là tổng số; 43名 = 25+18, không xuất hiện trong audio.'},
  {n:3, seg:1, q:'残りの7名について正しいものはどれですか。', opts:['すでに参加が決まっている','参加しないことになった','まだ返事が来ていない','11月24日に連絡することになった'], ans:'C', trap:'「まだ返事が来ていない」— 7 người chưa trả lời', explain:'残りの7名はまだ返事が来ていません — bẫy まだ〜ていない: nghe thấy まだ〜ていない thì ghi ngay “CHƯA + hệ quả”.'},
  {n:4, seg:2, q:'研修はどこで行われますか。', opts:['2階研修室','3階大会議室','1階食堂','3階研修室'], ans:'B', trap:'Phòng cũ vs phòng mới + hai sự kiện cùng ngày', explain:'研修 giữ giờ 午前10時 nhưng đổi 会場 sang 3階大会議室; 2階研修室 là 会場 cũ; 1階食堂 là nơi tổ chức 懇親会 cùng ngày.'},
  {n:5, seg:2, q:'懇親会はいつですか。', opts:['11月26日木曜日午前10時','11月26日木曜日午後6時','11月27日金曜日午後6時','11月26日木曜日午後5時'], ans:'B', trap:'Ghép chéo giờ của hai sự kiện cùng ngày', explain:'懇親会は同じ日 (11月26日木曜日) の午後6時から; 午前10時 cùng ngày là 研修; 11月27日 không được nhắc tới.'},
  {n:6, seg:2, q:'懇親会の案内について正しいものはどれですか。', opts:['すでに全員に送った','今日中に送る','まだ全員に送っていないので今日中に送る','送らないことになった'], ans:'C', trap:'「まだ全員に送っていない」— thư mời chưa gửi hết', explain:'懇親会の案内はまだ全員に送っていないので今日中に送る — bẫy まだ〜ていない gắn với hệ quả + thời hạn cụ thể (今日中); đáp án B chỉ nêu hệ quả mà bỏ trạng thái “chưa gửi”.'},
  {n:7, seg:3, q:'会議室の利用料はいくらですか。', opts:['5万円','1万円','7万円','2万円'], ans:'A', trap:'Phí phòng vs phí thuê 1 máy vs tổng cộng', explain:'会議室の利用料は1日5万円; 1万円 là レンタル料 của 1台プロジェクター; 7万円 là 合計.'},
  {n:8, seg:3, q:'合計でいくらになりますか。', opts:['5万円','6万円','7万円','10万円'], ans:'C', trap:'Tổng tiền = phí phòng + phí thuê 2 máy', explain:'会議室5万円 + プロジェクター1万円×2台 = 7万円; 6万円 là quên nhân 2台 (5+1); 10万円 = 5万円×2, không xuất hiện trong audio.'},
  {n:9, seg:3, q:'請求書について正しいものはどれですか。', opts:['すでに発行した','発行しないことになった','まだ発行していないので、ご利用後に発行する','会議室の利用料と一緒に送った'], ans:'C', trap:'「まだ発行していない」— hóa đơn chưa phát hành', explain:'請求書はまだ発行していませんので、ご利用後に発行いたします — bẫy まだ〜ていない: nghe thấy まだ〜ていない thì ghi ngay “CHƯA + hệ quả”.'},
  {n:10, seg:4, q:'研修はいつ行われますか。', opts:['12月1日火曜日','12月2日水曜日','11月27日金曜日','12月3日木曜日'], ans:'B', trap:'Ngày 研修 vs ngày gửi 資料 vs hạn đăng ký', explain:'研修は12月2日水曜日に行う; 12月1日 là ngày gửi 資料 (前日); 11月27日 là 申込締切.'},
  {n:11, seg:4, q:'申込の締め切りはいつですか。', opts:['12月2日水曜日','12月1日火曜日','11月27日金曜日','11月26日木曜日'], ans:'C', trap:'Hạn đăng ký vs ngày diễn ra 研修 (gắn nhầm vai trò của ngày)', explain:'申込の締め切りは11月27日金曜日; 12月2日 là ngày 研修 (gắn nhầm vai trò của ngày — cùng họ lỗi Ngày 14 câu 10: hạn đăng ký ↔ ngày sự kiện); 12月1日 là ngày gửi 資料.'},
  {n:12, seg:4, q:'研修の資料について正しいものはどれですか。', opts:['すでに用意した','まだ用意していないので、12月1日火曜日までにメールで送る','研修の当日に渡す','送らないことになった'], ans:'B', trap:'「まだ用意していない」— tài liệu chưa chuẩn bị + hạn gửi', explain:'研修の資料はまだ用意していない; 研修の前日 (12月1日火曜日) までにメールで送る — bẫy “chưa làm” gắn với điều kiện + hạn chót cụ thể.'}
],
  instructions: `<li><strong>40 phút</strong> cho 12 câu nghe. Đồng hồ bắt đầu chạy khi bạn bấm <em>Bắt đầu làm bài</em>; hết giờ bài tự nộp.</li>
          <li>Bài gồm <strong>4 bộ nghe</strong>, mỗi bộ có 3 câu hỏi và <strong>cả 3 câu của bộ hiển thị cùng nhau trên một màn hình</strong> ngay dưới nút phát của bộ đó, trong khung làm bài kiểu phòng thi CBT — nghe xong trả lời luôn cả 3 câu, không phải chuyển qua lại từng câu. Bấm <strong>▶ Phát đoạn nghe</strong> ở đầu mỗi bộ — audio MP3 thu sẵn, <strong>không đọc tên người nói</strong>, đúng như phòng thi.</li>
          <li>Bộ 1 là <strong>điện thoại về buổi <span class="jp">打ち合わせ</span></strong>: giờ họp được đổi — ghi cặp “giờ cũ → giờ mới” ra nháp ngay khi nghe; số người tham dự có tới ba con số (tổng số / đã xác nhận tham dự / chưa trả lời), gắn nhãn từng con số kẻo nhầm vai trò của chúng. Bộ 2 là <strong>xác nhận lịch một ngày có hai sự kiện</strong>: buổi <span class="jp">研修</span> giữ nguyên giờ nhưng đổi hội trường, buổi <span class="jp">懇親会</span> diễn ra chiều cùng ngày — ghi cặp “sự kiện → giờ + nơi” cho từng sự kiện, đừng ghép chéo; đồng thời nghe kỹ thư mời <span class="jp">懇親会</span> đã được gửi cho tất cả mọi người hay chưa. Bộ 3 là <strong>phí phòng họp + thuê thiết bị</strong>: phí phòng, phí thuê một máy chiếu và tổng cộng là ba con số khác nhau — khi tính tổng phải nhân đơn giá với số máy thuê; và nghe kỹ <span class="jp">請求書</span> đang ở trạng thái nào. Bộ 4 là <strong>dạng xoay vòng</strong> — <span class="jp">説明・案内</span>, một người nói thông báo về buổi <span class="jp">社内研修</span>: có ba mốc ngày khác nhau (ngày diễn ra <span class="jp">研修</span> / hạn đăng ký / ngày gửi <span class="jp">資料</span>), ghi nhãn vai trò của từng ngày ngay khi nghe, và <span class="jp">資料</span> còn ở trạng thái “chưa làm” kèm hạn gửi cụ thể.</li>
          <li>Ở chế độ <strong>Thi thật</strong>, mỗi bộ chỉ phát <strong>1 lần duy nhất</strong>. Hãy nghe hết bộ rồi mới trả lời 3 câu của bộ đó.</li>
          <li>Dùng cột <strong>Danh sách câu hỏi</strong> bên trái để nhảy tới câu bất kỳ (trang tự cuộn tới câu đó), hoặc phím <kbd>←</kbd> <kbd>→</kbd> để cuộn tới câu trước / câu tiếp. Phím <kbd>A</kbd>–<kbd>D</kbd> chọn đáp án cho câu bạn vừa bấm vào. Mỗi câu chỉ chọn <strong>một</strong> đáp án — chọn đáp án khác sẽ thay đáp án cũ.</li>
          <li>Câu nào chưa chắc, bấm <strong>⚑ Đánh dấu</strong> ở ngay câu đó để quay lại sau.</li>
          <li>Nút <strong>Nộp bài</strong> luôn nằm ở thanh cuối trang (và trong cột bên trái) — bấm vào sẽ hiện hộp xác nhận, bấm <em>Nộp bài</em> trong hộp đó mới chấm điểm. Nộp xong mới hiện đáp án, giải thích tiếng Việt, transcript kèm bản dịch tiếng Việt và sổ lỗi sai.</li>`,
  candidateInfo: { subject: 'BJT 聴解 — Luyện nghe Ngày 20', questionInfo: '12 câu · 4 bộ', time: '40 phút', format: '説明・案内 — thông báo 1 người nói về 社内研修 (xoay vòng)' },
  tips: ``,
  footerNote: 'Bài Ngày 20 — Luyện 聴解 (Nghe hiểu): điện thoại đổi giờ 打ち合わせ + số người tham dự, hai sự kiện cùng ngày 研修 + 懇親会, phí 会議室 + thuê プロジェクター và thông báo 説明・案内 về 社内研修. Audio là file MP3 thu sẵn, không đọc tên người nói.',
  scoreMessages: [
    {min: 12, text: 'Xuất sắc — sạch cả 12 câu nghe Ngày 20!'},
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
