import {
  ChevronsUpDown,
  Logout02Icon,
  Moon02Icon,
  Settings02Icon,
  Sun03Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { session } from "../utils/session-storage"
import { useNavigate } from "react-router"
import { useAuth } from "../hooks/useAuth"
import { AccountMenuSkeleton } from "./account-menu-skeleton"
import { getAvatarFallback } from "../utils/name-formatter"
import { useTheme } from "./theme-provider"

export function AccountMenu() {
  const navigate = useNavigate()
  const { user, isUserLoading } = useAuth()
  const { theme, setTheme } = useTheme()

  const logout = () => {
    session.clear()
    navigate("/a/sign-in", { replace: true })
  }

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          {isUserLoading ? (
            <AccountMenuSkeleton />
          ) : (
            <div className="flex cursor-pointer items-center gap-x-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="" alt="@shadcn" />
                <AvatarFallback className="text-xs">
                  {getAvatarFallback(user?.name)}
                </AvatarFallback>
              </Avatar>

              <div className="flex flex-col text-xs">
                <strong className="text-foreground">{user?.name}</strong>
                <span className="text-[9px] text-muted-foreground">
                  {user?.email}
                </span>
              </div>

              <div className="text-muted-foreground">
                <HugeiconsIcon icon={ChevronsUpDown} className="h-4 w-4" />
              </div>
            </div>
          )}
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-full" align="start">
          <DropdownMenuItem
            className="flex items-center gap-x-2"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <HugeiconsIcon
              icon={theme === "dark" ? Sun03Icon : Moon02Icon}
              className="h-4 w-4"
            />
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </DropdownMenuItem>

          <DropdownMenuItem className="flex items-center gap-x-2">
            <HugeiconsIcon icon={Settings02Icon} className="h-4 w-4" />
            Settings
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem
            className="flex items-center gap-x-2 text-rose-500"
            onClick={logout}
          >
            <HugeiconsIcon icon={Logout02Icon} className="h-4 w-4" />
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
