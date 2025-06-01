export async function getProducts() {
  try {
    const response = await fetch("api/products.json");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
}
