# HANDOFF — Contivo Website

Проект: статический сайт Contivo на Astro.

Цель: официальный сайт contivoapp.com для приложения Contivo.

Страницы:
- `/` главная
- `/privacy` политика конфиденциальности
- `/terms` условия использования
- `/help` помощь
- `/contact` контакты
- `/news` новости

Хостинг: Cloudflare Pages.

Команды:

```bash
npm install
npm run dev
npm run build
```

Важные файлы:

```txt
src/content/site.js      основные email и ссылки
src/styles/global.css    цвета и дизайн
src/pages/index.astro    главная страница
src/pages/privacy.astro  Privacy Policy
src/pages/terms.astro    Terms of Use
src/pages/help.astro     Help
src/pages/contact.astro  Contact
src/pages/news.astro     News
```

Обновления сайта: через GitHub push, Cloudflare Pages сам пересобирает сайт.
