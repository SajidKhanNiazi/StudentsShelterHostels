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
          ? 'text-[var(--teal-800)]'
          : 'text-[var(--purple-800)]'
      } ${sizeClasses[size]} ${className}`}
      style={{
        background: isBoys ? '#d0f2f1' : '#f0e2f7',
        border: isBoys ? '1px solid #a1e4e2' : '1px solid #dfc0eb',
      }}
    >
      <span className={`w-2 h-2 rounded-full`} style={{ background: isBoys ? '#1B9E99' : '#9C69AA' }}></span>
      {isBoys ? 'BOYS HOSTEL' : 'GIRLS HOSTEL'}
    </span>
  );
}
