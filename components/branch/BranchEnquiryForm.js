'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function BranchEnquiryForm({ branchName, hostelType }) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      branch: branchName || '',
      type: hostelType || 'boys',
      name: '',
      phone: '',
      moveInDate: '',
      message: '',
    }
  });

  const onSubmit = async (data) => {
    setErrorMsg(null);
    try {
      // Simulate API submit
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSuccess(true);
      reset({
        branch: branchName || '',
        type: hostelType || 'boys',
        name: '',
        phone: '',
        moveInDate: '',
        message: '',
      });
    } catch (err) {
      setErrorMsg('Something went wrong. Please try again or contact via WhatsApp.');
    }
  };

  const isBoys = hostelType === 'boys';
  const accentColor = isBoys ? 'bg-[var(--color-boys-primary)] hover:bg-[var(--color-boys-accent)]' : 'bg-[var(--color-girls-primary)] hover:bg-[var(--color-girls-accent)]';
  const focusRing = isBoys ? 'focus:ring-[var(--color-boys-accent)] focus:border-[var(--color-boys-accent)]' : 'focus:ring-[var(--color-girls-accent)] focus:border-[var(--color-girls-accent)]';

  return (
    <div className="bg-white border border-[var(--color-border)] rounded-2xl p-5 md:p-6 shadow-sm mb-8">
      <h3 className="text-lg md:text-xl font-bold text-[var(--color-text-primary)] mb-1">
        Enquire About This Branch
      </h3>
      <p className="text-xs text-[var(--color-text-muted)] mb-5">
        Have questions? Fill out this quick inquiry form and our branch manager will contact you.
      </p>

      {isSuccess ? (
        <div className="bg-green-50 border border-green-200 rounded-xl p-5 text-center">
          <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-3" />
          <h4 className="text-base font-bold text-green-900 mb-1">Inquiry Submitted!</h4>
          <p className="text-xs text-green-700 leading-relaxed mb-4">
            Thank you for reaching out. We will call you back within 24 hours.
          </p>
          <button
            onClick={() => setIsSuccess(false)}
            className="text-xs font-bold text-green-800 underline hover:text-green-900"
          >
            Send another inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {errorMsg && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex gap-2.5 text-xs text-red-700">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Hidden Fields for Context */}
          <input type="hidden" {...register('branch')} />
          <input type="hidden" {...register('type')} />

          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-xs font-bold text-[var(--color-text-primary)] uppercase tracking-wider mb-1.5">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              {...register('name', { required: 'Full name is required' })}
              className={`w-full px-3.5 py-2.5 bg-gray-50 border border-[var(--color-border)] rounded-xl text-sm outline-none transition-all ${focusRing}`}
              placeholder="Enter your full name"
            />
            {errors.name && (
              <p className="text-xs text-red-600 font-medium mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-xs font-bold text-[var(--color-text-primary)] uppercase tracking-wider mb-1.5">
              WhatsApp / Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              {...register('phone', {
                required: 'Phone number is required',
                pattern: {
                  value: /^[0-9+\-\s]{10,15}$/,
                  message: 'Please enter a valid phone number (e.g., 03314343676)',
                },
              })}
              className={`w-full px-3.5 py-2.5 bg-gray-50 border border-[var(--color-border)] rounded-xl text-sm outline-none transition-all ${focusRing}`}
              placeholder="e.g. 03314343676"
            />
            {errors.phone && (
              <p className="text-xs text-red-600 font-medium mt-1">{errors.phone.message}</p>
            )}
          </div>

          {/* Move-in Date */}
          <div>
            <label htmlFor="moveInDate" className="block text-xs font-bold text-[var(--color-text-primary)] uppercase tracking-wider mb-1.5">
              Expected Move-in Date
            </label>
            <input
              type="date"
              id="moveInDate"
              {...register('moveInDate')}
              className={`w-full px-3.5 py-2.5 bg-gray-50 border border-[var(--color-border)] rounded-xl text-sm outline-none transition-all ${focusRing}`}
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-xs font-bold text-[var(--color-text-primary)] uppercase tracking-wider mb-1.5">
              Your Message
            </label>
            <textarea
              id="message"
              rows={3}
              {...register('message')}
              className={`w-full px-3.5 py-2.5 bg-gray-50 border border-[var(--color-border)] rounded-xl text-sm outline-none transition-all resize-none ${focusRing}`}
              placeholder="Ask about sharing rooms, pricing details, or scheduling a visit..."
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-white font-bold rounded-xl shadow transition-all min-h-[48px] active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none ${accentColor}`}
          >
            <Send className="w-4 h-4 shrink-0" />
            {isSubmitting ? 'Submitting...' : 'Send Inquiry'}
          </button>
        </form>
      )}
    </div>
  );
}
