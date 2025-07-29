import { useCategories } from "../hooks/useCategory";
import React, { useEffect } from "react";
import CategoryButton from "./categoryButton";
export default function CategoryList() {
  const { categories, loading, error } = useCategories();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Failed to load categories</p>;

  return (
    <ul style={{display: "flex", textAlign: "center", gap: "5px"}}>
      {categories.map((item) => (
        <CategoryButton key={item._id} category={item}/>
      ))}
    </ul>
  );
}
