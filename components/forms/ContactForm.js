'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ALL_HOSTELS } from '@/lib/hostels';
import { Send, CheckCircle, MessageCircle } from 'lucide-react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [gender, setGender] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const filteredHostels = gender
    ? ALL_HOSTELS.filter(h => h.type === gender)
    : ALL_HOSTELS;

  const onSubmit = async (data) => {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Contact form data:', data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12 px-6 bg-green-50 rounded-2xl border border-green-200">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Inquiry Sent!</h3>
        <p className="text-gray-600 mb-6">
          Thank you for your interest. We&apos;ll get back to you within 24 hours.
        </p>
        <a
          href="https://wa.me/923314343676?text=Hi%2C%20I%20just%20sent%20an%20inquiry%20on%20your%20website."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-xl font-semibold hover:bg-[#128C7E] transition-all min-h-[48px]"
        >
          <MessageCircle className="w-5 h-5" />
          Follow up on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Full Name */}
      <div>
        <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-1.5">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          {...register('fullName', { required: 'Full name is required' })}
          type="text"
          id="fullName"
          className="w-full px-4 py-3 border border-gray-300 rounded-xl text-base focus:ring-2 focus:ring-[#1B9E99] focus:border-[#1B9E99] transition-all min-h-[48px]"
          placeholder="Enter your full name"
        />
        {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          {...register('phone', {
            required: 'Phone number is required',
            pattern: {
              value: /^(03\d{2}[-\s]?\d{7}|92\d{10}|\+92\d{10})$/,
              message: 'Enter a valid Pakistani phone number (e.g., 0300-1234567)',
            },
          })}
          type="tel"
          id="phone"
          className="w-full px-4 py-3 border border-gray-300 rounded-xl text-base focus:ring-2 focus:ring-[#1B9E99] focus:border-[#1B9E99] transition-all min-h-[48px]"
          placeholder="0300-1234567"
        />
        {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">
          Email <span className="text-gray-400">(optional)</span>
        </label>
        <input
          {...register('email', {
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Enter a valid email address',
            },
          })}
          type="email"
          id="email"
          className="w-full px-4 py-3 border border-gray-300 rounded-xl text-base focus:ring-2 focus:ring-[#1B9E99] focus:border-[#1B9E99] transition-all min-h-[48px]"
          placeholder="your@email.com"
        />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
      </div>

      {/* Gender */}
      <div>
        <label htmlFor="gender" className="block text-sm font-semibold text-gray-700 mb-1.5">
          Gender
        </label>
        <select
          {...register('gender')}
          id="gender"
          onChange={(e) => setGender(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl text-base focus:ring-2 focus:ring-[#1B9E99] focus:border-[#1B9E99] transition-all min-h-[48px] bg-white"
        >
          <option value="">Select Gender</option>
          <option value="boys">Male</option>
          <option value="girls">Female</option>
        </select>
      </div>

      {/* Hostel */}
      <div>
        <label htmlFor="hostel" className="block text-sm font-semibold text-gray-700 mb-1.5">
          Which Hostel are you interested in?
        </label>
        <select
          {...register('hostel')}
          id="hostel"
          className="w-full px-4 py-3 border border-gray-300 rounded-xl text-base focus:ring-2 focus:ring-[#1B9E99] focus:border-[#1B9E99] transition-all min-h-[48px] bg-white"
        >
          <option value="">Select a hostel</option>
          {filteredHostels.map((h) => (
            <option key={h.id} value={h.id}>
              {h.name} — {h.branch || h.area}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1.5">
          Message
        </label>
        <textarea
          {...register('message')}
          id="message"
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl text-base focus:ring-2 focus:ring-[#1B9E99] focus:border-[#1B9E99] transition-all resize-y"
          placeholder="Any questions or specific requirements?"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#1B9E99] to-[#075A6D] text-white text-base font-semibold rounded-xl shadow-lg hover:from-[#075A6D] hover:to-[#054255] transition-all min-h-[52px] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Send className="w-5 h-5" />
        {isSubmitting ? 'Sending...' : 'Send Inquiry'}
      </button>
    </form>
  );
}

