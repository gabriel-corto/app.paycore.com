import { Wallet } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

export function DashboardPage() {
  return (
    <div className="flex h-full w-full flex-1 flex-col gap-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-zinc-800">Overview</h1>
        <p className="text-zinc-500">
          Here's what's happening with your account today.
        </p>
      </div>

      <div className="mt-5 grid grid-cols-4 gap-8">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 rounded-xl border border-zinc-200 p-5"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100">
              <HugeiconsIcon icon={Wallet} className="text-zinc-700" />
            </div>

            <div className="mt-1 flex items-center justify-between">
              <span className="text-neutral-800">Total Balance</span>
              <span className="text-2xl font-semibold text-neutral-800">
                AOA 0.00
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5">
        <div className="min-h-64 w-full rounded-xl border border-zinc-200 p-4">
          OI
        </div>
      </div>

      <div className="mt-5">
        <div className="min-h-64 w-full rounded-xl border border-zinc-200 p-4"></div>
      </div>
    </div>
  )
}
