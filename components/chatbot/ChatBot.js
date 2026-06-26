'use client';

import { useState, useEffect, useRef } from 'react';

const HOSTEL_DATA = {
  boys: {
    label: 'Boys Hostels',
    color: '#075A6D',
    accent: '#1B9E99',
    light: '#f0fafa',
    branches: [
      {
        id: 'faizabad',
        name: 'I-8/4 Faizabad Branch',
        address: 'House 50, Roshan Street, inside Street 92, I-8/4, Islamabad',
        landmark: 'Few steps from Faizabad Metro Station',
        phone: null,
        whatsapp: null,
        mapUrl: 'https://maps.app.goo.gl/ogtah3BZ4CkjCQvD8',
        rooms: ['Single Room', 'Double Sharing', 'Triple Sharing'],
        amenities: ['WiFi', 'Meals', 'Electricity Backup', 'Laundry', 'Security', 'Study Room'],
        directions: 'Enter from Street 92 in I-8/4. The hostel is on Roshan Street, just a few minutes walk from Faizabad Metro Station.',
      },
      {
        id: 'i11',
        name: 'I-11/1 Branch',
        address: 'House 307, Street 14, I-11/1, Islamabad',
        landmark: 'Opposite Metro Cash & Carry',
        phone: null,
        whatsapp: null,
        mapUrl: 'https://maps.app.goo.gl/dgy2yYCDTK7tkH1c7',
        rooms: ['Single Room', 'Double Sharing', 'Triple Sharing'],
        amenities: ['WiFi', 'Meals', 'Electricity Backup', 'Laundry', 'Security'],
        directions: 'Located on Street 14 in I-11/1, directly opposite Metro Cash & Carry.',
      },
      {
        id: 'i84main',
        name: 'I-8/4 Main Branch',
        address: 'House 526, Street 104, I-8/4, Islamabad',
        landmark: 'Enter from Street 109 (Markaz side), left turn to Street 104',
        phone: null,
        whatsapp: null,
        mapUrl: 'https://maps.app.goo.gl/P6mDkhiNpRuGfF4X6',
        rooms: ['Double Sharing', 'Triple Sharing'],
        amenities: ['WiFi', 'Meals', 'Electricity Backup', 'Laundry', 'Security'],
        directions: 'From Markaz I-8, enter via Street 109 then take a left turn into Street 104.',
      },
    ]
  },
  girls: {
    label: 'Girls Hostels',
    color: '#3d1a4d',
    accent: '#783893',
    light: '#faf5fc',
    branches: [
      {
        id: 'i83b2',
        name: 'I-8/3 Branch 2',
        address: 'I-8/3, Islamabad',
        landmark: 'I-8/3 Islamabad',
        phone: '0331-4343676',
        whatsapp: '923314343676',
        mapUrl: 'https://maps.app.goo.gl/jJ6UGk7sEiKDaDBW6',
        rooms: ['Single Room', 'Double Sharing'],
        amenities: ['WiFi', 'Meals', 'Electricity Backup', 'Laundry', 'Female Staff', '24/7 Security', 'CCTV'],
        security: 'Female staff only. Secure entry gate. CCTV cameras. 24/7 security guard.',
        directions: 'Located in I-8/3 sector. Call 0331-4343676 for precise directions.',
      },
      {
        id: 'i83b1',
        name: 'I-8/3 Branch 1',
        address: 'House 129, Street 60, I-8/3, Islamabad',
        landmark: 'I-8/3 Islamabad',
        phone: '0331-4343676',
        whatsapp: '923314343676',
        mapUrl: 'https://maps.google.com/maps?q=House+129+Street+60,+I-8/3,+Islamabad',
        rooms: ['Double Sharing', 'Triple Sharing'],
        amenities: ['WiFi', 'Meals', 'Electricity Backup', 'Laundry', 'Female Staff', 'Security', 'CCTV'],
        security: 'Female staff only. Secure entry gate. CCTV cameras.',
        directions: 'House 129, Street 60 in I-8/3 sector. Call 0331-4343676 for directions.',
      },
    ]
  }
};

