import { Skeleton } from "@/shared/components/ui/skeleton"
import { TableCell, TableRow } from "@/shared/components/ui/table"

export function LastTransactionsTableSkeleton() {
  return (
    <TableRow className="border-border/50 hover:bg-transparent">
      <TableCell>
        <Skeleton className="h-4" style={{ width: `${60 + (1 % 3) * 20}px` }} />
      </TableCell>
      <TableCell>
        <Skeleton className="h-4" style={{ width: `${50 + (2 % 2) * 15}px` }} />
      </TableCell>
      <TableCell>
        <Skeleton className="h-4" style={{ width: `${70 + (3 % 4) * 10}px` }} />
      </TableCell>
      <TableCell className="flex justify-end">
        <Skeleton className="h-4" style={{ width: `${80 + (4 % 3) * 10}px` }} />
      </TableCell>
    </TableRow>
  )
}
