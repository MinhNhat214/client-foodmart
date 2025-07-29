import { useState } from 'react';
import { addProductToCart } from '../services/cartApi';

export function useAddProductToCart() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  const add = async ({ user_id, product_id, quantity }) => {

    setLoading(true);
    setError(null);
    // console.log("user_id:", user_id);
    // console.log("product_id:", product_id);
    // console.log("quantity:", quantity);
    try {
      const data = await addProductToCart(user_id, product_id, quantity);
      setResult(data);
      return data;
    } catch (err) {
      setError(err);
      console.error('Add to cart failed', err);
    } finally {
      setLoading(false);
    }
  };

  return { add, loading, error, result };
}
