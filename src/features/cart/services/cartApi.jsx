import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = `${API_KEY}/v1/carts`;

// Lấy tất cả sản phẩm
export async function addProductToCart(user_id, product_id, quantity) {
  try {
    console.log("user_id:", user_id);
    console.log("product_id:", product_id);
    console.log("quantity:", quantity);

    const response = await axios.post(`${BASE_URL}/addproducttocart`, {
      user_id,
      product_id,
      quantity,
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to add product to cart");
  }
}
