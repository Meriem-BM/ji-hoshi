import { FC } from "react";
import { Link } from "@remix-run/react";
import { IProduct } from "~/types";
import { StarIcon } from "./icons";
import { baseColors } from "~/lib/constants";

const ProductCard: FC<{ product: IProduct }> = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="max-w-[384px] mx-auto">
      <section className="p-5 py-4 text-start transform duration-500 hover:-translate-y-2 cursor-pointer rounded-lg">
        <img
          src="/assets/images/matcha-can-1.webp"
          alt=""
          className="relative w-80 h-80 mx-auto"
        />
        <div className="absolute flex flex-col gap-2 top-5 right-5">
          {[...Array(5)].map((_, index) => (
            <StarIcon key={index} color={baseColors.stars[1]} />
          ))}
        </div>
        <div className="flex flex-col justify-between bottom-0 left-0 w-full text-black">
          <h1 className="text-2xl my-2 leading-none font-medium">
            Pure Matcha Powder
          </h1>
          <h2 className="font-bold text-3xl font-price">
            29.99
            <span className="text-lg font-normal ml-1 leading-3">MAD</span>
          </h2>
        </div>
      </section>
    </Link>
  );
};

export default ProductCard;
