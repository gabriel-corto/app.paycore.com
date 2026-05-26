import { ArrowUpDownIcon, Wallet } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { WeeklyWalletTransactionChart } from "../components/weekly-wallet-transaction-chart"
import { SpendingByCategoryChart } from "../components/spending-by-category-chart"
import { SummaryCard } from "../components/summary-card"

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
          <SummaryCard
            key={index}
            title="Total Balance"
            value="AOA 0.00"
            icon={Wallet}
          />
        ))}
      </div>

      <div className="mt-5 grid grid-cols-9 gap-x-6">
        <WeeklyWalletTransactionChart />
        <SpendingByCategoryChart />
      </div>

      <div className="mt-5">
        <div className="min-h-64 w-full rounded-xl border border-zinc-200 p-4">
          <div className="flex items-center gap-x-2">
            <div className="flex items-center gap-x-2 rounded-md bg-zinc-100 p-2">
              <HugeiconsIcon
                icon={ArrowUpDownIcon}
                className="size-5 text-zinc-600"
              />
            </div>

            <h1 className="text-xs font-medium text-zinc-800">
              Recent (5) Transactions
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}
