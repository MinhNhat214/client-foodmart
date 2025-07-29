import React, { useState } from "react";
import ProductList from "../features/product/components/ProductList";
import CategoryList from "../features/category/components/categoryList";
import ContactForm from "../features/contactForm/components/ContactForm";
import { Link } from "react-router-dom";
import { Carousel } from "antd";


export default function HomePage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">HomePage</h1>

      <section className="flex gap-3 h-[500px]">
        {/* Left column with carousel */}
        <div className="w-1/2 h-full bg-blue-100 p-4 rounded-lg flex items-center">
          <div className="w-full">
            <h2 className="text-yellow-600 font-bold text-2xl mb-2">
              100% Natural
            </h2>
            <h1 className="text-black font-bold text-4xl mb-2">
              Fresh Smoothie & Summer Juice
            </h1>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim
              massa diam elementum.
            </p>
            <button className="bg-gray-800 text-white px-4 py-2 rounded">
              SHOP NOW
            </button>
          </div>
        </div>

        {/* Right column with sale items */}
        <div className="w-1/2 h-full flex flex-col gap-3">
          <div className="h-1/2 bg-green-100 p-4 rounded-lg flex items-center justify-between">
            <div>
              <h3 className="text-red-600 font-bold text-xl">20% Off</h3>
              <h4 className="text-black font-bold text-2xl">
                Fruits & Vegetables
              </h4>
              <p className="text-gray-600">
                Shop Collection <span>&gt;</span>
              </p>
            </div>
          </div>
          <div className="h-1/2 bg-pink-100 p-4 rounded-lg flex items-center justify-between">
            <div>
              <h3 className="text-red-600 font-bold text-xl">15% Off</h3>
              <h4 className="text-black font-bold text-2xl">Baked Products</h4>
              <p className="text-gray-600">
                Shop Collection <span>&gt;</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "20px 0px" }}>
        <CategoryList />
      </section>

      <ProductList />

      <h1>Ngày lễ hội</h1>
      <section className="flex gap-3 h-[300px] py-10">
        <div
          style={{ backgroundColor: "pink", height: "100%", width: "50%" }}
        ></div>
        <div
          style={{ backgroundColor: "pink", height: "100%", width: "50%" }}
        ></div>
      </section>
    <ContactForm/>
    </div>
  );
}
