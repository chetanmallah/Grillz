# 🍔 Grillz: Online Food Marketplace

**Grillz** is a modern, scalable, and secure online food ordering platform built with a microservices architecture. It offers a seamless experience for users to browse menus, add items to cart, place orders, and pay securely. Grillz also features a powerful admin panel for restaurant management, analytics, and real-time order tracking.

---

## 🚀 Live Demo

- **Backend:** [https://grillz-backend.onrender.com](https://grillz-backend.onrender.com)  
  _**Note:** Please ensure the backend is running before accessing the frontend!_

- **Frontend:** [https://grillz-frontend.onrender.com](https://grillz-frontend.onrender.com)

---

## ✨ Key Features

### 🛒 User Features
- **Browse Menus:** Explore a variety of food items and categories.
- **Add to Cart:** Add, update, or remove items from your cart before checkout.
- **Secure Checkout:** Pay for your order using integrated **Stripe** payments.
- **Order Tracking:** View your order status in real-time.
- **Order History:** Access your previous orders and details.
- **JWT Authentication:** Secure sign-up, login, and session management.

### 🛡️ Admin Features
- **Role-Based Access:** Only admins can access the admin panel and management features.
- **Dashboard Analytics:** Visualize sales, orders, and user statistics.
- **Order Management:** Track, update, and manage all orders in real-time.
- **Menu Management:** Add, edit, or remove food items and categories.
- **User Management:** View and manage registered users.
- **CRUD Operations:** Full create, read, update, and delete support for menu, users, and orders.

### ⚙️ System Features
- **Microservices Architecture:**  
  - Independent services for user, order, and payment modules.
  - Easy to scale and maintain.
- **Secure Payments:**  
  - Integrated with **Stripe API** for fast and safe transactions.
- **Logging:**  
  - All logs and activities are stored in **MongoDB** for monitoring and debugging.
- **Responsive Design:**  
  - Works seamlessly on desktop and mobile browsers.

---

## 🛠️ Tech Stack

- **Frontend:** React.js
- **Backend:** Node.js, Express.js (Microservices)
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **Payments:** Stripe API
- **Deployment:** Render

---

## 🖥️ Admin Panel

The admin panel is a dedicated interface for restaurant managers and staff.  
**Features include:**
- Real-time order tracking and status updates
- Dashboard with analytics and sales charts
- Menu and category management (CRUD)
- User management (view, edit, delete users)
- Secure, role-based access (only admins can log in)

---

## 📸 Screenshots

| User Home | Cart & Checkout | Admin Dashboard | Order Tracking |
|-----------|-----------------|----------------|---------------|
| ![User Home](screenshots/user-home.png) | ![Cart](screenshots/cart.png) | ![Admin Dashboard](screenshots/admin-dashboard.png) | ![Order Tracking](screenshots/order-tracking.png) |

> _Replace the above image links with your actual screenshots for best results!_

---

## 📝 Usage Notes

- **To use the frontend, please ensure the backend is running first.**
- Visit the [Backend URL](https://grillz-backend.onrender.com) before opening the [Frontend URL](https://grillz-frontend.onrender.com).
- The admin panel is accessible only to users with admin privileges.

---



---

## 🔒 Authentication & Security

- **JWT Authentication:**  
  All user and admin routes are protected using JWT tokens.
- **Role-Based Access:**  
  Admin features are accessible only to authenticated admin users.
- **Stripe Integration:**  
  All payments are processed securely via Stripe.

---

## 📬 Contact

For questions, feedback, or collaboration:  
**Email:** [chetanmallah28@gmail.com](mailto:chetanmallah28@gmail.com)  
**LinkedIn:** [linkedin.com/in/chetanmallah28](https://linkedin.com/in/chetanmallah28)

---

## ⭐️ Like Grillz?

If you find Grillz useful, please star the repo and share it with your network!
