import ApplyForm from '@/components/forms/ApplyForm';
import { FileText, ShieldCheck, Clock, MessageCircle } from 'lucide-react';

export const metadata = {
  title: 'Apply Now | Students Shelter Hostels Islamabad',
  description: 'Apply for student hostel accommodation at Students Shelter Hostels Islamabad. Fill out the application form for boys or girls hostel.',
};

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] py-8">
      {/* Hero */}
      <div className="bg-gradient-to-br from-green-50 via-white to-emerald-50 py-12 md:py-16 mb-8 border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-green-50 border border-green-200 rounded-full text-green-700 text-xs font-semibold mb-6">
            <FileText className="w-3.5 h-3.5" />
            Hostel Application
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[var(--color-text-primary)] mb-3">
            Apply for Accommodation
          </h1>
          <p className="text-[var(--color-text-body)] text-base md:text-lg max-w-2xl mx-auto">
            Fill out the form below to apply for a room at Students Shelter Hostels. We&apos;ll get back to you within 24-48 hours.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6 md:p-8 shadow-sm">
              <h2 className="text-xl md:text-2xl font-bold text-[var(--color-text-primary)] mb-2">Application Form</h2>
              <p className="text-[var(--color-text-muted)] text-xs mb-6">Fields marked with * are required.</p>
              <ApplyForm />
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* How it works */}
            <div className="bg-white rounded-2xl p-6 border border-[var(--color-border)] shadow-sm">
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-4">How It Works</h3>
              <div className="space-y-4">
                {[
                  { step: '1', title: 'Fill the Form', desc: 'Complete the application with your details' },
                  { step: '2', title: 'We Review', desc: 'Our team reviews your application within 24 hours' },
                  { step: '3', title: 'Confirmation', desc: 'We contact you to confirm and arrange move-in' },
                ].map((item) => (
                  <div key={item.step} className="flex gap-3">
                    <div className="w-8 h-8 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-xs font-bold shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[var(--color-text-primary)]">{item.title}</p>
                      <p className="text-xs text-[var(--color-text-muted)]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Info Cards */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[var(--color-text-primary)] mb-1">Your Data is Safe</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    We only use your information for the admission process. Your data is never shared with third parties.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[var(--color-text-primary)] mb-1">Quick Response</h4>
                  <p className="text-xs text-amber-700 leading-relaxed">
                    We typically respond within 24 hours. For urgent inquiries, contact us on WhatsApp.
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp alternative */}
            <div className="bg-gradient-to-br from-[var(--color-whatsapp)] to-[var(--color-whatsapp-dark)] rounded-2xl p-6 text-white shadow-md">
              <MessageCircle className="w-8 h-8 mb-3 text-white/80" />
              <h3 className="text-lg font-bold mb-2">Prefer WhatsApp?</h3>
              <p className="text-white/80 text-xs mb-4 leading-relaxed">
                Send us a message and we&apos;ll guide you through the process.
              </p>
              <a
                href="https://wa.me/923314343676?text=Hi%2C%20I%20want%20to%20apply%20for%20a%20room%20at%20Students%20Shelter%20Hostel."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white text-green-700 rounded-xl font-bold hover:bg-green-50 transition-all min-h-[48px]"
              >
                <MessageCircle className="w-5 h-5 shrink-0" />
                Apply via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
