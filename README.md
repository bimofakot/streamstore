<div align="center">

# 🎬 StreamStore — Demo Landing Page Akun Netflix Premium

### Contoh landing page statis untuk jualan akun Netflix Premium 4K UHD.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Glossary/HTML5)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![FontAwesome](https://img.shields.io/badge/FontAwesome-528DD7?logo=fontawesome&logoColor=white)](https://fontawesome.com/)
[![Firebase Hosting](https://img.shields.io/badge/Firebase_Hosting-FFCA28?logo=firebase&logoColor=black)](https://firebase.google.com/products/hosting)
[![SSL Secured](https://img.shields.io/badge/SSL-Secured-success?logo=letsencrypt&logoColor=white)](https://netflix.massbim.my.id)
[![Live Demo](https://img.shields.io/badge/Demo-Live-E50914?logo=googlechrome&logoColor=white)](https://netflix.massbim.my.id)

</div>

---

## 📖 Tentang Project

**StreamStore** adalah demo landing page statis bertema Netflix (hitam, abu-abu gelap, dan merah `#E50914`). Halaman menampilkan hero, katalog paket, keunggulan layanan, testimoni contoh, FAQ, dan tombol pesanan.

Demo ini **belum terhubung ke toko mana pun**:

- Semua tombol WhatsApp dan Shopee memakai `href="#"`.
- Angka pelanggan, rating, stok, dan testimoni adalah contoh, bukan data nyata.
- Tidak ada checkout, pembayaran, atau data pesanan.

Gunakan halaman ini sebagai titik awal, lalu ganti tautan dan data contoh sebelum dipakai berjualan.

> 🔗 **Demo Live:** <https://netflix.massbim.my.id>

---

## ✨ Fitur Utama

| Fitur | Deskripsi |
| --- | --- |
| 🦸 **Hero Section** | Judul, deskripsi penawaran, dua CTA, dan statistik contoh. |
| 📦 **Katalog Paket** | Tiga kartu paket contoh dengan rincian fitur dan harga. |
| 💬 **Tombol Pesanan** | Tombol WhatsApp dan Shopee contoh; tautan diisi manual di `index.html`. |
| 🛡️ **Keunggulan Layanan** | Section USP: garansi, proses cepat, dan CS responsif. |
| ⭐ **Testimoni Contoh** | Enam kartu testimoni contoh dengan rating bintang. |
| ❓ **FAQ Accordion** | 4 langkah cara order + 5 pertanyaan interaktif yang bisa diklik. |
| 📱 **Fully Responsive** | Tampil optimal di mobile maupun desktop, dengan menu hamburger & layout adaptif. |
| 🎨 **Animasi Halus** | Scroll-reveal, hover effect, floating WhatsApp button, dan navbar dinamis. |

---

## 🛠️ Tech Stack

- **HTML5** — markup halaman tunggal di `index.html`.
- **Tailwind CSS 3.4** — kelas utilitas dikompilasi menjadi `styles.css` statis; tidak memakai Play CDN.
- **CSS kustom** — ditulis di `styles.src.css` setelah direktif `@tailwind`.
- **JavaScript vanilla** — perilaku halaman di `app.js`.
- **FontAwesome 6** dan **Google Fonts (Poppins)** — dimuat dari CDN.
- **Firebase Hosting** — hosting statis dan SSL.

Repo ini tidak memakai `package.json`, `node_modules`, atau langkah build di CI. Tailwind CLI hanya dipakai saat mengubah CSS.

---

## 🚀 Panduan Penggunaan & Konfigurasi

### 1. Menjalankan Secara Lokal

Karena project ini statis, cukup buka `index.html` langsung di browser. Atau jalankan server lokal sederhana:

```bash
# Opsi A: Python
python -m http.server 5500

# Opsi B: Live Server (ekstensi VS Code)
# Klik kanan index.html → "Open with Live Server"
```

Lalu buka <http://localhost:5500> di browser.

### 2. Mengganti Tautan WhatsApp dan Shopee

Semua tombol pesanan masih memakai `href="#"`. Tidak ada objek `CONFIG`; ubah `href` langsung di `index.html` pada:

- `#waHeroBtn` di hero;
- dua tombol di setiap kartu paket (WhatsApp dan Shopee);
- `#waCtaBtn` di CTA bawah;
- tombol WhatsApp dan Shopee di footer;
- `#waFloatBtn` di tombol mengambang.

Contoh:

```html
<a id="waHeroBtn" href="https://wa.me/6281234567890?text=Halo%2C%20saya%20mau%20tanya%20paket%20Netflix">
```

Ganti juga angka contoh dan teks testimoni di `index.html` agar sesuai toko Anda.

### 3. Regenerasi CSS Statis

Jalankan perintah ini setiap kali kelas Tailwind di `index.html` atau `app.js` berubah:

```bash
npx -y tailwindcss@3.4.14 -c tailwind.config.js -i styles.src.css -o styles.css --minify
```

Commit `styles.css` hasilnya. `content` di `tailwind.config.js` memindai `index.html` dan `app.js` karena beberapa kelas hanya ditambahkan saat runtime.

### 4. Deploy ke Firebase Hosting

**Prasyarat:** pasang Firebase CLI terlebih dahulu jika belum.

```bash
# Install Firebase CLI (sekali saja)
npm install -g firebase-tools

# Login ke akun Firebase Anda
firebase login

# Deploy ulang ke Firebase Hosting
firebase deploy --only hosting
```

Konfigurasi hosting sudah tersedia di file `firebase.json` dengan direktori publik `"./"` (root project tempat `index.html` berada). Setelah deploy selesai, Firebase akan memberikan URL `*.web.app` dan `*.firebaseapp.com` yang aktif.

> 💡 Custom domain `netflix.massbim.my.id` cukup dikonfigurasi sekali di console Firebase → Hosting → Add custom domain. Perubahan konten tinggal `firebase deploy` ulang.

---

## 📁 Struktur Project

```
.
├── index.html          # Markup halaman
├── app.js              # Tahun footer, menu mobile, FAQ, reveal
├── tailwind.config.js  # Tema dan pemindaian kelas
├── styles.src.css      # Sumber CSS: @tailwind + gaya kustom
├── styles.css          # Hasil build Tailwind, ikut di-commit
├── firebase.json       # Konfigurasi Firebase Hosting (public: "./")
└── README.md
```

---

## ⚠️ Batasan Demo

- Tombol pesanan tidak mengarah ke WhatsApp atau Shopee sampai `href` diubah.
- Statistik, stok, dan testimoni hanya contoh.
- Tidak ada backend, checkout, atau penyimpanan data pembeli.
- Halaman ini tidak berafiliasi resmi dengan Netflix, Inc.

---

## 👤 Author

Dibuat dan dikembangkan oleh:

**Bimo Praharbiyanto**
🔗 GitHub: [https://github.com/bimofakot](https://github.com/bimofakot)

---

## 📄 Lisensi

Project ini dilisensikan di bawah **MIT License**.

```
MIT License

Copyright (c) 2026 Bimo Praharbiyanto

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

<div align="center">

<sub>🎬 StreamStore — Dibuat dengan Tailwind CSS & Firebase Hosting.</sub><br>
<sub>Toko ini tidak berafiliasi resmi dengan Netflix, Inc.</sub>

</div>
