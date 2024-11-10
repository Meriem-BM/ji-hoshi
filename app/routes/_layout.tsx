import { Outlet } from "@remix-run/react";

import Header from "~/components/Header";
import Footer from "~/components/Footer";

export default function Layout() {
  return (
    <main className="flex flex-col gap-24">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}

