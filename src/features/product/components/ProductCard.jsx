import React, { useState } from "react";
// import './ProductCard.css';
import { useAddProductToCart } from "../../cart/hooks/useAddProductToCart";
import { useSelector } from "react-redux";

export default function ProductCard({ product }) {
  const userId = useSelector((state) => state.auth.user?.id);
  const { add, loading } = useAddProductToCart();

  const primaryImage =
    product.images?.find((img) => img.is_primary) || product.images?.[0];
  const [quantity, setQuantity] = useState(1);

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));


  const handleAddToCart = () => {
    add({ user_id: userId, product_id: product._id, quantity });
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={primaryImage?.image_url} alt={product.name} />
      </div>
      <div className="product-details">
        <h3>{product.name}</h3>
        <p className="description">{product.description}</p>
        <p className="price">${product.price}</p>

        <div className="quantity-selector">
          <button onClick={decreaseQty} disabled={quantity <= 1}>
            −
          </button>
          <span>{quantity}</span>
          <button onClick={increaseQty}>+</button>
        </div>

        <button className="add-to-cart" onClick={handleAddToCart}>
          Add {quantity} to Cart
          {loading ? "Adding..." : `Add ${quantity} to Cart`}
        </button>
      </div>
    </div>
  );
}
