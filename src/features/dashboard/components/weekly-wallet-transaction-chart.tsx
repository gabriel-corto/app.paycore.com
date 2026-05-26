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
  return (
    <div className="col-span-5 flex flex-col gap-y-4 overflow-hidden rounded-xl border p-6">
      <div className="flex items-center gap-x-2">
        <div className="flex items-center gap-x-2 rounded-md bg-zinc-100 p-2">
          <HugeiconsIcon icon={Wallet} className="size-5 text-zinc-600" />
        </div>

        <h1 className="text-xs font-medium text-zinc-800">
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
          stroke="#7e57c2"
          fontSize={12}
          fontWeight="light"
        />

        <YAxis stroke="#7e57c2" fontSize={12} fontWeight="light" />

        <CartesianGrid stroke="#ccc" strokeDasharray="2 2" />
        <Bar dataKey="total" fill="#7e57c2" barSize={20} />
      </BarChart>
    </div>
  )
}
