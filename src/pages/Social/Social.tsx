import { Users, HeartHandshake, GraduationCap, ShieldCheck } from 'lucide-react';
import { PageHeader } from '../../components/common/PageHeader';
import { MetricCard } from '../../components/cards/MetricCard';
import { TrendLineChart } from '../../components/charts/TrendLineChart';
import { Card, CardHeader } from '../../components/common/Card';
import { ProgressBar } from '../../components/common/ProgressBar';
import { Avatar } from '../../components/common/Avatar';
import { socialMetrics } from '../../data/mockData';

const wellbeingTrend = [
  { month: 'Feb', score: 74 },
  { month: 'Mar', score: 76 },
  { month: 'Apr', score: 75 },
  { month: 'May', score: 78 },
  { month: 'Jun', score: 80 },
  { month: 'Jul', score: 82 },
];

const deiBreakdown = [
  { label: 'Gender Diversity', value: 47, color: '#2778a6' },
  { label: 'Ethnic Diversity', value: 38, color: '#229d6f' },
  { label: 'Leadership Diversity', value: 31, color: '#c8871a' },
];

const teamHighlights = [
  { name: 'Amara Chen', role: 'Led community health drive', hours: 42, color: '#147d59' },
  { name: 'Rahul Verma', role: 'Mentored 6 new hires', hours: 36, color: '#2778a6' },
  { name: 'Sofia Petrov', role: 'Organized supply co-op audit', hours: 29, color: '#c8871a' },
];

export default function Social() {
  return (
    <div>
      <PageHeader
        eyebrow="Social"
        title="Social Impact & People"
        description="Employee wellbeing, diversity & inclusion, and community engagement across the organization."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 mb-5">
        {socialMetrics.map((metric) => (
          <MetricCard key={metric.label} metric={metric} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-5">
        <div className="xl:col-span-3">
          <TrendLineChart
            data={wellbeingTrend}
            dataKey="score"
            title="Employee Wellbeing Index"
            subtitle="Monthly survey composite score"
            icon={<HeartHandshake size={18} />}
            color="#2778a6"
          />
        </div>
        <div className="xl:col-span-2">
          <Card>
            <CardHeader icon={<Users size={18} />} title="DEI Breakdown" subtitle="Representation across key dimensions" />
            <div className="space-y-4">
              {deiBreakdown.map((item) => (
                <div key={item.label}>
                  <div className="mb-1.5 flex items-center justify-between text-[12.5px] font-medium text-slate-600 dark:text-slate-300">
                    <span>{item.label}</span>
                    <span className="font-mono-num text-slate-500">{item.value}%</span>
                  </div>
                  <ProgressBar value={item.value} color={item.color} />
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 mt-5 lg:grid-cols-2">
        <Card>
          <CardHeader icon={<GraduationCap size={18} />} title="Community Champions" subtitle="Top contributors this quarter" />
          <ul className="space-y-2.5">
            {teamHighlights.map((person) => (
              <li key={person.name} className="flex items-center gap-3 rounded-xl border border-slate-100 px-3.5 py-2.5 dark:border-white/5">
                <Avatar name={person.name} color={person.color} size={36} />
                <div className="min-w-0 flex-1">
                  <p className="text-[13px] font-semibold text-slate-700 dark:text-slate-200">{person.name}</p>
                  <p className="text-[11.5px] text-slate-500 dark:text-slate-400">{person.role}</p>
                </div>
                <span className="font-mono-num text-[12.5px] font-semibold text-brand-600 dark:text-brand-300">
                  {person.hours}h
                </span>
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <CardHeader icon={<ShieldCheck size={18} />} title="Health & Safety" subtitle="Incident rate & training coverage" />
          <div className="space-y-4">
            <div>
              <div className="mb-1.5 flex items-center justify-between text-[12.5px] font-medium text-slate-600 dark:text-slate-300">
                <span>Safety Training Coverage</span>
                <span className="font-mono-num text-slate-500">98%</span>
              </div>
              <ProgressBar value={98} color="#229d6f" />
            </div>
            <div>
              <div className="mb-1.5 flex items-center justify-between text-[12.5px] font-medium text-slate-600 dark:text-slate-300">
                <span>Near-Miss Reporting Rate</span>
                <span className="font-mono-num text-slate-500">86%</span>
              </div>
              <ProgressBar value={86} color="#2778a6" />
            </div>
            <div>
              <div className="mb-1.5 flex items-center justify-between text-[12.5px] font-medium text-slate-600 dark:text-slate-300">
                <span>Mental Health Program Enrollment</span>
                <span className="font-mono-num text-slate-500">64%</span>
              </div>
              <ProgressBar value={64} color="#c8871a" />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
