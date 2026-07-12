import { FileBarChart, Download, Sparkles, FileText } from 'lucide-react';
import { PageHeader } from '../../components/common/PageHeader';
import { Card, CardHeader } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';
import { reportsList } from '../../data/mockData';

const statusTone: Record<string, 'brand' | 'amber' | 'slate'> = {
  Published: 'brand',
  'In Review': 'amber',
  Draft: 'slate',
};

export default function Reports() {
  return (
    <div>
      <PageHeader
        eyebrow="Reports"
        title="ESG Reports & Disclosures"
        description="Generate, review, and export sustainability reports for stakeholders and regulators."
        action={
          <Button variant="primary" size="sm" icon={<Sparkles size={15} />}>
            Generate with AI
          </Button>
        }
      />

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-5">
        <div className="xl:col-span-3">
          <Card padding="none">
            <div className="p-5 sm:p-6 pb-0">
              <CardHeader icon={<FileBarChart size={18} />} title="All Reports" subtitle={`${reportsList.length} documents`} />
            </div>
            <div className="overflow-x-auto px-2 pb-2">
              <table className="w-full min-w-[560px] text-left">
                <thead>
                  <tr className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    <th className="px-4 pb-3">Report</th>
                    <th className="px-4 pb-3">Type</th>
                    <th className="px-4 pb-3">Date</th>
                    <th className="px-4 pb-3">Status</th>
                    <th className="px-4 pb-3" />
                  </tr>
                </thead>
                <tbody>
                  {reportsList.map((report) => (
                    <tr key={report.id} className="border-t border-slate-100 text-[13px] transition-colors hover:bg-slate-50/60 dark:border-white/5 dark:hover:bg-white/[0.03]">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2.5">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-brand-600 dark:bg-brand-900/20 dark:text-brand-300">
                            <FileText size={14} />
                          </div>
                          <div>
                            <p className="font-semibold text-slate-700 dark:text-slate-200">{report.name}</p>
                            <p className="text-[11px] text-slate-400">{report.size}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-slate-500 dark:text-slate-400">{report.type}</td>
                      <td className="px-4 py-3 font-mono-num text-slate-500 dark:text-slate-400">{report.date}</td>
                      <td className="px-4 py-3">
                        <Badge tone={statusTone[report.status]}>{report.status}</Badge>
                      </td>
                      <td className="px-4 py-3">
                        <button aria-label="Download report" className="text-slate-400 hover:text-brand-600 dark:hover:text-brand-300">
                          <Download size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        <div className="xl:col-span-2 space-y-5">
          <Card className="bg-gradient-to-br from-brand-600 to-brand-800 border-none text-white">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15">
              <Sparkles size={18} />
            </div>
            <h3 className="mt-4 font-display text-lg font-bold">AI Report Builder</h3>
            <p className="mt-1.5 text-[13px] leading-relaxed text-brand-50/90">
              Describe what you need and Copilot will draft a fully formatted ESG report using your live data.
            </p>
            <Button variant="secondary" size="sm" className="mt-4 w-full bg-white text-brand-700 hover:bg-brand-50">
              Start a new report
            </Button>
          </Card>

          <Card>
            <CardHeader title="Report Templates" subtitle="Start from a preset structure" />
            <ul className="space-y-2">
              {['GRI Standards Report', 'CSRD Disclosure Pack', 'CDP Climate Response', 'SASB Industry Metrics'].map((template) => (
                <li key={template}>
                  <button className="flex w-full items-center justify-between rounded-xl border border-slate-100 px-3.5 py-2.5 text-left text-[13px] font-medium text-slate-600 transition-colors hover:border-brand-200 hover:bg-brand-50/50 dark:border-white/5 dark:text-slate-300 dark:hover:bg-white/5">
                    {template}
                    <span className="text-slate-300">→</span>
                  </button>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}
