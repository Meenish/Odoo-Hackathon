import { Zap } from 'lucide-react';
import type { QuickAction } from '../../types';
import { Card, CardHeader } from '../common/Card';
import { iconMap } from '../layout/iconMap';
import { cn } from '../../utils/cn';

const accentClasses: Record<string, string> = {
  brand: 'bg-brand-50 text-brand-600 group-hover:bg-brand-600 dark:bg-brand-900/20 dark:text-brand-300',
  sky: 'bg-sky-50 text-sky-600 group-hover:bg-sky-600 dark:bg-sky-900/20 dark:text-sky-300',
  amber: 'bg-amber-50 text-amber-600 group-hover:bg-amber-600 dark:bg-amber-900/20 dark:text-amber-300',
  rose: 'bg-rose-50 text-rose-600 group-hover:bg-rose-600 dark:bg-rose-900/20 dark:text-rose-300',
};

export function QuickActionsCard({ actions }: { actions: QuickAction[] }) {
  return (
    <Card className="animate-fade-up [animation-delay:440ms]">
      <CardHeader icon={<Zap size={18} />} title="Quick Actions" subtitle="Jump right into common tasks" />
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action) => {
          const Icon = iconMap[action.icon];
          return (
            <button
              key={action.id}
              className="group flex flex-col items-start gap-2.5 rounded-xl border border-slate-100 p-3.5 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-transparent hover:shadow-[var(--shadow-card-hover)] dark:border-white/5"
            >
              <div
                className={cn(
                  'flex h-9 w-9 items-center justify-center rounded-lg transition-colors duration-200 group-hover:text-white',
                  accentClasses[action.accent]
                )}
              >
                <Icon size={16} />
              </div>
              <div>
                <p className="text-[13px] font-semibold text-slate-800 dark:text-slate-100">{action.label}</p>
                <p className="mt-0.5 text-[11px] leading-snug text-slate-500 dark:text-slate-400">{action.description}</p>
              </div>
            </button>
          );
        })}
      </div>
    </Card>
  );
}
