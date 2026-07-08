# Установка и запуск сайта Contivo

## 1. Куда сохранить

Распакуй папку, например сюда:

```txt
C:\Users\Emirlan\Desktop\contivo_website
```

Открой эту папку в VS Code.

---

## 2. Установить Node.js

Установи LTS-версию Node.js с официального сайта.

После установки проверь в терминале:

```bash
node -v
npm -v
```

---

## 3. Установить зависимости сайта

Внутри папки сайта выполни:

```bash
npm install
```

---

## 4. Запустить сайт локально

```bash
npm run dev
```

Открой адрес, который появится в терминале, обычно:

```txt
http://localhost:4321
```

---

## 5. Что уже добавлено

- логотип Contivo в `public/logo.png`;
- переключатель языка в верхнем меню;
- русская версия: `/`;
- английская версия: `/en`;
- немецкая версия: `/de`;
- страницы: Privacy, Terms, Help, Contact, News.

---

## 6. Как заменить логотип

Файл логотипа находится здесь:

```txt
public/logo.png
```

Чтобы заменить логотип:

1. Удали старый `logo.png`.
2. Положи новый файл с тем же названием `logo.png`.
3. Обнови браузер.

---

## 7. Как менять тексты

Все основные тексты и ссылки находятся здесь:

```txt
src/content/site.js
```

Там есть блоки:

```js
ru
en
de
```

Меняешь текст в нужном языке — сайт сразу обновляется после сохранения.

---

## 8. Как менять цвета и внешний вид

Открой:

```txt
src/styles/global.css
```

Главные цвета находятся сверху:

```css
--primary: #6d35d4;
--blue: #2777ff;
```

---

## 9. Проверить сборку перед публикацией

```bash
npm run build
```

Если ошибок нет, сайт готов к публикации.

---

## 10. Публикация через GitHub + Cloudflare Pages

1. Создай новый репозиторий GitHub, например `contivo-website`.
2. Загрузи туда эту папку.
3. В Cloudflare открой **Workers & Pages**.
4. Нажми **Create application**.
5. Выбери **Pages**.
6. Подключи GitHub-репозиторий.
7. Укажи настройки:

```txt
Framework preset: Astro
Build command: npm run build
Build output directory: dist
```

8. Нажми **Deploy**.

---

## 11. Подключить домен contivoapp.com

После первого Deploy:

1. Открой проект Cloudflare Pages.
2. Перейди в **Custom domains**.
3. Добавь:

```txt
contivoapp.com
www.contivoapp.com
```

Cloudflare покажет, какие DNS-записи нужны.

---

## 12. Как обновлять сайт потом

После изменений:

```bash
git add .
git commit -m "Update website"
git push
```

Cloudflare сам пересоберёт сайт и обновит его онлайн.
