import ContactForm from '@/components/forms/ContactForm';
import { ALL_HOSTELS } from '@/lib/hostels';
import { Phone, MapPin, MessageCircle } from 'lucide-react';

export const metadata = {
  title: 'Contact Us | Students Shelter Hostels Islamabad',
  description: 'Contact Students Shelter Hostels for inquiries about boys and girls hostel accommodation in Islamabad. Call, WhatsApp, or fill our inquiry form.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] py-8">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#f0fafa] via-white to-[#faf5fc] py-12 md:py-16 mb-8 border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[var(--color-text-primary)] mb-3">
            Contact Us
          </h1>
          <p className="text-[var(--color-text-body)] text-base md:text-lg max-w-2xl mx-auto">
            Have questions? We&apos;re here to help. Reach out via WhatsApp, phone, or fill the form below.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6 md:p-8 shadow-sm">
              <h2 className="text-xl md:text-2xl font-bold text-[var(--color-text-primary)] mb-6">Send an Inquiry</h2>
              <ContactForm />
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* WhatsApp Card */}
            <div className="bg-gradient-to-br from-[var(--color-whatsapp)] to-[var(--color-whatsapp-dark)] rounded-2xl p-6 text-white shadow-md">
              <MessageCircle className="w-10 h-10 mb-3 text-white/80" />
              <h3 className="text-xl font-bold mb-2">Chat on WhatsApp</h3>
              <p className="text-white/80 text-xs mb-4">
                Get instant replies about rooms, pricing, and availability.
              </p>
              <a
                href="https://wa.me/923314343676?text=Hi%2C%20I%27m%20interested%20in%20Students%20Shelter%20Hostel."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-green-700 rounded-xl font-bold hover:bg-green-50 transition-all min-h-[48px]"
              >
                <MessageCircle className="w-5 h-5 shrink-0" />
                0331-4343676
              </a>
            </div>

            {/* Phone Numbers */}
            <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6 shadow-sm">
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-4 flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#1B9E99] shrink-0" />
                Phone Numbers
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-bold text-[#9C69AA] uppercase tracking-wider mb-1">🟣 Girls Hostel</p>
                  <a
                    href="tel:03314343676"
                    className="text-base font-extrabold text-[var(--color-text-primary)] hover:text-[#783893] transition-colors"
                  >
                    0331-4343676
                  </a>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#1B9E99] uppercase tracking-wider mb-1">🔵 Boys Hostel</p>
                  <p className="text-xs text-[var(--color-text-muted)] font-medium">Contact via WhatsApp</p>
                </div>
              </div>
            </div>

            {/* All Branch Addresses */}
            <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6 shadow-sm">
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#1B9E99] shrink-0" />
                Our Branches
              </h3>
              <div className="space-y-4">
                {ALL_HOSTELS.map((hostel) => (
                  <div key={hostel.id} className="pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                    <p className={`text-xs font-bold uppercase tracking-wider mb-1.5 ${
                      hostel.type === 'boys' ? 'text-[#1B9E99]' : 'text-[#9C69AA]'
                    }`}>
                      {hostel.type === 'boys' ? '🔵' : '🟣'} {hostel.branchLabel || hostel.area}
                    </p>
                    <a
                      href={hostel.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs md:text-sm text-[var(--color-text-body)] hover:text-[#1B9E99] transition-colors leading-relaxed block"
                    >
                      {hostel.fullAddress}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

