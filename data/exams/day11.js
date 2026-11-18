(function(){
var cfg = {
  id: 'day11',
  type: 'choukai',
  title: 'Ngày 11 — Luyện <span class="jp">聴解</span> (Nghe hiểu)',
  subtitle: '4 đoạn · 12 câu · Chuẩn bị tài liệu họp · Dời lịch họp &amp; hai sự kiện cùng ngày · Tiến độ xuất hàng · Họp 3 người chuẩn bị <span class="jp">発表会</span> · Thứ Năm 05/11/2026',
  timeSeconds: 40*60,
  questionCount: 12,
  segmentCount: 4,
  segLabel: 'Đoạn',
  segments: {
  1: { title:'第1問 — Chuẩn bị tài liệu họp', mp3:'assets/ngay11-doan1.mp3', desc:'Câu 1–3 · Nghe đoạn hội thoại rồi trả lời cả 3 câu của đoạn này. Chú ý: số người × số bản mỗi người, và chưa có xác nhận cuối thì chưa in.',
    lines:[
      '女性：課長、11月12日木曜日の会議の資料について、ご確認させてください。参加者は20名でよろしいでしょうか。',
      '男性：ああ、20名だ。資料は1人3部ずつ用意してくれ。',
      '女性：承知しました。60部ですね。なお、資料の最終確認は、まだ部長からいただいていませんが、よろしいでしょうか。',
      '男性：ああ、今確認するよ。確認が終わるまでは、印刷は控えてくれ。',
      '女性：分かりました。確認が終わり次第、印刷いたします。'
    ],
    vi:['Nữ: Thưa trưởng phòng, cho tôi xác nhận về tài liệu cuộc họp ngày thứ Năm 12/11. Số người tham dự là 20 người, có đúng không ạ?', 'Nam: Ừ, 20 người. Tài liệu chuẩn bị mỗi người 3 bản nhé.', 'Nữ: Đã rõ, 60 bản ạ. Ngoài ra, việc xác nhận cuối cùng tài liệu vẫn chưa nhận được từ trưởng bộ phận, có sao không ạ?', 'Nam: Ừ, giờ tôi sẽ xác nhận. Cho đến khi xác nhận xong thì đừng in nhé.', 'Nữ: Đã rõ. Ngay khi xác nhận xong tôi sẽ in.']},
  2: { title:'第2問 — Dời lịch họp với B社', mp3:'assets/ngay11-doan2.mp3', desc:'Câu 4–6 · Hai sự kiện cùng ngày 12/11: 打ち合わせ đã dời sang buổi chiều, 報告会 giữ nguyên buổi sáng — đừng ghép chéo giờ. Tài liệu 報告会 chưa được duyệt nên hôm đó chỉ giải thích 概要.',
    lines:[
      '男性：11月の予定について、変更があるよ。',
      '女性：はい。B社との打ち合わせは、11月10日火曜日の午前11時でしたね。',
      '男性：そうだったんだけど、先方の都合で11月12日木曜日の午後2時に変更になった。報告会は11月12日木曜日の午前10時のままだから、午前と午後で両方できるね。',
      '女性：分かりました。報告会の資料ですが、まだ承認を得ていないので、当日は概要のみの説明になりますね。',
      '男性：そのとおり。資料は承認が下りてから送ることにしよう。'
    ],
    vi:['Nam: Về lịch tháng 11, có thay đổi đấy.', 'Nữ: Vâng. Cuộc họp với công ty B là 11 giờ sáng thứ Ba 10/11, đúng không ạ?', 'Nam: Vốn là vậy, nhưng vì lý do phía đối tác nên đổi sang 2 giờ chiều thứ Năm 12/11. Buổi báo cáo vẫn giữ 10 giờ sáng thứ Năm 12/11 nên sáng và chiều đều làm được cả.', 'Nữ: Đã rõ. Tài liệu buổi báo cáo vẫn chưa được phê duyệt nên hôm đó chỉ giải thích phần tóm tắt thôi, đúng không ạ?', 'Nam: Đúng vậy. Tài liệu sẽ gửi sau khi có phê duyệt.']},
  3: { title:'第3問 — Tiến độ xuất hàng', mp3:'assets/ngay11-doan3.mp3', desc:'Câu 7–9 · Gắn đúng nhãn từng số: tổng 50台 / đã xuất 35台 / còn lại 15台. 請求書 chưa phát hành — sẽ phát hành sau khi giao hàng.',
    lines:[
      '女性：課長、出荷の進捗についてご報告します。全50台のうち、35台が出荷済みです。残りは15台です。',
      '男性：11月20日金曜日までに全部出荷できるかな。',
      '女性：はい。残りの15台は、11月20日金曜日までに発送する予定です。なお、請求書はまだ発行していませんので、納品後に発行いたします。',
      '男性：分かった。では、その内容で進めてくれ。'
    ],
    vi:['Nữ: Thưa trưởng phòng, tôi xin báo cáo tiến độ xuất hàng. Trong tổng 50 chiếc, 35 chiếc đã xuất, còn lại 15 chiếc.', 'Nam: Đến thứ Sáu 20/11 có xuất hết được không?', 'Nữ: Vâng. 15 chiếc còn lại dự kiến gửi đi trước thứ Sáu 20/11. Ngoài ra, hóa đơn vẫn chưa phát hành nên sẽ phát hành sau khi giao hàng.', 'Nam: Đã rõ. Cứ tiến hành theo nội dung đó.']},
  4: { title:'第4問 — Họp 3 người: chuẩn bị 発表会', mp3:'assets/ngay11-doan4.mp3', desc:'Câu 10–12 · Dạng mới: cuộc họp 3 người — người đàn ông thứ hai nói bằng giọng hạ tông, phân biệt với giọng chủ trì. 案内 chưa gửi cho 取引先 — gửi ngay khi 会場 chốt xong.',
    lines:[
      '男性：発表会について、確認します。会場はどうなっていますか。',
      '女性：はい。会場は、11月19日木曜日の午後2時から、会議室Aで予約しております。参加者は30名の予定です。',
      '男性：分かった。資料はどうかな。',
      '男性（声を落として）：資料は、参加者30名分、1人2部で、合計60部用意いたします。なお、最終確認は、まだ部長からいただいていません。',
      '男性：そうか。確認が終わるまでは、印刷は控えてくれ。確認が終わり次第、印刷するように。',
      '女性：承知しました。なお、発表会の案内は、まだ取引先に送っていませんので、会場が決まり次第、送ります。',
      '男性：分かった。では、その内容で進めてくれ。'
    ],
    vi:['Nam: Về buổi thuyết trình, tôi muốn xác nhận. Hội trường thế nào rồi?', 'Nữ: Vâng. Hội trường đã đặt phòng họp A từ 2 giờ chiều thứ Năm 19/11. Số người tham dự dự kiến 30 người.', 'Nam: Đã rõ. Tài liệu thì sao?', 'Nam (giọng hạ tông): Tài liệu chuẩn bị cho 30 người, mỗi người 2 bản, tổng 60 bản. Ngoài ra, việc xác nhận cuối cùng vẫn chưa nhận được từ trưởng bộ phận.', 'Nam: Vậy à. Cho đến khi xác nhận xong thì đừng in. Ngay khi xác nhận xong thì in nhé.', 'Nữ: Đã rõ. Ngoài ra, thông báo về buổi thuyết trình vẫn chưa gửi cho đối tác nên ngay khi hội trường chốt xong sẽ gửi.', 'Nam: Đã rõ. Cứ tiến hành theo nội dung đó.']}
},
  segNames: null,
  questions: [
  {n:1, seg:1, q:'資料は何部印刷することになりましたか。', opts:['20部','60部','23部','3部'], ans:'B', trap:'Số người vs số bản in', explain:'20名 × 1人3部 = 60部；20部 là số người, 3部 là số bản mỗi người.'},
  {n:2, seg:1, q:'印刷について正しいものはどれですか。', opts:['印刷は中止になった','すぐに印刷する','確認が終わるまで印刷を控える','部長が印刷する'], ans:'C', trap:'「確認が終わるまで印刷を控える」— chưa xác nhận xong thì chưa in', explain:'最終確認をまだいただいていないので、確認が終わるまでは印刷を控える；確認が終わり次第印刷する.'},
  {n:3, seg:1, q:'参加者は何名ですか。', opts:['60名','20名','3名','12名'], ans:'B', trap:'Gắn đúng số với đúng đối tượng', explain:'参加者は20名；60 là số bản in, 3 là số bản mỗi người.'},
  {n:4, seg:2, q:'B社との打ち合わせはいつになりましたか。', opts:['11月10日火曜日の午前11時','11月12日木曜日の午後2時','11月12日木曜日の午前10時','11月10日火曜日の午後2時'], ans:'B', trap:'Lịch cũ vs lịch mới + hai sự kiện cùng ngày', explain:'打ち合わせ đổi từ 11月10日火曜日午前11時 sang 11月12日木曜日午後2時；午前10時 cùng ngày là 報告会.'},
  {n:5, seg:2, q:'報告会の資料について正しいものはどれですか。', opts:['資料を持参して詳しく説明する','資料はすでに承認を得ている','承認がまだ得られていないので当日は概要のみの説明になる','報告会は中止になった'], ans:'C', trap:'「まだ承認を得ていない」— chưa được duyệt thì chỉ giải thích 概要', explain:'資料はまだ承認を得ていないので当日は概要のみ；資料 sẽ gửi sau khi 承認が下りてから.'},
  {n:6, seg:2, q:'報告会はいつですか。', opts:['11月12日木曜日の午前10時','11月12日木曜日の午後2時','11月10日火曜日の午前11時','11月10日火曜日の午前10時'], ans:'A', trap:'Ghép chéo giờ của hai sự kiện cùng ngày', explain:'報告会 giữ nguyên 11月12日木曜日午前10時；午後2時 cùng ngày là 打ち合わせ đã dời tới.'},
  {n:7, seg:3, q:'出荷済みは何台ですか。', opts:['50台','15台','35台','65台'], ans:'C', trap:'Đã xuất vs còn lại vs tổng số', explain:'全50台のうち出荷済み35台；15 là số còn lại, 50 là tổng số.'},
  {n:8, seg:3, q:'残りの台数はいつまでに発送する予定ですか。', opts:['11月20日金曜日','11月12日木曜日','11月19日木曜日','まだ決まっていない'], ans:'A', trap:'Hạn phát送 phần còn lại', explain:'残り15台は11月20日金曜日までに発送する予定.'},
  {n:9, seg:3, q:'請求書について正しいものはどれですか。', opts:['すでに発行した','まだ発行していないので、納品後に発行する','発行しないことになった','出荷と一緒に送った'], ans:'B', trap:'「まだ発行していない」— chưa phát hành hóa đơn', explain:'請求書はまだ発行していない、納品後に発行.'},
  {n:10, seg:4, q:'発表会はいつ、どこで開かれますか。', opts:['11月19日木曜日の午後2時から、会議室A','11月19日木曜日の午後2時から、会議室B','11月18日水曜日の午後2時から、会議室A','11月19日木曜日の午前10時から、会議室A'], ans:'A', trap:'Ghép đúng ngày + giờ + phòng', explain:'会場は11月19日木曜日午後2時から会議室A.'},
  {n:11, seg:4, q:'資料は何部用意することになりましたか。', opts:['30部','60部','90部','2部'], ans:'B', trap:'Số người vs số bản in', explain:'参加者30名 × 1人2部 = 60部；30 là số người, 2 là số bản mỗi người.'},
  {n:12, seg:4, q:'発表会の案内について正しいものはどれですか。', opts:['すでに取引先に送った','案内は送らないことになった','まだ取引先に送っていないので、会場が決まり次第、送る','会場が決まってから送るかどうか決める'], ans:'C', trap:'「まだ送っていない」— chưa gửi thông báo', explain:'案内はまだ取引先に送っていないので、会場が決まり次第送る.'}
],
  instructions: `<li><strong>Khoảng 40 phút</strong> cho 12 câu nghe. Đồng hồ bắt đầu chạy khi bạn bấm <em>Bắt đầu làm bài</em>; hết giờ bài tự nộp.</li>
          <li>Bài gồm <strong>4 đoạn nghe</strong>, mỗi đoạn có 3 câu hỏi và <strong>cả 3 câu của đoạn hiển thị cùng nhau</strong> ngay dưới nút phát của đoạn đó, trong khung làm bài kiểu phòng thi CBT — nghe xong trả lời luôn cả 3 câu, không phải chuyển qua lại từng câu. Bấm <strong>▶ Phát đoạn nghe</strong> ở đầu mỗi đoạn — audio MP3 thu sẵn, <strong>không đọc tên người nói</strong>, đúng như phòng thi.</li>
          <li>Chủ đề của buổi này là bẫy <strong><span class="jp">まだ〜ていない</span></strong> — việc <em>chưa xong</em> thì kéo theo hệ quả đi kèm: Bộ 1 chuẩn bị tài liệu họp (số người × số bản mỗi người; chưa có xác nhận cuối thì hoãn in), Bộ 2 dời lịch họp với <span class="jp">B社</span> — cùng ngày 12/11 có <strong>hai sự kiện</strong>, phải ghi cặp “sự kiện → giờ” ra nháp, đừng ghép chéo; Bộ 3 báo cáo tiến độ xuất hàng (tổng số / đã xuất / còn lại; <span class="jp">請求書</span> chưa phát hành thì phát hành sau khi giao hàng), Bộ 4 là <strong>dạng mới — cuộc họp 3 người</strong> chuẩn bị <span class="jp">発表会</span>: người đàn ông thứ hai nói bằng giọng hạ tông, cần phân biệt với giọng chủ trì.</li>
          <li>Ở chế độ <strong>Thi thật</strong>, mỗi đoạn chỉ phát <strong>1 lần duy nhất</strong>. Hãy nghe hết đoạn rồi mới trả lời 3 câu của đoạn đó.</li>
          <li>Dùng cột <strong>Danh sách câu hỏi</strong> bên trái để nhảy tới câu bất kỳ (trang tự cuộn tới câu đó), hoặc phím <kbd>←</kbd> <kbd>→</kbd> để cuộn tới câu trước / câu tiếp. Phím <kbd>A</kbd>–<kbd>D</kbd> chọn đáp án cho câu bạn vừa bấm vào. Mỗi câu chỉ chọn <strong>một</strong> đáp án — chọn đáp án khác sẽ thay đáp án cũ.</li>
          <li>Câu nào chưa chắc, bấm <strong>⚑ Đánh dấu</strong> ở ngay câu đó để quay lại sau.</li>
          <li>Nút <strong>Nộp bài</strong> luôn nằm ở thanh cuối trang (và trong cột bên trái) — bấm vào sẽ hiện hộp xác nhận, bấm <em>Nộp bài</em> trong hộp đó mới chấm điểm. Nộp xong mới hiện đáp án, giải thích tiếng Việt, transcript và sổ lỗi sai.</li>`,
  candidateInfo: { subject: 'BJT 聴解 — Luyện tập Ngày 11', questionInfo: '12 câu · 4 đoạn', time: '~40 phút', format: 'Họp 3 người — giọng nam thứ hai hạ tông, khác giọng chủ trì' },
  tips: ``,
  footerNote: 'Bài Ngày 11 — Luyện 聴解 (Nghe hiểu): chuẩn bị tài liệu họp, dời lịch họp, tiến độ xuất hàng và cuộc họp 3 người chuẩn bị発表会. Audio là file MP3 thu sẵn, không đọc tên người nói.',
  scoreMessages: [
    {min: 12, text: 'Xuất sắc — sạch cả 12 câu nghe Ngày 11!'},
    {min: 10, text: 'Rất tốt — gần như sạch bẫy'},
    {min: 8, text: 'Khá chắc tay — còn vài bẫy chi tiết'},
    {min: 5, text: 'Đang vào form — để ý các câu số liệu, lịch đã đổi và việc chưa được duyệt'},
    {min: 1, text: 'Cần luyện thêm — bẫy gắn nhầm số vẫn đang thắng'},
    {min: 0, text: 'Nền nghe đang hổng — nghe lại transcript từng đoạn nhé'}
  ]
};
if(!window.EXAM_DAYS) window.EXAM_DAYS = {};
window.EXAM_DAYS[cfg.id] = cfg;
})();
