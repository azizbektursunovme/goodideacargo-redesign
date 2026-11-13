// Production origin for canonical, og:url, sitemap.xml and robots.txt.
export const ORIGIN = import.meta.env.PUBLIC_CANONICAL_ORIGIN || 'https://goodideacargo.com';
// The nine pages the site has (Home, Why Us, Services, Fleet, Drive with Us, Get a Quote, Contact, Privacy, Terms).
// URLs match the old site so links in ads and profiles keep working.
export const PUBLIC_PAGES = ['', 'why-us/', 'service/', 'trucking/', 'drive-with-us/', 'quote/', 'contact/', 'privacy-policy/', 'terms-of-use/'];
