import { createBrowserRouter } from "react-router"
import { authRoutes } from "@/features/auth/routes"
import { AuthLayout } from "./layouts/auth"
import { AppLayout } from "./layouts/app"
import { walletRoutes } from "@/features/wallet/routes"

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [...authRoutes],
  },
  {
    path: "/w",
    element: <AppLayout />,
    children: [...walletRoutes],
  },
])
