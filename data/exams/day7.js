(function(){
var cfg = {
  id: 'day7',
  type: 'choudokkai',
  title: 'Ngày 7 — Kiểm tra bấm giờ <span class="jp">聴読解</span> (Nghe + Đọc)',
  subtitle: '4 bộ · 12 câu · Mỗi bộ có biểu đồ / bảng / email / memo kèm audio hội thoại · Thứ Bảy 31/10/2026',
  timeSeconds: 40*60,
  questionCount: 12,
  segmentCount: 4,
  segLabel: 'Đoạn',
  segments: {
  1: { title:'第1問 — 棒グラフ：新商品の月別売上', mp3:'assets/ngay7-doan1.mp3', desc:'Câu 1–3 · Nhìn biểu đồ cột doanh số tháng （万円） rồi nghe hội thoại báo cáo quý 3. Bẫy chính: tháng 10 thuộc quý 4, không cộng vào tổng quý 3.',
    lines:[
      '女性：課長、第3四半期の売上についてご報告します。',
      '男性：うん、7月から9月までの合計はどうなっているかな。',
      '女性：7月が320万円、8月が280万円、9月が350万円で、合計950万円です。',
      '男性：前の四半期は860万円だったね。伸びはどうかな。',
      '女性：90万円の増加です。なお、10月は410万円でしたが、これは第4四半期の数字ですので、第3四半期の合計には含めていません。',
      '男性：分かった。9月が一番よかったんだね。'
    ],
    vi:['Nữ: Thưa Tổ trưởng, tôi xin báo cáo về doanh số quý 3 ạ.', 'Nam: Ừ, tổng từ tháng 7 đến tháng 9 thế nào rồi?', 'Nữ: Tháng 7 là 3,2 triệu yên, tháng 8 là 2,8 triệu yên, tháng 9 là 3,5 triệu yên, tổng cộng 9,5 triệu yên ạ.', 'Nam: Quý trước là 8,6 triệu yên nhỉ. Mức tăng thế nào?', 'Nữ: Tăng 900 nghìn yên ạ. Ngoài ra, tháng 10 là 4,1 triệu yên, nhưng đây là con số của quý 4 nên không tính vào tổng của quý 3 ạ.', 'Nam: Được rồi. Vậy tháng 9 là tốt nhất nhỉ.'], en:['Woman: Section Chief, I would like to report on third-quarter sales.', 'Man: Yeah, how is the total from July to September?', 'Woman: July was 3.2 million yen, August was 2.8 million yen, and September was 3.5 million yen, for a total of 9.5 million yen.', 'Man: The previous quarter was 8.6 million yen, wasn\'t it? How much of an increase is that?', 'Woman: It is an increase of 900,000 yen. In addition, October was 4.1 million yen, but that is a figure for the fourth quarter, so it is not included in the total for the third quarter.', 'Man: All right. So September was the best, then.'], ja:['女：係長、第3四半期の売上についてご報告いたします。', '男：うん、7月から9月までの合計はどうなっていますか。', '女：7月は320万円、8月は280万円、9月は350万円で、合計950万円です。', '男：前期は860万円だったね。増加はどのくらいかな。', '女：90万円の増加です。それから、10月は410万円ですが、これは第4四半期の数字ですので、第3四半期の合計には入っていません。', '男：分かった。じゃあ、9月が一番良かったんだね。']},
  2: { title:'第2問 — 出張日程表', mp3:'assets/ngay7-doan2.mp3', desc:'Câu 4–6 · Đọc bảng lịch công tác rồi nghe hội thoại: cuộc họp với B社 đã bị dời giờ, tài liệu của A社訪問 chưa được phê duyệt.',
    lines:[
      '男性：来月の出張だけど、日程表に変更があるよ。',
      '女性：はい。B社との会議は、火曜日の午後2時でしたね。',
      '男性：そうだったんだけど、先方の都合で水曜日の午後3時に変更になった。工場見学は水曜日の午前9時のままだから、午前と午後で両方できるね。',
      '女性：分かりました。A社訪問の資料ですが、まだ承認を得ていないので、当日は口頭での説明のみになりますね。',
      '男性：そのとおり。資料は承認が下りてから送ることにしよう。'
    ],
    vi:['Nam: Về chuyến công tác tháng tới, lịch trình có thay đổi đấy.', 'Nữ: Vâng. Cuộc họp với Công ty B là 2 giờ chiều thứ Ba đúng không ạ.', 'Nam: Đúng là như vậy, nhưng do phía đối tác nên đã đổi sang 3 giờ chiều thứ Tư. Tham quan nhà máy vẫn giữ nguyên 9 giờ sáng thứ Tư, nên có thể làm cả hai vào buổi sáng và buổi chiều.', 'Nữ: Vâng, tôi hiểu rồi. Tài liệu cho chuyến thăm Công ty A, vì vẫn chưa được phê duyệt nên hôm đó chỉ thuyết trình bằng miệng thôi ạ.', 'Nam: Đúng vậy. Tài liệu thì đợi phê duyệt xong rồi hãy gửi.'], en:['Man: Regarding next month\'s business trip, there has been a change to the schedule.', 'Woman: Yes. The meeting with Company B is at 2 p.m. on Tuesday, isn\'t it?', 'Man: That was the case, but due to circumstances on the other side, it has been changed to 3 p.m. on Wednesday. The factory tour remains as scheduled at 9 a.m. on Wednesday, so we can do both in the morning and the afternoon.', 'Woman: Yes, I understand. As for the materials for the visit to Company A, since they have not yet been approved, on that day we will only give an oral presentation.', 'Man: That\'s right. As for the materials, send them once the approval is complete.'], ja:['男：来月の出張について、スケジュールに変更があるんだ。', '女：はい。B社との会議は火曜日の午後2時ですよね。', '男：そうだったんだけど、先方の都合で水曜日の午後3時に変更になったんだ。工場見学は水曜日の午前9時のままなので、午前と午後で両方できるよ。', '女：はい、分かりました。A社訪問の資料は、まだ承認されていないので、当日は口頭での説明だけになります。', '男：そうだね。資料は承認が終わってから送ってください。']},
  3: { title:'第3問 — 注文書メール', mp3:'assets/ngay7-doan3.mp3', desc:'Câu 7–9 · Đọc email xác nhận đơn hàng rồi nghe hội thoại: số lượng của 商品B và 納期 đều đã thay đổi so với email.',
    lines:[
      '女性：課長、注文内容についてご連絡します。商品Bの数量が80個から100個に変更になりました。',
      '男性：そうか。じゃあ、商品Bは150,000円で、合計は270,000円になるね。',
      '女性：はい。なお、納期も11月5日から11月7日に変更になりました。請求書はまだ発行していませんので、納品後に発行いたします。',
      '男性：分かった。では、その内容で進めてくれ。'
    ],
    vi:['Nữ: Thưa Tổ trưởng, tôi xin thông báo về nội dung đơn hàng. Số lượng của sản phẩm B đã thay đổi từ 80 cái thành 100 cái ạ.', 'Nam: Vậy à. Thế thì sản phẩm B là 150.000 yên, tổng cộng thành 270.000 yên nhỉ.', 'Nữ: Vâng. Ngoài ra, thời hạn giao hàng cũng thay đổi từ ngày 5 tháng 11 sang ngày 7 tháng 11 ạ. Hóa đơn vẫn chưa phát hành, nên chúng tôi sẽ phát hành sau khi giao hàng ạ.', 'Nam: Được rồi. Vậy cứ tiến hành theo nội dung đó nhé.'], en:['Woman: Section Chief, I would like to report on the details of the order. The quantity of Product B has changed from 80 units to 100 units.', 'Man: I see. Then Product B is 150,000 yen, and the total comes to 270,000 yen, right?', 'Woman: Yes. In addition, the delivery deadline has also changed from November 5 to November 7. The invoice has not yet been issued, so we will issue it after delivery.', 'Man: All right. Please proceed on that basis.'], ja:['女：係長、注文内容についてご報告します。製品Bの数量が80個から100個に変更になりました。', '男：そうか。じゃあ、製品Bは150,000円で、合計270,000円になるね。', '女：はい。それから、納期も11月5日から11月7日に変更になりました。請求書はまだ発行していないので、納品後に発行します。', '男：分かった。じゃあ、その内容で進めてください。']},
  4: { title:'第4問 — 新商品の発売について（議事録メモ）', mp3:'assets/ngay7-doan4.mp3', desc:'Câu 10–12 · Đọc memo biên bản họp rồi nghe hội thoại xác nhận: giá và khu vực bán đã thay đổi so với memo, tài liệu quảng cáo chưa được phê duyệt.',
    lines:[
      '男性：新商品の発売について、確認させてください。価格は3,000円でしたね。',
      '女性：はい。ただ、競合の価格を考慮して、2,800円に変更することになりました。',
      '男性：分かった。販売地域はどうするかな。',
      '女性：まず関東のみとし、関西は来年1月以降に検討することになりました。なお、広告資料はまだ承認を得ていないため、承認が得られ次第、発表いたします。',
      '男性：了解した。'
    ],
    vi:['Nam: Cho tôi xác nhận về việc ra mắt sản phẩm mới. Giá là 3.000 yên đúng không?', 'Nữ: Vâng. Tuy nhiên, sau khi cân nhắc giá của đối thủ cạnh tranh, chúng tôi đã quyết định đổi thành 2.800 yên ạ.', 'Nam: Được rồi. Khu vực bán hàng thì sao?', 'Nữ: Trước mắt chỉ bán ở vùng Kanto, còn Kansai sẽ xem xét từ tháng 1 năm sau trở đi ạ. Ngoài ra, tài liệu quảng cáo vẫn chưa được phê duyệt nên ngay khi được phê duyệt, chúng tôi sẽ công bố ạ.', 'Nam: Rõ rồi.'], en:['Man: Let me confirm the launch of the new product. The price is 3,000 yen, correct?', 'Woman: Yes. However, after considering competitors\' prices, we have decided to change it to 2,800 yen.', 'Man: All right. What about the sales area?', 'Woman: For the time being, we will sell only in the Kanto region, and Kansai will be considered from January next year onward. In addition, the advertising materials have not yet been approved, so as soon as they are approved, we will announce them.', 'Man: Understood.'], ja:['男：新製品の発売について確認させてください。価格は3,000円で合っていますか。', '女：はい。ただ、競合他社の価格を考慮して、2,800円に変更することに決めました。', '男：分かった。販売地域はどうなっていますか。', '女：当面は関東地方のみで販売し、関西は来年1月以降に検討します。それから、広告資料はまだ承認されていないので、承認され次第、公表します。', '男：了解しました。']}
},
  segNames: null,
  questions: [
  {n:1, seg:1, q:'第3四半期の売上合計はいくらですか。', opts:['860万円','950万円','900万円','1,360万円'], ans:'B', trap:'Cộng đúng quý — tháng 10 thuộc quý 4', explain:'320+280+350=950万円； 860万円 là quý trước, 1,360万円 là cộng nhầm cả tháng 10 (quý 4).'},
  {n:2, seg:1, q:'第3四半期で売上が最も多かったのはいつですか。', opts:['7月','8月','10月','9月'], ans:'D', trap:'Cao nhất trong quý 3 — không tính tháng 10', explain:'Trong quý 3, cao nhất là 9月 350万円； 10月 410万円 cao hơn nhưng thuộc quý 4, không tính.'},
  {n:3, seg:1, q:'前の四半期と比べて、第3四半期の売上はどうなりましたか。', opts:['90万円増加した','90万円減少した','410万円増加した','変わらなかった'], ans:'A', trap:'Mức tăng = quý này − quý trước', explain:'950−860=90万円増加； 410万円 là doanh số tháng 10, không phải mức tăng.'},
  {n:4, seg:2, q:'B社との会議はいつになりましたか。', opts:['11月10日午後2時','11月11日午前9時','11月11日午後3時','11月9日午前10時'], ans:'C', trap:'Lịch cũ trong bảng vs lịch mới trong hội thoại', explain:'Lịch mới là 水曜日午後3時； 火曜日午後2時 là lịch cũ trong bảng, 午前9時 thứ Tư là 工場見学.'},
  {n:5, seg:2, q:'A社訪問について正しいものはどれですか。', opts:['資料を持参して説明する','訪問は中止になった','資料は当日までに承認される','承認がまだ得られていないので口頭での説明のみになる'], ans:'D', trap:'「まだ承認を得ていない」— chưa được duyệt', explain:'資料はまだ承認を得ていないので当日は口頭のみ； tài liệu sẽ gửi sau khi 承認が下りてから.'},
  {n:6, seg:2, q:'工場見学はいつですか。', opts:['11月11日午前9時','11月10日午後2時','11月11日午後3時','11月9日午前10時'], ans:'A', trap:'Mục không đổi vs mục đã dời trong cùng ngày', explain:'工場見学 giữ nguyên 水曜日午前9時； 午後3時 cùng ngày là 会議 với B社 đã dời tới.'},
  {n:7, seg:3, q:'変更後の注文合計はいくらですか。', opts:['240,000円','250,000円','270,000円','300,000円'], ans:'C', trap:'Tính lại tổng sau khi đổi số lượng', explain:'A 120,000円 + B 100×1,500=150,000円 = 270,000円； 240,000円 là tổng trong email trước khi đổi.'},
  {n:8, seg:3, q:'納期はいつになりましたか。', opts:['11月5日','11月7日','11月6日','11月8日'], ans:'B', trap:'Ngày giao cũ trong email vs ngày giao mới', explain:'納期 đổi từ 11月5日 (trong email) sang 11月7日.'},
  {n:9, seg:3, q:'請求書について正しいものはどれですか。', opts:['すでに発行した','発行しないことになった','注文と一緒に送った','まだ発行していないので、納品後に発行する'], ans:'D', trap:'「まだ発行していない」— chưa phát hành', explain:'請求書はまだ発行していないので、納品後に発行する.'},
  {n:10, seg:4, q:'価格はいくらになりましたか。', opts:['2,800円','3,000円','2,500円','まだ決まっていない'], ans:'A', trap:'Giá cũ trong memo vs giá mới', explain:'価格 đổi từ 3,000円 (trong memo) sang 2,800円 vì 競合の価格.'},
  {n:11, seg:4, q:'販売地域について正しいものはどれですか。', opts:['関東と関西で同時発売する','関西のみで発売する','まず関東のみで、関西は来年1月以降に検討する','全国で同時発売する'], ans:'C', trap:'Bán đồng thời vs bán theo giai đoạn', explain:'まず関東のみ； 関西は来年1月以降に検討 — không bán đồng thời như memo ghi.'},
  {n:12, seg:4, q:'広告資料について正しいものはどれですか。', opts:['すでに承認を得ている','承認がまだ得られていないので、承認が得られ次第発表する','発表は中止になった','広告資料は不要になった'], ans:'B', trap:'「まだ承認を得ていない」— chưa được duyệt', explain:'広告資料はまだ承認を得ていないため、承認が得られ次第発表する.'}
],
  instructions: `<li>Đây là <strong>bài kiểm tra bấm giờ</strong>: đồng hồ gợi ý <strong>40 phút</strong> cho 12 câu, <strong>làm liền mạch, không pause</strong> như trong phòng thi. Đồng hồ bắt đầu chạy khi bạn bấm <em>Bắt đầu làm bài</em>; hết giờ bài tự nộp.</li>
          <li>Bài gồm <strong>4 bộ</strong>, mỗi bộ có một tài liệu để đọc (biểu đồ cột / bảng lịch / email / memo) kèm <strong>audio hội thoại</strong> và <strong>cả 3 câu của bộ hiển thị cùng nhau</strong> ngay dưới tài liệu đó, trong khung làm bài kiểu phòng thi CBT. Bấm <strong>▶ Phát đoạn nghe</strong> ở đầu mỗi bộ — audio MP3 thu sẵn, <strong>không đọc tên người nói</strong>, đúng như phòng thi.</li>
          <li>Bộ 1 là <strong>biểu đồ cột doanh số tháng</strong> — bẫy nằm ở ranh giới quý: tháng 10 thuộc quý 4. Bộ 2 là <strong>bảng lịch công tác</strong> — một mục đã bị dời giờ trong hội thoại. Bộ 3 là <strong>email đơn hàng</strong> — số lượng và <span class="jp">納期</span> đều đã thay đổi so với email. Bộ 4 là <strong>memo <span class="jp">議事録</span></strong> về ngày phát hành sản phẩm mới — giá và khu vực bán trong memo là thông tin cũ.</li>
          <li>Ở chế độ <strong>Thi thật</strong>, mỗi đoạn chỉ phát <strong>1 lần duy nhất</strong>. Hãy nghe hết đoạn rồi mới trả lời 3 câu của bộ đó.</li>
          <li>Dùng cột <strong>Danh sách câu hỏi</strong> bên trái để nhảy tới câu bất kỳ (trang tự cuộn tới câu đó), hoặc phím <kbd>←</kbd> <kbd>→</kbd> để cuộn tới câu trước / câu tiếp. Phím <kbd>A</kbd>–<kbd>D</kbd> chọn đáp án cho câu bạn vừa bấm vào. Mỗi câu chỉ chọn <strong>một</strong> đáp án.</li>
          <li>Câu nào chưa chắc, bấm <strong>⚑ Đánh dấu</strong> ở ngay câu đó để quay lại sau.</li>
          <li>Nút <strong>Nộp bài</strong> luôn nằm ở thanh cuối trang (và trong cột bên trái) — bấm vào sẽ hiện hộp xác nhận, bấm <em>Nộp bài</em> trong hộp đó mới chấm điểm. Nộp xong mới hiện đáp án, giải thích tiếng Việt, transcript và sổ lỗi sai.</li>`,
  candidateInfo: { subject: 'BJT 聴読解 — Kiểm tra bấm giờ Ngày 7', questionInfo: '12 câu · 4 bộ', time: '40 phút · làm liền mạch', format: '棒グラフ · 日程表 · 注文書メール · 議事録メモ' },
  tips: ``,
  footerNote: 'Bài Ngày 7 — Kiểm tra bấm giờ 聴読解 (Nghe + Đọc): biểu đồ cột, bảng lịch công tác, email đơn hàng và memo 議事録, mỗi tài liệu kèm một đoạn hội thoại. Audio là file MP3 thu sẵn, không đọc tên người nói.',
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
