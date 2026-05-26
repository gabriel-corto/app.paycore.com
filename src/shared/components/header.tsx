import { DashboardCircleRemoveIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { Badge } from "./ui/badge"

export function Header() {
  return (
    <div className="fixed flex w-[calc(100%-14rem)] items-center justify-between border-b border-r-zinc-200 bg-white/60 p-4 backdrop-blur-xs">
      <div className="flex items-center gap-x-2 text-zinc-800">
        <HugeiconsIcon icon={DashboardCircleRemoveIcon} className="h-5 w-5" />
        <h1 className="text-xl font-medium">Dashboard</h1>
      </div>

      <div>
        <Badge variant="destructive" className="rounded-sm px-4 py-3">
          AOA 0.00
        </Badge>
      </div>
    </div>
  )
}
