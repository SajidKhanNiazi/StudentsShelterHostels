import GenderBadge from '@/components/ui/GenderBadge';
import { MapPin, Train, ShieldCheck } from 'lucide-react';

export default function BranchHeader({ hostel }) {
  const isBoys = hostel.type === 'boys';

  return (
    <div className="animate-fade-in">
      <GenderBadge type={hostel.type} size="md" className="mb-4" />

      {hostel.isGirlsOnly && (
        <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-xl"
          style={{
            background: '#f0e2f7',
            border: '1px solid #dfc0eb',
            color: '#5A2870',
          }}
        >
          <ShieldCheck className="w-5 h-5" />
          Girls Only — Female Staff — Secure Entry
        </div>
      )}

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-2" style={{ color: '#054255' }}>
        {hostel.name}
      </h1>

      {hostel.branch && (
        <p className="text-lg md:text-xl font-semibold mb-4" style={{ color: isBoys ? '#2A707F' : '#783893' }}>
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
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-semibold"
            style={{
              background: isBoys ? '#d0f2f1' : '#f0e2f7',
              color: isBoys ? '#054255' : '#3d1a4d',
              border: isBoys ? '1px solid #a1e4e2' : '1px solid #dfc0eb',
            }}
          >
            <Train className="w-4 h-4" />
            {hostel.landmark}
          </div>
        )}
      </div>
    </div>
  );
}
