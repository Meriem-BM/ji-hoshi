import { Outlet } from "@remix-run/react";

import SideBar from "~/components/admin-dashboard/Sidebar";

export default function Layout() {
  return (
    <main className="flex">
        <SideBar />
        <Outlet />
    </main>
  );
}