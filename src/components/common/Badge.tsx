import type { ReactNode } from 'react';
import { cn } from '../../utils/cn';

type BadgeTone = 'brand' | 'slate' | 'amber' | 'rose' | 'sky';

const toneStyles: Record<BadgeTone, string> = {
  brand: 'bg-brand-100 text-brand-700 dark:bg-brand-900/40 dark:text-brand-300',
  slate: 'bg-slate-100 text-slate-600 dark:bg-white/5 dark:text-slate-300',
  amber: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',
  rose: 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300',
  sky: 'bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300',
};

export function Badge({
  children,
  tone = 'slate',
  className,
}: {
  children: ReactNode;
  tone?: BadgeTone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold',
        toneStyles[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
