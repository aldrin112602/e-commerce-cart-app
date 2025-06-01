import { applyCoupon } from "./coupon.js";

let cart = JSON.parse(localStorage.getItem("cart")) || [];

export function addToCart(product, quantity) {
  if (quantity <= 0) {
    Swal.fire({
      title: "Invalid Quantity!",
      text: "Please enter a quantity greater than zero to add this product to your cart.",
      icon: "error",
    });

    return;
  }
  const existing = cart.find((item) => item.id === product.id);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ ...product, quantity });
  }
  saveCart();
  renderCart();
}

function saveCart() {
  Swal.fire({
    title: "Added to Cart!",
    text: "The product has been successfully added to your cart.",
    icon: "success",
  });

  localStorage.setItem("cart", JSON.stringify(cart));
}

export function renderCart() {
  const container = document.getElementById("cart-summary");
  if (!container) return;
  container.innerHTML = "";

  const codeInput = document.getElementById("coupon-code");
  const code = codeInput ? codeInput.value.trim().toUpperCase() : "";

  if (cart.length === 0) {
    container.innerHTML = `<p class="text-gray-600">Your cart is currently empty.</p>`;
    return;
  }

  let grandTotal = 0;

  const table = document.createElement("table");
  table.className = "w-full text-left border border-gray-300";

  table.innerHTML = `
    <thead class="bg-gray-100">
      <tr>
        <th class="p-3 border">Image</th>
        <th class="p-3 border">Product</th>
        <th class="p-3 border">Quantity</th>
        <th class="p-3 border">Price</th>
        <th class="p-3 border">Total</th>
        <th class="p-3 border">Discount</th>
      </tr>
    </thead>
    <tbody>
      ${cart
        .map((item) => {
          const originalTotal = item.price * item.quantity;
          const discountedTotal = applyCoupon(item.price, item.quantity, code);
          const discount = originalTotal - discountedTotal;
          grandTotal += discountedTotal;

          return `
            <tr class="border-t">
              <td class="p-3 border">
                <img src="${item.image}" alt="${
            item.name
          }" class="h-16 w-16 object-cover rounded">
              </td>
              <td class="p-3 border">${item.name}</td>
              <td class="p-3 border">${item.quantity}</td>
              <td class="p-3 border">$${item.price.toFixed(2)}</td>
              <td class="p-3 border">$${originalTotal.toFixed(2)}</td>
              <td class="p-3 border text-green-600">- $${discount.toFixed(
                2
              )}</td>
            </tr>
          `;
        })
        .join("")}
    </tbody>
    <tfoot>
      <tr class="bg-gray-200 font-bold">
        <td colspan="4" class="p-3 border text-right">Grand Total</td>
        <td colspan="2" class="p-3 border text-green-700">$${grandTotal.toFixed(
          2
        )}</td>
      </tr>
    </tfoot>
  `;

  container.appendChild(table);
}

export function getCart() {
  return cart;
}
