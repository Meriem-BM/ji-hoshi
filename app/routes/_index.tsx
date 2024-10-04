import React from "react";
import Hero from "~/components/Hero";
import ProductList from "~/components/ProductList";
import Footer from "~/components/Footer";
import About from "~/components/About";
import Feedbacks from "~/components/Feedbacks";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Toshi Blend" },
    { name: "description", content: "Toshi Blend" },
    { name: "keywords", content: "matcha, coffee, barista" },
  ];
};

export default function Index() {
  return (
    <main>
        <Hero />
        <About />
        <ProductList />
        <Feedbacks />
        <Footer />
    </main>
  );
}