const GENERAL_FAQS = [
  {
    q: 'What is included in the rent?',
    a: 'All our hostels include WiFi, electricity backup, meals, laundry, and security. Contact us for current pricing.'
  },
  {
    q: 'How do I book a room?',
    a: 'You can book by contacting us on WhatsApp or phone. Girls branches: 0331-4343676. Boys branches: ask via WhatsApp.'
  },
  {
    q: 'Is there a deposit required?',
    a: 'Yes, a security deposit is required. Please contact us for the exact amount for your chosen branch.'
  },
  {
    q: 'Are meals included?',
    a: 'Yes! All our branches provide meals for residents.'
  },
  {
    q: 'Is WiFi available?',
    a: 'Yes, WiFi is available at all our branches.'
  },
  {
    q: 'Can parents visit?',
    a: 'Yes, parents can visit during visiting hours. Please call ahead to arrange a visit.'
  },
];

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [messages, setMessages] = useState([]);
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [step, setStep] = useState('greeting');
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) {
        setShowTooltip(true);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      showGreeting();
    }
  }, [isOpen, messages.length]);

  const botReply = (message, delay = 800) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { ...message, id: Date.now() + Math.random(), from: 'bot' }]);
    }, delay);
  };

  const addUserMessage = (content) => {
    setMessages(prev => [...prev, { id: Date.now() + Math.random(), from: 'user', type: 'text', content }]);
  };

  const showGreeting = () => {
    setStep('greeting');
    botReply({
      type: 'text',
      content: 'Assalam o Alaikum! 👋 Welcome to Students Shelter Hostels. How can I help you today?',
      buttons: [
        { label: '🔵 Find a Boys Hostel', action: 'boys' },
        { label: '🟣 Find a Girls Hostel', action: 'girls' },
        { label: '❓ General Questions', action: 'faqs' }
      ]
    });
  };

  const showBoysBranches = () => {
    setStep('boys-branches');
    setSelectedGender('boys');
    botReply({
      type: 'text',
      content: 'We have 3 boys hostel branches in Islamabad. Which area suits you?',
      buttons: HOSTEL_DATA.boys.branches.map(b => ({
        label: b.name,
        action: 'branch',
        data: b
      }))
    });
  };

  const showGirlsBranches = () => {
    setStep('girls-branches');
    setSelectedGender('girls');
    botReply({
      type: 'text',
      content: 'We have 2 girls hostel branches in I-8/3, Islamabad.\n🔒 Both have female staff and secure entry.',
      buttons: HOSTEL_DATA.girls.branches.map(b => ({
        label: b.name,
        action: 'branch',
        data: b
      }))
    });
  };

  const showFAQs = () => {
    setStep('faqs');
    botReply({
      type: 'text',
      content: 'Sure! What would you like to know?',
      buttons: GENERAL_FAQS.map(faq => ({
        label: faq.q,
        action: 'faq-answer',
        data: faq
      }))
    });
  };

  const showBranchInfo = (branch) => {
    setStep('branch-info');
    setSelectedBranch(branch);
    botReply({
      type: 'branch-card',
      data: branch,
      content: 'What would you like to know about this branch?',
      buttons: [
        { label: '🛏 Room Types', action: 'rooms' },
        { label: '📍 How to Get Here', action: 'directions' },
        { label: '✅ Check Availability', action: 'interested' },
        { label: '💰 Pricing', action: 'interested' }
      ]
    });
  };

  const showRooms = () => {
    setStep('rooms');
    botReply({
      type: 'rooms',
      data: selectedBranch,
      content: 'Here are the room types available:',
      buttons: [
        { label: '← Back to branch info', action: 'branch', data: selectedBranch },
        { label: "✅ I'm interested", action: 'interested' }
      ]
    });
  };

  const showDirections = () => {
    setStep('directions');
    botReply({
      type: 'directions',
      data: selectedBranch,
      content: selectedBranch.directions,
      buttons: [
        { label: '← Back', action: 'branch', data: selectedBranch },
        { label: "✅ I'm interested", action: 'interested' }
      ]
    });
  };

  const showHandoff = () => {
    setStep('handoff');
    botReply({
      type: 'handoff',
      content: 'To check availability and get pricing, contact us directly. Our team will answer within minutes!',
      buttons: []
    }, 600);
  };

  const showFAQAnswer = (faq) => {
    setStep('faq-answer');
    botReply({
      type: 'faq-answer',
      content: faq.a,
      buttons: [
        { label: 'Ask another question', action: 'faqs' },
        { label: 'Find a hostel', action: 'greeting-restart' }
      ]
    });
  };

  const restartChat = () => {
    setMessages([]);
    setStep('greeting');
    setSelectedGender(null);
    setSelectedBranch(null);
    // showGreeting will be called by useEffect since messages.length becomes 0
  };

  const handleButton = (action, label, data) => {
    if (label) addUserMessage(label);
    
    setShowTooltip(false);

    switch(action) {
      case 'boys': showBoysBranches(); break;
      case 'girls': showGirlsBranches(); break;
      case 'faqs': showFAQs(); break;
      case 'branch': showBranchInfo(data); break;
      case 'rooms': showRooms(); break;
      case 'directions': showDirections(); break;
      case 'interested': showHandoff(); break;
      case 'faq-answer': showFAQAnswer(data); break;
      case 'greeting-restart': 
        botReply({
          type: 'text',
          content: 'How can I help you today?',
          buttons: [
            { label: '🔵 Find a Boys Hostel', action: 'boys' },
            { label: '🟣 Find a Girls Hostel', action: 'girls' },
            { label: '❓ General Questions', action: 'faqs' }
          ]
        });
        break;
      case 'restart': restartChat(); break;
    }
  };

  const buildWAMessage = (gender, branch) => {
    const type = gender === 'boys' ? 'Boys' : 'Girls';
    const msg = `Hi Students Shelter! I am interested in your ${type} Hostel.\n\nBranch: ${branch.name}\nAddress: ${branch.address}\n\nPlease share availability and pricing.`;
    return `https://wa.me/923314343676?text=${encodeURIComponent(msg)}`;
  };

  return (
    <>
      {showTooltip && !isOpen && (
        <div className="cb-tooltip">
          👋 Is a hostel available? Ask me!
          <button onClick={() => setShowTooltip(false)} className="cb-tooltip-close">×</button>
        </div>
      )}

      {!isOpen && (
        <button className="cb-fab" onClick={() => { setIsOpen(true); setShowTooltip(false); }}>
          <div className="cb-badge"></div>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </button>
      )}

      {isOpen && (
        <div className={`cb-window ${isMinimized ? 'minimized' : ''}`}>
          <div className="cb-header" onClick={() => isMinimized && setIsMinimized(false)}>
            <div className="cb-header-left">
              <div className="cb-avatar">SS<div className="cb-status-dot"></div></div>
              <div className="cb-header-info">
                <div className="cb-name">Students Shelter</div>
                <div className="cb-status">🟢 Online — replies instantly</div>
              </div>
            </div>
            <div className="cb-header-actions">
              <button onClick={(e) => { e.stopPropagation(); setIsMinimized(!isMinimized); }}>
                {isMinimized ? '↑' : '−'}
              </button>
              <button onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}>×</button>
            </div>
          </div>

          {!isMinimized && (
            <div className="cb-messages">
              {messages.map((msg, index) => (
                <div key={msg.id} className={`cb-message-row ${msg.from}`}>
                  {msg.from === 'bot' && <div className="cb-avatar-small">SS</div>}
                  <div className={`cb-message-content ${msg.from === 'bot' ? 'cb-bot' : 'cb-user'}`}>
                    
                    {msg.type === 'text' && <div style={{ whiteSpace: 'pre-line' }}>{msg.content}</div>}
                    {msg.type === 'faq-answer' && <div>{msg.content}</div>}

                    {msg.type === 'branch-card' && msg.data && (
                      <div className="cb-branch-card-container">
                        <div className={`cb-branch-card ${selectedGender === 'boys' ? 'border-blue' : 'border-purple'}`}>
                          <div className={`cb-gender-label ${selectedGender === 'boys' ? 'text-blue' : 'text-purple'}`}>
                            {selectedGender === 'boys' ? '🔵 BOYS HOSTEL' : '🟣 GIRLS HOSTEL'}
                          </div>
                          <div className="cb-branch-name">{msg.data.name}</div>
                          <div className="cb-branch-address">📍 {msg.data.address}</div>
                          {msg.data.landmark && <div className="cb-branch-landmark">📌 {msg.data.landmark}</div>}
                          
                          {msg.data.security && (
                            <div className="cb-security-note">
                              🔒 {msg.data.security}
                            </div>
                          )}
                          
                          <div className="cb-amenities">
                            {msg.data.amenities.map(a => <span key={a} className="cb-amenity-pill">{a}</span>)}
                          </div>

                          <a href={msg.data.mapUrl} target="_blank" rel="noopener noreferrer" className="cb-map-link">
                            View on Google Maps →
                          </a>
                        </div>
                        {msg.content && <div className="mt-2 text-sm">{msg.content}</div>}
                      </div>
                    )}

                    {msg.type === 'rooms' && msg.data && (
                      <div className="cb-rooms">
                        <div style={{marginBottom: '8px'}}>{msg.content}</div>
                        {msg.data.rooms.map(r => (
                          <div key={r} className="cb-room-item">🛏 {r}</div>
                        ))}
                      </div>
                    )}

                    {msg.type === 'directions' && msg.data && (
                      <div className="cb-directions">
                        <div style={{marginBottom: '8px'}}>{msg.content}</div>
                        <a href={msg.data.mapUrl} target="_blank" rel="noopener noreferrer" className="cb-map-btn">
                          Open Google Maps
                        </a>
                      </div>
                    )}

                    {msg.type === 'handoff' && (
                      <div className="cb-handoff-container">
                        <div style={{marginBottom: '12px'}}>{msg.content}</div>
                        
                        <a href={buildWAMessage(selectedGender, selectedBranch)} target="_blank" rel="noopener noreferrer" className="cb-handoff-card whatsapp">
                          <div className="cb-card-icon wa">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.052 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                          </div>
                          <div className="cb-card-content">
                            <div className="cb-card-title">Chat on WhatsApp</div>
                            <div className="cb-card-sub">Message pre-filled with branch name</div>
                          </div>
                        </a>

                        {selectedGender === 'girls' && (
                          <a href="tel:+923314343676" className="cb-handoff-card call">
                            <div className="cb-card-icon phone">
                              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            </div>
                            <div className="cb-card-content">
                              <div className="cb-card-title">Call 0331-4343676</div>
                              <div className="cb-card-sub">Girls Hostel direct line</div>
                            </div>
                          </a>
                        )}

                        <a href={selectedBranch?.mapUrl} target="_blank" rel="noopener noreferrer" className="cb-handoff-card map">
                          <div className="cb-card-icon map-icon">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                          </div>
                          <div className="cb-card-content">
                            <div className="cb-card-title">View on Google Maps</div>
                            <div className="cb-card-sub">Get directions to this branch</div>
                          </div>
                        </a>

                        <button onClick={() => handleButton('restart', null)} className="cb-restart-btn">
                          ↺ Start a new conversation
                        </button>
                      </div>
                    )}

                    {msg.from === 'bot' && msg.buttons && msg.buttons.length > 0 && (
                      <div className="cb-buttons-container">
                        {msg.buttons.map((btn, i) => (
                          <button 
                            key={i} 
                            onClick={() => handleButton(btn.action, btn.label, btn.data)}
                            className={`cb-quick-reply ${selectedGender === 'girls' ? 'purple' : 'blue'}`}
                            style={{ animationDelay: `${i * 60}ms` }}
                          >
                            {btn.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="cb-message-row bot">
                  <div className="cb-avatar-small">SS</div>
                  <div className="cb-message-content cb-bot">
                    <div className="cb-typing">
                      <span></span><span></span><span></span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        .mt-2 { margin-top: 8px; }
        .mb-2 { margin-bottom: 8px; }
        .mb-3 { margin-bottom: 12px; }
        .text-sm { font-size: 14px; }
        .cb-fab {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #075A6D 0%, #1B9E99 50%, #783893 100%);
          box-shadow: 0 4px 20px rgba(27, 158, 153, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          cursor: pointer;
          transition: transform 0.2s ease;
          z-index: 9999;
        }
        .cb-fab:hover {
          transform: scale(1.08);
        }
        .cb-badge {
          position: absolute;
          top: 0;
          right: 0;
          width: 14px;
          height: 14px;
          background: #ef4444;
          border: 2px solid white;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7); }
          70% { box-shadow: 0 0 0 6px rgba(239, 68, 68, 0); }
          100% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); }
        }
        .cb-tooltip {
          position: fixed;
          bottom: 96px;
          right: 24px;
          background: white;
          border-radius: 16px 16px 4px 16px;
          padding: 12px 36px 12px 16px;
          font-size: 13px;
          font-weight: 500;
          color: #1e293b;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          border: 1px solid #e2e8f0;
          z-index: 9998;
          animation: slideUp 0.3s ease;
        }
        .cb-tooltip-close {
          position: absolute;
          right: 8px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: #94a3b8;
          cursor: pointer;
          font-size: 16px;
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .cb-window {
          position: fixed;
          bottom: 96px;
          right: 24px;
          width: 360px;
          max-height: 580px;
          height: 75vh;
          background: white;
          border-radius: 20px;
          box-shadow: 0 8px 40px rgba(0,0,0,0.15);
          border: 1px solid #e2e8f0;
          display: flex;
          flex-direction: column;
          z-index: 10000;
          overflow: hidden;
          animation: popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .cb-window.minimized {
          height: auto !important;
          max-height: none !important;
        }
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.85); }
          to { opacity: 1; transform: scale(1); }
        }
        .cb-header {
          background: linear-gradient(135deg, #075A6D 0%, #1B9E99 50%, #783893 100%);
          padding: 14px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
        }
        .cb-header-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .cb-avatar {
          width: 36px;
          height: 36px;
          background: rgba(255,255,255,0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 700;
          font-size: 14px;
          position: relative;
        }
        .cb-status-dot {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 10px;
          height: 10px;
          background: #22c55e;
          border: 2px solid #1B9E99;
          border-radius: 50%;
        }
        .cb-name {
          color: white;
          font-size: 14px;
          font-weight: 700;
        }
        .cb-status {
          color: rgba(255,255,255,0.8);
          font-size: 11px;
        }
        .cb-header-actions {
          display: flex;
          gap: 8px;
        }
        .cb-header-actions button {
          background: none;
          border: none;
          color: white;
          font-size: 20px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 4px;
        }
        .cb-messages {
          flex: 1;
          background: #f8fafc;
          padding: 16px 14px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .cb-messages::-webkit-scrollbar {
          width: 4px;
        }
        .cb-messages::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 4px;
        }
        .cb-message-row {
          display: flex;
          gap: 8px;
          align-items: flex-end;
          animation: slideUpMsg 0.2s ease forwards;
          opacity: 0;
          transform: translateY(8px);
        }
        .cb-message-row.user {
          justify-content: flex-end;
        }
        @keyframes slideUpMsg {
          to { opacity: 1; transform: translateY(0); }
        }
        .cb-avatar-small {
          width: 28px;
          height: 28px;
          background: linear-gradient(135deg, #1e293b, #334155);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 11px;
          font-weight: 700;
          flex-shrink: 0;
        }
        .cb-message-content {
          max-width: 85%;
          font-size: 13.5px;
          line-height: 1.4;
        }
        .cb-bot {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 18px 18px 18px 4px;
          padding: 10px 14px;
          color: #1e293b;
          box-shadow: 0 1px 2px rgba(0,0,0,0.05);
        }
        .cb-user {
          background: linear-gradient(135deg, #075A6D 0%, #1B9E99 50%, #783893 100%);
          border-radius: 18px 18px 4px 18px;
          padding: 10px 14px;
          color: white;
        }
        .cb-buttons-container {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 10px;
        }
        .cb-quick-reply {
          background: white;
          border-radius: 20px;
          padding: 8px 14px;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          animation: slideUpMsg 0.3s ease forwards;
          opacity: 0;
          transform: translateY(8px);
        }
        .cb-quick-reply.blue {
          border: 1.5px solid #1B9E99;
          color: #075A6D;
        }
        .cb-quick-reply.blue:hover {
          background: #1B9E99;
          color: white;
          transform: translateY(-1px);
        }
        .cb-quick-reply.purple {
          border: 1.5px solid #783893;
          color: #3d1a4d;
        }
        .cb-quick-reply.purple:hover {
          background: #783893;
          color: white;
          transform: translateY(-1px);
        }
        .cb-typing {
          display: flex;
          gap: 4px;
          padding: 4px 2px;
        }
        .cb-typing span {
          width: 7px;
          height: 7px;
          background: #94a3b8;
          border-radius: 50%;
          animation: bounce 1.2s infinite ease-in-out both;
        }
        .cb-typing span:nth-child(1) { animation-delay: -0.32s; }
        .cb-typing span:nth-child(2) { animation-delay: -0.16s; }
        @keyframes bounce {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1); }
        }
        .cb-branch-card-container {
          display: flex;
          flex-direction: column;
        }
        .cb-branch-card {
          background: white;
          border: 1.5px solid #e2e8f0;
          border-radius: 12px;
          padding: 14px;
          margin-top: 8px;
        }
        .cb-branch-card.border-blue { border-left: 4px solid #1B9E99; }
        .cb-branch-card.border-purple { border-left: 4px solid #783893; }
        .cb-gender-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.05em;
          margin-bottom: 4px;
        }
        .cb-gender-label.text-blue { color: #1B9E99; }
        .cb-gender-label.text-purple { color: #783893; }
        .cb-branch-name {
          font-size: 14px;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 6px;
        }
        .cb-branch-address {
          font-size: 12px;
          color: #64748b;
          margin-bottom: 4px;
        }
        .cb-branch-landmark {
          display: inline-block;
          font-size: 11px;
          background: #f1f5f9;
          padding: 2px 6px;
          border-radius: 4px;
          margin-bottom: 8px;
          color: #475569;
        }
        .cb-security-note {
          background: #faf5fc;
          color: #3d1a4d;
          padding: 6px 8px;
          border-radius: 6px;
          font-size: 11px;
          font-weight: 500;
          margin-bottom: 8px;
        }
        .cb-amenities {
          display: flex;
          gap: 4px;
          overflow-x: auto;
          padding-bottom: 4px;
          margin-bottom: 8px;
        }
        .cb-amenities::-webkit-scrollbar { display: none; }
        .cb-amenity-pill {
          background: #f1f5f9;
          border: 1px solid #e2e8f0;
          padding: 3px 8px;
          border-radius: 12px;
          font-size: 11px;
          white-space: nowrap;
          color: #475569;
        }
        .cb-map-link {
          display: inline-block;
          color: #1B9E99;
          font-size: 12px;
          font-weight: 500;
          text-decoration: none;
        }
        .cb-rooms .cb-room-item {
          background: #f1f5f9;
          padding: 6px 10px;
          border-radius: 6px;
          margin-bottom: 6px;
          font-size: 13px;
          font-weight: 500;
        }
        .cb-map-btn {
          display: inline-block;
          background: #1B9E99;
          color: white;
          padding: 8px 12px;
          border-radius: 6px;
          text-decoration: none;
          font-size: 13px;
          font-weight: 500;
        }
        .cb-handoff-container {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .cb-handoff-card {
          display: flex;
          align-items: center;
          gap: 12px;
          border-radius: 12px;
          padding: 12px 14px;
          text-decoration: none;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .cb-handoff-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }
        .cb-handoff-card.whatsapp { background: #dcfce7; border: 1.5px solid #bbf7d0; }
        .cb-handoff-card.call { background: #d0f2f1; border: 1.5px solid #a1e4e2; }
        .cb-handoff-card.map { background: #fef9c3; border: 1.5px solid #fef08a; }
        .cb-card-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .cb-card-icon.wa { background: #16a34a; }
        .cb-card-icon.phone { background: #eff6ff; color: #1B9E99; }
        .cb-card-icon.map-icon { background: #fffbeb; color: #d97706; }
        .cb-card-title {
          font-size: 13.5px;
          font-weight: 700;
          color: #1e293b;
        }
        .cb-card-sub {
          font-size: 11px;
          color: #64748b;
          margin-top: 2px;
        }
        .cb-restart-btn {
          background: none;
          border: none;
          color: #64748b;
          font-size: 12px;
          text-align: center;
          padding: 8px;
          margin-top: 4px;
          cursor: pointer;
          font-weight: 500;
        }
        .cb-restart-btn:hover {
          text-decoration: underline;
        }
        @media (max-width: 480px) {
          .cb-window {
            width: calc(100vw - 16px);
            right: 8px;
            bottom: 84px;
            border-radius: 16px;
          }
          .cb-tooltip {
            right: 8px;
            bottom: 84px;
          }
        }
      `}} />
    </>
  );
}

