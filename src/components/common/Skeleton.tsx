import { cn } from '../../utils/cn';

export function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-lg bg-slate-100 dark:bg-white/5',
        className
      )}
    >
      <div className="shimmer-bg absolute inset-0" />
    </div>
  );
}
