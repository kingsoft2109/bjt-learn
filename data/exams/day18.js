(function(){
var cfg = {
  id: 'day18',
  type: 'dokkai',
  title: 'Ngày 18 — Luyện <span class="jp">読解</span> (Đọc hiểu)',
  subtitle: '4 bộ · 12 câu · Chỉ đọc, không có audio · Thứ Sáu 13/11/2026',
  timeSeconds: 40*60,
  questionCount: 12,
  segmentCount: 4,
  segLabel: 'Bộ',
  segments: {
  1: { title:'第1問 — 語彙・文法：社内連絡 — 出張申請の手続きについて', desc:'Câu 1–3 · Thông báo nội bộ về thủ tục xin đi công tác tháng 12 — chọn từ/cụm đúng nhất điền vào （　　1　　）〜（　　3　　）: 〜にあたって, お問い合わせください và khiêm nhường ngữ ご案内いたします.',
    subject:'社内連絡：出張申請の手続きについて',
    body:'12月の出張につきましては、出発の2週間前までに申請書を提出してください。出張（　　1　　）、申請書の提出が必要です。申請が遅れた場合は、ご希望の便が取れないことがありますので、あらかじめご承知おきください。ご不明な点がございましたら、総務部までお問い合わせ（　　2　　）。なお、出張の詳細につきましては、後日、総務部よりご案内（　　3　　）。',
    vi:['Về chuyến công tác tháng 12, vui lòng nộp đơn trước ngày khởi hành 2 tuần. Nhân dịp đi công tác, việc nộp đơn là cần thiết. Xin lưu ý trước rằng nếu nộp đơn trễ, có thể sẽ không đặt được chuyến bay mong muốn.', 'Nếu có điểm nào chưa rõ, xin vui lòng liên hệ phòng Tổng vụ. Ngoài ra, chi tiết về chuyến công tác sẽ được phòng Tổng vụ thông báo sau.']},
  2: { title:'第2問 — 短文読解：社内メール — 11月度 研修費報告', desc:'Câu 4–6 · Email báo cáo chi phí đào tạo tháng 11 và dự báo tháng 12 — ghi nhãn từng con số (thực tế tháng 11 / ngân sách / dự báo tháng 12) ra nháp rồi mới cộng trừ; kế hoạch đào tạo mới ở 福岡 まだ社内承認を得ていない nên chưa tính vào dự báo tháng 12.',
    subject:'件名：11月度 研修費報告',
    body:'11月の研修費は、会場費30万円、講師料26万円、教材費20万円、合計76万円でした。予算は90万円でしたので、14万円余りました。\n12月の研修費の見込みは85万円です。なお、福岡での新規研修計画は、まだ社内承認を得ていないため、12月の見込みには含めていません。',
    vi:['Chi phí đào tạo tháng 11: phí địa điểm 30 vạn yên, phí giảng viên 26 vạn yên, phí tài liệu 20 vạn yên, tổng cộng 76 vạn yên. Ngân sách là 90 vạn yên nên còn dư 14 vạn yên.', 'Dự báo chi phí đào tạo tháng 12 là 85 vạn yên. Ngoài ra, kế hoạch đào tạo mới ở Fukuoka vẫn chưa được phê duyệt nội bộ nên chưa được tính vào dự báo tháng 12.']},
  3: { title:'第3問 — 短文読解：手紙 — パッケージデザインの検討依頼', desc:'Câu 7–9 · Thư trang trọng yêu cầu xem xét thiết kế bao bì 「KK-200」 và có biện pháp thích đáng — chú ý hạn trả lời 11月25日水曜日 và đừng đảo chủ thể: bên gửi là công ty của 「AA-100」, bên nhận thư là công ty của 「KK-200」.',
    subject:'手紙 — パッケージデザインの検討依頼',
    body:'拝啓　貴社ますますご清栄のこととお慶び申し上げます。\nさて、貴社で販売されている商品「KK-200」のパッケージデザインにつきまして、お尋ねいたします。\n当社の商品「AA-100」のパッケージとたいへんよく似ているとの指摘を、お客様から受けております。つきましては、至急ご検討いただき、しかるべき措置をお取りくださいますようお願い申し上げます。\nご検討の結果を、11月25日水曜日までに当社宛てにご回答くださいますようお願い申し上げます。\n敬具',
    vi:['Kính gửi: Xin chúc mừng quý công ty ngày càng phát đạt.', 'Chúng tôi xin được hỏi về thiết kế bao bì của sản phẩm 「KK-200」 mà quý công ty đang bán.', 'Chúng tôi đã nhận được phản ánh từ khách hàng rằng thiết kế này rất giống bao bì của sản phẩm 「AA-100」 của công ty chúng tôi. Vì vậy, kính mong quý công ty khẩn trương xem xét và có biện pháp xử lý thích đáng.', 'Kính mong quý công ty gửi kết quả xem xét cho chúng tôi trước thứ Tư, ngày 25 tháng 11.', 'Kính thư']},
  4: { title:'第4問 — 短文読解：議事録 — 11月10日 新製品販売会議', desc:'Câu 10–12 · Biên bản cuộc họp bán sản phẩm mới ngày 10/11 — 発売日 đã quyết định là 12月15日火曜日; việc chưa có 最終確認 chỉ áp cho 広告の掲載 (hoãn đăng, không phải hủy), và hai người phụ trách hai việc khác nhau — giữ đúng cặp "việc → người".',
    subject:'議事録：11月10日 新製品販売会議',
    body:'出席者：営業部長、開発部長、総務部長\n1．新製品「SV-600」の発売日について\n発売日は、12月15日火曜日と決定した。ただし、最終確認は、まだ開発部長から得ていないため、確認が終わるまでは、広告の掲載を控えることになった。\n2．販売目標について\n初月の販売目標は、500台と決定した。なお、目標の達成状況は、毎週月曜日に営業部で確認する。\n3．担当について\n広告の担当は営業部の佐藤さん、販売店への案内は総務部の鈴木さんが担当することになった。',
    vi:['Người tham dự: Trưởng phòng Kinh doanh, Trưởng phòng Phát triển, Trưởng phòng Tổng vụ.', '1. Về ngày phát hành sản phẩm mới 「SV-600」: Ngày phát hành đã được quyết định là thứ Ba, ngày 15 tháng 12. Tuy nhiên, vì vẫn chưa nhận được xác nhận cuối cùng từ Trưởng phòng Phát triển, nên đã quyết định tạm hoãn việc đăng quảng cáo cho đến khi xác nhận xong.', '2. Về mục tiêu bán hàng: Mục tiêu bán hàng tháng đầu tiên đã được quyết định là 500 chiếc. Ngoài ra, tình hình đạt được mục tiêu sẽ do phòng Kinh doanh kiểm tra vào mỗi thứ Hai hằng tuần.', '3. Về phân công: Anh/chị Sato của phòng Kinh doanh phụ trách quảng cáo, anh/chị Suzuki của phòng Tổng vụ phụ trách việc thông báo đến các cửa hàng bán lẻ.']}
},
  segNames: { 1:'語彙・文法', 2:'短文読解 — 研修費報告', 3:'短文読解 — 手紙', 4:'短文読解 — 議事録' },
  questions: [
  {n:1, seg:1, q:'出張（　　）、申請書の提出が必要です。', opts:['あたり','にあたって','あたっては','あたりに'], ans:'B', trap:'「〜にあたって」= nhân dịp, khi tiến hành việc gì; 「あたり」 là "mỗi/khoảng", không đi với dạng này', explain:'「出張にあたって」= nhân dịp, khi tiến hành chuyến công tác; 「あたり」 là "mỗi/khoảng" (1人あたり), không đi với dạng này; 「あたっては」 thiếu に và mang nghĩa điều kiện "khi nói đến…"; 「あたりに」 không phải dạng đúng.'},
  {n:2, seg:1, q:'ご不明な点がございましたら、総務部までお問い合わせ（　　）。', opts:['ください','いただきます','なさいます','くださいませ'], ans:'A', trap:'お問い合わせください là dạng nhờ vả chuẩn; いただきます là phía mình nhận — sai hướng nhờ vả', explain:'お問い合わせください là dạng nhờ vả chuẩn; いただきます là phía mình nhận (sai hướng — người hỏi là phía đọc văn bản); なさいます là câu trần thuật tôn kính, không phải câu nhờ; くださいませ là dạng cổ, sai văn phong.'},
  {n:3, seg:1, q:'出張の詳細につきましては、後日、総務部よりご案内（　　）。', opts:['して','いたし','いたします','する'], ans:'C', trap:'「ご案内いたします」 là dạng khiêm nhường chuẩn (phía mình thông báo cho đối phương)', explain:'「ご案内いたします」 là dạng khiêm nhường chuẩn (phía mình thông báo); A dở dang, B sai dạng, D là thể thường, sai văn phong trang trọng.'},
  {n:4, seg:2, q:'11月の研修費の合計はいくらですか。', opts:['90万円','76万円','85万円','66万円'], ans:'B', trap:'Cộng 3 khoản tháng 11 (30+26+20); 90万円 là予算, 85万円 là見込み tháng 12', explain:'30+26+20=76万円; 90万円 là予算, 85万円 là見込み12月, 66万円 là cộng nhầm (30+26+10 — lấy nhầm教材費).'},
  {n:5, seg:2, q:'11月の研修費は、予算と比べてどうなりますか。', opts:['14万円余った','9万円余った','5万円余った','14万円不足した'], ans:'A', trap:'予算90−実績76=14万円余った; 9万円 và 5万円 đều lấy cặp số sai (không phải hai vế của câu hỏi)', explain:'予算90−実績76=14万円余った; 9万円 là見込み12月85−実績76 (cặp sai — không phải hai vế câu hỏi), 5万円 là予算90−見込み85 (cặp sai).'},
  {n:6, seg:2, q:'福岡での新規研修計画について正しいものはどれですか。', opts:['12月の見込みに含めている','すでに社内承認を得ている','12月の見込みに含めていない（まだ社内承認を得ていないため）','11月の研修費に含めている'], ans:'C', trap:'「まだ社内承認を得ていないため、見込みには含めていない」— chưa duyệt = không tính vào dự báo', explain:'福岡の新規研修計画はまだ社内承認を得ていないため、12月の見込みには含めていない.'},
  {n:7, seg:3, q:'この手紙の用件は何ですか。', opts:['KK-200の不具合の原因を調べてほしい','KK-200のパッケージについて検討し、しかるべき措置を取ってほしい','KK-200の製品名を変更してほしい','AA-100のパッケージを変えてほしい'], ans:'B', trap:'Việc chính là検討 bao bì KK-200 +措置 thích đáng; 不具合・製品名 không hề được nhắc tới; D đảo chủ thể', explain:'手紙はKK-200のパッケージがAA-100と似ていると指摘し、至急検討してしかるべき措置を取るよう求めている; A 不具合 không được nhắc tới, C 製品名 không được nhắc tới, D đảo chủ thể (AA-100 là sản phẩm của bên gửi, không phải bên bị yêu cầu đổi).'},
  {n:8, seg:3, q:'回答はいつまでですか。', opts:['11月25日水曜日まで','11月20日金曜日まで','12月25日金曜日まで','決まっていない'], ans:'A', trap:'Hạn trả lời ghi rõ trong thư: 11月25日水曜日まで; hai ngày còn lại không xuất hiện trong thư', explain:'ご検討の結果を11月25日水曜日までにご回答ください; 11月20日・12月25日 không xuất hiện trong thư; 期限 đã nêu rõ nên D sai.'},
  {n:9, seg:3, q:'手紙を送った会社について正しいものはどれですか。', opts:['AA-100を販売している','KK-200を販売している','KK-200のパッケージを作った','お客様から指摘を受けたのはKK-200の会社だ'], ans:'A', trap:'Bên gửi là công ty của AA-100 (当社); KK-200 là của bên nhận (貴社); 指摘を受けたのも当社 — D đảo chủ thể', explain:'送り主はAA-100の会社 (当社の商品「AA-100」); KK-200 là sản phẩm của貴社 (bên nhận thư); 指摘を受けたのは当社 (bên gửi) chứ không phải KK-200の会社 — D đảo chủ thể.'},
  {n:10, seg:4, q:'新製品「SV-600」の発売日はいつですか。', opts:['12月15日火曜日','12月10日木曜日','11月15日日曜日','まだ決まっていない'], ans:'A', trap:'発売日 đã決定 (12月15日火曜日); cái "chưa xác nhận" chỉ áp cho広告掲載, không phải発売日', explain:'発売日は12月15日火曜日と決定した; 11月10日 là ngày họp; D sai vì発売日 đã決定 — chỉ広告掲載 là chờ最終確認, không phải発売日. Phải phân biệt "chưa xác nhận" áp cho hạng mục nào.'},
  {n:11, seg:4, q:'広告の掲載について正しいものはどれですか。', opts:['すぐに掲載する','最終確認が終わるまで掲載を控える','掲載しないことになった','開発部長が担当する'], ans:'B', trap:'まだ〜ていない dạng Đọc: 最終確認 chưa xong → hoãn掲載 (控える), không phải hủy bỏ hẳn', explain:'最終確認はまだ開発部長から得ていないため、確認が終わるまでは広告の掲載を控える — bẫy まだ〜ていない dạng Đọc: chưa xong → hoãn hành động, không phải hủy bỏ (C) hay làm ngay (A).'},
  {n:12, seg:4, q:'販売店への案内は誰が担当しますか。', opts:['営業部の佐藤さん','総務部の鈴木さん','営業部長','開発部長'], ans:'B', trap:'Hoán đổi vai trò hai người: 販売店への案内＝鈴木さん (総務部); 佐藤さん phụ trách広告', explain:'販売店への案内は総務部の鈴木さんが担当; 広告の担当は営業部の佐藤さん — bẫy hoán đổi vai trò hai người (giữ đúng cặp "việc → người").'}
],
  instructions: `<li><strong>Khoảng 40 phút</strong> cho 12 câu đọc hiểu. Đồng hồ bắt đầu chạy khi bạn bấm <em>Bắt đầu làm bài</em>; hết giờ bài tự nộp.</li>
          <li>Bài gồm <strong>4 bộ</strong>, mỗi bộ có 1 văn bản + 3 câu hỏi và <strong>cả 3 câu của bộ hiển thị cùng nhau</strong> ngay dưới văn bản đó, trong khung làm bài kiểu phòng thi CBT — đọc xong trả lời luôn cả 3 câu, không phải chuyển qua lại từng câu. <strong>Không có audio</strong> — buổi này chỉ luyện đọc.</li>
          <li>Bài gồm 1 bộ <span class="jp">語彙・文法</span> (điền chỗ trống) và 3 bộ <span class="jp">短文読解</span> (đọc văn bản ngắn rồi trả lời). Với mọi bộ, hãy <strong>đọc kỹ cả văn bản trước khi chọn</strong> đáp án — đừng chọn ngay khi thấy một cụm quen ở dòng đầu.</li>
          <li>Ở bộ điền chỗ trống, chú ý <strong>cụm cố định</strong> thường đi kèm với cấu trúc trước/sau chỗ trống và <strong>hướng kính ngữ</strong>: ai là người thực hiện hành động, ai là người nhận — tôn kính hay khiêm nhường phải khớp với quan hệ đó.</li>
          <li>Ở các bộ đọc hiểu, chú ý ba điểm hay bị đặt bẫy: (1) <strong>chủ thể</strong> của từng hành động — văn bản nghiệp vụ thường có hai bên qua lại, đừng gán việc của bên này cho bên kia; (2) trạng thái <strong>đã / chưa xác nhận</strong> — khi gặp “chưa…”, hãy xác định rõ trạng thái đó áp cho <em>hạng mục nào</em>, đừng suy ra cho cả văn bản; (3) <strong>số liệu và hạn chót</strong> — với câu hỏi so sánh hay tính toán, ghi từng con số ra nháp <em>kèm nhãn</em> (số đó của tháng nào, của hạng mục nào, là thực tế hay dự báo) rồi mới cộng trừ đúng cặp mà câu hỏi hỏi.</li>
          <li>Dùng cột <strong>Danh sách câu hỏi</strong> bên trái để nhảy tới câu bất kỳ (trang tự cuộn tới câu đó), hoặc phím <kbd>←</kbd> <kbd>→</kbd> để cuộn tới câu trước / câu tiếp. Phím <kbd>A</kbd>–<kbd>D</kbd> chọn đáp án cho câu bạn vừa bấm vào. Mỗi câu chỉ chọn <strong>một</strong> đáp án.</li>
          <li>Câu nào chưa chắc, bấm <strong>⚑ Đánh dấu</strong> ở ngay câu đó để quay lại sau.</li>
          <li>Nút <strong>Nộp bài</strong> luôn nằm ở thanh cuối trang (và trong cột bên trái) — bấm vào sẽ hiện hộp xác nhận, bấm <em>Nộp bài</em> trong hộp đó mới chấm điểm. Đáp án, giải thích tiếng Việt và <strong>bản dịch gợi ý của từng văn bản</strong> chỉ hiện sau khi nộp, kèm sổ lỗi sai.</li>`,
  candidateInfo: { subject: 'BJT 読解 — Luyện tập Ngày 18', questionInfo: '12 câu · 4 bộ', time: '~40 phút', format: '語彙・文法 · 短文読解（メール・手紙・議事録）' },
  tips: `đọc hết văn bản rồi mới nhìn lựa chọn; với câu hỏi tính toán, ghi mỗi con số kèm nhãn (của tháng nào, hạng mục nào, thực tế hay dự báo) ra nháp rồi trừ đúng cặp được hỏi; gặp cụm chỉ trạng thái “chưa xác nhận / chưa quyết định”, khoanh rõ nó áp cho hạng mục nào trước khi chọn; và luôn kiểm tra chủ thể của hành động — ai làm, ai nhận — trước khi chốt đáp án.`,
  footerNote: 'Bài Ngày 18 — Luyện 読解 (Đọc hiểu): thông báo nội bộ về thủ tục xin đi công tác, email báo cáo chi phí đào tạo tháng 11, thư trang trọng về thiết kế bao bì và biên bản họp bán sản phẩm mới. Không có audio.',
  scoreMessages: [
    {min: 12, text: 'Xuất sắc — sạch cả 12 câu đọc hiểu Ngày 18!'},
    {min: 10, text: 'Rất tốt — ngữ pháp, số liệu, thư và biên bản họp đều chắc'},
    {min: 8, text: 'Khá chắc tay — còn vài chỗ cần đối chiếu kỹ'},
    {min: 5, text: 'Đang vào form — chú ý số liệu, điều kiện và kính ngữ'},
    {min: 1, text: 'Cần luyện thêm — đọc lại từng bộ kèm giải thích nhé'},
    {min: 0, text: 'Cần ôn lại cách đọc số liệu và các câu điều kiện — xem giải thích từng câu bên dưới nhé'}
  ]
};
if(!window.EXAM_DAYS) window.EXAM_DAYS = {};
window.EXAM_DAYS[cfg.id] = cfg;
})();
