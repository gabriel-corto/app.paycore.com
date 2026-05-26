import { Wallet } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { Cell, Legend, Pie, PieChart } from "recharts"

const data01 = [
  { name: "Food", value: 400 },
  { name: "Transport", value: 300 },
  { name: "Shopping", value: 300 },
  { name: "Others", value: 200 },
]

export function SpendingByCategoryChart() {
  return (
    <div className="col-span-4 flex flex-col gap-y-4 overflow-hidden rounded-xl border p-6">
      <div className="flex items-center gap-x-2">
        <div className="flex items-center gap-x-2 rounded-md bg-zinc-100 p-2">
          <HugeiconsIcon icon={Wallet} className="size-5 text-zinc-600" />
        </div>

        <h1 className="text-xs font-medium text-zinc-800">
          Weekly Wallet Transaction
        </h1>
      </div>

      <div className="flex items-center justify-center">
        <PieChart width={300} height={200}>
          <Pie
            data={data01}
            cx="50%"
            cy="50%"
            labelLine={true}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data01.map((entry, index) => (
              <Cell key={`cell-${index}`} />
            ))}

            <Legend fontSize={10} iconType="circle" align="right" />
          </Pie>
        </PieChart>
      </div>
    </div>
  )
}
