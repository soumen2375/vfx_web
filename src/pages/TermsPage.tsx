import React from 'react';
import { FileText, Scale, Lock, CheckCircle } from 'lucide-react';
import { PageId } from '../types';

interface TermsPageProps {
  onNavigate: (page: PageId) => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-12 pb-16">
      <section className="py-12 border-b border-white/10 bg-gradient-to-b from-red-950/40 via-[#0B0E17] to-[#0B0E17]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Scale className="w-10 h-10 text-red-500 mx-auto mb-3" />
          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white">Terms & Conditions</h1>
          <p className="text-xs text-gray-300 font-mono mt-2">Right Time FX Studio • Master Service Guidelines</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 space-y-8 text-xs sm:text-sm text-gray-300 leading-relaxed font-body">
        <div className="p-6 rounded-2xl bg-[#121723] border border-white/10 space-y-3">
          <h3 className="font-heading font-bold text-lg text-white">1. Acceptance of Terms</h3>
          <p>
            By accessing the Right Time FX Studio web platform, requesting production estimates, or commissioning visual effects, rotoscoping, paint, matchmove, or compositing work, you agree to abide by these Master Service Terms and studio agreements.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#121723] border border-white/10 space-y-3">
          <h3 className="font-heading font-bold text-lg text-white">2. Visual Effects Services & Deliverables</h3>
          <p>
            All rotoscoping mattes, paint clean-ups, 3D matchmove cameras, and final composite sequence deliverables are created according to agreed project specifications and shot-count schedules.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#121723] border border-white/10 space-y-3">
          <h3 className="font-heading font-bold text-lg text-white">3. Intellectual Property Rights</h3>
          <p>
            Upon full payment of project invoices, all final visual effects composite renders and client-supplied plates transfer fully to the client. Right Time FX Studio retains rights to internal proprietary pipeline tools.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#121723] border border-white/10 space-y-3">
          <h3 className="font-heading font-bold text-lg text-white">4. Payment Terms & Milestone Sign-Off</h3>
          <p>
            Standard studio billing operates on structured milestone schedules (Advance, Mid-point Review, Final Delivery Sign-Off). Direct studio contact for billing and accounts: <span className="text-red-400 font-mono font-bold">soumadipdinda18@gmail.com</span> / <span className="text-red-400 font-mono font-bold">+91 7319574918</span>.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#121723] border border-white/10 space-y-3">
          <h3 className="font-heading font-bold text-lg text-white">5. Governing Law</h3>
          <p>
            These terms are governed under the commercial laws of India, with jurisdiction for Right Time FX Studio operations.
          </p>
        </div>
      </section>
    </div>
  );
};
