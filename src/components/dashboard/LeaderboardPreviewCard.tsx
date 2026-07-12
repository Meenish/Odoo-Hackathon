import { Crown, ArrowRight } from 'lucide-react';
import type { LeaderboardEntry } from '../../types';
import { Card, CardHeader } from '../common/Card';
import { Avatar } from '../common/Avatar';
import { TrendPill } from '../common/TrendPill';
import { formatNumber } from '../../utils/format';

export function LeaderboardPreviewCard({ entries }: { entries: LeaderboardEntry[] }) {
  return (
    <Card className="animate-fade-up [animation-delay:380ms]">
      <CardHeader icon={<Crown size={18} />} title="Leaderboard" subtitle="Top performing teams this month" />
      <ul className="space-y-1">
        {entries.map((entry) => (
          <li
            key={entry.id}
            className="flex items-center gap-3 rounded-xl px-2 py-2.5 transition-colors hover:bg-slate-50 dark:hover:bg-white/[0.04]"
          >
            <span className="w-5 text-center font-mono-num text-[13px] font-bold text-slate-400">{entry.rank}</span>
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
      <button className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-xl border border-slate-100 py-2.5 text-[12.5px] font-semibold text-brand-600 transition-colors hover:bg-brand-50 dark:border-white/5 dark:text-brand-300 dark:hover:bg-white/5">
        View full leaderboard <ArrowRight size={13} />
      </button>
    </Card>
  );
}
