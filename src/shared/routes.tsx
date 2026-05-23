import { createBrowserRouter } from "react-router"
import { authRoutes } from "@/features/auth/routes"
import { AuthLayout } from "./layouts/auth"
import { AppLayout } from "./layouts/app"
import { walletRoutes } from "@/features/wallet/routes"
import { dashboardRoutes } from "@/features/dashboard/routes"

export const routes = createBrowserRouter([
  {
    path: "/a",
    element: <AuthLayout />,
    children: [...authRoutes],
  },
  {
    path: "/",
    element: <AppLayout />,
    children: [...dashboardRoutes, ...walletRoutes],
  },
])
