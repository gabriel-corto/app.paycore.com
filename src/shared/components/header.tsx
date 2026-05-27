import { DashboardCircleRemoveIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { WalletBalanceBadge } from "@/features/wallet/components/wallet-balance-badge"

export function Header() {
  return (
    <div className="fixed z-50 flex w-[calc(100%-14rem)] items-center justify-between border-b border-border bg-background/80 px-8 py-5 backdrop-blur-md">
      <div className="flex items-center gap-x-3 text-foreground">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
          <HugeiconsIcon
            icon={DashboardCircleRemoveIcon}
            className="h-5 w-5 text-primary"
          />
        </div>
        <h1 className="text-lg font-bold tracking-tight">Overview</h1>
      </div>

      <div>
        <WalletBalanceBadge />
      </div>
    </div>
  )
}
