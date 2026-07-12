import { Link, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard,
  Leaf,
  Users,
  Scale,
  Sparkles,
  FileText,
  Bot,
  Settings,
  Search,
  Bell,
  ChevronDown,
} from "lucide-react";
import type { ReactNode } from "react";

const nav = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard },
  { to: "/environmental", label: "Environmental", icon: Leaf },
  { to: "/social", label: "Social", icon: Users },
  { to: "/governance", label: "Governance", icon: Scale },
  { to: "/sustainability-hub", label: "Sustainability Hub", icon: Sparkles },
  { to: "/reports", label: "Reports", icon: FileText },
  { to: "/ai-copilot", label: "AI Copilot", icon: Bot },
  { to: "/settings", label: "Settings", icon: Settings },
] as const;

export function AppLayout({ children, title, subtitle }: { children: ReactNode; title: string; subtitle?: string }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 flex-col bg-sidebar text-sidebar-foreground lg:flex">
        <div className="flex h-16 items-center gap-2 px-5 border-b border-sidebar-border">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
            <Leaf className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <div className="truncate text-sm font-semibold text-white">EcoSphere AI</div>
            <div className="truncate text-[11px] text-sidebar-foreground/60">ESG Platform</div>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto p-3">
          <div className="px-2 pb-2 pt-1 text-[10px] font-semibold uppercase tracking-wider text-sidebar-foreground/50">
            Workspace
          </div>
          <ul className="space-y-1">
            {nav.map((item) => {
              const active = pathname === item.to;
              const Icon = item.icon;
              return (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className={`group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      active
                        ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-sm"
                        : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                    }`}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    <span className="truncate">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="m-3 rounded-xl border border-sidebar-border bg-sidebar-accent/40 p-3">
          <div className="flex items-center gap-2 text-xs text-sidebar-foreground/80">
            <Sparkles className="h-3.5 w-3.5 text-sidebar-primary" />
            <span className="font-semibold">Pro Tier</span>
          </div>
          <p className="mt-1 text-[11px] leading-relaxed text-sidebar-foreground/60">
            Real-time carbon accounting and AI insights enabled.
          </p>
        </div>
      </aside>

      {/* Main */}
      <div className="lg:pl-64">
        <header className="sticky top-0 z-20 flex h-16 items-center gap-3 border-b border-border bg-card/80 px-4 backdrop-blur sm:px-6">
          <div className="lg:hidden">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-sidebar text-sidebar-primary">
              <Leaf className="h-5 w-5" />
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <div className="hidden items-center gap-2 rounded-lg border border-border bg-secondary/40 px-3 py-2 text-sm text-muted-foreground sm:flex max-w-md">
              <Search className="h-4 w-4" />
              <input
                className="w-full bg-transparent outline-none placeholder:text-muted-foreground"
                placeholder="Search metrics, reports, initiatives..."
              />
            </div>
          </div>
          <button className="relative grid h-9 w-9 place-items-center rounded-lg border border-border bg-card hover:bg-secondary">
            <Bell className="h-4 w-4" />
            <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-destructive" />
          </button>
          <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-2 py-1.5">
            <div className="grid h-7 w-7 place-items-center rounded-md bg-primary text-primary-foreground text-xs font-semibold">
              AK
            </div>
            <div className="hidden text-left sm:block">
              <div className="text-xs font-semibold leading-tight">Ava Klein</div>
              <div className="text-[10px] text-muted-foreground leading-tight">Chief Sustainability</div>
            </div>
            <ChevronDown className="hidden h-3.5 w-3.5 text-muted-foreground sm:block" />
          </div>
        </header>

        {/* Mobile nav pills */}
        <div className="lg:hidden overflow-x-auto border-b border-border bg-card">
          <div className="flex gap-1 px-3 py-2">
            {nav.map((item) => {
              const active = pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`whitespace-nowrap rounded-md px-3 py-1.5 text-xs font-medium ${
                    active ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-secondary"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>

        <main className="p-4 sm:p-6 lg:p-8">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h1>
            {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}
          </div>
          {children}
        </main>
      </div>
    </div>
  );
}
