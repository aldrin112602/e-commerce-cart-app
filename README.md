
# 🛒 Simple E-Commerce Cart App

This is a basic e-commerce shopping cart web app built using vanilla JavaScript, Tailwind CSS, and SweetAlert2. It demonstrates how to fetch products, manage a shopping cart, apply coupons, and display totals dynamically.

---

## 🚀 How to Set Up

1. **Clone the Repository**
   ```bash
   git clone https://github.com/aldrin112602/e-commerce-cart-app.git
   cd e-commerce-cart-app
   ```

2. **Install a Live Server (Optional but Recommended)**
   You can use [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VS Code Extensions or install one globally:
   ```bash
   npm install -g live-server
   ```

3. **Run the App**
   Open `index.html` in your browser, or use:
   ```bash
   live-server
   ```

---

## ✨ Features Implemented

- 📦 **Product Listing**: Dynamically fetched and rendered product cards from a JSON source.
- ➕➖ **Quantity Adjustment**: Users can increase or decrease the quantity of each item before adding to cart.
- 🛒 **Cart Functionality**:
  - Items added to cart are persisted in `localStorage`.
  - Cart summary displays product info, quantity, price, discount, and grand total.
- 💰 **Coupon Support**:
  - Accepts coupon code `SAVE10` for a 10% discount up to $50 on items priced $100 and above.
- 🎨 **Modern UI**:
  - Responsive card layout using Tailwind CSS.
  - SweetAlert2 used for success/error prompts.

---

## 📌 Assumptions

- Only the coupon code `SAVE10` is supported (others will not be recognized).
- Coupon logic is applied per item based on unit price.
- Users cannot set a quantity less than 1.
- Products are assumed to be static and hardcoded in a JSON array.
- No authentication or payment integration is implemented.

---

## ⏱️ Time Spent

| Task                        | Time Spent |
|----------------------------|------------|
| Project setup + layout     | 1.5 hours  |
| Product rendering logic    | 1 hour     |
| Cart functionality         | 1.5 hours  |
| Coupon application         | 0.5 hour   |
| UI styling (Tailwind + UX) | 1 hour     |
| Testing and cleanup        | 0.5 hour   |
| **Total Time**             | **6 hours**|

---

## 📁 Project Structure

```
e-commerce-cart-app/
│
├── index.html
├── api/
│   └── products.json    # Mock API/Data
├── assets/
│   └── images/          # Product images
├── js/
│   ├── api.js           # Product data
│   ├── cart.js          # Cart logic
│   ├── coupon.js        # Coupon logic
│   ├── render.js        # Product rendering
│   └── selector.js      # Helper function
└── README.md
```

---

## 🙌 Author

**Aldrin Caballero**  
[GitHub](https://github.com/aldrin112602)
