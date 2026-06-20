export default function AreaStamp({ area, type = 'boys', className = '' }) {
  const isBoys = type === 'boys';
  return (
    <div
      className={`select-none pointer-events-none font-display font-extrabold text-2xl sm:text-3xl opacity-20 transform -rotate-3 border-2 rounded-lg px-2.5 py-0.5 leading-none shrink-0 ${
        isBoys
          ? 'border-[var(--color-boys-accent)] text-[var(--color-boys-accent)]'
          : 'border-[var(--color-girls-accent)] text-[var(--color-girls-accent)]'
      } ${className}`}
    >
      {area}
    </div>
  );
}
