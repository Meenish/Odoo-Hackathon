import type {
  ActivityItem,
  Challenge,
  ComplianceAlert,
  DepartmentPerformance,
  CarbonTrendPoint,
  EsgPillarScore,
  LeaderboardEntry,
  QuickAction,
  NavItem,
  ScoreMetric,
} from '../types';

export const navItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', path: '/', icon: 'LayoutDashboard' },
  { id: 'environmental', label: 'Environmental', path: '/environmental', icon: 'Leaf' },
  { id: 'social', label: 'Social', path: '/social', icon: 'Users' },
  { id: 'governance', label: 'Governance', path: '/governance', icon: 'Landmark' },
  { id: 'gamification', label: 'Gamification', path: '/gamification', icon: 'Trophy' },
  { id: 'reports', label: 'Reports', path: '/reports', icon: 'FileBarChart' },
  { id: 'ai', label: 'AI Copilot', path: '/ai-copilot', icon: 'Sparkles', badge: 3 },
  { id: 'settings', label: 'Settings', path: '/settings', icon: 'Settings' },
];

export const overallEsgScore = {
  value: 78,
  delta: 4.2,
  trend: 'up' as const,
  rating: 'AA',
  percentile: 88,
};

export const pillarScores: EsgPillarScore[] = [
  {
    id: 'environmental',
    label: 'Environmental',
    score: 82,
    delta: 5.1,
    trend: 'up',
    color: 'var(--color-brand-500)',
    summary: 'Carbon intensity down 12% YoY, renewable mix at 61%.',
  },
  {
    id: 'social',
    label: 'Social',
    score: 74,
    delta: 1.8,
    trend: 'up',
    color: '#2778a6',
    summary: 'Employee wellbeing index steady, DEI targets 92% met.',
  },
  {
    id: 'governance',
    label: 'Governance',
    score: 79,
    delta: -0.6,
    trend: 'down',
    color: '#c8871a',
    summary: 'Board diversity strong; 2 policy reviews overdue.',
  },
];

export const carbonTrend: CarbonTrendPoint[] = [
  { month: 'Jan', emissions: 4120, target: 4300, offset: 380 },
  { month: 'Feb', emissions: 3980, target: 4200, offset: 410 },
  { month: 'Mar', emissions: 4050, target: 4100, offset: 430 },
  { month: 'Apr', emissions: 3790, target: 4000, offset: 460 },
  { month: 'May', emissions: 3610, target: 3900, offset: 500 },
  { month: 'Jun', emissions: 3450, target: 3800, offset: 540 },
  { month: 'Jul', emissions: 3320, target: 3700, offset: 560 },
  { month: 'Aug', emissions: 3280, target: 3600, offset: 590 },
  { month: 'Sep', emissions: 3105, target: 3500, offset: 610 },
  { month: 'Oct', emissions: 2990, target: 3400, offset: 650 },
  { month: 'Nov', emissions: 2870, target: 3300, offset: 680 },
  { month: 'Dec', emissions: 2745, target: 3200, offset: 720 },
];

export const departmentPerformance: DepartmentPerformance[] = [
  { department: 'Manufacturing', environmental: 76, social: 68, governance: 80 },
  { department: 'Logistics', environmental: 71, social: 72, governance: 75 },
  { department: 'R&D', environmental: 88, social: 80, governance: 82 },
  { department: 'Sales', environmental: 65, social: 78, governance: 74 },
  { department: 'HR', environmental: 70, social: 91, governance: 85 },
  { department: 'Facilities', environmental: 84, social: 66, governance: 71 },
];

export const complianceAlerts: ComplianceAlert[] = [
  {
    id: 'ca-1',
    title: 'Scope 3 disclosure deadline',
    description: 'Annual supply-chain emissions disclosure due to regulator.',
    severity: 'critical',
    dueDate: 'Due in 3 days',
    regulation: 'CSRD',
  },
  {
    id: 'ca-2',
    title: 'Water usage permit renewal',
    description: 'Facility permit for Plant 4 requires renewal filing.',
    severity: 'warning',
    dueDate: 'Due in 9 days',
    regulation: 'Local EPA',
  },
  {
    id: 'ca-3',
    title: 'Board diversity policy review',
    description: 'Quarterly governance policy review is overdue.',
    severity: 'warning',
    dueDate: 'Overdue by 2 days',
    regulation: 'Internal Policy',
  },
  {
    id: 'ca-4',
    title: 'Supplier code of conduct audit',
    description: 'Annual third-party audit scheduled for confirmation.',
    severity: 'info',
    dueDate: 'Due in 21 days',
    regulation: 'ISO 20400',
  },
];

