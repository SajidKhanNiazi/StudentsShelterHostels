import { Compass, MapPin } from 'lucide-react';

export default function BranchDirections({ directions, nearbyLandmarks, type = 'boys' }) {
  const isBoys = type === 'boys';

  return (
    <div className="bg-white border border-[var(--color-border)] rounded-2xl p-5 md:p-6 shadow-sm mb-8">
      <h3 className="text-lg md:text-xl font-bold text-[var(--color-text-primary)] mb-4 flex items-center gap-2">
        <Compass className="w-5 h-5 shrink-0" style={{ color: isBoys ? '#1B9E99' : '#9C69AA' }} />
        How to Get Here
      </h3>

      <p className="text-sm md:text-base text-[var(--color-text-body)] leading-relaxed mb-6">
        {directions}
      </p>

      {nearbyLandmarks && nearbyLandmarks.length > 0 && (
        <div className="border-t border-[var(--color-border)] pt-5">
          <h4 className="text-sm font-bold text-[var(--color-text-primary)] uppercase tracking-wider mb-4 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-red-600 shrink-0" />
            Nearby Landmarks
          </h4>
          <div className="grid sm:grid-cols-2 gap-3">
            {nearbyLandmarks.map((landmark) => (
              <div
                key={landmark.name}
                className="flex items-center justify-between p-3 bg-gray-50 border border-gray-100 rounded-xl text-xs md:text-sm"
              >
                <span className="font-semibold text-[var(--color-text-primary)] truncate pr-2">
                  {landmark.name}
                </span>
                <span className={`shrink-0 font-medium px-2 py-0.5 rounded-full text-[10px] md:text-xs ${
                  landmark.name.toLowerCase().includes('metro')
                    ? 'bg-red-100 text-red-700 border border-red-200'
                    : ''
                }`}
                  style={!landmark.name.toLowerCase().includes('metro') ? {
                    background: isBoys ? '#d0f2f1' : '#f0e2f7',
                    color: isBoys ? '#054255' : '#3d1a4d',
                    border: isBoys ? '1px solid #a1e4e2' : '1px solid #dfc0eb',
                  } : {}}
                >
                  {landmark.distance}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
