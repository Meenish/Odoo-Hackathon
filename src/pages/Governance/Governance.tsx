import { Landmark, FileCheck2, Gavel, Lock } from 'lucide-react';
import { PageHeader } from '../../components/common/PageHeader';
import { MetricCard } from '../../components/cards/MetricCard';
import { Card, CardHeader } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';
import { governanceMetrics } from '../../data/mockData';

const policies = [
  { name: 'Anti-Bribery & Corruption Policy', owner: 'Legal', status: 'Current', reviewed: 'Apr 2026' },
  { name: 'Data Privacy & Protection Policy', owner: 'IT & Security', status: 'Current', reviewed: 'May 2026' },
  { name: 'Board Diversity Policy', owner: 'HR', status: 'Overdue', reviewed: 'Dec 2025' },
  { name: 'Supplier Code of Conduct', owner: 'Procurement', status: 'In Review', reviewed: 'Jun 2026' },
  { name: 'Whistleblower Protection Policy', owner: 'Legal', status: 'Current', reviewed: 'Mar 2026' },
];

const statusTone: Record<string, 'brand' | 'rose' | 'amber'> = {
  Current: 'brand',
  Overdue: 'rose',
  'In Review': 'amber',
};

export default function Governance() {
  return (
    <div>
      <PageHeader
        eyebrow="Governance"
        title="Governance & Compliance"
        description="Board composition, policy currency, ethics training, and data protection posture."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 mb-5">
        {governanceMetrics.map((metric) => (
          <MetricCard key={metric.label} metric={metric} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-5">
        <div className="xl:col-span-3">
          <Card>
            <CardHeader icon={<FileCheck2 size={18} />} title="Policy Register" subtitle="Ownership and review cadence" />
            <div className="overflow-x-auto -mx-1">
              <table className="w-full min-w-[520px] text-left">
                <thead>
                  <tr className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    <th className="px-3 pb-3">Policy</th>
                    <th className="px-3 pb-3">Owner</th>
                    <th className="px-3 pb-3">Last Reviewed</th>
                    <th className="px-3 pb-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {policies.map((policy) => (
                    <tr key={policy.name} className="border-t border-slate-100 text-[13px] dark:border-white/5">
                      <td className="px-3 py-3 font-semibold text-slate-700 dark:text-slate-200">{policy.name}</td>
                      <td className="px-3 py-3 text-slate-500 dark:text-slate-400">{policy.owner}</td>
                      <td className="px-3 py-3 font-mono-num text-slate-500 dark:text-slate-400">{policy.reviewed}</td>
                      <td className="px-3 py-3">
                        <Badge tone={statusTone[policy.status]}>{policy.status}</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        <div className="xl:col-span-2 space-y-5">
          <Card>
            <CardHeader icon={<Landmark size={18} />} title="Board Composition" subtitle="9 total board seats" />
            <ul className="space-y-2.5 text-[13px]">
              <li className="flex justify-between text-slate-600 dark:text-slate-300">
                <span>Independent Directors</span>
                <span className="font-mono-num font-semibold text-slate-800 dark:text-white">6 / 9</span>
              </li>
              <li className="flex justify-between text-slate-600 dark:text-slate-300">
                <span>Women on Board</span>
                <span className="font-mono-num font-semibold text-slate-800 dark:text-white">4 / 9</span>
              </li>
              <li className="flex justify-between text-slate-600 dark:text-slate-300">
                <span>Avg. Tenure</span>
                <span className="font-mono-num font-semibold text-slate-800 dark:text-white">4.2 yrs</span>
              </li>
            </ul>
          </Card>

          <Card>
            <CardHeader icon={<Lock size={18} />} title="Data & Security" subtitle="Governance controls status" />
            <ul className="space-y-2.5">
              <li className="flex items-center justify-between text-[13px] text-slate-600 dark:text-slate-300">
                <span className="flex items-center gap-2"><Gavel size={13} className="text-brand-500" /> SOC 2 Type II</span>
                <Badge tone="brand">Certified</Badge>
              </li>
              <li className="flex items-center justify-between text-[13px] text-slate-600 dark:text-slate-300">
                <span className="flex items-center gap-2"><Gavel size={13} className="text-brand-500" /> ISO 27001</span>
                <Badge tone="brand">Certified</Badge>
              </li>
              <li className="flex items-center justify-between text-[13px] text-slate-600 dark:text-slate-300">
                <span className="flex items-center gap-2"><Gavel size={13} className="text-amber-500" /> GDPR Audit</span>
                <Badge tone="amber">In Progress</Badge>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}
