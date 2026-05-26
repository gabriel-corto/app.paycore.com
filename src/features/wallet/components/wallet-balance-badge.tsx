import { Badge } from "@/shared/components/ui/badge"
import { useWallet } from "../hooks/useWallet"
import { Loading03Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { moneyFormatter } from "@/shared/utils/formatter"

export function WalletBalanceBadge() {
  const { walletBalance, isWalletBalanceLoading } = useWallet()

  return (
    <Badge variant="destructive" className="rounded-sm p-4 font-semibold">
      {isWalletBalanceLoading || !walletBalance ? (
        <HugeiconsIcon icon={Loading03Icon} className="h-4 w-4" />
      ) : (
        moneyFormatter(walletBalance.balance)
      )}
    </Badge>
  )
}
