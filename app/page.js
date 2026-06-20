import Link from 'next/link';
import { ALL_HOSTELS } from '@/lib/hostels';
import BranchCard from '@/components/ui/BranchCard';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import {
  ArrowRight,
  ShieldCheck,
  MapPin,
  HelpCircle,
  CheckCircle,
  Info
} from 'lucide-react';

export default function HomePage() {
  return (
    <>
      {/* Elegant Hero Section */}
      <section className="relative overflow-hidden bg-[var(--color-primary)] py-20 lg:py-32 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block px-3 py-1 bg-white/10 text-[var(--color-accent)] text-xs font-semibold tracking-widest uppercase mb-6 rounded-sm border border-white/20">
            Premium Student Living
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6 font-display leading-[1.2]">
            Hostels in Islamabad – Find Verified <br className="hidden md:inline" />
            <span className="font-semibold text-[var(--color-accent)]">
              Girls Hostel & Boys Hostel
            </span>
          </h1>
          <p className="text-[#d6d3cd] text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Looking for the best hostels in Islamabad for students, job holders, or working professionals? Explore verified accommodation including girls hostel in Islamabad and boys hostel in Islamabad with full facilities and safe living options.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <a
              href="#listings"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[var(--color-accent)] hover:bg-[#a38a65] text-white font-medium rounded shadow transition-all min-h-[52px]"
            >
              Explore Hostels
              <MapPin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Unified Locations Section (IMPORTANT: Kept as requested) */}
      <section id="listings" className="py-20 bg-[var(--color-bg)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text-primary)] mb-4 font-display">
              Popular Areas for Hostels in Islamabad
            </h2>
            <div className="w-16 h-1 bg-[var(--color-accent)] mx-auto mb-6 rounded-full"></div>
            <p className="text-[var(--color-text-muted)] text-base max-w-2xl mx-auto">
              We cover prime locations including G-10, G-11, F-10, F-11, I-8, E-11, H-13 (near universities), and Blue Area.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {ALL_HOSTELS.map((hostel) => (
              <BranchCard key={hostel.id} hostel={hostel} />
            ))}
          </div>
        </div>
      </section>

      {/* ARTICLE CONTENT STRUCTURE EXCACTLY AS REQUESTED */}
      <section className="py-16 bg-white border-y border-[var(--color-border)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg max-w-none text-[var(--color-text-body)]">
          
          {/* OVERVIEW */}
          <div className="mb-16">
            <h2 className="text-3xl font-display font-bold text-[var(--color-text-primary)] mb-8 border-b pb-4">
              Quick Overview of Hostels in Islamabad
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse border border-gray-200 shadow-sm rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-[var(--color-primary)] text-white">
                    <th className="p-4 font-semibold border border-gray-200">Type</th>
                    <th className="p-4 font-semibold border border-gray-200">Best For</th>
                    <th className="p-4 font-semibold border border-gray-200">Price Range</th>
                    <th className="p-4 font-semibold border border-gray-200">Key Feature</th>
                  </tr>
                </thead>
                <tbody className="bg-white text-sm md:text-base">
                  <tr>
                    <td className="p-4 border border-gray-200 font-medium">Student Hostel</td>
                    <td className="p-4 border border-gray-200">University students</td>
                    <td className="p-4 border border-gray-200">Budget-friendly</td>
                    <td className="p-4 border border-gray-200">Study environment</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 border border-gray-200 font-medium">Girls Hostel in Islamabad</td>
                    <td className="p-4 border border-gray-200">Female students & professionals</td>
                    <td className="p-4 border border-gray-200">Mid to premium</td>
                    <td className="p-4 border border-gray-200">High security</td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-gray-200 font-medium">Boys Hostel in Islamabad</td>
                    <td className="p-4 border border-gray-200">Students & job holders</td>
                    <td className="p-4 border border-gray-200">Affordable</td>
                    <td className="p-4 border border-gray-200">Shared living</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 border border-gray-200 font-medium">Co-living Space</td>
                    <td className="p-4 border border-gray-200">Remote workers</td>
                    <td className="p-4 border border-gray-200">Flexible</td>
                    <td className="p-4 border border-gray-200">Modern lifestyle</td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-gray-200 font-medium">Private Rooms</td>
                    <td className="p-4 border border-gray-200">Professionals</td>
                    <td className="p-4 border border-gray-200">Higher range</td>
                    <td className="p-4 border border-gray-200">Privacy</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* WHAT ARE HOSTELS */}
          <div className="mb-16">
            <h2 className="text-3xl font-display font-bold text-[var(--color-text-primary)] mb-6">
              What Are Hostels in Islamabad?
            </h2>
            <p className="text-lg leading-relaxed bg-[var(--color-light)] p-6 rounded-xl border border-[var(--color-border)]">
              Hostels in Islamabad are shared or private accommodation spaces designed for students, job holders, interns, working professionals, and international visitors. These hostels offer monthly or daily stays with Wi-Fi, meals, laundry, and security.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* GIRLS HOSTEL */}
            <div className="bg-white border border-[var(--color-border)] p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-display font-bold text-[var(--color-text-primary)] mb-6 flex items-center gap-3">
                <ShieldCheck className="text-[var(--color-accent)] w-8 h-8" />
                Girls Hostel in Islamabad
              </h2>
              <p className="text-gray-600 mb-6 font-medium">Safe & Secure Accommodation</p>
              
              <div className="bg-purple-50 p-5 rounded-lg mb-6 border border-purple-100">
                <h3 className="text-lg font-bold text-purple-900 mb-3">Safety Features</h3>
                <ul className="space-y-2 text-purple-800 font-medium">
                  <li>• CCTV surveillance systems</li>
                  <li>• Female-only premises</li>
                  <li>• Security guards</li>
                  <li>• Biometric access control</li>
                  <li>• Strict visitor management</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Facilities</h3>
                <ul className="space-y-2 text-gray-700 font-medium">
                  <li>• Furnished rooms</li>
                  <li>• Wi-Fi & study tables</li>
                  <li>• Attached bathrooms</li>
                  <li>• Meal plans</li>
                  <li>• Laundry service</li>
                </ul>
              </div>
            </div>

            {/* BOYS HOSTEL */}
            <div className="bg-white border border-[var(--color-border)] p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-display font-bold text-[var(--color-text-primary)] mb-6 flex items-center gap-3">
                <CheckCircle className="text-[var(--color-accent)] w-8 h-8" />
                Boys Hostel in Islamabad
              </h2>
              <p className="text-gray-600 mb-6 font-medium">Affordable Living for Students & Job Holders</p>
              
              <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 h-full max-h-[calc(100%-100px)]">
                <h3 className="text-lg font-bold text-blue-900 mb-3">Features</h3>
                <ul className="space-y-3 text-blue-800 font-medium">
                  <li>• Shared rooms (double/triple)</li>
                  <li>• Dormitory options</li>
                  <li>• High-speed internet</li>
                  <li>• Mess and food services</li>
                  <li>• Study environment</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* STUDENT HOSTELS */}
            <div className="bg-[var(--color-light)] p-8 rounded-xl border border-[var(--color-border)]">
              <h2 className="text-2xl font-display font-bold text-[var(--color-text-primary)] mb-4">
                Student Hostels in Islamabad
              </h2>
              <p className="text-gray-700 mb-6">
                Student hostels are designed for university and college students with affordable rent and study-friendly environments.
              </p>
              <ul className="space-y-2 text-gray-800 font-medium">
                <li>✔️ Quiet study rooms</li>
                <li>✔️ Library access</li>
                <li>✔️ Wi-Fi internet</li>
                <li>✔️ Group study areas</li>
                <li>✔️ Budget-friendly rent</li>
              </ul>
            </div>

            {/* WORKING PROFESSIONALS */}
            <div className="bg-[var(--color-light)] p-8 rounded-xl border border-[var(--color-border)]">
              <h2 className="text-2xl font-display font-bold text-[var(--color-text-primary)] mb-4">
                Hostels for Working Professionals in Islamabad
              </h2>
              <ul className="space-y-3 text-gray-800 font-medium mt-6">
                <li>✔️ High-speed internet</li>
                <li>✔️ Workstations</li>
                <li>✔️ Private rooms</li>
                <li>✔️ Quiet environment</li>
                <li>✔️ Flexible check-in/out</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* TYPES OF ACCOMMODATION */}
            <div>
              <h2 className="text-2xl font-display font-bold text-[var(--color-text-primary)] mb-6 border-b pb-3">
                Types of Accommodation
              </h2>
              <ul className="grid grid-cols-2 gap-3 text-gray-700 font-medium">
                <li className="bg-gray-50 p-2 rounded border">• Single room</li>
                <li className="bg-gray-50 p-2 rounded border">• Double-sharing room</li>
                <li className="bg-gray-50 p-2 rounded border">• Triple-sharing room</li>
                <li className="bg-gray-50 p-2 rounded border">• Dormitory</li>
                <li className="bg-gray-50 p-2 rounded border">• Furnished rooms</li>
                <li className="bg-gray-50 p-2 rounded border">• Co-living spaces</li>
              </ul>
            </div>

            {/* FACILITIES */}
            <div>
              <h2 className="text-2xl font-display font-bold text-[var(--color-text-primary)] mb-6 border-b pb-3">
                Facilities in Hostels
              </h2>
              <ul className="grid grid-cols-2 gap-3 text-gray-700 font-medium">
                <li className="bg-gray-50 p-2 rounded border">• Wi-Fi</li>
                <li className="bg-gray-50 p-2 rounded border">• CCTV security</li>
                <li className="bg-gray-50 p-2 rounded border">• Laundry service</li>
                <li className="bg-gray-50 p-2 rounded border">• Meal plans</li>
                <li className="bg-gray-50 p-2 rounded border">• Study rooms</li>
                <li className="bg-gray-50 p-2 rounded border">• Kitchen access</li>
                <li className="bg-gray-50 p-2 rounded border">• Power backup</li>
                <li className="bg-gray-50 p-2 rounded border">• Parking space</li>
                <li className="bg-gray-50 p-2 rounded border">• Housekeeping</li>
              </ul>
            </div>
          </div>

          {/* PRICE */}
          <div className="mb-16 bg-[var(--color-primary)] text-white p-8 rounded-2xl shadow-md">
            <h2 className="text-2xl font-display font-bold text-[var(--color-accent)] mb-6">
              Monthly Hostel Rent in Islamabad
            </h2>
            <ul className="space-y-4 text-lg">
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-[var(--color-accent)] rounded-full"></span>
                <strong>Budget Hostels</strong> – Shared rooms
              </li>
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-[var(--color-accent)] rounded-full"></span>
                <strong>Mid-range Hostels</strong> – Furnished + meals
              </li>
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-[var(--color-accent)] rounded-full"></span>
                <strong>Premium Hostels</strong> – Private rooms
              </li>
            </ul>
          </div>

          {/* FAQ */}
          <div className="mb-16">
            <h2 className="text-3xl font-display font-bold text-[var(--color-text-primary)] mb-8 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-xl border border-[var(--color-border)] shadow-sm">
                <h3 className="font-bold text-lg text-[var(--color-text-primary)] mb-2 flex items-start gap-3">
                  <HelpCircle className="w-6 h-6 text-[var(--color-accent)] shrink-0 mt-0.5" />
                  What are the best hostels in Islamabad?
                </h3>
                <p className="text-[var(--color-text-body)] pl-9">Best hostels depend on location, budget, and facilities near universities and offices.</p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-[var(--color-border)] shadow-sm">
                <h3 className="font-bold text-lg text-[var(--color-text-primary)] mb-2 flex items-start gap-3">
                  <HelpCircle className="w-6 h-6 text-[var(--color-accent)] shrink-0 mt-0.5" />
                  Are girls hostels in Islamabad safe?
                </h3>
                <p className="text-[var(--color-text-body)] pl-9">Yes, most include CCTV, security guards, and controlled access systems.</p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-[var(--color-border)] shadow-sm">
                <h3 className="font-bold text-lg text-[var(--color-text-primary)] mb-2 flex items-start gap-3">
                  <HelpCircle className="w-6 h-6 text-[var(--color-accent)] shrink-0 mt-0.5" />
                  What is the cost of boys hostel in Islamabad?
                </h3>
                <p className="text-[var(--color-text-body)] pl-9">It varies depending on room type and location but is generally affordable.</p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-[var(--color-border)] shadow-sm">
                <h3 className="font-bold text-lg text-[var(--color-text-primary)] mb-2 flex items-start gap-3">
                  <HelpCircle className="w-6 h-6 text-[var(--color-accent)] shrink-0 mt-0.5" />
                  Are hostels available near universities?
                </h3>
                <p className="text-[var(--color-text-body)] pl-9">Yes, especially near NUML, COMSATS, FAST, and other major universities.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Elegant CTA */}
      <section className="py-20 bg-[var(--color-primary)] text-center text-white border-t-4 border-[var(--color-accent)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 font-display">
            Find the Best Hostels in Islamabad Today
          </h2>
          <p className="text-[#d6d3cd] text-lg mb-10 max-w-2xl leading-relaxed">
            Compare verified listings of hostels in Islamabad, girls hostel in Islamabad, and boys hostel in Islamabad.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#listings"
              className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-accent)] hover:bg-[#a38a65] text-white font-bold rounded shadow transition-all"
            >
              Browse Hostels
            </a>
            <WhatsAppButton
              whatsapp="923314343676"
              message="Hi, I would like to know more about Students Shelter Hostels."
              variant="default"
              className="!bg-transparent !border-2 !border-[var(--color-accent)] !text-white hover:!bg-white/10 !px-8 !py-4 !font-bold !rounded"
            >
              Contact on WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </section>
    </>
  );
}
