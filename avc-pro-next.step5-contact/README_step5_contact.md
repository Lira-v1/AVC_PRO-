# Step 5 — Форма заявки + API (Email/Telegram)

Добавляет страницу `/contact` с формой и серверный маршрут `/api/lead`.
Стиль как в проекте: тёмная тема, Tailwind-only, JSON-ответы.

## Установка
1) Распакуй архив в корень проекта.
2) Установи зависимости:
```bash
npm i zod nodemailer
```
3) Добавь в `.env.local`:
```
SMTP_HOST=...
SMTP_PORT=465
SMTP_USER=...
SMTP_PASS=...
EMAIL_FROM="AVC PRO <no-reply@your-domain.com>"
EMAIL_TO=you@domain.com

# опционально Telegram
TELEGRAM_BOT_TOKEN=...
TELEGRAM_CHAT_ID=...
```
4) Запусти `npm run dev` и открой `/contact`.

## Где править
- Текст на странице → `app/contact/page.tsx` (пометки // === EDIT HERE ===).
- Подписи/placeholder полей → `components/forms/LeadForm.tsx`.
- Email-шаблон → `app/api/lead/route.ts` (переменная `html`).

## Ответы API
- Успех: `{ ok: true, messageId }`
- Ошибка валидации: `{ ok: false, errors }` (400)
- Ошибка конфигурации/сервера: `{ ok: false, error }` (500)
