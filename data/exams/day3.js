(function(){
var cfg = {
  id: 'day3',
  type: 'choudokkai',
  title: 'Ngày 3 — Chẩn đoán <span class="jp">聴読解</span> (Nghe + đọc kết hợp)',
  subtitle: '3 bộ · 9 câu · Nghe audio đồng thời đọc bảng, đối chiếu số liệu giữa tai nghe và bảng hiển thị',
  timeSeconds: 35*60,
  questionCount: 9,
  segmentCount: 3,
  segLabel: 'Đoạn',
  segments: {
  1: { title:'第1問 — Bảng doanh số tháng', mp3:'assets/day3-seg1.mp3', desc:'Câu 1–3 · Nhìn bảng doanh số của A店・B店 （đơn vị: 万円） đồng thời nghe hội thoại.',
    lines:[
      {who:'male', text:'来週の会議では、第3四半期の売上を報告してもらう。A店とB店、それぞれ準備しておいてくれ。'},
      {who:'female', text:'わかりました。第3四半期は7月から9月ですね。'},
      {who:'male', text:'それから、B店は月によって差が大きいから、一番低かった月も確認しておいてくれ。'},
      {who:'female', text:'はい。あと、8月は両店の差が目立っていたと思います。そのあたりも見ておきます。'},
      {who:'male', text:'頼むよ。'}
    ],
    vi:['Tại cuộc họp tuần tới, hãy báo cáo doanh số quý 3 giúp tôi. Cửa hàng A và cửa hàng B, mỗi bên chuẩn bị sẵn nhé.', 'Vâng, tôi hiểu rồi. Quý 3 là từ tháng 7 đến tháng 9 đúng không ạ.', 'Ngoài ra, cửa hàng B chênh lệch theo tháng khá lớn, nên hãy xác nhận cả tháng thấp nhất nữa nhé.', 'Vâng. Ngoài ra, tôi nghĩ tháng 8 chênh lệch giữa hai cửa hàng khá rõ rệt. Tôi sẽ xem cả phần đó ạ.', 'Nhờ em nhé.']},
  2: { title:'第2問 — Lịch họp tuần', mp3:'assets/day3-seg2.mp3', desc:'Câu 4–6 · Nhìn lịch họp tuần đồng thời nghe thông báo thay đổi — audio ghi đè bảng.',
    lines:[
      {who:'female', text:'総務部の担当者です。来週の会議スケジュールについて、2点変更があります。'},
      {who:'male', text:'はい、お願いします。'},
      {who:'female', text:'まず、水曜日の全社会議ですが、社長の出張のため、木曜日の13時からに変更します。場所も大会議室から第2会議室に変わります。'},
      {who:'male', text:'わかりました。もう1点は？'},
      {who:'female', text:'月曜日の営業会議は、時間は同じですが、場所が第1会議室から第3会議室への変更です。'},
      {who:'male', text:'了解しました。他の会議は変更なしですね。'},
      {who:'female', text:'はい、その他は表の通りです。'}
    ],
    vi:['Tôi là nhân viên phòng Hành chính tổng hợp. Về lịch họp tuần tới, có 2 điểm thay đổi.', 'Vâng, xin anh nói ạ.', 'Trước hết, cuộc họp toàn công ty vào thứ Tư, do Giám đốc đi công tác nên sẽ đổi sang thứ Năm, bắt đầu lúc 13 giờ. Địa điểm cũng đổi từ Phòng họp lớn sang Phòng họp số 2.', 'Vâng, tôi đã rõ. Điểm còn lại là gì ạ?', 'Cuộc họp kinh doanh vào thứ Hai, giờ vẫn giữ nguyên, nhưng địa điểm đổi từ Phòng họp số 1 sang Phòng họp số 3.', 'Tôi đã nắm được ạ. Các cuộc họp khác không thay đổi đúng không ạ.', 'Đúng vậy, các cuộc họp còn lại theo đúng bảng.']},
  3: { title:'第3問 — Bảng giá phòng đào tạo', mp3:'assets/day3-seg3.mp3', desc:'Câu 7–9 · Nhìn bảng giá phòng đồng thời nghe hội thoại đặt phòng — chú ý điều kiện giảm giá ở dòng ※.',
    lines:[
      {who:'female', text:'来週の研修の件ですが、参加者は18名になりました。'},
      {who:'male', text:'18名なら会議室Bだな。午前9時から12時までで予約してくれ。プロジェクターも使うよ。'},
      {who:'female', text:'かしこまりました。会議室Bを3時間ですね。3時間の利用なので、室料は1割引になります。'},
      {who:'male', text:'頼む。'}
    ],
    vi:['Về buổi đào tạo tuần tới, số người tham dự đã thành 18 người.', '18 người thì là Phòng họp B nhỉ. Đặt phòng từ 9 giờ sáng đến 12 giờ giúp tôi. Có dùng máy chiếu nữa đấy.', 'Vâng, tôi đã rõ. Phòng họp B trong 3 giờ ạ. Vì sử dụng 3 giờ nên phí phòng được giảm 10% ạ.', 'Nhờ em nhé.']}
},
  segNames: null,
  questions: [
  {n:1, seg:1, q:'第3四半期（7月から9月）のA店の売上の合計はいくらですか。', opts:['1,210万円','1,150万円','1,180万円','1,090万円'], ans:'C', trap:'Cộng đúng 3 tháng của quý 3 (7–9月)', explain:'380+410+390 = 1.180万円.'},
  {n:2, seg:1, q:'B店の売上が最も低かったのは何月ですか。', opts:['4月','5月','6月','8月'], ans:'B', trap:'Tìm tháng thấp nhất của B店 trong bảng', explain:'B店 thấp nhất là tháng 5, 260万円.'},
  {n:3, seg:1, q:'8月には、A店とB店の売上の差はいくらありましたか。', opts:['100万円','80万円','110万円','90万円'], ans:'A', trap:'Hiệu số tháng 8 giữa hai cửa hàng', explain:'410 − 310 = 100万円.'},
  {n:4, seg:2, q:'全社会議は、変更後いつどこで開かれますか。', opts:['水曜日15時・大会議室','木曜日13時・第2会議室','木曜日15時・大会議室','水曜日13時・第2会議室'], ans:'B', trap:'Audio ghi đè bảng — lịch đã thay đổi', explain:'audio ghi đè bảng — dời sang thứ Năm 13 giờ, phòng họp số 2.'},
  {n:5, seg:2, q:'営業会議の場所は、変更後どこですか。', opts:['第3会議室','第1会議室','第2会議室','大会議室'], ans:'A', trap:'Chỉ đổi địa điểm, giờ giữ nguyên', explain:'chỉ đổi địa điểm sang phòng họp số 3, giờ giữ nguyên.'},
  {n:6, seg:2, q:'金曜日の週報会議について正しいものはどれですか。', opts:['時間が変更になった','場所が変更になった','変更はない','中止になった'], ans:'C', trap:'「その他は表の通り」= không thay đổi', explain:'「その他は表の通り」— không thay đổi.'},
  {n:7, seg:3, q:'予約する部屋と時間の組み合わせとして正しいものはどれですか。', opts:['会議室B・3時間','会議室A・3時間','会議室B・2時間','会議室A・2時間'], ans:'A', trap:'Sức chứa phòng A (10名) nhỏ hơn 18名', explain:'18 người vượt sức chứa phòng A (10 người); 9 giờ đến 12 giờ là 3 tiếng.'},
  {n:8, seg:3, q:'割引後の室料はいくらですか。', opts:['9,000円','8,100円','7,200円','8,000円'], ans:'B', trap:'Giảm 1割 chỉ tính trên tiền phòng', explain:'3.000 × 3 = 9.000, giảm 1割 còn 8.100円.'},
  {n:9, seg:3, q:'プロジェクターも含めた合計はいくらですか。', opts:['10,000円','9,000円','8,100円','9,100円'], ans:'D', trap:'Thiết bị không thuộc diện giảm giá', explain:'8.100 + 1.000 = 9.100円. B là khi giảm giá cả thiết bị; A là quên giảm giá; C là quên tiền máy chiếu.'}
],
  instructions: `<li><strong>35 phút</strong> cho 9 câu nghe + đọc kết hợp. Đồng hồ bắt đầu chạy khi bạn bấm <em>Bắt đầu làm bài</em>; hết giờ bài tự nộp.</li>
          <li>Bài gồm <strong>3 bộ</strong>, mỗi bộ có <strong>1 đoạn audio + 1 bảng + 3 câu hỏi</strong>, và cả bộ hiển thị cùng nhau trên một màn hình trong khung làm bài kiểu phòng thi CBT — vừa nghe vừa nhìn bảng để đối chiếu. Bấm <strong>▶ Phát đoạn nghe</strong> ở đầu mỗi bộ — audio MP3 thu sẵn, 2 giọng nam/nữ khác nhau, <strong>không đọc tên người nói</strong>, đúng như phòng thi.</li>
          <li>Ở chế độ <strong>Thi thật</strong>, mỗi đoạn chỉ phát <strong>1 lần duy nhất</strong>. Hãy nghe hết đoạn rồi mới trả lời 3 câu của bộ đó.</li>
          <li>Chú ý: thông tin trong <strong>audio có thể ghi đè bảng</strong> (thay đổi lịch, địa điểm…) — khi audio và bảng khác nhau, lấy audio làm chuẩn nếu câu hỏi hỏi về nội dung sau thay đổi.</li>
          <li>Dùng cột <strong>Danh sách câu hỏi</strong> bên trái để nhảy tới câu bất kỳ (trang tự cuộn tới câu đó), hoặc phím <kbd>←</kbd> <kbd>→</kbd> để cuộn tới câu trước / câu tiếp. Phím <kbd>A</kbd>–<kbd>D</kbd> chọn đáp án cho câu bạn vừa bấm vào.</li>
          <li>Câu nào chưa chắc, bấm <strong>⚑ Đánh dấu</strong> ở ngay câu đó để quay lại sau.</li>
          <li>Nút <strong>Nộp bài</strong> luôn nằm ở thanh cuối trang (và trong cột bên trái) — bấm vào sẽ hiện hộp xác nhận, bấm <em>Nộp bài</em> trong hộp đó mới chấm điểm. Nộp xong mới hiện đáp án, giải thích tiếng Việt và transcript.</li>`,
  candidateInfo: { subject: 'BJT 聴読解 — Chẩn đoán Ngày 3', questionInfo: '9 câu · 3 bộ', time: '35 phút', format: 'Bảng doanh số · Lịch họp tuần · Bảng giá phòng đào tạo' },
  tips: `nghe tới con số nào thì đối chiếu ngay ô tương ứng trong bảng và tính nhẩm luôn (tổng quý, hiệu số, giảm giá) — đừng đợi nghe hết đoạn mới quay lại tính, dễ nhầm tháng và nhầm cửa hàng.`,
  footerNote: 'Bài Ngày 3 — Chẩn đoán 聴読解 (Nghe + đọc kết hợp). Audio là file MP3 thu sẵn, 2 giọng nam/nữ khác nhau, không đọc tên người nói.',
  scoreMessages: [
    {min: 9, text: 'Xuất sắc — sạch cả 9 câu nghe + đọc kết hợp!'},
    {min: 7, text: 'Rất tốt — đối chiếu audio và bảng rất chắc'},
    {min: 5, text: 'Khá chắc tay — còn vài chỗ tính toán cần cẩn thận'},
    {min: 3, text: 'Đang vào form — chú ý phần audio ghi đè bảng'},
    {min: 1, text: 'Cần luyện thêm — nghe lại từng đoạn kèm transcript nhé'},
    {min: 0, text: 'Cần ôn lại cách đối chiếu số liệu — xem giải thích từng câu bên dưới nhé'}
  ]
};
if(!window.EXAM_DAYS) window.EXAM_DAYS = {};
window.EXAM_DAYS[cfg.id] = cfg;
})();
