export default function GenderBadge({ type, size = 'sm', className = '' }) {
  const isBoys = type === 'boys';

  const sizeClasses = {
    xs: 'px-2 py-0.5 text-[10px]',
    sm: 'px-2.5 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-semibold tracking-wide rounded-full ${
        isBoys
          ? 'bg-[var(--color-boys-light)] text-[var(--color-boys-primary)] border border-[var(--color-boys-border)]'
          : 'bg-[var(--color-girls-light)] text-[var(--color-girls-primary)] border border-[var(--color-girls-border)]'
      } ${sizeClasses[size]} ${className}`}
    >
      <span className={`w-2 h-2 rounded-full ${isBoys ? 'bg-[var(--color-boys-accent)]' : 'bg-[var(--color-girls-accent)]'}`}></span>
      {isBoys ? 'BOYS HOSTEL' : 'GIRLS HOSTEL'}
    </span>
  );
}
