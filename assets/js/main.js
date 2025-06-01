import { renderProducts } from "./product.js";
import { renderCart } from "./cart.js";
import { selector } from "./selector.js";

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  renderCart();
  const coupon = selector("#apply-coupon");
  if (coupon) coupon.addEventListener("click", renderCart);
});
