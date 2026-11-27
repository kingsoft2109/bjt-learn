(function(){
var cfg = {
  id: 'day10',
  type: 'choudokkai',
  title: 'Ngày 10 — Luyện <span class="jp">聴読解</span> (Nghe + Đọc)',
  subtitle: '4 bộ · 12 câu · Mỗi bộ có biểu đồ / email / bảng / form kèm audio hội thoại · Thứ Tư 04/11/2026',
  timeSeconds: 40*60,
  questionCount: 12,
  segmentCount: 4,
  segLabel: 'Đoạn',
  segments: {
  1: { title:'第1問 — 棒グラフ：新商品の月別売上', mp3:'assets/ngay10-doan1.mp3', desc:'Câu 1–3 · Nhìn biểu đồ cột doanh số tháng （万円） rồi nghe hội thoại báo cáo quý 3. Bẫy chính: tháng 10 thuộc quý 4, không cộng vào tổng quý 3.',
    lines:[
      '女性：課長、新商品の売上についてご報告します。',
      '男性：うん、7月から9月までの合計はどうなっているかな。',
      '女性：7月が240万円、8月が260万円、9月が300万円で、合計800万円です。',
      '男性：前の四半期は720万円だったね。伸びはどうかな。',
      '女性：80万円の増加です。なお、10月は340万円でしたが、これは第4四半期の数字ですので、第3四半期の合計には含めていません。',
      '男性：分かった。9月が一番よかったんだね。'
    ],
    vi:['Nữ: Trưởng phòng, em xin báo cáo doanh số sản phẩm mới.', 'Nam: Ừ, tổng từ tháng 7 đến tháng 9 là bao nhiêu?', 'Nữ: Tháng 7 là 240 vạn yên, tháng 8 là 260 vạn yên, tháng 9 là 300 vạn yên, tổng cộng 800 vạn yên.', 'Nam: Quý trước là 720 vạn yên nhỉ, mức tăng thế nào?', 'Nữ: Tăng 80 vạn yên. Tháng 10 là 340 vạn yên nhưng đó là số của quý 4 nên không tính vào tổng quý 3.', 'Nam: Rõ rồi, tháng 9 là tốt nhất nhỉ.'], en:['Woman: Manager, I\'d like to report the sales of the new product.', 'Man: Yes, what\'s the total from July to September?', 'Woman: July was 2.4 million yen, August was 2.6 million yen, September was 3 million yen, for a total of 8 million yen.', 'Man: Last quarter was 7.2 million yen, right? How much is the increase?', 'Woman: It increased by 800,000 yen. October was 3.4 million yen, but that\'s a Q4 figure, so it\'s not included in the Q3 total.', 'Man: I see, September was the best, wasn\'t it?'], ja:['女：課長、新製品の売上についてご報告いたします。', '男：うん、7月から9月までの合計はいくらですか。', '女：7月は240万円、8月は260万円、9月は300万円で、合計800万円です。', '男：前四半期は720万円でしたね。増加はどのくらいですか。', '女：80万円の増加です。10月は340万円ですが、第4四半期の数字ですので、第3四半期の合計には含まれていません。', '男：分かりました。9月が一番良かったですね。']},
  2: { title:'第2問 — 注文書メール', mp3:'assets/ngay10-doan2.mp3', desc:'Câu 4–6 · Đọc email xác nhận đơn hàng rồi nghe hội thoại: số lượng của 商品E và 納期 đều đã thay đổi so với email.',
    lines:[
      '女性：課長、注文内容についてご連絡します。商品Eの数量が150個から180個に変更になりました。',
      '男性：そうか。じゃあ、商品Eは216,000円で、合計は396,000円になるね。',
      '女性：はい。なお、納期も11月12日から11月16日に変更になりました。請求書はまだ発行していませんので、納品後に発行いたします。',
      '男性：分かった。では、その内容で進めてくれ。'
    ],
    vi:['Nữ: Trưởng phòng, em xin liên hệ về nội dung đặt hàng. Số lượng sản phẩm E đã đổi từ 150 cái thành 180 cái.', 'Nam: Vậy à, thế thì sản phẩm E là 216.000 yên, tổng cộng thành 396.000 yên nhỉ.', 'Nữ: Vâng. Hạn giao hàng cũng đổi từ ngày 12 tháng 11 thành ngày 16 tháng 11. Hóa đơn thì vẫn chưa phát hành nên sau khi giao hàng mới phát hành.', 'Nam: Rõ rồi, cứ tiến hành theo nội dung đó.'], en:['Woman: Manager, I\'m contacting you about the order details. The quantity of Product E has changed from 150 units to 180 units.', 'Man: I see, then Product E is 216,000 yen, and the total comes to 396,000 yen, right?', 'Woman: Yes. The delivery date has also changed from November 12 to November 16. The invoice hasn\'t been issued yet, so it will be issued after delivery.', 'Man: Understood, please proceed as described.'], ja:['女：課長、注文内容についてご連絡いたします。製品Eの数量が150個から180個に変更になりました。', '男：そうですか。では、製品Eは216,000円で、合計は396,000円になりますね。', '女：はい。納期も11月12日から11月16日に変更になりました。請求書はまだ発行されていないため、納品後に発行いたします。', '男：分かりました。その内容で進めてください。']},
  3: { title:'第3問 — 日程表', mp3:'assets/ngay10-doan3.mp3', desc:'Câu 7–9 · Đọc bảng lịch tháng 11 rồi nghe hội thoại: 研修 đã bị dời sang chiều thứ Tư, tài liệu của A社訪問 chưa được phê duyệt.',
    lines:[
      '男性：11月の予定だけど、日程に変更があるよ。',
      '女性：はい。研修は、11月17日火曜日の午後3時でしたね。',
      '男性：そうだったんだけど、先方の都合で11月18日水曜日の午後2時に変更になった。社内会議は11月18日水曜日の午前11時のままだから、午前と午後で両方できるね。',
      '女性：分かりました。A社訪問の資料ですが、まだ承認を得ていないので、当日は口頭での説明のみになりますね。',
      '男性：そのとおり。資料は承認が下りてから送ることにしよう。'
    ],
    vi:['Nam: Về lịch tháng 11, có thay đổi lịch trình đấy.', 'Nữ: Vâng, khóa đào tạo là 3 giờ chiều thứ Ba ngày 17 tháng 11 đúng không ạ.', 'Nam: Đúng là vậy, nhưng vì lý do phía đối tác nên đã đổi thành 2 giờ chiều thứ Tư ngày 18 tháng 11. Cuộc họp nội bộ vẫn giữ 11 giờ sáng thứ Tư ngày 18 tháng 11 nên sáng và chiều đều làm được cả.', 'Nữ: Em hiểu rồi. Tài liệu cho chuyến thăm công ty A thì vẫn chưa được phê duyệt nên hôm đó chỉ giải thích bằng miệng thôi đúng không ạ.', 'Nam: Đúng vậy, tài liệu thì gửi sau khi phê duyệt được cấp.'], en:['Man: Regarding the November schedule, there\'s a change to the schedule.', 'Woman: Yes, the training is at 3 p.m. on Tuesday, November 17, isn\'t it?', 'Man: That\'s right, but due to circumstances on the partner\'s side, it has been changed to 2 p.m. on Wednesday, November 18. The internal meeting remains at 11 a.m. on Wednesday, November 18, so both morning and afternoon can be done.', 'Woman: I understand. The documents for the visit to Company A haven\'t been approved yet, so on that day we\'ll only explain verbally, is that right?', 'Man: That\'s right, the documents will be sent after approval is granted.'], ja:['男：11月のスケジュールについて、日程の変更があります。', '女：はい、研修は11月17日火曜日の午後3時ですね。', '男：そのとおりですが、取引先の都合により、11月18日水曜日の午後2時に変更になりました。社内会議は11月18日水曜日の午前11時のままですので、午前も午後も両方できます。', '女：承知いたしました。A社訪問の資料はまだ承認されていないため、当日は口頭での説明のみですね。', '男：そのとおりです。資料は承認が下りてから送ります。']},
  4: { title:'第4問 — 会議室予約申込書', mp3:'assets/ngay10-doan4.mp3', desc:'Câu 10–12 · Đọc form đặt phòng họp rồi nghe hội thoại xác nhận: giờ, phòng họp và số người tham gia đều đã thay đổi so với form, プロジェクター chưa được phê duyệt.',
    lines:[
      '男性：会議室の予約について、確認させてください。',
      '女性：はい。11月20日金曜日の午後2時から午後4時まで、会議室Bでよろしいでしょうか。参加者は10名です。',
      '男性：そうだったんだけど、時間が午後3時から午後5時に変更になった。会議室も、会議室Cに変更になったよ。参加者は15名に増えたね。',
      '女性：分かりました。なお、プロジェクターについては、まだ承認を得ていないため、承認が得られ次第、手配いたします。',
      '男性：分かった。では、その内容で進めてくれ。'
    ],
    vi:['Nam: Cho tôi xác nhận về việc đặt phòng họp.', 'Nữ: Vâng, từ 2 giờ đến 4 giờ chiều thứ Sáu ngày 20 tháng 11, phòng họp B có được không ạ, số người tham gia là 10 người.', 'Nam: Đúng là vậy, nhưng giờ đã đổi thành từ 3 giờ đến 5 giờ chiều. Phòng họp cũng đổi thành phòng họp C. Số người tham gia tăng lên 15 người.', 'Nữ: Em hiểu rồi. Về máy chiếu thì vẫn chưa được phê duyệt nên ngay khi có phê duyệt em sẽ sắp xếp.', 'Nam: Rõ rồi, cứ tiến hành theo nội dung đó.'], en:['Man: Let me confirm the meeting room reservation.', 'Woman: Yes, from 2 to 4 p.m. on Friday, November 20, would Meeting Room B be all right? The number of participants is 10.', 'Man: That\'s right, but the time has changed to from 3 to 5 p.m. The meeting room has also changed to Meeting Room C. The number of participants has increased to 15.', 'Woman: I understand. The projector hasn\'t been approved yet, so as soon as approval is granted, I\'ll arrange it.', 'Man: Understood, please proceed as described.'], ja:['男：会議室の予約について確認させてください。', '女：はい、11月20日金曜日の午後2時から4時まで、会議室Bでよろしいでしょうか。参加者は10名です。', '男：そのとおりですが、時間は午後3時から5時に変更になりました。会議室も会議室Cに変更になりました。参加者は15名に増えました。', '女：承知いたしました。プロジェクターについてはまだ承認されていないため、承認が下り次第、手配いたします。', '男：分かりました。その内容で進めてください。']}
},
  segNames: null,
  questions: [
  {n:1, seg:1, q:'第3四半期の売上合計はいくらですか。', opts:['720万円','800万円','900万円','1,140万円'], ans:'B', trap:'Cộng đúng quý — tháng 10 thuộc quý 4', explain:'240+260+300=800万円； 720万円 là quý trước, 1,140万円 là cộng nhầm cả tháng 10 (quý 4).'},
  {n:2, seg:1, q:'第3四半期で売上が最も多かったのはいつですか。', opts:['7月','8月','10月','9月'], ans:'D', trap:'Cao nhất trong quý 3 — không tính tháng 10', explain:'Trong quý 3, cao nhất là 9月 300万円； 10月 340万円 cao hơn nhưng thuộc quý 4, không tính.'},
  {n:3, seg:1, q:'前の四半期と比べて、第3四半期の売上はどうなりましたか。', opts:['80万円増加した','80万円減少した','340万円増加した','変わらなかった'], ans:'A', trap:'Mức tăng = quý này − quý trước', explain:'800−720=80万円増加； 340万円 là doanh số tháng 10, không phải mức tăng.'},
  {n:4, seg:2, q:'変更後の注文合計はいくらですか。', opts:['360,000円','396,000円','432,000円','180,000円'], ans:'B', trap:'Tính lại tổng sau khi đổi số lượng', explain:'D 180,000円 + E 180×1,200=216,000円 = 396,000円； 360,000円 là tổng trước khi đổi.'},
  {n:5, seg:2, q:'納期はいつになりましたか。', opts:['11月12日','11月16日','11月14日','11月18日'], ans:'B', trap:'Ngày giao cũ trong email vs ngày giao mới', explain:'納期 đổi từ 11月12日 sang 11月16日.'},
  {n:6, seg:2, q:'請求書について正しいものはどれですか。', opts:['すでに発行した','発行しないことになった','まだ発行していないので、納品後に発行する','注文と一緒に送った'], ans:'C', trap:'「まだ発行していない」— chưa phát hành', explain:'請求書はまだ発行していない、納品後に発行.'},
  {n:7, seg:3, q:'研修はいつになりましたか。', opts:['11月17日午後3時','11月18日午前11時','11月18日午後2時','11月16日午前10時'], ans:'C', trap:'Lịch cũ trong bảng vs lịch mới trong hội thoại', explain:'Lịch mới là 11月18日水曜日午後2時； 11月17日午後3時 là lịch cũ, 午前11時 cùng ngày là 社内会議.'},
  {n:8, seg:3, q:'A社訪問について正しいものはどれですか。', opts:['資料を持参して説明する','訪問は中止になった','承認がまだ得られていないので口頭での説明のみになる','資料は当日までに承認される'], ans:'C', trap:'「まだ承認を得ていない」— chưa được duyệt', explain:'資料はまだ承認を得ていないので当日は口頭のみ； 資料 sẽ gửi sau khi 承認が下りてから.'},
  {n:9, seg:3, q:'社内会議はいつですか。', opts:['11月18日午前11時','11月17日午後3時','11月18日午後2時','11月16日午前10時'], ans:'A', trap:'Mục không đổi vs mục đã dời trong cùng ngày', explain:'社内会議 giữ nguyên 11月18日水曜日午前11時； 午後2時 cùng ngày là 研修 đã dời tới.'},
  {n:10, seg:4, q:'予約時間はいつになりましたか。', opts:['午後2時から午後4時まで','午後3時から午後5時まで','午後2時から午後5時まで','午後3時から午後4時まで'], ans:'B', trap:'Không ghép chéo giờ bắt đầu cũ với giờ kết thúc mới', explain:'時間 đổi từ 午後2時〜午後4時 sang 午後3時〜午後5時； không ghép chéo giờ bắt đầu cũ với giờ kết thúc mới.'},
  {n:11, seg:4, q:'会議室と参加者について正しいものはどれですか。', opts:['会議室C・15名','会議室B・10名','会議室C・10名','会議室B・15名'], ans:'A', trap:'Phải lấy cả hai vế mới — không ghép chéo cũ–mới', explain:'会議室 B→C và 参加者 10名→15名, phải lấy cả hai vế mới, không ghép chéo cũ–mới.'},
  {n:12, seg:4, q:'プロジェクターについて正しいものはどれですか。', opts:['すでに承認を得ている','承認がまだ得られていないので、承認が得られ次第手配する','手配は中止になった','プロジェクターは不要になった'], ans:'B', trap:'「まだ承認を得ていない」— chưa được duyệt', explain:'プロジェクターはまだ承認を得ていないため、承認が得られ次第手配する.'}
],
  instructions: `<li><strong>Khoảng 40 phút</strong> cho 12 câu nghe + đọc. Đồng hồ bắt đầu chạy khi bạn bấm <em>Bắt đầu làm bài</em>; hết giờ bài tự nộp.</li>
          <li>Bài gồm <strong>4 bộ</strong>, mỗi bộ có một tài liệu để đọc (biểu đồ cột / email / bảng lịch / form) kèm <strong>audio hội thoại</strong> và <strong>cả 3 câu của bộ hiển thị cùng nhau</strong> ngay dưới tài liệu đó, trong khung làm bài kiểu phòng thi CBT. Bấm <strong>▶ Phát đoạn nghe</strong> ở đầu mỗi bộ — audio MP3 thu sẵn, <strong>không đọc tên người nói</strong>, đúng như phòng thi.</li>
          <li>Bộ 1 là <strong>biểu đồ cột doanh số tháng</strong> — bẫy nằm ở ranh giới quý: tháng 10 thuộc quý 4. Bộ 2 là <strong>email đơn hàng</strong> — số lượng của <span class="jp">商品E</span> và <span class="jp">納期</span> đều đã thay đổi so với email. Bộ 3 là <strong>bảng lịch tháng 11</strong> — <span class="jp">研修</span> đã bị dời ngày giờ trong hội thoại. Bộ 4 là <strong>form đặt phòng họp</strong> — giờ, phòng họp và số người tham gia đều đã đổi so với form, <span class="jp">プロジェクター</span> chưa được phê duyệt.</li>
          <li>Ở chế độ <strong>Thi thật</strong>, mỗi đoạn chỉ phát <strong>1 lần duy nhất</strong>. Hãy nghe hết đoạn rồi mới trả lời 3 câu của bộ đó.</li>
          <li>Dùng cột <strong>Danh sách câu hỏi</strong> bên trái để nhảy tới câu bất kỳ (trang tự cuộn tới câu đó), hoặc phím <kbd>←</kbd> <kbd>→</kbd> để cuộn tới câu trước / câu tiếp. Phím <kbd>A</kbd>–<kbd>D</kbd> chọn đáp án cho câu bạn vừa bấm vào. Mỗi câu chỉ chọn <strong>một</strong> đáp án.</li>
          <li>Câu nào chưa chắc, bấm <strong>⚑ Đánh dấu</strong> ở ngay câu đó để quay lại sau.</li>
          <li>Nút <strong>Nộp bài</strong> luôn nằm ở thanh cuối trang (và trong cột bên trái) — bấm vào sẽ hiện hộp xác nhận, bấm <em>Nộp bài</em> trong hộp đó mới chấm điểm. Nộp xong mới hiện đáp án, giải thích tiếng Việt, transcript kèm bản dịch và sổ lỗi sai.</li>`,
  candidateInfo: { subject: 'BJT 聴読解 — Luyện tập Ngày 10', questionInfo: '12 câu · 4 bộ', time: '~40 phút', format: '棒グラフ · 注文書メール · 日程表 · 会議室予約申込書' },
  tips: ``,
  footerNote: 'Bài Ngày 10 — Luyện 聴読解 (Nghe + Đọc): biểu đồ cột doanh số, email đơn hàng, bảng lịch tháng 11 và form đặt phòng họp, mỗi tài liệu kèm một đoạn hội thoại. Audio là file MP3 thu sẵn, không đọc tên người nói.',
  scoreMessages: [
    {min: 12, text: 'Xuất sắc — sạch cả 12 câu trong bài kiểm tra bấm giờ!'},
    {min: 10, text: 'Rất tốt — gần như sạch bẫy'},
    {min: 8, text: 'Khá chắc tay — còn vài bẫy chi tiết'},
    {min: 5, text: 'Đang vào form — để ý thông tin cũ trong tài liệu và các số đã bị đổi'},
    {min: 1, text: 'Cần luyện thêm — bẫy lấy thông tin cũ trong tài liệu vẫn đang thắng'},
    {min: 0, text: 'Nền nghe + đọc đang hổng — nghe lại transcript từng bộ nhé'}
  ]
};
if(!window.EXAM_DAYS) window.EXAM_DAYS = {};
window.EXAM_DAYS[cfg.id] = cfg;
})();
