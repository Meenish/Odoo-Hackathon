import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import type { CarbonTrendPoint } from '../../types';
import { Card, CardHeader } from '../common/Card';
import { Badge } from '../common/Badge';
import { Leaf } from 'lucide-react';

function ChartTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs shadow-lg dark:border-white/10 dark:bg-[#101c18]">
      <p className="mb-1.5 font-semibold text-slate-700 dark:text-slate-200">{label}</p>
      {payload.map((entry: any) => (
        <div key={entry.dataKey} className="flex items-center justify-between gap-4">
          <span className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
            <span className="h-2 w-2 rounded-full" style={{ background: entry.color }} />
            {entry.name}
          </span>
          <span className="font-mono-num font-semibold text-slate-700 dark:text-slate-200">
            {entry.value.toLocaleString()} t
          </span>
        </div>
      ))}
    </div>
  );
}

export function CarbonTrendChart({ data }: { data: CarbonTrendPoint[] }) {
  return (
    <Card className="animate-fade-up [animation-delay:80ms]">
      <CardHeader
        icon={<Leaf size={18} />}
        title="Carbon Emissions Trend"
        subtitle="Monthly tracked vs. target emissions (tCO₂e)"
        action={<Badge tone="brand">-33% YTD</Badge>}
      />
      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 4, right: 8, left: -16, bottom: 0 }}>
            <defs>
              <linearGradient id="emissionsGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#229d6f" stopOpacity={0.35} />
                <stop offset="100%" stopColor="#229d6f" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="currentColor" className="text-slate-100 dark:text-white/5" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 11, fill: '#94a3b8' }}
              dy={8}
            />
            <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 11, fill: '#94a3b8' }} width={40} />
            <Tooltip content={<ChartTooltip />} />
            <Area
              type="monotone"
              dataKey="target"
              name="Target"
              stroke="#cbd5e1"
              strokeWidth={2}
              strokeDasharray="4 4"
              fill="none"
            />
            <Area
              type="monotone"
              dataKey="emissions"
              name="Actual"
              stroke="#147d59"
              strokeWidth={2.5}
              fill="url(#emissionsGradient)"
              activeDot={{ r: 5, strokeWidth: 2, stroke: '#fff' }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
