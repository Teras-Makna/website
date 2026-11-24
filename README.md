# Teras Makna (`terasmakna.id`)

> *"Ruang temu lintas generasi, ilmu, dan karya untuk merawat kesadaran hidup."*

Website landing page statis **Teras Makna** dibangun dengan **Next.js (App Router, Static Export)**, **Tailwind CSS v4**, **Framer Motion**, serta visualisasi **3D Torus Knot Canvas 2D**, **Graf Jejaring Makna Interaktif**, dan **Geometri Sakral SVG**.

## Pengembangan Lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:3000` di browser.

## Konfigurasi Tautan Komunitas & Waitlist

Semua konten utama, tautan WhatsApp/Instagram/Email, dan endpoint waitlist terpusat di:
- `src/config/site.ts`

Untuk mengaktifkan pengiriman form waitlist secara nyata (misal lewat Formspree), isi field `waitlistEndpoint` di `src/config/site.ts`.

## Deployment ke GitHub Pages (`terasmakna.id`)

Proyek ini sudah dikonfigurasi dengan:
- `next.config.ts` → `output: "export"` dan `images: { unoptimized: true }`
- `public/CNAME` → `terasmakna.id`
- `public/.nojekyll` → memastikan folder `_next/` disajikan dengan benar
- `.github/workflows/deploy.yml` → build dan deploy otomatis setiap push ke branch `main`

### Langkah di Repository GitHub:
1. Buka **Settings → Pages**.
2. Pada **Build and deployment → Source**, pilih **GitHub Actions**.
3. Pastikan DNS domain `terasmakna.id` mengarah ke GitHub Pages (`A` records ke IP GitHub Pages atau `CNAME` untuk `www`), lalu aktifkan **Enforce HTTPS**.
