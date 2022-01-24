export async function getAllProducts() {
  const response = await fetch(
    "https://61ed2520f3011500174d22db.mockapi.io/api/products"
  );
  const data = await response.json();
  return data;
}

export async function getProductById(id) {
  const response = await fetch(
    `https://61ed2520f3011500174d22db.mockapi.io/api/products/${id}`
  );
  const data = await response.json();
  return data;
}
