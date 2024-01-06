# wisdom

## Page URL

| Page           | URL             | purpose            |
| -------------- | --------------- | ------------------ |
| Login          | /login          | Login              |
| Main           | /main           | Dashboard          |
| Create habit   | /habit/create   | Create new habit   |
| History        | /history        | View history list  |
| Create history | /history/create | create new history |

## Architecture (Phase 1)

<img width="958" alt="Screenshot 2024-01-06 at 18 28 08" src="https://github.com/next-shiyon/wisdom/assets/138292822/5ec5c218-ef70-4a1c-94ea-c8278203562b">

> Phase 2 will be added later..

## Install

### run docker-compose `dev` 💻

```bash
docker-compose -f docker-compose.yml -f docker-compose-dev.yml up -d --build
```

### run docker-compose `product` 🛜

```bash
docker-compose -f docker-compose.yml -f docker-compose-prod.yml up -d --build
```
