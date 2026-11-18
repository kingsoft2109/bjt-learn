(function(){
var cfg = {
  id: 'day6',
  type: 'dokkai',
  title: 'Ngày 6 — Luyện <span class="jp">読解</span> (Đọc hiểu)',
  subtitle: '4 văn bản · 12 câu · Chỉ đọc, không có audio · Thứ Sáu 30/10/2026',
  timeSeconds: 40*60,
  questionCount: 12,
  segmentCount: 4,
  segLabel: 'Bộ',
  segments: {
  1: { title:'第1問 — Email: thay đổi lịch研修', desc:'Câu 1–3 · Email thông báo đổi ngày研修 cho nhân viên mới.',
    subject:'件名：新入社員研修の日程変更について',
    body:'各位\n11月10日（火）に予定しておりました新入社員研修は、講師の都合により、11月17日（火）10時からに変更いたします。会場は本社3階会議室で変更ありません。なお、資料は研修の3日前までに人事部へご提出ください。すでに11月10日分として提出済みの資料は、そのままご利用いただけます。参加できない方は、11月13日（金）までに人事部までご連絡ください。\n人事部'},
  2: { title:'第2問 — Thông báo: quy tắc精算経費 mới', desc:'Câu 4–6 · Thông báo đổi quy tắc thanh toán chi phí từ 11月1日.',
    subject:'経費精算ルールの変更について（11月1日から）',
    body:'11月1日から、経費精算のルールが次のとおり変更になります。交通費は実費で精算します。ただし、タクシーを利用する場合は、事前の申請が必要です。宿泊費は1泊12,000円を上限とします。飲食費は1回5,000円を超える場合、領収書と参加者名簿の両方を提出しなければなりません。精算書は出張終了後2週間以内に経理部へ提出してください。領収書がない場合は精算できませんので、ご注意ください。\n総務部'},
  3: { title:'第3問 — 議事録：発売新商品', desc:'Câu 7–9 · Biên bản họp về ngày phát hành sản phẩm mới X.',
    subject:'議事録：新商品Xの発売について',
    body:'会議日時：10月28日　議題：新商品Xの発売について\n発売日は12月1日を予定する。ただし、パッケージデザインはまだ最終承認を受けていないため、承認が得られ次第、広報部が発表資料を作成する。価格は従来品と同じとする。販売地域は、まず関東のみとし、関西は来年1月以降に検討する。'},
  4: { title:'第4問 — 長文報告書：第3四半期営業報告', desc:'Câu 10–12 · Báo cáo doanh số quý 3 (7〜9月) — nhiều con số, hãy ghi nhãn từng số ra nháp rồi mới cộng.',
    subject:'第3四半期（7〜9月）営業報告',
    body:'第3四半期（7〜9月）の営業報告です。売上全体は、7月420万円、8月380万円、9月460万円で、合計1,260万円となりました。前四半期の1,150万円を110万円上回っています。地域別では、関東580万円、関西380万円、九州300万円で、関東が最も大きくなっています。九州は前四半期より50万円増加しました。課題として、九州の新規顧客獲得は目標の80%にとどまったため、10月から九州の営業担当を1名追加します。来期の重点は、関西の既存顧客フォローと九州の新規開拓です。なお、関西の新店舗計画はまだ社内承認を得ていないため、来期の売上見込みには含めていません。'}
},
  segNames: null,
  questions: [
  {n:1, seg:1, q:'研修はいつ行われますか。', opts:['11月10日','11月17日10時から','11月13日','11月14日'], ans:'B', trap:'Ngày mới vs ngày cũ đã đổi', explain:'Lịch mới là 11月17日（火）10時；11月10日 là lịch cũ đã đổi, 11月13日 là hạn liên hệ khi không tham dự.'},
  {n:2, seg:1, q:'資料の提出について正しいものはどれですか。', opts:['研修当日に提出する','提出は不要になった','11月10日までに提出する','新しい日程の3日前までに人事部へ提出する'], ans:'D', trap:'Hạn nộp = 3 ngày trước ngày mới', explain:'資料は研修の3日前までに人事部へ提出；資料 đã nộp cho lịch cũ vẫn dùng được, không phải nộp lại.'},
  {n:3, seg:1, q:'参加できない場合、どうすればよいですか。', opts:['11月13日（金）までに人事部へ連絡する','11月17日までに講師へ連絡する','連絡は不要だ','会場を変更する'], ans:'A', trap:'Không tham dự → liên hệ人事部 trước 11月13日', explain:'参加できない方は11月13日（金）までに人事部まで連絡.'},
  {n:4, seg:2, q:'タクシーの利用について正しいものはどれですか。', opts:['自由に利用できる','精算できない','事前に申請が必要だ','上限は5,000円だ'], ans:'C', trap:'Taxi cần申請 trước (ただし)', explain:'タクシーは事前の申請が必要；交通費 nói chung mới là 実費精算.'},
  {n:5, seg:2, q:'飲食費が1回6,000円の場合、必要なものはどれですか。', opts:['領収書と参加者名簿の両方','領収書のみ','参加者名簿のみ','事前申請書'], ans:'A', trap:'Vượt 5,000円 → cần cả hai giấy tờ', explain:'5,000円を超える飲食費は領収書と参加者名簿の両方が必要；6,000円 đã vượt ngưỡng.'},
  {n:6, seg:2, q:'精算書の提出期限はいつですか。', opts:['出張の前日まで','出張月の月末まで','出張終了後1か月以内','出張終了後2週間以内に経理部へ提出する'], ans:'D', trap:'Hạn nộp精算書 = 2 tuần sau chuyến đi', explain:'精算書は出張終了後2週間以内に経理部へ提出；không có領収書 thì không được精算.'},
  {n:7, seg:3, q:'新商品Xの発売予定日はいつですか。', opts:['10月28日','12月1日','来年1月','まだ決まっていない'], ans:'B', trap:'Ngày họp vs ngày phát hành', explain:'発売日は12月1日を予定；10月28日 là ngày họp, 来年1月 là thời điểm検討関西.'},
  {n:8, seg:3, q:'パッケージデザインについて正しいものはどれですか。', opts:['すでに最終承認を受けている','発売後に決めることになった','まだ最終承認を受けていない','広報部が承認した'], ans:'C', trap:'「まだ〜ていない」— chưa được duyệt cuối', explain:'パッケージデザインはまだ最終承認を受けていない；chỉ khi承認が得られ次第広報部 mới作成発表資料.'},
  {n:9, seg:3, q:'販売地域について正しいものはどれですか。', opts:['まず関東のみ','全国同時','関西のみ','関東と関西同時'], ans:'A', trap:'Trước mắt chỉ関東；関西 mới là検討', explain:'まず関東のみ；関西は来年1月以降に検討, không phải bán đồng thời.'},
  {n:10, seg:4, q:'第3四半期の売上合計はいくらですか。', opts:['1,150万円','1,210万円','1,300万円','1,260万円'], ans:'D', trap:'Cộng 3 tháng của quý 3 (420+380+460)', explain:'420 + 380 + 460 = 1,260万円；1,150万円 là quý trước, không phải quý 3.'},
  {n:11, seg:4, q:'地域別について正しいものはどれですか。', opts:['関西が最も大きい','九州は前四半期より50万円増加した','関東は300万円だった','九州が最も大きい'], ans:'B', trap:'Gắn đúng số với đúng khu vực', explain:'九州 tăng 50万円 so với quý trước；lớn nhất là関東580万円, 300万円 là九州.'},
  {n:12, seg:4, q:'来期の売上見込みについて正しいものはどれですか。', opts:['関西の新店舗計画を売上見込みに含めている','九州の新規開拓は来期の重点ではない','関西の新店舗計画はまだ承認を得ていないので、売上見込みに含めていない','営業担当の追加は関西である'], ans:'C', trap:'「まだ承認を得ていないため含めていない」', explain:'関西の新店舗計画はまだ社内承認を得ていないため見込みに含めていない；営業担当追加 là九州, 重点 gồm九州の新規開拓.'}
],
  instructions: `<li><strong>Khoảng 40 phút</strong> cho 12 câu đọc hiểu. Đồng hồ bắt đầu chạy khi bạn bấm <em>Bắt đầu làm bài</em>; hết giờ bài tự nộp.</li>
          <li>Bài gồm <strong>4 văn bản</strong>, mỗi văn bản có 3 câu hỏi và <strong>cả 3 câu của văn bản hiển thị cùng nhau</strong> ngay dưới văn bản đó, trong khung làm bài kiểu phòng thi CBT — đọc xong trả lời luôn cả 3 câu, không phải chuyển qua lại từng câu. <strong>Không có audio</strong> — buổi này chỉ luyện đọc.</li>
          <li>Bộ 1 là email đổi lịch <span class="jp">研修</span>, Bộ 2 là thông báo quy tắc <span class="jp">経費精算</span> mới, Bộ 3 là <span class="jp">議事録</span> về ngày phát hành sản phẩm mới, và Bộ 4 là dạng xoay vòng: <span class="jp">長文報告書</span> — báo cáo doanh số quý 3 với nhiều con số cần cộng và đối chiếu.</li>
          <li>Dùng cột <strong>Danh sách câu hỏi</strong> bên trái để nhảy tới câu bất kỳ (trang tự cuộn tới câu đó), hoặc phím <kbd>←</kbd> <kbd>→</kbd> để cuộn tới câu trước / câu tiếp. Phím <kbd>A</kbd>–<kbd>D</kbd> chọn đáp án cho câu bạn vừa bấm vào. Mỗi câu chỉ chọn <strong>một</strong> đáp án.</li>
          <li>Câu nào chưa chắc, bấm <strong>⚑ Đánh dấu</strong> ở ngay câu đó để quay lại sau.</li>
          <li>Nút <strong>Nộp bài</strong> luôn nằm ở thanh cuối trang (và trong cột bên trái) — bấm vào sẽ hiện hộp xác nhận, bấm <em>Nộp bài</em> trong hộp đó mới chấm điểm. Đáp án và giải thích tiếng Việt chỉ hiện sau khi nộp, kèm sổ lỗi sai.</li>`,
  candidateInfo: { subject: 'BJT 読解 — Luyện tập Ngày 6', questionInfo: '12 câu · 4 văn bản', time: '~40 phút', format: 'Email · Thông báo · 議事録 · 長文報告書' },
  tips: ``,
  footerNote: 'Bài Ngày 6 — Luyện 読解 (Đọc hiểu): email, thông báo, 議事録 và báo cáo dài. Không có audio.',
  scoreMessages: [
    {min: 12, text: 'Xuất sắc — sạch cả 12 câu đọc hiểu!'},
    {min: 10, text: 'Rất tốt — đọc rất chắc chi tiết và số liệu'},
    {min: 8, text: 'Khá chắc tay — còn vài chỗ cần đối chiếu kỹ'},
    {min: 5, text: 'Đang vào form — chú ý ngày giờ, điều kiện và số liệu'},
    {min: 1, text: 'Cần luyện thêm — đọc lại từng văn bản kèm giải thích nhé'},
    {min: 0, text: 'Cần ôn lại cách đọc chi tiết — xem giải thích từng câu bên dưới nhé'}
  ]
};
if(!window.EXAM_DAYS) window.EXAM_DAYS = {};
window.EXAM_DAYS[cfg.id] = cfg;
})();
