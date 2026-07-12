import { NavLink } from 'react-router-dom';
import { ChevronsLeft, X } from 'lucide-react';
import { navItems } from '../../data/mockData';
import { iconMap } from './iconMap';
import { Logo } from './Logo';
import { cn } from '../../utils/cn';

interface SidebarProps {
  collapsed: boolean;
  toggleCollapsed: () => void;
  mobileOpen: boolean;
  closeMobile: () => void;
}

export function Sidebar({ collapsed, toggleCollapsed, mobileOpen, closeMobile }: SidebarProps) {
  return (
    <>
      {/* Mobile scrim */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm lg:hidden animate-fade-in"
          onClick={closeMobile}
          aria-hidden="true"
        />
      )}

      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-50 flex flex-col border-r border-slate-200 bg-white dark:bg-[#0b1512] dark:border-white/10',
          'transition-all duration-300 ease-in-out',
          collapsed ? 'w-[76px]' : 'w-64',
          mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        )}
      >
        <div className="flex h-16 items-center justify-between px-4 border-b border-slate-100 dark:border-white/5">
          <Logo collapsed={collapsed} />
          <button
            onClick={closeMobile}
            aria-label="Close menu"
            className="lg:hidden text-slate-400 hover:text-slate-700"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-5">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const Icon = iconMap[item.icon];
              return (
                <li key={item.id}>
                  <NavLink
                    to={item.path}
                    end={item.path === '/'}
                    onClick={closeMobile}
                    className={({ isActive }) =>
                      cn(
                        'group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-[13.5px] font-semibold transition-all duration-200',
                        isActive
                          ? 'bg-brand-50 text-brand-700 dark:bg-brand-500/15 dark:text-brand-300'
                          : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800 hover:translate-x-0.5 dark:text-slate-400 dark:hover:bg-white/5 dark:hover:text-white'
                      )
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {isActive && (
                          <span className="absolute left-0 top-1/2 h-5 w-1 -translate-y-1/2 rounded-r-full bg-brand-500" />
                        )}
                        <Icon size={19} strokeWidth={2.1} className="shrink-0" />
                        {!collapsed && <span className="truncate">{item.label}</span>}
                        {!collapsed && item.badge && (
                          <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-brand-500 px-1.5 text-[10px] font-bold text-white">
                            {item.badge}
                          </span>
                        )}
                        {collapsed && (
                          <span className="pointer-events-none absolute left-full ml-3 whitespace-nowrap rounded-lg bg-slate-900 px-2.5 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100 z-50">
                            {item.label}
                          </span>
                        )}
                      </>
                    )}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="border-t border-slate-100 p-3 dark:border-white/5">
          <button
            onClick={toggleCollapsed}
            aria-label="Toggle sidebar"
            className="hidden lg:flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-semibold text-slate-400 hover:bg-slate-50 hover:text-slate-700 dark:hover:bg-white/5 dark:hover:text-white transition-colors"
          >
            <ChevronsLeft size={18} className={cn('shrink-0 transition-transform duration-300', collapsed && 'rotate-180')} />
            {!collapsed && 'Collapse'}
          </button>
        </div>
      </aside>
    </>
  );
}
