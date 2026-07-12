import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import type { DepartmentPerformance } from '../../types';
import { Card, CardHeader } from '../common/Card';
import { BarChart3 } from 'lucide-react';

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
          <span className="font-mono-num font-semibold text-slate-700 dark:text-slate-200">{entry.value}</span>
        </div>
      ))}
    </div>
  );
}

function renderLegend() {
  const items = [
    { label: 'Environmental', color: '#229d6f' },
    { label: 'Social', color: '#2778a6' },
    { label: 'Governance', color: '#c8871a' },
  ];
  return (
    <div className="flex flex-wrap items-center gap-4 pt-1">
      {items.map((item) => (
        <span key={item.label} className="flex items-center gap-1.5 text-[11px] font-medium text-slate-500 dark:text-slate-400">
          <span className="h-2 w-2 rounded-full" style={{ background: item.color }} />
          {item.label}
        </span>
      ))}
    </div>
  );
}

export function DepartmentPerformanceChart({ data }: { data: DepartmentPerformance[] }) {
  return (
    <Card className="animate-fade-up [animation-delay:140ms]">
      <CardHeader
        icon={<BarChart3 size={18} />}
        title="Department Performance"
        subtitle="ESG pillar scores by business unit"
      />
      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 4, right: 8, left: -16, bottom: 0 }} barGap={4}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} className="text-slate-100 dark:text-white/5" stroke="currentColor" />
            <XAxis dataKey="department" tickLine={false} axisLine={false} tick={{ fontSize: 10.5, fill: '#94a3b8' }} interval={0} />
            <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 11, fill: '#94a3b8' }} width={32} />
            <Tooltip content={<ChartTooltip />} cursor={{ fill: 'rgba(148,163,184,0.08)' }} />
            <Bar dataKey="environmental" name="Environmental" fill="#229d6f" radius={[4, 4, 0, 0]} maxBarSize={14} />
            <Bar dataKey="social" name="Social" fill="#2778a6" radius={[4, 4, 0, 0]} maxBarSize={14} />
            <Bar dataKey="governance" name="Governance" fill="#c8871a" radius={[4, 4, 0, 0]} maxBarSize={14} />
            <Legend content={renderLegend} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
