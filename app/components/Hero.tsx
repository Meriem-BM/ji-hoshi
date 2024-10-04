import React from "react";

export default function Hero() {
  return (
    <section className="py-32 text-center text-white h-[100vh] flex flex-col justify-center gap-32">
      <h2 className="text-5xl font-bold text-matcha-100 uppercase">
        Discover our products
      </h2>
      <div className="flex justify-evenly">zab
        <div className="flex flex-col items-center gap-4">x
          <div className="relativ flex h-80 items-end mb-6">
            <img src="/assets/images/matcha-pack.png" alt="hero" />
          </div>
          <p className="text-2xl font-bold uppercase text-matcha-100">JI’COFFEE BEANS</p>
          <p className="text-lg font-light text-matcha-700 w-64">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="mt-4 bg-matcha-100 text-white px-4 py-2 rounded-lg">
            Shop now
          </button>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="relative flex h-80 items-end mb-6">
            <img src="/assets/images/matcha-set.png" alt="hero" />
          </div>
          <p className="text-2xl font-bold uppercase text-matcha-100">JI’MATCHA SET</p>
          <p className="text-lg font-light text-matcha-700 w-64">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="mt-4 bg-matcha-100 text-white px-4 py-2 rounded-lg">
            Shop now
          </button>
        </div>
      </div>
    </section>
  );
}
