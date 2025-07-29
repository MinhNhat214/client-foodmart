import React from 'react';
export default function CategoryButton({ category }) {
  return (
    <div style={{border: '1px solid #ccc', padding: "30px", borderRadius: "5px" }}>
      <h3>{category.name}</h3>
    </div>
  );
}
