(function(){
var cfg = {
  id: 'day13',
  type: 'dokkai',
  title: 'Ngày 13 — Kiểm tra bấm giờ <span class="jp">読解</span> (Đọc hiểu)',
  subtitle: '4 bộ · 12 câu · Chỉ đọc, không có audio · Thứ Bảy 07/11/2026',
  timeSeconds: 40*60,
  questionCount: 12,
  segmentCount: 4,
  segLabel: 'Bộ',
  segments: {
  1: { title:'第1問 — §1 文法語彙問題：điền vào chỗ trống', desc:'Câu 1–3 · Chọn từ/cụm đúng nhất điền vào （　　） — hạn chót 〜以内に, 〜どころじゃない và khiêm nhường ngữ させていただく.',
    subject:'§1 文法語彙問題',
    body:'各文の（　　）に入る最も適切なものを、A・B・C・Dの中から一つ選びなさい。',
    vi:['§1 — Với mỗi câu, hãy chọn đáp án đúng nhất trong A・B・C・D để điền vào chỗ trống （　　）.']},
  2: { title:'第2問 — §2 表現力問題：chọn biểu hiện kính ngữ đúng', desc:'Câu 4–6 · Hội thoại ngắn — chọn cách nói kính ngữ đúng theo quan hệ trên–dưới (cấp trên) và trong–ngoài (người trong công ty / khách hàng).',
    subject:'§2 表現力問題',
    body:'各会話の（　　）に入る最も適切な表現を、A・B・C・Dの中から一つ選びなさい。',
    vi:['§2 — Với mỗi đoạn hội thoại, hãy chọn biểu hiện phù hợp nhất trong A・B・C・D để điền vào chỗ trống （　　）.']},
  3: { title:'第3問 — §3 短文読解：メール nội bộ — chi phí đào tạo tháng 11', desc:'Câu 7–9 · Báo cáo 研修費 tháng 11 của 3 chi nhánh và dự báo tháng 12 — ghi nhãn từng con số (ngân sách / thực tế / dự báo) ra nháp rồi mới cộng trừ.',
    subject:'件名：11月度 研修費のご報告',
    body:'11月の研修費の予算は120万円でした。実績は、東京支店45万円、大阪支店32万円、名古屋支店28万円、合計105万円でした。\n12月の見込みは、東京支店50万円、大阪支店35万円、名古屋支店30万円、合計115万円です。なお、福岡の新規研修計画は、まだ社内承認を得ていないため、12月の見込みには含めていません。',
    vi:['Ngân sách chi phí đào tạo tháng 11 là 120 vạn yên. Thực tế: chi nhánh Tokyo 45 vạn yên, chi nhánh Osaka 32 vạn yên, chi nhánh Nagoya 28 vạn yên, tổng cộng 105 vạn yên.', 'Dự báo tháng 12: chi nhánh Tokyo 50 vạn yên, chi nhánh Osaka 35 vạn yên, chi nhánh Nagoya 30 vạn yên, tổng cộng 115 vạn yên. Xin lưu ý, kế hoạch đào tạo mới ở Fukuoka vẫn chưa được phê duyệt nội bộ nên chưa tính vào dự báo tháng 12.']},
  4: { title:'第4問 — 長文：半期報告書 (báo cáo bán niên)', desc:'Câu 10–12 · Dạng mới — văn bản dài: doanh số nửa đầu năm, dự báo nửa cuối năm; cùng bẫy まだ〜ていない nhưng ở cấp 取締役会 (Hội đồng quản trị).',
    subject:'2026年度上半期 営業報告書（抜粋）',
    body:'上半期の売上は、国内1,250万円、海外860万円、合計2,110万円でした。\n下半期の売上見込みは、国内1,400万円、海外900万円、合計2,300万円です。なお、九州の新規事業計画は、まだ取締役会の承認を得ていないため、下半期の見込みには含めていません。\n来期の新製品開発費は、500万円を予定しています。',
    vi:['Doanh số nửa đầu năm: trong nước 1.250 vạn yên, nước ngoài 860 vạn yên, tổng cộng 2.110 vạn yên.', 'Dự báo doanh số nửa cuối năm: trong nước 1.400 vạn yên, nước ngoài 900 vạn yên, tổng cộng 2.300 vạn yên. Xin lưu ý, kế hoạch kinh doanh mới ở Kyushu vẫn chưa được Hội đồng quản trị phê duyệt nên chưa tính vào dự báo nửa cuối năm.', 'Chi phí phát triển sản phẩm mới cho kỳ tới dự kiến là 500 vạn yên.']}
},
  segNames: { 1:'§1 文法語彙', 2:'§2 表現力', 3:'§3 短文読解', 4:'長文読解' },
  questions: [
  {n:1, seg:1, q:'お客様からのお問い合わせには、（　　）ご回答いたします。', opts:['2営業日以内に','2営業日以内で','2営業日以内の','2営業日以内だ'], ans:'A', trap:'Hạn chót dùng 「〜以内に」; 「で」chỉ phương tiện/địa điểm, không dùng cho hạn', explain:'Hạn chót dùng 「〜以内に」; 「で」 chỉ phương tiện/địa điểm, không dùng cho hạn; 「以内の」 là dạng bổ nghĩa danh từ, không kết thúc mệnh đề; 「以内だ」 là thể thường, sai văn phong.'},
  {n:2, seg:1, q:'今週は納期が迫っていて、休む（　　）よ。', opts:['ばかりじゃない','どころじゃない','までじゃない','だけじゃない'], ans:'B', trap:'「〜どころじゃない」= không phải lúc để làm việc đó (không có thời gian nghỉ)', explain:'「〜どころじゃない」= không phải lúc để làm việc đó (không có thời gian nghỉ); 「ばかりじゃない」 không đi với động từ dạng này theo nghĩa đó; 「までじゃない」「だけじゃない」 sai nghĩa.'},
  {n:3, seg:1, q:'先方のご都合により、明日の会議は（　　）ことになりました。', opts:['延期させていただく','延期していただく','延期なさる','延期くださる'], ans:'A', trap:'Bên mình hoãn họp → khiêm nhường ngữ させていただく; tôn kính ngữ là cho hành động của đối phương', explain:'Bên mình hoãn họp → dùng khiêm nhường ngữ させていただく; B là nhận ơn đối phương hoãn (sai chủ thể); C・D là tôn kính ngữ cho hành động của đối phương (sai chủ thể).'},
  {n:4, seg:2, q:'A「課長、明日の会議の資料ですが、もう（　　）でしょうか。」B「うん、目を通しておいたよ。」', opts:['ご覧になられました','ご覧になりました','お目通しになりました','拝見しました'], ans:'B', trap:'ご覧になられました là kính ngữ kép (ご覧 + になられる) — sai', explain:'Hỏi cấp trên đã xem chưa → ご覧になりました; A là kính ngữ kép (ご覧 + になられる) sai; C 「お目通しになりました」 không phải dạng chuẩn (đúng là お目通しいただけましたか); D 拝見しました là người nói đã xem (sai hướng).'},
  {n:5, seg:2, q:'お客様（電話）：「田中部長はいらっしゃいますか。」 社員：「（　　）。」', opts:['ただいま席を外していらっしゃいます','ただいま席を外させています','ただいま席を外しております','ただいま席を外しています'], ans:'C', trap:'Nói về cấp trên của mình với người ngoài → khiêm nhường ngữ 外しております, không dùng tôn kính ngữ', explain:'Nói về cấp trên của mình với người ngoài → dùng khiêm nhường ngữ 外しております; A là tôn kính ngữ, sai khi nói về người trong công ty với khách; B sai dạng; D là thể thường, không đủ kính ngữ với khách.'},
  {n:6, seg:2, q:'A「お待たせして、（　　）。」B「いえ、とんでもございません。」', opts:['お疲れさまでした','申し訳ございません','お世話になっております','よろしくお願いします'], ans:'B', trap:'Xin lỗi vì để chờ lâu → 申し訳ございません', explain:'Xin lỗi vì để chờ lâu → 申し訳ございません; A dùng khi kết thúc công việc, C là chào hỏi, D là nhờ vả.'},
  {n:7, seg:3, q:'11月の研修費の実績合計はいくらですか。', opts:['105万円','120万円','115万円','100万円'], ans:'A', trap:'Cộng 3 chi nhánh tháng 11 (45+32+28); 120 là ngân sách, 115 là dự báo tháng 12', explain:'45+32+28=105万円; 120万円 là ngân sách, 115万円 là dự báo tháng 12.'},
  {n:8, seg:3, q:'11月の研修費は予算と比べてどうなりましたか。', opts:['15万円余った','15万円不足した','10万円余った','予算ちょうどだった'], ans:'A', trap:'So thực tế với ngân sách (120−105); 10万円 là mức tăng dự báo tháng 12 so với thực tế tháng 11 (115−105)', explain:'120−105=15万円余った (dưới ngân sách); 10万円 là mức tăng dự báo tháng 12 so với thực tế tháng 11 (115−105), không phải so với ngân sách.'},
  {n:9, seg:3, q:'福岡の新規研修計画について正しいものはどれですか。', opts:['12月の見込みに含めている','12月の見込みに含めていない（まだ社内承認を得ていないため）','すでに社内承認を得ている','11月の研修費に含めている'], ans:'B', trap:'「まだ社内承認を得ていないため、見込みには含めていない」— chưa duyệt = không tính vào dự báo', explain:'福岡の新規研修計画はまだ社内承認を得ていないため、12月の見込みには含めていない — đúng dạng bẫy "chưa duyệt = không tính vào dự báo".'},
  {n:10, seg:4, q:'上半期の売上合計はいくらですか。', opts:['2,300万円','1,250万円','2,010万円','2,110万円'], ans:'D', trap:'Cộng trong nước + nước ngoài (1,250+860); 2,300 là dự báo nửa cuối năm, 1,250 chỉ là trong nước', explain:'1,250+860=2,110万円; 2,300万円 là dự báo nửa cuối năm, 1,250万円 chỉ là doanh số trong nước.'},
  {n:11, seg:4, q:'下半期の売上見込みは、上半期の実績と比べてどうなりますか。', opts:['290万円増える','190万円減る','190万円増える','変わらない'], ans:'C', trap:'2,300−2,110=190; 290 là lấy tổng sai 2,010万円 để trừ (2,300−2,010)', explain:'2,300−2,110=190万円の増加; 290万円 là lấy tổng sai 2,010万円 để trừ (2,300−2,010).'},
  {n:12, seg:4, q:'九州の新規事業計画について正しいものはどれですか。', opts:['下半期の見込みに含めている','下半期の見込みに含めていない（まだ取締役会の承認を得ていないため）','すでに取締役会の承認を得ている','上半期の売上に含めている'], ans:'B', trap:'「まだ取締役会の承認を得ていないため、見込みには含めていない」— chưa duyệt = không tính vào dự báo', explain:'九州の新規事業計画はまだ取締役会の承認を得ていないため、下半期の見込みには含めていない.'}
],
  instructions: `<li><strong>Bài kiểm tra bấm giờ: đúng 40 phút</strong> cho 12 câu đọc hiểu. Đồng hồ bắt đầu chạy khi bạn bấm <em>Bắt đầu làm bài</em>; hết giờ bài tự nộp.</li>
          <li>Bài gồm <strong>4 bộ</strong>, mỗi bộ 3 câu và <strong>cả bộ hiển thị cùng nhau trên một màn hình</strong> (văn bản + 3 câu hỏi ngay bên dưới) trong khung làm bài kiểu phòng thi CBT. <strong>Không có audio</strong> — buổi này chỉ luyện đọc.</li>
          <li>Bộ 1 là <span class="jp">§1 文法語彙問題</span> — 3 câu điền chỗ trống (hạn chót <span class="jp">〜以内に</span>, <span class="jp">〜どころじゃない</span>, khiêm nhường ngữ <span class="jp">させていただく</span>); Bộ 2 là <span class="jp">§2 表現力問題</span> — hội thoại ngắn, chọn biểu hiện kính ngữ đúng theo quan hệ trên–dưới và trong–ngoài công ty.</li>
          <li>Bộ 3 là <span class="jp">§3 短文読解</span> — email nội bộ báo cáo chi phí đào tạo tháng 11: cộng 3 chi nhánh, so với ngân sách, và chú ý kế hoạch Fukuoka <span class="jp">まだ社内承認を得ていない</span> nên chưa tính vào dự báo tháng 12. Bộ 4 là <strong>dạng mới <span class="jp">長文</span></strong> — báo cáo bán niên: doanh số nửa đầu năm, dự báo nửa cuối năm và kế hoạch Kyushu chưa được Hội đồng quản trị duyệt — cùng một bẫy <span class="jp">まだ〜ていない</span> ở cấp độ văn bản dài hơn.</li>
          <li>Dùng cột <strong>Danh sách câu hỏi</strong> bên trái để nhảy tới câu bất kỳ (trang tự cuộn tới câu đó), hoặc phím <kbd>←</kbd> <kbd>→</kbd> để cuộn tới câu trước / câu tiếp. Phím <kbd>A</kbd>–<kbd>D</kbd> chọn đáp án cho câu bạn vừa bấm vào. Mỗi câu chỉ chọn <strong>một</strong> đáp án.</li>
          <li>Câu nào chưa chắc, bấm <strong>⚑ Đánh dấu</strong> ở ngay câu đó để quay lại sau.</li>
          <li>Nút <strong>Nộp bài</strong> luôn nằm ở thanh cuối trang (và trong cột bên trái) — bấm vào sẽ hiện hộp xác nhận, bấm <em>Nộp bài</em> trong hộp đó mới chấm điểm. Đáp án, giải thích tiếng Việt và <strong>bản dịch gợi ý của từng văn bản</strong> chỉ hiện sau khi nộp, kèm sổ lỗi sai.</li>`,
  candidateInfo: { subject: 'BJT 読解 — Kiểm tra bấm giờ Ngày 13', questionInfo: '12 câu · 4 bộ', time: '40 phút (bấm giờ)', format: '§1 文法語彙 · §2 表現力 · §3 短文読解 · 長文読解' },
  tips: `ở Bộ 3 và Bộ 4, ghi nhãn từng con số (ngân sách / thực tế / dự báo) ra nháp trước khi cộng trừ; gặp <span class="jp">まだ〜ていない</span> thì nhớ hệ quả đi kèm — chưa duyệt thì KHÔNG tính vào dự báo, ở cả email ngắn lẫn báo cáo dài.`,
  footerNote: 'Bài Ngày 13 — Kiểm tra bấm giờ 読解 (Đọc hiểu): ngữ pháp/từ vựng điền chỗ trống, biểu hiện kính ngữ, email nội bộ về chi phí đào tạo tháng 11 và báo cáo bán niên dạng văn bản dài. Không có audio.',
  scoreMessages: [
    {min: 12, text: 'Xuất sắc — sạch cả 12 câu kiểm tra bấm giờ!'},
    {min: 10, text: 'Rất tốt — kính ngữ và số liệu đều chắc'},
    {min: 8, text: 'Khá chắc tay — còn vài chỗ cần đối chiếu kỹ'},
    {min: 5, text: 'Đang vào form — chú ý kính ngữ, điều kiện và số liệu'},
    {min: 1, text: 'Cần luyện thêm — đọc lại từng bộ kèm giải thích nhé'},
    {min: 0, text: 'Cần ôn lại kính ngữ và cách đọc số liệu — xem giải thích từng câu bên dưới nhé'}
  ]
};
if(!window.EXAM_DAYS) window.EXAM_DAYS = {};
window.EXAM_DAYS[cfg.id] = cfg;
})();
