import {
  carbonTrend,
  complianceAlerts,
  departmentPerformance,
  leaderboardPreview,
  overallEsgScore,
  pillarScores,
  quickActions,
  recentActivities,
  upcomingChallenges,
} from '../data/mockData';

/**
 * This service layer intentionally mimics an async API client.
 * Swap the resolved values for real `fetch` calls when a backend is available -
 * consuming components will not need to change.
 */
function resolveAfter<T>(data: T, delay = 250): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(data), delay));
}

export const esgService = {
  getOverallScore: () => resolveAfter(overallEsgScore),
  getPillarScores: () => resolveAfter(pillarScores),
  getCarbonTrend: () => resolveAfter(carbonTrend),
  getDepartmentPerformance: () => resolveAfter(departmentPerformance),
  getComplianceAlerts: () => resolveAfter(complianceAlerts),
  getRecentActivities: () => resolveAfter(recentActivities),
  getUpcomingChallenges: () => resolveAfter(upcomingChallenges),
  getLeaderboardPreview: () => resolveAfter(leaderboardPreview),
  getQuickActions: () => resolveAfter(quickActions),
};
