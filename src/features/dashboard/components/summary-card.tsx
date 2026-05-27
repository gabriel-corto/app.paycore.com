import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react"

interface SummaryCardProps {
  title: string
  value: string
  icon: IconSvgElement
}

export function SummaryCard({ title, value, icon }: SummaryCardProps) {
  return (
    <div className="flex h-24 flex-col gap-2 rounded-lg border border-border p-5 bg-card backdrop-blur-sm">
      <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-muted">
        <HugeiconsIcon icon={icon} className="size-3 text-muted-foreground" />
      </div>

      <div className="flex flex-col">
        <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
          {title}
        </span>
        <span className="text-xl font-bold text-card-foreground">{value}</span>
      </div>
    </div>
  )
}
