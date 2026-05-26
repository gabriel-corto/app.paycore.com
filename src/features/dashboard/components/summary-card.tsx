import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react"

interface SummaryCardProps {
  title: string
  value: string
  icon: IconSvgElement
}

export function SummaryCard({ title, value, icon }: SummaryCardProps) {
  return (
    <div className="flex flex-col gap-2 rounded-xl border border-zinc-200 p-5">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100">
        <HugeiconsIcon icon={icon} className="text-zinc-700" />
      </div>

      <div className="mt-1 flex items-center justify-between">
        <span className="text-neutral-800">{title}</span>
        <span className="text-2xl font-semibold text-neutral-800">{value}</span>
      </div>
    </div>
  )
}
