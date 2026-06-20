import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton({ 
  whatsapp, 
  message = "Hi, I'm interested in Students Shelter Hostel. Please share details.",
  variant = 'default',
  className = '',
  children 
}) {
  const encodedMsg = encodeURIComponent(message);
  const url = whatsapp
    ? `https://wa.me/${whatsapp}?text=${encodedMsg}`
    : `https://wa.me/923314343676?text=${encodedMsg}`;

  const baseStyles = 'inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold transition-all min-h-[48px] active:scale-[0.98]';
  const variants = {
    default: 'bg-[var(--color-whatsapp)] hover:bg-[#128c7e] text-white shadow-md hover:shadow-lg',
    outline: 'border-2 border-[var(--color-whatsapp)] text-[var(--color-whatsapp)] hover:bg-[var(--color-whatsapp)] hover:text-white',
    small: 'bg-[var(--color-whatsapp)] hover:bg-[#128c7e] text-white text-sm px-3.5 py-2.5 shadow-sm',
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <MessageCircle className="w-5 h-5 shrink-0" />
      <span>{children || 'WhatsApp'}</span>
    </a>
  );
}
