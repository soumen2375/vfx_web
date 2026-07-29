import React, { useState } from 'react';
import { Calculator, CheckCircle2, ArrowRight, ArrowLeft, Upload, Sparkles, ShieldCheck, Film } from 'lucide-react';
import { PageId, QuoteFormData } from '../types';
import { SERVICES_DATA } from '../data/mockData';

interface GetQuotePageProps {
  onNavigate: (page: PageId) => void;
}

export const GetQuotePage: React.FC<GetQuotePageProps> = ({ onNavigate }) => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState<QuoteFormData>({
    projectType: 'Feature Film',
    selectedServices: ['VFX Compositing', '3D Animation'],
    industry: 'Hollywood Studio',
    resolution: '4K OpenEXR / ACEScg',
    shotCount: '50-100 Shots',
    budgetRange: '$100,000 - $250,000',
    deadline: 'Within 3 Months',
    referenceLinks: '',
    notes: '',
    fullName: '',
    companyName: '',
    email: '',
    phone: ''
  });

  const toggleService = (title: string) => {
    setFormData(prev => {
      const exists = prev.selectedServices.includes(title);
      return {
        ...prev,
        selectedServices: exists
          ? prev.selectedServices.filter(s => s !== title)
          : [...prev.selectedServices, title]
      };
    });
  };

  const handleNext = () => setStep(prev => Math.min(prev + 1, 5));
  const handlePrev = () => setStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Header */}
      <section className="relative py-12 border-b border-white/10 bg-gradient-to-b from-red-950/40 via-[#0B0E17] to-[#0B0E17]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white leading-tight">
            Right Time FX Studio <br />
            <span className="text-red-500 drop-shadow-[0_4px_20px_rgba(220,38,38,0.4)]">
              VFX Production Quote
            </span>
          </h1>
          <p className="mt-3 text-gray-200 max-w-xl mx-auto text-xs sm:text-sm">
            Configure shot parameters, resolution formats, and deadlines for a production estimate.
          </p>

          {/* Step Progress Bar */}
          {!submitted && (
            <div className="mt-8 max-w-2xl mx-auto flex items-center justify-between text-xs font-heading font-semibold text-gray-300">
              {['Project Type', 'Services', 'Format & Scale', 'Timeline', 'Contact'].map((sName, i) => {
                const stepNum = i + 1;
                const active = step === stepNum;
                const completed = step > stepNum;
                return (
                  <div key={i} className="flex flex-col items-center gap-1">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-bold transition-all ${
                        completed
                          ? 'bg-red-600 text-white'
                          : active
                          ? 'bg-red-600 text-white ring-4 ring-red-500/30'
                          : 'bg-white/10 text-gray-500'
                      }`}
                    >
                      {completed ? '✓' : stepNum}
                    </div>
                    <span className="hidden sm:inline text-[10px]">{sName}</span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Main Form Box */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-[#121723] border border-white/10 shadow-2xl">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <CheckCircle2 className="w-16 h-16 text-red-500 mx-auto animate-bounce" />
              <h2 className="text-3xl font-heading font-extrabold text-white">Quote Proposal Transmitted!</h2>
              <p className="text-xs text-gray-300 max-w-md mx-auto leading-relaxed">
                Thank you <span className="text-red-400 font-bold">{formData.fullName}</span> ({formData.companyName}). Your project proposal for <span className="text-white font-semibold">{formData.projectType}</span> ({formData.shotCount}) has been calculated.
              </p>

              <div className="p-5 rounded-2xl bg-[#0B0E17] border border-white/10 text-left text-xs space-y-2 max-w-lg mx-auto font-mono">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-gray-400">Estimated Budget Range:</span>
                  <span className="text-red-400 font-bold">{formData.budgetRange}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-gray-400">Resolution Standard:</span>
                  <span className="text-white">{formData.resolution}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Configured Services:</span>
                  <span className="text-white">{formData.selectedServices.length} Selected</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setStep(1);
                  }}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-700 text-white font-heading text-xs font-bold shadow-lg shadow-red-600/30"
                >
                  Configure Another Estimate
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* STEP 1: Project Type */}
              {step === 1 && (
                <div className="space-y-4">
                  <h3 className="font-heading font-bold text-xl text-white">Step 1: Select Project Type</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      'Feature Film',
                      'Episodic TV Series',
                      'Game Cinematic Trailer',
                      'Commercial & Brand Campaign',
                      'Rotoscoping & Paint Sequence',
                      '3D & Matchmove Project'
                    ].map(pt => (
                      <div
                        key={pt}
                        onClick={() => setFormData({ ...formData, projectType: pt })}
                        className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between text-xs font-heading font-bold ${
                          formData.projectType === pt
                            ? 'bg-red-950/80 border-red-500 text-red-400 shadow-lg'
                            : 'bg-[#0B0E17] border-white/10 text-gray-300 hover:border-white/20'
                        }`}
                      >
                        <span>{pt}</span>
                        {formData.projectType === pt && <CheckCircle2 className="w-4 h-4 text-red-500" />}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 2: Selected Services */}
              {step === 2 && (
                <div className="space-y-4">
                  <h3 className="font-heading font-bold text-xl text-white">Step 2: Choose Required VFX Services</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[350px] overflow-y-auto pr-1">
                    {SERVICES_DATA.map(s => {
                      const selected = formData.selectedServices.includes(s.title);
                      return (
                        <div
                          key={s.id}
                          onClick={() => toggleService(s.title)}
                          className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center justify-between text-xs font-medium ${
                            selected
                              ? 'bg-red-950/80 border-red-500 text-red-400 font-bold'
                              : 'bg-[#0B0E17] border-white/10 text-gray-300 hover:border-white/20'
                          }`}
                        >
                          <span>{s.title}</span>
                          {selected && <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 3: Format & Scale */}
              {step === 3 && (
                <div className="space-y-6">
                  <h3 className="font-heading font-bold text-xl text-white">Step 3: Technical Specifications</h3>

                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-2">Master Resolution & Color Space</label>
                    <select
                      value={formData.resolution}
                      onChange={e => setFormData({ ...formData, resolution: e.target.value })}
                      className="w-full bg-[#0B0E17] border border-white/10 rounded-xl p-3 text-xs text-white outline-none focus:border-red-500/50"
                    >
                      <option>4K OpenEXR / ACEScg (Standard Feature)</option>
                      <option>8K IMAX Theatrical Master</option>
                      <option>Dolby Vision HDR 16-Bit</option>
                      <option>2K / HD Broadcast Delivery</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-2">Estimated Shot Count</label>
                    <select
                      value={formData.shotCount}
                      onChange={e => setFormData({ ...formData, shotCount: e.target.value })}
                      className="w-full bg-[#0B0E17] border border-white/10 rounded-xl p-3 text-xs text-white outline-none focus:border-red-500/50"
                    >
                      <option>1-10 Hero Shots</option>
                      <option>10-50 Shots</option>
                      <option>50-100 Shots</option>
                      <option>100-300 Shots (Full Sequence)</option>
                      <option>300+ Shots (Feature Tentpole)</option>
                    </select>
                  </div>
                </div>
              )}

              {/* STEP 4: Budget & Timeline */}
              {step === 4 && (
                <div className="space-y-6">
                  <h3 className="font-heading font-bold text-xl text-white">Step 4: Target Budget & Deadline</h3>

                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-2">Estimated Target Budget Range</label>
                    <select
                      value={formData.budgetRange}
                      onChange={e => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full bg-[#0B0E17] border border-white/10 rounded-xl p-3 text-xs text-white outline-none focus:border-red-500/50"
                    >
                      <option>$10,000 - $25,000</option>
                      <option>$25,000 - $50,000</option>
                      <option>$50,000 - $100,000</option>
                      <option>$100,000 - $250,000</option>
                      <option>$250,000+ (Tentpole Outsourcing)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-2">Target Final Delivery Window</label>
                    <select
                      value={formData.deadline}
                      onChange={e => setFormData({ ...formData, deadline: e.target.value })}
                      className="w-full bg-[#0B0E17] border border-white/10 rounded-xl p-3 text-xs text-white outline-none focus:border-red-500/50"
                    >
                      <option>Urgent (&lt; 1 Month)</option>
                      <option>1 to 3 Months</option>
                      <option>3 to 6 Months</option>
                      <option>Flexible Timeline</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-1">Reference Links / Storyboard URLs</label>
                    <input
                      type="text"
                      placeholder="https://frame.io/vfx-storyboard-deck"
                      value={formData.referenceLinks}
                      onChange={e => setFormData({ ...formData, referenceLinks: e.target.value })}
                      className="w-full bg-[#0B0E17] border border-white/10 rounded-xl p-3 text-xs text-white outline-none focus:border-red-500/50"
                    />
                  </div>
                </div>
              )}

              {/* STEP 5: Contact Info & Submission */}
              {step === 5 && (
                <div className="space-y-4">
                  <h3 className="font-heading font-bold text-xl text-white">Step 5: Contact Information</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-gray-400 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Producer / Contact Name"
                        value={formData.fullName}
                        onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-[#0B0E17] border border-white/10 rounded-xl p-3 text-xs text-white outline-none focus:border-red-500/50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-gray-400 mb-1">Company Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Studio / Agency"
                        value={formData.companyName}
                        onChange={e => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full bg-[#0B0E17] border border-white/10 rounded-xl p-3 text-xs text-white outline-none focus:border-red-500/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-gray-400 mb-1">Work Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="www.righttimefxstudio@gmail.com"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#0B0E17] border border-white/10 rounded-xl p-3 text-xs text-white outline-none focus:border-red-500/50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-gray-400 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+91 8509587525"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#0B0E17] border border-white/10 rounded-xl p-3 text-xs text-white outline-none focus:border-red-500/50"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Form Navigation Buttons */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 font-heading text-xs font-bold flex items-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Previous Step</span>
                  </button>
                ) : <div />}

                {step < 5 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 text-white font-heading text-xs font-bold flex items-center gap-2 shadow-lg shadow-red-600/30"
                  >
                    <span>Next Step</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-red-600 via-rose-700 to-red-800 hover:from-red-500 hover:to-rose-600 text-white font-heading text-xs font-bold flex items-center gap-2 shadow-xl shadow-red-600/30 transition-all hover:scale-[1.01]"
                  >
                    <Calculator className="w-4 h-4" />
                    <span>CALCULATE & SUBMIT BID</span>
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
