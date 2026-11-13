# Dizayn tizimi — "Guide sign"

Kod: `src/styles/global.css` (`:root` tokenlari). Sayt Meta reklamasi uchun kompaniyaning yuzi bo'lgani uchun sister saytlardan farqli, kreativ yo'nalish tanlandi: AQSh avtomagistral yo'l belgilari. Kompaniya Renton, Vashington'da, eski saytning rangi ham yashil edi.

## Ranglar

| Token | Hex | Qayerda |
|---|---|---|
| `--green` | `#0B6B3A` | Yo'l belgisi yashili: hero belgisi, sahifa sarlavhalari, havolalar (oq matn 6.6:1) |
| `--green-deep` | `#085A31` | Havola hover |
| `--yellow` | `#FFC72C` | "Exit only" sariq: yagona tugma, to'q fonda fokus |
| `--ink` | `#0E2A1D` | Matn, footer, kontakt paneli |
| `--white` | `#FFFFFF` | Fon |
| `--grey-1` | `#F1F3F0` | Ikkinchi fon |
| `--grey-2` | `#CBD3CD` | Ajratuvchi chiziqlar |
| `--grey-3` | `#8A968F` | Input chegarasi (oq fonda 3:1) |
| `--grey-4` | `#5A665F` | Ikkinchi darajali matn (6:1) |

Kulranglar soni: 4 (task: "ko'pi bilan 3–4"). Xato uchun qizil `#B42318`, muvaffaqiyat foni `#E7F3EC`.

## Shakl

- **Bitta radius:** 6px (belgilar, tugmalar, inputlar, rasmlar, panellar).
- **Bitta tugma:** sariq fon, to'q matn, 2px to'q chegara; hover'da teskari. Ikkinchi darajali harakatlar havola.
- **Belgi plastinkasi:** yashil fon + ichki oq chiziq (`.plate`), logotip, hero va sahifa sarlavhalarida.
- **Mile-marker:** qadam raqamlari yashil ustuncha ichida (faqat haqiqiy ketma-ketlikda: quote jarayoni, forma qadamlari).
- Soya yo'q, gradient yo'q, animatsiya yo'q (faqat hover rangi).

## Shrift

Overpass (variable 300–900, OFL, Highway Gothic'dan kelib chiqqan), bitta oila. Matn 17px / 1.55; h1 36–64px 800; h2 28–40px 800; h3 20px 700. Katta harfli yorliqlar yo'q, sarlavhalar oddiy registrda.

## Oraliq va kenglik

4px tizim, kontent 1200px, gutter 16–40px. Breakpoint'lar: 640, 800, 900, 960, 1024, 1100 (to'liq menyu).
