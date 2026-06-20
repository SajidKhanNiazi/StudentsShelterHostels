import { Phone } from 'lucide-react';

export default function PhoneLink({ phone, className = '', showIcon = true }) {
  if (!phone) return null;

  const cleanNumber = phone.replace(/[^0-9]/g, '');

  return (
    <a
      href={`tel:${cleanNumber}`}
      className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-[var(--color-text-primary)] rounded-xl text-sm font-semibold transition-all min-h-[48px] border border-[var(--color-border)] ${className}`}
    >
      {showIcon && <Phone className="w-4 h-4 shrink-0 text-[var(--color-text-muted)]" />}
      <span>{phone}</span>
    </a>
  );
}
