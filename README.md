# 📚 Belajar Yoek — Website Pembelajaran Online

Website pembelajaran lengkap dengan Admin Panel, siap deploy ke GitHub + Netlify.

---

## 🚀 Cara Deploy ke Netlify

### 1. Upload ke GitHub
1. Buat repository baru di [github.com](https://github.com)
2. Upload semua file ini ke repository tersebut

### 2. Deploy ke Netlify
1. Login ke [netlify.com](https://netlify.com)
2. Klik **"Add new site" → "Import an existing project"**
3. Pilih **GitHub** dan pilih repository Anda
4. Klik **Deploy Site**
5. Selesai! Website Anda langsung live 🎉

---

## 📁 Struktur File

```
belajar-yoek/
├── index.html      → Halaman utama website publik
├── admin.html      → Panel admin (login diperlukan)
├── data.js         → Data default konten
├── netlify.toml    → Konfigurasi Netlify
└── README.md       → Panduan ini
```

---

## 🔐 Admin Panel

- Akses: `yoursite.netlify.app/admin`
- Password default: **`admin123`**
- Ganti password di: Admin → Pengaturan (fitur coming soon, atau edit di `admin.html` baris `const ADMIN_PASS_KEY`)

### Fitur Admin Panel:
- ✅ **Dashboard** — statistik konten
- ✅ **Kelola Menu** — tambah/edit/hapus menu & submenu berjenjang
- ✅ **Kelola Artikel** — tulis artikel dengan editor HTML + preview
- ✅ **Pengaturan Situs** — ubah nama, warna, hero text, footer
- ✅ **Backup & Restore** — export/import data JSON

---

## ⚠️ Catatan Penting

Data disimpan di **localStorage browser**. Artinya:
- Data hanya tersimpan di browser Anda saat mengedit via admin
- Untuk membuat data permanen, gunakan fitur **Export Backup**, lalu salin isi JSON ke `data.js` sebagai nilai `DEFAULT_DATA`
- Pengunjung website melihat data dari `data.js` (data default)

---

## 🎨 Kustomisasi

Edit `data.js` untuk mengubah konten default yang dilihat semua pengunjung baru.

---

Made with ❤️ — Belajar Yoek
