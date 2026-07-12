import { Activity, FileText, ShieldCheck, Sparkles, Target, Users2, type LucideIcon } from 'lucide-react';
import type { ActivityItem, ActivityType } from '../../types';
import { Card, CardHeader } from '../common/Card';
import { cn } from '../../utils/cn';

const typeConfig: Record<ActivityType, { icon: LucideIcon; classes: string }> = {
  report: { icon: FileText, classes: 'bg-sky-50 text-sky-600 dark:bg-sky-900/20 dark:text-sky-300' },
  audit: { icon: ShieldCheck, classes: 'bg-brand-50 text-brand-600 dark:bg-brand-900/20 dark:text-brand-300' },
  milestone: { icon: Target, classes: 'bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-300' },
  team: { icon: Users2, classes: 'bg-violet-50 text-violet-600 dark:bg-violet-900/20 dark:text-violet-300' },
  ai: { icon: Sparkles, classes: 'bg-brand-50 text-brand-600 dark:bg-brand-900/20 dark:text-brand-300' },
  alert: { icon: Activity, classes: 'bg-rose-50 text-rose-600 dark:bg-rose-900/20 dark:text-rose-300' },
};

export function RecentActivityCard({ activities }: { activities: ActivityItem[] }) {
  return (
    <Card className="animate-fade-up [animation-delay:260ms]">
      <CardHeader icon={<Activity size={18} />} title="Recent Activities" subtitle="Live feed across your organization" />
      <ul className="relative space-y-0">
        {activities.map((activity, idx) => {
          const config = typeConfig[activity.type];
          const Icon = config.icon;
          const isLast = idx === activities.length - 1;
          return (
            <li key={activity.id} className="relative flex gap-3 pb-4 last:pb-0">
              {!isLast && <span className="absolute left-[15px] top-8 h-[calc(100%-20px)] w-px bg-slate-100 dark:bg-white/10" />}
              <div className={cn('z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg', config.classes)}>
                <Icon size={14} />
              </div>
              <div className="min-w-0 flex-1 pt-0.5">
                <p className="text-[13px] leading-snug text-slate-600 dark:text-slate-300">
                  <span className="font-semibold text-slate-800 dark:text-slate-100">{activity.actor}</span>{' '}
                  {activity.action}{' '}
                  <span className="font-semibold text-slate-800 dark:text-slate-100">{activity.target}</span>
                </p>
                <p className="mt-0.5 text-[11px] text-slate-400">{activity.timestamp}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </Card>
  );
}
