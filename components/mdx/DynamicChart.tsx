'use client'

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

interface ChartProps {
  id: string
  type: 'line' | 'bar'
  data: {
    labels: string[]
    datasets: {
      label: string
      data: number[]
      borderColor: string
      backgroundColor: string
    }[]
  }
}

export default function DynamicChart({ id, type, data }: ChartProps) {
  // Pastikan data tetap dalam urutan asli
  const chartData = data.labels.map((label, index) => ({
    name: label,
    value: data.datasets[0].data[index], // Pastikan sesuai urutan labels
    order: index, // Tambahkan order sebagai indeks
  }))

  return (
    <div id={id} className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height={300}>
        {type === 'line' ? (
          <LineChart data={chartData} className="pr-20">
            <XAxis className="text-xs" dataKey="name" interval={0} />{' '}
            {/* Pastikan XAxis tidak merubah urutan */}
            <YAxis className="text-xs" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke={data.datasets[0].borderColor}
              fill={data.datasets[0].backgroundColor}
            />
          </LineChart>
        ) : (
          <p>Chart type "{type}" not supported.</p>
        )}
      </ResponsiveContainer>
    </div>
  )
}
