(function(){
var cfg = {
  id: 'day2',
  type: 'dokkai',
  title: 'Ngày 2 — Chẩn đoán <span class="jp">読解</span> (Đọc hiểu)',
  subtitle: '3 văn bản · 9 câu · Đọc email &amp; bảng giá, đối chiếu chi tiết và số liệu',
  timeSeconds: 30*60,
  questionCount: 9,
  segmentCount: 3,
  segLabel: 'Bộ',
  segments: {
  1: { title:'第1問 — Email nội bộ', desc:'Câu 1–3 · Email về thay đổi lịch họp và nộp báo cáo.',
    subject:'件名：来週の営業会議の日程変更と資料提出について',
    body:'営業部各位\nお疲れ様です。総務部の担当者です。\n来週火曜日10時から予定していた営業会議は、社長の出張のため、水曜日14時からに変更となりました。場所は第2会議室で変わりません。\nつきましては、第3四半期の売上報告書を、月曜日の17時までに新しい会議室予約システムから提出してください。なお、今回から資料を印刷して持参する必要はありません。当日は各自のパソコンから資料を確認します。\nご不明な点があれば、総務部までご連絡ください。'},
  2: { title:'第2問 — Bảng giá phòng in nội bộ', desc:'Câu 4–6 · Bảng giá — chú ý điều kiện giảm giá ở dòng ※ và tính toán trước khi chọn.' },
  3: { title:'第3問 — Email nghiệp vụ', desc:'Câu 7–9 · Email về báo giá, phê duyệt và hạn giao hàng.',
    subject:'件名：見積書の受領と発注手続きについて',
    body:'購買部 ご担当者様\nいつもお世話になっております。営業部の担当者です。\n昨日、見積書を受け取りました。ありがとうございました。\nただ、発注は部長の承認を得てからとなります。承認は明後日までに出る予定ですので、正式な発注はその後になります。\nまた、希望納期は11月10日でしたが、先方からは在庫の関係で11月15日になるとの回答がありました。承認が出次第、先方と納期を調整いたします。\nよろしくお願いいたします。'}
},
  segNames: null,
  questions: [
  {n:1, seg:1, q:'会議が水曜日に変更になった理由は何ですか。', opts:['社長が出張するため','第2会議室が使えないため','売上報告書が遅れているため','参加者が増えたため'], ans:'A', explain:'文中「社長の出張のため」. Phòng họp và báo cáo đều được nhắc tới nhưng không phải lý do đổi lịch.'},
  {n:2, seg:1, q:'第3四半期の売上報告書の提出期限はいつですか。', opts:['火曜日の10時まで','月曜日の17時まで','水曜日の14時まで','会議の前日まで'], ans:'B', explain:'「月曜日の17時までに…提出してください」. 10時 và 14時 là giờ họp cũ/mới, không phải hạn nộp.'},
  {n:3, seg:1, q:'今回から不要になったことは何ですか。', opts:['資料を印刷して持参すること','パソコンを持参すること','資料を確認すること','総務部へ連絡すること'], ans:'A', explain:'「資料を印刷して持参する必要はありません」. Vẫn phải xem tài liệu bằng máy tính cá nhân.'},
  {n:4, seg:2, q:'カラー印刷を150枚した場合、割引後の印刷代はいくらですか。', opts:['7,500円','6,750円','6,000円','5,000円'], ans:'B', explain:'150 × 50 = 7.500円； từ 100枚 trở lên giảm 1割 (10%) → 6.750円. Đáp án A là khi quên giảm giá.'},
  {n:5, seg:2, q:'カラー印刷150枚と製本150冊をした場合、合計はいくらですか。', opts:['22,500円','20,250円','21,750円','19,750円'], ans:'C', explain:'in 6.750 + đóng sách 150 × 100 = 15.000 → 21.750円. A là quên giảm giá; B là giảm giá cả tiền đóng sách, trong khi bảng ghi rõ đóng sách không thuộc diện giảm.'},
  {n:6, seg:2, q:'割引について正しいものはどれですか。', opts:['100枚以上の場合、印刷代が1割引になる','製本代も1割引になる','すべての料金が1割引になる','100枚未満の場合に割引が適用される'], ans:'A', explain:'đúng nguyên văn điều kiện ※ trong bảng.'},
  {n:7, seg:3, q:'現在の状況として正しいものはどれですか。', opts:['もう発注が完了した','部長の承認はすでに下りた','まだ正式には発注していない','納期は11月10日に決まった'], ans:'C', explain:'「発注は部長の承認を得てから」「正式な発注はその後」— đơn hàng chưa được phát hành.'},
  {n:8, seg:3, q:'先方が提示した納期はいつですか。', opts:['11月10日','11月12日','11月15日','11月末'], ans:'C', explain:'10日 là ngày giao mong muốn của bên mình; 15日 mới là ngày đối tác trả lời.'},
  {n:9, seg:3, q:'次の手続きとして正しいものはどれですか。', opts:['すぐに先方へ発注する','部長の承認を得てから、先方と納期を調整する','見積書をもう一度送ってもらう','納期の調整は不要である'], ans:'B', explain:'「承認が出次第、先方と納期を調整いたします」.'}
],
  instructions: `<li><strong>30 phút</strong> cho 9 câu đọc hiểu. Đồng hồ bắt đầu chạy khi bạn bấm <em>Bắt đầu làm bài</em>; hết giờ bài tự nộp.</li>
          <li>Bài gồm <strong>3 văn bản</strong>, mỗi văn bản có 3 câu hỏi và <strong>cả 3 câu của văn bản hiển thị cùng nhau</strong> ngay dưới văn bản đó, trong khung làm bài kiểu phòng thi CBT — đọc xong trả lời luôn cả 3 câu, không phải chuyển qua lại từng câu.</li>
          <li>Không có audio. Văn bản 2 là <strong>bảng giá</strong> — chú ý điều kiện giảm giá ghi ở dòng ※ và tính toán cẩn thận trước khi chọn.</li>
          <li>Dùng cột <strong>Danh sách câu hỏi</strong> bên trái để nhảy tới câu bất kỳ (trang tự cuộn tới câu đó), hoặc phím <kbd>←</kbd> <kbd>→</kbd> để cuộn tới câu trước / câu tiếp. Phím <kbd>A</kbd>–<kbd>D</kbd> chọn đáp án cho câu bạn vừa bấm vào.</li>
          <li>Câu nào chưa chắc, bấm <strong>⚑ Đánh dấu</strong> ở ngay câu đó để quay lại sau.</li>
          <li>Nút <strong>Nộp bài</strong> luôn nằm ở thanh cuối trang (và trong cột bên trái) — bấm vào sẽ hiện hộp xác nhận, bấm <em>Nộp bài</em> trong hộp đó mới chấm điểm. Đáp án và giải thích tiếng Việt chỉ hiện sau khi nộp.</li>`,
  candidateInfo: { subject: 'BJT 読解 — Chẩn đoán Ngày 2', questionInfo: '9 câu · 3 văn bản', time: '30 phút', format: 'Email nội bộ · Bảng giá · Email nghiệp vụ' },
  tips: `đọc câu hỏi trước rồi quay lại văn bản tìm đúng dòng chứa thông tin — ngày giờ, con số và điều kiện (※) trong bài đọc thường là chỗ đặt bẫy.`,
  footerNote: 'Bài Ngày 2 — Chẩn đoán 読解 (Đọc hiểu): email nội bộ, bảng giá và email nghiệp vụ.',
  scoreMessages: [
    {min: 9, text: 'Xuất sắc — sạch cả 9 câu đọc hiểu!'},
    {min: 7, text: 'Rất tốt — đọc rất chắc chi tiết'},
    {min: 5, text: 'Khá chắc tay — còn vài chỗ cần đối chiếu kỹ'},
    {min: 3, text: 'Đang vào form — chú ý ngày giờ và số liệu'},
    {min: 1, text: 'Cần luyện thêm — đọc lại từng văn bản kèm giải thích nhé'},
    {min: 0, text: 'Cần ôn lại cách đọc chi tiết — xem giải thích từng câu bên dưới nhé'}
  ]
};
if(!window.EXAM_DAYS) window.EXAM_DAYS = {};
window.EXAM_DAYS[cfg.id] = cfg;
})();
