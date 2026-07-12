import { useState } from 'react';
import { Bell, Menu, Moon, Search, Sun, ChevronDown } from 'lucide-react';
import { IconButton } from '../common/IconButton';
import { Avatar } from '../common/Avatar';
import { cn } from '../../utils/cn';
import type { ThemeMode } from '../../types';

interface NavbarProps {
  theme: ThemeMode;
  toggleTheme: () => void;
  onOpenMobileMenu: () => void;
}

export function Navbar({ theme, toggleTheme, onOpenMobileMenu }: NavbarProps) {
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-slate-200 bg-white/80 px-4 backdrop-blur-md dark:border-white/10 dark:bg-[#0b1512]/80 sm:px-6">
      <button
        onClick={onOpenMobileMenu}
        aria-label="Open menu"
        className="text-slate-500 hover:text-slate-800 dark:text-slate-300 lg:hidden"
      >
        <Menu size={22} />
      </button>

      <div className="relative w-full max-w-md">
        <Search
          size={16}
          className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
        />
        <input
          type="text"
          placeholder="Search metrics, reports, teams..."
          className={cn(
            'w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm text-slate-700 placeholder:text-slate-400',
            'outline-none transition-all focus:border-brand-400 focus:bg-white focus:ring-4 focus:ring-brand-100',
            'dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:placeholder:text-slate-500 dark:focus:bg-white/10 dark:focus:ring-brand-500/10'
          )}
        />
        <kbd className="pointer-events-none absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-md border border-slate-200 bg-white px-1.5 py-0.5 text-[10px] font-semibold text-slate-400 sm:block dark:border-white/10 dark:bg-white/5">
          ⌘K
        </kbd>
      </div>

      <div className="ml-auto flex items-center gap-1.5 sm:gap-2">
        <IconButton aria-label="Toggle theme" onClick={toggleTheme}>
          <span className="relative block h-5 w-5">
            <Sun
              size={20}
              className={cn(
                'absolute inset-0 transition-all duration-300',
                theme === 'dark' ? 'scale-0 -rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100'
              )}
            />
            <Moon
              size={20}
              className={cn(
                'absolute inset-0 transition-all duration-300',
                theme === 'dark' ? 'scale-100 rotate-0 opacity-100' : 'scale-0 rotate-90 opacity-0'
              )}
            />
          </span>
        </IconButton>

        <IconButton aria-label="Notifications">
          <Bell size={19} />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-rose-500 animate-pulse-ring" />
        </IconButton>

        <div className="mx-1 h-6 w-px bg-slate-200 dark:bg-white/10" />

        <div className="relative">
          <button
            onClick={() => setProfileOpen((prev) => !prev)}
            className="flex items-center gap-2 rounded-xl py-1.5 pl-1.5 pr-2 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
          >
            <Avatar name="Priya Sharma" size={32} />
            <div className="hidden text-left leading-tight sm:block">
              <p className="text-[13px] font-semibold text-slate-800 dark:text-slate-100">Priya Sharma</p>
              <p className="text-[11px] text-slate-400">Sustainability Lead</p>
            </div>
            <ChevronDown size={15} className="hidden text-slate-400 sm:block" />
          </button>

          {profileOpen && (
            <div
              className="absolute right-0 top-full mt-2 w-52 animate-fade-up rounded-xl border border-slate-200 bg-white p-1.5 shadow-lg dark:border-white/10 dark:bg-[#101c18]"
              onMouseLeave={() => setProfileOpen(false)}
            >
              {['View profile', 'Account settings', 'Help & support', 'Sign out'].map((label) => (
                <button
                  key={label}
                  className="block w-full rounded-lg px-3 py-2 text-left text-[13px] font-medium text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-white/5"
                >
                  {label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
