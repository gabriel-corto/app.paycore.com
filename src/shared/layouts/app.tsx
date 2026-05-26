import { Outlet } from "react-router"

import { Header } from "../components/header"
import { Sidebar } from "../components/sidebar"

export function AppLayout() {
  return (
    <div className="flex h-screen w-full">
      <Sidebar />

      <div className="w-full flex-1 pl-56">
        <Header />

        <div className="p-4 pt-20">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
