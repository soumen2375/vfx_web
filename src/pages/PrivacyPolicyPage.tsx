import React from 'react';
import { ShieldCheck, Lock, Eye, FileText } from 'lucide-react';
import { PageId } from '../types';

interface PrivacyPolicyPageProps {
  onNavigate: (page: PageId) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-12 pb-16">
      <section className="py-12 border-b border-white/10 bg-gradient-to-b from-red-950/40 via-[#0B0E17] to-[#0B0E17]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ShieldCheck className="w-10 h-10 text-red-500 mx-auto mb-3" />
          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white">Privacy Policy</h1>
          <p className="text-xs text-gray-300 font-mono mt-2">Right Time FX Studio • Data & Security Framework</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 space-y-8 text-xs sm:text-sm text-gray-300 leading-relaxed font-body">
        <div className="p-6 rounded-2xl bg-[#121723] border border-white/10 space-y-3">
          <h3 className="font-heading font-bold text-lg text-white">1. Information Collection</h3>
          <p>
            Right Time FX Studio collects studio and personal contact information solely to provide visual effects bidding, production pipelines, and media turnover services. This includes contact details, NDA agreements, project reference footage, and shot metadata.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#121723] border border-white/10 space-y-3">
          <h3 className="font-heading font-bold text-lg text-white">2. Media Security & Project Protection</h3>
          <p>
            All client plates, proxy video footage, rotoscoping plates, and 3D assets are protected under strict security guidelines. File transfers occur over encrypted studio storage SAN systems with authenticated access.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#121723] border border-white/10 space-y-3">
          <h3 className="font-heading font-bold text-lg text-white">3. Cookies & Analytics</h3>
          <p>
            Our web platform uses essential cookies to streamline video showreel playback, optimize page caching, and maintain analytics regarding studio service interest.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#121723] border border-white/10 space-y-3">
          <h3 className="font-heading font-bold text-lg text-white">4. Third-Party Services & User Rights</h3>
          <p>
            We never sell, trade, or distribute client contact information or proprietary project plates to third parties. Clients retain full rights to request complete data deletion upon final project turnover.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#121723] border border-white/10 space-y-3">
          <h3 className="font-heading font-bold text-lg text-white">5. Contact Information</h3>
          <p>
            For privacy inquiries or security documentation, contact our studio team directly at <span className="text-red-400 font-mono font-bold">www.righttimefxstudio@gmail.com</span> or call <span className="text-red-400 font-mono font-bold">+91 8509587525</span>.
          </p>
        </div>
      </section>
    </div>
  );
};
