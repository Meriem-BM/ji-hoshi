import React from "react";
import Styles from "~/styles/About.module.css";

export default function About() {
  return (
    <>
      <section className="bg-matcha-footer py-16 text-center">
        <p className="text-2xl font-bold leading-3">About JI'HOSHI 星</p>
        <p className="text-lg mt-6 max-w-2xl mx-auto">
          Hoshi was born out of a love for both matcha. We believe in sourcing
          the finest ingredients and providing tools for enthusiasts to enjoy
          their drinks at home.
        </p>
        <img
          src="/assets/images/matcha_cover.webp"
          alt="about"
          className="mt-12 mx-auto"
        />
      </section>
      <div className={Styles.wave}></div>
    </>
  );
}
