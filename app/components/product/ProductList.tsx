import { Link } from "@remix-run/react";
import ProductFilter from "./ProductFilter";

// Mock data for products
const products = [
  {
    name: "Matcha Latte",
    price: "74.99",
    image: "https://anatae.fr/cdn/shop/files/matcha-latte-4.png?v=1691077453",
  },
  {
    name: "Matcha Tea",
    price: "25",
    image:
      "https://cdn.shopify.com/s/files/1/0453/2102/7750/files/bloc-matcha-ceremonie-claims-2_600x600.png?v=1706019339",
  },
  {
    name: "Matcha Ceremonial",
    price: "199.99",
    image:
      "https://www.letempsdunebox.com/wp-content/uploads/2023/08/ISIMG-900819.jpeg",
    discount: "20%",
  },
  {
    name: "Matcha Tea",
    price: "49.99",
    image:
      "https://iswari.s3.eu-west-3.amazonaws.com/products/6b7bxn-iced%20matcha%20latte-5.jpg",
  },
  {
    name: "Matcha Latte",
    price: "89.99",
    image:
      "https://matcha-karu.com/cdn/shop/articles/Fertiger_Tee_1.webp?v=1692012147",
  },
  {
    name: "Matcha Tea",
    price: "45.50",
    image:
      "https://matchaandco.fr/cdn/shop/files/MatchaOriginal_92bac45c-f463-4ed1-bbbe-abe8acf23efd.jpg?v=1705577251",
  },
  {
    name: "Powdered Matcha",
    price: "74.99",
    image: "https://anatae.fr/cdn/shop/files/matcha-latte-4.png?v=1691077453",
  },
  {
    name: "Can of Matcha Tea",
    price: "25",
    image:
      "https://cdn.shopify.com/s/files/1/0453/2102/7750/files/bloc-matcha-ceremonie-claims-2_600x600.png?v=1706019339",
  },
  {
    name: "Matcha Ceremonial",
    price: "199.99",
    image:
      "https://www.letempsdunebox.com/wp-content/uploads/2023/08/ISIMG-900819.jpeg",
    discount: "20%",
  },
  {
    name: "Matcha Latte",
    price: "49.99",
    image:
      "https://iswari.s3.eu-west-3.amazonaws.com/products/6b7bxn-iced%20matcha%20latte-5.jpg",
  },
  {
    name: "Matcha Tea",
    price: "89.99",
    image:
      "https://matcha-karu.com/cdn/shop/articles/Fertiger_Tee_1.webp?v=1692012147",
  },
  {
    name: "Matcha Tea",
    price: "45.50",
    image:
      "https://matchaandco.fr/cdn/shop/files/MatchaOriginal_92bac45c-f463-4ed1-bbbe-abe8acf23efd.jpg?v=1705577251",
  },
];

const ProductList = () => {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope font-bold text-3xl sm:text-4xl text-matcha-100 mb-8 text-center font-title">
          Available Products
        </h2>
        <ProductFilter />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Link to={`/product/${index}`} className="max-w-[384px] mx-auto" key={index}>
              <div className="w-full aspect-square relative">
                <img
                  src={product.image}
                  alt={`${product.name} image`}
                  className="w-full h-full rounded-xl object-cover"
                />
                {product.discount && (
                  <span className="py-1 sm:py-0.5 px-2 sm:px-4 cursor-pointer rounded-md bg-gradient-to-tr from-matcha-300 to-matcha-100 font-medium text-base leading-7 text-white absolute top-3 right-3 z-10">
                    {product.discount} Off
                  </span>
                )}
              </div>
              <div className="mt-5 flex items-center justify-between">
                <div>
                  <h6 className="font-medium text-xl leading-8 text-black mb-2">
                    {product.name}
                  </h6>
                  <h6 className="font-semibold text-xl leading-8 text-matcha-100 font-price">
                    {product.price} MAD
                  </h6>
                </div>
                <button className="p-2 sm:p-4 rounded-full bg-white border border-gray-300 flex items-center justify-center group shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-400 hover:bg-gray-50">
                  <svg
                    className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                  >
                    <path
                      d="M12.6892 21.125C12.6892 22.0225 11.9409 22.75 11.0177 22.75C10.0946 22.75 9.34632 22.0225 9.34632 21.125M19.3749 21.125C19.3749 22.0225 18.6266 22.75 17.7035 22.75C16.7804 22.75 16.032 22.0225 16.032 21.125M4.88917 6.5L6.4566 14.88C6.77298 16.5715 6.93117 17.4173 7.53301 17.917C8.13484 18.4167 8.99525 18.4167 10.7161 18.4167H18.0056C19.7266 18.4167 20.587 18.4167 21.1889 17.9169C21.7907 17.4172 21.9489 16.5714 22.2652 14.8798L22.8728 11.6298C23.3172 9.25332 23.5394 8.06508 22.8896 7.28254C22.2398 6.5 21.031 6.5 18.6133 6.5H4.88917ZM4.88917 6.5L4.33203 3.25"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
