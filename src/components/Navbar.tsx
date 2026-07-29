import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Layers, 
  Film, 
  ArrowRight,
  ShieldCheck,
  Video,
  Clapperboard,
  Box,
  Cpu,
  Calculator,
  ChevronRight
} from 'lucide-react';
import { PageId } from '../types';
import { PORTFOLIO_DATA } from '../data/mockData';
import { RightTimeFXLogo } from './RightTimeFXLogo';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId, detailId?: string) => void;
  onOpenSearch?: () => void;
  onOpenReel?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<'services' | 'portfolio' | null>(null);
  const [mobileSubOpen, setMobileSubOpen] = useState<'services' | 'portfolio' | null>(null);

  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mega menu on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveMega(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems: { id: PageId; label: string; hasMega?: 'services' | 'portfolio' }[] = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT US' },
    { id: 'services', label: 'SERVICES', hasMega: 'services' },
    { id: 'portfolio', label: 'PORTFOLIO', hasMega: 'portfolio' },
    { id: 'contact', label: 'CONTACT' }
  ];

  return (
    <>
      {/* Mega Menu Dimmed Backdrop Overlay (Desktop) */}
      {activeMega && (
        <div 
          className="hidden lg:block fixed inset-0 top-16 sm:top-20 bg-black/75 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => setActiveMega(null)}
        />
      )}

      <header 
        ref={headerRef}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#050811]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/50' 
            : 'bg-[#070A11] border-b border-white/10'
        }`}
      >
        {/* MAIN NAVBAR CONTAINER */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <button
              onClick={() => {
                onNavigate('home');
                setMobileMenuOpen(false);
                setActiveMega(null);
              }}
              className="flex items-center space-x-2 group text-left focus:outline-none shrink-0"
            >
              <RightTimeFXLogo size="md" />
            </button>

            {/* Desktop Nav Items (visible on lg and up >= 1024px) */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navItems.map(item => {
                const isActive = currentPage === item.id;
                const isMegaOpen = activeMega === item.hasMega && item.hasMega !== undefined;

                return (
                  <div
                    key={item.id}
                    className="relative py-2"
                    onMouseEnter={() => {
                      if (item.hasMega) setActiveMega(item.hasMega);
                      else setActiveMega(null);
                    }}
                  >
                    <button
                      onClick={() => {
                        onNavigate(item.id);
                        setActiveMega(null);
                      }}
                      className={`px-3.5 py-2 rounded-xl font-heading text-xs font-bold tracking-widest uppercase transition-all flex flex-col items-center group ${
                        isMegaOpen
                          ? 'text-white bg-[#e5101a] shadow-lg shadow-red-600/30'
                          : isActive
                          ? 'text-[#e5101a] bg-[#e5101a]/10 border border-[#e5101a]/30'
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <div className="flex items-center space-x-1.5">
                        <span>{item.label}</span>
                        {item.hasMega && (
                          <ChevronDown 
                            className={`w-3.5 h-3.5 transition-transform duration-300 ${
                              isMegaOpen ? 'rotate-180 text-white' : 'opacity-60 group-hover:opacity-100'
                            }`} 
                          />
                        )}
                      </div>
                    </button>
                  </div>
                );
              })}
            </nav>

            {/* Action Buttons Right (Desktop) */}
            <div className="hidden lg:flex items-center space-x-4">
              <button
                onClick={() => {
                  onNavigate('get-quote');
                  setActiveMega(null);
                }}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#e5101a] via-rose-600 to-[#c00010] hover:from-[#f01c26] hover:to-[#a0000d] text-white font-heading text-xs font-bold tracking-wider flex items-center space-x-2 shadow-lg shadow-red-600/30 hover:shadow-red-500/50 transition-all hover:scale-105 active:scale-95"
              >
                <span>GET A QUOTE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Menu Hamburger Button (visible on screen < 1024px) */}
            <div className="flex items-center space-x-3 lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Navigation Menu"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 active:scale-95 transition-all"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-[#e5101a]" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* MEGA MENU OVERLAY - SERVICES (Desktop) */}
        {activeMega === 'services' && (
          <div 
            className="absolute top-full left-0 w-full bg-[#0d1424] border-t-2 border-t-[#e5101a] border-b border-[#e5101a]/40 shadow-[0_30px_70px_rgba(0,0,0,0.95)] py-8 px-6 transition-all animate-fadeIn z-50"
            onMouseEnter={() => setActiveMega('services')}
            onMouseLeave={() => setActiveMega(null)}
          >
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <div className="flex items-center space-x-2 text-[#e5101a] font-heading text-xs font-bold tracking-widest uppercase mb-4">
                  <Layers className="w-4 h-4" />
                  <span>CORE VFX & OUTSOURCING</span>
                </div>
                <div className="space-y-1.5">
                  {[
                    { id: 'vfx-compositing', name: 'VFX Compositing', icon: Layers },
                    { id: 'rotoscoping', name: 'Rotoscoping & Paint', icon: Clapperboard },
                    { id: 'cgi', name: 'CGI & Hard Surface', icon: Box },
                    { id: '3d-animation', name: '3D Creature Animation', icon: Clapperboard }
                  ].map(item => (
                    <button
                      key={item.id}
                      onClick={() => {
                        onNavigate('services', item.id);
                        setActiveMega(null);
                      }}
                      className="w-full text-left py-2 px-3 rounded-lg bg-[#070c17] border border-white/5 hover:border-[#e5101a]/50 text-gray-300 hover:text-[#e5101a] flex items-center space-x-2.5 transition-colors text-xs font-medium"
                    >
                      <item.icon className="w-4 h-4 text-[#e5101a] shrink-0" />
                      <span>{item.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center space-x-2 text-[#e5101a] font-heading text-xs font-bold tracking-widest uppercase mb-4">
                  <Video className="w-4 h-4" />
                  <span>ADVANCED TECH PIPELINE</span>
                </div>
                <div className="space-y-1.5">
                  {[
                    { id: 'virtual-production', name: 'Virtual Production (Unreal 5)', icon: Video },
                    { id: 'ai-assisted-vfx', name: 'AI Assisted FX Pipelines', icon: Cpu },
                    { id: 'matchmove-tracking', name: 'Matchmove & Tracking', icon: Layers },
                    { id: 'color-grading', name: 'Cinematic Color Grading', icon: Clapperboard }
                  ].map(item => (
                    <button
                      key={item.id}
                      onClick={() => {
                        onNavigate('services', item.id);
                        setActiveMega(null);
                      }}
                      className="w-full text-left py-2 px-3 rounded-lg bg-[#070c17] border border-white/5 hover:border-[#e5101a]/50 text-gray-300 hover:text-[#e5101a] flex items-center space-x-2.5 transition-colors text-xs font-medium"
                    >
                      <item.icon className="w-4 h-4 text-[#e5101a] shrink-0" />
                      <span>{item.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center space-x-2 text-white font-heading text-xs font-bold tracking-widest uppercase mb-4">
                  <ShieldCheck className="w-4 h-4 text-[#e5101a]" />
                  <span>FULL SERVICE CATALOG</span>
                </div>
                <p className="text-xs text-gray-300 mb-4 leading-relaxed font-body">
                  India's premier outsourcing studio for feature films, episodic TV, and commercial campaigns.
                </p>
                <button
                  onClick={() => {
                    onNavigate('services');
                    setActiveMega(null);
                  }}
                  className="px-4 py-2.5 rounded-xl bg-[#e5101a] hover:bg-[#c00010] text-white text-xs font-heading font-bold flex items-center space-x-2 transition-all shadow-md shadow-red-600/30 hover:scale-105"
                >
                  <span>View All Services</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </button>
              </div>

              {/* Featured Box */}
              <div className="bg-gradient-to-br from-red-950/80 via-[#140b17] to-[#080d18] p-5 rounded-2xl border border-[#e5101a]/40 relative overflow-hidden flex flex-col justify-between shadow-xl">
                <div>
                  <span className="text-[10px] font-mono text-[#e5101a] bg-red-950 px-2 py-0.5 rounded uppercase border border-[#e5101a]/50 font-bold">
                    INDIA VFX OUTSOURCING
                  </span>
                  <h4 className="font-heading font-bold text-white text-base mt-3">
                    Reliable Studio Workflows
                  </h4>
                  <p className="text-xs text-gray-300 mt-1.5 leading-relaxed font-body">
                    Disciplined execution, creative precision, and dependable turnaround times.
                  </p>
                </div>
                <button
                  onClick={() => {
                    onNavigate('about');
                    setActiveMega(null);
                  }}
                  className="mt-4 text-xs font-heading font-bold text-[#e5101a] flex items-center space-x-1 hover:underline"
                >
                  <span>Learn About Right Time FX</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* MEGA MENU OVERLAY - PORTFOLIO (Desktop) */}
        {activeMega === 'portfolio' && (
          <div 
            className="absolute top-full left-0 w-full bg-[#0d1424] border-t-2 border-t-[#e5101a] border-b border-[#e5101a]/40 shadow-[0_30px_70px_rgba(0,0,0,0.95)] py-8 px-6 transition-all animate-fadeIn z-50"
            onMouseEnter={() => setActiveMega('portfolio')}
            onMouseLeave={() => setActiveMega(null)}
          >
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center space-x-2 text-[#e5101a] font-heading text-xs font-bold tracking-widest uppercase">
                  <Film className="w-4 h-4" />
                  <span>FEATURED SHOWCASE WORKS</span>
                </div>
                <button
                  onClick={() => {
                    onNavigate('portfolio');
                    setActiveMega(null);
                  }}
                  className="text-xs text-[#e5101a] font-bold hover:underline flex items-center space-x-1"
                >
                  <span>View All Portfolio Works ({PORTFOLIO_DATA.length})</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {PORTFOLIO_DATA.slice(0, 3).map(proj => (
                  <div
                    key={proj.id}
                    onClick={() => {
                      onNavigate('portfolio', proj.id);
                      setActiveMega(null);
                    }}
                    className="group relative rounded-2xl overflow-hidden border border-white/10 cursor-pointer bg-[#070c17] hover:border-[#e5101a]/60 transition-all hover:scale-[1.02] shadow-lg"
                  >
                    <img
                      src={proj.coverImage}
                      alt={proj.title}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                    />
                    <div className="p-4 bg-[#070c17]">
                      <span className="text-[10px] text-[#e5101a] font-mono uppercase font-bold">{proj.category}</span>
                      <h5 className="font-heading font-bold text-white text-sm group-hover:text-[#e5101a] transition-colors mt-0.5">
                        {proj.title}
                      </h5>
                      <p className="text-xs text-gray-400 mt-0.5">{proj.client}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* MOBILE DRAWER (visible on screen < 1024px) */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-16 sm:top-20 bg-[#050811]/98 backdrop-blur-2xl border-b border-white/10 p-6 space-y-4 animate-slideDown shadow-2xl max-h-[calc(100vh-80px)] overflow-y-auto z-50">
            <div className="space-y-2">
              {navItems.map(item => {
                const isActive = currentPage === item.id;
                const hasSub = item.hasMega !== undefined;
                const isSubOpen = mobileSubOpen === item.hasMega;

                return (
                  <div key={item.id} className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => {
                          if (hasSub) {
                            setMobileSubOpen(isSubOpen ? null : item.hasMega!);
                          } else {
                            onNavigate(item.id);
                            setMobileMenuOpen(false);
                          }
                        }}
                        className={`flex-1 p-3.5 rounded-xl text-left font-heading text-xs uppercase tracking-wider font-bold transition-all flex items-center justify-between ${
                          isSubOpen
                            ? 'bg-[#e5101a]/20 text-[#e5101a] border border-[#e5101a]/50'
                            : isActive
                            ? 'bg-[#e5101a] text-white shadow-lg shadow-red-600/30'
                            : 'bg-white/5 text-gray-200 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        <span>{item.label}</span>
                        {hasSub && (
                          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isSubOpen ? 'rotate-180 text-[#e5101a]' : 'text-gray-400'}`} />
                        )}
                      </button>
                    </div>

                    {/* Mobile Submenu for Services */}
                    {item.hasMega === 'services' && isSubOpen && (
                      <div className="pl-3 pr-2 py-2 space-y-1 bg-[#090e1a] rounded-xl border border-[#e5101a]/30 mt-1 animate-fadeIn">
                        <button
                          onClick={() => {
                            onNavigate('services');
                            setMobileMenuOpen(false);
                          }}
                          className="w-full text-left py-2 px-3 rounded-lg text-xs text-[#e5101a] font-bold bg-[#e5101a]/10 flex items-center justify-between mb-1"
                        >
                          <span>ALL SERVICES CATALOG</span>
                          <ArrowRight className="w-3.5 h-3.5 text-[#e5101a]" />
                        </button>
                        {[
                          { id: 'vfx-compositing', name: 'VFX Compositing' },
                          { id: 'rotoscoping', name: 'Rotoscoping & Paint' },
                          { id: 'cgi', name: 'CGI & Hard Surface' },
                          { id: 'virtual-production', name: 'Virtual Production' },
                          { id: 'matchmove-tracking', name: 'Matchmove & Tracking' }
                        ].map(sub => (
                          <button
                            key={sub.id}
                            onClick={() => {
                              onNavigate('services', sub.id);
                              setMobileMenuOpen(false);
                            }}
                            className="w-full text-left py-2 px-3 rounded-lg text-xs text-gray-300 hover:text-[#e5101a] hover:bg-white/5 flex items-center justify-between"
                          >
                            <span>{sub.name}</span>
                            <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Mobile Submenu for Portfolio */}
                    {item.hasMega === 'portfolio' && isSubOpen && (
                      <div className="pl-3 pr-2 py-2 space-y-1 bg-[#090e1a] rounded-xl border border-[#e5101a]/30 mt-1 animate-fadeIn">
                        <button
                          onClick={() => {
                            onNavigate('portfolio');
                            setMobileMenuOpen(false);
                          }}
                          className="w-full text-left py-2 px-3 rounded-lg text-xs text-[#e5101a] font-bold bg-[#e5101a]/10 flex items-center justify-between mb-1"
                        >
                          <span>VIEW ALL PORTFOLIO</span>
                          <ArrowRight className="w-3.5 h-3.5 text-[#e5101a]" />
                        </button>
                        {PORTFOLIO_DATA.slice(0, 4).map(p => (
                          <button
                            key={p.id}
                            onClick={() => {
                              onNavigate('portfolio', p.id);
                              setMobileMenuOpen(false);
                            }}
                            className="w-full text-left py-2 px-3 rounded-lg text-xs text-gray-300 hover:text-[#e5101a] hover:bg-white/5 flex items-center justify-between"
                          >
                            <span className="truncate pr-2">{p.title}</span>
                            <ChevronRight className="w-3.5 h-3.5 text-gray-500 shrink-0" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="pt-4 border-t border-white/10 space-y-3">
              <button
                onClick={() => {
                  onNavigate('get-quote');
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#e5101a] via-rose-600 to-[#c00010] text-white text-xs font-heading font-bold tracking-wider flex items-center justify-center space-x-2 shadow-lg shadow-red-600/30 active:scale-95 transition-all"
              >
                <Calculator className="w-4 h-4" />
                <span>GET A QUOTE</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};


