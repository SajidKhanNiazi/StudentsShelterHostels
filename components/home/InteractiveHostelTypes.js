"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, CheckCircle, GraduationCap, Briefcase, MapPin } from 'lucide-react';

const tabs = [
  { id: 'girls', label: 'Girls Hostel', icon: ShieldCheck },
  { id: 'boys', label: 'Boys Hostel', icon: CheckCircle },
  { id: 'students', label: 'Student Hostels', icon: GraduationCap },
  { id: 'professionals', label: 'Professionals', icon: Briefcase },
];

const content = {
  girls: {
    title: "Girls Hostel in Islamabad",
    desc: "Student's Shelter Girls Hostel offers premium student housing, so that you can follow your path to success cautiously. Your safety and wellbeing is our first priority. Our attention has always been on cleanliness, safety, friendliness, and comfort.",
    services: [
      "Furnished rooms with beds & cupboards",
      "Three times quality meal",
      "Laundry on demand",
      "CCTV camera surveillance",
      "High speed internet WiFi",
      "AC / cooler / heating on demand",
      "Daily basis cleaning",
      "Car / bike parking",
      "Geyser & filtered drinking water",
      "24/7 Security guard"
    ],
    location: "📍 I-8 Branch: Near SHIFA medical college, MIUC, SZABIST, I-8 markaz, NUML, PRESTON and many other universities/institutes located in H-8/H-9.",
    theme: "purple"
  },
  boys: {
    title: "Boys Hostel in Islamabad",
    desc: "Affordable Living for Students & Job Holders. Designed to provide a comfortable, study-friendly, and secure environment for young men looking to focus on their goals.",
    services: [
      "Shared rooms (double/triple)",
      "Dormitory options available",
      "High-speed internet",
      "Mess and food services",
      "Study environment",
      "Secure premises",
      "Laundry services",
      "24/7 Power backup"
    ],
    location: "📍 Available across prime locations in Islamabad for easy commute to universities and commercial hubs.",
    theme: "teal"
  },
  students: {
    title: "Student Hostels in Islamabad",
    desc: "Student hostels are designed for university and college students with affordable rent and study-friendly environments.",
    services: [
      "Quiet study rooms",
      "Library access",
      "Wi-Fi internet",
      "Group study areas",
      "Budget-friendly rent",
      "Proximity to universities"
    ],
    theme: "emerald"
  },
  professionals: {
    title: "Hostels for Working Professionals",
    desc: "Premium, hassle-free living spaces for professionals who need a quiet and reliable place to stay and work.",
    services: [
      "High-speed internet",
      "Workstations",
      "Private rooms",
      "Quiet environment",
      "Flexible check-in/out",
      "Networking opportunities"
    ],
    theme: "amber"
  }
};

const themeColors = {
  purple: { bg: '#faf5fc', border: '#dfc0eb', heading: '#3d1a4d', text: '#5A2870' },
  teal: { bg: '#f0fafa', border: '#a1e4e2', heading: '#054255', text: '#075A6D' },
  emerald: { bg: '#ecfdf5', border: '#a7f3d0', heading: '#064e3b', text: '#065f46' },
  amber: { bg: '#fffbeb', border: '#fde68a', heading: '#78350f', text: '#92400e' },
};

export default function InteractiveHostelTypes() {
  const [activeTab, setActiveTab] = useState('girls');

  const colors = themeColors[content[activeTab].theme];

  return (
    <div className="w-full mb-16">
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all duration-300 shadow-sm ${
                isActive ? 'text-white shadow-md' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="active-tab"
                  className="absolute inset-0 rounded-full z-0"
                  style={{ background: 'linear-gradient(135deg, #075A6D, #1B9E99)' }}
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <Icon className={`w-5 h-5 relative z-10 ${isActive ? 'text-[#3DBAB5]' : ''}`} />
              <span className="relative z-10 tracking-wide">{tab.label}</span>
            </button>
          );
        })}
      </div>

      <div className="bg-white border border-[var(--color-border)] rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden min-h-[450px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="p-8 md:p-12 h-full flex flex-col justify-center"
          >
            <div className="max-w-4xl mx-auto w-full">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-[var(--color-text-primary)] mb-4">
                {content[activeTab].title}
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {content[activeTab].desc}
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 rounded-xl flex flex-col justify-center"
                  style={{ background: colors.bg, border: `1px solid ${colors.border}` }}
                >
                  <h3 className="text-xl font-bold mb-5" style={{ color: colors.heading }}>
                    Features & Services
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                    {content[activeTab].services.map((service, idx) => (
                      <motion.li 
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-start gap-2 font-medium text-sm md:text-base"
                        style={{ color: colors.text }}
                      >
                        <span className="mt-1 font-bold text-lg leading-none" style={{ color: content[activeTab].theme === 'teal' ? '#1B9E99' : content[activeTab].theme === 'purple' ? '#9C69AA' : '#1B9E99' }}>•</span>
                        {service}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {content[activeTab].location && (
                  <div className="flex flex-col justify-end">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 h-full flex flex-col justify-center shadow-sm">
                      <div className="flex items-start gap-4">
                        <div className="bg-white p-3 rounded-full shadow-sm border border-gray-100">
                           <MapPin className="w-8 h-8 shrink-0" style={{ color: '#1B9E99' }} />
                        </div>
                        <p className="text-gray-700 font-medium leading-relaxed text-[15px]">
                          {content[activeTab].location.split(':').map((part, i) => 
                            i === 0 ? <strong key={i} className="block mb-2 text-xl font-display" style={{ color: '#075A6D' }}>{part}:</strong> : part
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
