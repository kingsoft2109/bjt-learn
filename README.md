# Cập nhật trang luyện thi BJT lên GitHub Pages — bản 17/11/2026 (đủ 49 video)

Gói này cập nhật repo **kingsoft2109/bjt-learn** lên bản mới nhất đang chạy trong app Muse.
Các gói cũ (09/11, 11/11 bản 31 và 32 video) đã lạc hậu — **chỉ dùng gói này**.

## Bản này có gì

- Đề mặc định: **Ngày 21 — Luyện đọc hiểu （読解） · 12 câu**
- Ô chọn đề: **25 mục** — Ngày 1–21, Đề thi thử BJT 01, Đề mẫu 01, Thư viện video, Thẻ từ vựng
- Mục **Thẻ từ vựng**: đủ 884 từ chia theo ngày học
- Thư viện video: **49 video** (mới nhất: #49 許可しない, file `assets/video-kyoka-shinai.mp4`)
  - Video #47 本人にかわって応対する trong gói là **bản sửa sua-loi-2** (file giữ tên
    `assets/video-honnin-ni-kawatte-outai.mp4` nhưng nội dung là bản sửa mới nhất, MD5 đã đối chiếu)
  - Video #48 相手の声や名前がはっきりしない trong gói là **bản sửa sua-loi** (tên file gốc, nội dung bản sửa)
- `assets/`: **112 file = 63 MP3 bài nghe + 49 MP4 video** (chỉ gồm file trang đang dùng thật;
  4 file video bản gốc đã bị thay bằng bản sửa nên không đưa vào: chikoku bản chưa chia khung,
  kaigi-shitsu-no-yoyaku bản gốc, kyuka-no-hikitsugi bản gốc, shigoto-no-irai bản gốc)
- Tổng dung lượng thư mục sau giải nén: **~525 MB**. File lớn nhất ~14,5 MB (dưới giới hạn 100 MB/file của GitHub).
- `index.html` trong gói khớp byte-for-byte với bản live trong app (MD5 `6cd33a1f910ba9024ddfb53e929ccd51`).

## Cách 1 — Tải các zip nhỏ (khuyên dùng nếu mạng yếu)

1. Tải đủ các file: `thi-bjt-github-phan1-trang-va-mp3.zip` và `thi-bjt-github-phan2-video.zip` … `thi-bjt-github-phan14-video.zip`.
2. Giải nén **tất cả vào cùng một nơi** — mọi file đều tự vào chung một thư mục `thi-bjt-github/`
   (phan 1: trang + MP3; các phan sau: video). Kiểm tra: trong `thi-bjt-github/` có `index.html`,
   và `thi-bjt-github/assets/` có đủ **112 file**.

## Cách 2 — Tải 1 zip đầy đủ

Tải `thi-bjt-github.zip` (~525 MB) và giải nén — được luôn thư mục `thi-bjt-github/` như trên.

## Đẩy lên GitHub (repo đã có sẵn)

Chép **toàn bộ nội dung bên trong** thư mục `thi-bjt-github/` đè vào thư mục repo
`bjt-learn` đã clone trên máy của bạn (giữ nguyên cấu trúc: `index.html` ở gốc repo,
video/MP3 nằm trong `assets/`), rồi:

```bash
cd bjt-learn
git add -A
git commit -m "Cap nhat 17/11/2026: Ngay 21 mac dinh + thu vien 49 video + the tu vung 884"
git push
```

- `git add -A` (có `-A`) để GitHub cũng xoá/cập nhật đúng các file đã thay.
- Đích đúng là repo **kingsoft2109/bjt-learn** — không phải repo `kingsoft2109.github.io`
  (repo đó chỉ giữ file `app-ads.txt`, đừng đụng vào).
- Giữ nguyên file `.nojekyll` ở gốc repo và **không đổi tên** bất kỳ file nào trong `assets/`
  (trang gọi video theo đúng tên file, gồm các file có đuôi `-sua-loi`).

## Kiểm tra sau khi push

Đợi ~1–2 phút rồi mở https://kingsoft2109.github.io/bjt-learn/ và kiểm tra:

- Ô "Chọn đề thi" mặc định hiện **Ngày 21**, danh sách có 25 mục
- Mở Thư viện video: đủ **49 video**; phát thử 許可しない (video mới nhất)
  và 本人にかわって応対する (bản sửa: Yamada báo Tanaka đang外出中 ở câu 2)
- Mở mục Thẻ từ vựng: có đủ các nhóm ngày
- Nghe thử 1 đoạn MP3 trong Ngày 20 — tiếng phát bình thường
