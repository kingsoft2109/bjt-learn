# Trang luyện thi BJT — gói tự host trên GitHub Pages

Bản đóng gói ngày 09/11/2026: đủ 16 đề thi (Ngày 1–14, Đề mẫu 01, Đề thi thử BJT 01),
mặc định mở Ngày 14, thư viện 25 video tình huống. Web tĩnh thuần — không backend,
không database: `index.html` + thư mục `assets/` (MP3 bài nghe + MP4 video).

## Cấu trúc gói

- `index.html` — toàn bộ trang (giao diện, logic, dữ liệu đề và thư viện video)
- `assets/` — 72 file: 47 MP3 bài nghe + 25 MP4 video, trang gọi bằng đường dẫn tương đối
  nên đặt ở thư mục con của domain (dạng `github.io/<repo>/`) vẫn chạy đúng
- `icon.webp` — icon của trang
- `.nojekyll` — file trống, để GitHub Pages bỏ qua Jekyll và phục vụ file nguyên trạng

Tổng dung lượng ~227 MB; file lớn nhất ~14 MB (dưới giới hạn 100 MB/file của GitHub).

## Bước 1 — Tạo repository trên GitHub

1. Vào https://github.com/new
2. Repository name: `thi-bjt` (hoặc tên tùy thích — link web sẽ chứa tên này)
3. Chọn **Public** (GitHub Pages miễn phí yêu cầu repo public)
4. KHÔNG tích "Add a README file" (gói này đã có README), không chọn .gitignore/license
5. Bấm **Create repository**

## Bước 2 — Đẩy gói lên repo

Giải nén gói, mở terminal tại thư mục `thi-bjt-github` (thư mục chứa `index.html`):

```bash
git init
git add .
git commit -m "Trang luyen thi BJT - ban 09/11/2026: Ngay 14 + 25 video"
git branch -M main
git remote add origin https://github.com/<username-cua-ban>/thi-bjt.git
git push -u origin main
```

Lưu ý:

- Thay `<username-cua-ban>` bằng username GitHub của bạn (và `thi-bjt` nếu bạn đặt tên repo khác).
- Lần push đầu ~227 MB, mất vài phút tùy mạng — để máy chạy hết, đừng ngắt giữa chừng.
- GitHub không còn nhận mật khẩu tài khoản khi push qua HTTPS: khi bị hỏi mật khẩu,
  dùng **Personal Access Token** (GitHub → Settings → Developer settings →
  Personal access tokens → Fine-grained tokens, quyền Contents: Read and write cho repo này),
  hoặc đổi remote sang SSH nếu bạn đã có SSH key trên GitHub.

## Bước 3 — Bật GitHub Pages

1. Vào repo → **Settings** → mục **Pages** (cột trái)
2. **Build and deployment → Source**: chọn **Deploy from a branch**
3. **Branch**: chọn `main`, thư mục `/ (root)` → **Save**
4. Đợi 1–2 phút, quay lại mục Pages sẽ hiện link web:
   `https://<username-cua-ban>.github.io/thi-bjt/`

## Bước 4 — Kiểm tra sau khi lên

Mở link Pages và kiểm tra:

- Ô "Chọn đề thi" mặc định là **Ngày 14 — Luyện nghe**, đề đứng đầu danh sách
- Bấm nghe thử một đoạn trong đề — tiếng phát bình thường
- Mở **Thư viện video**, phát thử 1 video; nút phóng to và fullscreen gốc của trình duyệt
  hoạt động bình thường trên GitHub Pages (không còn bị khung iframe của link chia sẻ chặn như trước)

## Cập nhật bản mới sau này

Khi có bản mới (thêm Ngày thi / video mới):

1. Chép đè `index.html` và bổ sung file mới vào `assets/` trong thư mục đã clone
2. Chạy:

```bash
git add .
git commit -m "Cap nhat: <mo ta ngan>"
git push
```

3. GitHub Pages tự cập nhật sau ~1 phút, link giữ nguyên.

## Giới hạn của GitHub Pages cần nhớ

- Mỗi file < 100 MB (gói này đã đạt; video mới cũng nên giữ dưới ~50 MB/file)
- Tổng site nên dưới ~1 GB — hiện 227 MB, còn dư nhiều, nhưng video là phần phình nhanh nhất
- Băng thông mềm ~100 GB/tháng và ~10 lần build/giờ — thừa cho quy mô học viên hiện tại;
  nếu lượng truy cập tăng mạnh sau này, cân nhắc Cloudflare Pages/Netlify (cùng gói này dùng được)
- Repo public nghĩa là ai cũng xem và tải được source — phù hợp vì đây là trang học công khai

## Tên miền riêng (tùy chọn)

Repo → Settings → Pages → **Custom domain**: nhập domain của bạn và trỏ DNS
(bản ghi CNAME `www` → `<username-cua-ban>.github.io`, hoặc bản ghi A cho domain gốc
theo hướng dẫn của GitHub ngay tại đó). HTTPS được cấp tự động.
