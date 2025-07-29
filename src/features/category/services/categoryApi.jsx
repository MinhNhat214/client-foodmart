import axios from 'axios';
const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = `${API_KEY}/v1/categories`;

export async function fetchCategories() {
  // const res = await fetch(API_URL);
  // if (!res.ok) throw new Error("Failed to fetch products");
  // return res.json();
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch categories");
  }
}


