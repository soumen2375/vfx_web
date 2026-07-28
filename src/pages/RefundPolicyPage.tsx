import React from 'react';
import { RefreshCw, CheckCircle, HelpCircle } from 'lucide-react';
import { PageId } from '../types';

interface RefundPolicyPageProps {
  onNavigate: (page: PageId) => void;
}

export const RefundPolicyPage: React.FC<RefundPolicyPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-12 pb-16">
      <section className="py-12 border-b border-white/10 bg-gradient-to-b from-red-950/40 via-[#0B0E17] to-[#0B0E17]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <RefreshCw className="w-10 h-10 text-red-500 mx-auto mb-3" />
          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white">Refund & Revision Policy</h1>
          <p className="text-xs text-gray-300 font-mono mt-2">Right Time FX Studio • Service Revision & Payment Policy</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 space-y-8 text-xs sm:text-sm text-gray-300 leading-relaxed font-body">
        <div className="p-6 rounded-2xl bg-[#121723] border border-white/10 space-y-3">
          <h3 className="font-heading font-bold text-lg text-white">1. Creative Revision Policy</h3>
          <p>
            Visual effects production involves dedicated artist labor, rotoscoping, paint clean-up, and rendering. Every shot bid includes structured review iterations per milestone stage:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-gray-400">
            <li>Stage 1: Lineup & Rotoscoping / Matchmove Review</li>
            <li>Stage 2: Paint Clean-up & Temp Composite Review</li>
            <li>Stage 3: Final Pixel Polish & High-Res Delivery Sign-off</li>
          </ul>
        </div>

        <div className="p-6 rounded-2xl bg-[#121723] border border-white/10 space-y-3">
          <h3 className="font-heading font-bold text-lg text-white">2. Scope Changes & Additional Revisions</h3>
          <p>
            Changes that alter plate footage, add new unbid elements, or re-frame sequences outside original scope are quoted transparently prior to execution.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#121723] border border-white/10 space-y-3">
          <h3 className="font-heading font-bold text-lg text-white">3. Cancellation & Refund Eligibility</h3>
          <p>
            Production deposits are non-refundable once artist resources or workstations have been assigned. If a project is cancelled during active execution, billing is calculated according to completed shots and work up to written notice.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#121723] border border-white/10 space-y-3">
          <h3 className="font-heading font-bold text-lg text-white">4. Direct Contact</h3>
          <p>
            For billing inquiries or revision adjustments, contact Soumadip Dinda directly at <span className="text-red-400 font-mono font-bold">soumadipdinda18@gmail.com</span> or call <span className="text-red-400 font-mono font-bold">+91 7319574918</span>.
          </p>
        </div>
      </section>
    </div>
  );
};
