import { Logo } from "./logo"

import {
  ArrowDataTransferHorizontalIcon,
  DashboardCircleRemoveIcon,
} from "@hugeicons/core-free-icons"

import { SidebarNavigationItem } from "./sidebar-navigation-item"
import { AccountMenu } from "./account-menu"
import { useTheme } from "../theme-provider"
import { useState } from "react"
import { WalletP2PDialog } from "../dialog/wallet-p2p-dialog"

export function Sidebar() {
  const { theme } = useTheme()
  const [isWalletP2PDialogOpen, setIsWalletP2PDialogOpen] = useState(false)

  return (
    <>
      <aside className="fixed flex h-full w-56 flex-col justify-between border-r border-sidebar-border bg-sidebar p-4 text-sidebar-foreground">
        <div className="flex flex-col">
          <Logo apparence={theme === "dark" ? "dark" : "light"} />

          <div className="mt-7 flex flex-col gap-y-7">
            <SidebarNavigationItem
              label="Overview"
              icon={DashboardCircleRemoveIcon}
              to="/"
            />

            <SidebarNavigationItem
              label="P2P"
              icon={ArrowDataTransferHorizontalIcon}
              to="#"
              onClick={() => setIsWalletP2PDialogOpen(true)}
            />
          </div>
        </div>

        <AccountMenu />
      </aside>
      <WalletP2PDialog
        open={isWalletP2PDialogOpen}
        onOpenChange={setIsWalletP2PDialogOpen}
      />
    </>
  )
}
