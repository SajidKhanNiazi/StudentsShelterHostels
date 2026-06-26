import { ShieldAlert, ShieldCheck, UserCheck, Video } from 'lucide-react';

export default function GirlsSecurityBanner({ securityFeatures }) {
  return (
    <div className="rounded-2xl p-5 md:p-6 text-white shadow-md mb-8"
      style={{ background: 'linear-gradient(135deg, #783893, #9C69AA)' }}
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-white/10 rounded-xl">
          <ShieldAlert className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-base md:text-lg font-bold mb-1 flex items-center gap-1.5">
            🔒 Girls Only Hostel — Female Staff & Management
          </h3>
          <p className="text-xs md:text-sm leading-relaxed mb-4" style={{ color: '#f0e2f7' }}>
            We prioritize the safety and privacy of our female residents. Our hostels feature secure access controls and 24/7 on-site assistance.
          </p>

          {securityFeatures && securityFeatures.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {securityFeatures.map((feat) => (
                <span
                  key={feat}
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/15 backdrop-blur text-white text-[11px] font-semibold rounded-lg"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {feat}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
