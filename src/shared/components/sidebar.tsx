import { Logo } from "./logo"

import {
  ArrowDataTransferHorizontalIcon,
  DashboardCircleRemoveIcon,
  Wallet02Icon,
} from "@hugeicons/core-free-icons"

import { SidebarNavigationItem } from "../components/sidebar-navigation-item"
import { AccountMenu } from "./account-menu"

export function Sidebar() {
  return (
    <aside className="fixed flex h-full w-56 flex-col justify-between border-r border-zinc-200 p-4">
      <div className="flex flex-col">
        <Logo />

        <div className="mt-7 flex flex-col gap-y-7">
          <SidebarNavigationItem
            label="Overview"
            icon={DashboardCircleRemoveIcon}
          />

          <SidebarNavigationItem label="Wallet" icon={Wallet02Icon} />

          <SidebarNavigationItem
            label="P2P"
            icon={ArrowDataTransferHorizontalIcon}
          />
        </div>
      </div>

      <AccountMenu />
    </aside>
  )
}
