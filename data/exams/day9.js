(function(){
var cfg = {
  id: 'day9',
  type: 'dokkai',
  title: 'Ngày 9 — Luyện <span class="jp">読解</span> (Đọc hiểu)',
  subtitle: '4 văn bản · 12 câu · Chỉ đọc, không có audio · Thứ Ba 03/11/2026',
  timeSeconds: 40*60,
  questionCount: 12,
  segmentCount: 4,
  segLabel: 'Bộ',
  segments: {
  1: { title:'第1問 — Email khách hàng: đổi số lượng đặt hàng', desc:'Câu 1–3 · Email từ △△商事 đề nghị tăng số lượng 商品A, giữ nguyên 納期.',
    subject:'件名：注文内容の変更について',
    body:'○○株式会社　営業部　山田様\nいつもお世話になっております。△△商事の佐藤です。\n先日ご注文いたしました商品A（50個）につきまして、数量を80個に変更させていただけますでしょうか。なお、納期は11月20日のままでお願いいたします。追加分の代金につきましては、従来どおり、月末締め・翌月末払いにてお支払いいたします。\nお手数をおかけしますが、変更の可否について、11月6日までにご返信いただけますと幸いです。\nよろしくお願いいたします。'},
  2: { title:'第2問 — 営業報告書：doanh số tháng 10', desc:'Câu 4–6 · Báo cáo doanh số tháng 10 và dự báo tháng 11 — nhiều con số, hãy ghi nhãn từng số ra nháp rồi mới cộng.',
    subject:'10月度　営業報告書（抜粋）',
    body:'10月の売上は、東京支店420万円、大阪支店380万円、名古屋支店300万円、合計1,100万円で、前月比80万円の増加となりました。\n11月の売上見込みは、東京支店450万円、大阪支店400万円、名古屋支店320万円、合計1,170万円です。なお、福岡の新規出店計画は、まだ社内承認を得ていないため、11月の見込みには含めていません。'},
  3: { title:'第3問 — Thông báo: đăng ký làm việc tại nhà', desc:'Câu 7–9 · Thông báo nội bộ về hạn chót, cách 申請 và quy định ngày có 会議.',
    subject:'社内通知：在宅勤務の申請について',
    body:'在宅勤務を希望する場合は、前週の金曜日までに、直属の上司に申請してください。\n申請は、専用フォームから行ってください。メールでの申請は受け付けません。\n会議がある日は、原則として出社してください。ただし、上司の許可があれば、在宅勤務でも会議に参加できます。'},
  4: { title:'第4問 — 語彙・文法：điền kính ngữ vào email', desc:'Câu 10–12 · Dạng mới: chọn từ/cụm kính ngữ đúng điền vào 3 chỗ trống （　1　）〜（　3　） trong email nội bộ.',
    subject:'社内メール：来週の会議資料について',
    body:'お疲れさまです。来週の会議の資料について、（　1　）。参加者は20名で、資料は1人2部ずつ用意する予定です。なお、最終確認が終わり（　2　）、印刷いたします。ご不明な点がございましたら、（　3　）ください。'}
},
  segNames: null,
  questions: [
  {n:1, seg:1, q:'変更後の数量は何個ですか。', opts:['50個','80個','30個','130個'], ans:'B', trap:'Số mới 80 vs số cũ 50 / phần tăng thêm 30', explain:'数量を80個に変更 — 80 là số lượng mới; 50 là số cũ, 30 là phần tăng thêm, 130 là cộng nhầm cũ + mới.'},
  {n:2, seg:1, q:'納期について正しいものはどれですか。', opts:['11月20日から11月6日に変更になった','11月20日のままである','11月6日が納期である','まだ決まっていない'], ans:'B', trap:'11月6日 là hạn trả lời, không phải 納期', explain:'納期は11月20日のまま — 11月6日 là hạn trả lời về việc có chấp nhận thay đổi hay không, không phải 納期.'},
  {n:3, seg:1, q:'追加分の代金の支払い方法はどれですか。', opts:['月末締め・翌月末払い','納品時に現金で支払う','前払い','11月20日に支払う'], ans:'A', trap:'Thanh toán giữ nguyên cách cũ （従来どおり）', explain:'従来どおり、月末締め・翌月末払いにてお支払い — giữ nguyên cách thanh toán cũ cho phần 追加分.'},
  {n:4, seg:2, q:'10月の売上合計はいくらですか。', opts:['1,020万円','1,100万円','1,170万円','800万円'], ans:'B', trap:'Cộng 3 chi nhánh tháng 10 (420+380+300)', explain:'420 + 380 + 300 = 1,100万円; 1,170 là dự báo tháng 11, 1,020 là doanh số tháng 9 suy ra từ mức tăng 80万円 (1,100 − 80).'},
  {n:5, seg:2, q:'11月の見込みについて正しいものはどれですか。', opts:['福岡の新規出店を含めている','福岡の新規出店は含めていない（まだ社内承認を得ていないため）','名古屋の見込みは300万円である','大阪の見込みは450万円である'], ans:'B', trap:'「まだ承認を得ていないため含めていない」', explain:'福岡の新規出店計画はまだ社内承認を得ていないため、見込みには含めていない. 300万円 là doanh số tháng 10 của 名古屋 (dự báo là 320万円); 450万円 là dự báo của 東京, không phải 大阪.'},
  {n:6, seg:2, q:'11月の見込みは、10月の実績と比べてどうなりますか。', opts:['70万円増える','80万円増える','70万円減る','変わらない'], ans:'A', trap:'So tháng 11 với tháng 10, không phải tháng 10 với tháng 9', explain:'1,170 − 1,100 = 70万円の増加; 80万円 là mức tăng của tháng 10 so với tháng 9, không phải tháng 11 so với tháng 10.'},
  {n:7, seg:3, q:'在宅勤務の申請の締め切りはいつですか。', opts:['当日の朝まで','前週の金曜日まで','前週の月曜日まで','会議の前日まで'], ans:'B', trap:'Hạn 申請 = thứ Sáu tuần trước （前週の金曜日）', explain:'前週の金曜日までに、直属の上司に申請する.'},
  {n:8, seg:3, q:'申請方法について正しいものはどれですか。', opts:['メールで申請する','専用フォームから申請する','口頭で申請する','申請は不要である'], ans:'B', trap:'メールでの申請は受け付けない', explain:'専用フォームから行うこと; メールでの申請は受け付けないと明記されている.'},
  {n:9, seg:3, q:'会議がある日の在宅勤務について正しいものはどれですか。', opts:['原則として出社するが、上司の許可があれば在宅勤務でも会議に参加できる','会議がある日は必ず出社しなければならない','会議がある日は申請が不要である','在宅勤務の日は会議に参加できない'], ans:'A', trap:'Nguyên tắc + ngoại lệ （ただし）— giữ cả hai vế', explain:'原則として出社, ただし上司の許可があれば在宅でも参加できる — phải giữ cả hai vế (nguyên tắc + ngoại lệ), không tuyệt đối hóa vế nào.'},
  {n:10, seg:4, q:'（　1　）に入るものはどれですか。', opts:['ご確認させてください','ご確認してください','確認してあげる','確認させてもらう'], ans:'A', trap:'Hướng kính ngữ: xin phép xác nhận = ご確認させてください', explain:'ご確認させてください là 謙譲語 đúng khi xin phép xác nhận; ご確認してください là dạng mệnh lệnh, không dùng với cấp trên; 確認してあげる・確認させてもらう sai hướng kính ngữ và thiếu lịch sự trong email công việc.'},
  {n:11, seg:4, q:'（　2　）に入るものはどれですか。', opts:['次第','までに','ながら','たら'], ans:'A', trap:'Cụm cố định 〜終わり次第', explain:'最終確認が終わり次第、印刷いたします là cụm cố định (ngay khi xong xác nhận cuối thì in); までに・ながら không hợp nghĩa ở đây; たら đứng sau dạng ます không thành câu đúng (phải là 終わったら).'},
  {n:12, seg:4, q:'（　3　）に入るものはどれですか。', opts:['お気軽にお問い合わせ','気軽に問い合わせてあげ','問い合わせてやっ','問い合わせてちょうだい'], ans:'A', trap:'Mẫu lịch sự chuẩn お気軽にお問い合わせください', explain:'お気軽にお問い合わせください là mẫu câu lịch sự chuẩn khi mời liên hệ; các đáp án còn lại đều là cách nói suồng sã/thiếu lịch sự, không dùng trong email công việc.'}
],
  instructions: `<li><strong>Khoảng 40 phút</strong> cho 12 câu đọc hiểu. Đồng hồ bắt đầu chạy khi bạn bấm <em>Bắt đầu làm bài</em>; hết giờ bài tự nộp.</li>
          <li>Bài gồm <strong>4 bộ</strong>, mỗi bộ có 1 văn bản + 3 câu hỏi và <strong>cả 3 câu của bộ hiển thị cùng nhau</strong> ngay dưới văn bản đó, trong khung làm bài kiểu phòng thi CBT — đọc xong trả lời luôn cả 3 câu, không phải chuyển qua lại từng câu. <strong>Không có audio</strong> — buổi này chỉ luyện đọc.</li>
          <li>Bộ 1 là email khách hàng đổi số lượng đặt hàng, Bộ 2 là <span class="jp">営業報告書</span> tháng 10 với nhiều con số phải cộng và đối chiếu, Bộ 3 là thông báo nội bộ về quy định <span class="jp">在宅勤務</span>, và Bộ 4 là <strong>dạng mới <span class="jp">語彙・文法</span></strong>: điền từ/cụm kính ngữ đúng vào 3 chỗ trống trong một email nội bộ.</li>
          <li>Dùng cột <strong>Danh sách câu hỏi</strong> bên trái để nhảy tới câu bất kỳ (trang tự cuộn tới câu đó), hoặc phím <kbd>←</kbd> <kbd>→</kbd> để cuộn tới câu trước / câu tiếp. Phím <kbd>A</kbd>–<kbd>D</kbd> chọn đáp án cho câu bạn vừa bấm vào. Mỗi câu chỉ chọn <strong>một</strong> đáp án.</li>
          <li>Câu nào chưa chắc, bấm <strong>⚑ Đánh dấu</strong> ở ngay câu đó để quay lại sau.</li>
          <li>Nút <strong>Nộp bài</strong> luôn nằm ở thanh cuối trang (và trong cột bên trái) — bấm vào sẽ hiện hộp xác nhận, bấm <em>Nộp bài</em> trong hộp đó mới chấm điểm. Đáp án và giải thích tiếng Việt chỉ hiện sau khi nộp, kèm sổ lỗi sai.</li>`,
  candidateInfo: { subject: 'BJT 読解 — Luyện tập Ngày 9', questionInfo: '12 câu · 4 bộ', time: '~40 phút', format: 'Email nghiệp vụ · 営業報告書 · 社内通知 · 語彙・文法' },
  tips: `ở bộ 2, ghi nhãn từng con số (tháng 10 / dự báo tháng 11 / tháng 9) ra nháp trước khi cộng; ở bộ 4, kiểm tra hướng kính ngữ — ai làm gì cho ai — trước khi chọn mẫu câu.`,
  footerNote: 'Bài Ngày 9 — Luyện 読解 (Đọc hiểu): email nghiệp vụ, báo cáo doanh số, thông báo nội bộ và語彙・文法 kính ngữ. Không có audio.',
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
