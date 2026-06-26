'use client';

import { HelpCircle } from 'lucide-react';

export default function BranchFAQ({ faqs, type = 'boys' }) {
  if (!faqs || faqs.length === 0) return null;

  const accentColor = type === 'boys' ? 'blue' : 'purple';

  return (
    <div className="bg-white border border-[var(--color-border)] rounded-2xl p-5 md:p-6 shadow-sm mb-8">
      <h2 className="text-lg md:text-xl font-bold text-[var(--color-text-primary)] mb-5 flex items-center gap-2">
        <HelpCircle className={`w-5 h-5 text-${accentColor}-600 shrink-0`} />
        Frequently Asked Questions
      </h2>
      <div className="space-y-0 divide-y divide-gray-100">
        {faqs.map((faq, i) => (
          <details key={i} className="group">
            <summary
              className={`cursor-pointer font-semibold text-sm md:text-base text-[var(--color-text-primary)] py-4 px-1 list-none flex items-start gap-3 hover:text-${accentColor}-700 transition-colors [&::-webkit-details-marker]:hidden`}
            >
              <span className={`mt-0.5 text-${accentColor}-500 shrink-0 transition-transform duration-200 group-open:rotate-90`}>
                ▶
              </span>
              <span>{faq.q}</span>
            </summary>
            <p className="text-sm text-[var(--color-text-body)] leading-[1.7] pb-4 pl-7 pr-2">
              {faq.a}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
}
