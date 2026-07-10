# Contivo SEO Audit v1.1.3

## Status

- Default language: English at `https://contivoapp.com/`
- Russian: `https://contivoapp.com/ru/`
- German: `https://contivoapp.com/de/`
- `/en/` pages are kept as noindex redirect pages to avoid duplicate English content.
- Sitemap contains hreflang alternates for English, Russian, German and x-default.

## After deploy, check

1. `https://contivoapp.com/` opens English.
2. Language selector switches to `/ru/` and `/de/`.
3. `https://contivoapp.com/en/` redirects to `/`.
4. `https://contivoapp.com/en/help/` redirects to `/help/`.
5. `https://contivoapp.com/sitemap.xml` opens and contains `xhtml:link` hreflang entries.
6. Google Search Console: resubmit sitemap if needed.
7. Rich Results Test: check `https://contivoapp.com/`.
8. Open Graph preview: check home page image and title.

## Notes

Future languages can be added by updating `src/content/site.js`, creating a new `src/pages/<lang>/` folder and adding the new language into sitemap/hreflang generation.
