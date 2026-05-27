import { Wallet, WalletAdd01Icon } from "@hugeicons/core-free-icons"
import { useAuth } from "@/shared/hooks/useAuth"

import { WeeklyWalletTransactionChart } from "../components/weekly-wallet-transaction-chart"
import { WalletOverviewCard } from "../../../shared/components/card/wallet-overview-card"
import { SummaryCard } from "../components/summary-card"
import { LastTransactionsTable } from "../components/last-transaction-table"
import { getFirstName } from "@/shared/utils/name-formatter"
import { Button } from "@/shared/components/ui/button"
import { HugeiconsIcon } from "@hugeicons/react"
import { WalletDepositDialog } from "@/shared/components/dialog/wallet-deposit-dialog"
import { useState } from "react"

export function DashboardPage() {
  const { user } = useAuth()
  const [walletDepositDialog, setWalletDepositDialog] = useState(false)

  return (
    <div className="flex h-full w-full flex-1 flex-col gap-y-8">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            {user ? `Welcome back, ${getFirstName(user?.name)}!` : "Overview"}
          </h1>
          <p className="text-sm text-muted-foreground">
            Here's what's happening with your account today.
          </p>
        </div>

        <div>
          <Button
            onClick={() => setWalletDepositDialog(true)}
            className="font-semibold text-white"
          >
            <HugeiconsIcon icon={WalletAdd01Icon} className="h-7 w-7" />
            Deposit
          </Button>
        </div>
      </div>

      <div className="mt-2 grid grid-cols-4 gap-8">
        {Array.from({ length: 4 }).map((_, index) => (
          <SummaryCard
            key={index}
            title="Total Balance"
            value="AOA 0.00"
            icon={Wallet}
          />
        ))}
      </div>

      <div className="mt-2 grid grid-cols-9 gap-x-6">
        <WeeklyWalletTransactionChart />
        <WalletOverviewCard />
      </div>

      <div className="mt-2 h-fit">
        <div className="min-h-fit w-full rounded-xl border border-border bg-card p-4 backdrop-blur-sm">
          <LastTransactionsTable />
        </div>
      </div>

      <WalletDepositDialog
        open={walletDepositDialog}
        onOpenChange={setWalletDepositDialog}
      />
    </div>
  )
}
