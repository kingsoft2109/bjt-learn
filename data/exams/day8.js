(function(){
var cfg = {
  id: 'day8',
  type: 'choukai',
  title: 'Ngày 8 — Luyện <span class="jp">聴解</span> (Nghe hiểu)',
  subtitle: '4 đoạn · 12 câu · Tuần 2 — kính ngữ: chuẩn bị tài liệu họp · điện thoại từ khách hàng · báo cáo tiến độ · lời nhắn thoại đổi phòng họp · Thứ Hai 02/11/2026',
  timeSeconds: 40*60,
  questionCount: 12,
  segmentCount: 4,
  segLabel: 'Đoạn',
  segments: {
  1: { title:'第1問 — Chuẩn bị tài liệu họp', mp3:'assets/ngay8-doan1.mp3', desc:'Câu 1–3 · Nghe đoạn hội thoại rồi trả lời cả 3 câu của đoạn này. Chú ý: số người × số bản mỗi người, và chưa có xác nhận cuối thì chưa in.',
    lines:[
      '女性：課長、明日の会議の資料について、ご確認させてください。参加者は18名でよろしいでしょうか。',
      '男性：ああ、18名だ。資料は1人2部ずつ用意してくれ。',
      '女性：承知しました。36部ですね。なお、配布資料の最終確認は、まだ部長からいただいていませんが、よろしいでしょうか。',
      '男性：ああ、今確認するよ。確認が終わるまでは、印刷は控えてくれ。',
      '女性：分かりました。確認が終わり次第、印刷いたします。'
    ],
    vi:['Nữ: Thưa Tổ trưởng, cho phép tôi xác nhận về tài liệu cho cuộc họp ngày mai ạ. Số người tham dự là 18 người, có đúng không ạ?', 'Nam: À, 18 người. Chuẩn bị tài liệu mỗi người 2 bộ giúp tôi nhé.', 'Nữ: Vâng, tôi đã rõ. Vậy là 36 bộ ạ. Tuy nhiên, bản xác nhận cuối cùng của tài liệu phát tay, tôi vẫn chưa nhận được từ Trưởng phòng, như vậy có được không ạ?', 'Nam: À, tôi xác nhận ngay bây giờ. Trong lúc chưa xác nhận xong thì khoan in đã nhé.', 'Nữ: Vâng, tôi hiểu rồi. Ngay khi xác nhận xong, tôi sẽ in ạ.']},
  2: { title:'第2問 — Điện thoại từ khách hàng (A社)', mp3:'assets/ngay8-doan2.mp3', desc:'Câu 4–6 · Chú ý: lịch cũ đã đổi sang lịch mới — lấy lịch mới làm chuẩn; tài liệu gửi đi phải qua xác nhận của課長 trước.',
    lines:[
      '女性：課長、A社からお電話がありました。打ち合わせについて、ご連絡です。',
      '男性：何と言っていたかな。',
      '女性：はい。もともとは11月10日火曜日の午前10時でしたが、11月11日水曜日の午後2時に変更したいとのことです。なお、資料の送付については、まだ先方に確認していません。',
      '男性：分かった。11月11日水曜日の午後2時で対応しよう。資料は今日中に先方へ送ってくれ。送る前に、私に確認してくれ。',
      '女性：承知しました。送る前に、課長にご確認いただきます。'
    ],
    vi:['Nữ: Thưa Tổ trưởng, Công ty A vừa gọi điện tới ạ. Là liên lạc về buổi họp ạ.', 'Nam: Họ nói gì vậy?', 'Nữ: Vâng. Ban đầu là 10 giờ sáng thứ Ba ngày 10 tháng 11, nhưng họ muốn đổi sang 2 giờ chiều thứ Tư ngày 11 tháng 11 ạ. Ngoài ra, về việc gửi tài liệu, tôi vẫn chưa xác nhận với phía đối tác ạ.', 'Nam: Được rồi. Cứ xử lý theo 2 giờ chiều thứ Tư ngày 11 tháng 11 nhé. Tài liệu thì gửi cho phía đối tác trong hôm nay giúp tôi. Trước khi gửi, hãy cho tôi xác nhận nhé.', 'Nữ: Vâng, tôi đã rõ. Trước khi gửi, tôi sẽ nhờ Tổ trưởng xác nhận ạ.']},
  3: { title:'第3問 — Báo cáo tiến độ', mp3:'assets/ngay8-doan3.mp3', desc:'Câu 7–9 · Chú ý gắn đúng số: tổng số việc, số đã xong và số còn lại; ngân sách bổ sung chưa được duyệt thì chưa đặt hàng.',
    lines:[
      '男性：進捗はどうなっているかな。',
      '女性：全20件のうち、14件が完了しております。残りは6件です。',
      '男性：11月13日金曜日までに全部終わるかな。',
      '女性：はい。残りの6件は、11月13日金曜日までに完了する予定です。なお、追加の予算については、まだ承認を得ていませんので、承認が得られ次第、発注いたします。',
      '男性：分かった。では、その内容で進めてくれ。',
      '女性：承知しました。'
    ],
    vi:['Nam: Tiến độ đang thế nào rồi?', 'Nữ: Trong tổng số 20 việc, 14 việc đã hoàn thành ạ. Còn lại 6 việc ạ.', 'Nam: Đến thứ Sáu ngày 13 tháng 11 có xong hết được không?', 'Nữ: Vâng. 6 việc còn lại dự kiến sẽ hoàn thành trước thứ Sáu ngày 13 tháng 11 ạ. Ngoài ra, về ngân sách bổ sung, vì vẫn chưa được phê duyệt nên ngay khi được phê duyệt, chúng tôi sẽ đặt hàng ạ.', 'Nam: Được rồi. Vậy cứ tiến hành theo nội dung đó nhé.', 'Nữ: Vâng, tôi đã rõ ạ.']},
  4: { title:'第4問 — Lời nhắn thoại: đổi phòng họp （留守番電話）', mp3:'assets/ngay8-doan4.mp3', desc:'Câu 10–12 · Dạng 留守番電話: một người để lại lời nhắn. Chú ý lấy đúng cả tầng lẫn tên phòng mới, và phân biệt giờ bắt đầu với hạn gửi tài liệu.',
    lines:[
      'お世話になっております。B社の者です。明日の会議について、ご連絡いたします。会議室が3階の会議室Aから、5階の会議室Cに変更になりました。開始時間は午前10時のままです。なお、資料は明日午前9時までに、メールでお送りください。お手数ですが、よろしくお願いいたします。'
    ],
    vi:['Xin chào quý khách. Tôi là nhân viên của Công ty B. Tôi xin liên lạc về cuộc họp ngày mai. Phòng họp đã thay đổi từ Phòng họp A ở tầng 3 sang Phòng họp C ở tầng 5. Giờ bắt đầu vẫn giữ nguyên là 10 giờ sáng. Ngoài ra, xin vui lòng gửi tài liệu qua email trước 9 giờ sáng mai. Phiền quý khách, rất mong được giúp đỡ.']}
},
  segNames: null,
  questions: [
  {n:1, seg:1, q:'資料は何部印刷することになりましたか。', opts:['18部','36部','54部','9部'], ans:'B', trap:'Số người vs số bản in', explain:'18名 × 1人2部 = 36部；18部 là số người, không phải số bản in.'},
  {n:2, seg:1, q:'印刷について正しいものはどれですか。', opts:['印刷は中止になった','すぐに印刷する','確認が終わるまで印刷を控える','部長が印刷する'], ans:'C', trap:'「確認が終わるまで印刷を控える」— chưa xác nhận xong thì chưa in', explain:'最終確認をまだいただいていないので、確認が終わるまでは印刷を控える；確認が終わり次第印刷する.'},
  {n:3, seg:1, q:'参加者は何名ですか。', opts:['36名','18名','2名','12名'], ans:'B', trap:'Gắn đúng số với đúng đối tượng', explain:'参加者は18名；36 là số bản in, 2 là số bản mỗi người.'},
  {n:4, seg:2, q:'打ち合わせはいつに変更になりましたか。', opts:['11月11日水曜日の午後2時','11月10日火曜日の午前10時','11月10日火曜日の午後2時','11月11日水曜日の午前10時'], ans:'A', trap:'Lịch cũ vs lịch mới đã thay đổi', explain:'Lịch mới là 11月11日水曜日午後2時；11月10日午前10時 là lịch cũ.'},
  {n:5, seg:2, q:'資料について正しいものはどれですか。', opts:['すでに先方に送った','先方に送る必要はない','今日中に課長の確認を受けてから先方へ送る','明日送る'], ans:'C', trap:'Gửi hôm nay nhưng phải qua xác nhận trước', explain:'資料は今日中に送るが、送る前に課長に確認する.'},
  {n:6, seg:2, q:'電話はどこからありましたか。', opts:['B社','A社','経理部','総務部'], ans:'B', trap:'Nghe đúng tên công ty gọi đến', explain:'A社からお電話があった.'},
  {n:7, seg:3, q:'完了したのは何件ですか。', opts:['6件','20件','26件','14件'], ans:'D', trap:'Đã xong vs còn lại vs tổng số', explain:'全20件のうち完了14件；6 là số còn lại, 20 là tổng số.'},
  {n:8, seg:3, q:'残りの件数はいつまでに完了する予定ですか。', opts:['11月13日金曜日','今週金曜日','11月11日水曜日','今週月曜日'], ans:'A', trap:'Hạn hoàn thành phần còn lại', explain:'残り6件は11月13日金曜日までに完了する予定.'},
  {n:9, seg:3, q:'追加の予算の発注について正しいものはどれですか。', opts:['すでに発注した','発注しないことになった','承認は不要だ','承認が得られ次第、発注する'], ans:'D', trap:'「まだ承認を得ていない」— chưa được duyệt', explain:'追加の予算はまだ承認を得ていないので、承認が得られ次第発注する.'},
  {n:10, seg:4, q:'会議室はどこに変更になりましたか。', opts:['5階の会議室C','3階の会議室A','5階の会議室A','3階の会議室C'], ans:'A', trap:'Ghép chéo tầng và tên phòng', explain:'会議室が3階の会議室Aから5階の会議室Cに変更；phải lấy cả tầng lẫn tên phòng mới, không ghép chéo.'},
  {n:11, seg:4, q:'開始時間について正しいものはどれですか。', opts:['午前9時に変更になった','午後10時に変更になった','午前10時のまま','まだ決まっていない'], ans:'C', trap:'Giờ bắt đầu vs hạn gửi tài liệu', explain:'開始時間は午前10時のまま；午前9時 là hạn gửi tài liệu, không phải giờ bắt đầu.'},
  {n:12, seg:4, q:'資料について、どうしてほしいと言っていますか。', opts:['資料は不要だ','会議後に送ってほしい','明日午前9時までにメールで送ってほしい','明日午前10時までに持参してほしい'], ans:'C', trap:'Hạn gửi tài liệu vs giờ họp', explain:'資料は明日午前9時までにメールで送る；午前10時 là giờ họp.'}
],
  instructions: `<li><strong>Khoảng 40 phút</strong> cho 12 câu nghe. Đồng hồ bắt đầu chạy khi bạn bấm <em>Bắt đầu làm bài</em>; hết giờ bài tự nộp.</li>
          <li>Bài gồm <strong>4 đoạn nghe</strong>, mỗi đoạn có 3 câu hỏi và <strong>cả 3 câu của đoạn hiển thị cùng nhau</strong> ngay dưới nút phát của đoạn đó, trong khung làm bài kiểu phòng thi CBT — nghe xong trả lời luôn cả 3 câu, không phải chuyển qua lại từng câu. Bấm <strong>▶ Phát đoạn nghe</strong> ở đầu mỗi đoạn — audio MP3 thu sẵn, <strong>không đọc tên người nói</strong>, đúng như phòng thi.</li>
          <li>Chủ đề tuần 2 là <strong>kính ngữ trong công việc</strong>: Đoạn 1 chuẩn bị tài liệu họp (số người × số bản mỗi người, chưa có xác nhận cuối thì chưa in), Đoạn 2 điện thoại từ khách hàng (lịch cũ đã đổi sang lịch mới, gửi tài liệu phải qua xác nhận của cấp trên trước), Đoạn 3 báo cáo tiến độ (đã xong / còn lại / tổng số, đặt hàng sau khi được phê duyệt ngân sách), Đoạn 4 là <strong><span class="jp">留守番電話</span></strong> — một người để lại lời nhắn đổi phòng họp: chú ý lấy đúng cả tầng lẫn tên phòng mới, và phân biệt giờ bắt đầu với hạn gửi tài liệu.</li>
          <li>Ở chế độ <strong>Thi thật</strong>, mỗi đoạn chỉ phát <strong>1 lần duy nhất</strong>. Hãy nghe hết đoạn rồi mới trả lời 3 câu của đoạn đó.</li>
          <li>Dùng cột <strong>Danh sách câu hỏi</strong> bên trái để nhảy tới câu bất kỳ (trang tự cuộn tới câu đó), hoặc phím <kbd>←</kbd> <kbd>→</kbd> để cuộn tới câu trước / câu tiếp. Phím <kbd>A</kbd>–<kbd>D</kbd> chọn đáp án cho câu bạn vừa bấm vào. Mỗi câu chỉ chọn <strong>một</strong> đáp án — chọn đáp án khác sẽ thay đáp án cũ.</li>
          <li>Câu nào chưa chắc, bấm <strong>⚑ Đánh dấu</strong> ở ngay câu đó để quay lại sau.</li>
          <li>Nút <strong>Nộp bài</strong> luôn nằm ở thanh cuối trang (và trong cột bên trái) — bấm vào sẽ hiện hộp xác nhận, bấm <em>Nộp bài</em> trong hộp đó mới chấm điểm. Nộp xong mới hiện đáp án, giải thích tiếng Việt, transcript và sổ lỗi sai.</li>`,
  candidateInfo: { subject: 'BJT 聴解 — Luyện tập Ngày 8', questionInfo: '12 câu · 4 đoạn', time: '~40 phút', format: '留守番電話 — lời nhắn thoại của một người nói' },
  tips: ``,
  footerNote: 'Bài Ngày 8 — Luyện 聴解 (Nghe hiểu), tuần 2 kính ngữ: 3 đoạn hội thoại + 1 đoạn lời nhắn thoại 留守番電話. Audio là file MP3 thu sẵn, không đọc tên người nói.',
  scoreMessages: [
    {min: 12, text: 'Xuất sắc — sạch cả 12 câu nghe kính ngữ tuần 2!'},
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
