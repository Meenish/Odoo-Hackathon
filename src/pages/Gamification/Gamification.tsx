import { Trophy, Award, Flame } from 'lucide-react';
import { PageHeader } from '../../components/common/PageHeader';
import { Card, CardHeader } from '../../components/common/Card';
import { Avatar } from '../../components/common/Avatar';
import { TrendPill } from '../../components/common/TrendPill';
import { Badge } from '../../components/common/Badge';
import { UpcomingChallengesCard } from '../../components/dashboard/UpcomingChallengesCard';
import { fullLeaderboard, badges, upcomingChallenges } from '../../data/mockData';
import { formatNumber } from '../../utils/format';
import { cn } from '../../utils/cn';

export default function Gamification() {
  return (
    <div>
      <PageHeader
        eyebrow="Gamification"
        title="Sustainability Leaderboard"
        description="Reward teams for sustainable behavior and track engagement across the organization."
        action={
          <Badge tone="amber">
            <Flame size={12} /> 12-day streak
          </Badge>
        }
      />

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-5">
        <div className="xl:col-span-3">
          <Card>
            <CardHeader icon={<Trophy size={18} />} title="Full Leaderboard" subtitle="Ranked by cumulative ESG points" />
            <ul className="space-y-1.5">
              {fullLeaderboard.map((entry) => (
                <li
                  key={entry.id}
                  className={cn(
                    'flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-slate-50 dark:hover:bg-white/[0.04]',
                    entry.rank <= 3 && 'bg-brand-50/50 dark:bg-brand-500/5'
                  )}
                >
                  <span
                    className={cn(
                      'flex h-7 w-7 items-center justify-center rounded-lg font-mono-num text-[12.5px] font-bold',
                      entry.rank === 1 && 'bg-amber-100 text-amber-700',
                      entry.rank === 2 && 'bg-slate-200 text-slate-600',
                      entry.rank === 3 && 'bg-orange-100 text-orange-700',
                      entry.rank > 3 && 'text-slate-400'
                    )}
                  >
                    {entry.rank}
                  </span>
                  <Avatar name={entry.name} color={entry.avatarColor} size={34} />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[13px] font-semibold text-slate-700 dark:text-slate-200">{entry.name}</p>
                    <p className="text-[11px] text-slate-400">{entry.department}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono-num text-[13px] font-bold text-slate-700 dark:text-slate-200">
                      {formatNumber(entry.points)}
                    </p>
                    <TrendPill delta={entry.change === 'down' ? -1 : entry.change === 'up' ? 1 : 0} trend={entry.change} />
                  </div>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <div className="xl:col-span-2">
          <UpcomingChallengesCard challenges={upcomingChallenges} />
        </div>
      </div>

      <div className="mt-5">
        <Card>
          <CardHeader icon={<Award size={18} />} title="Achievement Badges" subtitle="Milestones unlocked by your organization" />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {badges.map((badge) => (
              <div
                key={badge.id}
                className={cn(
                  'flex flex-col items-center gap-2.5 rounded-xl border p-4 text-center transition-all duration-200',
                  badge.earned
                    ? 'border-slate-100 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)] dark:border-white/5'
                    : 'border-dashed border-slate-200 opacity-50 dark:border-white/10'
                )}
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full text-white"
                  style={{ background: badge.earned ? badge.color : '#cbd5e1' }}
                >
                  <Award size={20} />
                </div>
                <div>
                  <p className="text-[12px] font-semibold text-slate-700 dark:text-slate-200">{badge.label}</p>
                  <p className="mt-0.5 text-[10.5px] leading-snug text-slate-400">{badge.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
