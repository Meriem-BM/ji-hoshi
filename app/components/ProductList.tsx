import React from "react";
import ProductCard from "./ProductCard";
import { IProduct } from "~/types";
import { RightArrowIcon } from "./icons/RightArrow";

export default function ProductList() {
  const products: IProduct[] = [
    {
      img: "matcha.jpg",
      title: "Premium Matcha",
      description: "Rich, smooth, and vibrant matcha powder from Japan.",
    },
    {
      img: "coffee.jpg",
      title: "Single-Origin Coffee Beans",
      description: "Specialty coffee beans, roasted to perfection.",
    },
    {
      img: "tools.jpg",
      title: "Barista Tools",
      description: "Tools for making your perfect matcha or coffee drink.",
    },
  ];

  return (
    <>
      <div className="px-20 text-5xl font-medium text-black mb-44 font-poppins-italic w-[60%] mx-auto text-center">
        Wellcome to Toshi Blend, your one-stop shop for all things matcha.
      </div>
      <section className="flex flex-wrap justify-around my-12">
        {products.map((product) => (
          <ProductCard key={product.title} product={product} />
        ))}
      </section>
      <div className="flex justify-center mt-24">
        <button className="flex justify-center gap-2 text-matcha-700 px-4 py-2 rounded-md border border-matcha-700 hover:bg-matcha-700 hover:text-white">
          Shop now
          <span className="animate-fade-right">
            <RightArrowIcon />
          </span>
        </button>
      </div>
    </>
  );
}