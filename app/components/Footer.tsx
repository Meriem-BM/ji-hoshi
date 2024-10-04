import React from "react";

export default function Footer() {
  return (
    <footer className="flex bg-brown-900 py-6 bg-matcha-footer gap-4 justify-center items-center mt-16">
      <div className="flex flex-col gap-4 justify-center items-start w-1/3">
        <h3 className="text-3xl font-semibold text-start">
          QUALITY IS OUR PRIORITY
        </h3>
      </div>
      <div className="border-black border-l-2 h-24"></div>
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">JI'MOSHI</h3>
        <div className="flex gap-4">
          <a href="#" className="text-white border border-black p-2 rounded-full">
            <img src="/assets/icons/twitter.svg" alt="twitter" className="w-4 h-4" />
          </a>
          <a href="#" className="text-white border border-black p-2 rounded-full">
            <img src="/assets/icons/instagram.svg" alt="instagram" className="w-4 h-4" />
          </a>
          <a href="#" className="text-white border border-black p-2 rounded-full">
            <img src="/assets/icons/whatsapp.svg" alt="whatsapp" className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
