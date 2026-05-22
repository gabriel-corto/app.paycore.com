import { Outlet } from "react-router"

import { DashboardCircleRemoveIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Sidebar } from "../components/sidebar"

export function AppLayout() {
  return (
    <div className="flex h-screen w-full">
      <Sidebar />

      <div className="w-full flex-1">
        <div className="flex items-center justify-between border-b border-r-zinc-200 p-4">
          <div className="flex items-center gap-x-2 text-zinc-800">
            <HugeiconsIcon
              icon={DashboardCircleRemoveIcon}
              className="h-5 w-5"
            />
            <h1 className="text-xl font-medium">Dashboard</h1>
          </div>

          <div></div>
        </div>

        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
