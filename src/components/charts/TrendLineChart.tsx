import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Card, CardHeader } from '../common/Card';
import type { ReactNode } from 'react';

interface TrendLineChartProps {
  data: readonly any[];
  dataKey: string;
  xKey?: string;
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  color?: string;
  unit?: string;
}

function buildTooltip(unit?: string) {
  return function ChartTooltip({ active, payload, label }: any) {
    if (!active || !payload?.length) return null;
    return (
      <div className="rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs shadow-lg dark:border-white/10 dark:bg-[#101c18]">
        <p className="mb-1 font-semibold text-slate-700 dark:text-slate-200">{label}</p>
        <p className="font-mono-num font-semibold text-slate-700 dark:text-slate-200">
          {payload[0].value.toLocaleString()} {unit}
        </p>
      </div>
    );
  };
}

export function TrendLineChart({ data, dataKey, xKey = 'month', title, subtitle, icon, color = '#229d6f', unit = '' }: TrendLineChartProps) {
  const gradientId = `grad-${dataKey}`;
  return (
    <Card className="animate-fade-up">
      <CardHeader icon={icon} title={title} subtitle={subtitle} />
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 4, right: 8, left: -16, bottom: 0 }}>
            <defs>
              <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={color} stopOpacity={0.32} />
                <stop offset="100%" stopColor={color} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="currentColor" className="text-slate-100 dark:text-white/5" />
            <XAxis dataKey={xKey} tickLine={false} axisLine={false} tick={{ fontSize: 11, fill: '#94a3b8' }} dy={8} />
            <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 11, fill: '#94a3b8' }} width={36} />
            <Tooltip content={buildTooltip(unit)} />
            <Area
              type="monotone"
              dataKey={dataKey}
              stroke={color}
              strokeWidth={2.5}
              fill={`url(#${gradientId})`}
              activeDot={{ r: 5, strokeWidth: 2, stroke: '#fff' }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
