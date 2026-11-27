(function(){
var cfg = {
  id: 'day16',
  type: 'choudokkai',
  title: 'Ngày 16 — Luyện <span class="jp">聴読解</span> (Nghe + Đọc)',
  subtitle: '4 bộ · 12 câu · Mỗi bộ có bảng / biểu đồ / email / form kèm audio hội thoại · Thứ Tư 11/11/2026',
  timeSeconds: 40*60,
  questionCount: 12,
  segmentCount: 4,
  segLabel: 'Đoạn',
  segments: {
  1: { title:'第1問 — 売上表：10月の支店別売上', mp3:'assets/ngay16-doan1.mp3', desc:'Câu 1–3 · Nhìn bảng doanh số tháng 10 của 4 chi nhánh （万円） rồi nghe hội thoại báo cáo. Bẫy chính: số của 東京支店 trên bảng là số cũ 480万円 — hội thoại đính chính thành 520万円， mọi phép tính dùng số mới.',
    lines:[
      '課長、10月の売上報告です。東京支店480万円、大阪支店350万円、名古屋支店290万円、福岡支店180万円です。',
      'ちょっと待って。東京支店の数字が違うよ。最終的には520万円だったはずだ。',
      'あ、そうですね。東京支店は520万円でした。失礼いたしました。',
      'では、合計をもう一度計算してくれるかな。',
      'はい。520万円に350万円、290万円、180万円を足すと、合計1,340万円です。',
      '分かった。では、その数字で報告書を作ってくれ。'
    ],
    vi:['Thưa trưởng phòng, đây là báo cáo doanh số tháng 10 ạ. Chi nhánh Tokyo 480 vạn yên, Osaka 350 vạn yên, Nagoya 290 vạn yên, Fukuoka 180 vạn yên.', 'Khoan đã. Con số của chi nhánh Tokyo sai rồi. Cuối cùng là 520 vạn yên mới đúng.', 'À, đúng vậy ạ. Chi nhánh Tokyo là 520 vạn yên. Em xin lỗi.', 'Vậy tính lại tổng giúp tôi nhé.', 'Vâng. 520 vạn yên cộng 350 vạn yên, 290 vạn yên và 180 vạn yên thì tổng là 1.340 vạn yên ạ.', 'Rõ rồi. Vậy làm báo cáo theo con số đó nhé.'], en:['Manager, here is the October sales report. Tokyo branch 480 ten thousand yen, Osaka 350 ten thousand yen, Nagoya 290 ten thousand yen, Fukuoka 180 ten thousand yen.', 'Wait a moment. The figure for the Tokyo branch is wrong. In the end, 520 ten-thousand yen is correct.', 'Ah, that\'s right. The Tokyo branch is 520 ten-thousand yen. I\'m sorry.', 'Then please recalculate the total for me.', 'Yes. 520 ten-thousand yen plus 350 ten-thousand yen, 290 ten-thousand yen and 180 ten-thousand yen gives a total of 1,340 ten-thousand yen.', 'Understood. Then please prepare the report using those figures.'], ja:['部長、10月の売上報告です。東京支店480万円、大阪350万円、名古屋290万円、福岡180万円です。', 'ちょっと待ってください。東京支店の数字が間違っています。最終的には520万円が正しいです。', 'あ、そうですね。東京支店は520万円です。申し訳ございません。', 'では、合計を計算し直してください。', 'はい。520万円に350万円、290万円、180万円を加えると、合計は1,340万円です。', '分かりました。では、その数字で報告書を作成してください。']},
  2: { title:'第2問 — 棒グラフ：製品Xの月別生産台数', mp3:'assets/ngay16-doan2.mp3', desc:'Câu 4–6 · Nhìn biểu đồ cột số lượng sản xuất sản phẩm X theo tháng （台） rồi nghe hội thoại xác nhận: tổng chỉ tính 7–9月， và tháng 10 giảm 20台 so với tháng 9.',
    lines:[
      '製品Xの生産台数について、7月から10月まで確認しよう。',
      'はい。7月は120台、8月は150台、9月は180台、10月は160台でした。',
      '一番多かったのは9月だね。7月から9月までの合計はどうなるかな。',
      '120台に150台、180台を足すと、合計450台です。',
      '10月は9月より少し減ったね。',
      'はい。180台から160台に、20台減りました。'
    ],
    vi:['Cùng xác nhận số lượng sản xuất của sản phẩm X từ tháng 7 đến tháng 10 nhé.', 'Vâng. Tháng 7 là 120 chiếc, tháng 8 là 150 chiếc, tháng 9 là 180 chiếc, tháng 10 là 160 chiếc ạ.', 'Nhiều nhất là tháng 9 nhỉ. Tổng từ tháng 7 đến tháng 9 là bao nhiêu?', '120 chiếc cộng 150 chiếc và 180 chiếc thì tổng là 450 chiếc ạ.', 'Tháng 10 giảm một chút so với tháng 9 nhỉ.', 'Vâng. Giảm 20 chiếc, từ 180 chiếc xuống còn 160 chiếc ạ.'], en:['Let\'s confirm the production quantity of Product X from July to October.', 'Yes. July was 120 units, August was 150 units, September was 180 units, and October was 160 units.', 'September was the highest, wasn\'t it? What is the total from July to September?', '120 units plus 150 units and 180 units gives a total of 450 units.', 'October decreased a little compared with September, didn\'t it?', 'Yes. It decreased by 20 units, from 180 units down to 160 units.'], ja:['製品Xの7月から10月までの生産数量を確認しましょう。', 'はい。7月は120個、8月は150個、9月は180個、10月は160個です。', '一番多いのは9月ですね。7月から9月までの合計はいくつですか。', '120個に150個と180個を加えると、合計は450個です。', '10月は9月に比べて少し減りましたね。', 'はい。180個から160個へ、20個減りました。']},
  3: { title:'第3問 — メール：納品と請求書について', mp3:'assets/ngay16-doan3.mp3', desc:'Câu 7–9 · Đọc email về giao hàng và hóa đơn rồi nghe hội thoại xác nhận: hóa đơn vẫn chưa phát hành nên sẽ phát hành sau khi giao hàng; hạn thanh toán là cuối tháng 11.',
    lines:[
      '納品の件でご連絡します。11月13日金曜日に、商品100個をお届けします。',
      'ありがとうございます。請求書も一緒にお送りいただけますか。',
      '申し訳ありません。請求書はまだ発行していませんので、納品後に発行いたします。',
      '分かりました。お支払いはいつまででしょうか。',
      '11月末までにお願いいたします。'
    ],
    vi:['Tôi liên hệ về việc giao hàng. Thứ Sáu ngày 13 tháng 11, chúng tôi sẽ giao 100 sản phẩm.', 'Cảm ơn anh. Anh gửi kèm hóa đơn cùng được không ạ?', 'Xin lỗi chị. Hóa đơn vẫn chưa phát hành nên chúng tôi sẽ phát hành sau khi giao hàng.', 'Tôi hiểu rồi. Hạn thanh toán là đến khi nào ạ?', 'Xin vui lòng thanh toán trước cuối tháng 11 ạ.'], en:['I\'m contacting you about the delivery. On Friday, November 13, we will deliver 100 products.', 'Thank you. Could you send the invoice together with it?', 'I\'m sorry. The invoice has not been issued yet, so we will issue it after delivery.', 'I understand. What is the payment deadline?', 'Please pay by the end of November.'], ja:['納品の件でご連絡しています。11月13日金曜日に、製品を100個納品いたします。', 'ありがとうございます。請求書も一緒に送っていただけますか。', '申し訳ございません。請求書はまだ発行されていないため、納品後に発行いたします。', '分かりました。支払期限はいつまでですか。', '11月末までにお支払いください。']},
  4: { title:'第4問 — 出張申請書：大阪出張', mp3:'assets/ngay16-doan4.mp3', desc:'Câu 10–12 · Đọc đơn xin công tác đi Osaka rồi nghe hội thoại: giờ họp đã đổi từ 10 giờ sáng sang 2 giờ chiều ngày 18/11; chuyến về là shinkansen 5 giờ chiều ngày 19/11.',
    lines:[
      '課長、11月18日水曜日からの大阪出張についてご相談があります。',
      '打ち合わせの時間は、午前10時からだったね。',
      'はい。ただ、取引先の都合で、午後2時からに変更になりました。',
      '分かった。帰りはどうするのかな。',
      '11月19日木曜日の午後5時の新幹線で帰ります。宿泊はホテルAの予定です。',
      '了解した。では、その内容で進めてくれ。'
    ],
    vi:['Thưa trưởng phòng, em muốn trao đổi về chuyến công tác Osaka từ thứ Tư ngày 18 tháng 11 ạ.', 'Buổi họp là từ 10 giờ sáng đúng không.', 'Vâng. Tuy nhiên, vì lý do của đối tác nên đã đổi sang 2 giờ chiều ạ.', 'Rõ rồi. Chuyến về thì thế nào?', 'Em về bằng chuyến shinkansen lúc 5 giờ chiều thứ Năm ngày 19 tháng 11. Chỗ ở dự kiến là khách sạn A ạ.', 'Đã rõ. Vậy cứ tiến hành theo nội dung đó nhé.'], en:['Manager, I would like to consult you about the business trip to Osaka from Wednesday, November 18.', 'The meeting is from 10 a.m., right?', 'Yes. However, due to the other party\'s circumstances, it has been changed to 2 p.m.', 'Understood. What about the return trip?', 'I will return on the shinkansen at 5 p.m. on Thursday, November 19. My accommodation is scheduled to be Hotel A.', 'Understood. Then please proceed on that basis.'], ja:['課長、大阪出張の件でご相談があります。11月18日水曜日からの出張です。', '会議は午前10時からですよね。', 'はい。しかし、先方の都合により、午後2時に変更になりました。', '分かりました。帰りはどうなりますか。', '11月19日木曜日の午後5時の新幹線で帰ります。宿泊先はホテルAの予定です。', '分かりました。では、その内容で進めてください。']}
},
  segNames: null,
  questions: [
  {n:1, seg:1, q:'10月の売上の合計はいくらですか。', opts:['1,300万円','1,340万円','1,260万円','1,380万円'], ans:'B', trap:'Số cũ trên bảng vs số đã đính chính trong hội thoại', explain:'東京は480万円ではなく520万円に訂正 → 520+350+290+180=1,340万円.'},
  {n:2, seg:1, q:'売上が一番多い支店はどこですか。', opts:['東京支店','大阪支店','名古屋支店','福岡支店'], ans:'A', trap:'Chi nhánh cao nhất — theo số sau đính chính', explain:'東京支店520万円が一番多い.'},
  {n:3, seg:1, q:'東京支店と福岡支店の売上の差はいくらですか。', opts:['300万円','340万円','360万円','240万円'], ans:'B', trap:'Hiệu số phải tính theo số mới của Tokyo', explain:'520−180=340万円； 300万円 là lấy số cũ 480−180.'},
  {n:4, seg:2, q:'生産台数が一番多かったのは何月ですか。', opts:['7月','8月','9月','10月'], ans:'C', trap:'Tháng sản xuất nhiều nhất trên biểu đồ', explain:'9月180台が一番多い.'},
  {n:5, seg:2, q:'7月から9月までの生産台数の合計は何台ですか。', opts:['450台','610台','430台','470台'], ans:'A', trap:'Tổng đúng 3 tháng — không cộng tháng 10', explain:'120+150+180=450台； 610台 là cộng cả tháng 10.'},
  {n:6, seg:2, q:'10月の生産台数は9月と比べてどうなりましたか。', opts:['20台増えた','20台減った','30台減った','変わらない'], ans:'B', trap:'Chiều thay đổi — tăng hay giảm', explain:'180−160=20台の減少.'},
  {n:7, seg:3, q:'請求書について正しいものはどれですか。', opts:['納品と一緒に送る','すでに発行している','まだ発行していないので、納品後に発行する','発行しない'], ans:'C', trap:'「まだ発行していない」— chưa phát hành', explain:'請求書はまだ発行していませんので、納品後に発行いたします.'},
  {n:8, seg:3, q:'商品の納品日はいつですか。', opts:['11月12日木曜日','11月13日金曜日','11月末','12月13日金曜日'], ans:'B', trap:'Ngày giao hàng vs hạn thanh toán', explain:'11月13日金曜日に納品する； 11月末 là hạn thanh toán, không phải ngày giao.'},
  {n:9, seg:3, q:'お支払いの期限はいつまでですか。', opts:['11月末まで','納品日まで','12月末まで','期限はない'], ans:'A', trap:'Hạn thanh toán vs ngày giao hàng', explain:'お支払いは11月末までにお願いいたします.'},
  {n:10, seg:4, q:'取引先との打ち合わせは何時からですか。', opts:['11月18日午前10時','11月18日午前11時','11月18日午後2時','11月19日午後2時'], ans:'C', trap:'Giờ họp cũ vs giờ họp mới sau khi đổi', explain:'打ち合わせは午後2時からに変更になった； 午前10時 là giờ cũ trước khi đổi.'},
  {n:11, seg:4, q:'帰りの新幹線は何時ですか。', opts:['11月18日午後5時','11月19日午前10時','11月19日午後2時','11月19日午後5時'], ans:'D', trap:'Ngày về và giờ về — không ghép chéo', explain:'11月19日木曜日の午後5時の新幹線で帰る； 午後2時 ngày 19 là giờ họp đã đổi (ở lựa chọn C của câu 10), không phải giờ tàu.'},
  {n:12, seg:4, q:'宿泊先はどこですか。', opts:['ホテルA','ホテルB','取引先の会社','自宅'], ans:'A', trap:'Nơi ở ghi trong đơn và được xác nhận trong hội thoại', explain:'宿泊はホテルAの予定です.'}
],
  instructions: `<li><strong>Khoảng 40 phút</strong> cho 12 câu nghe + đọc. Đồng hồ bắt đầu chạy khi bạn bấm <em>Bắt đầu làm bài</em>; hết giờ bài tự nộp.</li>
          <li>Bài gồm <strong>4 bộ</strong>, mỗi bộ có một tài liệu để đọc (bảng doanh số / biểu đồ cột / email / đơn công tác) kèm <strong>audio hội thoại</strong> và <strong>cả 3 câu của bộ hiển thị cùng nhau</strong> ngay dưới tài liệu đó, trong khung làm bài kiểu phòng thi CBT. Bấm <strong>▶ Phát đoạn nghe</strong> ở đầu mỗi bộ — audio MP3 thu sẵn, 2 giọng hội thoại, <strong>không đọc tên người nói</strong>, đúng như phòng thi.</li>
          <li>Bộ 1 là <strong>bảng doanh số tháng 10</strong>: con số của <span class="jp">東京支店</span> in trên bảng (480<span class="jp">万円</span>) là số cũ — trong hội thoại nó được đính chính thành 520<span class="jp">万円</span>, mọi phép tính (tổng, hiệu số) phải dùng số mới. Bộ 2 là <strong>biểu đồ cột sản xuất <span class="jp">製品X</span></strong>: câu tổng chỉ cộng 7–9月, đừng cộng cả tháng 10; tháng 10 giảm 20<span class="jp">台</span> so với tháng 9. Bộ 3 là <strong>email giao hàng</strong>: <span class="jp">請求書</span> <span class="jp">まだ発行していない</span> nên phát hành sau khi giao — và tách rõ ngày giao (13/11) với hạn thanh toán (cuối tháng 11). Bộ 4 là <strong><span class="jp">出張申請書</span></strong>: giờ họp đã đổi từ 10 giờ sáng sang 2 giờ chiều ngày 18/11 vì lý do của đối tác; chuyến về là shinkansen 5 giờ chiều ngày 19/11, ở khách sạn A.</li>
          <li>Ở chế độ <strong>Thi thật</strong>, mỗi đoạn chỉ phát <strong>1 lần duy nhất</strong>. Hãy nghe hết đoạn rồi mới trả lời 3 câu của bộ đó.</li>
          <li>Dùng cột <strong>Danh sách câu hỏi</strong> bên trái để nhảy tới câu bất kỳ (trang tự cuộn tới câu đó), hoặc phím <kbd>←</kbd> <kbd>→</kbd> để cuộn tới câu trước / câu tiếp. Phím <kbd>A</kbd>–<kbd>D</kbd> chọn đáp án cho câu bạn vừa bấm vào. Mỗi câu chỉ chọn <strong>một</strong> đáp án.</li>
          <li>Câu nào chưa chắc, bấm <strong>⚑ Đánh dấu</strong> ở ngay câu đó để quay lại sau.</li>
          <li>Nút <strong>Nộp bài</strong> luôn nằm ở thanh cuối trang (và trong cột bên trái) — bấm vào sẽ hiện hộp xác nhận, bấm <em>Nộp bài</em> trong hộp đó mới chấm điểm. Nộp xong mới hiện đáp án, giải thích tiếng Việt, transcript kèm bản dịch và sổ lỗi sai.</li>`,
  candidateInfo: { subject: 'BJT 聴読解 — Luyện tập Ngày 16', questionInfo: '12 câu · 4 bộ', time: '~40 phút', format: '売上表 · 棒グラフ · 納品メール · 出張申請書' },
  tips: ``,
  footerNote: 'Bài Ngày 16 — Luyện 聴読解 (Nghe + Đọc): bảng doanh số tháng 10, biểu đồ cột sản xuất sản phẩm X, email giao hàng và hóa đơn, đơn xin công tác Osaka — mỗi bộ kèm một đoạn hội thoại. Audio là file MP3 thu sẵn, không đọc tên người nói.',
  scoreMessages: [
    {min: 12, text: 'Xuất sắc — sạch cả 12 câu nghe + đọc Ngày 16!'},
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
