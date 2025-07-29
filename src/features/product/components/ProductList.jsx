// import ProductCard from './ProductCard';
// import useFakeProducts from '../hooks/useFakeProducts';
// import React from 'react';
// export default function ProductList() {
//   const products = useFakeProducts();

//   return (
//     <div>
//       {products.map((p) => (
//         <ProductCard key={p.id} product={p} />
//       ))}
//     </div>
//   );
// }


// components/ProductList.jsx
// import { useProducts } from '../hooks/useProducts';
// import React from 'react';

// export default function ProductList() {
//   const { products, loading, error } = useProducts();

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Failed to load products</p>;

//   return (
//     <ul>
//       {products.map((p) => (
//         <li key={p._id}>{p.name}</li>
//       ))}
//     </ul>
//   );
// }

// components/ProductList.jsx

import React from 'react';
import { useProductsWithImage } from '../hooks/useProductWIthImage';
import ProductCard from './ProductCard';
import './ProductList.css';

export default function ProductList() {
  const { products, loading, error } = useProductsWithImage();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Failed to load products</p>;

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product._id} product={product}/>
      ))}
    </div>
  );
}
