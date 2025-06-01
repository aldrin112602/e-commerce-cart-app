import { getProducts } from "./api.js";
import { addToCart } from "./cart.js";
import { selector } from "./selector.js";

export async function renderProducts() {
  const container = selector("#product-list");
  const products = await getProducts();

  if (!container) return;
  container.classList.add(
    "grid",
    "grid-cols-1",
    "sm:grid-cols-2",
    "md:grid-cols-3",
    "lg:grid-cols-4",
    "gap-6"
  );

  products.forEach((product) => {
    const card = document.createElement("div");
    card.className = `
      bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300
      p-5 flex flex-col items-center text-center
    `;

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}"
        class="w-full h-44 object-contain mb-4 rounded-md" />
      
      <h3 class="text-xl font-semibold text-gray-800 mb-1">${product.name}</h3>
      <p class="text-lg font-medium text-blue-600 mb-3">$${product.price.toFixed(
        2
      )}</p>

      <div class="flex items-center justify-center gap-2 mb-4">
        <button 
          id="decrease-${product.id}" 
          class="bg-gray-200 hover:bg-gray-300 text-lg font-bold w-9 h-9 rounded-full"
        >–</button>

        <span 
          id="qty-display-${product.id}" 
          class="min-w-[40px] text-center border rounded px-3 py-1 bg-white font-medium"
          contenteditable
        >1</span>

        <button 
          id="increase-${product.id}" 
          class="bg-gray-200 hover:bg-gray-300 text-lg font-bold w-9 h-9 rounded-full"
        >+</button>
      </div>

      <button 
        data-id="${product.id}" 
        class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-md w-full transition-all duration-200"
      >
        Add to Cart
      </button>
    `;

    container.appendChild(card);

    // Quantity logic
    let quantity = 1;
    const qtyDisplay = card.querySelector(`#qty-display-${product.id}`);
    const increaseBtn = card.querySelector(`#increase-${product.id}`);
    const decreaseBtn = card.querySelector(`#decrease-${product.id}`);

    increaseBtn.addEventListener("click", () => {
      quantity++;
      qtyDisplay.textContent = quantity;
    });

    decreaseBtn.addEventListener("click", () => {
      if (quantity > 1) {
        quantity--;
        qtyDisplay.textContent = quantity;
      }
    });

    card.querySelector("button[data-id]").addEventListener("click", () => {
      const parsedQty = parseInt(qtyDisplay.textContent.trim(), 10);
      quantity = isNaN(parsedQty) ? 1 : parsedQty;

      addToCart(product, quantity);
    });
  });
}
