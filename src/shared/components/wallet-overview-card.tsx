import { Logo } from "@/shared/components/logo"
import { useWallet } from "@/features/wallet/hooks/useWallet"
import { moneyFormatter } from "@/shared/utils/formatter"
import { Loading03Icon, WifiFullSignalIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { useAuth } from "@/shared/hooks/useAuth"
import { cn } from "../lib/utils"

interface Props {
  className?: string
}

export function WalletOverviewCard({ className }: Props) {
  const { walletBalance, isWalletBalanceLoading } = useWallet()
  const { user } = useAuth()

  return (
    <>
      {isWalletBalanceLoading ? (
        <div className="group relative col-span-4 flex h-full flex-col items-center justify-center gap-y-6 overflow-hidden rounded-2xl border border-border bg-card p-6">
          <HugeiconsIcon
            icon={Loading03Icon}
            className="size-10 animate-spin text-muted-foreground"
          />
        </div>
      ) : (
        <div
          className={cn(
            "group relative col-span-4 flex flex-col gap-y-6 overflow-hidden rounded-lg bg-linear-to-br from-[#7e57c2] via-[#673ab7] to-[#4527a0] p-6 transition-all duration-300 hover:scale-[1.01]",
            className
          )}
        >
          <div className="pointer-events-none absolute -top-12 -right-12 opacity-[0.1] transition-opacity duration-700 group-hover:opacity-[0.15]">
            <div className="scale-[4] rotate-25 brightness-0 grayscale invert">
              <Logo apparence="dark" />
            </div>
          </div>

          <div className="z-10 flex items-start justify-between">
            <div className="space-y-1">
              <p className="text-[10px] font-bold tracking-[0.2em] text-white/50 uppercase">
                Current Balance
              </p>
              <h2 className="flex items-center gap-x-3 text-4xl font-extrabold tracking-tight text-white drop-shadow-md">
                {isWalletBalanceLoading || !walletBalance
                  ? "---"
                  : moneyFormatter(walletBalance.balance)}
              </h2>
            </div>

            <div className="flex flex-col items-end gap-y-2 opacity-90 drop-shadow-lg">
              <Logo apparence="dark" />
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <div className="relative h-12 w-16 overflow-hidden rounded-md bg-linear-to-br from-amber-200 via-amber-400 to-amber-200 p-0.5 shadow-lg">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.4),transparent)]" />
              <div className="relative h-full w-full rounded-md border border-black/10 bg-amber-400/20 shadow-inner">
                <div className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-black/5" />
                <div className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-black/5" />
              </div>
            </div>

            <HugeiconsIcon
              icon={WifiFullSignalIcon}
              className="size-8 -rotate-90 text-white/40 drop-shadow-md"
            />
          </div>

          <div className="z-10 mt-auto space-y-6">
            <div className="flex items-center gap-x-5 text-xl font-medium tracking-[0.25em] text-white/60">
              <span className="drop-shadow-sm">****</span>
              <span className="drop-shadow-sm">****</span>
              <span className="drop-shadow-sm">****</span>
              <span className="font-bold text-white drop-shadow-md">8842</span>
            </div>

            <div className="flex items-end justify-between">
              <div className="space-y-1">
                <p className="text-[9px] font-bold tracking-[0.15em] text-white/50 uppercase">
                  Card Holder
                </p>
                <p className="text-sm font-semibold tracking-wide text-white drop-shadow-md">
                  {user?.name?.toUpperCase()}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
