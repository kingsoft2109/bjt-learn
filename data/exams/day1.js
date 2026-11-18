(function(){
var cfg = {
  id: 'day1',
  type: 'choukai',
  title: 'Ngày 1 — Chẩn đoán <span class="jp">聴解</span> (Nghe hiểu)',
  subtitle: '3 đoạn hội thoại · 9 câu · Bẫy trọng tâm: 「まだ〜ていない」— chưa xác nhận / chưa được duyệt',
  timeSeconds: 35*60,
  questionCount: 9,
  segmentCount: 3,
  segLabel: 'Đoạn',
  segments: {
  1: { title:'第1問 — Cuộc hẹn với khách hàng', mp3:'assets/day1-seg1.mp3', desc:'Câu 1–3 · Nghe đoạn hội thoại rồi trả lời cả 3 câu của đoạn này.',
    lines:[
      {who:'boss', text:'明日の会議の件だが、会議室はもう決まったのかね。'},
      {who:'staff', text:'申し訳ございません。会議室につきましては、まだ決まっておらず、現在、総務部に確認中でございます。'},
      {who:'boss', text:'そうか。では、先方の担当者の到着は、午前10時で間違いないのかね。'},
      {who:'staff', text:'午前10時の予定ではございますが、先方から最終確認がまだ取れておりません。'},
      {who:'boss', text:'分かった。確認が取れたら、すぐに私に連絡してくれ。'},
      {who:'staff', text:'かしこまりました。確認が取れ次第、すぐにご連絡いたします。'}
    ],
    vi:['Về cuộc họp ngày mai, phòng họp đã chốt chưa nhỉ?', 'Tôi rất xin lỗi. Về phòng họp, hiện vẫn chưa chốt được, chúng tôi đang xác nhận với phòng Hành chính tổng hợp ạ.', 'Vậy à. Thế người phụ trách phía đối tác đến lúc 10 giờ sáng, có chắc chắn không?', 'Dự kiến là 10 giờ sáng ạ, nhưng chúng tôi vẫn chưa nhận được xác nhận cuối cùng từ phía đối tác.', 'Được rồi. Khi nào có xác nhận thì báo ngay cho tôi nhé.', 'Vâng, tôi hiểu rồi ạ. Ngay khi có xác nhận, tôi sẽ liên lạc lại ngay ạ.']},
  2: { title:'第2問 — Đơn hàng và tồn kho', mp3:'assets/day1-seg2.mp3', desc:'Câu 4–6 · Chú ý các con số: số đơn hàng, số tồn kho và phần còn thiếu.',
    lines:[
      {who:'boss', text:'A社からの注文は、全部でいくつだったかね。'},
      {who:'staff', text:'A社からのご注文は、全部で千二百個でございます。ただ、現在の在庫は八百五十個しかございません。'},
      {who:'boss', text:'では、今週の金曜日には、いくつ出せるんだ。'},
      {who:'staff', text:'在庫の八百五十個は、今週の金曜日に全て出荷いたします。'},
      {who:'boss', text:'残りの三百五十個は、どうするんだ。'},
      {who:'staff', text:'不足分の三百五十個の納期につきましては、まだ決まっておらず、仕入先の正式な回答を待っているところでございます。'},
      {who:'boss', text:'分かった。回答が来たら、教えてくれ。'}
    ],
    vi:['Đơn hàng từ Công ty A tổng cộng là bao nhiêu cái nhỉ?', 'Đơn hàng của Công ty A tổng cộng là 1.200 cái ạ. Tuy nhiên, tồn kho hiện tại chỉ có 850 cái thôi ạ.', 'Vậy thứ Sáu tuần này xuất được bao nhiêu cái?', '850 cái đang có trong kho, chúng tôi sẽ xuất toàn bộ vào thứ Sáu tuần này ạ.', 'Còn 350 cái còn lại thì sao?', 'Về thời hạn giao 350 cái còn thiếu, hiện vẫn chưa chốt được, chúng tôi đang chờ trả lời chính thức từ nhà cung cấp ạ.', 'Được rồi. Khi nào có trả lời thì cho tôi biết nhé.']},
  3: { title:'第3問 — Công tác và phê duyệt chi phí', mp3:'assets/day1-seg3.mp3', desc:'Câu 7–9 · Bẫy ở đây là「承認がまだ下りていない」và「見込みだが確実ではない」.',
    lines:[
      {who:'staff', text:'部長、出張の航空券の件ですが、まだ予約できておりません。'},
      {who:'boss', text:'なぜだね。日程は決まっているだろう。'},
      {who:'staff', text:'はい、日程は決まっておりますが、経理部の承認がまだ下りていないため、予約に進めない状況でございます。'},
      {who:'boss', text:'承認は、いつ出そうかね。'},
      {who:'staff', text:'明日の午後の見込みではございますが、確実ではございません。'},
      {who:'boss', text:'そうか。承認が下りたら、すぐに航空券を予約して、ホテルも押さえてくれ。'},
      {who:'staff', text:'承知いたしました。そのようにいたします。'}
    ],
    vi:['Thưa Trưởng phòng, về vé máy bay cho chuyến công tác, tôi vẫn chưa đặt được ạ.', 'Sao vậy? Lịch trình đã chốt rồi mà.', 'Vâng, lịch trình đã chốt rồi ạ, nhưng vì phê duyệt của phòng Kế toán vẫn chưa được cấp xuống nên chưa thể tiến hành đặt vé được ạ.', 'Phê duyệt thì khoảng khi nào mới có?', 'Dự kiến là chiều mai ạ, nhưng chưa chắc chắn ạ.', 'Vậy à. Khi nào được phê duyệt thì đặt vé máy bay ngay, và giữ luôn khách sạn giúp tôi nhé.', 'Vâng, tôi đã rõ ạ. Tôi sẽ làm như vậy ạ.']}
},
  segNames: null,
  questions: [
  {n:1, seg:1, q:'会議室について、正しいものはどれですか。', opts:['すでに決まっている','まだ決まっておらず、総務部に確認中である','決める必要がない','来週の月曜日に決まる'], ans:'B', trap:'「まだ〜ていない」— chưa xác nhận', explain:'Hội thoại nói rõ「まだ決まっておらず、総務部に確認中」— phòng họp CHƯA chốt. A là bẫy kinh điển: nghe thấy nhắc tới “phòng họp” liền tưởng đã quyết định.'},
  {n:2, seg:1, q:'先方の担当者の到着時間について、正しいものはどれですか。', opts:['午前10時で確定している','午前10時の予定だが、最終確認が取れていない','午後に変更になった','まだ何も決まっていない'], ans:'B', trap:'Dự kiến ≠ xác định (予定だが未確認)', explain:'「午前10時の予定だが、最終確認が取れていない」— 10 giờ mới là dự kiến. A sai ở chữ「確定」; D cũng sai vì đã có giờ dự kiến rồi, không phải “chưa có gì”.'},
  {n:3, seg:1, q:'上司が社員に求めたことは何ですか。', opts:['会議室を自分で決めること','確認が取れたらすぐに連絡すること','資料を作り直すこと','先方の担当者に直接電話すること'], ans:'B', trap:'Nghe đúng yêu cầu của sếp', explain:'Sếp chốt bằng câu「確認が取れたら、すぐに私に連絡してくれ」— việc cần làm là báo ngay khi có xác nhận, không phải tự quyết phòng họp hay làm lại tài liệu.'},
  {n:4, seg:2, q:'在庫はいくつですか。', opts:['350個','850個','1,200個','1,550個'], ans:'B', trap:'Số đơn hàng vs số tồn kho', explain:'1,200 là lượng ĐƠN HÀNG của A社（注文は全部で1,200個）, còn tồn kho chỉ có「在庫は850個しかない」. C (1,200) là bẫy kinh điển: nghe số to nhất liền chọn. Ghi nhãn ngay khi nghe: 注文1,200・在庫850・不足350.'},
  {n:5, seg:2, q:'今週の金曜日に出荷するのは何個ですか。', opts:['350個','850個','1,200個','出荷しない'], ans:'B', trap:'Gắn đúng số với đúng mốc thời gian', explain:'「在庫の850個は今週の金曜日に全て出荷」— thứ Sáu xuất toàn bộ 850 đang có trong kho. 350 là phần còn THIẾU chưa có hàng; 1,200 là tổng đơn hàng.'},
  {n:6, seg:2, q:'残りの350個の納期について、正しいものはどれですか。', opts:['来週の金曜日に決まっている','まだ決まっておらず、仕入先の正式な回答を待っている','キャンセルになった','今週の金曜日に一緒に出荷する'], ans:'B', trap:'「正式な回答を待っている」= chưa chốt', explain:'Phần thiếu 350 (1,200 − 850)「まだ決まっておらず、仕入先の正式な回答を待っている」— chưa có hạn giao. A và D đều gán cho nó một ngày cụ thể mà hội thoại không hề nói.'},
  {n:7, seg:3, q:'社員が航空券を予約できない理由は何ですか。', opts:['ホテルが決まっていない','経理部の承認がまだ下りていない','出張の日程が決まっていない','上司が許可していない'], ans:'B', trap:'「承認がまだ下りていない」', explain:'Lịch trình ĐÃ chốt (日程は決まっている), vướng duy nhất là「経理部の承認がまだ下りていない」. C là bẫy phủ định ngược; người chưa duyệt là phòng kế toán, không phải sếp.'},
  {n:8, seg:3, q:'承認が出る見込みについて、正しいものはどれですか。', opts:['明日の午後の見込みだが、確実ではない','今日中に出ることが確定している','来週になることが確定している','すでに出ている'], ans:'A', trap:'「見込みだが確実ではない」', explain:'Nguyên văn:「明日の午後の見込みではございますが、確実ではございません」. Mọi đáp án có chữ「確定」đều là bẫy — “dự kiến” không bao giờ bằng “chắc chắn”.'},
  {n:9, seg:3, q:'承認が下りたら、社員は何をしますか。', opts:['出張を中止する','すぐに航空券を予約し、ホテルも予約する','上司に報告だけする','見積書を作り直す'], ans:'B', trap:'Nghe trọn chỉ thị ở cuối đoạn', explain:'Sếp dặn「承認が下りたら、すぐに航空券を予約して、ホテルも押さえてくれ」— gồm CẢ vé máy bay VÀ khách sạn. Chỉ “báo cáo thôi” (C) là thiếu một nửa chỉ thị.'}
],
  instructions: `<li><strong>35 phút</strong> cho 9 câu nghe. Đồng hồ bắt đầu chạy khi bạn bấm <em>Bắt đầu làm bài</em>; hết giờ bài tự nộp.</li>
          <li>Mỗi đoạn hội thoại có 3 câu hỏi, và <strong>cả 3 câu của đoạn hiển thị cùng nhau</strong> ngay dưới nút phát của đoạn đó, trong khung làm bài kiểu phòng thi CBT — nghe xong trả lời luôn cả 3 câu, không phải chuyển qua lại từng câu nữa. Bấm <strong>▶ Phát đoạn nghe</strong> ở đầu mỗi đoạn — audio MP3 thu sẵn, 2 giọng khác nhau (giọng trầm = cấp trên, giọng còn lại = nhân viên dùng kính ngữ), <strong>không đọc tên người nói</strong>, đúng như phòng thi.</li>
          <li>Ở chế độ <strong>Thi thật</strong>, mỗi đoạn chỉ phát <strong>1 lần duy nhất</strong>. Hãy nghe hết đoạn rồi mới trả lời 3 câu của đoạn đó.</li>
          <li>Dùng cột <strong>Danh sách câu hỏi</strong> bên trái để nhảy tới câu bất kỳ (trang tự cuộn tới câu đó), hoặc phím <kbd>←</kbd> <kbd>→</kbd> để cuộn tới câu trước / câu tiếp. Phím <kbd>A</kbd>–<kbd>D</kbd> chọn đáp án cho câu bạn vừa bấm vào.</li>
          <li>Câu nào chưa chắc, bấm <strong>⚑ Đánh dấu</strong> ở ngay câu đó để quay lại sau.</li>
          <li>Nút <strong>Nộp bài</strong> luôn nằm ở thanh cuối trang (và trong cột bên trái) — bấm vào sẽ hiện hộp xác nhận, bấm <em>Nộp bài</em> trong hộp đó mới chấm điểm. Nộp xong mới hiện đáp án, transcript và sổ lỗi sai.</li>`,
  candidateInfo: { subject: 'BJT 聴解 — Chẩn đoán Ngày 1', questionInfo: '9 câu · 3 đoạn', time: '35 phút' },
  tips: `cứ nghe thấy 「まだ…ていない」「確認中」「回答を待っている」「見込みだが確実ではない」 là tín hiệu <em>chưa chốt</em> — đáp án nào ghi “đã xác định / đã quyết định” thường là bẫy.`,
  footerNote: 'Bài Ngày 1 — Chẩn đoán 聴解 (Nghe hiểu). Audio là file MP3 thu sẵn, 2 giọng khác nhau, không đọc tên người nói.',
  scoreMessages: [
    {min: 9, text: 'Xuất sắc — sạch cả 9 câu, đúng chất chẩn đoán!'},
    {min: 7, text: 'Rất tốt — gần như sạch bẫy'},
    {min: 5, text: 'Khá chắc tay — còn vài bẫy chi tiết'},
    {min: 3, text: 'Đang vào form — để ý các câu số liệu'},
    {min: 1, text: 'Cần luyện thêm — bẫy “chưa xác nhận” vẫn đang thắng'},
    {min: 0, text: 'Nền nghe đang hổng — nghe lại transcript từng đoạn nhé'}
  ]
};
if(!window.EXAM_DAYS) window.EXAM_DAYS = {};
window.EXAM_DAYS[cfg.id] = cfg;
})();
