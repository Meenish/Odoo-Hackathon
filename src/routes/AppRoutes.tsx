import { createBrowserRouter } from 'react-router-dom';
import { DashboardLayout } from '../layouts/DashboardLayout';
import Dashboard from '../pages/Dashboard/Dashboard';
import Environmental from '../pages/Environmental/Environmental';
import Social from '../pages/Social/Social';
import Governance from '../pages/Governance/Governance';
import Gamification from '../pages/Gamification/Gamification';
import Reports from '../pages/Reports/Reports';
import AICopilot from '../pages/AI/AICopilot';
import Settings from '../pages/Settings/Settings';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'environmental', element: <Environmental /> },
      { path: 'social', element: <Social /> },
      { path: 'governance', element: <Governance /> },
      { path: 'gamification', element: <Gamification /> },
      { path: 'reports', element: <Reports /> },
      { path: 'ai-copilot', element: <AICopilot /> },
      { path: 'settings', element: <Settings /> },
    ],
  },
]);
