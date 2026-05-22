import { ChevronsUpDown, Logout02Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"

export function AccountMenu() {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex cursor-pointer items-center gap-x-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div className="flex flex-col text-xs">
              <strong className="text-zinc-800">Gabriel Francisco</strong>
              <span className="text-[10px] text-zinc-500">
                gabrielcorto272@gmail.com
              </span>
            </div>

            <div className="text-zinc-500">
              <HugeiconsIcon icon={ChevronsUpDown} className="h-4 w-4" />
            </div>
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-40" align="start">
          <DropdownMenuItem className="flex items-center gap-x-2 text-rose-500">
            <HugeiconsIcon icon={Logout02Icon} className="h-4 w-4" />
            Sair
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
