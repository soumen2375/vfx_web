import React, { useState } from 'react';
import { Search, ChevronDown, HelpCircle, Calculator, Mail } from 'lucide-react';
import { PageId } from '../types';
import { FAQ_DATA } from '../data/mockData';

interface FaqPageProps {
  onNavigate: (page: PageId) => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate }) => {
  const [query, setQuery] = useState('');
  const [openId, setOpenId] = useState<string | null>(FAQ_DATA[0].id);
  const [selectedCat, setSelectedCat] = useState<string>('All');

  const categories = ['All', 'General Questions', 'Pricing', 'Services', 'Delivery', 'Support'];

  const filteredFaqs = FAQ_DATA.filter(f => {
    const matchesCat = selectedCat === 'All' || f.category === selectedCat;
    const matchesQuery =
      f.question.toLowerCase().includes(query.toLowerCase()) ||
      f.answer.toLowerCase().includes(query.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section className="relative py-16 border-b border-white/10 bg-gradient-to-b from-red-950/40 via-[#0B0E17] to-[#0B0E17]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-mono text-red-500 tracking-widest uppercase font-bold">FREQUENTLY ASKED QUESTIONS</span>
          <h1 className="text-4xl sm:text-6xl font-heading font-extrabold text-white mt-3 leading-tight">
            Right Time FX Studio <br />
            <span className="text-red-500 drop-shadow-[0_4px_20px_rgba(220,38,38,0.4)]">
              Workflows & FAQ
            </span>
          </h1>

          {/* Search FAQ */}
          <div className="mt-8 max-w-md mx-auto relative">
            <Search className="absolute left-4 top-3.5 w-4 h-4 text-red-400" />
            <input
              type="text"
              placeholder="Search questions by topic (e.g. rotoscoping, turnaround, security)..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="w-full bg-[#121723] border border-white/10 rounded-full pl-11 pr-4 py-3 text-xs text-white placeholder-gray-500 outline-none focus:border-red-500/50"
            />
          </div>

          {/* Category Filter Tabs */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-4 py-2 rounded-full font-heading text-xs font-medium transition-all ${
                  selectedCat === cat
                    ? 'bg-gradient-to-r from-red-600 to-rose-700 text-white shadow-lg shadow-red-600/30'
                    : 'bg-white/5 text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Accordion List */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12 text-gray-400 text-xs">
            No questions match your query. Contact our producers directly for personal assistance.
          </div>
        ) : (
          filteredFaqs.map(faq => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-[#121723] rounded-2xl border border-white/10 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-heading font-bold text-white text-sm sm:text-base hover:text-red-400 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-red-400 shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-red-400' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-xs text-gray-300 leading-relaxed border-t border-white/5 bg-[#0B0E17]/50 animate-fadeIn">
                    <span className="text-[10px] font-mono text-red-400 uppercase font-bold block mb-2">{faq.category}</span>
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })
        )}
      </section>

      {/* Need More Assistance Banner */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-2xl bg-gradient-to-r from-red-950 via-[#18101C] to-[#0B0E17] border border-red-500/40 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xl">
          <div>
            <h4 className="font-heading font-bold text-white text-lg">Have a Custom Production Question?</h4>
            <p className="text-xs text-gray-300 mt-1">Our producers are available for 1-on-1 shot evaluations.</p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-700 text-white font-heading text-xs font-bold flex items-center space-x-2 shrink-0 shadow-lg shadow-red-600/30 hover:from-red-500 hover:to-rose-600 transition-all"
          >
            <Mail className="w-4 h-4" />
            <span>CONTACT PRODUCERS</span>
          </button>
        </div>
      </section>
    </div>
  );
};
