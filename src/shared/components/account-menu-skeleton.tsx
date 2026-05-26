import { Skeleton } from "./ui/skeleton"

export function AccountMenuSkeleton() {
  return (
    <div className="flex items-center gap-x-2">
      <Skeleton className="h-8 w-8 rounded-full" />
      <div className="flex flex-col gap-y-1">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-4 w-32" />
      </div>
    </div>
  )
}
