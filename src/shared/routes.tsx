import { createBrowserRouter } from "react-router"
import { authRoutes } from "@/features/auth/routes"
import { AuthLayout } from "./layouts/auth"

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [...authRoutes],
  },
])
