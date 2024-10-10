import { useState } from "react";
import { Link } from "@remix-run/react";

export default function Header() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className="sticky top-0 text-black flex justify-between items-center px-8 py-4 bg-background-primary z-50">
        <div className="flex justify-center font-bolder text-4xl text-matcha-100 items-center gap-2 font-logo">
          <Link to="/">JI'HOSHI</Link>
        </div>

        <div className="hidden md:flex justify-start gap-8 font-poppins text-base font-light text-matcha-700 leading-3">
          <Link to="/" className="hover:text-matcha-600">
            Home
          </Link>
          <Link to="/products" className="hover:text-matcha-600">
            Products
          </Link>
          <Link to="/blog" className="hover:text-matcha-600">
            Blog
          </Link>
        </div>

        <div className="flex items-center justify-end gap-4">
          <img
            src="/assets/icons/user.svg"
            alt="user"
            className="w-6 h-6 hidden md:block"
          />
          <img src="/assets/icons/bag.svg" alt="cart" className="w-5 h-5" />
          <button onClick={toggleSidebar} className="md:hidden">
            <img src="/assets/icons/menu.svg" alt="menu" className="w-6 h-6" />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-y-0 left-0 w-64 bg-matcha-700 text-white transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 md:hidden`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h1 className="text-xl font-bold">Menu</h1>
          <button onClick={toggleSidebar}>
            <img
              src="/assets/icons/close.svg"
              alt="close"
              className="w-6 h-6"
            />
          </button>
        </div>
        <nav className="p-4 space-y-4">
          <Link
            to="/"
            className="block hover:text-gray-400"
            onClick={toggleSidebar}
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="block hover:text-gray-400"
            onClick={toggleSidebar}
          >
            Shop
          </Link>
        </nav>
      </div>
    </>
  );
}
