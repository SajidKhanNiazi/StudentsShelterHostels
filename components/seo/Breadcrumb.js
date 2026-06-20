import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import BreadcrumbSchema from './BreadcrumbSchema';

export default function Breadcrumb({ items }) {
  return (
    <>
      <BreadcrumbSchema items={items} />
      <nav className="flex mb-6 py-2.5 px-4 bg-gray-50 border border-gray-100 rounded-xl overflow-x-auto whitespace-nowrap" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={index} className="inline-flex items-center">
                {index > 0 && <ChevronRight className="w-3.5 h-3.5 mx-1 text-gray-400 shrink-0" />}
                {isLast || !item.href ? (
                  <span className="text-xs font-semibold text-gray-500 max-w-[200px] truncate">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="inline-flex items-center text-xs font-medium text-[var(--color-text-muted)] hover:text-blue-600 transition-colors"
                  >
                    {index === 0 && <Home className="w-3.5 h-3.5 mr-1.5 shrink-0" />}
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
