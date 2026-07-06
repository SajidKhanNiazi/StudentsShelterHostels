import Link from 'next/link';
import { Shield, ArrowRight, MessageCircle } from 'lucide-react';
import Breadcrumb from '@/components/seo/Breadcrumb';

export const metadata = {
  title: 'Privacy Policy | Students Shelter Hostels Islamabad',
  description: 'Privacy policy for Students Shelter Hostels website. How we collect, use, and protect your personal information when you contact us or submit an inquiry.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/privacy-policy`,
  },
  openGraph: {
    title: 'Privacy Policy — Students Shelter Hostels',
    description: 'How Students Shelter Hostels collects and uses your personal information.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/privacy-policy`,
    type: 'website',
    locale: 'en_PK',
    siteName: 'Students Shelter Hostels',
  },
  robots: 'noindex, follow',
};

const SECTIONS = [
  { id: 'section-1', title: '1. Information We Collect' },
  { id: 'section-2', title: '2. How We Use Your Information' },
  { id: 'section-3', title: '3. Information We Do Not Do' },
  { id: 'section-4', title: '4. Cookies' },
  { id: 'section-5', title: '5. Third Party Links' },
  { id: 'section-6', title: '6. Data Security' },
  { id: 'section-7', title: '7. Children\'s Privacy' },
  { id: 'section-8', title: '8. Your Rights' },
  { id: 'section-9', title: '9. Contact Us' },
  { id: 'section-10', title: '10. Changes to This Policy' },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] py-8">
      {/* Breadcrumbs and Header */}
      <div className="max-w-6xl mx-auto px-4">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Privacy Policy' },
          ]}
        />
      </div>

      {/* Header Banner */}
      <div className="border-b border-gray-200 bg-white py-12 md:py-16 mb-10">
        <div className="max-w-6xl mx-auto px-4 text-center md:text-left flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-50 border border-red-100 text-red-600 rounded-full text-xs font-bold mb-4 uppercase tracking-widest">
              🔒 Privacy Protected
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[var(--color-text-primary)] font-display">
              Privacy Policy
            </h1>
            <p className="text-gray-500 text-xs md:text-sm font-bold uppercase tracking-wider mt-3">
              Last Updated: July 5, 2026
            </p>
          </div>
          <div className="max-w-md bg-gray-50 border border-gray-200 rounded-2xl p-5 md:p-6 text-left shrink-0">
            <p className="text-xs md:text-sm text-[var(--color-text-body)] leading-relaxed">
              This privacy policy explains how Students Shelter Hostels collects and uses information when you visit our website or contact us.
            </p>
          </div>
        </div>
      </div>

      {/* Policy Layout */}
      <div className="max-w-6xl mx-auto px-4 py-4 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          
          {/* Table of Contents Sidebar */}
          <aside className="lg:col-span-1">
            <div className="lg:sticky lg:top-32 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xs font-extrabold text-[#075A6D] uppercase tracking-[0.15em] mb-4 pb-2 border-b border-gray-100 flex items-center gap-1.5">
                <Shield className="w-4 h-4" /> Table of Contents
              </h3>
              <nav className="flex flex-col gap-3">
                {SECTIONS.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="text-xs font-bold text-gray-500 hover:text-[#1B9E99] transition-colors leading-relaxed block py-0.5"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Policy content */}
          <main className="lg:col-span-3">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-10 shadow-sm">
              
              {/* Section 1 */}
              <section id="section-1" className="scroll-mt-32">
                <h2 className="text-lg font-bold text-[#075A6D] mb-4 border-l-[3px] border-[#1B9E99] pl-3">
                  1. Information We Collect
                </h2>
                <p className="text-[15px] leading-relaxed text-[#334155] mb-4">
                  When you fill our contact or inquiry form, we collect:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[15px] text-[#334155] mb-4">
                  <li>Your full name</li>
                  <li>Your phone number</li>
                  <li>Your email address (optional)</li>
                  <li>Your gender and hostel preference</li>
                  <li>Your message</li>
                </ul>
                <p className="text-[15px] leading-relaxed text-[#334155] mb-4">
                  When you contact us via WhatsApp, we receive:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[15px] text-[#334155] mb-4">
                  <li>Your WhatsApp number</li>
                  <li>Your messages</li>
                </ul>
                <p className="text-[15px] leading-relaxed text-[#334155]">
                  We do not collect any payment information on this website. All payments are handled directly between the student/parent and hostel management.
                </p>
              </section>

              <hr className="border-none border-t border-gray-200 my-8" />

              {/* Section 2 */}
              <section id="section-2" className="scroll-mt-32">
                <h2 className="text-lg font-bold text-[#075A6D] mb-4 border-l-[3px] border-[#1B9E99] pl-3">
                  2. How We Use Your Information
                </h2>
                <p className="text-[15px] leading-relaxed text-[#334155] mb-4">
                  We use the information you provide only to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[15px] text-[#334155] mb-4">
                  <li>Respond to your inquiry about room availability</li>
                  <li>Contact you to schedule a hostel visit</li>
                  <li>Share pricing and availability information</li>
                  <li>Process your admission application</li>
                </ul>
                <p className="text-[15px] leading-relaxed text-[#334155]">
                  We do not use your information for marketing, newsletters, or any purpose other than responding to your direct inquiry.
                </p>
              </section>

              <hr className="border-none border-t border-gray-200 my-8" />

              {/* Section 3 */}
              <section id="section-3" className="scroll-mt-32">
                <h2 className="text-lg font-bold text-[#075A6D] mb-4 border-l-[3px] border-[#1B9E99] pl-3">
                  3. Information We Do Not Do
                </h2>
                <p className="text-[15px] leading-relaxed text-[#334155] mb-4">
                  We strictly hold ourselves to high privacy standards. We do NOT:
                </p>
                <ul className="space-y-2.5 text-[15px] mb-4">
                  <li className="text-red-600 font-medium flex items-start gap-2">
                    <span className="font-extrabold text-red-600">✗</span> Sell your personal information to any third party
                  </li>
                  <li className="text-red-600 font-medium flex items-start gap-2">
                    <span className="font-extrabold text-red-600">✗</span> Share your information with advertisers
                  </li>
                  <li className="text-red-600 font-medium flex items-start gap-2">
                    <span className="font-extrabold text-red-600">✗</span> Send marketing emails or promotional messages
                  </li>
                  <li className="text-red-600 font-medium flex items-start gap-2">
                    <span className="font-extrabold text-red-600">✗</span> Store your data in third-party CRM systems
                  </li>
                </ul>
              </section>

              <hr className="border-none border-t border-gray-200 my-8" />

              {/* Section 4 */}
              <section id="section-4" className="scroll-mt-32">
                <h2 className="text-lg font-bold text-[#075A6D] mb-4 border-l-[3px] border-[#1B9E99] pl-3">
                  4. Cookies
                </h2>
                <p className="text-[15px] leading-relaxed text-[#334155]">
                  This website uses minimal cookies only for essential website functionality (such as remembering your language preference). We do not use advertising cookies or tracking cookies.
                </p>
              </section>

              <hr className="border-none border-t border-gray-200 my-8" />

              {/* Section 5 */}
              <section id="section-5" className="scroll-mt-32">
                <h2 className="text-lg font-bold text-[#075A6D] mb-4 border-l-[3px] border-[#1B9E99] pl-3">
                  5. Third Party Links
                </h2>
                <p className="text-[15px] leading-relaxed text-[#334155] mb-4">
                  Our website contains links to Google Maps for directions to our branches. When you click a Google Maps link, you are subject to Google&apos;s own privacy policy at <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#1B9E99] hover:underline font-semibold">policies.google.com/privacy</a>. We are not responsible for Google&apos;s data collection practices.
                </p>
                <p className="text-[15px] leading-relaxed text-[#334155]">
                  Our WhatsApp contact buttons open WhatsApp, which is operated by Meta. Your use of WhatsApp is governed by Meta&apos;s privacy policy.
                </p>
              </section>

              <hr className="border-none border-t border-gray-200 my-8" />

              {/* Section 6 */}
              <section id="section-6" className="scroll-mt-32">
                <h2 className="text-lg font-bold text-[#075A6D] mb-4 border-l-[3px] border-[#1B9E99] pl-3">
                  6. Data Security
                </h2>
                <p className="text-[15px] leading-relaxed text-[#334155]">
                  Inquiry form submissions are sent directly to our management team via email. We take reasonable steps to protect your information but cannot guarantee absolute security of data transmitted over the internet.
                </p>
              </section>

              <hr className="border-none border-t border-gray-200 my-8" />

              {/* Section 7 */}
              <section id="section-7" className="scroll-mt-32">
                <h2 className="text-lg font-bold text-[#075A6D] mb-4 border-l-[3px] border-[#1B9E99] pl-3">
                  7. Children&apos;s Privacy
                </h2>
                <p className="text-[15px] leading-relaxed text-[#334155]">
                  Our hostel services are intended for university students aged 18 and above. We do not knowingly collect personal information from anyone under 18.
                </p>
              </section>

              <hr className="border-none border-t border-gray-200 my-8" />

              {/* Section 8 */}
              <section id="section-8" className="scroll-mt-32">
                <h2 className="text-lg font-bold text-[#075A6D] mb-4 border-l-[3px] border-[#1B9E99] pl-3">
                  8. Your Rights
                </h2>
                <p className="text-[15px] leading-relaxed text-[#334155] mb-4">
                  You may request at any time:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[15px] text-[#334155] mb-6">
                  <li>To see what information we hold about you</li>
                  <li>To correct any incorrect information</li>
                  <li>To delete your information from our records</li>
                </ul>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">To submit a request:</span>
                  <a
                    href="https://wa.me/923314343676?text=Hi%2C%20I%20have%20a%20request%20regarding%20my%20personal%20data."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#16a34a] text-white text-xs font-bold rounded-lg hover:bg-[#15803d] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" /> Contact on WhatsApp
                  </a>
                </div>
              </section>

              <hr className="border-none border-t border-gray-200 my-8" />

              {/* Section 9 */}
              <section id="section-9" className="scroll-mt-32">
                <h2 className="text-lg font-bold text-[#075A6D] mb-4 border-l-[3px] border-[#1B9E99] pl-3">
                  9. Contact Us
                </h2>
                <p className="text-[15px] leading-relaxed text-[#334155] mb-4">
                  If you have any questions about this privacy policy, contact us:
                </p>
                <div className="bg-[#f0fafa] border border-[#a1e4e2] rounded-xl p-5 space-y-2 text-sm text-[var(--color-text-primary)]">
                  <p className="font-extrabold">Students Shelter Hostels</p>
                  <p className="font-medium">Phone / WhatsApp: <a href="tel:03314343676" className="font-extrabold hover:underline">0331-4343676</a></p>
                  <p className="font-medium">Website: <Link href="/" className="font-extrabold hover:underline">https://studentsshelterhostel.pk</Link></p>
                </div>
              </section>

              <hr className="border-none border-t border-gray-200 my-8" />

              {/* Section 10 */}
              <section id="section-10" className="scroll-mt-32">
                <h2 className="text-lg font-bold text-[#075A6D] mb-4 border-l-[3px] border-[#1B9E99] pl-3">
                  10. Changes to This Policy
                </h2>
                <p className="text-[15px] leading-relaxed text-[#334155]">
                  We may update this privacy policy from time to time. The &ldquo;Last Updated&rdquo; date at the top of this page will reflect any changes. Continued use of the website after changes constitutes your acceptance of the updated policy.
                </p>
              </section>

            </div>
          </main>

        </div>
      </div>
    </div>
  );
}
