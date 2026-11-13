# Good Idea Cargo — sayt redizayni

[goodideacargo.com](https://goodideacargo.com) uchun yangi versiya. Asos: ClickUp'dagi "goodideacargo.com — sayt va dizayn ko'rigi" xulosasi.
Meta (Instagram + Facebook) reklamasi shu saytga bog'liq, shuning uchun sayt yuk jo'natuvchidan so'rov (lead) olishga qurilgan.
Bu alohida repo; asosiy saytga ko'chirish dasturchi bilan kelishiladi.

- Ko'rish havolasi: https://azizbektursunovme.github.io/goodideacargo-redesign/
- Repo: https://github.com/azizbektursunovme/goodideacargo-redesign

## Dizayn yo'nalishi: "Guide sign"

Boshqa sister saytlardan farqli, kreativ yo'nalish: AQSh avtomagistral yo'l belgilari.
- Hero: yo'l ustidagi gantry'ga osilgan katta yashil belgi (I-5 / I-90 belgilari, "Freight to all 48 states"), orqada I-90 Snoqualmie dovonidagi yuk mashinalari.
- Yagona tugma uslubi: sariq "exit only" plastinka. Ikkinchi darajali harakatlar oddiy havola.
- Shrift: Overpass (Highway Gothic'dan kelib chiqqan, OFL), bitta oila, o'zimizda (39 KB).
- Ranglar: belgi yashili `#0B6B3A`, sariq `#FFC72C`, to'q yashil `#0E2A1D`, oq va **aynan 4 ta kulrang**. Bitta radius: 6px. Soya yo'q.
- Qadamlar raqamlari mile-marker (yashil ustuncha) ko'rinishida; sahifa sarlavhalari yashil belgi plastinkasida.
- Suratlar: Vashington shtati yo'llari (Snoqualmie Pass, North Bend, Rainier), vaqtinchalik, mualliflari Terms of Use sahifasi oxirida.
Batafsil: [docs/design-system.md](docs/design-system.md).

## Ishga tushirish

Node.js **22.23.4 yoki undan yangi** kerak (Node 24 LTS tavsiya).

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # dist/ papkaga statik sayt
npm run preview    # build'ni lokal ko'rish
npm run deploy:pages   # preview'ni GitHub Pages'ga (gh-pages branch) joylash
```

Sozlamalar (`.env.example` dan `.env` qiling):

| O'zgaruvchi | Nima uchun |
|---|---|
| `PUBLIC_QUOTE_ENDPOINT` | Narx so'rash formasi (`/quote/`) JSON yuboradigan API (https bo'lishi shart) |
| `PUBLIC_DRIVE_ENDPOINT` | Haydovchi arizasi (`/drive-with-us/#apply`) |
| `PUBLIC_CONTACT_ENDPOINT` | Kontakt formasi (`/contact/`) |
| `PUBLIC_META_PIXEL_ID` | Meta Pixel. Berilsa: PageView, quote yuborilganda `Lead`, ariza `SubmitApplication`, kontakt `Contact` |
| `PUBLIC_FB_DOMAIN_VERIFICATION` | Meta domen tasdiqlash meta-tegi |
| `PUBLIC_CANONICAL_ORIGIN` | canonical va og:url domeni, standart `https://goodideacargo.com` |
| `PUBLIC_NOINDEX` | `true` bo'lsa sahifalar Google'da indekslanmaydi (preview uchun) |

Endpoint bo'sh bo'lsa forma **preview rejimda**: hech narsa yuborilmaydi va buni ochiq aytadi. Meta voqealari faqat server javobidan keyin yuboriladi.

## Sahifalar

Faqat kerakli 9 sahifa (taskdagi ro'yxat) + 404. URL'lar eski sayt bilan bir xil, reklama va profillardagi havolalar buzilmaydi.

| Sahifa | URL | Holati |
|---|---|---|
| Home | `/` | Tayyor |
| Why Us | `/why-us/` | Tayyor |
| Services | `/service/` | Tayyor (`#full-truckload`, `#expedited`, `#dedicated`) |
| Fleet | `/trucking/` | Tayyor; mashinalar ro'yxati kelguncha zaxira matn |
| Drive with Us | `/drive-with-us/` | Tayyor, API kutilmoqda (forma bitta ustunda) |
| Get a Quote | `/quote/` | Tayyor, API kutilmoqda |
| Contact | `/contact/` | Tayyor, API kutilmoqda |
| Privacy Policy | `/privacy-policy/` | To'liq matn (Meta lead formasi uchun), yurist ko'rishi tavsiya |
| Terms of Use | `/terms-of-use/` | To'liq matn + SMS shartlari + surat mualliflari |

Do'kondan qolgan `/warranty`, `/return`, `/details`, `/help` yo'q. Serverda ular uchun 301 → `/` qilish tavsiya.

## Taskdagi talablar qanday bajarildi

| Talab | Yangi versiyada |
|---|---|
| Bitta dizayn tizimi: 3–4 kulrang, bitta tugma, bitta radius | 4 kulrang (avtomatik tekshirildi), bitta tugma (sariq plastinka), bitta radius 6px |
| Haqiqiy rasmlar, ishlaydigan logotip | Logotip: `brand/logo.png` + favicon + og-image (Overpass'da yangi plastinka, vaqtincha). Suratlar vaqtinchalik; haqiqiylari kerak |
| Bloklar hech qachon bo'sh emas | API'ga bog'liq "Loading..." bloklar yo'q; ma'lumot bo'lmasa blok yashiriladi yoki zaxira matn chiqadi |
| "LIVE METRICS" o'rniga ishonch bloki | "Who you are booking with": yuridik nom, manzil (xarita), telefon, ish vaqti; USDOT/MC va sharhlar kelsa o'zi chiqadi |
| Telefonda header to'liq ko'rinadi, Drive formasi bitta ustun, tugma 44px, input 16px | Header doim ko'rinadi (scroll'da ham), Drive formasi hamma ekranda bitta ustun, tugmalar 44px+, input 17px |
| Faqat kerakli sahifalar | 9 sahifa + 404 |
| Privacy va Terms to'liq matn | Ikkalasi to'liq; Meta Pixel, lead formalar, SMS (STOP/HELP) yozilgan |
| Ijtimoiy havolalar kompaniyaga, manzil xaritaga | Umumiy instagram.com / facebook.com havolalari olib tashlandi (haqiqiylari kelguncha yashirin); manzil Google Maps'ga |
| Bitta email, bir xil telefon formati, Pacific vaqt, © joriy yil | `info@goodideacargo.com`; hamma joyda `tel:+12067044444`; Mon–Fri 5 AM – 5 PM PT; © yil avtomatik |
| Ism maydonlari bo'sh joy va chiziqchani qabul qiladi | "Mary-Jane O'Neil Smith", "José De-La Cruz" sinab ko'rildi |
| Forma holatlari, "yuborildi" faqat server javobidan keyin | Yuborilmoqda / xato / yuborildi (2xx javobdan keyin). Ko'rish: `?state=error`, `?state=sending` |

## Tezlik

GitHub Pages preview, PageSpeed Insights (bosh sahifa, 2026-11-13): telefonda 99 (LCP 1.4 s, TBT 0 ms, CLS 0), kompyuterda 100. Hozirgi sayt: telefonda 73.
SEO 66 faqat preview'dagi noindex sababli; asosiy domenda `PUBLIC_NOINDEX` bo'sh qoldiriladi.
Lighthouse 13.6 (lokal build, 8 sahifa): telefonda 99–100; Accessibility, Best Practices, SEO 100.

## Ma'lumotlarni o'zgartirish

Hamma kompaniya ma'lumoti `src/data/site.ts` da: telefon, email, manzil, ish vaqti, USDOT/MC, ijtimoiy havolalar, sharhlar, xizmatlar, mashinalar ro'yxati. `PENDING` deb belgilanganlar rahbardan keladi.
Haqiqiy suratlar: `public/photos/` dagi bir xil nomli WebP fayllarni almashtiring va `src/data/credits.ts` dan o'chiring.

## Forma API (dasturchi uchun)

Hamma formalar `POST`, JSON, `Content-Type: application/json`. 2xx javob = yuborildi; boshqasi yoki 15 soniyada javob yo'q = xato. Har payload'da `source`, `page`, `submittedAt`.

- Quote: `pickup, delivery, pickupDate, service, freightType, weightLbs, notes, name, company, email, phone, smsConsent`
- Drive: `name, email, phone, role, cdl, experience, message, smsConsent`
- Contact: `firstName, lastName, email, phone, company, message`

API boshqa domenda bo'lsa, CORS'da sayt domenini ruxsat eting.
