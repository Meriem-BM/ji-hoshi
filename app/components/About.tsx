export default function About() {
  return (
    <>
      <section className="py-16 text-center w-[80%] mx-auto">
        <p className="text-2xl font-bold leading-3">About <span className="font-logo">JI'HOSHI</span> 星</p>
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
    </>
  );
}
