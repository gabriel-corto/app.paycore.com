import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react"

interface Props {
  label: string
  icon: IconSvgElement
}

export function SidebarNavigationItem({ label, icon }: Props) {
  return (
    <div className="flex cursor-pointer items-center gap-x-2 text-zinc-600 duration-100 hover:text-primary-foreground">
      <HugeiconsIcon icon={icon} className="h-5 w-5" />
      <span>{label}</span>
    </div>
  )
}
