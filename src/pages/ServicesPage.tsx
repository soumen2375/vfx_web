import React, { useState, useEffect } from 'react';
import { 
  Layers, 
  Box, 
  Clapperboard, 
  Sparkles, 
  Focus, 
  Scissors, 
  Brush, 
  Image, 
  Flame, 
  Maximize2, 
  Film, 
  Sliders, 
  Video, 
  Cpu,
  ArrowRight,
  CheckCircle2,
  X,
  Calculator,
  HelpCircle
} from 'lucide-react';
import { PageId, ServiceItem } from '../types';
import { SERVICES_DATA } from '../data/mockData';

interface ServicesPageProps {
  initialServiceId?: string;
  onNavigate: (page: PageId, id?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ initialServiceId, onNavigate }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<'all' | 'vfx' | 'cgi' | 'post' | 'virtual' | 'ai'>('all');

  useEffect(() => {
    if (initialServiceId) {
      const match = SERVICES_DATA.find(s => s.id === initialServiceId);
      if (match) setSelectedService(match);
    }
  }, [initialServiceId]);

  const filteredServices = SERVICES_DATA.filter(s => {
    if (activeCategory === 'all') return true;
    return s.category === activeCategory;
  });

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Banner */}
      <section className="relative py-16 border-b border-white/10 bg-gradient-to-b from-red-950/40 via-[#0B0E17] to-[#0B0E17]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl font-heading font-extrabold text-white leading-tight">
            Comprehensive VFX & Post <br />
            <span className="text-red-500 drop-shadow-[0_4px_20px_rgba(220,38,38,0.4)]">
              Outsourcing Services
            </span>
          </h1>
          <p className="mt-4 text-gray-200 max-w-3xl mx-auto text-sm sm:text-base">
            From roto, matchmove, and compositing to paint & cleanup, 3D animation, and virtual production, we deliver disciplined execution for global projects.
          </p>

          {/* Category Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: 'All Services (15)' },
              { id: 'vfx', label: 'VFX & Compositing' },
              { id: 'cgi', label: 'CGI & 3D Animation' },
              { id: 'virtual', label: 'Virtual Production' },
              { id: 'post', label: 'Editorial & Color' },
              { id: 'ai', label: 'AI Assisted VFX' }
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-4 py-2 rounded-full font-heading text-xs font-bold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-red-600 to-rose-700 text-white shadow-lg shadow-red-600/30'
                    : 'bg-white/5 text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map(s => (
            <div
              key={s.id}
              onClick={() => setSelectedService(s)}
              className="group p-6 rounded-2xl bg-[#121723] hover:bg-[#181F2E] border border-white/10 hover:border-red-500/50 shadow-xl transition-all cursor-pointer flex flex-col justify-between hover:-translate-y-1.5"
            >
              <div>
                <div className="relative rounded-xl overflow-hidden h-44 mb-5 border border-white/5">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121723] via-transparent to-transparent opacity-80" />
                  <span className="absolute top-3 left-3 text-[10px] font-mono text-red-400 font-bold bg-black/80 backdrop-blur-md px-2.5 py-1 rounded uppercase border border-red-500/40">
                    {s.category}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl text-white group-hover:text-red-400 transition-colors">
                  {s.title}
                </h3>
                <p className="text-xs text-gray-300 mt-2 leading-relaxed line-clamp-3">
                  {s.shortDesc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-red-400 font-heading font-bold">
                <span>View Specs & Workflow</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICE DETAIL MODAL / DRAWER */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-fadeIn overflow-y-auto">
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#121723] border border-red-500/30 rounded-2xl shadow-2xl overflow-y-auto">
            {/* Modal Header Bar */}
            <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-[#0B0E17]/95 backdrop-blur-md border-b border-white/10">
              <span className="text-xs font-mono text-red-400 uppercase tracking-widest font-bold">
                RIGHT TIME FX STUDIO • {selectedService.title}
              </span>
              <button
                onClick={() => setSelectedService(null)}
                className="p-1 text-gray-400 hover:text-white rounded-lg hover:bg-white/10"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-8">
              {/* Hero Banner */}
              <div className="relative rounded-xl overflow-hidden h-64 border border-white/10">
                <img src={selectedService.image} alt={selectedService.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121723] via-[#121723]/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h2 className="text-3xl font-heading font-extrabold text-white">{selectedService.title}</h2>
                  <p className="text-xs text-red-400 font-mono font-bold mt-1">CATEGORY: {selectedService.category.toUpperCase()}</p>
                </div>
              </div>

              {/* Overview */}
              <div>
                <h4 className="font-heading font-bold text-white text-lg mb-2">Service Overview</h4>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{selectedService.fullDesc}</p>
              </div>

              {/* Benefits */}
              <div>
                <h4 className="font-heading font-bold text-white text-lg mb-3">Key Benefits</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedService.benefits.map((b, i) => (
                    <div key={i} className="p-3 rounded-lg bg-white/5 border border-white/5 flex items-start space-x-2 text-xs text-gray-200">
                      <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div>
                <h4 className="font-heading font-bold text-white text-lg mb-3">Production Workflow</h4>
                <div className="space-y-2">
                  {selectedService.process.map((p, i) => (
                    <div key={i} className="p-3 rounded-lg bg-[#0B0E17] border border-white/5 flex items-center space-x-3 text-xs text-gray-300">
                      <span className="w-6 h-6 rounded-full bg-red-950 text-red-400 font-mono font-bold flex items-center justify-center shrink-0 border border-red-500/30">
                        {i + 1}
                      </span>
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Used */}
              <div>
                <h4 className="font-heading font-bold text-white text-lg mb-3">Software & Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedService.technologies.map((t, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-lg bg-red-950/80 border border-red-500/40 text-xs text-red-300 font-mono font-bold">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              {selectedService.faqs.length > 0 && (
                <div>
                  <h4 className="font-heading font-bold text-white text-lg mb-3">Service FAQs</h4>
                  <div className="space-y-3">
                    {selectedService.faqs.map((faq, i) => (
                      <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1">
                        <p className="font-heading font-semibold text-white text-xs flex items-center gap-2">
                          <HelpCircle className="w-3.5 h-3.5 text-red-400" />
                          <span>{faq.question}</span>
                        </p>
                        <p className="text-xs text-gray-400 pl-5">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Modal CTA */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-red-950/80 via-[#18101C] to-[#0B0E17] border border-red-500/40 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-heading font-bold text-white text-base">Request a Bid for {selectedService.title}</h4>
                  <p className="text-xs text-gray-300">Our team offers custom shot breakdowns, technical evaluations, and day-rate quotes.</p>
                </div>
                <button
                  onClick={() => {
                    setSelectedService(null);
                    onNavigate('get-quote');
                  }}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 text-white font-heading text-xs font-bold flex items-center space-x-2 shrink-0 shadow-lg shadow-red-600/30"
                >
                  <Calculator className="w-4 h-4" />
                  <span>CALCULATE BID</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
