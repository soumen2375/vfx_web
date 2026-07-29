import React from 'react';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Linkedin,
  Instagram,
  Youtube,
  Twitter
} from 'lucide-react';
import { PageId } from '../types';
import { RightTimeFXLogo } from './RightTimeFXLogo';

interface FooterProps {
  onNavigate: (page: PageId, detailId?: string) => void;
  onOpenReel?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenReel }) => {
  return (
    <footer className="bg-[#050810] text-gray-400 border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rose-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* TOP MAIN GRID (4 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-white/10">
          
          {/* Column 1: Brand & Contact (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-4">
            <button
              onClick={() => onNavigate('home')}
              className="text-left focus:outline-none"
            >
              <RightTimeFXLogo size="lg" />
            </button>

            <p className="text-xs text-gray-400 leading-relaxed pr-4">
              Right Time FX Studio is a leading VFX outsourcing studio delivering world-class visual effects, CGI, animation, and post-production for global entertainment and brands.
            </p>

            {/* Red Accent Divider Bar */}
            <div className="w-12 h-0.5 bg-red-600 my-4 rounded-full" />

            <div className="space-y-2.5 text-xs">
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">Mondal Building 4th Floor, Dakbanglow-Moyna Rd, Sudampur, Balaipanda Bazar, Moyna, Purba Medinipur, West Bengal, 721644, India</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-red-500 shrink-0" />
                <a href="tel:+918509587525" className="hover:text-red-400 transition-colors font-mono">
                  +918509587525
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-red-500 shrink-0" />
                <a href="mailto:www.righttimefxstudio@gmail.com" className="hover:text-red-400 transition-colors font-mono">
                  www.righttimefxstudio@gmail.com
                </a>
              </div>
            </div>

            {/* Social Media Buttons */}
            <div className="pt-2 flex items-center space-x-3">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-[#e5101a] hover:bg-[#c00010] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-md shadow-red-600/30"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-[#e5101a] hover:bg-[#c00010] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-md shadow-red-600/30"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-[#e5101a] hover:bg-[#c00010] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-md shadow-red-600/30"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a 
                href="https://x.com" 
                target="_blank" 
                rel="noreferrer"
                aria-label="Twitter"
                className="w-9 h-9 rounded-full bg-[#e5101a] hover:bg-[#c00010] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-md shadow-red-600/30"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: NAVIGATION (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-white text-xs tracking-widest uppercase mb-4">
              NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('portfolio')} className="hover:text-white transition-colors">
                  Portfolio
                </button>
              </li>
              <li>
                <button onClick={onOpenReel} className="hover:text-white transition-colors">
                  Studio Reel
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: COMPANY (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-white text-xs tracking-widest uppercase mb-4">
              COMPANY
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('blog')} className="hover:text-white transition-colors">
                  Blog
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('faq')} className="hover:text-white transition-colors">
                  FAQ
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: LEGAL (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-white text-xs tracking-widest uppercase mb-4">
              LEGAL
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => onNavigate('terms-conditions')} className="hover:text-white transition-colors">
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('privacy-policy')} className="hover:text-white transition-colors">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('refund-policy')} className="hover:text-white transition-colors">
                  Cancellation & Refunds
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('sitemap')} className="hover:text-white transition-colors">
                  Sitemap
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT & POWERED BY */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© 2026 Right Time FX Studio. All Rights Reserved.</p>
          <p className="text-gray-400">
            Powered by <span className="font-bold text-white hover:text-[#e5101a] transition-colors">Riknova Technology</span>
          </p>
        </div>
      </div>
    </footer>
  );
};


