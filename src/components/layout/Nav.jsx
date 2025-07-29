import React from "react";
import { Link } from "react-router-dom";


export default function Nav({ children }) {
  return (
    <nav className="flex gap-4 py-5">
      <Link to="/" className="text-gray-700 hover:text-blue-600 transition">
        Home
      </Link>
      <Link
        to="/products"
        className="text-gray-700 hover:text-blue-600 transition"
      >
        Products
      </Link>
      <Link to="/cart" className="text-gray-700 hover:text-blue-600 transition">
        Cart
      </Link>
      <Link
        to="/login"
        className="text-gray-700 hover:text-blue-600 transition"
      >
        Login
      </Link>
    </nav>
  );
}
