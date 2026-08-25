# Contivo SEO Audit v1.1.3

## Status

- Default language: English at `https://contivoapp.com/`
- Russian: `https://contivoapp.com/ru/`
- German: `https://contivoapp.com/de/`
- `/en/` pages are not generated. Historical `/en/*` URLs require HTTP 301/308 redirects at the DNS/CDN or hosting layer because GitHub Pages does not provide project-level redirect rules.
- Public directory-style URLs use a trailing slash consistently in internal links, canonical URLs and hreflang metadata.
- Sitemap contains hreflang alternates for English, Russian, German and x-default.

## After deploy, check

1. `https://contivoapp.com/` opens English.
2. Language selector switches to `/ru/` and `/de/`.
3. After infrastructure redirects are configured, `https://contivoapp.com/en/` redirects to `/` with HTTP 301/308.
4. After infrastructure redirects are configured, `https://contivoapp.com/en/help/` redirects to `/help/` with HTTP 301/308.
5. `https://contivoapp.com/sitemap.xml` opens and contains `xhtml:link` hreflang entries.
6. Google Search Console: resubmit sitemap if needed.
7. Rich Results Test: check `https://contivoapp.com/`.
8. Open Graph preview: check home page image and title.

## Notes

Future languages can be added by updating `src/content/site.js`, creating a new `src/pages/<lang>/` folder and adding the new language into sitemap/hreflang generation.
