import { Sparkles } from 'lucide-react';
import { Card } from '../common/Card';
import { RadialScore } from '../common/RadialScore';
import { TrendPill } from '../common/TrendPill';
import { Badge } from '../common/Badge';
import { PillarScoreCard } from '../cards/PillarScoreCard';
import type { EsgPillarScore } from '../../types';

interface EsgScoreHeroProps {
  score: { value: number; delta: number; trend: 'up' | 'down' | 'flat'; rating: string; percentile: number };
  pillars: EsgPillarScore[];
}

export function EsgScoreHero({ score, pillars }: EsgScoreHeroProps) {
  return (
    <Card padding="lg" className="relative overflow-hidden animate-fade-up">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-100/60 blur-3xl dark:bg-brand-500/10" />

      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center">
        <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center lg:shrink-0">
          <RadialScore value={score.value} label="ESG Score" />
          <div>
            <div className="flex items-center gap-2">
              <Badge tone="brand">
                <Sparkles size={12} /> Rating {score.rating}
              </Badge>
              <TrendPill delta={score.delta} trend={score.trend} size="md" />
            </div>
            <h2 className="mt-3 font-display text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Corporate ESG Performance
            </h2>
            <p className="mt-1.5 max-w-sm text-[13px] leading-relaxed text-slate-500 dark:text-slate-400">
              You're outperforming <span className="font-semibold text-slate-700 dark:text-slate-200">{score.percentile}%</span> of
              industry peers this quarter. Momentum is strongest in Environmental performance.
            </p>
          </div>
        </div>

        <div className="hidden h-32 w-px shrink-0 bg-slate-100 dark:bg-white/10 lg:block" />

        <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-3">
          {pillars.map((pillar) => (
            <PillarScoreCard key={pillar.id} pillar={pillar} />
          ))}
        </div>
      </div>
    </Card>
  );
}
