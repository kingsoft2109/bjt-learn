(function(){
var cfg = {
  id: 'day4',
  type: 'choudokkai',
  title: 'Ngày 4 — Drill <span class="jp">聴読解</span> (Nghe + đọc: cộng / trừ số liệu)',
  subtitle: '3 bộ · 9 câu · Drill kỹ năng dễ sai khi nghe: nhặt nhầm số khi vừa nghe vừa cộng/trừ từ bảng',
  timeSeconds: 35*60,
  questionCount: 9,
  segmentCount: 3,
  segLabel: 'Đoạn',
  segments: {
  1: { title:'第1問 — Báo cáo doanh số nửa đầu năm', mp3:'assets/day4-seg1.mp3', desc:'Câu 1–3 · Nhìn bảng doanh số của P店・Q店 （đơn vị: 万円） đồng thời nghe báo cáo — audio chốt kỳ cần tính.',
    lines:[
      {who:'female', text:'上半期の売上報告です。P店は第3四半期、7月が260万円、8月が250万円、9月が270万円で、9月が上半期で最も高くなりました。'},
      {who:'male', text:'Q店のほうはどうですか。'},
      {who:'female', text:'Q店は4月が180万円で、上半期では一番低かったんですが、その後は少しずつ上がって、9月は225万円まで伸びました。'},
      {who:'male', text:'分かりました。来月の会議までに、下半期の見通しもまとめておいてください。'},
      {who:'female', text:'はい、承知しました。'}
    ],
    vi:['Đây là báo cáo doanh số nửa đầu năm. Cửa hàng P, trong quý 3, tháng 7 là 2,6 triệu yên, tháng 8 là 2,5 triệu yên, tháng 9 là 2,7 triệu yên, và tháng 9 là tháng cao nhất trong nửa đầu năm.', 'Cửa hàng Q thì sao ạ?', 'Cửa hàng Q, tháng 4 là 1,8 triệu yên, là tháng thấp nhất trong nửa đầu năm, nhưng sau đó tăng dần lên, đến tháng 9 đã tăng lên 2,25 triệu yên.', 'Vâng, tôi đã rõ. Trước cuộc họp tháng tới, hãy tổng hợp cả triển vọng nửa cuối năm giúp tôi nhé.', 'Vâng, tôi đã rõ ạ.'], en:['This is the sales report for the first half of the year. Store P, in the third quarter, had 2.6 million yen in July, 2.5 million yen in August, and 2.7 million yen in September, and September was the highest month in the first half of the year.', 'What about Store Q?', 'Store Q had 1.8 million yen in April, which was the lowest month in the first half of the year, but after that it gradually increased, rising to 2.25 million yen by September.', 'Yes, I understand. Before next month\'s meeting, please also summarize the outlook for the second half of the year.', 'Yes, I understand.'], ja:['こちらは上半期の売上報告です。P店は、第3四半期では、7月が260万円、8月が250万円、9月が270万円で、9月が上半期で最も高い月でした。', 'Q店はどうですか。', 'Q店は、4月が180万円で上半期で最も低い月でしたが、その後徐々に増え、9月には225万円まで上がりました。', 'はい、分かりました。来月の会議までに、下半期の見通しもまとめておいてください。', 'はい、かしこまりました。']},
  2: { title:'第2問 — Lịch giao hàng tuần này', mp3:'assets/day4-seg2.mp3', desc:'Câu 4–6 · Nhìn bảng lịch giao hàng đồng thời nghe thông báo thay đổi — audio ghi đè bảng.',
    lines:[
      {who:'male', text:'今週の配送予定について、変更が2件あります。'},
      {who:'female', text:'はい、お願いします。'},
      {who:'male', text:'まず、水曜日のC倉庫への配送ですが、先方の都合で木曜日の9時30分に変更になりました。'},
      {who:'female', text:'分かりました。木曜日はD倉庫の11時もありますね。'},
      {who:'male', text:'そうです。もう1件は金曜日のE倉庫です。在庫が不足しているため、今週は中止して、来週月曜日の10時30分に延期します。'},
      {who:'female', text:'承知しました。ほかの曜日は予定通りですね。'},
      {who:'male', text:'はい、月曜日と火曜日は変更ありません。'}
    ],
    vi:['Về lịch giao hàng tuần này, có 2 điểm thay đổi.', 'Vâng, xin anh nói ạ.', 'Trước hết, chuyến giao hàng đến kho C vào thứ Tư, do phía đối tác nên đã đổi sang thứ Năm lúc 9 giờ 30.', 'Vâng, tôi đã rõ. Thứ Năm còn có chuyến của kho D lúc 11 giờ nữa đúng không ạ.', 'Đúng vậy. Điểm còn lại là kho E vào thứ Sáu. Do tồn kho không đủ nên tuần này hủy, dời sang thứ Hai tuần tới lúc 10 giờ 30.', 'Vâng, tôi đã rõ. Các ngày khác vẫn theo đúng lịch đúng không ạ.', 'Đúng vậy, thứ Hai và thứ Ba không có thay đổi.'], en:['Regarding this week\'s delivery schedule, there are two changes.', 'Yes, please go ahead.', 'First, the delivery to Warehouse C on Wednesday has been changed to Thursday at 9:30 due to the partner\'s circumstances.', 'Yes, I understand. On Thursday there is also the delivery for Warehouse D at 11:00, is that correct?', 'That\'s right. The other point is Warehouse E on Friday. Due to insufficient stock, it is cancelled this week and postponed to next Monday at 10:30.', 'Yes, I understand. The other days remain as scheduled, is that correct?', 'That\'s right, Monday and Tuesday have no changes.'], ja:['今週の配送スケジュールについて、変更が2点あります。', 'はい、お願いいたします。', 'まず、水曜日のC倉庫への配送は、先方の都合により木曜日の9時30分に変更になりました。', 'はい、分かりました。木曜日にはD倉庫の11時の便もありますよね。', 'その通りです。もう1点は金曜日のE倉庫です。在庫不足のため今週は中止し、来週月曜日の10時30分に延期します。', 'はい、分かりました。その他の日はスケジュール通りでよろしいでしょうか。', 'はい、その通りです。月曜日と火曜日は変更ありません。']},
  3: { title:'第3問 — Thuê thiết bị cho buổi đào tạo', mp3:'assets/day4-seg3.mp3', desc:'Câu 7–9 · Nhìn bảng giá thuê thiết bị đồng thời nghe báo cáo số lượng và số ngày — giảm 1割 khi thuê từ 3 ngày.',
    lines:[
      {who:'female', text:'来週の研修で使う機材の見積もりができました。'},
      {who:'male', text:'内容を教えてください。'},
      {who:'female', text:'ノートパソコンが2台、プロジェクターと会議用スピーカーが1台ずつで、期間は3日間です。'},
      {who:'male', text:'3日だと割引が付くんでしたね。'},
      {who:'female', text:'はい、3日以上のレンタルは機材料金が1割引になります。全部で3日分で計算しています。'},
      {who:'male', text:'分かりました。その内容で手配を進めてください。'}
    ],
    vi:['Báo giá thiết bị dùng cho buổi đào tạo tuần tới đã xong rồi.', 'Cho tôi biết nội dung nhé.', 'Máy tính xách tay 2 chiếc, máy chiếu và loa họp mỗi loại 1 chiếc, thời gian thuê là 3 ngày.', 'Thuê 3 ngày thì có giảm giá đúng không nhỉ.', 'Vâng, thuê từ 3 ngày trở lên thì phí thiết bị được giảm 10%. Tất cả đều tính theo 3 ngày ạ.', 'Được rồi. Cứ tiến hành sắp xếp theo nội dung đó nhé.'], en:['The quotation for the equipment to be used for next week\'s training is ready.', 'Please tell me the details.', 'Two laptops, and one each of a projector and a conference speaker, for a rental period of 3 days.', 'If we rent for 3 days, there is a discount, isn\'t there?', 'Yes, for rentals of 3 days or more, the equipment fee is reduced by 10%. Everything is calculated on a 3-day basis.', 'All right. Please proceed with arranging it with those details.'], ja:['来週の研修で使う機材の見積書ができました。', '内容を教えてください。', 'ノートパソコン2台、プロジェクターと会議用スピーカーが各1台で、レンタル期間は3日間です。', '3日間レンタルすると割引がありますよね。', 'はい、3日間以上のレンタルで機材費が10％割引になります。すべて3日間で計算しています。', '分かりました。その内容で手配を進めてください。']}
},
  segNames: null,
  questions: [
  {n:1, seg:1, q:'P店の第3四半期（7月から9月）の売上の合計はいくらですか。', opts:['750万円','780万円','770万円','800万円'], ans:'B', trap:'Cộng đúng 3 tháng của quý 3 (7–9月) — viết số hạng ra nháp theo hàng–cột', explain:'260+250+270 = 780万円. Bẫy C (770) là khi lấy nhầm 240 của tháng 5 thay cho 250 của tháng 8.'},
  {n:2, seg:1, q:'Q店で上半期に売上が最も低かった月はいつですか。', opts:['4月','5月','6月','7月'], ans:'A', trap:'Tìm tháng thấp nhất của Q店 trong bảng', explain:'Q店 thấp nhất là tháng 4, 180万円 — audio cũng xác nhận 「上半期では一番低かった」.'},
  {n:3, seg:1, q:'9月のP店とQ店の売上の差はいくらですか。', opts:['35万円','55万円','45万円','65万円'], ans:'C', trap:'Hiệu số tháng 9 giữa hai cửa hàng', explain:'270 − 225 = 45万円.'},
  {n:4, seg:2, q:'C倉庫への配送はいつになりましたか。', opts:['水曜日 9:30','木曜日 9:30','木曜日 11:00','金曜日 9:30'], ans:'B', trap:'Audio ghi đè bảng — lịch đã thay đổi', explain:'Audio ghi đè bảng: C倉庫 dời từ thứ Tư sang thứ Năm, giờ giữ nguyên 9:30. Bẫy C (thứ Năm 11:00) là lịch của D倉庫.'},
  {n:5, seg:2, q:'E倉庫への配送はどうなりましたか。', opts:['予定通り金曜日 10:30','来週月曜日 10:30に延期','中止（延期なし）','木曜日 10:30に変更'], ans:'B', trap:'「今週は中止して、来週月曜日に延期」— hủy tuần này nhưng có ngày thay thế', explain:'Vì thiếu hàng tồn, chuyến E倉庫 tuần này hủy và dời sang thứ Hai tuần sau, 10:30.'},
  {n:6, seg:2, q:'C倉庫のほかに、変更があったのはどれですか。', opts:['A倉庫','B倉庫','D倉庫','E倉庫'], ans:'D', trap:'Audio mở đầu nói rõ 「変更が2件」— đếm đủ 2 thay đổi', explain:'Hai thay đổi là C倉庫 và E倉庫. D倉庫 chỉ được nhắc để xác nhận (vẫn thứ Năm 11:00), không đổi.'},
  {n:7, seg:3, q:'ノートパソコンの料金（割引後）はいくらですか。', opts:['18,000円','16,200円','15,300円','17,100円'], ans:'B', trap:'Nhân đơn giá × số máy × số ngày rồi mới trừ 1割', explain:'3.000 × 2台 × 3日 = 18.000円, thuê 3 ngày nên giảm 1割 còn 16.200円. A là khi quên giảm giá.'},
  {n:8, seg:3, q:'プロジェクターとスピーカーの料金の合計（割引後）はいくらですか。', opts:['9,000円','7,200円','8,100円','8,500円'], ans:'C', trap:'Tính riêng từng thiết bị sau giảm giá rồi cộng', explain:'プロジェクター 2.000×3日 = 6.000 → giảm còn 5.400円; スピーカー 1.000×3日 = 3.000 → giảm còn 2.700円. Tổng 5.400+2.700 = 8.100円.'},
  {n:9, seg:3, q:'機材全体の料金（割引後）はいくらですか。', opts:['27,000円','24,300円','23,400円','25,200円'], ans:'B', trap:'Cộng 3 khoản đã giảm giá của cả bộ thiết bị', explain:'16.200 + 5.400 + 2.700 = 24.300円. A (27.000) là tổng trước giảm giá.'}
],
  instructions: `<li><strong>35 phút</strong> cho 9 câu drill nghe + đọc. Đồng hồ bắt đầu chạy khi bạn bấm <em>Bắt đầu làm bài</em>; hết giờ bài tự nộp.</li>
          <li><strong>Kỹ thuật của buổi này</strong>: khi audio nhắc tới kỳ cần tính, <strong>viết ngay các số hạng ra nháp theo đúng hàng–cột</strong>, cộng từng cặp, rồi mới nhìn đáp án — đừng cộng nhẩm cả dãy trong lúc vẫn đang nghe.</li>
          <li>Bài gồm <strong>3 bộ</strong>, mỗi bộ có <strong>1 đoạn audio + 1 bảng + 3 câu hỏi</strong>, và cả bộ hiển thị cùng nhau trên một màn hình trong khung làm bài kiểu phòng thi CBT — vừa nghe vừa nhìn bảng để đối chiếu. Bấm <strong>▶ Phát đoạn nghe</strong> ở đầu mỗi bộ — audio MP3 thu sẵn, 2 giọng nam/nữ khác nhau, <strong>không đọc tên người nói</strong>, đúng như phòng thi.</li>
          <li>Ở chế độ <strong>Thi thật</strong>, mỗi đoạn chỉ phát <strong>1 lần duy nhất</strong>. Hãy nghe hết đoạn rồi mới trả lời 3 câu của bộ đó.</li>
          <li>Chú ý: ở Bộ 2, thông tin trong <strong>audio ghi đè bảng</strong> (đổi ngày giao, hoãn chuyến) — khi audio và bảng khác nhau, lấy audio làm chuẩn. Ở Bộ 3, audio <strong>không đọc kết quả</strong> — bạn phải tự tính từ bảng giá, số lượng và số ngày.</li>
          <li>Dùng cột <strong>Danh sách câu hỏi</strong> bên trái để nhảy tới câu bất kỳ (trang tự cuộn tới câu đó), hoặc phím <kbd>←</kbd> <kbd>→</kbd> để cuộn tới câu trước / câu tiếp. Phím <kbd>A</kbd>–<kbd>D</kbd> chọn đáp án cho câu bạn vừa bấm vào.</li>
          <li>Câu nào chưa chắc, bấm <strong>⚑ Đánh dấu</strong> ở ngay câu đó để quay lại sau.</li>
          <li>Nút <strong>Nộp bài</strong> luôn nằm ở thanh cuối trang (và trong cột bên trái) — bấm vào sẽ hiện hộp xác nhận, bấm <em>Nộp bài</em> trong hộp đó mới chấm điểm. Nộp xong mới hiện đáp án, giải thích tiếng Việt và transcript.</li>`,
  candidateInfo: { subject: 'BJT 聴読解 — Drill Ngày 4', questionInfo: '9 câu · 3 bộ', time: '35 phút', format: 'Bảng doanh số nửa đầu năm · Lịch giao hàng · Bảng giá thuê thiết bị' },
  tips: ``,
  footerNote: 'Bài Ngày 4 — Drill 聴読解 (Nghe + đọc kết hợp): cộng/trừ số liệu từ bảng. Audio là file MP3 thu sẵn, 2 giọng nam/nữ khác nhau, không đọc tên người nói.',
  scoreMessages: [
    {min: 9, text: 'Xuất sắc — sạch cả 9 câu drill số liệu!'},
    {min: 7, text: 'Rất tốt — đối chiếu audio và bảng rất chắc'},
    {min: 5, text: 'Khá chắc tay — còn vài chỗ tính toán cần cẩn thận'},
    {min: 3, text: 'Đang vào form — chú ý kỹ thuật viết số hạng ra nháp'},
    {min: 1, text: 'Cần luyện thêm — nghe lại từng bộ kèm transcript nhé'},
    {min: 0, text: 'Cần ôn lại kỹ thuật cộng/trừ số liệu từ bảng — xem giải thích từng câu bên dưới nhé'}
  ]
};
if(!window.EXAM_DAYS) window.EXAM_DAYS = {};
window.EXAM_DAYS[cfg.id] = cfg;
})();
