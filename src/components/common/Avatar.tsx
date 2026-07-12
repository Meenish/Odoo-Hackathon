import { cn } from '../../utils/cn';

export function Avatar({
  name,
  color = 'var(--color-brand-500)',
  size = 36,
  className,
}: {
  name: string;
  color?: string;
  size?: number;
  className?: string;
}) {
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  return (
    <div
      className={cn('flex shrink-0 items-center justify-center rounded-full font-display font-bold text-white', className)}
      style={{ width: size, height: size, background: color, fontSize: size * 0.38 }}
    >
      {initials}
    </div>
  );
}
