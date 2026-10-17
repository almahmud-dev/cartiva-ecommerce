# Cartiva E-commerce

Cartiva is a full-stack e-commerce platform split into three apps: a customer-facing storefront, an admin dashboard, and a REST API.

> **Status:** Early development. Project structure, routing and the API skeleton are in place; features are being built out.

## Project Structure

```
cartiva-ecommerce/
├── frontend/   # Customer storefront (Next.js, port 3000)
├── admin/      # Admin dashboard (Next.js, port 3001)
└── backend/    # REST API (Node.js + Express, port 5000)
```

## Tech Stack

| Layer     | Technologies                                                         |
| --------- | -------------------------------------------------------------------- |
| Frontend  | Next.js 16 (App Router), React 19, Tailwind CSS 4                    |
| Admin     | Next.js 16 (App Router), React 19, Tailwind CSS 4                    |
| Backend   | Node.js, Express 5, MongoDB (Mongoose), JWT, Zod, bcryptjs, Helmet   |

## Apps

### Storefront (`frontend/`)

Route groups:

- `(store)` – home, products, categories, cart, checkout, wishlist, account
- `(auth)` – login, register, forgot password, reset password

### Admin Dashboard (`admin/`)

Route groups:

- `(auth)` – login
- `(dashboard)` – overview, products (list / new / edit), categories, orders (list / detail), inventory, customers, reviews, coupons, settings

### Backend API (`backend/`)

```
backend/src/
├── server.js        # Entry point: loads env, starts the HTTP server
├── app.js           # Express app: middleware, routes (no listen here)
├── config/          # Database and app configuration
├── routes/api/      # API route definitions
├── controllers/     # Request handlers
├── services/        # Business logic
├── models/          # Mongoose models
├── middleware/      # Auth, error handling, etc.
├── validators/      # Zod request schemas
└── utils/           # Helpers
```

Health check: `GET /api/health`

## Getting Started

### Prerequisites

- Node.js 20+ and npm
- A MongoDB instance (local or Atlas)

### 1. Clone and install

```bash
git clone <your-repo-url> cartiva-ecommerce
cd cartiva-ecommerce

cd backend  && npm install && cd ..
cd frontend && npm install && cd ..
cd admin    && npm install && cd ..
```

### 2. Environment variables

**`backend/.env`**

```env
PORT=5000
FRONTEND_URL=http://localhost:3000
MONGODB_URI=mongodb://localhost:27017/cartiva
JWT_SECRET=change-me
```

**`frontend/.env.local`** and **`admin/.env.local`**

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

> Never commit real `.env` files. Use `.env.example` as the template.

### 3. Run in development

Open three terminals:

```bash
# Backend  -> http://localhost:5000
cd backend && npm run dev

# Storefront -> http://localhost:3000
cd frontend && npm run dev

# Admin -> http://localhost:3001
cd admin && npm run dev
```

## Scripts

| App                 | Command         | Description                   |
| ------------------- | --------------- | ----------------------------- |
| backend             | `npm run dev`   | Start with nodemon            |
| backend             | `npm start`     | Start in production mode      |
| backend             | `npm test`      | Run tests (Node test runner)  |
| frontend / admin    | `npm run dev`   | Start Next.js dev server      |
| frontend / admin    | `npm run build` | Production build              |
| frontend / admin    | `npm start`     | Serve the production build    |
| frontend / admin    | `npm run lint`  | Run ESLint                    |

## Roadmap

- [ ] Database connection and core models (User, Product, Category, Order)
- [ ] Authentication (JWT in cookies) and role-based access
- [ ] Product, category and inventory APIs
- [ ] Cart, checkout and orders
- [ ] Reviews, wishlist and coupons
- [ ] Admin management screens wired to the API

## License

ISC