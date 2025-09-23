# Step 9 — Контакты + Карта + Реквизиты

Добавляет страницу `/contacts` с контактами, встраиваемой картой и блоком реквизитов.
Карта работает через iframe (Yandex/Google), ссылка задаётся в `data/contacts.ts` (или через ENV).

## Установка
1) Распакуй архив в корень (после Step 1–8).
2) Открой `/contacts`.

## Где править
- `data/contacts.ts` — телефоны, email, адрес, ссылки, iframe карты, реквизиты.
- В `components/contacts/MapEmbed.tsx` можно переключить источник (Yandex/Google).
- В `components/ui/Header.tsx` добавлена ссылка «Контакты».

## ENV (опционально)
Можно хранить ссылку карты в `.env.local`:
```
NEXT_PUBLIC_MAP_IFRAME_URL="https://yandex.ru/map-widget/v1/...."
```
Если переменная есть — она приоритетнее, чем значение в `data/contacts.ts`.
