# 🛒 Cart Ecommerce

A modern e-commerce shopping cart application built with **React**, **TypeScript**, and **Context API** to manage cart state globally across the application.

🔗 **Live Demo:** [cart-ecommerce-delta.vercel.app](https://cart-ecommerce-delta.vercel.app)

---

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [How It Works](#-how-it-works)
- [Author](#-author)

---

## 📖 About

Cart Ecommerce is a study project focused on practicing **React Context API** to simulate a real-world shopping cart experience. The app fetches products from a local JSON server, allows users to add and remove items from the cart, and displays the total price in real time.

---

## ✨ Features

- 🛍️ Product listing page with grid layout
- 🔍 Product detail page by ID (`/product/:id`)
- 🛒 Add and remove items from the cart
- 💰 Real-time cart total calculation
- 🔔 Toast notifications for user feedback
- 📱 Fully responsive layout (mobile, tablet, desktop)
- 🌐 Client-side routing with React Router DOM

---

## 🚀 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | ^19.2.4 | UI library |
| TypeScript | ~5.9.3 | Static typing |
| Vite | ^8.0.1 | Build tool & dev server |
| Tailwind CSS | ^4.2.2 | Utility-first styling |
| React Router DOM | ^7.13.2 | Client-side routing |
| Axios | ^1.14.0 | HTTP requests |
| JSON Server | ^1.0.0-beta.15 | Mock REST API |
| React Hot Toast | ^2.6.0 | Toast notifications |
| React Icons | ^5.6.0 | Icon library |

---

## 📁 Project Structure

```
Cart-Ecommerce/
├── public/
├── src/
│   ├── components/        # Reusable components (Header, etc.)
│   ├── context/
│   │   └── CartContext.tsx  # Global cart state with Context API
│   ├── pages/
│   │   ├── home/          # Product listing page
│   │   └── product/       # Product detail page by ID
│   ├── services/
│   │   └── api.ts         # Axios instance configuration
│   ├── App.tsx            # Route definitions
│   └── main.tsx           # App entry point
├── db.json                # Mock database for JSON Server
├── package.json
├── vite.config.ts
└── tsconfig.json
```

---

## 🏁 Getting Started

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/TallesDiniz/Cart-Ecommerce.git
cd Cart-Ecommerce
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the JSON Server (mock API)**

```bash
npx json-server db.json --port 3000
```

4. **Start the development server** (in a new terminal)

```bash
npm run dev
```

5. **Open in your browser**

```
http://localhost:5173
```

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |

---

## ⚙️ How It Works

### Context API — Cart State

The cart state is managed globally via React's Context API. The `CartContext` provides the following to all components:

```ts
interface CartContextProps {
  cart: ProductsProps[];           // Items currently in the cart
  addItemCart: (product) => void;  // Add a product to the cart
  removeItemCart: (id) => void;    // Remove a product from the cart
  total: string;                   // Formatted total price (BRL)
}
```

### Routing

| Route | Component | Description |
|---|---|---|
| `/` | `Home` | Lists all products from the API |
| `/product/:id` | `ProductDetail` | Shows details of a specific product |

### Mock API

Products are served locally by **JSON Server** from `db.json`. The Axios instance in `src/services/api.ts` points to `http://localhost:3000`.

```json
{
  "products": [
    {
      "id": 1,
      "title": "Product Name",
      "description": "Product description",
      "price": 99.90,
      "cover": "https://image-url.com/image.jpg"
    }
  ]
}
```

---

## 👤 Author

**Talles Diniz**

- GitHub: [@TallesDiniz](https://github.com/TallesDiniz)

---

> This project was developed for learning purposes, focused on practicing React Context API, TypeScript, and component-driven architecture.