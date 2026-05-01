import { QueryClientProvider } from "@tanstack/react-query"
import { RouterProvider } from "react-router"
import { ToastContainer } from "react-toastify"

import { routes } from "./shared/routes"
import { queryClient } from "./shared/lib/react-query"

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routes} />
      <ToastContainer position="bottom-right" theme="colored" />
    </QueryClientProvider>
  )
}