export const recentActivities: ActivityItem[] = [
  { id: 'ac-1', type: 'ai', actor: 'EcoSphere Copilot', action: 'flagged an anomaly in', target: 'Plant 4 energy usage', timestamp: '12 min ago' },
  { id: 'ac-2', type: 'report', actor: 'Amara Chen', action: 'published', target: 'Q3 Sustainability Report', timestamp: '1 hr ago' },
  { id: 'ac-3', type: 'milestone', actor: 'Logistics Team', action: 'reached', target: '60% fleet electrification', timestamp: '3 hrs ago' },
  { id: 'ac-4', type: 'audit', actor: 'Compliance Bot', action: 'completed audit for', target: 'Supplier Code of Conduct', timestamp: '5 hrs ago' },
  { id: 'ac-5', type: 'team', actor: 'Rahul Verma', action: 'joined the', target: 'Zero Waste Challenge', timestamp: 'Yesterday' },
  { id: 'ac-6', type: 'alert', actor: 'System', action: 'raised a compliance alert for', target: 'Water usage permit', timestamp: 'Yesterday' },
];

export const upcomingChallenges: Challenge[] = [
  {
    id: 'ch-1',
    title: 'Zero Waste Week',
    description: 'Cut office & facility waste to landfill by 40%.',
    category: 'environmental',
    reward: 500,
    progress: 62,
    participants: 184,
    deadline: '5 days left',
  },
  {
    id: 'ch-2',
    title: 'Volunteer Sprint',
    description: 'Log 1,000 collective community volunteer hours.',
    category: 'social',
    reward: 350,
    progress: 41,
    participants: 96,
    deadline: '12 days left',
  },
  {
    id: 'ch-3',
    title: 'Policy Refresh Sprint',
    description: 'Complete all overdue governance policy reviews.',
    category: 'governance',
    reward: 250,
    progress: 78,
    participants: 22,
    deadline: '3 days left',
  },
];

export const leaderboardPreview: LeaderboardEntry[] = [
  { id: 'lb-1', rank: 1, name: 'R&D Division', department: 'R&D', points: 12840, avatarColor: '#147d59', change: 'up' },
  { id: 'lb-2', rank: 2, name: 'HR Division', department: 'HR', points: 11920, avatarColor: '#2778a6', change: 'up' },
  { id: 'lb-3', rank: 3, name: 'Facilities Team', department: 'Facilities', points: 10770, avatarColor: '#c8871a', change: 'flat' },
  { id: 'lb-4', rank: 4, name: 'Manufacturing', department: 'Manufacturing', points: 9840, avatarColor: '#c4436a', change: 'down' },
];

export const environmentalMetrics: ScoreMetric[] = [
  { label: 'Carbon Emissions', value: 2745, delta: -12.4, trend: 'down', description: 'tCO₂e this quarter' },
  { label: 'Renewable Energy Mix', value: 61, delta: 8.2, trend: 'up', description: '% of total energy use' },
  { label: 'Water Consumption', value: 18420, delta: -4.1, trend: 'down', description: 'kL this quarter' },
  { label: 'Waste Diverted', value: 74, delta: 6.5, trend: 'up', description: '% diverted from landfill' },
];

export const socialMetrics: ScoreMetric[] = [
  { label: 'Employee Wellbeing Index', value: 82, delta: 2.1, trend: 'up', description: 'Out of 100' },
  { label: 'DEI Target Completion', value: 92, delta: 3.4, trend: 'up', description: '% of annual goals met' },
  { label: 'Volunteer Hours', value: 4120, delta: 14.8, trend: 'up', description: 'Logged this quarter' },
  { label: 'Safety Incident Rate', value: 0.8, delta: -22.0, trend: 'down', description: 'Per 200k hours worked' },
];

