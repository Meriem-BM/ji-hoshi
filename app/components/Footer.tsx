import React from "react";

export default function Footer() {
  return (
    <footer className="bg-brown-900 pt-8 pb-2 bg-matcha-footer mt-16">
      <div className="flex gap-4 justify-center items-center">
        <div className="flex flex-col gap-4 justify-center items-start w-1/3">
          <h3 className="text-3xl font-semibold text-start font-title">
            QUALITY IS OUR PRIORITY
          </h3>
        </div>
        <div className="border-black border-l-2 h-24"></div>
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold font-logo">JI'HOSHI</h3>
          <div className="flex gap-4">
            <a href="#" className="border border-black p-2 rounded-full">
              <img
                src="/assets/icons/twitter.svg"
                alt="twitter"
                className="w-4 h-4"
              />
            </a>
            <a href="#" className="border border-black p-2 rounded-full">
              <img
                src="/assets/icons/instagram.svg"
                alt="instagram"
                className="w-4 h-4"
              />
            </a>
            <a href="#" className="border border-black p-2 rounded-full">
              <img
                src="/assets/icons/whatsapp.svg"
                alt="whatsapp"
                className="w-4 h-4"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-start mt-8 px-4">
        <p className="text-sm font-light">© 2024 JI'HOSHI.</p>
        <p className="text-2xl font-signature">Meriem</p>
      </div>
    </footer>
  );
}
