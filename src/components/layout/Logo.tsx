export function Logo({ collapsed = false }: { collapsed?: boolean }) {
  return (
    <div className="flex items-center gap-2.5 overflow-hidden">
      <div className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-700 shadow-md shadow-brand-600/30">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2C7 4 4 8 4 13c0 4.5 3.5 8 8 8s8-3.5 8-8c0-1-.15-1.95-.43-2.85"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path d="M12 21V11" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M12 11c2-3 5-4 8-3.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      {!collapsed && (
        <div className="leading-tight">
          <p className="font-display text-[15px] font-extrabold tracking-tight text-slate-900 dark:text-white">
            EcoSphere <span className="text-brand-600 dark:text-brand-400">AI</span>
          </p>
          <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">ESG Command Center</p>
        </div>
      )}
    </div>
  );
}
