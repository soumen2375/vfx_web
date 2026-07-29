import React from 'react';
import { 
  Home, 
  User, 
  Layers, 
  Film, 
  PlayCircle, 
  BookOpen, 
  HelpCircle, 
  Mail, 
  Calculator, 
  ShieldCheck, 
  FileText, 
  RotateCcw, 
  Map, 
  ArrowRight,
  Sparkles,
  Box,
  Focus,
  Scissors,
  Image,
  Sliders
} from 'lucide-react';
import { PageId } from '../types';

interface SitemapPageProps {
  onNavigate: (page: PageId, id?: string) => void;
  onOpenReel?: () => void;
}

export const SitemapPage: React.FC<SitemapPageProps> = ({ onNavigate, onOpenReel }) => {
  return (
    <div className="space-y-16 pb-20">
      {/* Hero Section */}
      <section className="relative py-16 border-b border-white/10 bg-gradient-to-b from-red-950/40 via-[#0C1321] to-[#0C1321]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl font-heading font-extrabold text-white leading-tight">
            Right Time FX <span className="text-[#E5101A] drop-shadow-[0_4px_20px_rgba(229,16,26,0.4)]">Sitemap</span>
          </h1>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Explore the complete structure of Right Time FX Studio. Access all core studio services, portfolio reels, case studies, company information, and legal policies from one place.
          </p>
        </div>
      </section>

      {/* Interactive Tree Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#070E1C]/80 border border-white/10 backdrop-blur-xl shadow-2xl space-y-10">
          
          {/* ROOT: HOME */}
          <div className="flex items-center space-x-3 p-4 rounded-2xl bg-[#0C1321] border border-[#E5101A]/40">
            <div className="w-12 h-12 rounded-xl bg-[#E5101A]/20 border border-[#E5101A]/50 flex items-center justify-center text-[#E5101A]">
              <Home className="w-6 h-6" />
            </div>
            <div>
              <button 
                onClick={() => onNavigate('home')}
                className="text-xl sm:text-2xl font-heading font-bold text-white hover:text-[#E5101A] transition-colors flex items-center gap-2 group"
              >
                <span>Home</span>
                <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-[#E5101A]" />
              </button>
              <p className="text-xs text-gray-400">Right Time FX Cinematic Excellence & Main Studio Portal</p>
            </div>
          </div>

          {/* TREE BRANCHES */}
          <div className="pl-6 sm:pl-10 border-l-2 border-[#E5101A]/30 space-y-10 relative">

            {/* BRANCH 1: ABOUT US */}
            <div className="relative group">
              <div className="absolute -left-[31px] sm:-left-[47px] top-4 w-6 h-0.5 bg-[#E5101A]/40" />
              <div className="p-5 rounded-2xl bg-[#0C1321] border border-white/10 hover:border-[#E5101A]/40 transition-all flex items-center space-x-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#E5101A] shrink-0">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <button 
                    onClick={() => onNavigate('about')}
                    className="font-heading font-bold text-lg text-white hover:text-[#E5101A] transition-colors"
                  >
                    About Us
                  </button>
                  <p className="text-xs text-gray-400">Our studio history, leadership team, awards, and outsourcing mission in India.</p>
                </div>
              </div>
            </div>

            {/* BRANCH 2: SERVICES & SUB-SERVICES */}
            <div className="relative group">
              <div className="absolute -left-[31px] sm:-left-[47px] top-4 w-6 h-0.5 bg-[#E5101A]/40" />
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-[#0C1321] border border-[#E5101A]/30 flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-[#E5101A]/20 border border-[#E5101A]/40 flex items-center justify-center text-[#E5101A] shrink-0">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <button 
                      onClick={() => onNavigate('services')}
                      className="font-heading font-bold text-lg text-white hover:text-[#E5101A] transition-colors"
                    >
                      Services
                    </button>
                    <p className="text-xs text-gray-400">End-to-End Post-Production & Visual Effects Outsourcing Solutions</p>
                  </div>
                </div>

                {/* SUB-SERVICES SUB-TREE */}
                <div className="pl-6 sm:pl-10 border-l-2 border-dashed border-white/20 space-y-3">
                  {[
                    { id: 'vfx-compositing', name: 'VFX Compositing', icon: Layers, desc: 'Multi-pass compositing & deep optical blending' },
                    { id: 'cgi', name: 'CGI & 3D Animation', icon: Box, desc: 'Hard-surface modeling, creature & character performance' },
                    { id: 'matchmove-tracking', name: 'Matchmove & Tracking', icon: Focus, desc: '3D camera solve trajectories & object tracking' },
                    { id: 'rotoscoping', name: 'Rotoscoping', icon: Scissors, desc: 'Articulate silhouette extraction & matte isolation' },
                    { id: 'matte-painting', name: 'Matte Painting', icon: Image, desc: 'Digital environment extensions & 2.5D vistas' },
                    { id: 'color-grading', name: 'Color Grading', icon: Sliders, desc: 'Dolby Vision HDR color mastering & look design' },
                  ].map((sub) => (
                    <div key={sub.id} className="relative flex items-center">
                      <div className="absolute -left-[25px] sm:-left-[41px] top-1/2 w-5 h-0.5 bg-white/20" />
                      <button
                        onClick={() => onNavigate('services', sub.id)}
                        className="w-full p-3.5 rounded-xl bg-[#070E1C] border border-white/10 hover:border-[#E5101A]/50 hover:bg-[#0C1321] transition-all text-left flex items-center justify-between group"
                      >
                        <div className="flex items-center space-x-3">
                          <sub.icon className="w-4 h-4 text-[#E5101A]" />
                          <div>
                            <span className="font-heading font-semibold text-sm text-gray-200 group-hover:text-white">
                              {sub.name}
                            </span>
                            <span className="hidden sm:inline-block text-xs text-gray-400 ml-3">
                              • {sub.desc}
                            </span>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-[#E5101A] group-hover:translate-x-1 transition-all" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* BRANCH 3: PORTFOLIO */}
            <div className="relative group">
              <div className="absolute -left-[31px] sm:-left-[47px] top-4 w-6 h-0.5 bg-[#E5101A]/40" />
              <div className="p-5 rounded-2xl bg-[#0C1321] border border-white/10 hover:border-[#E5101A]/40 transition-all flex items-center space-x-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#E5101A] shrink-0">
                  <Film className="w-5 h-5" />
                </div>
                <div>
                  <button 
                    onClick={() => onNavigate('portfolio')}
                    className="font-heading font-bold text-lg text-white hover:text-[#E5101A] transition-colors"
                  >
                    Portfolio
                  </button>
                  <p className="text-xs text-gray-400">Recent feature films, streaming series, commercials, and VFX breakdowns.</p>
                </div>
              </div>
            </div>

            {/* BRANCH 4: SHOWREEL */}
            <div className="relative group">
              <div className="absolute -left-[31px] sm:-left-[47px] top-4 w-6 h-0.5 bg-[#E5101A]/40" />
              <div className="p-5 rounded-2xl bg-[#0C1321] border border-white/10 hover:border-[#E5101A]/40 transition-all flex items-center space-x-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#E5101A] shrink-0">
                  <PlayCircle className="w-5 h-5" />
                </div>
                <div>
                  <button 
                    onClick={() => {
                      if (onOpenReel) onOpenReel();
                      else onNavigate('portfolio');
                    }}
                    className="font-heading font-bold text-lg text-white hover:text-[#E5101A] transition-colors"
                  >
                    Showreel
                  </button>
                  <p className="text-xs text-gray-400">Watch our flagship visual effects showreel video in high-definition.</p>
                </div>
              </div>
            </div>

            {/* BRANCH 5: BLOG */}
            <div className="relative group">
              <div className="absolute -left-[31px] sm:-left-[47px] top-4 w-6 h-0.5 bg-[#E5101A]/40" />
              <div className="p-5 rounded-2xl bg-[#0C1321] border border-white/10 hover:border-[#E5101A]/40 transition-all flex items-center space-x-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#E5101A] shrink-0">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <button 
                    onClick={() => onNavigate('blog')}
                    className="font-heading font-bold text-lg text-white hover:text-[#E5101A] transition-colors"
                  >
                    Blog & Insights
                  </button>
                  <p className="text-xs text-gray-400">Behind the scenes articles, virtual production workflows, and AI VFX research.</p>
                </div>
              </div>
            </div>

            {/* BRANCH 6: FAQ */}
            <div className="relative group">
              <div className="absolute -left-[31px] sm:-left-[47px] top-4 w-6 h-0.5 bg-[#E5101A]/40" />
              <div className="p-5 rounded-2xl bg-[#0C1321] border border-white/10 hover:border-[#E5101A]/40 transition-all flex items-center space-x-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#E5101A] shrink-0">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <div>
                  <button 
                    onClick={() => onNavigate('faq')}
                    className="font-heading font-bold text-lg text-white hover:text-[#E5101A] transition-colors"
                  >
                    FAQ
                  </button>
                  <p className="text-xs text-gray-400">Frequently asked questions regarding pipelines, pricing, security, and delivery formats.</p>
                </div>
              </div>
            </div>

            {/* BRANCH 7: CONTACT */}
            <div className="relative group">
              <div className="absolute -left-[31px] sm:-left-[47px] top-4 w-6 h-0.5 bg-[#E5101A]/40" />
              <div className="p-5 rounded-2xl bg-[#0C1321] border border-white/10 hover:border-[#E5101A]/40 transition-all flex items-center space-x-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#E5101A] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <button 
                    onClick={() => onNavigate('contact')}
                    className="font-heading font-bold text-lg text-white hover:text-[#E5101A] transition-colors"
                  >
                    Contact
                  </button>
                  <p className="text-xs text-gray-400">Get in touch with our executive producers, studio locations, and direct inquiry forms.</p>
                </div>
              </div>
            </div>

            {/* BRANCH 8: GET A QUOTE */}
            <div className="relative group">
              <div className="absolute -left-[31px] sm:-left-[47px] top-4 w-6 h-0.5 bg-[#E5101A]/40" />
              <div className="p-5 rounded-2xl bg-gradient-to-r from-[#E5101A]/20 via-[#0C1321] to-[#0C1321] border border-[#E5101A]/40 transition-all flex items-center space-x-4">
                <div className="w-10 h-10 rounded-xl bg-[#E5101A] flex items-center justify-center text-white shrink-0 shadow-lg shadow-[#E5101A]/40">
                  <Calculator className="w-5 h-5" />
                </div>
                <div>
                  <button 
                    onClick={() => onNavigate('get-quote')}
                    className="font-heading font-bold text-lg text-white hover:text-[#E5101A] transition-colors"
                  >
                    Get a Quote
                  </button>
                  <p className="text-xs text-gray-300">Interactive project estimator for rapid bid submission and budget calculation.</p>
                </div>
              </div>
            </div>

            {/* BRANCH 9: LEGAL */}
            <div className="relative group">
              <div className="absolute -left-[31px] sm:-left-[47px] top-4 w-6 h-0.5 bg-[#E5101A]/40" />
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-[#0C1321] border border-white/10 flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#E5101A] shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-white">
                      Legal & Compliance
                    </h3>
                    <p className="text-xs text-gray-400">Terms of service, privacy compliance (TPN certified), refund policies, and sitemap.</p>
                  </div>
                </div>

                {/* LEGAL SUB-TREE */}
                <div className="pl-6 sm:pl-10 border-l-2 border-dashed border-white/20 space-y-3">
                  {[
                    { page: 'privacy-policy', name: 'Privacy Policy', icon: ShieldCheck },
                    { page: 'terms-conditions', name: 'Terms & Conditions', icon: FileText },
                    { page: 'refund-policy', name: 'Refund Policy', icon: RotateCcw },
                    { page: 'sitemap', name: 'Sitemap', icon: Map, isCurrent: true }
                  ].map((legalItem) => (
                    <div key={legalItem.page} className="relative flex items-center">
                      <div className="absolute -left-[25px] sm:-left-[41px] top-1/2 w-5 h-0.5 bg-white/20" />
                      <button
                        onClick={() => onNavigate(legalItem.page as PageId)}
                        className={`w-full p-3.5 rounded-xl border transition-all text-left flex items-center justify-between group ${
                          legalItem.isCurrent
                            ? 'bg-[#E5101A]/10 border-[#E5101A]/50 text-white'
                            : 'bg-[#070E1C] border-white/10 hover:border-[#E5101A]/50 hover:bg-[#0C1321]'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <legalItem.icon className="w-4 h-4 text-[#E5101A]" />
                          <span className="font-heading font-semibold text-sm text-gray-200 group-hover:text-white">
                            {legalItem.name} {legalItem.isCurrent && '(Active Page)'}
                          </span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-[#E5101A] group-hover:translate-x-1 transition-all" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};
