import { type RouteObject } from "react-router"
import { DashboardPage } from "./pages/dashboard"

export const walletRoutes: RouteObject[] = [
  {
    path: "",
    element: <DashboardPage />,
  },
]
