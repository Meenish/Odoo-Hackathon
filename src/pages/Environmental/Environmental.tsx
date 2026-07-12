import { Leaf, Droplets, Recycle, Sun } from 'lucide-react';
import { PageHeader } from '../../components/common/PageHeader';
import { MetricCard } from '../../components/cards/MetricCard';
import { TrendLineChart } from '../../components/charts/TrendLineChart';
import { Card, CardHeader } from '../../components/common/Card';
import { ProgressBar } from '../../components/common/ProgressBar';
import { environmentalMetrics, carbonTrend } from '../../data/mockData';

const energyMix = [
  { label: 'Solar', value: 34, color: '#229d6f' },
  { label: 'Wind', value: 27, color: '#2778a6' },
  { label: 'Grid (non-renewable)', value: 39, color: '#cbd5e1' },
];

export default function Environmental() {
  return (
    <div>
      <PageHeader
        eyebrow="Environmental"
        title="Environmental Performance"
        description="Track emissions, energy mix, water usage, and waste diversion across all facilities."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 mb-5">
        {environmentalMetrics.map((metric) => (
          <MetricCard key={metric.label} metric={metric} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-5">
        <div className="xl:col-span-3">
          <TrendLineChart
            data={carbonTrend}
            dataKey="emissions"
            title="Emissions Trajectory"
            subtitle="Monthly tCO₂e vs. reduction target"
            icon={<Leaf size={18} />}
            unit="t"
          />
        </div>

        <div className="xl:col-span-2">
          <Card>
            <CardHeader icon={<Sun size={18} />} title="Energy Mix" subtitle="Share of total facility power draw" />
            <div className="space-y-4">
              {energyMix.map((item) => (
                <div key={item.label}>
                  <div className="mb-1.5 flex items-center justify-between text-[12.5px] font-medium text-slate-600 dark:text-slate-300">
                    <span>{item.label}</span>
                    <span className="font-mono-num text-slate-500">{item.value}%</span>
                  </div>
                  <ProgressBar value={item.value} color={item.color} />
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 mt-5 lg:grid-cols-2">
        <Card>
          <CardHeader icon={<Droplets size={18} />} title="Water Stewardship" subtitle="Facility-level withdrawal vs. recycled" />
          <ul className="space-y-3">
            {[
              { name: 'Plant 1 — Austin', withdrawal: 4200, recycled: 62 },
              { name: 'Plant 2 — Leipzig', withdrawal: 3110, recycled: 71 },
              { name: 'Plant 3 — Chennai', withdrawal: 5680, recycled: 48 },
              { name: 'Plant 4 — São Paulo', withdrawal: 2890, recycled: 80 },
            ].map((facility) => (
              <li key={facility.name} className="flex items-center justify-between rounded-xl border border-slate-100 px-3.5 py-2.5 dark:border-white/5">
                <div>
                  <p className="text-[13px] font-semibold text-slate-700 dark:text-slate-200">{facility.name}</p>
                  <p className="text-[11px] text-slate-400">{facility.withdrawal.toLocaleString()} kL withdrawn</p>
                </div>
                <div className="w-28">
                  <div className="mb-1 text-right text-[11px] font-mono-num text-slate-500">{facility.recycled}% recycled</div>
                  <ProgressBar value={facility.recycled} color="#2778a6" height={6} />
                </div>
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <CardHeader icon={<Recycle size={18} />} title="Waste & Circularity" subtitle="Diversion rate by waste stream" />
          <ul className="space-y-3">
            {[
              { name: 'Recycled Materials', value: 82 },
              { name: 'Composted Organic Waste', value: 68 },
              { name: 'Reused Packaging', value: 74 },
              { name: 'Hazardous Waste Handled', value: 96 },
            ].map((stream) => (
              <li key={stream.name}>
                <div className="mb-1.5 flex items-center justify-between text-[12.5px] font-medium text-slate-600 dark:text-slate-300">
                  <span>{stream.name}</span>
                  <span className="font-mono-num text-slate-500">{stream.value}%</span>
                </div>
                <ProgressBar value={stream.value} color="#229d6f" />
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}
