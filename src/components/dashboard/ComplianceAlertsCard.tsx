import { AlertTriangle, ShieldAlert, Info } from 'lucide-react';
import type { ComplianceAlert } from '../../types';
import { Card, CardHeader } from '../common/Card';
import { cn } from '../../utils/cn';

const severityConfig = {
  critical: { icon: ShieldAlert, classes: 'bg-rose-50 text-rose-600 dark:bg-rose-900/20 dark:text-rose-300' },
  warning: { icon: AlertTriangle, classes: 'bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-300' },
  info: { icon: Info, classes: 'bg-sky-50 text-sky-600 dark:bg-sky-900/20 dark:text-sky-300' },
} as const;

export function ComplianceAlertsCard({ alerts }: { alerts: ComplianceAlert[] }) {
  return (
    <Card className="animate-fade-up [animation-delay:200ms]">
      <CardHeader
        icon={<ShieldAlert size={18} />}
        title="Compliance Alerts"
        subtitle={`${alerts.length} items need attention`}
      />
      <ul className="space-y-2.5">
        {alerts.map((alert) => {
          const config = severityConfig[alert.severity];
          const Icon = config.icon;
          return (
            <li
              key={alert.id}
              className="flex items-start gap-3 rounded-xl border border-slate-100 p-3 transition-colors hover:border-slate-200 hover:bg-slate-50/60 dark:border-white/5 dark:hover:bg-white/[0.04]"
            >
              <div className={cn('flex h-8 w-8 shrink-0 items-center justify-center rounded-lg', config.classes)}>
                <Icon size={15} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[13px] font-semibold text-slate-700 dark:text-slate-200">{alert.title}</p>
                <p className="mt-0.5 text-[12px] leading-snug text-slate-500 dark:text-slate-400">{alert.description}</p>
                <div className="mt-1.5 flex items-center gap-2 text-[11px] text-slate-400">
                  <span className="font-medium">{alert.regulation}</span>
                  <span>&bull;</span>
                  <span className={alert.severity === 'critical' ? 'font-semibold text-rose-500' : ''}>{alert.dueDate}</span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </Card>
  );
}
