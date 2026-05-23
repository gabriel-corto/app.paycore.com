import { type RouteObject } from "react-router"
import { DashboardPage } from "./pages"

export const dashboardRoutes: RouteObject[] = [
  {
    path: "/",
    element: <DashboardPage />,
  },
]
