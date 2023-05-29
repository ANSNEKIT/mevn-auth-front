<!-- prettier-ignore -->
# MEVN-auth-front

Cтек (Vue 3 + Typescript + Vue router 4 + Pinia + TailwindCSS)

## Особенности

-   Подключены prettier и ESlint
-   В приложении есть регистрация и страница для входа.
-   Храниние токена авторизации в LocalStorage. Реализован выход из приложения
-   Добавлены валидация формы входа и регистрации yup
-   Стилизация с помощью фреймворка TailwindCSS
-   Подключена UI компоненты primevue

---

## API

АПИ доступен по ссылке https://mevn-auth-back.onrender.com

### Регистрация

POST /signup
body {
email,
name,
password
}

Response: Получаем токен пользователя

### Авторизация

POST /signin
body {
email,
password
}

Response: Получаем токен пользователя

### Инфо

GET /info
HEADER: authorization: Bearer <token>

Response: Получаем имя, логин, email пользователя

### Логаут

GET /logout
HEADER: authorization: Bearer <token>

Response: Получаем статус 200

### Список пользователей

POST /users
HEADER: authorization: Bearer <token>

Response: Получаем список пользователей

### Пинг

GET /ping

Response: Получаем статус 200

---

## Запуск и сборка проекта

### Установка зависимостей

`npm i`

### Запуск сервера

`npm run start`

### Запуск сервера в режиме разработки

`npm run dev:inspect`

Запуск build

`npm run build`

В директории проекта будет создана папка release. Для Linux OS будут доступны файлы c расширением .AppImage .snap
Запустите файл .AppImage

Запуск lint

`npm run lint`
