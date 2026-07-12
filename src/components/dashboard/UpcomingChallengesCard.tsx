import { Trophy, Users, Coins } from 'lucide-react';
import type { Challenge } from '../../types';
import { Card, CardHeader } from '../common/Card';
import { ProgressBar } from '../common/ProgressBar';
import { Badge } from '../common/Badge';

const categoryTone = {
  environmental: 'brand',
  social: 'sky',
  governance: 'amber',
} as const;

export function UpcomingChallengesCard({ challenges }: { challenges: Challenge[] }) {
  return (
    <Card className="animate-fade-up [animation-delay:320ms]">
      <CardHeader icon={<Trophy size={18} />} title="Upcoming Challenges" subtitle="Team sustainability goals" />
      <div className="space-y-4">
        {challenges.map((challenge) => (
          <div
            key={challenge.id}
            className="rounded-xl border border-slate-100 p-3.5 transition-colors hover:border-slate-200 hover:bg-slate-50/60 dark:border-white/5 dark:hover:bg-white/[0.04]"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[13.5px] font-semibold text-slate-800 dark:text-slate-100">{challenge.title}</p>
                <p className="mt-0.5 text-[12px] leading-snug text-slate-500 dark:text-slate-400">{challenge.description}</p>
              </div>
              <Badge tone={categoryTone[challenge.category]}>{challenge.deadline}</Badge>
            </div>

            <div className="mt-3">
              <div className="mb-1.5 flex items-center justify-between text-[11px] font-medium text-slate-400">
                <span>Progress</span>
                <span className="font-mono-num text-slate-500">{challenge.progress}%</span>
              </div>
              <ProgressBar value={challenge.progress} />
            </div>

            <div className="mt-3 flex items-center gap-4 text-[11px] text-slate-400">
              <span className="flex items-center gap-1">
                <Users size={12} /> {challenge.participants} joined
              </span>
              <span className="flex items-center gap-1">
                <Coins size={12} /> {challenge.reward} pts
              </span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
