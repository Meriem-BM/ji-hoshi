import { Outlet } from "@remix-run/react";

import SideBar from "~/components/admin-dashboard/Sidebar";

export default function Layout() {
  return (
    <main className="flex">
      <SideBar />
      <div className="w-full p-8">
        <Outlet />
      </div>
    </main>
  );
}
