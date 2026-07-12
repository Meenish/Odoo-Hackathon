import { cn } from '../../utils/cn';

export function ProgressBar({
  value,
  max = 100,
  color = 'var(--color-brand-500)',
  trackClassName,
  height = 8,
}: {
  value: number;
  max?: number;
  color?: string;
  trackClassName?: string;
  height?: number;
}) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));
  return (
    <div
      className={cn('w-full overflow-hidden rounded-full bg-slate-100 dark:bg-white/10', trackClassName)}
      style={{ height }}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
    >
      <div
        className="h-full rounded-full transition-[width] duration-700 ease-out"
        style={{ width: `${pct}%`, background: color }}
      />
    </div>
  );
}
