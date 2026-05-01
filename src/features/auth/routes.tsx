import { type RouteObject } from "react-router"

import { SignInPage } from "./pages/sign-in"
import { SignUpPage } from "./pages/sign-up"

export const authRoutes: RouteObject[] = [
  {
    path: "/sign-in",
    element: <SignInPage />,
  },
  {
    path: "/sign-up",
    element: <SignUpPage />,
  },
]
