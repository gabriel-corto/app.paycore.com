import { Outlet } from "react-router"

export function AppLayout() {
  return (
    <div>
      <h1>Helo World</h1>
      <Outlet />
    </div>
  )
}
