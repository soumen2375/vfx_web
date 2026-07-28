import React, { useState } from 'react';
import { 
  Play, 
  Sparkles, 
  ArrowRight, 
  Award, 
  Layers, 
  ShieldCheck, 
  Cpu, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  Calculator,
  Film,
  Zap,
  Clock,
  Sparkle,
  Mail,
  Phone
} from 'lucide-react';
import { PageId } from '../types';
import { STUDIO_INFO, SERVICES_DATA, PORTFOLIO_DATA, CLIENT_LOGOS, TESTIMONIALS, BLOG_POSTS } from '../data/mockData';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';

interface HomePageProps {
  onNavigate: (page: PageId, id?: string) => void;
  onOpenReel: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenReel }) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };
  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <div className="space-y-24 pb-16">
      {/* 1. HERO BANNER WITH CINEMATIC VIDEO / ANIMATED BACKGROUND */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-12 pb-20 border-b border-white/10">
        {/* Background Image / Video Simulation Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=2000&q=80"
            alt="Right Time FX Visual Effects Studio"
            className="w-full h-full object-cover opacity-25 scale-105 animate-pulse duration-10000"
          />
          {/* Crimson & Dark Gradient Masks */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E17] via-[#0B0E17]/80 to-[#0B0E17]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0E17] via-transparent to-[#0B0E17]" />
          <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-red-600/15 rounded-full blur-[150px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-rose-700/15 rounded-full blur-[150px] pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Main Hero Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold text-white tracking-tight leading-[1.1] max-w-5xl mx-auto">
            Transforming Imagination Into <br className="hidden sm:inline" />
            <span className="text-red-500 drop-shadow-[0_4px_20px_rgba(220,38,38,0.4)]">
              Cinematic Reality
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto font-body leading-relaxed">
            As a premier VFX outsourcing studio, we blend talent and technology to craft stunning visual experiences across films, episodic, advertising, and more.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex items-center justify-center">
            <button
              onClick={() => onNavigate('get-quote')}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-red-600 via-red-500 to-rose-700 hover:from-red-500 hover:to-rose-600 text-white font-heading font-bold text-sm tracking-wider shadow-2xl shadow-red-600/30 hover:shadow-red-500/50 flex items-center space-x-2 transition-all hover:scale-105"
            >
              <Calculator className="w-5 h-5" />
              <span>GET A QUOTE</span>
            </button>
          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-white/10 max-w-4xl mx-auto">
            {STUDIO_INFO.stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl sm:text-4xl font-heading font-extrabold text-white">
                  <span className="text-red-500">
                    {stat.value}
                  </span>
                </div>
                <div className="text-xs text-gray-400 font-body mt-1 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. CLIENT LOGO SLIDER / SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-mono text-gray-400 tracking-widest uppercase mb-8 font-semibold">
          TRUSTED BY LEADING PRODUCTION HOUSES & DIRECTORS
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 opacity-80 hover:opacity-100 transition-opacity">
          {CLIENT_LOGOS.map((client, i) => (
            <div
              key={i}
              className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/5 text-gray-300 font-heading font-bold text-sm sm:text-base tracking-widest uppercase hover:border-red-500/40 hover:text-red-400 transition-all cursor-default"
            >
              {client.logoText}
            </div>
          ))}
        </div>
      </section>

      {/* 3. COMPANY INTRODUCTION & ABOUT SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white leading-tight">
              As a Premier VFX Outsourcing Studio in <span className="text-red-500">India</span>
            </h2>
            <div className="space-y-4 text-gray-300 text-base leading-relaxed">
              <p className="p-4 rounded-xl bg-white/5 border-l-4 border-red-500 text-white font-medium">
                We blend talent and technology to craft stunning visual experiences across films, episodic, advertising, and more.
              </p>
              <p>
                Our team of passionate artists and technologists pushes the boundaries of creativity, delivering visual effects that inspire and engage.
              </p>
              <p>
                Every project is executed through structured post-production workflows focused on quality and consistency.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono">
              <div className="p-4 rounded-xl bg-[#121723] border border-red-500/30 flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-500 shrink-0" />
                <div>
                  <span className="text-gray-400 block text-[10px]">DIRECT EMAIL</span>
                  <a href="mailto:soumadipdinda18@gmail.com" className="text-white font-bold hover:text-red-400">
                    soumadipdinda18@gmail.com
                  </a>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-[#121723] border border-red-500/30 flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-500 shrink-0" />
                <div>
                  <span className="text-gray-400 block text-[10px]">MOBILE NO</span>
                  <a href="tel:+917319574918" className="text-white font-bold hover:text-red-400">
                    +91 7319574918
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => onNavigate('about')}
                className="px-6 py-3 rounded-xl bg-red-950/60 hover:bg-red-900 border border-red-500/40 text-white font-heading font-bold text-xs tracking-wider flex items-center space-x-2 transition-all hover:scale-105"
              >
                <span>LEARN MORE ABOUT US</span>
                <ArrowRight className="w-4 h-4 text-red-400" />
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-red-500/30 shadow-2xl relative group">
              <img
                src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80"
                alt="Right Time FX Studio Artist"
                className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E17] via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-6 left-6 right-6 p-6 glass-panel rounded-xl border border-red-500/40">
                <span className="text-xs font-mono text-red-400 font-bold uppercase">DEPENDABLE DELIVERY STANDARDS</span>
                <h4 className="font-heading font-bold text-white text-lg mt-1">Structured Post-Production Workflows</h4>
                <p className="text-xs text-gray-300 mt-1">Focused on quality, artistic intent, and technical accuracy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE RIGHT TIME FX STUDIO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#121723] border border-red-500/20 relative overflow-hidden">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono text-red-500 tracking-widest uppercase font-bold">
              THE RIGHT TIME FX DIFFERENCE
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white mt-2">
              Why Choose Right Time FX Studio?
            </h2>
            <p className="text-base text-gray-200 mt-3 leading-relaxed">
              Yes we are the Leading VFX Outsourcing Studios in India but apart from that, we are recognised for our disciplined execution, creative precision, and dependable delivery standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-2xl bg-[#0B0E17] border border-white/10 space-y-3 group hover:border-red-500/50 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-red-950/80 border border-red-500/40 flex items-center justify-center text-red-400 font-bold">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-xl text-white group-hover:text-red-400 transition-colors">
                Innovation at the Core
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed font-body">
                We embrace the latest technologies to revolutionize every medium we touch. Our workflows evolve continuously to align with modern production practices.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0B0E17] border border-white/10 space-y-3 group hover:border-red-500/50 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-red-950/80 border border-red-500/40 flex items-center justify-center text-red-400 font-bold">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-xl text-white group-hover:text-red-400 transition-colors">
                Boundless Creativity
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed font-body">
                Every project is a canvas for limitless imagination. We approach each shot with artistic intent and technical accuracy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FEATURED SERVICES PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-mono text-red-500 tracking-widest uppercase font-bold">POST-PRODUCTION SERVICES</span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white mt-1">
              End-to-End VFX & CGI Solutions
            </h2>
          </div>
          <button
            onClick={() => onNavigate('services')}
            className="text-xs font-heading font-bold text-red-400 hover:text-red-300 flex items-center space-x-1"
          >
            <span>VIEW ALL SERVICES ({SERVICES_DATA.length})</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.slice(0, 6).map((service) => (
            <div
              key={service.id}
              onClick={() => onNavigate('services', service.id)}
              className="p-6 rounded-2xl bg-[#121723] border border-white/10 hover:border-red-500/50 transition-all cursor-pointer group hover:scale-[1.02] duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-red-950/60 border border-red-500/30 flex items-center justify-center text-red-400 mb-4 group-hover:scale-110 transition-transform">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-xl text-white group-hover:text-red-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-gray-300 mt-2 line-clamp-3 leading-relaxed">
                  {service.shortDesc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-heading font-semibold text-red-400">
                <span>Explore Workflow</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. BEFORE & AFTER INTERACTIVE SLIDER PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-mono text-red-500 tracking-widest uppercase font-bold">VFX TRANSFORMATIONS</span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white mt-1">
            Raw Plate vs Final Visual Effect
          </h2>
          <p className="text-xs text-gray-400 mt-2">
            Drag the interactive slider to reveal how Right Time FX Studio builds photorealistic CGI layers onto live-action plates.
          </p>
        </div>

        <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden border border-red-500/30 shadow-2xl bg-[#0B0E17]">
          <BeforeAfterSlider
            beforeImage="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80"
            afterImage="https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1200&q=80"
            beforeLabel="Raw Green Screen Plate"
            afterLabel="Final Right Time FX Composite"
          />
        </div>
      </section>

      {/* 7. PORTFOLIO PREVIEW SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-mono text-red-500 tracking-widest uppercase font-bold">FEATURED SHOWCASE</span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white mt-1">
              Recent Cinematic Deliveries
            </h2>
          </div>
          <button
            onClick={() => onNavigate('portfolio')}
            className="text-xs font-heading font-bold text-red-400 hover:text-red-300 flex items-center space-x-1"
          >
            <span>VIEW ALL PROJECTS ({PORTFOLIO_DATA.length})</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.slice(0, 3).map((item) => (
            <div
              key={item.id}
              onClick={() => onNavigate('portfolio', item.id)}
              className="group bg-[#121723] rounded-2xl overflow-hidden border border-white/10 hover:border-red-500/40 cursor-pointer transition-all duration-300"
            >
              <div className="relative overflow-hidden h-52">
                <img
                  src={item.coverImage}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-[10px] font-mono text-red-400 font-bold uppercase">
                  {item.category}
                </div>
              </div>
              <div className="p-5">
                <span className="text-[11px] text-gray-400 font-mono">{item.client}</span>
                <h3 className="font-heading font-bold text-white text-lg mt-0.5 group-hover:text-red-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-400 mt-2 line-clamp-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. TESTIMONIALS SLIDER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#121723] border border-white/10 relative overflow-hidden">
          <div className="flex items-center justify-between mb-8">
            <span className="text-xs font-mono text-red-500 tracking-widest uppercase font-bold">
              CLIENT TESTIMONIALS
            </span>
            <div className="flex space-x-2">
              <button
                onClick={prevTestimonial}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="max-w-3xl">
            <p className="text-lg sm:text-2xl font-heading font-bold text-white leading-relaxed italic">
              "{TESTIMONIALS[activeTestimonial].quote}"
            </p>
            <div className="mt-6 flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-600 to-rose-700 flex items-center justify-center font-heading font-bold text-white text-lg">
                {TESTIMONIALS[activeTestimonial].author[0]}
              </div>
              <div>
                <h4 className="font-heading font-bold text-white text-base">
                  {TESTIMONIALS[activeTestimonial].author}
                </h4>
                <p className="text-xs text-red-400 font-mono">
                  {TESTIMONIALS[activeTestimonial].role} • {TESTIMONIALS[activeTestimonial].company}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CALL TO ACTION & BIDDING BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-10 sm:p-16 rounded-3xl bg-gradient-to-r from-red-950/90 via-[#18101C] to-[#0B0E17] border border-red-500/40 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="text-xs font-mono text-red-400 tracking-widest uppercase font-bold">
              START YOUR PROJECT WITH INDIA'S LEADING VFX STUDIO
            </span>
            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white leading-tight">
              Have a Shot Sequence or Project to Outsource?
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Get in touch with Right Time FX Studio today for structured post-production bids, technical breakdowns, and rapid shot execution.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => onNavigate('get-quote')}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 text-white font-heading font-bold text-sm tracking-wider shadow-2xl shadow-red-600/40 flex items-center space-x-2 transition-all hover:scale-105"
              >
                <Calculator className="w-5 h-5" />
                <span>GET A QUOTE NOW</span>
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-heading font-bold text-sm tracking-wider transition-all hover:scale-105"
              >
                <span>CONTACT US DIRECTLY</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

