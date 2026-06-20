import BranchCard from '@/components/ui/BranchCard';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function BranchOtherLocations({ currentHostel, allHostels }) {
  const siblings = allHostels.filter(
    (h) => h.type === currentHostel.type && h.id !== currentHostel.id
  );

  if (siblings.length === 0) return null;

  const isBoys = currentHostel.type === 'boys';

  return (
    <div className="mb-10">
      <div className="flex items-baseline justify-between gap-4 mb-5">
        <h3 className="text-lg md:text-xl font-bold text-[var(--color-text-primary)]">
          Other {isBoys ? 'Boys' : 'Girls'} Hostels
        </h3>
        <Link
          href={isBoys ? '/boys-hostels' : '/girls-hostels'}
          className={`inline-flex items-center gap-1 text-xs font-bold hover:underline ${
            isBoys ? 'text-[var(--color-boys-accent)]' : 'text-[var(--color-girls-accent)]'
          }`}
        >
          View All
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Grid / Horizontal scroll */}
      <div className="grid md:grid-cols-2 gap-6">
        {siblings.map((hostel) => (
          <BranchCard key={hostel.id} hostel={hostel} />
        ))}
      </div>
    </div>
  );
}
