'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ALL_HOSTELS, ROOM_TYPES } from '@/lib/hostels';
import { Send, CheckCircle, MessageCircle } from 'lucide-react';

export default function ApplyForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Application data:', data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12 px-6 bg-green-50 rounded-2xl border border-green-200">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Application Submitted!</h3>
        <p className="text-gray-600 mb-2">
          Thank you for applying to Students Shelter Hostels.
        </p>
        <p className="text-gray-600 mb-6">
          Our team will review your application and contact you within 24-48 hours.
        </p>
        <a
          href="https://wa.me/923314343676?text=Hi%2C%20I%20just%20submitted%20my%20hostel%20application%20on%20your%20website.%20Please%20confirm."
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
      {/* Two column grid on desktop */}
      <div className="grid md:grid-cols-2 gap-5">
        {/* Full Name */}
        <div>
          <label htmlFor="apply-fullName" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            {...register('fullName', { required: 'Full name is required' })}
            type="text"
            id="apply-fullName"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl text-base focus:ring-2 focus:ring-[#1B9E99] focus:border-[#1B9E99] transition-all min-h-[48px]"
            placeholder="Enter your full name"
          />
          {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>}
        </div>

        {/* Father's Name */}
        <div>
          <label htmlFor="apply-fatherName" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Father&apos;s Name <span className="text-red-500">*</span>
          </label>
          <input
            {...register('fatherName', { required: "Father's name is required" })}
            type="text"
            id="apply-fatherName"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl text-base focus:ring-2 focus:ring-[#1B9E99] focus:border-[#1B9E99] transition-all min-h-[48px]"
            placeholder="Enter father's name"
          />
          {errors.fatherName && <p className="mt-1 text-sm text-red-600">{errors.fatherName.message}</p>}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {/* CNIC / Student ID */}
        <div>
          <label htmlFor="apply-cnic" className="block text-sm font-semibold text-gray-700 mb-1.5">
            CNIC / Student ID <span className="text-red-500">*</span>
          </label>
          <input
            {...register('cnic', { required: 'CNIC or Student ID is required' })}
            type="text"
            id="apply-cnic"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl text-base focus:ring-2 focus:ring-[#1B9E99] focus:border-[#1B9E99] transition-all min-h-[48px]"
            placeholder="XXXXX-XXXXXXX-X"
          />
          {errors.cnic && <p className="mt-1 text-sm text-red-600">{errors.cnic.message}</p>}
        </div>

        {/* University */}
        <div>
          <label htmlFor="apply-university" className="block text-sm font-semibold text-gray-700 mb-1.5">
            University / College <span className="text-red-500">*</span>
          </label>
          <input
            {...register('university', { required: 'University/College name is required' })}
            type="text"
            id="apply-university"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl text-base focus:ring-2 focus:ring-[#1B9E99] focus:border-[#1B9E99] transition-all min-h-[48px]"
            placeholder="e.g., NUST, COMSATS, QAU"
          />
          {errors.university && <p className="mt-1 text-sm text-red-600">{errors.university.message}</p>}
        </div>
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="apply-phone" className="block text-sm font-semibold text-gray-700 mb-1.5">
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
          id="apply-phone"
          className="w-full px-4 py-3 border border-gray-300 rounded-xl text-base focus:ring-2 focus:ring-[#1B9E99] focus:border-[#1B9E99] transition-all min-h-[48px]"
          placeholder="0300-1234567"
        />
        {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {/* Preferred Branch */}
        <div>
          <label htmlFor="apply-branch" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Preferred Branch <span className="text-red-500">*</span>
          </label>
          <select
            {...register('branch', { required: 'Please select a branch' })}
            id="apply-branch"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl text-base focus:ring-2 focus:ring-[#1B9E99] focus:border-[#1B9E99] transition-all min-h-[48px] bg-white"
          >
            <option value="">Select Branch</option>
            <optgroup label="🔵 Boys Hostels">
              {ALL_HOSTELS.filter(h => h.type === 'boys').map((h) => (
                <option key={h.id} value={h.id}>{h.branch || h.area}</option>
              ))}
            </optgroup>
            <optgroup label="🟣 Girls Hostels">
              {ALL_HOSTELS.filter(h => h.type === 'girls').map((h) => (
                <option key={h.id} value={h.id}>{h.branch || h.area}</option>
              ))}
            </optgroup>
          </select>
          {errors.branch && <p className="mt-1 text-sm text-red-600">{errors.branch.message}</p>}
        </div>

        {/* Room Type */}
        <div>
          <label htmlFor="apply-roomType" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Preferred Room Type <span className="text-red-500">*</span>
          </label>
          <select
            {...register('roomType', { required: 'Please select a room type' })}
            id="apply-roomType"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl text-base focus:ring-2 focus:ring-[#1B9E99] focus:border-[#1B9E99] transition-all min-h-[48px] bg-white"
          >
            <option value="">Select Room Type</option>
            {ROOM_TYPES.map((room) => (
              <option key={room.id} value={room.id}>{room.name} ({room.occupancy})</option>
            ))}
          </select>
          {errors.roomType && <p className="mt-1 text-sm text-red-600">{errors.roomType.message}</p>}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {/* Move-in Date */}
        <div>
          <label htmlFor="apply-moveIn" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Expected Move-in Date
          </label>
          <input
            {...register('moveInDate')}
            type="date"
            id="apply-moveIn"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl text-base focus:ring-2 focus:ring-[#1B9E99] focus:border-[#1B9E99] transition-all min-h-[48px]"
          />
        </div>

        {/* Duration */}
        <div>
          <label htmlFor="apply-duration" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Duration
          </label>
          <select
            {...register('duration')}
            id="apply-duration"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl text-base focus:ring-2 focus:ring-[#1B9E99] focus:border-[#1B9E99] transition-all min-h-[48px] bg-white"
          >
            <option value="">Select Duration</option>
            <option value="monthly">Monthly</option>
            <option value="semester">Semester (4-6 months)</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="border-t border-gray-200 pt-5 mt-6">
        <h3 className="text-base font-semibold text-gray-800 mb-4">Emergency Contact</h3>
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="apply-emergencyName" className="block text-sm font-semibold text-gray-700 mb-1.5">
              Contact Person Name <span className="text-red-500">*</span>
            </label>
            <input
              {...register('emergencyName', { required: 'Emergency contact name is required' })}
              type="text"
              id="apply-emergencyName"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl text-base focus:ring-2 focus:ring-[#1B9E99] focus:border-[#1B9E99] transition-all min-h-[48px]"
              placeholder="Parent/Guardian name"
            />
            {errors.emergencyName && <p className="mt-1 text-sm text-red-600">{errors.emergencyName.message}</p>}
          </div>

          <div>
            <label htmlFor="apply-emergencyPhone" className="block text-sm font-semibold text-gray-700 mb-1.5">
              Contact Person Phone <span className="text-red-500">*</span>
            </label>
            <input
              {...register('emergencyPhone', { required: 'Emergency contact phone is required' })}
              type="tel"
              id="apply-emergencyPhone"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl text-base focus:ring-2 focus:ring-[#1B9E99] focus:border-[#1B9E99] transition-all min-h-[48px]"
              placeholder="0300-1234567"
            />
            {errors.emergencyPhone && <p className="mt-1 text-sm text-red-600">{errors.emergencyPhone.message}</p>}
          </div>
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-base font-semibold rounded-xl shadow-lg hover:from-green-600 hover:to-emerald-700 transition-all min-h-[52px] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Send className="w-5 h-5" />
        {isSubmitting ? 'Submitting...' : 'Submit Application'}
      </button>
    </form>
  );
}

