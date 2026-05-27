import { useWallet } from "@/features/wallet/hooks/useWallet"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui/table"
import { dateFormatter, moneyFormatter } from "@/shared/utils/formatter"
import { LastTransactionsTableSkeleton } from "./last-transaction-table-skeleton"

const tableHeaderItems = [
  {
    key: "operation",
    label: "Operation",
  },
  {
    key: "type",
    label: "Type",
  },
  {
    key: "amount",
    label: "Amount",
  },
  {
    key: "date",
    label: "Date",
  },
]

export function LastTransactionsTable() {
  const { walletTransactions, isWalletTransactionsLoading } = useWallet()

  return (
    <Table>
      <TableHeader>
        <TableRow className="border-border hover:bg-transparent">
          {tableHeaderItems.map((item) => (
            <TableHead
              key={item.key}
              className="text-[10px] font-bold tracking-wider text-muted-foreground uppercase last:text-right"
            >
              {item.label}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>

      <TableBody>
        {!isWalletTransactionsLoading ? (
          walletTransactions?.map((transaction) => (
            <TableRow
              key={transaction.id}
              className="border-border/50 hover:bg-muted/50"
            >
              <TableCell className="font-medium text-foreground last:text-right">
                {transaction.operation}
              </TableCell>

              <TableCell className="text-muted-foreground">
                {transaction.type}
              </TableCell>

              <TableCell className="font-semibold text-emerald-500">
                {moneyFormatter(transaction.amount)}
              </TableCell>

              <TableCell className="text-right text-muted-foreground">
                {dateFormatter(transaction.createdAt)}
              </TableCell>
            </TableRow>
          ))
        ) : (
          <LastTransactionsTableSkeleton />
        )}
      </TableBody>
    </Table>
  )
}
