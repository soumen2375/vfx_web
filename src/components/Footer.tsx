import React, { useState } from 'react';
import { 
  Send, 
  MapPin, 
  Mail, 
  Phone, 
  CheckCircle, 
  ShieldCheck, 
  Clock, 
  Users, 
  Globe, 
  Headphones,
  ArrowRight,
  Linkedin,
  Instagram,
  Youtube,
  Twitter,
  Radio
} from 'lucide-react';
import { PageId } from '../types';
import { RightTimeFXLogo } from './RightTimeFXLogo';

interface FooterProps {
  onNavigate: (page: PageId, detailId?: string) => void;
  onOpenReel?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenReel }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#050810] text-gray-400 border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rose-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* TOP MAIN GRID (3 Columns) */}
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
                <a href="tel:+917319574918" className="hover:text-red-400 transition-colors font-mono">
                  +91 7319574918
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-red-500 shrink-0" />
                <a href="mailto:producer@studio.com" className="hover:text-red-400 transition-colors font-mono">
                  producer@studio.com
                </a>
              </div>
            </div>

            {/* Social Media Buttons */}
            <div className="pt-2 flex items-center space-x-2">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-red-600 text-gray-400 hover:text-white border border-white/10 flex items-center justify-center transition-all"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-red-600 text-gray-400 hover:text-white border border-white/10 flex items-center justify-center transition-all"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-red-600 text-gray-400 hover:text-white border border-white/10 flex items-center justify-center transition-all"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>
              <a 
                href="https://x.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-red-600 text-gray-400 hover:text-white border border-white/10 flex items-center justify-center transition-all"
              >
                <Twitter className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: STUDIO (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-white text-xs tracking-widest uppercase mb-4">
              STUDIO
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact-details')} className="hover:text-white transition-colors">
                  Contact Details
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('faq')} className="hover:text-white transition-colors">
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: SERVICES (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-heading font-bold text-white text-xs tracking-widest uppercase mb-4">
              SERVICES
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => onNavigate('services', 'vfx-compositing')} className="hover:text-white transition-colors">
                  VFX Compositing
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services', 'rotoscoping')} className="hover:text-white transition-colors">
                  Rotoscoping & Paint
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services', 'cgi')} className="hover:text-white transition-colors">
                  CGI & 3D Animation
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services', 'matchmove-tracking')} className="hover:text-white transition-colors">
                  Matchmove & Tracking
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services', 'virtual-production')} className="hover:text-white transition-colors">
                  Virtual Production
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services', 'fx-simulation')} className="hover:text-white transition-colors">
                  FX Simulation
                </button>
              </li>
              <li className="pt-1">
                <button 
                  onClick={() => onNavigate('services')} 
                  className="text-red-500 font-bold text-xs flex items-center space-x-1 hover:underline"
                >
                  <span>All Services</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* MIDDLE SECTION: TRUST METRICS / BADGES BAR */}
        <div className="p-5 rounded-2xl bg-[#0B0F19] border border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 divide-y sm:divide-y-0 lg:divide-x divide-white/10">
          
          {/* Badge 1: Secure & Confidential */}
          <div className="flex items-center space-x-3.5 pt-3 sm:pt-0 lg:pl-0">
            <div className="w-10 h-10 rounded-xl bg-red-950/60 border border-red-500/30 flex items-center justify-center text-red-500 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h6 className="font-heading font-bold text-white text-xs">
                Secure & Confidential
              </h6>
              <p className="text-[10px] text-gray-400">
                Your data is 100% safe with us
              </p>
            </div>
          </div>

          {/* Badge 2: On-Time Delivery */}
          <div className="flex items-center space-x-3.5 pt-3 sm:pt-0 lg:pl-6">
            <div className="w-10 h-10 rounded-xl bg-red-950/60 border border-red-500/30 flex items-center justify-center text-red-500 shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h6 className="font-heading font-bold text-white text-xs">
                On-Time Delivery
              </h6>
              <p className="text-[10px] text-gray-400">
                We respect your deadlines
              </p>
            </div>
          </div>

          {/* Badge 3: Expert VFX Team */}
          <div className="flex items-center space-x-3.5 pt-3 sm:pt-0 lg:pl-6">
            <div className="w-10 h-10 rounded-xl bg-red-950/60 border border-red-500/30 flex items-center justify-center text-red-500 shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h6 className="font-heading font-bold text-white text-xs">
                Expert VFX Team
              </h6>
              <p className="text-[10px] text-gray-400">
                100+ skilled professionals
              </p>
            </div>
          </div>

          {/* Badge 4: Global Standards */}
          <div className="flex items-center space-x-3.5 pt-3 sm:pt-0 lg:pl-6">
            <div className="w-10 h-10 rounded-xl bg-red-950/60 border border-red-500/30 flex items-center justify-center text-red-500 shrink-0">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h6 className="font-heading font-bold text-white text-xs">
                Global Standards
              </h6>
              <p className="text-[10px] text-gray-400">
                Delivering world-class quality
              </p>
            </div>
          </div>

          {/* Badge 5: 24/7 Production Sync */}
          <div className="flex items-center space-x-3.5 pt-3 sm:pt-0 lg:pl-6">
            <div className="w-10 h-10 rounded-xl bg-red-950/60 border border-red-500/30 flex items-center justify-center text-red-500 shrink-0">
              <Radio className="w-5 h-5 text-red-500 animate-pulse" />
            </div>
            <div>
              <h6 className="font-heading font-bold text-white text-xs">
                24/7 Production Sync
              </h6>
              <p className="text-[10px] text-gray-400">
                Real-time communication
              </p>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT & POLICY LINKS */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© 2026 Right Time FX Studio. All Rights Reserved.</p>

          <div className="flex items-center space-x-3 text-xs">
            <button 
              onClick={() => onNavigate('privacy-policy')} 
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button 
              onClick={() => onNavigate('terms-conditions')} 
              className="hover:text-white transition-colors"
            >
              Terms & Conditions
            </button>
            <span>•</span>
            <button 
              onClick={() => onNavigate('refund-policy')} 
              className="hover:text-white transition-colors"
            >
              Refund Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};


