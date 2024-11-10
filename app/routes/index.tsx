import Hero from "~/components/Hero";
import ProductList from "~/components/ProductList";
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
    <main className="flex flex-col gap-24">
        <Hero />
        <About />
        <ProductList />
        <Feedbacks />
    </main>
  );
}

