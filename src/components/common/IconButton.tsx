import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../utils/cn';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  'aria-label': string;
}

export function IconButton({ children, className, ...rest }: IconButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        'relative inline-flex h-10 w-10 items-center justify-center rounded-xl text-slate-500',
        'hover:bg-slate-100 hover:text-slate-800 active:scale-95',
        'dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-white',
        'transition-all duration-200',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
