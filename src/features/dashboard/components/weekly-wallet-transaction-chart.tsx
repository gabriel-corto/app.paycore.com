import { useTheme } from "@/shared/components/theme-provider"
import { Wallet } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { BarChart, CartesianGrid, XAxis, YAxis, Bar } from "recharts"

const barGraphicData = [
  {
    name: "Monday",
    total: 100,
  },
  {
    name: "Tuesday",
    total: 200,
  },
  {
    name: "Wednesday",
    total: 300,
  },
  {
    name: "Thursday",
    total: 400,
  },
  {
    name: "Friday",
    total: 500,
  },
  {
    name: "Saturday",
    total: 600,
  },
  {
    name: "Sunday",
    total: 700,
  },
]

export function WeeklyWalletTransactionChart() {
  const { theme } = useTheme()

  return (
    <div className="col-span-5 flex flex-col gap-y-4 overflow-hidden rounded-xl border border-border bg-card p-6 backdrop-blur-sm">
      <div className="flex items-center gap-x-2">
        <div className="flex items-center gap-x-2 rounded-md bg-muted p-2">
          <HugeiconsIcon
            icon={Wallet}
            className="size-5 text-muted-foreground"
          />
        </div>

        <h1 className="text-xs font-bold tracking-wider text-muted-foreground uppercase">
          Weekly Wallet Transaction
        </h1>
      </div>

      <BarChart
        data={barGraphicData}
        width={800}
        height={300}
        style={{ borderRadius: "10px" }}
      >
        <XAxis
          dataKey="name"
          stroke="#52525b"
          fontSize={10}
          fontWeight="medium"
          tickLine={false}
          axisLine={false}
        />

        <YAxis
          stroke="#52525b"
          fontSize={10}
          fontWeight="medium"
          tickLine={false}
          axisLine={false}
        />

        <CartesianGrid
          stroke={theme === "dark" ? "#27272a" : "#e4e4e7"}
          strokeDasharray="3 3"
          vertical={false}
        />
        <Bar
          dataKey="total"
          fill="#7e57c2"
          radius={[4, 4, 0, 0]}
          barSize={24}
        />
      </BarChart>
    </div>
  )
}
