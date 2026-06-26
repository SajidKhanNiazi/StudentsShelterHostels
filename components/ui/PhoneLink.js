import { Phone } from 'lucide-react';

export default function PhoneLink({ phone, type = 'boys', className = '', showIcon = true }) {
  if (!phone) return null;

  const cleanNumber = phone.replace(/[^0-9]/g, '');
  const isBoys = type === 'boys';
  const borderColor = isBoys ? '#a1e4e2' : '#dfc0eb';
  const iconColor = isBoys ? '#1B9E99' : '#9C69AA';

  return (
    <a
      href={`tel:${cleanNumber}`}
      className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-[var(--color-text-primary)] rounded-xl text-sm font-semibold transition-all min-h-[48px] border ${className}`}
      style={{ borderColor: borderColor }}
    >
      {showIcon && <Phone className="w-4 h-4 shrink-0" style={{ color: iconColor }} />}
      <span>{phone}</span>
    </a>
  );
}
