export type TrendDirection = 'up' | 'down' | 'flat';

export interface ScoreMetric {
  label: string;
  value: number;
  maxValue?: number;
  delta: number;
  trend: TrendDirection;
  description?: string;
}

export interface EsgPillarScore {
  id: 'environmental' | 'social' | 'governance';
  label: string;
  score: number;
  delta: number;
  trend: TrendDirection;
  color: string;
  summary: string;
}

export interface CarbonTrendPoint {
  month: string;
  emissions: number;
  target: number;
  offset: number;
}

export interface DepartmentPerformance {
  department: string;
  environmental: number;
  social: number;
  governance: number;
}

export type AlertSeverity = 'critical' | 'warning' | 'info';

export interface ComplianceAlert {
  id: string;
  title: string;
  description: string;
  severity: AlertSeverity;
  dueDate: string;
  regulation: string;
}

export type ActivityType = 'report' | 'audit' | 'milestone' | 'team' | 'ai' | 'alert';

export interface ActivityItem {
  id: string;
  type: ActivityType;
  actor: string;
  action: string;
  target: string;
  timestamp: string;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  category: 'environmental' | 'social' | 'governance';
  reward: number;
  progress: number;
  participants: number;
  deadline: string;
}

export interface LeaderboardEntry {
  id: string;
  rank: number;
  name: string;
  department: string;
  points: number;
  avatarColor: string;
  change: TrendDirection;
}

export interface QuickAction {
  id: string;
  label: string;
  description: string;
  icon: string;
  accent: string;
}

export interface NavItem {
  id: string;
  label: string;
  path: string;
  icon: string;
  badge?: number;
}

export type ThemeMode = 'light' | 'dark';