export const governanceMetrics: ScoreMetric[] = [
  { label: 'Board Diversity', value: 46, delta: 5.0, trend: 'up', description: '% of underrepresented groups' },
  { label: 'Policy Reviews Completed', value: 88, delta: -3.2, trend: 'down', description: '% completed on schedule' },
  { label: 'Ethics Training Completion', value: 97, delta: 1.5, trend: 'up', description: '% of workforce trained' },
  { label: 'Data Privacy Incidents', value: 1, delta: -50.0, trend: 'down', description: 'Reported this quarter' },
];

export const fullLeaderboard: LeaderboardEntry[] = [
  ...leaderboardPreview,
  { id: 'lb-5', rank: 5, name: 'Sales Division', department: 'Sales', points: 8710, avatarColor: '#7c3aed', change: 'up' },
  { id: 'lb-6', rank: 6, name: 'Logistics Team', department: 'Logistics', points: 8120, avatarColor: '#0f766e', change: 'down' },
  { id: 'lb-7', rank: 7, name: 'IT Division', department: 'IT', points: 7450, avatarColor: '#be185d', change: 'flat' },
];

export const badges = [
  { id: 'b1', label: 'Carbon Cutter', description: 'Reduced emissions 10%+ in a quarter', earned: true, color: '#147d59' },
  { id: 'b2', label: 'Waste Warrior', description: 'Diverted 500kg from landfill', earned: true, color: '#2778a6' },
  { id: 'b3', label: 'Volunteer Champion', description: '100+ volunteer hours logged', earned: true, color: '#c8871a' },
  { id: 'b4', label: 'Policy Pioneer', description: 'Completed all governance reviews', earned: false, color: '#c4436a' },
  { id: 'b5', label: 'Net Zero Hero', description: 'Achieved net-zero for one facility', earned: false, color: '#7c3aed' },
  { id: 'b6', label: 'Community Builder', description: 'Led 3 community initiatives', earned: false, color: '#0f766e' },
];

export const reportsList = [
  { id: 'r1', name: 'Q3 2026 Sustainability Report', type: 'Quarterly', status: 'Published', date: 'Jul 2, 2026', size: '4.2 MB' },
  { id: 'r2', name: 'CSRD Compliance Disclosure', type: 'Regulatory', status: 'In Review', date: 'Jun 28, 2026', size: '2.8 MB' },
  { id: 'r3', name: 'Annual Carbon Footprint Analysis', type: 'Annual', status: 'Published', date: 'Jun 14, 2026', size: '6.1 MB' },
  { id: 'r4', name: 'Supplier Code of Conduct Audit', type: 'Audit', status: 'Draft', date: 'Jun 8, 2026', size: '1.4 MB' },
  { id: 'r5', name: 'Board Governance Review', type: 'Governance', status: 'Published', date: 'May 30, 2026', size: '990 KB' },
  { id: 'r6', name: 'DEI Progress Report', type: 'Social', status: 'Published', date: 'May 18, 2026', size: '2.1 MB' },
];

export const aiSuggestedPrompts = [
  'Summarize our Scope 3 emissions risk for the board',
  'Which department improved governance the most this quarter?',
  'Draft an executive summary for the CSRD disclosure',
  'What actions would raise our ESG score fastest?',
];

export const aiInsights = [
  { id: 'i1', title: 'Emissions trending 12% below target', detail: 'Manufacturing and Facilities are driving the improvement — mostly from the Plant 4 solar rollout.', tone: 'brand' as const },
  { id: 'i2', title: 'Governance review backlog forming', detail: '2 policy reviews are overdue. Recommend assigning owners this week to avoid compliance risk.', tone: 'amber' as const },
  { id: 'i3', title: 'Volunteer participation up 15%', detail: 'HR-led initiatives are outperforming last quarter; consider expanding the program org-wide.', tone: 'sky' as const },
];

export const quickActions: QuickAction[] = [
  { id: 'qa-1', label: 'Generate Report', description: 'AI-drafted ESG report', icon: 'FileBarChart', accent: 'brand' },
  { id: 'qa-2', label: 'Log Activity', description: 'Record a sustainability action', icon: 'PlusCircle', accent: 'sky' },
  { id: 'qa-3', label: 'Ask Copilot', description: 'Query your ESG data', icon: 'Sparkles', accent: 'amber' },
  { id: 'qa-4', label: 'Invite Team', description: 'Add a teammate to EcoSphere', icon: 'UserPlus', accent: 'rose' },
];
