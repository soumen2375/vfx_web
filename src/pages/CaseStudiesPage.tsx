import React, { useState, useEffect } from 'react';
import { FileText, CheckCircle2, Award, Quote, ArrowRight, Layers, Calculator } from 'lucide-react';
import { PageId, CaseStudy } from '../types';
import { CASE_STUDIES_DATA } from '../data/mockData';

interface CaseStudiesPageProps {
  initialCaseId?: string;
  onNavigate: (page: PageId, id?: string) => void;
}

export const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({ initialCaseId, onNavigate }) => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy>(
    CASE_STUDIES_DATA.find(c => c.id === initialCaseId) || CASE_STUDIES_DATA[0]
  );

  useEffect(() => {
    if (initialCaseId) {
      const match = CASE_STUDIES_DATA.find(c => c.id === initialCaseId);
      if (match) setSelectedCase(match);
    }
  }, [initialCaseId]);

  return (
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section className="relative py-16 border-b border-white/10 bg-gradient-to-b from-red-950/40 via-[#0B0E17] to-[#0B0E17]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-mono text-red-500 tracking-widest uppercase font-bold">PRODUCTION CASE STUDIES</span>
          <h1 className="text-4xl sm:text-6xl font-heading font-extrabold text-white mt-3 leading-tight">
            Deep Technical <br />
            <span className="text-red-500 drop-shadow-[0_4px_20px_rgba(220,38,38,0.4)]">
              Production Breakdowns
            </span>
          </h1>
          <p className="mt-4 text-gray-200 max-w-2xl mx-auto text-sm sm:text-base">
            In-depth analysis of how Right Time FX Studio solves complex technical challenges for films, television, and commercials.
          </p>

          {/* Case Selector Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {CASE_STUDIES_DATA.map(cs => (
              <button
                key={cs.id}
                onClick={() => setSelectedCase(cs)}
                className={`px-5 py-2.5 rounded-xl font-heading text-xs font-bold transition-all ${
                  selectedCase.id === cs.id
                    ? 'bg-gradient-to-r from-red-600 to-rose-700 text-white shadow-lg shadow-red-600/30'
                    : 'bg-white/5 text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {cs.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Case Study Content */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Hero Image */}
        <div className="relative rounded-2xl overflow-hidden h-96 border border-red-500/30 shadow-2xl">
          <img src={selectedCase.heroImage} alt={selectedCase.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E17] via-transparent to-transparent opacity-90" />
          <div className="absolute bottom-8 left-8 right-8">
            <span className="text-xs font-mono text-red-400 bg-black/80 px-3 py-1 rounded border border-red-500/40 uppercase font-bold">
              {selectedCase.category} • CLIENT: {selectedCase.client}
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white mt-2">{selectedCase.title}</h2>
            <p className="text-gray-200 text-sm mt-1">{selectedCase.subtitle}</p>
          </div>
        </div>

        {/* Problem vs Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-red-950/50 to-[#121723] border border-red-500/30 space-y-3">
            <span className="text-xs font-mono text-red-400 font-bold uppercase tracking-wider">THE PRODUCTION CHALLENGE</span>
            <h3 className="font-heading font-bold text-xl text-white">The Problem</h3>
            <p className="text-xs text-gray-300 leading-relaxed">{selectedCase.problem}</p>
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-br from-rose-950/50 to-[#121723] border border-red-500/30 space-y-3">
            <span className="text-xs font-mono text-red-400 font-bold uppercase tracking-wider">THE RIGHT TIME FX SOLUTION</span>
            <h3 className="font-heading font-bold text-xl text-white">The Solution</h3>
            <p className="text-xs text-gray-300 leading-relaxed">{selectedCase.solution}</p>
          </div>
        </div>

        {/* Production Process Steps */}
        <div className="p-8 rounded-2xl bg-[#121723] border border-white/10 space-y-6">
          <h3 className="font-heading font-bold text-2xl text-white">Production Process & Pipeline Execution</h3>
          <div className="space-y-3">
            {selectedCase.productionProcess.map((step, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#0B0E17] border border-white/5 flex items-start space-x-3 text-xs text-gray-200">
                <span className="w-6 h-6 rounded-full bg-red-950 text-red-400 font-mono font-bold flex items-center justify-center shrink-0 mt-0.5 border border-red-500/30">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Results & Key Metrics */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-red-950/80 via-[#18101C] to-[#0B0E17] border border-red-500/40 space-y-4">
          <h3 className="font-heading font-bold text-2xl text-white">Production Results & Outcomes</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            {selectedCase.results.map((res, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-black/40 border border-white/10 flex items-start space-x-2 text-xs text-gray-200">
                <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>{res}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Client Review */}
        <div className="p-8 rounded-2xl bg-[#121723] border border-white/10 relative overflow-hidden">
          <Quote className="absolute top-4 right-4 w-24 h-24 text-white/5 pointer-events-none" />
          <p className="text-lg font-heading italic text-white leading-relaxed">
            "{selectedCase.clientReview.quote}"
          </p>
          <div className="mt-6 pt-4 border-t border-white/10">
            <h5 className="font-heading font-bold text-white text-base">{selectedCase.clientReview.author}</h5>
            <p className="text-xs text-red-400 font-mono font-bold">{selectedCase.clientReview.role} • {selectedCase.clientReview.company}</p>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-red-950 via-[#18101C] to-[#0B0E17] border border-red-500/40 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <h4 className="font-heading font-bold text-white text-xl">Facing a Similar Creative Challenge?</h4>
            <p className="text-xs text-gray-300 mt-1">Our team designs custom pipeline setups tailored to your budget.</p>
          </div>
          <button
            onClick={() => onNavigate('get-quote')}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 text-white font-heading text-xs font-bold flex items-center space-x-2 transition-all shrink-0 shadow-lg shadow-red-600/30"
          >
            <Calculator className="w-4 h-4" />
            <span>CALCULATE ESTIMATE</span>
          </button>
        </div>
      </section>
    </div>
  );
};
