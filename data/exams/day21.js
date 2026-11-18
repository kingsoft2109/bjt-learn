(function(){
var cfg = {
  id: 'day21',
  type: 'dokkai',
  title: 'Ngày 21 — Luyện <span class="jp">読解</span> (Đọc hiểu)',
  subtitle: '4 bộ · 12 câu · Chỉ đọc, không có audio · Thứ Ba 17/11/2026',
  timeSeconds: 40*60,
  questionCount: 12,
  segmentCount: 4,
  segLabel: 'Bộ',
  segments: {
  1: { title:'第1問 — 語彙・文法：社内連絡 — 新システムの導入について', desc:'Câu 1–3 · Thông báo nội bộ về việc triển khai hệ thống quản lý bán hàng mới — chọn từ/cụm đúng nhất điền vào （　　1　　）〜（　　3　　）: 〜にあたって, ご連絡いたします và cụm cố định よろしくお願い申し上げます.',
    subject:'社内連絡：新システムの導入について',
    body:'来月から新しい販売管理システムを導入することになりました。新システムの導入（　　1　　）、来週、全部署を対象とした研修を実施いたします。研修の日程につきましては、後日、担当者よりご連絡（　　2　　）。今回の件につきましては、ご理解とご協力のほど、よろしくお願い（　　3　　）。',
    vi:['Từ tháng sau, công ty sẽ triển khai hệ thống quản lý bán hàng mới. Nhân dịp triển khai hệ thống mới, vào tuần tới chúng tôi sẽ tổ chức buổi đào tạo cho toàn bộ các phòng ban. Về lịch trình buổi đào tạo, người phụ trách sẽ liên lạc lại sau.', 'Về việc này, rất mong nhận được sự thông cảm và hợp tác của quý vị. Trân trọng cảm ơn.']},
  2: { title:'第2問 — 表現力：Hội thoại điền chỗ trống — cách nói lịch sự, mềm mỏng', desc:'Câu 4–6 · Ba đoạn hội thoại ngắn, mỗi đoạn điền một chỗ trống — chọn cách nói lịch sự, mềm mỏng đúng nhất: đồng cảm trước khi từ chối, hỏi giờ nghe điện thoại bằng thì hiện tại và mời xem tài liệu bằng tôn kính ngữ.',
    subject:'表現力 — Hội thoại điền chỗ trống',
    body:'A：予算をもう少し増やしていただけないでしょうか。\nB：おっしゃることはよく（　　4　　）が、予算の上限がありますので、今回は難しいと思います。\n\n「田中様のお電話でしょうか。私、アイエス商事の佐藤と申しますが、今、（　　5　　）。」\n\n「それでは、さっそくですが、お手元の資料を（　　6　　）。」',
    vi:['A: Anh/chị có thể tăng thêm một chút ngân sách được không ạ? B: Tôi rất hiểu điều anh/chị nói, nhưng vì ngân sách có giới hạn nên lần này e là khó.', '“Có phải số điện thoại của ông Tanaka không ạ? Tôi là Sato ở công ty IS Shoji, hiện tại bây giờ có tiện nghe điện thoại không ạ?”', '“Vậy thì, xin đi thẳng vào vấn đề, mời anh/chị xem tài liệu trước mặt.”']},
  3: { title:'第3問 — 短文読解：社内メール — 10月度 広告費報告', desc:'Câu 7–9 · Email báo cáo chi phí quảng cáo tháng 10 và dự báo tháng 11 — ghi nhãn từng con số (thực tế tháng 10 / ngân sách / dự báo tháng 11) ra nháp rồi mới cộng trừ; chiến dịch mới ở 札幌 まだ社内承認を得ていない nên chưa tính vào dự báo tháng 11.',
    subject:'件名：10月度 広告費報告',
    body:'10月の広告費は、制作費42万円、媒体費68万円、イベント費35万円、合計145万円でした。予算は160万円でしたので、15万円余りました。\n11月の広告費の見込みは150万円です。なお、札幌での新規キャンペーンは、まだ社内承認を得ていないため、11月の見込みには含めていません。',
    vi:['Chi phí quảng cáo tháng 10: phí sản xuất 42 vạn yên, phí phương tiện truyền thông 68 vạn yên, phí sự kiện 35 vạn yên, tổng cộng 145 vạn yên. Ngân sách là 160 vạn yên nên còn dư 15 vạn yên.', 'Dự báo chi phí quảng cáo tháng 11 là 150 vạn yên. Ngoài ra, chiến dịch mới ở Sapporo vẫn chưa được phê duyệt nội bộ nên chưa được tính vào dự báo tháng 11.']},
  4: { title:'第4問 — 長文読解：報告書 — 11月度 販売促進活動の報告', desc:'Câu 10–12 · Báo cáo hoạt động xúc tiến bán hàng — doanh số TX-300 tháng 10 vượt mục tiêu 60台; tờ rơi キャンペーン まだ印刷が終わっていない nên in xong mới gửi; và hai người phụ trách hai việc khác nhau — giữ đúng cặp “việc → người”.',
    subject:'報告書：11月度 販売促進活動の報告',
    body:'1．10月の販売実績について\n新製品「TX-300」の10月の販売台数は、目標800台に対して860台となり、60台上回った。内訳は、東京地区480台、大阪地区380台であった。\n2．11月のキャンペーンについて\n11月20日金曜日から、全国の販売店でキャンペーンを実施する。ただし、キャンペーンのチラシは、まだ印刷が終わっていないため、印刷が終わり次第、各販売店に送ることになった。\n3．担当について\nキャンペーンの担当は営業部の山田さん、チラシの発送は総務部の高橋さんが担当することになった。',
    vi:['1. Về kết quả bán hàng tháng 10: Số lượng bán ra trong tháng 10 của sản phẩm mới “TX-300” là 860 chiếc so với mục tiêu 800 chiếc, vượt 60 chiếc. Chi tiết: khu vực Tokyo 480 chiếc, khu vực Osaka 380 chiếc.', '2. Về chiến dịch tháng 11: Từ thứ Sáu ngày 20 tháng 11, chiến dịch sẽ được triển khai tại các cửa hàng bán lẻ trên toàn quốc. Tuy nhiên, vì tờ rơi của chiến dịch vẫn chưa in xong, nên đã quyết định sẽ gửi đến từng cửa hàng ngay khi in xong.', '3. Về phân công: Anh/chị Yamada của phòng Kinh doanh phụ trách chiến dịch, anh/chị Takahashi của phòng Tổng vụ phụ trách việc gửi tờ rơi.']}
},
  segNames: { 1:'語彙・文法', 2:'表現力 — Cách nói lịch sự', 3:'短文読解 — 広告費報告', 4:'長文読解 — 販売促進活動の報告' },
  questions: [
  {n:1, seg:1, q:'新システムの導入（　　）、来週、全部署を対象とした研修を実施いたします。', opts:['あたり','にあたって','あたっては','あたりに'], ans:'B', trap:'「導入にあたって」= nhân dịp, khi tiến hành việc導入; 「あたり」 là "mỗi/khoảng", không đi với dạng này', explain:'「導入にあたって」= nhân dịp, khi tiến hành việc導入; 「あたり」 là "mỗi/khoảng" (1人あたり), không đi với dạng này; 「あたっては」 thiếu に và mang nghĩa điều kiện; 「あたりに」 không phải dạng đúng.'},
  {n:2, seg:1, q:'研修の日程につきましては、後日、担当者よりご連絡（　　）。', opts:['します','いたします','になります','されます'], ans:'B', trap:'「ご連絡いたします」 là khiêm nhường ngữ chuẩn (phía mình liên lạc); になります là tôn kính ngữ — sai hướng', explain:'「ご連絡いたします」 là dạng khiêm nhường ngữ chuẩn (phía mình liên lạc); A là thể thường, sai văn phong trang trọng; C là tôn kính ngữ (hành động của đối phương), sai hướng; D là bị động, sai nghĩa.'},
  {n:3, seg:1, q:'今回の件につきましては、ご理解とご協力のほど、よろしくお願い（　　）。', opts:['申し上げます','いたします','くださいます','いただきます'], ans:'A', trap:'Cụm cố định 「よろしくお願い申し上げます」 trong văn bản trang trọng', explain:'Cụm cố định 「よろしくお願い申し上げます」; 「お願いいたします」 cũng nghe được nhưng không phải cụm chuẩn trong văn bản trang trọng này; 「お願いくださいます」 sai hướng (nhờ đối phương làm); 「お願いいただきます」 sai nghĩa.'},
  {n:4, seg:2, q:'A：予算をもう少し増やしていただけないでしょうか。 B：おっしゃることはよく（　　）が、予算の上限がありますので、今回は難しいと思います。', opts:['わかります','わかりません','わかるはずです','わかっていません'], ans:'A', trap:'Đồng cảm trước rồi mới từ chối: 「よくわかりますが」; わかりません mâu thuẫn với vế sau', explain:'「おっしゃることはよくわかりますが」 là cách mềm mỏng để từ chối sau khi tỏ ý đồng cảm; B mâu thuẫn với vế sau; C là suy đoán, không phải lời đáp lịch sự; D sai nghĩa.'},
  {n:5, seg:2, q:'「田中様のお電話でしょうか。私、アイエス商事の佐藤と申しますが、今、（　　）。」', opts:['お電話結構だったでしょうか','お電話失礼でしょうか','お電話よろしかったでしょうか','お電話よろしいでしょうか'], ans:'D', trap:'Hỏi về hiện tại phải dùng thì hiện tại よろしい; だった／よろしかった là quá khứ — sai thì', explain:'Khi gọi điện cho người khác, hỏi 「今、お電話よろしいでしょうか」= bây giờ tiện nghe điện thoại không; A/C sai thì (quá khứ, không dùng để hỏi hiện tại); B sai nghĩa.'},
  {n:6, seg:2, q:'「それでは、さっそくですが、お手元の資料を（　　）。」', opts:['拝見してください','ご覧ください','ご拝読ください','見られてください'], ans:'B', trap:'ご覧ください là tôn kính ngữ của 見る (mời đối phương xem); 拝見 là khiêm nhường — phía mình xem, sai hướng', explain:'「お手元の資料をご覧ください」= xin mời xem tài liệu trước mặt (tôn kính ngữ của 見る); A sai hướng (拝見 là khiêm nhường ngữ — phía mình xem); C là dạng sai; D là bị động, sai văn phong.'},
  {n:7, seg:3, q:'10月の広告費の合計はいくらですか。', opts:['160万円','145万円','150万円','110万円'], ans:'B', trap:'Cộng 3 khoản tháng 10 (42+68+35); 160万円 là予算, 150万円 là見込み tháng 11', explain:'42+68+35=145万円; 160万円 là予算, 150万円 là見込み11月, 110万円 là cộng thiếu 1 khoản (42+68).'},
  {n:8, seg:3, q:'10月の広告費は、予算と比べてどうなりますか。', opts:['15万円余った','5万円余った','10万円余った','15万円不足した'], ans:'A', trap:'予算160−実績145=15万円余った; 5万円 và 10万円 đều lấy cặp số sai', explain:'予算160−実績145=15万円余った; 5万円 là見込み11月150−実績145 (cặp sai), 10万円 là予算160−見込み150 (cặp sai).'},
  {n:9, seg:3, q:'札幌での新規キャンペーンについて正しいものはどれですか。', opts:['11月の見込みに含めている','すでに社内承認を得ている','11月の見込みに含めていない（まだ社内承認を得ていないため）','10月の広告費に含めている'], ans:'C', trap:'「まだ社内承認を得ていないため、見込みには含めていない」— chưa duyệt = không tính vào dự báo', explain:'札幌の新規キャンペーンはまだ社内承認を得ていないため、11月の見込みには含めていない.'},
  {n:10, seg:4, q:'新製品「TX-300」の10月の販売台数は、目標と比べてどうなりますか。', opts:['60台上回った','60台下回った','860台上回った','100台上回った'], ans:'A', trap:'実績860−目標800=60台上回った; 860 là実績, 100 là hiệu Tokyo−Osaka — đều không phải hiệu được hỏi', explain:'実績860−目標800=60台上回った; C lấy nhầm実績860 làm hiệu số; D là 480−380=100 (hiệu số Tokyo vs Osaka — cặp sai).'},
  {n:11, seg:4, q:'キャンペーンのチラシについて正しいものはどれですか。', opts:['すでに各販売店に送った','まだ印刷が終わっていないので、印刷が終わり次第送る','送らないことになった','11月20日に印刷する'], ans:'B', trap:'まだ印刷が終わっていない → in xong mới gửi (終わり次第); không phải hủy gửi, 11月20日 là ngày bắt đầuキャンペーン', explain:'チラシはまだ印刷が終わっていないため、印刷が終わり次第、各販売店に送る — chưa xong → hoãn hành động tới khi xong, không phải hủy bỏ (C) hay làm ngay (A); D không được nêu (11月20日 là ngày bắt đầuキャンペーン).'},
  {n:12, seg:4, q:'チラシの発送は誰が担当しますか。', opts:['営業部の山田さん','総務部の高橋さん','営業部長','総務部長'], ans:'B', trap:'Hoán đổi vai trò hai người: チラシの発送＝高橋さん (総務部); 山田さん phụ tráchキャンペーン', explain:'チラシの発送は総務部の高橋さんが担当; キャンペーンの担当は営業部の山田さん — bẫy hoán đổi vai trò hai người.'}
],
  instructions: `<li><strong>Khoảng 40 phút</strong> cho 12 câu đọc hiểu. Đồng hồ bắt đầu chạy khi bạn bấm <em>Bắt đầu làm bài</em>; hết giờ bài tự nộp.</li>
          <li>Bài gồm <strong>4 bộ</strong>, mỗi bộ có 1 văn bản + 3 câu hỏi và <strong>cả 3 câu của bộ hiển thị cùng nhau</strong> ngay dưới văn bản đó, trong khung làm bài kiểu phòng thi CBT — đọc xong trả lời luôn cả 3 câu, không phải chuyển qua lại từng câu. <strong>Không có audio</strong> — buổi này chỉ luyện đọc.</li>
          <li>Bài gồm 1 bộ <span class="jp">語彙・文法</span> (điền vào văn bản thông báo), 1 bộ <span class="jp">表現力</span> (điền vào hội thoại — cách nói lịch sự, mềm mỏng), 1 bộ <span class="jp">短文読解</span> (email báo cáo ngắn) và 1 bộ văn bản dài (báo cáo). Với mọi bộ, hãy <strong>đọc kỹ cả văn bản trước khi chọn</strong> đáp án — đừng chọn ngay khi thấy một cụm quen ở dòng đầu.</li>
          <li>Ở các bộ điền chỗ trống, chú ý <strong>cụm cố định</strong> thường đi kèm với cấu trúc trước/sau chỗ trống và <strong>hướng kính ngữ</strong>: ai là người thực hiện hành động, ai là người nhận — tôn kính hay khiêm nhường phải khớp với quan hệ đó; ở bộ <span class="jp">表現力</span>, chú ý thêm <strong>thì</strong> của câu hỏi (hỏi về hiện tại thì không dùng dạng quá khứ).</li>
          <li>Ở các bộ đọc hiểu, chú ý ba điểm hay bị đặt bẫy: (1) <strong>chủ thể</strong> của từng hành động — văn bản nghiệp vụ thường có hai người phụ trách hai việc khác nhau, đừng gán việc của người này cho người kia; (2) trạng thái <strong>đã / chưa</strong> — khi gặp “chưa…”, hãy xác định rõ trạng thái đó áp cho <em>hạng mục nào</em> và hệ quả đi kèm (hoãn tới khi xong, không phải hủy bỏ); (3) <strong>số liệu</strong> — với câu hỏi so sánh hay tính toán, ghi từng con số ra nháp <em>kèm nhãn</em> (số đó của tháng nào, của hạng mục nào, là thực tế, ngân sách hay dự báo) rồi mới cộng trừ đúng cặp mà câu hỏi hỏi.</li>
          <li>Dùng cột <strong>Danh sách câu hỏi</strong> bên trái để nhảy tới câu bất kỳ (trang tự cuộn tới câu đó), hoặc phím <kbd>←</kbd> <kbd>→</kbd> để cuộn tới câu trước / câu tiếp. Phím <kbd>A</kbd>–<kbd>D</kbd> chọn đáp án cho câu bạn vừa bấm vào. Mỗi câu chỉ chọn <strong>một</strong> đáp án.</li>
          <li>Câu nào chưa chắc, bấm <strong>⚑ Đánh dấu</strong> ở ngay câu đó để quay lại sau.</li>
          <li>Nút <strong>Nộp bài</strong> luôn nằm ở thanh cuối trang (và trong cột bên trái) — bấm vào sẽ hiện hộp xác nhận, bấm <em>Nộp bài</em> trong hộp đó mới chấm điểm. Đáp án, giải thích tiếng Việt và <strong>bản dịch gợi ý của từng văn bản</strong> chỉ hiện sau khi nộp, kèm sổ lỗi sai.</li>`,
  candidateInfo: { subject: 'BJT 読解 — Luyện tập Ngày 21', questionInfo: '12 câu · 4 bộ', time: '~40 phút', format: '語彙・文法 · 表現力 · 短文読解 · 長文読解' },
  tips: `đọc hết văn bản rồi mới nhìn lựa chọn; với câu hỏi tính toán, ghi mỗi con số kèm nhãn (của tháng nào, hạng mục nào, thực tế hay ngân sách hay dự báo) ra nháp rồi trừ đúng cặp được hỏi; gặp cụm chỉ trạng thái “chưa phê duyệt / chưa in xong”, khoanh rõ nó áp cho hạng mục nào và hệ quả là gì trước khi chọn; và luôn kiểm tra chủ thể của hành động — ai làm, ai nhận — trước khi chốt đáp án.`,
  footerNote: 'Bài Ngày 21 — Luyện 読解 (Đọc hiểu): thông báo nội bộ về hệ thống quản lý bán hàng mới, hội thoại lịch sự mềm mỏng, email báo cáo chi phí quảng cáo tháng 10 và báo cáo hoạt động xúc tiến bán hàng tháng 11. Không có audio.',
  scoreMessages: [
    {min: 12, text: 'Xuất sắc — sạch cả 12 câu đọc hiểu Ngày 21!'},
    {min: 10, text: 'Rất tốt — ngữ pháp, cách nói lịch sự, số liệu và báo cáo đều chắc'},
    {min: 8, text: 'Khá chắc tay — còn vài chỗ cần đối chiếu kỹ'},
    {min: 5, text: 'Đang vào form — chú ý kính ngữ, số liệu và điều kiện'},
    {min: 1, text: 'Cần luyện thêm — đọc lại từng bộ kèm giải thích nhé'},
    {min: 0, text: 'Cần ôn lại kính ngữ và cách đọc số liệu — xem giải thích từng câu bên dưới nhé'}
  ]
};
if(!window.EXAM_DAYS) window.EXAM_DAYS = {};
window.EXAM_DAYS[cfg.id] = cfg;
})();
