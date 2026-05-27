import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react"
import { Link } from "react-router"

interface Props {
  label: string
  icon: IconSvgElement
  to: string
}

export function SidebarNavigationItem({ label, icon, to }: Props) {
  return (
    <Link
      to={to}
      className="flex cursor-pointer items-center gap-x-2 text-sidebar-foreground/60 duration-100 hover:text-sidebar-foreground"
    >
      <HugeiconsIcon icon={icon} className="h-5 w-5" />
      <span>{label}</span>
    </Link>
  )
}
