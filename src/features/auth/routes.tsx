import { type RouteObject } from "react-router"

import { SignInPage } from "./pages/sign-in"
import { SignUpPage } from "./pages/sign-up"

export const authRoutes: RouteObject[] = [
  {
    path: "/a/sign-in",
    element: <SignInPage />,
  },
  {
    path: "/a/sign-up",
    element: <SignUpPage />,
  },
]
