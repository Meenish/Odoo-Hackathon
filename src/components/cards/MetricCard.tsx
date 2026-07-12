import type { ScoreMetric } from '../../types';
import { Card } from '../common/Card';
import { TrendPill } from '../common/TrendPill';

export function MetricCard({ metric }: { metric: ScoreMetric }) {
  return (
    <Card padding="md" interactive className="animate-fade-up">
      <div className="flex items-start justify-between">
        <p className="text-[12.5px] font-semibold text-slate-500 dark:text-slate-400">{metric.label}</p>
        <TrendPill delta={metric.delta} trend={metric.trend} />
      </div>
      <p className="mt-3 font-mono-num text-[26px] font-bold leading-none text-slate-800 dark:text-white">
        {metric.value.toLocaleString()}
      </p>
      {metric.description && <p className="mt-2 text-[11.5px] text-slate-400">{metric.description}</p>}
    </Card>
  );
}
