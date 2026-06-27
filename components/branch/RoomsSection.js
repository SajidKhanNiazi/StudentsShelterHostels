'use client'
import { useState } from 'react'
import Image from 'next/image'
import { MessageCircle, Check, Star, Users, Bath } from 'lucide-react'
import { ROOMS_DATA, BATHROOM_LABELS, formatPrice } from '@/lib/roomsData'

function RoomCardColumn({ room, gender, branchSlug }) {
  const accentColor = gender === 'girls' ? 'purple' : 'teal'

  const waNumber = '923314343676'
  const waMessage = encodeURIComponent(
    `Hi Students Shelter! I am interested in the following room:\n\nBranch: ${branchSlug}\nRoom: ${room.name}\nBathroom: ${BATHROOM_LABELS[room.bathroom]?.label || room.bathroom}\nPrice: ${formatPrice(room.price)}/month\n\nPlease confirm availability.`
  )
  const waUrl = `https://wa.me/${waNumber}?text=${waMessage}`

  const isAttached = room.bathroom.includes('A')
  const capacityLabel = room.capacity === 1 ? 'Single' : room.capacity === 2 ? 'Double' : `${room.capacity} Seater`
  const accentBorderClass = gender === 'girls' ? 'border-t-purple-500' : 'border-t-[#1B9E99]'

  return (
    <div className={`flex flex-col bg-white rounded-2xl overflow-hidden border-2 border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full border-t-4 ${accentBorderClass}`}>
      
      {/* ── IMAGE SECTION ── */}
      <div className="relative h-60 w-full border-b-2 border-slate-100 flex-shrink-0">
        {room.isTopPick && (
          <div className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-bold px-2.5 py-1.5 rounded-lg flex items-center z-10 shadow-md">
            <Star className="w-3.5 h-3.5 fill-current mr-1" /> Top Pick
          </div>
        )}
        
        <div className="relative w-full h-full">
          <Image
            src={room.photo}
            alt={`${room.name} at Students Shelter`}
            fill
            sizes="(max-w-768px) 100vw, 33vw"
            priority={room.isTopPick}
            className="object-cover"
            onError={(e) => {
              e.target.srcset = '';
              e.target.src = '/images/rooms/placeholder.jpg';
            }}
          />
        </div>
        
        <div className="absolute bottom-3 right-3 bg-slate-900/95 backdrop-blur px-3.5 py-1.5 rounded-lg text-white font-extrabold text-base border border-white/10 z-10 shadow-md">
          {formatPrice(room.price)} <span className="text-xs font-normal opacity-80">/mo</span>
        </div>
      </div>

      {/* ── CONTENT SECTION ── */}
      <div className="p-6 flex-1 flex flex-col bg-white">
        <h3 className="text-xl font-black text-slate-900 mb-3 tracking-tight">{room.name}</h3>
        
        {/* Meta details */}
        <div className="flex items-center gap-3 text-sm text-slate-600 mb-4 bg-slate-50 border border-slate-100 px-3 py-2 rounded-xl">
          <span className="flex items-center font-semibold">
            <Users className="w-4 h-4 mr-1.5 text-slate-500" /> {capacityLabel}
          </span>
          <span className="text-slate-300">|</span>
          <span className={`flex items-center font-semibold ${isAttached ? 'text-green-700' : ''}`}>
            <Bath className={`w-4 h-4 mr-1.5 ${isAttached ? 'text-green-600' : 'text-slate-500'}`} /> 
            {BATHROOM_LABELS[room.bathroom]?.label}
          </span>
        </div>

        <p className="text-sm text-slate-600 leading-relaxed mb-6">{room.description}</p>

        {/* Features List */}
        <ul className="grid grid-cols-1 gap-2.5 mt-auto mb-6">
          {room.features.slice(0, 4).map((feature, idx) => (
            <li key={idx} className="flex items-center text-sm text-slate-800 font-bold">
              <Check className="w-4 h-4 text-green-500 mr-2 shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* ── FOOTER SECTION WITH BUTTON ── */}
      <div className="p-6 pt-0 bg-white">
        <a 
          href={waUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-whatsapp-pulse flex items-center justify-center w-full py-4 rounded-xl text-base font-extrabold text-white bg-[#25D366] hover:bg-[#1ebd5d] transition-all shadow-[0_4px_14px_rgba(37,211,102,0.3)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.4)] hover:-translate-y-0.5 text-center"
        >
          <MessageCircle className="w-5 h-5 mr-2 fill-current" /> Book via WhatsApp
        </a>
      </div>
      
    </div>
  )
}

export default function RoomsSection({ branchSlug }) {
  const data = ROOMS_DATA[branchSlug]
  const [activeFilter, setActiveFilter] = useState('all')

  if (!data) return null

  const { rooms, gender, priceNote } = data
  const accentColor = gender === 'girls' ? 'purple' : 'teal'
  const filterBtnActiveBg = gender === 'girls' ? 'bg-[#9C69AA] text-white' : 'bg-[#1B9E99] text-white'

  const FILTERS = [
    { key: 'all',    label: 'All Rooms' },
    { key: 'single', label: 'Single',   match: (r) => r.capacity === 1 },
    { key: 'double', label: 'Double',   match: (r) => r.capacity === 2 },
    { key: 'triple', label: '3+ Seater', match: (r) => r.capacity >= 3 },
  ]

  const filteredRooms = activeFilter === 'all'
    ? rooms
    : rooms.filter(FILTERS.find(f => f.key === activeFilter)?.match || (() => true))

  return (
    <section className="my-10 w-full" id="rooms-pricing">
      
      {/* Custom keyframes for pulsing WhatsApp CTR button */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes custom-pulse {
          0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(37, 211, 102, 0); }
          100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }
        .btn-whatsapp-pulse {
          animation: custom-pulse 2.3s infinite;
        }
        .btn-whatsapp-pulse:hover {
          animation: none;
        }
      `}} />

      {/* Section Header */}
      <div className="mb-6">
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">Rooms & Pricing</h2>
        <p className="text-sm text-slate-500 font-medium">{priceNote}</p>
      </div>

      <div className="w-full">
        
        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-8">
          {FILTERS.map(f => {
            const count = f.key === 'all' ? rooms.length : rooms.filter(f.match || (() => false)).length
            if (count === 0 && f.key !== 'all') return null
            const isActive = activeFilter === f.key
            return (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`px-5 py-2 rounded-full text-sm font-extrabold border transition-all ${
                  isActive 
                    ? `${filterBtnActiveBg} border-transparent shadow-sm` 
                    : 'bg-slate-100 border-slate-200 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {f.label} <span className="text-xs font-normal opacity-85 ml-1">({count})</span>
              </button>
            )
          })}
        </div>

        {/* Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {filteredRooms.map(room => (
            <RoomCardColumn
              key={room.id}
              room={room}
              gender={gender}
              branchSlug={branchSlug}
            />
          ))}
        </div>
        
      </div>
    </section>
  )
}
