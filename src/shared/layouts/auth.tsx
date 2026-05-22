import { Outlet } from "react-router"

import { Logo } from "../components/logo"

export function AuthLayout() {
  return (
    <div className="flex h-screen w-full items-center gap-x-10 border-t-4 sm:border-t-0 lg:p-5">
      <div className="flex h-full w-full flex-col lg:w-1/2">
        <div className="hidden w-full items-center justify-start p-5 lg:flex">
          <Logo />
        </div>

        <div className="flex w-full flex-1 flex-col items-center justify-center">
          <div className="flex w-full flex-col items-center justify-center text-center lg:max-w-md">
            <div className="flex w-full items-center justify-center lg:hidden">
              <Logo />
            </div>

            <Outlet />
          </div>
        </div>
      </div>

      <div className="hidden w-1/2 items-center justify-center rounded-xl border bg-primary lg:flex">
        <img src="/images/wallet.svg" alt="" className="w-full" />
      </div>
    </div>
  )
}
