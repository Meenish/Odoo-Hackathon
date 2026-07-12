import { useEffect, useState } from 'react';
import { PageHeader } from '../../components/common/PageHeader';
import { Button } from '../../components/common/Button';
import { Skeleton } from '../../components/common/Skeleton';
import { EsgScoreHero } from '../../components/dashboard/EsgScoreHero';
import { CarbonTrendChart } from '../../components/charts/CarbonTrendChart';
import { DepartmentPerformanceChart } from '../../components/charts/DepartmentPerformanceChart';
import { ComplianceAlertsCard } from '../../components/dashboard/ComplianceAlertsCard';
import { RecentActivityCard } from '../../components/dashboard/RecentActivityCard';
import { UpcomingChallengesCard } from '../../components/dashboard/UpcomingChallengesCard';
import { LeaderboardPreviewCard } from '../../components/dashboard/LeaderboardPreviewCard';
import { QuickActionsCard } from '../../components/dashboard/QuickActionsCard';
import { esgService } from '../../services/esgService';
import { FileDown, Sparkles } from 'lucide-react';
import type {
  ActivityItem,
  Challenge,
  ComplianceAlert,
  DepartmentPerformance,
  CarbonTrendPoint,
  EsgPillarScore,
  LeaderboardEntry,
  QuickAction,
} from '../../types';
import { overallEsgScore as scoreType } from '../../data/mockData';

interface DashboardData {
  score: typeof scoreType;
  pillars: EsgPillarScore[];
  carbon: CarbonTrendPoint[];
  departments: DepartmentPerformance[];
  alerts: ComplianceAlert[];
  activities: ActivityItem[];
  challenges: Challenge[];
  leaderboard: LeaderboardEntry[];
  actions: QuickAction[];
}

export default function Dashboard() {
  const [data, setData] = useState<DashboardData | null>(null);

  useEffect(() => {
    let mounted = true;
    Promise.all([
      esgService.getOverallScore(),
      esgService.getPillarScores(),
      esgService.getCarbonTrend(),
      esgService.getDepartmentPerformance(),
      esgService.getComplianceAlerts(),
      esgService.getRecentActivities(),
      esgService.getUpcomingChallenges(),
      esgService.getLeaderboardPreview(),
      esgService.getQuickActions(),
    ]).then(([score, pillars, carbon, departments, alerts, activities, challenges, leaderboard, actions]) => {
      if (!mounted) return;
      setData({ score, pillars, carbon, departments, alerts, activities, challenges, leaderboard, actions });
    });
    return () => {
      mounted = false;
    };
  }, []);

  if (!data) return <DashboardSkeleton />;

  return (
    <div>
      <PageHeader
        eyebrow="Overview"
        title="Welcome back, Priya"
        description="Here's how your organization's sustainability performance is trending this quarter."
        action={
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" icon={<FileDown size={15} />}>
              Export
            </Button>
            <Button variant="primary" size="sm" icon={<Sparkles size={15} />}>
              Ask Copilot
            </Button>
          </div>
        }
      />

      <div className="space-y-5">
        <EsgScoreHero score={data.score} pillars={data.pillars} />

        <div className="grid grid-cols-1 gap-5 xl:grid-cols-5">
          <div className="xl:col-span-3">
            <CarbonTrendChart data={data.carbon} />
          </div>
          <div className="xl:col-span-2">
            <ComplianceAlertsCard alerts={data.alerts} />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 xl:grid-cols-5">
          <div className="xl:col-span-3">
            <DepartmentPerformanceChart data={data.departments} />
          </div>
          <div className="xl:col-span-2">
            <RecentActivityCard activities={data.activities} />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          <UpcomingChallengesCard challenges={data.challenges} />
          <LeaderboardPreviewCard entries={data.leaderboard} />
          <QuickActionsCard actions={data.actions} />
        </div>
      </div>
    </div>
  );
}

function DashboardSkeleton() {
  return (
    <div className="space-y-5">
      <Skeleton className="h-8 w-64" />
      <Skeleton className="h-52 w-full rounded-2xl" />
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-5">
        <Skeleton className="h-80 w-full rounded-2xl xl:col-span-3" />
        <Skeleton className="h-80 w-full rounded-2xl xl:col-span-2" />
      </div>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <Skeleton className="h-64 w-full rounded-2xl" />
        <Skeleton className="h-64 w-full rounded-2xl" />
        <Skeleton className="h-64 w-full rounded-2xl" />
      </div>
    </div>
  );
}
