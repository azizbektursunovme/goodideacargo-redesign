# Dizayn tizimi — hozirgi sayt ko'rinishi saqlangan

Kod: `src/styles/global.css` (`:root` tokenlari). Rahbar qarori: goodideacargo.com'ning hozirgi ko'rinishi qoladi.
O'zgarganlar faqat: bosh sahifadagi AI rasm o'rniga haqiqiy surat, yangi logotip va ClickUp ko'rigidagi tuzatishlar.
Eski saytning CSS'idan olingan: Poppins shrifti, brend yashili `#047046`, to'q ko'k bo'limlar, suzuvchi header, to'liq ekranli hero, "Get in touch" bloki, footer.

## Ranglar

| Token | Hex | Qayerda |
|---|---|---|
| `--green` | `#047046` | Brend yashili: tugmalar, havolalar, yorliqlar (oq matn 6.2:1) |
| `--green-dark` | `#035a38` | Tugma hover |
| `--green-light` | `#2fb57a` | To'q fonda yashil matn ("Across the USA", raqamlar) |
| `--green-tint` | `#e8f3ee` | Ikonka kvadratlari, chip'lar |
| `--navy` | `#131d2d` | Sarlavhalar va matn |
| `--navy-deep` | `#09111f` | To'q bo'limlar (ishonch bloki, CTA) |
| `--night` | `#00030c` | Footer |
| `--grey-1` | `#f4f7fb` | Och kulrang bo'limlar |
| `--grey-2` | `#e5e9ee` | Chegaralar |
| `--grey-3` | `#8a94a3` | Input chegarasi (oq fonda 3:1) |
| `--grey-4` | `#5f6774` | Ikkinchi darajali matn (5.7:1) |

Kulranglar soni: **4** (task: "ko'pi bilan 3–4"). To'q fonda kulrang o'rniga oq rang shaffofligi ishlatiladi. Xato: `#b42318`.

## Shakl

- **Bitta radius:** 12px (tugmalar, kartalar, inputlar, rasmlar, header).
- **Bitta tugma (minimal):** yashil fon, oq matn, 1px chegara, 500 qalinlik, soyasiz; 46px (katta: 52px) (`.btn`). Ikkinchi darajali variant faqat ingichka konturli (`.btn--outline`), hover'da yengil fon.
- **Bosish animatsiyasi:** tugma 0.96 ga kichrayadi va qo'yib yuborilganda yumshoq "prujina" bilan qaytadi; bosilgan nuqtadan och to'lqin tarqaladi (klaviaturada markazdan). Forma yuborilayotganda tugmada kichik spinner. `prefers-reduced-motion` yoqilgan bo'lsa animatsiya o'chadi.
- Header: telefonda to'q ko'k qat'iy panel (64px); 1100px'dan katta ekranda eski saytdagidek suzuvchi, shaffof, scroll'da to'qlashadi.
- Hero: to'liq ekranli haqiqiy surat (I-90, Snoqualmie Pass, Vashington), chapdan qorong'i soya, "Reliable Trucking Services / Across the USA".
- Ichki sahifalar: suratli to'q banner + sarlavha + breadcrumb (eski saytdagidek).

## Shrift

Poppins 400/500/600/700 (OFL), o'zimizda (4 ta woff2, latin). Matn 16px / 1.65; h1 hero 40–68px; h2 28–46px; h3 18–22px.

## Logotip

`public/brand/logo.svg` — rahbar bergan yangi logotip (oq doira, to'q ko'k va oltin "G", yo'l va o'q, "GOOD IDEA CARGO").
Undan: `logo.png` (512), `apple-touch-icon.png` (180), `favicon-32.png`, `og-image.jpg` (1200×630, hero surati + logotip).

## Oraliq va kenglik

Kontent 1240px, gutter 16–40px. Breakpoint'lar: 640, 700, 900, 1000, 1100 (to'liq menyu).
