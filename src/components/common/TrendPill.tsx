import { ArrowDownRight, ArrowUpRight, Minus } from 'lucide-react';
import type { TrendDirection } from '../../types';
import { cn } from '../../utils/cn';
import { formatDelta } from '../../utils/format';

export function TrendPill({ delta, trend, size = 'sm' }: { delta: number; trend: TrendDirection; size?: 'sm' | 'md' }) {
  const isUp = trend === 'up';
  const isFlat = trend === 'flat';

  const Icon = isFlat ? Minus : isUp ? ArrowUpRight : ArrowDownRight;

  return (
    <span
      className={cn(
        'inline-flex items-center gap-0.5 rounded-full font-semibold font-mono-num',
        size === 'sm' ? 'px-1.5 py-0.5 text-[11px]' : 'px-2 py-1 text-xs',
        isFlat && 'bg-slate-100 text-slate-500 dark:bg-white/5 dark:text-slate-400',
        !isFlat && isUp && 'bg-brand-100 text-brand-700 dark:bg-brand-900/40 dark:text-brand-300',
        !isFlat && !isUp && 'bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-300'
      )}
    >
      <Icon size={size === 'sm' ? 12 : 14} strokeWidth={2.5} />
      {formatDelta(Math.abs(delta))}
    </span>
  );
}
