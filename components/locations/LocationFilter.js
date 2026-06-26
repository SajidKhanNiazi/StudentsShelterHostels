'use client';

export default function LocationFilter({ activeType, onTypeChange, activeArea, onAreaChange, areas }) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
      {/* Type Filter Tabs */}
      <div className="flex bg-gray-100 rounded-xl p-1 w-full sm:w-auto">
        {[
          { value: 'all', label: 'All Branches' },
          { value: 'boys', label: '🔵 Boys' },
          { value: 'girls', label: '🟣 Girls' },
        ].map((tab) => (
          <button
            key={tab.value}
            onClick={() => onTypeChange(tab.value)}
            className={`flex-1 sm:flex-none px-4 py-2.5 rounded-lg text-sm font-semibold transition-all min-h-[44px] ${
              activeType === tab.value
                ? 'text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
            style={activeType === tab.value ? {
              background: tab.value === 'boys'
                ? '#1B9E99'
                : tab.value === 'girls'
                  ? '#9C69AA'
                  : 'linear-gradient(135deg, #1B9E99, #9C69AA)',
            } : {}}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Area Filter */}
      <select
        value={activeArea}
        onChange={(e) => onAreaChange(e.target.value)}
        className="px-4 py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 bg-white min-h-[44px] w-full sm:w-auto"
        style={{ '--tw-ring-color': '#1B9E99' }}
        id="area-filter"
      >
        <option value="all">All Areas</option>
        {areas.map((area) => (
          <option key={area} value={area}>{area}</option>
        ))}
      </select>
    </div>
  );
}
