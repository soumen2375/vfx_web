import React, { useState, useEffect } from 'react';
import { 
  Rocket,
  Search, 
  Menu, 
  X, 
  ChevronDown, 
  Layers, 
  Film, 
  Calculator, 
  ArrowRight,
  ShieldCheck,
  Video,
  Clapperboard,
  Box,
  Cpu,
  Linkedin,
  Instagram,
  Youtube,
  Twitter,
  Globe
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
  onNavigate,
  onOpenReel
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<'services' | 'portfolio' | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageId; label: string; hasMega?: 'services' | 'portfolio' }[] = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT US' },
    { id: 'services', label: 'SERVICES', hasMega: 'services' },
    { id: 'portfolio', label: 'PORTFOLIO', hasMega: 'portfolio' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'CONTACT' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#070A11] border-b border-white/10 transition-all duration-300">
      {/* MAIN NAVBAR CONTAINER */}
      <div 
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 transition-all ${
          isScrolled ? 'bg-[#070A11]/95 backdrop-blur-xl' : 'bg-[#070A11]'
        }`}
        onMouseLeave={() => setActiveMega(null)}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => {
              onNavigate('home');
              setMobileMenuOpen(false);
            }}
            className="flex items-center space-x-2 group text-left focus:outline-none"
          >
            <RightTimeFXLogo size="md" />
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navItems.map(item => {
              const isActive = currentPage === item.id;
              return (
                <div
                  key={item.id}
                  className="relative py-1"
                  onMouseEnter={() => {
                    if (item.hasMega) setActiveMega(item.hasMega);
                    else setActiveMega(null);
                  }}
                >
                  <button
                    onClick={() => onNavigate(item.id)}
                    className={`px-3.5 py-1.5 rounded-lg font-heading text-xs font-bold tracking-wider transition-all flex flex-col items-center group ${
                      isActive
                        ? 'text-red-500'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center space-x-1">
                      <span>{item.label}</span>
                      {item.hasMega && <ChevronDown className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" />}
                    </div>
                    {/* Active Red Bar Underline */}
                    {isActive && (
                      <span className="w-4 h-0.5 bg-red-600 rounded-full mt-1 animate-fadeIn" />
                    )}
                  </button>
                </div>
              );
            })}
          </nav>

          {/* Action Buttons Right */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Get A Quote Button */}
            <button
              onClick={() => onNavigate('get-quote')}
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-500 text-white font-heading text-xs font-bold tracking-wider flex items-center space-x-2 shadow-lg shadow-red-600/30 hover:shadow-red-500/50 transition-all hover:scale-105"
            >
              <span>GET A QUOTE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 text-gray-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* MEGA MENU OVERLAY (Desktop) */}
      {activeMega === 'services' && (
        <div className="absolute top-full left-0 w-full bg-[#0D121D]/98 backdrop-blur-2xl border-b border-white/10 shadow-2xl py-8 px-6 transition-all animate-fadeIn">
          <div className="max-w-7xl mx-auto grid grid-cols-4 gap-6">
            <div>
              <div className="flex items-center space-x-2 text-red-400 font-heading text-xs font-bold tracking-widest uppercase mb-4">
                <Layers className="w-4 h-4" />
                <span>CORE VFX & OUTSOURCING</span>
              </div>
              <div className="space-y-2 text-sm">
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
                    className="w-full text-left py-1.5 px-2 rounded hover:bg-white/5 text-gray-300 hover:text-red-400 flex items-center space-x-2 transition-colors text-xs"
                  >
                    <item.icon className="w-3.5 h-3.5 text-red-400/70" />
                    <span>{item.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center space-x-2 text-red-500 font-heading text-xs font-bold tracking-widest uppercase mb-4">
                <Video className="w-4 h-4" />
                <span>ADVANCED TECH PIPELINE</span>
              </div>
              <div className="space-y-2 text-sm">
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
                    className="w-full text-left py-1.5 px-2 rounded hover:bg-white/5 text-gray-300 hover:text-red-400 flex items-center space-x-2 transition-colors text-xs"
                  >
                    <item.icon className="w-3.5 h-3.5 text-red-400/70" />
                    <span>{item.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center space-x-2 text-white font-heading text-xs font-bold tracking-widest uppercase mb-4">
                <ShieldCheck className="w-4 h-4 text-red-500" />
                <span>FULL SERVICE CATALOG</span>
              </div>
              <p className="text-xs text-gray-400 mb-4 leading-relaxed">
                India's premier outsourcing studio for feature films, episodic TV, and commercial campaigns.
              </p>
              <button
                onClick={() => {
                  onNavigate('services');
                  setActiveMega(null);
                }}
                className="px-4 py-2 rounded-lg bg-red-950/60 hover:bg-red-900 border border-red-500/40 text-white text-xs font-heading flex items-center space-x-2 transition-all"
              >
                <span>View All Services</span>
                <ArrowRight className="w-3.5 h-3.5 text-red-400" />
              </button>
            </div>

            {/* Featured Box */}
            <div className="bg-gradient-to-br from-red-950/50 via-[#18101C] to-[#0B0E17] p-5 rounded-2xl border border-red-500/30 relative overflow-hidden flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-red-400 bg-red-950 px-2 py-0.5 rounded uppercase border border-red-500/30">
                  INDIA VFX OUTSOURCING
                </span>
                <h4 className="font-heading font-bold text-white text-base mt-2">
                  Reliable Studio Workflows
                </h4>
                <p className="text-xs text-gray-300 mt-1">
                  Disciplined execution, creative precision, and dependable delivery standards.
                </p>
              </div>
              <button
                onClick={() => {
                  onNavigate('about');
                  setActiveMega(null);
                }}
                className="mt-4 text-xs font-heading font-medium text-red-400 flex items-center space-x-1 hover:underline"
              >
                <span>Learn About Right Time FX</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {activeMega === 'portfolio' && (
        <div className="absolute top-full left-0 w-full bg-[#0D121D]/98 backdrop-blur-2xl border-b border-white/10 shadow-2xl py-8 px-6 transition-all animate-fadeIn">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2 text-red-400 font-heading text-xs font-bold tracking-widest uppercase">
                <Film className="w-4 h-4" />
                <span>FEATURED SHOWCASE WORKS</span>
              </div>
              <button
                onClick={() => {
                  onNavigate('portfolio');
                  setActiveMega(null);
                }}
                className="text-xs text-red-400 hover:underline flex items-center space-x-1"
              >
                <span>View All Portfolio Works ({PORTFOLIO_DATA.length})</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {PORTFOLIO_DATA.slice(0, 3).map(proj => (
                <div
                  key={proj.id}
                  onClick={() => {
                    onNavigate('portfolio', proj.id);
                    setActiveMega(null);
                  }}
                  className="group relative rounded-xl overflow-hidden border border-white/10 cursor-pointer bg-[#0B0E17]"
                >
                  <img
                    src={proj.coverImage}
                    alt={proj.title}
                    className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  <div className="p-3 bg-[#0B0E17]/90">
                    <span className="text-[10px] text-red-400 font-mono uppercase">{proj.category}</span>
                    <h5 className="font-heading font-bold text-white text-sm group-hover:text-red-400 transition-colors">
                      {proj.title}
                    </h5>
                    <p className="text-xs text-gray-400">{proj.client}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-[#070A11]/98 backdrop-blur-2xl border-b border-white/10 p-6 space-y-4 animate-slideDown shadow-2xl">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`p-3 rounded-xl text-left font-heading text-xs uppercase tracking-wider font-bold transition-all ${
                  currentPage === item.id
                    ? 'bg-red-600 text-white'
                    : 'bg-white/5 text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 space-y-2">
            <button
              onClick={() => {
                onNavigate('get-quote');
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-700 text-white text-xs font-heading font-bold flex items-center justify-center space-x-2 shadow-lg"
            >
              <Calculator className="w-4 h-4" />
              <span>GET A QUOTE</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};


