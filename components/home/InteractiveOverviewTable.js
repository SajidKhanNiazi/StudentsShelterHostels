"use client";
import { motion } from 'framer-motion';

export default function InteractiveOverviewTable() {
  const tableData = [
    { type: "Student Hostel", bestFor: "University students", price: "Budget-friendly", feature: "Study environment" },
    { type: "Girls Hostel in Islamabad", bestFor: "Female students & professionals", price: "Mid to premium", feature: "High security" },
    { type: "Boys Hostel in Islamabad", bestFor: "Students & job holders", price: "Affordable", feature: "Shared living" },
    { type: "Co-living Space", bestFor: "Remote workers", price: "Flexible", feature: "Modern lifestyle" },
    { type: "Private Rooms", bestFor: "Professionals", price: "Higher range", feature: "Privacy" },
  ];

  return (
    <div className="overflow-x-auto overflow-y-hidden rounded-2xl border border-[var(--color-border)] shadow-xl bg-white mb-16">
      <table className="w-full text-left border-collapse min-w-[600px]">
        <thead>
          <tr style={{ background: 'linear-gradient(135deg, #075A6D 0%, #1B9E99 50%, #783893 100%)' }}>
            <th className="p-5 font-semibold text-sm tracking-wider uppercase text-white">Type</th>
            <th className="p-5 font-semibold text-sm tracking-wider uppercase text-white">Best For</th>
            <th className="p-5 font-semibold text-sm tracking-wider uppercase text-white">Price Range</th>
            <th className="p-5 font-semibold text-sm tracking-wider uppercase text-white">Key Feature</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {tableData.map((row, idx) => (
            <motion.tr 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              whileHover={{ backgroundColor: "rgba(27,158,153,0.06)", scale: 1.01 }}
              className="group cursor-pointer bg-white transition-all origin-left"
            >
              <td className="p-5 font-bold transition-colors" style={{ color: '#075A6D' }}>{row.type}</td>
              <td className="p-5 text-gray-600 font-medium">{row.bestFor}</td>
              <td className="p-5 text-gray-600">
                <span className="inline-block px-3 py-1 bg-green-50/80 text-green-700 border border-green-100 rounded-full text-xs font-bold tracking-wide">{row.price}</span>
              </td>
              <td className="p-5 text-gray-600 font-medium flex items-center gap-2">
                <div className="w-2 h-2 rounded-full group-hover:scale-150 transition-transform" style={{ background: idx % 2 === 0 ? '#1B9E99' : '#9C69AA' }}></div>
                {row.feature}
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
