export default function AreaStamp({ area, type = 'boys', className = '' }) {
  const isBoys = type === 'boys';
  return (
    <div
      className={`select-none pointer-events-none font-display font-extrabold text-2xl sm:text-3xl opacity-20 transform -rotate-3 rounded-lg px-2.5 py-0.5 leading-none shrink-0 ${className}`}
      style={{
        border: isBoys ? '2px solid #1B9E99' : '2px solid #9C69AA',
        color: isBoys ? '#1B9E99' : '#9C69AA',
      }}
    >
      {area}
    </div>
  );
}
