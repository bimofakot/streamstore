<div align="center">

# 🎬 StreamStore — Landing Page Akun Netflix Premium

### Jualan akun Netflix Premium 4K UHD dengan landing page yang cepat, modern, dan terpercaya.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Glossary/HTML5)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![FontAwesome](https://img.shields.io/badge/FontAwesome-528DD7?logo=fontawesome&logoColor=white)](https://fontawesome.com/)
[![Firebase Hosting](https://img.shields.io/badge/Firebase_Hosting-FFCA28?logo=firebase&logoColor=black)](https://firebase.google.com/products/hosting)
[![SSL Secured](https://img.shields.io/badge/SSL-Secured-success?logo=letsencrypt&logoColor=white)](https://netflix.massbim.my.id)
[![Live Demo](https://img.shields.io/badge/Demo-Live-E50914?logo=googlechrome&logoColor=white)](https://netflix.massbim.my.id)

</div>

---

## 📖 Tentang Project

**StreamStore** adalah landing page statis yang dirancang khusus untuk berjualan akun **Netflix Premium 4K UHD** secara online. Dibangun dengan satu file `index.html` agar ringan, cepat, dan mudah di-deploy. Halaman ini menghadirkan tampilan bertema khas Netflix (hitam, abu-abu gelap, dan merah `#E50914`) yang bersih, modern, dan menimbulkan rasa percaya bagi calon pembeli.

Pembeli dapat langsung memesan via **WhatsApp** (dengan pesan otomatis sesuai paket) atau melalui **Shopee**, sehingga proses konversi jadi lebih cepat tanpa perlu aplikasi tambahan.

> 🔗 **Demo Live:** <https://netflix.massbim.my.id>

---

## ✨ Fitur Utama

| Fitur | Deskripsi |
| --- | --- |
| 🦸 **Hero Section** | Judul menarik, deskripsi penawaran, dan dua CTA utama ("Lihat Paket" & "Tanya via WA") lengkap dengan statistik kepercayaan. |
| 📦 **Katalog Paket** | 3 kartu paket: **Shared 1 Bulan** (Rp 35.000), **Private 1 Bulan** (Rp 150.000 — *Best Seller*), dan **Shared 3 Bulan** (Rp 95.000), masing-masing dengan rincian fitur & harga. |
| 💬 **Direct Order Integration** | Tombol "Pesan via WhatsApp" yang otomatis mengisi pesan sesuai paket, dan tombol "Beli via Shopee" yang mengarah ke toko. |
| 🛡️ **Keunggulan Layanan** | Section USP: Garansi Full, Proses Cepat 5 menit, dan CS Fast Response. |
| ⭐ **Testimoni Pelanggan** | 6 kartu testimoni dengan rating bintang 5, avatar inisial, dan badge "Pembeli Terverifikasi". |
| ❓ **FAQ Accordion** | 4 langkah cara order + 5 pertanyaan interaktif yang bisa diklik. |
| 📱 **Fully Responsive** | Tampil optimal di mobile maupun desktop, dengan menu hamburger & layout adaptif. |
| 🎨 **Animasi Halus** | Scroll-reveal, hover effect, floating WhatsApp button, dan navbar dinamis. |

---

## 🛠️ Tech Stack

### Frontend
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)
![FontAwesome](https://img.shields.io/badge/FontAwesome-528DD7?logo=fontawesome&logoColor=white)
![Google Fonts](https://img.shields.io/badge/Google_Fonts-Poppins-4285F4?logo=googlefonts&logoColor=white)

- **HTML5** — struktur semantik halaman tunggal.
- **Tailwind CSS** (via CDN) — utility-first styling dengan konfigurasi warna Netflix inline.
- **FontAwesome 6** — ikon pendukung (WhatsApp, Shopee, bintang, dll).
- **Google Fonts (Poppins)** — tipografi modern dan bersih.

### Deployment & Hosting
![Firebase](https://img.shields.io/badge/Firebase_Hosting-FFCA28?logo=firebase&logoColor=black)
![Domainesia](https://img.shields.io/badge/Domain-Domainesia-1E63D5?logoColor=white)

- **Firebase Hosting** — hosting statis global dengan SSL otomatis & CDN cepat.
- **Domainesia** — custom subdomain `netflix.massbim.my.id` yang terhubung ke Firebase.

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

### 2. Mengganti Nomor WhatsApp & Link Shopee

Buka file `index.html`, lalu cari objek `CONFIG` di bagian `<script>` (sekitar akhir file) dan ubah nilainya:

```js
const CONFIG = {
  // Nomor WhatsApp admin (format internasional tanpa "+" dan tanpa "0" di depan)
  // Contoh: 6281234567890
  whatsappNumber: '6281234567890',

  // Link toko Shopee Anda
  shopeeShopUrl: 'https://shopee.co.id/streamstore',
};
```

> Setelah diubah, semua tombol WhatsApp (hero, tiap paket, CTA banner, footer, dan floating button) serta tombol Shopee akan otomatis mengarah ke link & nomor baru. Tidak perlu mengubah satu per satu.

### 3. Deploy (Ulang) ke Firebase Hosting

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
├── index.html        # Seluruh kode landing page (HTML + Tailwind + JS)
├── firebase.json     # Konfigurasi Firebase Hosting (public: "./")
└── README.md         # Dokumentasi project ini
```

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
