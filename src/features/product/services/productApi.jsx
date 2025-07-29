// // services/productApi.js
// import axios from 'axios';
// const API_KEY = import.meta.env.VITE_API_KEY;
// const API_URL = `${API_KEY}/v1/products`;

// export async function fetchProducts() {
//   // const res = await fetch(API_URL);
//   // if (!res.ok) throw new Error("Failed to fetch products");
//   // return res.json();
//   try {
//     const response = await axios.get(API_URL);
//     return response.data;
//   } catch (error) {
//     throw new Error("Failed to fetch products");
//   }
// }

// services/productApi.js
import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = `${API_KEY}/v1/products`;

// Lấy tất cả sản phẩm
export async function fetchProducts() {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch products");
  }
}

// Lấy sản phẩm theo category
export async function fetchProductsWithImage() {
  try {
    const response = await axios.get(`${BASE_URL}/productwithimage`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch product with image");
  }
}


