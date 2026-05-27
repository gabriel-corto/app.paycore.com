import { Badge } from "@/shared/components/ui/badge"
import { useWallet } from "../hooks/useWallet"
import { Loading03Icon, Wallet02Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { moneyFormatter } from "@/shared/utils/formatter"

export function WalletBalanceBadge() {
  const { walletBalance, isWalletBalanceLoading } = useWallet()

  return (
    <Badge className="rounded-sm bg-emerald-100 p-4 text-sm font-bold text-emerald-500">
      {isWalletBalanceLoading || !walletBalance ? (
        <HugeiconsIcon icon={Loading03Icon} className="h-4 w-4 animate-spin" />
      ) : (
        <>
          <HugeiconsIcon icon={Wallet02Icon} className="h-5 w-5" />
          {moneyFormatter(walletBalance.balance)}
        </>
      )}
    </Badge>
  )
}
