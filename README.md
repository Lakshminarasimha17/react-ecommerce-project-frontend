# 🛒 KLNS Store - Full-Stack E-Commerce Web Application

A full-stack, responsive e-commerce web platform built with **React**, **Vite**, **Node.js**, and **Express**. The application provides an interactive online shopping experience featuring live product catalog rendering, dynamic search, and cart management with real-time total calculations.

---

## 🌐 Live Deployments

- **Frontend App:** [react-ecommerce-project-frontend-lc.vercel.app](https://react-ecommerce-project-frontend-lc.vercel.app/)
- **Backend API:** [klns-ecommerce-backened.onrender.com/api/products](https://klns-ecommerce-backened.onrender.com/api/products)

---

## 🚀 Key Features

- **Product Catalog:** Fetches and displays products dynamically from the backend REST API with prices, ratings, and stock status.
- **Interactive Shopping Cart:** Real-time item additions, quantity management, and automatic price calculations.
- **Search & Filtering:** Fast client-side search to filter products across apparel, electronics, and home essentials.
- **Responsive UI:** Clean, modern interface optimized for desktop and mobile viewports.
- **Continuous Deployment:** Integrated CI/CD pipelines connecting GitHub with Vercel and Render for automated deployments on push.

---

## 🛠️ Tech Stack

### Frontend
- **React.js** (Hooks, Component Architecture)
- **Vite** (Build tool & development server)
- **HTML5 & CSS3** (Responsive styling and grid layouts)
- **Deployment:** Vercel

### Backend
- **Node.js** & **Express.js** (REST API development)
- **CORS** (Cross-Origin Resource Sharing enabled for secure client-server communication)
- **Database Engine:** Embedded SQLite / JSON data store
- **Deployment:** Render

---

## 📁 Project Structure

```text
├── Frontend (react-ecommerce-project-frontend)
│   ├── src/
│   │   ├── components/       # Reusable UI elements (Navbar, Product Cards, Cart)
│   │   ├── App.jsx           # Main application view & routing
│   │   └── main.jsx          # Entry point
│   ├── public/images/        # Product media assets
│   ├── index.html
│   └── package.json
│
└── Backend (react-ecommerce-project-backened)
    ├── server.js             # Express server setup & API routes
    ├── package.json
    └── data/                 # SQLite database & initial seed data
