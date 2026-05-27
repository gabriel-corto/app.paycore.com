import { Outlet } from "react-router"

import { Logo } from "../components/logo"
import { useTheme } from "../components/theme-provider"

export function AuthLayout() {
  const { theme } = useTheme()

  return (
    <div className="flex h-screen w-full items-center gap-x-10 border-t-4 border-primary bg-background sm:border-t-0 lg:p-5">
      <div className="flex h-full w-full flex-col lg:w-1/2">
        <div className="hidden w-full items-center justify-start p-10 lg:flex">
          <Logo apparence={theme === "dark" ? "dark" : "light"} />
        </div>

        <div className="flex w-full flex-1 flex-col items-center justify-center p-6">
          <div className="flex w-full flex-col items-center justify-center text-center lg:max-w-md">
            <div className="mb-10 flex w-full items-center justify-center lg:hidden">
              <Logo apparence={theme === "dark" ? "dark" : "light"} />
            </div>

            <Outlet />
          </div>
        </div>
      </div>

      <div className="mr-5 hidden w-1/2 items-center justify-center overflow-hidden rounded-3xl border border-primary/20 bg-linear-to-br from-primary via-primary/80 to-primary/60 shadow-2xl lg:flex">
        <div className="relative flex h-full w-full items-center justify-center p-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent)]" />
          <img
            src="/images/wallet.svg"
            alt="Wallet Illustration"
            className="z-10 w-full drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  )
}
