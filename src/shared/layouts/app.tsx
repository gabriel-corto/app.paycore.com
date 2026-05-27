import { Outlet, useNavigate } from "react-router"

import { Header } from "../components/header"
import { Sidebar } from "../components/sidebar"
import { useEffect } from "react"
import { session } from "../utils/session-storage"

export function AppLayout() {
  const navigate = useNavigate()

  useEffect(() => {
    if (!session.get().userId || !session.get().walletId) {
      navigate("/a/sign-in", { replace: true })
    }
  }, [navigate])

  return (
    <div className="flex h-screen w-full">
      <Sidebar />

      <div className="w-full flex-1 pl-56">
        <Header />

        <div className="px-8 pt-24">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
