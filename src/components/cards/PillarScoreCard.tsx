import type { EsgPillarScore } from '../../types';
import { TrendPill } from '../common/TrendPill';
import { ProgressBar } from '../common/ProgressBar';

export function PillarScoreCard({ pillar }: { pillar: EsgPillarScore }) {
  return (
    <div className="rounded-xl border border-slate-100 bg-slate-50/60 p-4 transition-colors duration-200 hover:bg-white hover:border-slate-200 dark:border-white/5 dark:bg-white/[0.03] dark:hover:bg-white/[0.06]">
      <div className="flex items-center justify-between">
        <p className="text-[13px] font-semibold text-slate-600 dark:text-slate-300">{pillar.label}</p>
        <TrendPill delta={pillar.delta} trend={pillar.trend} />
      </div>
      <p className="mt-2 font-mono-num text-2xl font-bold text-slate-800 dark:text-white">{pillar.score}</p>
      <div className="mt-2.5">
        <ProgressBar value={pillar.score} color={pillar.color} height={6} />
      </div>
      <p className="mt-2.5 text-[12px] leading-snug text-slate-500 dark:text-slate-400">{pillar.summary}</p>
    </div>
  );
}
