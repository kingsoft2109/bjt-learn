/* ===== BJT trilingual UI (added 2026-11-27) =====
   UI language: 'ja' (default) / 'vi' / 'en', persisted in localStorage 'bjtLang'.
   Exam content (questions, options, documents, audio scripts) is ALWAYS Japanese.
   Only interface text and answer explanations follow the selected language.
   Explanation fallback chain: selected -> English -> Vietnamese (never empty). */
(function(){
  var SUPPORTED = ['ja','vi','en'];
  var lang = 'ja';
  try {
    var saved = localStorage.getItem('bjtLang');
    if (SUPPORTED.indexOf(saved) >= 0) lang = saved;
  } catch(e){}
  window.BJT_LANG = lang;

  var DICT = {
    /* --- top bar / navigation --- */
    fontSize:      {ja:'A＋ 文字サイズ', vi:'A＋ Cỡ chữ', en:'A+ Font size'},
    videoLibrary:  {ja:'▶ 動画ライブラリ', vi:'▶ Thư viện video', en:'▶ Video library'},
    vocabCards:    {ja:'🃏 単語カード', vi:'🃏 Thẻ từ vựng', en:'🃏 Vocab cards'},
    home:          {ja:'🏠 ホーム', vi:'🏠 Trang chủ', en:'🏠 Home'},
    pickExam:      {ja:'問題を選ぶ', vi:'Chọn đề', en:'Choose an exam'},
    /* --- home view --- */
    homeH1:        {ja:'無料オンラインBJT対策 — コンピューター試験室', vi:'Luyện thi BJT trực tuyến miễn phí — Phòng thi máy tính', en:'Free online BJT practice — Computer test room'},
    homeIntro:     {ja:'対策ページ <strong>BJT (Business Japanese Proficiency Test)</strong> コンピューター上の実際の試験室を模したインターフェース（CBT）で。上のメニューから問題を選んで始めましょう。', vi:'Trang luyện thi <strong>BJT (Business Japanese Proficiency Test)</strong> với giao diện mô phỏng phòng thi thật trên máy tính (CBT). Chọn một đề từ menu phía trên để bắt đầu.', en:'Practice for the <strong>BJT (Business Japanese Proficiency Test)</strong> in an interface that simulates a real computer test room (CBT). Pick an exam from the menu above to start.'},
    practiceContent:{ja:'練習内容', vi:'Nội dung luyện tập', en:'What you can practice'},
    examFormats:   {ja:'BJTの出題形式', vi:'Các dạng đề BJT', en:'BJT question formats'},
    features:      {ja:'機能', vi:'Tính năng', en:'Features'},
    guideAbout:    {ja:'BJTとは', vi:'BJT là gì', en:'About the BJT'},
    guideStructure:{ja:'試験の構成', vi:'Cấu trúc bài thi', en:'Exam structure'},
    guideScore:    {ja:'スコアとレベル', vi:'Điểm số và cấp độ', en:'Scores and levels'},
    guideStudy:    {ja:'対策の進め方', vi:'Cách ôn luyện', en:'How to prepare'},
    guideHowto:    {ja:'このサイトの使い方', vi:'Cách dùng trang này', en:'How to use this site'},
    guideFaq:      {ja:'よくある質問', vi:'Câu hỏi thường gặp', en:'FAQ'},
    aboutSite:     {ja:'このサイトについて', vi:'Về trang này', en:'About this site'},
    privacy:       {ja:'プライバシーポリシー', vi:'Chính sách riêng tư', en:'Privacy policy'},
    /* --- exam chrome (shared) --- */
    mode:          {ja:'モード：', vi:'Chế độ:', en:'Mode:'},
    modeReal:      {ja:'本番 — 音声は1回だけ再生', vi:'Thi thật — audio chỉ phát 1 lần', en:'Real exam — audio plays once only'},
    modePractice:  {ja:'練習 — 聞き直し可能', vi:'Luyện tập — nghe lại được', en:'Practice — replay allowed'},
    modeRealShort: {ja:'本番', vi:'Thi thật', en:'Real'},
    modePracShort: {ja:'練習', vi:'Luyện tập', en:'Practice'},
    partTime:      {ja:'現在のパートの時間', vi:'Thời gian của phần hiện tại', en:'Time for the current part'},
    sectionTime:   {ja:'現在の部の残り時間', vi:'Thời gian còn lại của phần hiện tại', en:'Time left for the current section'},
    notStarted:    {ja:'未開始', vi:'Chưa bắt đầu', en:'Not started'},
    inProgress:    {ja:'実施中…', vi:'Đang làm…', en:'In progress…'},
    lockedDone:    {ja:'✓ ロック済み', vi:'✓ Đã khóa', en:'✓ Locked'},
    qList:         {ja:'問題一覧', vi:'Danh sách câu hỏi', en:'Question list'},
    unanswered:    {ja:'未回答', vi:'Chưa trả lời', en:'Unanswered'},
    answeredMark:  {ja:'選択済み', vi:'Đã chọn', en:'Answered'},
    showing:       {ja:'表示中', vi:'Đang hiển thị', en:'Current'},
    flaggedMark:   {ja:'⚑ フラグ済み', vi:'⚑ Đã gắn cờ', en:'⚑ Flagged'},
    prevQ:         {ja:'← 前の問題', vi:'← Câu trước', en:'← Previous'},
    nextQ:         {ja:'次の問題 →', vi:'Câu tiếp →', en:'Next →'},
    submitPart:    {ja:'このパートを提出', vi:'Nộp phần này', en:'Submit this part'},
    submitSection: {ja:'この部を提出する', vi:'Nộp phần này', en:'Submit this section'},
    subject:       {ja:'科目', vi:'Môn thi', en:'Subject'},
    qCount:        {ja:'問題数', vi:'Số câu', en:'Questions'},
    timeLabel:     {ja:'時間', vi:'Thời gian', en:'Time'},
    structure:     {ja:'構成', vi:'Cấu trúc', en:'Structure'},
    rules:         {ja:'ルール', vi:'Quy định', en:'Rules'},
    result:        {ja:'結果', vi:'Kết quả', en:'Result'},
    retry:         {ja:'↺ もう一度', vi:'↺ Làm lại', en:'↺ Try again'},
    flagQ:         {ja:'⚑ この問題にフラグ', vi:'⚑ Gắn cờ câu này', en:'⚑ Flag this question'},
    flagQOn:       {ja:'⚑ フラグ済み — 押して解除', vi:'⚑ Đã gắn cờ — bấm để bỏ', en:'⚑ Flagged — tap to clear'},
    submit:        {ja:'提出', vi:'Nộp bài', en:'Submit'},
    start:         {ja:'開始', vi:'Bắt đầu', en:'Start'},
    /* --- engine dynamic strings (Day engine / exam-engine.js) --- */
    opening:       {ja:'問題を開いています…', vi:'Đang mở đề…', en:'Opening the exam…'},
    opened:        {ja:'問題が開きました — 問題が見えない場合は、少し下にスクロールしてください。', vi:'Đã mở đề — nếu chưa thấy câu hỏi, hãy cuộn xuống một chút.', en:'The exam is open — if you cannot see the questions, scroll down a little.'},
    modeRealNote:  {ja:' · 本番モード：この音声は1回だけ再生されます。', vi:' · Chế độ thi thật: audio này chỉ phát 1 lần.', en:' · Real-exam mode: this audio plays only once.'},
    modePracNote:  {ja:' · 練習モード：聞き直しできます。', vi:' · Chế độ luyện tập: có thể nghe lại.', en:' · Practice mode: you can replay it.'},
    audioLabel:    {ja:'音声', vi:'Audio', en:'Audio'},
    audioOfQ:      {ja:'音声（問題 ', vi:'Audio (câu ', en:'Audio (Q'},
    questionWord:  {ja:'問題', vi:'Câu', en:'Question'},
    answeredCount: {ja:'回答済み ', vi:'Đã trả lời ', en:'Answered '},
    gradedCount:   {ja:'採点済み — 正解 ', vi:'Đã chấm — đúng ', en:'Graded — correct '},
    showingQ:      {ja:'表示中：問題 ', vi:'Đang xem: câu ', en:'Showing: question '},
    allAnsweredSubmit:{ja:'すべて回答しました — 「提出」を押して採点しましょう。', vi:'Đã trả lời tất cả — bấm "Nộp bài" để chấm điểm.', en:'All answered — press "Submit" to grade.'},
    submitHintTail:{ja:' — 回答が終わったら「提出」を押して採点しましょう。', vi:' — trả lời xong hãy bấm "Nộp bài" để chấm điểm.', en:' — when you finish, press "Submit" to grade.'},
    timeUp:        {ja:'⏱ 時間切れ — 自動で提出されました。', vi:'⏱ Hết giờ — bài đã được nộp tự động.', en:'⏱ Time up — your answers were submitted automatically.'},
    noMistakes:    {ja:'間違えた問題はありません — 全 ', vi:'Không có câu sai — đúng cả ', en:'No mistakes — all '},
    noMistakesTail:{ja:' 問正解です。🎉', vi:' câu. 🎉', en:' questions correct. 🎉'},
    yourChoice:    {ja:'あなたの選択：', vi:'Bạn chọn: ', en:'Your answer: '},
    correctIs:     {ja:' · 正解：', vi:' · Đáp án: ', en:' · Correct: '},
    correctAnswerIs:{ja:'正しい答え：', vi:'Đáp án đúng: ', en:'Correct answer: '},
    verdictOk:     {ja:'✓ 正解', vi:'✓ Đúng', en:'✓ Correct'},
    verdictBad:    {ja:'✗ 不正解', vi:'✗ Sai', en:'✗ Incorrect'},
    caution:       {ja:' · 注意： ', vi:' · Lưu ý: ', en:' · Watch out: '},
    replayListen:  {ja:'聞き直し ', vi:'Nghe lại ', en:'Replay '},
    transcriptWord:{ja:'Transcript', vi:'Transcript', en:'Transcript'},
    translationWord:{ja:'翻訳', vi:'Bản dịch', en:'Translation'},
    refTranslation:{ja:'参考訳 — ', vi:'Bản dịch tham khảo — ', en:'Reference translation — '},
    sceneImage:    {ja:'場面の絵', vi:'Hình tình huống', en:'Scene image'},
    noDataYet:     {ja:'データはまだありません — 上で提出すると、ミスノートに間違えた問題が自動で入ります。', vi:'Chưa có dữ liệu — khi nộp bài ở trên, các câu sai sẽ tự động vào sổ tay lỗi sai.', en:'No data yet — submit above and your wrong answers will be added to the mistake notebook automatically.'},
    playedOnceReal:{ja:' は1/1回再生済みです（本番モード）。', vi:' đã phát 1/1 lần (chế độ thi thật).', en:' has been played 1/1 times (real-exam mode).'},
    thisAudioPlayedOnce:{ja:'この音声は1/1回再生済みです（本番モード）。', vi:'Audio này đã phát 1/1 lần (chế độ thi thật).', en:'This audio has been played 1/1 times (real-exam mode).'},
    playingNow:    {ja:' を再生中 — このボタンを押すと停止し、代わりにこの音声を再生します。', vi:' đang phát — bấm nút này sẽ dừng nó và phát audio này thay thế.', en:' is playing — pressing this button stops it and plays this audio instead.'},
    playingNowSeg: {ja:' を再生中 — このボタンを押すと停止し、代わりに音声 ', vi:' đang phát — bấm nút này sẽ dừng nó và phát audio ', en:' is playing — pressing this button stops it and plays audio '},
    playedTimes:   {ja:'再生済み ', vi:'Đã phát ', en:'Played '},
    timesSuffix:   {ja:' 回', vi:' lần', en:' times'},
    replaySuffix:  {ja:' — 聞き直しできます。', vi:' — có thể nghe lại.', en:' — you can replay it.'},
    notPlayedQ:    {ja:'未再生 — 押してこの問題の音声を聞きましょう。', vi:'Chưa phát — bấm để nghe audio của câu này.', en:'Not played yet — press to hear this question\'s audio.'},
    playingQAudio: {ja:' の音声を再生中…', vi:' — đang phát audio…', en:' audio is playing…'},
    audioBlocked:  {ja:'ブラウザが音声の再生をブロックしました — もう一度再生ボタンを押してください。', vi:'Trình duyệt đã chặn phát audio — hãy bấm nút phát lại lần nữa.', en:'The browser blocked audio playback — press the play button again.'},
    audioLoadFail: {ja:'音声ファイルを読み込めませんでした — ネットワーク接続を確認して、もう一度再生してください。', vi:'Không tải được file audio — kiểm tra kết nối mạng và phát lại.', en:'Could not load the audio file — check your network connection and play again.'},
    audioNotReady: {ja:'音声がまだ再生できません — もう一度再生ボタンを押してください。', vi:'Audio chưa sẵn sàng — hãy bấm nút phát lại.', en:'Audio is not ready yet — press the play button again.'},
    audioSlowNet:  {ja:'… ネットワークが少し遅いです。もう少しお待ちください。', vi:'… mạng hơi chậm. Vui lòng đợi thêm một chút.', en:'… the network is a bit slow. Please wait a little longer.'},
    audioRetry:    {ja:'最初の再生が止まりました — 自動でもう一度再生を試みています…', vi:'Lần phát đầu bị dừng — đang tự động thử phát lại…', en:'The first playback stopped — retrying automatically…'},
    resultWord:    {ja:'結果 ', vi:'Kết quả ', en:'Result '},
    allAnsweredHead:{ja:'すべて回答しました', vi:'Đã trả lời tất cả', en:'All answered'},
    submitTail:    {ja:' — 「提出」を押して採点しましょう。', vi:' — bấm "Nộp bài" để chấm điểm.', en:' — press "Submit" to grade.'},
    remainingNote: {ja:' — あと ', vi:' — còn ', en:' — '},
    modalAllAnswered:{ja:'全問回答しました：', vi:'Đã trả lời tất cả: ', en:'All answered: '},
    modalAllTail:  {ja:' 問。提出して答えと解説を見ますか？', vi:' câu. Nộp bài để xem đáp án và giải thích?', en:' questions. Submit to see the answers and explanations?'},
    modalPartialHead:{ja:'回答済みはまだ ', vi:'Mới trả lời ', en:'Only '},
    modalPartialMid:{ja:' 問だけです。未回答の問題：', vi:' câu. Các câu chưa trả lời: ', en:' questions answered so far. Unanswered: '},
    modalPartialTail:{ja:'。今提出すると空欄は不正解になります — それでも提出しますか？', vi:'. Nộp bây giờ thì câu để trống sẽ bị tính sai — vẫn nộp chứ?', en:'. Submitting now counts blanks as wrong — submit anyway?'},
    notPlayedSeg:  {ja:'未再生 — 押して音声 ', vi:'Chưa phát — bấm để nghe audio ', en:'Not played — press to hear audio '},
    remainingTime: {ja:'残り時間', vi:'Thời gian còn lại', en:'Time remaining'},
    startGuide:    {ja:'受験の案内 — 開始を押す前に読んでください', vi:'Hướng dẫn làm bài — hãy đọc trước khi bấm Bắt đầu', en:'Exam instructions — please read before pressing Start'},
    pageLoading:   {ja:'ページを読み込み中…', vi:'Đang tải trang…', en:'Loading the page…'},
    formatLabel:   {ja:'形式', vi:'Định dạng', en:'Format'},
    kbdHint:       {ja:'ショートカット：<kbd>A</kbd> <kbd>B</kbd> <kbd>C</kbd> <kbd>D</kbd> で答えを選択 · <kbd>←</kbd> <kbd>→</kbd> で問題を移動', vi:'Phím tắt: <kbd>A</kbd> <kbd>B</kbd> <kbd>C</kbd> <kbd>D</kbd> chọn đáp án · <kbd>←</kbd> <kbd>→</kbd> chuyển câu', en:'Shortcuts: <kbd>A</kbd> <kbd>B</kbd> <kbd>C</kbd> <kbd>D</kbd> select an answer · <kbd>←</kbd> <kbd>→</kbd> move between questions'},
    resultDetailNote:{ja:'各問題の詳細（解説付き）とミスノートはすぐ下にあります。', vi:'Chi tiết từng câu (kèm giải thích) và sổ tay lỗi sai ở ngay bên dưới.', en:'Details for each question (with explanations) and the mistake notebook are just below.'},
    mistakeNote:   {ja:'ミスノート', vi:'Sổ tay lỗi sai', en:'Mistake notebook'},
    mistakeNoteSub:{ja:'提出後、間違えた問題がここに自動で一覧表示されます。', vi:'Sau khi nộp bài, các câu sai sẽ tự động hiện ở đây.', en:'After you submit, your wrong answers will be listed here automatically.'},
    logColTrap:    {ja:'注意点の種類', vi:'Loại điểm cần lưu ý', en:'Type of pitfall'},
    logColPoint:   {ja:'覚えるポイント', vi:'Điểm cần nhớ', en:'What to remember'},
    submitConfirm: {ja:'提出しますか？', vi:'Nộp bài chứ?', en:'Submit your answers?'},
    continueBtn:   {ja:'続ける', vi:'Làm tiếp', en:'Continue'},
    yourAnswer:    {ja:'あなたの答え：', vi:'Bạn trả lời: ', en:'Your answer: '},
    audioSuffix:   {ja:' の音声', vi:' — audio', en:' audio'},
    loadingLabel:  {ja:'読み込み中：', vi:'Đang tải: ', en:'Loading: '},
    verdictOkFull: {ja:'✓ 正解です。', vi:'✓ Đúng rồi.', en:'✓ Correct.'},
    verdictBadFull:{ja:'✗ 不正解です。', vi:'✗ Chưa đúng.', en:'✗ Incorrect.'},
    correctAnswerIsThe:{ja:' 正しい答えは ', vi:' Đáp án đúng là ', en:' The correct answer is '},
    flagMarkQ:     {ja:'⚑ この問題に印を付ける', vi:'⚑ Đánh dấu câu này', en:'⚑ Mark this question'},
    flagMarkOn:    {ja:'⚑ 印付き — 押して外す', vi:'⚑ Đã đánh dấu — bấm để bỏ', en:'⚑ Marked — tap to clear'},
    notSelected:   {ja:'未選択', vi:'Chưa chọn', en:'Not selected'},
    qAnswerAria:   {ja:'問題の答え ', vi:'Đáp án câu ', en:'Answer for question '},
    practiceImage: {ja:'練習問題の絵', vi:'Hình câu luyện tập', en:'Practice question image'},
    /* --- mock engine shared fragments --- */
    setWord:       {ja:'セット', vi:'Phần', en:'Set'},
    partWord:      {ja:'パート', vi:'Phần', en:'Part'},
    sectionWord:   {ja:'部', vi:'Phần', en:'Section'},
    unansweredQs:  {ja:' 問が未選択です。', vi:' câu chưa chọn đáp án.', en:' questions are unanswered.'},
    submitAnywayNote:{ja:'「提出」を押して提出できます（空欄は不正解になります）。', vi:'Có thể bấm "Nộp bài" để nộp (câu để trống sẽ bị tính sai).', en:'You can press "Submit" anyway (blank answers count as wrong).'},
    vietTranslation:{ja:'ベトナム語訳', vi:'Bản dịch tiếng Việt', en:'Vietnamese translation'},
    replaySet:     {ja:'聞き直し：セット ', vi:'Nghe lại: phần ', en:'Replay: set '},
    translationSet:{ja:'翻訳：セット ', vi:'Bản dịch: phần ', en:'Translation: set '},
    scoreLine:     {ja:'全体：正解 ', vi:'Tổng: đúng ', en:'Overall: correct '},
    refLevel:      {ja:'%) · 参考レベル：', vi:'%) · Cấp độ tham khảo: ', en:'%) · Reference level: '},
    estLevel:      {ja:'%）· 目安のレベル：', vi:'%) · Cấp độ ước tính: ', en:'%) · Estimated level: '},
    estNote1:      {ja:'%）。上の /800 のスコアは正答率による推定にすぎません — 実際の試験のスコアは主催者の独自のアルゴリズムで計算され、線形には換算されません。', vi:'%). Điểm /800 ở trên chỉ là ước tính theo tỉ lệ đúng — điểm thi thật được tính bằng thuật toán riêng của đơn vị tổ chức, không quy đổi tuyến tính.', en:'%). The /800 score above is only an estimate from your accuracy — real exam scores use the organizer\'s own algorithm and are not a linear conversion.'},
    estNote2:      {ja:'%）。上の/800の点数は、正答率からの推定換算にすぎません — 本番の点数は主催者の独自の方法で計算され、単純な比例換算ではありません。', vi:'%). Điểm /800 ở trên chỉ là ước tính theo tỉ lệ đúng — điểm thi thật được tính bằng phương pháp riêng của đơn vị tổ chức, không phải quy đổi tỉ lệ đơn giản.', en:'%). The /800 score above is only an estimate from your accuracy — real exam scores use the organizer\'s own method, not a simple proportional conversion.'},
    keepPracticing:{ja:'J3レベル未満 — 練習を続けましょう', vi:'Dưới mức J3 — hãy tiếp tục luyện tập', en:'Below J3 level — keep practicing'},
    submitPartQ:   {ja:'このパートを提出しますか？', vi:'Nộp phần này chứ?', en:'Submit this part?'},
    submitPartNote:{ja:'このパートを提出すると、パートはロックされ、次のパートへ進みます — 戻ることはできません。', vi:'Nộp phần này sẽ khóa phần và chuyển sang phần tiếp theo — không quay lại được.', en:'Submitting locks this part and moves on to the next part — you cannot go back.'},
    submitSectionQ:{ja:'この部を提出しますか？', vi:'Nộp phần này chứ?', en:'Submit this section?'},
    submitSectionNote:{ja:'この部を提出すると部がロックされ、次の部へ進みます — 戻ることはできません。', vi:'Nộp phần này sẽ khóa phần và chuyển sang phần tiếp theo — không quay lại được.', en:'Submitting locks this section and moves on to the next section — you cannot go back.'},
    submitPartBtn: {ja:'パートを提出', vi:'Nộp phần', en:'Submit part'},
    submitSectionBtn:{ja:'部を提出する', vi:'Nộp phần', en:'Submit section'},
    keepSolving:   {ja:'続けて解く', vi:'Làm tiếp', en:'Keep working'},
    guideAboutH:   {ja:'BJTビジネス日本語能力テストとは', vi:'Bài kiểm tra năng lực tiếng Nhật thương mại BJT là gì', en:'What is the BJT Business Japanese Proficiency Test'},
    guideScoreH:   {ja:'スコアとレベルの目安', vi:'Điểm số và các cấp độ', en:'Scores and level guide'},
    resultNoteMk:  {ja:'答え、ベトナム語の解説、トランスクリプト、各文の翻訳はすぐ下にあります。', vi:'Đáp án, giải thích, transcript và bản dịch từng câu ở ngay bên dưới.', en:'Answers, explanations, transcripts and sentence-by-sentence translations are just below.'},
    resultNoteAlt: {ja:'答え、解説、トランスクリプトと各問題の訳はすぐ下にあります。', vi:'Đáp án, giải thích, transcript và bản dịch từng câu ở ngay bên dưới.', en:'Answers, explanations, transcripts and translations for each question are just below.'},
    videoLibSub:   {ja:'オフィスの状況ビデオ63本、テーマ別に分類。再生を押してページ内ですぐ見られます。ボタンを押すと <strong>拡大</strong> プレーヤーのすぐ下にあり、ページ内で画面いっぱいに大きく見られます — 各ビデオには3言語（日本語 – ベトナム語 – 英語）のセリフと、プレーヤーの下の展開部分に単語表が付いています。', vi:'63 video tình huống văn phòng, phân loại theo chủ đề. Bấm phát để xem ngay trong trang. Nút <strong>Phóng to</strong> nằm ngay dưới trình phát, giúp xem lớn trong trang — mỗi video có lời thoại 3 ngôn ngữ (Nhật – Việt – Anh) và bảng từ vựng ở phần mở rộng bên dưới trình phát.', en:'63 office situation videos, grouped by theme. Press play to watch right on the page. The <strong>Expand</strong> button sits just below the player for a large in-page view — every video has dialogue in 3 languages (Japanese – Vietnamese – English) and a vocabulary table in the expandable section below the player.'},
    vocabSub:      {ja:'すべて <strong>884語</strong> BJT単語リストのうち、日々の学習進度どおりに分けられています · 学習済み： <strong>131語</strong> （第11回–第17回）· 「これから学ぶ」グループは1日24語のペースで続きます。下の行から日を選んでその日のカードを見ましょう — カードをクリックするとめくれて、読み方、ベトナム語の意味、一緒に使う表現が見られます。', vi:'Toàn bộ <strong>884 từ</strong> trong danh sách từ vựng BJT, chia theo tiến độ học hằng ngày · Đã học: <strong>131 từ</strong> (Ngày 11–17) · Nhóm "sắp học" tiếp tục với nhịp 24 từ/ngày. Chọn một ngày ở hàng dưới để xem thẻ của ngày đó — bấm vào thẻ để lật xem cách đọc, nghĩa tiếng Việt và cụm từ thường đi kèm.', en:'All <strong>884 words</strong> of the BJT word list, divided by daily study progress · Learned: <strong>131 words</strong> (Days 11–17) · The "upcoming" groups continue at 24 words per day. Pick a day below to see its cards — click a card to flip it for the reading, the Vietnamese meaning and common collocations.'},
    videoLibNote:  {ja:'BJT状況ビデオ — 日本語・ベトナム語・英語の3言語字幕がビデオに埋め込まれています。', vi:'Video tình huống BJT — phụ đề 3 ngôn ngữ Nhật・Việt・Anh được gắn sẵn trong video.', en:'BJT situation videos — subtitles in Japanese, Vietnamese and English are embedded in the videos.'},
    vocabNote:     {ja:'BJT単語カード — 元の884語リストに基づくベトナム語の意味。一緒に使う表現は、仕事の文体での典型的な使い方です。', vi:'Thẻ từ vựng BJT — nghĩa tiếng Việt dựa trên danh sách 884 từ gốc. Các cụm từ đi kèm là cách dùng điển hình trong văn phong công việc.', en:'BJT vocab cards — Vietnamese meanings based on the original 884-word list. Collocations show typical usage in business style.'},
    /* --- video library / vocab --- */
    videoLibTitle: {ja:'BJT状況ビデオライブラリ', vi:'Thư viện video tình huống BJT', en:'BJT situation video library'},
    vocabTitle:    {ja:'単語カード — BJT 884語リスト', vi:'Thẻ từ vựng — Danh sách 884 từ BJT', en:'Vocab cards — BJT 884-word list'},
    allFilter:     {ja:'すべて', vi:'Tất cả', en:'All'},
    expandWord:    {ja:'拡大', vi:'Phóng to', en:'Expand'},
    learnedWord:   {ja:'学習済み', vi:'Đã học', en:'Learned'}
  };

  function t(key){
    var e = DICT[key];
    if(!e) return key;
    return e[lang] || e.en || e.ja || key;
  }
  window.t = t;
  window.BJT_DICT = DICT;

  /* Explanation picker: selected -> English -> Vietnamese (never empty). */
  window.pickExpl = function(obj){
    if(!obj) return '';
    if(lang === 'ja') return obj.explain_ja || obj.explain_en || obj.explain || '';
    if(lang === 'en') return obj.explain_en || obj.explain || '';
    return obj.explain || obj.explain_en || '';
  };

  /* Registry so already-rendered explanations re-render live on language switch. */
  var registry = [];
  window.regExpl = function(obj){
    registry.push(obj);
    return registry.length - 1;
  };
  function refreshExplanations(){
    var nodes = document.querySelectorAll('[data-expl-idx]');
    for(var i=0;i<nodes.length;i++){
      var obj = registry[+nodes[i].getAttribute('data-expl-idx')];
      if(obj) nodes[i].textContent = window.pickExpl(obj);
    }
  }

  /* Translation picker for segment/group/practice transcript translations.
     Those data objects carry vi/en/ja line arrays side by side; fallback
     mirrors pickExpl: selected -> English -> Vietnamese (never empty). */
  window.pickTr = function(obj){
    if(!obj) return null;
    if(lang === 'ja') return obj.ja || obj.en || obj.vi || null;
    if(lang === 'en') return obj.en || obj.vi || null;
    return obj.vi || obj.en || null;
  };
  /* Field-based variant for objects that store translations as separate
     <base>Vi/<base>En/<base>Ja fields (e.g. transcriptVi on the demo exam). */
  window.pickTrField = function(obj, base){
    if(!obj) return null;
    if(lang === 'ja') return obj[base + 'Ja'] || obj[base + 'En'] || obj[base + 'Vi'] || null;
    if(lang === 'en') return obj[base + 'En'] || obj[base + 'Vi'] || null;
    return obj[base + 'Vi'] || obj[base + 'En'] || null;
  };

  /* Registry so already-rendered translation blocks re-render live on
     language switch, mirroring regExpl. Entry: {obj, base|null, label}. */
  var trRegistry = [];
  window.regTr = function(entry){
    trRegistry.push(entry);
    return trRegistry.length - 1;
  };
  function refreshTranslations(){
    var nodes = document.querySelectorAll('[data-tr-idx]');
    for(var i=0;i<nodes.length;i++){
      var e = trRegistry[+nodes[i].getAttribute('data-tr-idx')];
      if(!e) continue;
      var lines = e.base ? window.pickTrField(e.obj, e.base) : window.pickTr(e.obj);
      if(!lines) continue;
      nodes[i].innerHTML = '<strong>' + e.label + ':</strong>\n' + lines.join('\n');
    }
  }

  function applyI18n(){
    document.documentElement.lang = (lang === 'ja' ? 'ja' : (lang === 'vi' ? 'vi' : 'en'));
    var nodes = document.querySelectorAll('[data-i18n]');
    for(var i=0;i<nodes.length;i++){
      var key = nodes[i].getAttribute('data-i18n');
      if(DICT[key]) nodes[i].textContent = t(key);
    }
    var hnodes = document.querySelectorAll('[data-i18n-html]');
    for(var j=0;j<hnodes.length;j++){
      var hk = hnodes[j].getAttribute('data-i18n-html');
      if(DICT[hk]) hnodes[j].innerHTML = t(hk);
    }
    var sel = document.getElementById('langSelect');
    if(sel) sel.value = lang;
    refreshExplanations();
    refreshTranslations();
  }
  window.applyI18n = applyI18n;

  window.setUILang = function(v){
    if(SUPPORTED.indexOf(v) < 0) return;
    lang = v;
    window.BJT_LANG = v;
    try { localStorage.setItem('bjtLang', v); } catch(e){}
    applyI18n();
    /* Engines render most dynamic strings at interaction time using t();
       re-run the static pass again after a tick for late-built DOM. */
    setTimeout(applyI18n, 50);
  };

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', applyI18n);
  } else {
    applyI18n();
  }
})();
