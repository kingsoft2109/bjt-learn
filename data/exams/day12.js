(function(){
var cfg = {
  id: 'day12',
  type: 'dokkai',
  title: 'Ngày 12 — Luyện <span class="jp">読解</span> (Đọc hiểu)',
  subtitle: '4 văn bản · 12 câu · Chỉ đọc, không có audio · Thứ Sáu 06/11/2026',
  timeSeconds: 40*60,
  questionCount: 12,
  segmentCount: 4,
  segLabel: 'Bộ',
  segments: {
  1: { title:'第1問 — 営業報告書：doanh số tháng 11', desc:'Câu 1–3 · Báo cáo doanh số tháng 11 và dự báo tháng 12 của 3 chi nhánh — ghi nhãn từng con số (tháng 10 suy ra / thực tế tháng 11 / dự báo tháng 12) ra nháp rồi mới cộng.',
    subject:'11月度　営業報告書（抜粋）',
    body:'11月の売上は、東京支店460万円、大阪支店390万円、名古屋支店330万円、合計1,180万円で、前月比80万円の増加となりました。\n12月の売上見込みは、東京支店480万円、大阪支店410万円、名古屋支店350万円、合計1,240万円です。なお、仙台の新規出店計画は、まだ社内承認を得ていないため、12月の見込みには含めていません。',
    vi:['Doanh số tháng 11: chi nhánh Tokyo 460 vạn yên, chi nhánh Osaka 390 vạn yên, chi nhánh Nagoya 330 vạn yên, tổng cộng 1.180 vạn yên, tăng 80 vạn yên so với tháng trước.', 'Dự báo doanh số tháng 12: Tokyo 480 vạn yên, Osaka 410 vạn yên, Nagoya 350 vạn yên, tổng cộng 1.240 vạn yên. Xin lưu ý, kế hoạch mở cửa hàng mới ở Sendai vẫn chưa được phê duyệt nội bộ nên chưa tính vào dự báo tháng 12.']},
  2: { title:'第2問 — 議事録：họp chuẩn bị ra mắt sản phẩm mới', desc:'Câu 4–6 · Biên bản họp ngày 5/11: ngày ra mắt, giá bán và điều kiện hoãn vì bao bì chưa được duyệt cuối cùng.',
    subject:'11月5日　新製品発売準備会議　議事録（抜粋）',
    body:'出席者：営業部4名、開発部3名、企画部1名、合計8名\n決定事項\n1．新製品「X-200」の発売日は、12月15日火曜日とする。\n2．販売価格は、税込み3,980円とする。\n3．パッケージのデザインは、まだ最終承認を得ていないため、発売日の1週間前までに承認が下りなければ、発売日を1週間延期する。',
    vi:['Người tham dự: phòng Kinh doanh 4 người, phòng Phát triển 3 người, phòng Kế hoạch 1 người, tổng cộng 8 người.', 'Các quyết định: 1. Ngày ra mắt sản phẩm mới "X-200" là thứ Ba, ngày 15/12. 2. Giá bán là 3.980 yên (đã gồm thuế). 3. Thiết kế bao bì vẫn chưa được phê duyệt cuối cùng, vì vậy nếu đến một tuần trước ngày ra mắt vẫn chưa được duyệt thì sẽ hoãn ngày ra mắt một tuần.']},
  3: { title:'第3問 — 社内規定：thanh toán chi phí công tác', desc:'Câu 7–9 · Quy định về trần 宿泊費, điều kiện dùng taxi và hạn nộp 精算 — chú ý các câu ただし (trường hợp ngoại lệ) thuộc về mục nào.',
    subject:'社内規定：出張時の経費精算について（抜粋）',
    body:'1．宿泊費は、1泊あたり12,000円を上限とします。ただし、役員に同行する場合は、上限を超えても精算できます。\n2．交通費は、実費を精算します。ただし、タクシーの利用は、終電を逃した場合に限ります。\n3．精算の申請は、出張終了後1週間以内に行ってください。申請が遅れた場合は、翌月の精算になります。',
    vi:['1. Chi phí khách sạn: tối đa 12.000 yên mỗi đêm. Tuy nhiên, nếu đi cùng cán bộ cấp cao (役員) thì có thể thanh toán vượt mức tối đa.', '2. Chi phí đi lại được thanh toán theo chi phí thực tế. Tuy nhiên, chỉ được dùng taxi trong trường hợp lỡ chuyến tàu cuối.', '3. Hãy nộp đơn xin thanh toán trong vòng một tuần sau khi kết thúc chuyến công tác. Nếu nộp muộn sẽ chuyển sang kỳ thanh toán của tháng sau.']},
  4: { title:'第4問 — Thư đối tác: đổi quy cách & tăng giá 部品X', desc:'Câu 10–12 · Thông báo từ △△製作所：giá mới áp dụng từ 1/12, đơn đặt đến 30/11 vẫn theo giá cũ, hạn trả lời là 20/11 — đừng nhầm hai mốc ngày.',
    subject:'お知らせ：部品Xの仕様変更・価格改定について',
    body:'○○部品株式会社　営業部　山田様\nいつもお世話になっております。△△製作所の佐藤です。\nさて、部品Xの仕様変更と価格改定について、ご連絡いたします。部品Xは、12月1日から新しい仕様に変更になります。新しい仕様では、耐久性が向上しますが、価格は1個あたり2,000円から2,100円に、5％値上げさせていただきます。\nなお、11月30日までのご注文につきましては、現在の価格（1個2,000円）で対応いたします。\nお手数をおかけしますが、仕様変更の可否について、11月20日までにご返信いただけますと幸いです。',
    vi:['Kính gửi anh Yamada, phòng Kinh doanh, Công ty Cổ phần Linh kiện ○○.', 'Tôi là Sato ở Xưởng chế tạo △△, cảm ơn anh luôn hỗ trợ. Tôi xin liên hệ về việc thay đổi quy cách và điều chỉnh giá của linh kiện X. Từ ngày 1/12, linh kiện X sẽ chuyển sang quy cách mới. Quy cách mới giúp độ bền cao hơn, nhưng giá sẽ tăng 5%, từ 2.000 yên lên 2.100 yên mỗi chiếc.', 'Xin lưu ý, các đơn hàng đặt đến hết ngày 30/11 vẫn được áp dụng giá hiện tại (2.000 yên/chiếc).', 'Mong anh thông cảm, và nếu được anh vui lòng phản hồi về việc có chấp nhận thay đổi quy cách hay không trước ngày 20/11.']}
},
  segNames: null,
  questions: [
  {n:1, seg:1, q:'11月の売上合計はいくらですか。', opts:['1,100万円','1,180万円','1,240万円','1,260万円'], ans:'B', trap:'Cộng 3 chi nhánh tháng 11 (460+390+330); 1,100 là tháng 10 suy ra, 1,240 là dự báo tháng 12', explain:'460 + 390 + 330 = 1,180万円. 1,100万円 là doanh số tháng 10 suy ra từ mức tăng (1,180 − 80); 1,240万円 là dự báo tháng 12, không phải thực tế tháng 11.'},
  {n:2, seg:1, q:'12月の見込みは、11月の実績と比べてどうなりますか。', opts:['60万円増える','80万円増える','60万円減る','変わらない'], ans:'A', trap:'So dự báo tháng 12 với thực tế tháng 11; 80万円 là mức tăng của tháng 11 so với tháng 10', explain:'1,240 − 1,180 = 60万円の増加. 80万円 là mức tăng của tháng 11 so với tháng 10, không phải của tháng 12 so với tháng 11.'},
  {n:3, seg:1, q:'仙台の新規出店計画について正しいものはどれですか。', opts:['12月の見込みに含めている','12月の見込みに含めていない（まだ社内承認を得ていないため）','すでに社内承認を得ている','11月の売上に含めている'], ans:'B', trap:'「まだ社内承認を得ていないため、見込みには含めていない」', explain:'仙台の新規出店計画はまだ社内承認を得ていないため、12月の見込みには含めていない — chưa được duyệt nội bộ thì chưa tính vào dự báo.'},
  {n:4, seg:2, q:'新製品の発売日はいつですか。', opts:['12月15日火曜日','12月8日火曜日','11月5日木曜日','12月22日火曜日'], ans:'A', trap:'12月8日 là hạn chót duyệt bao bì (1 tuần trước), 11月5日 là ngày họp', explain:'発売日は12月15日火曜日. 12月8日 là mốc 1週間前 — hạn chót để bao bì được duyệt; 11月5日 là ngày họp; 12月22日 là ngày ra mắt nếu bị hoãn 1 tuần.'},
  {n:5, seg:2, q:'販売価格はいくらですか。', opts:['3,980円（税込み）','3,980円（税抜き）','3,890円','4,980円'], ans:'A', trap:'税込み hay 税抜き — văn bản ghi rõ 税込み', explain:'販売価格は税込み3,980円 — giá bán đã gồm thuế.'},
  {n:6, seg:2, q:'パッケージのデザインについて正しいものはどれですか。', opts:['すでに最終承認を得ている','まだ最終承認を得ていないため、発売日の1週間前までに承認が下りなければ発売日を1週間延期する','デザインは変更しないことになった','発売日は変更しないことになった'], ans:'B', trap:'「まだ最終承認を得ていない」+ hoãn có điều kiện — giữ cả hai vế', explain:'デザインはまだ最終承認を得ていない；条件付き延期 — phải giữ cả hai vế (chưa duyệt + điều kiện: đến 1 tuần trước ngày ra mắt chưa duyệt thì hoãn 1 tuần).'},
  {n:7, seg:3, q:'宿泊費の上限はいくらですか。', opts:['12,000円（1泊あたり）','10,000円','実費','20,000円'], ans:'A', trap:'実費 là cách tính của 交通費, không phải trần 宿泊費', explain:'宿泊費は1泊あたり12,000円を上限. 実費 là cách thanh toán của 交通費.'},
  {n:8, seg:3, q:'タクシーの利用について正しいものはどれですか。', opts:['いつでも利用できる','終電を逃した場合に限る','利用できない','役員の許可があれば利用できる'], ans:'B', trap:'Điều kiện 役員 thuộc về 宿泊費, không phải taxi', explain:'タクシーの利用は終電を逃した場合に限る. 「役員に同行する場合」 là ngoại lệ của 宿泊費 (được thanh toán vượt trần), không liên quan đến taxi.'},
  {n:9, seg:3, q:'精算の申請が遅れた場合はどうなりますか。', opts:['精算できない','翌月の精算になる','上限を超えて精算できる','申請は不要になる'], ans:'B', trap:'Nộp muộn chỉ đổi kỳ thanh toán, không mất quyền 精算', explain:'申請が遅れた場合は翌月の精算になる — chỉ đổi kỳ 精算, không mất quyền 精算. 「上限を超えて精算できる」 thuộc về trường hợp đi cùng 役員 của 宿泊費.'},
  {n:10, seg:4, q:'12月1日以降、部品Xの価格は1個あたりいくらになりますか。', opts:['2,000円','2,100円','2,500円','1,900円'], ans:'B', trap:'Giá mới 2,100 vs giá cũ 2,000', explain:'価格は1個あたり2,000円から2,100円に5％値上げ. 2,000円 là giá cũ (áp dụng cho đơn đặt đến 30/11).'},
  {n:11, seg:4, q:'500個を新しい価格で注文した場合、合計はいくらですか。', opts:['1,000,000円','1,050,000円','1,250,000円','950,000円'], ans:'B', trap:'Nhân theo giá mới 2,100, không phải giá cũ 2,000', explain:'500 × 2,100 = 1,050,000円. 1,000,000円 là tổng theo giá cũ (500 × 2,000).'},
  {n:12, seg:4, q:'仕様変更について、返信の締め切りはいつですか。', opts:['11月20日まで','11月30日まで','12月1日まで','まだ決まっていない'], ans:'A', trap:'11月30日 là hạn đặt hàng theo giá cũ; 12月1日 là ngày quy cách mới có hiệu lực', explain:'仕様変更の可否について11月20日までにご返信 — hạn trả lời là 20/11. 11月30日 là hạn cuối đặt hàng theo giá cũ.'}
],
  instructions: `<li><strong>Khoảng 40 phút</strong> cho 12 câu đọc hiểu. Đồng hồ bắt đầu chạy khi bạn bấm <em>Bắt đầu làm bài</em>; hết giờ bài tự nộp.</li>
          <li>Bài gồm <strong>4 bộ</strong>, mỗi bộ có 1 văn bản + 3 câu hỏi và <strong>cả 3 câu của bộ hiển thị cùng nhau</strong> ngay dưới văn bản đó, trong khung làm bài kiểu phòng thi CBT — đọc xong trả lời luôn cả 3 câu, không phải chuyển qua lại từng câu. <strong>Không có audio</strong> — buổi này chỉ luyện đọc.</li>
          <li>Bộ 1 là <span class="jp">営業報告書</span> tháng 11 với doanh số 3 chi nhánh và dự báo tháng 12 phải cộng và đối chiếu, Bộ 2 là <span class="jp">議事録</span> cuộc họp chuẩn bị ra mắt sản phẩm mới (ngày ra mắt, giá bán, điều kiện hoãn vì bao bì chưa được duyệt cuối), Bộ 3 là <span class="jp">社内規定</span> về thanh toán chi phí công tác — chú ý các câu <span class="jp">ただし</span> (ngoại lệ), và Bộ 4 là <strong>thư của đối tác</strong> thông báo đổi quy cách và tăng giá <span class="jp">部品X</span> — đừng nhầm hai mốc ngày 20/11 và 30/11.</li>
          <li>Dùng cột <strong>Danh sách câu hỏi</strong> bên trái để nhảy tới câu bất kỳ (trang tự cuộn tới câu đó), hoặc phím <kbd>←</kbd> <kbd>→</kbd> để cuộn tới câu trước / câu tiếp. Phím <kbd>A</kbd>–<kbd>D</kbd> chọn đáp án cho câu bạn vừa bấm vào. Mỗi câu chỉ chọn <strong>một</strong> đáp án.</li>
          <li>Câu nào chưa chắc, bấm <strong>⚑ Đánh dấu</strong> ở ngay câu đó để quay lại sau.</li>
          <li>Nút <strong>Nộp bài</strong> luôn nằm ở thanh cuối trang (và trong cột bên trái) — bấm vào sẽ hiện hộp xác nhận, bấm <em>Nộp bài</em> trong hộp đó mới chấm điểm. Đáp án, giải thích tiếng Việt và <strong>bản dịch gợi ý của từng văn bản</strong> chỉ hiện sau khi nộp, kèm sổ lỗi sai.</li>`,
  candidateInfo: { subject: 'BJT 読解 — Luyện tập Ngày 12', questionInfo: '12 câu · 4 bộ', time: '~40 phút', format: '営業報告書 · 議事録 · 社内規定 · 社外文書（ thư đối tác）' },
  tips: `ở Bộ 1, ghi nhãn từng con số (tháng 10 suy ra / thực tế tháng 11 / dự báo tháng 12) ra nháp trước khi cộng; gặp <span class="jp">まだ〜ていない</span> thì nhớ kéo theo hệ quả đi kèm (chưa duyệt → chưa tính vào dự báo, chưa duyệt → hoãn có điều kiện); ở Bộ 4, tách rõ hai mốc ngày: 20/11 là hạn trả lời, 30/11 là hạn đặt hàng theo giá cũ.`,
  footerNote: 'Bài Ngày 12 — Luyện 読解 (Đọc hiểu): báo cáo doanh số tháng 11, biên bản họp ra mắt sản phẩm mới, quy định thanh toán chi phí công tác và thư đối tác đổi quy cách/tăng giá. Không có audio.',
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
