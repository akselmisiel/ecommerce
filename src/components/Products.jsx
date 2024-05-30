import React from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <section className="w-full flex flex-col items-center">
      <div className="text-center mb-12 ">
        <p className="text-neutral-500 text-2xl font-normal font-['Montserrat']">
          Featured Products
        </p>
        <h2 className="text-slate-800 text-2xl font-bold font-['Montserrat']">
          BESTSELLER PRODUCTS
        </h2>
        <p className="text-neutral-500 text-sm font-normal font-['Montserrat']">
          Problems trying to resolve the conflict between
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 md:flex-row">
        <ProductCard
          imgSrc="https://i.ibb.co/1JdGvmk/product-cover-5.png"
          price="16.48"
        />
        <ProductCard
          imgSrc="https://i.ibb.co/1JdGvmk/product-cover-5.png"
          price="16.48"
        />
      </div>
    </section>
  );
};

export default Products;
