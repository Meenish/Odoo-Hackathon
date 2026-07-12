import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/layout/Sidebar';
import { Navbar } from '../components/layout/Navbar';
import { useSidebar } from '../hooks/useSidebar';
import { useTheme } from '../hooks/useTheme';
import { cn } from '../utils/cn';

export function DashboardLayout() {
  const { collapsed, toggleCollapsed, mobileOpen, toggleMobile, closeMobile } = useSidebar();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-[#f6f8f7] dark:bg-[#0a1210]">
      <Sidebar collapsed={collapsed} toggleCollapsed={toggleCollapsed} mobileOpen={mobileOpen} closeMobile={closeMobile} />

      <div
        className={cn(
          'flex min-h-screen flex-col transition-all duration-300 ease-in-out',
          collapsed ? 'lg:pl-[76px]' : 'lg:pl-64'
        )}
      >
        <Navbar theme={theme} toggleTheme={toggleTheme} onOpenMobileMenu={toggleMobile} />
        <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1500px]">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
