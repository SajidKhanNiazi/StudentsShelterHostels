import GenderBadge from '@/components/ui/GenderBadge';
import { MapPin, Train, ShieldCheck } from 'lucide-react';

export default function BranchHeader({ hostel }) {
  const isBoys = hostel.type === 'boys';

  return (
    <div className="animate-fade-in">
      <GenderBadge type={hostel.type} size="md" className="mb-4" />

      {hostel.isGirlsOnly && (
        <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 bg-purple-100 border border-purple-200 text-purple-800 rounded-xl text-sm font-semibold">
          <ShieldCheck className="w-5 h-5" />
          Girls Only — Female Staff — Secure Entry
        </div>
      )}

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-2">
        {hostel.name}
      </h1>

      {hostel.branch && (
        <p className={`text-lg md:text-xl font-semibold mb-4 ${isBoys ? 'text-blue-600' : 'text-purple-600'}`}>
          {hostel.branch}
        </p>
      )}

      <div className="flex flex-col sm:flex-row gap-3 text-gray-600">
        <div className="flex items-start gap-2">
          <MapPin className="w-5 h-5 mt-0.5 shrink-0 text-gray-400" />
          <span className="text-base">{hostel.address}</span>
        </div>
        {hostel.landmark && (
          <div
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-semibold ${
              isBoys ? 'bg-blue-50 text-blue-700' : 'bg-purple-50 text-purple-700'
            }`}
          >
            <Train className="w-4 h-4" />
            {hostel.landmark}
          </div>
        )}
      </div>
    </div>
  );
}
