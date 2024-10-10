import { useState } from "react";
import { ProductReview } from "./ProductReview";
import { StarIcon } from "../icons/Star";
import {HeartIcon} from "../icons/Heart";

export const ProductDetails = () => {
  const images = [
    "https://healthylittlevittles.com/wp-content/uploads/2023/06/Copycat-Starbucks-Dairy-Free-Iced-Matcha-Latte-3-540x720.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/d/d9/Matcha_Scoop.jpg",
    "https://marvel-b1-cdn.bc0a.com/f00000000209353/www.whittard.co.uk/dw/image/v2/BCGT_PRD/on/demandware.static/-/Sites-whittard-master-catalog/default/dw68659ec3/images/hi-res/324038-matcha_tin-1-2021.jpeg?sw=2000&sh=2000&sm=fit",
    "https://www.fitmittenkitchen.com/wp-content/uploads/2023/03/Iced-Matcha-Latte-Recipe-6.jpg",
    "https://matcha-karu.com/cdn/shop/articles/Fertiger-Matcha-Tee.jpg?v=1588186962",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const handleThumbClick = (index: number) => {
    setCurrentImage(index);
  };

  return (
    <section className="py-24">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 mb-36">
          <div className="flex flex-row-reverse w-full h-fit mx-auto lg:mx-0 gap-8">
            {/* Main Image */}
            <div className="mb-6">
              <img
                src={images[currentImage]}
                alt="Summer Travel Bag"
                className="mx-auto rounded-2xl object-cover size-[800px]"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="flex flex-col gap-3 justify-center">
              {images.map((image, index) => (
                <div
                  key={index}
                  onClick={() => handleThumbClick(index)}
                  className={`cursor-pointer rounded-xl overflow-hidden border-2 transition-all duration-500 ${
                    currentImage === index
                      ? "border-matcha-300"
                      : "border-transparent"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Summer Travel Bag ${index + 1}`}
                    className="w-20 h-20 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="flex justify-center items-start">
            <div className="w-full max-lg:max-w-[608px] lg:pl-8 xl:pl-16 mx-auto mt-8">
              <div className="flex items-center justify-between gap-6 mb-6">
                <div className="text">
                  <h2 className="font-bold text-3xl text-gray-900 mb-2 font-title">
                    Single-Origin Matcha Powder
                  </h2>
                  <p className="text-base text-gray-500">Organic Matcha</p>
                </div>
                <button className="group transition-all duration-500 p-0.5"></button>
              </div>

              <div className="flex flex-col min-[400px]:flex-row items-center mb-8 gap-y-3">
                <div className="flex items-center">
                  <h5 className="text-2xl font-bold text-gray-900 font-price">
                    199.00 MAD
                  </h5>
                  <span className="ml-3 text-lg line-through text-gray-400 font-price">
                    299.00 MAD
                  </span>
                  <span className="ml-3 text-lg text-matcha-300">30% off</span>
                </div>
                <svg
                  className="mx-5 hidden min-[400px]:block"
                  xmlns="http://www.w3.org/2000/svg"
                  width="2"
                  height="36"
                  viewBox="0 0 2 36"
                  fill="none"
                >
                  <path d="M1 0V36" stroke="#E5E7EB" />
                </svg>
                <button className="flex items-center gap-1 rounded-lg bg-amber-400 py-1.5 px-2.5">
                  <StarIcon size={20} color="white" />
                  <span className="text-base font-medium text-white">4.8</span>
                </button>
              </div>
              {/* size selector */}
              <div className="flex flex-col gap-3 mb-6">
                <span className="text-sm text-gray-500">Size (<span className="text-gray-900 px-0.5">g</span>):</span>
                <div className="flex items-center gap-2">
                  <button className="w-12 h-6 rounded-lg border-2 border-matcha-300 flex items-center justify-center">
                    40
                  </button>
                  <button className="w-12 h-6 rounded-lg border border-gray-300 flex items-center justify-center">
                    60
                  </button>
                  <button className="relative w-12 h-6 rounded-lg border border-gray-300 flex items-center justify-center bg-gray-100 pointer-events-none text-gray-500 opacity-50">
                    100
                  </button>
                </div>
              </div>
              {/* quantity selector */}
              <div className="flex flex-col gap-3 mb-6">
                <span className="text-sm text-gray-500">Quantity:</span>
                <div className="flex items-center">
                  <div className="flex justify-between items-center gap-4 border border-gray-300 rounded-lg px-2 py-2">
                    <button className="w-6 h-6 rounded-lgflex items-center justify-center">
                      -
                    </button>
                    <span className="text-base font-semibold text-gray-900">
                      1
                    </span>
                    <button className="w-6 h-6 rounded-lg flex items-center justify-center">
                      +
                    </button>
                  </div>
                </div>
              </div>
              {/* Add to cart button */}
              <div className="flex items-center gap-4">
                <button className="w-full py-3 rounded-lg bg-matcha-300 text-white font-semibold text-lg">
                  Add to cart
                </button>
                <button className="w-12 h-12 rounded-lg border border-gray-300 flex items-center justify-center">
                  <HeartIcon color="#FA5F55" />
                </button>
              </div>
              <div className="flex flex-col gap-6 mt-8">
                <h3 className="text-xl font-semibold text-gray-900">
                  Description
                </h3>
                <p className="text-base text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean euismod bibendum laoreet. Proin gravida dolor sit amet
                  lacus accumsan et viverra justo commodo. Proin sodales
                  pulvinar sic tempor. Sociis natoque penatibus et magnis dis
                  parturient montes, nascetur ridiculus mus.
                </p>
                <h3 className="text-xl font-semibold text-gray-900">Details</h3>
                <p className="text-base text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean euismod bibendum laoreet. Proin gravida dolor sit amet
                  lacus accumsan et viverra justo commodo. Proin sodales
                  pulvinar sic tempor. Sociis natoque penatibus et magnis dis
                  parturient montes, nascetur ridiculus mus.
                </p>
                <h3 className="text-xl font-semibold text-gray-900">
                  Shipping
                </h3>
                <p className="text-base text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean euismod bibendum laoreet. Proin gravida dolor sit amet
                  lacus accumsan et viverra justo commodo. Proin sodales
                  pulvinar sic tempor. Sociis natoque penatibus et magnis dis
                  parturient montes, nascetur ridiculus mus.
                </p>
                <h3 className="text-xl font-semibold text-gray-900">
                  How to use
                </h3>
                <p className="text-base text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean euismod bibendum laoreet. Proin gravida dolor sit amet
                  lacus accumsan et viverra justo commodo. Proin sodales
                  pulvinar sic tempor. Sociis natoque penatibus et magnis dis
                  parturient montes, nascetur ridiculus mus.
                </p>
              </div>
            </div>
          </div>
        </div>
        <ProductReview />
      </div>
    </section>
  );
};
