import React, { useState } from 'react';
import { 
  Play, 
  ArrowRight, 
  Award, 
  Layers, 
  ShieldCheck, 
  ChevronLeft, 
  ChevronRight, 
  Calculator,
  Film,
  Clock,
  Users,
  Lock,
  Zap,
  Globe,
  Quote,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { PageId } from '../types';
import { STUDIO_INFO, SERVICES_DATA, PORTFOLIO_DATA, CLIENT_LOGOS, TESTIMONIALS } from '../data/mockData';
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
    <div className="space-y-20 pb-16 text-white font-body">
      {/* 1. HERO BANNER WITH CINEMATIC BACKGROUND */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-10 pb-16 border-b border-white/10">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=2000&q=80"
            alt="Right Time FX Studio"
            className="w-full h-full object-cover opacity-25 scale-105"
          />
          {/* Gradient Lighting Masks */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E17] via-[#0B0E17]/85 to-[#0B0E17]/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0E17] via-transparent to-[#0B0E17]" />
          <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-red-600/15 rounded-full blur-[160px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/3 w-[600px] h-[600px] bg-rose-700/15 rounded-full blur-[160px] pointer-events-none" />
        </div>

        {/* Scroll to Explore vertical label on right */}
        <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 z-20 flex-col items-center space-y-4 opacity-50">
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-gray-400 rotate-90 whitespace-nowrap">
            SCROLL TO EXPLORE
          </span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-red-500 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          {/* Eyebrow Tag */}
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-red-500 tracking-widest uppercase font-bold mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span>| LEADING VFX OUTSOURCING STUDIO</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-black text-white tracking-tight leading-[1.08] max-w-5xl mx-auto uppercase">
            TRANSFORMING <br />
            IMAGINATION INTO <br />
            <span className="text-[#E5101A] drop-shadow-[0_4px_25px_rgba(229,16,26,0.5)]">
              CINEMATIC REALITY
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto font-body leading-relaxed">
            We craft stunning visual experiences for films, episodics, commercials, and brands with creativity and precision.
          </p>

          {/* Dual CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('get-quote')}
              className="px-8 py-4 rounded-xl bg-[#E5101A] hover:bg-red-600 text-white font-heading font-bold text-xs tracking-wider flex items-center space-x-2 transition-all hover:scale-105 shadow-xl shadow-red-600/30"
            >
              <span>GET A QUOTE</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenReel}
              className="px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-heading font-bold text-xs tracking-wider flex items-center space-x-2 transition-all hover:scale-105"
            >
              <Play className="w-4 h-4 text-white fill-white" />
              <span>WATCH SHOWREEL</span>
            </button>
          </div>

          {/* Hero Metrics Card Row */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {STUDIO_INFO.stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="p-5 rounded-2xl bg-[#0E131F]/80 backdrop-blur-md border border-white/10 flex items-center space-x-4 text-left hover:border-red-500/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-red-950/80 border border-red-500/40 flex items-center justify-center text-red-500 shrink-0">
                  {idx === 0 && <Globe className="w-5 h-5" />}
                  {idx === 1 && <Film className="w-5 h-5" />}
                  {idx === 2 && <Users className="w-5 h-5" />}
                  {idx === 3 && <Award className="w-5 h-5" />}
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-heading font-extrabold text-white leading-none">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-gray-400 font-heading font-semibold uppercase tracking-wider mt-1">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. TRUSTED BY LOGOS SLIDER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="text-[11px] font-heading font-bold text-gray-400 tracking-[0.25em] uppercase">
            TRUSTED BY THE WORLD'S BEST
          </span>
        </div>

        <div className="flex items-center justify-center gap-4 sm:gap-8 opacity-75 hover:opacity-100 transition-opacity flex-wrap">
          <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white hidden sm:block">
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {CLIENT_LOGOS.map((client, i) => (
              <div
                key={i}
                className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/5 text-gray-300 font-heading font-extrabold text-xs sm:text-sm tracking-widest uppercase hover:border-red-500/40 hover:text-red-400 transition-all cursor-default"
              >
                {client.logoText}
              </div>
            ))}
          </div>

          <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white hidden sm:block">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono text-red-500 tracking-widest uppercase font-bold">
            OUR SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white mt-1 uppercase tracking-tight">
            END-TO-END VFX & CGI SOLUTIONS
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.slice(0, 6).map((service) => (
            <div
              key={service.id}
              onClick={() => onNavigate('services', service.id)}
              className="p-6 rounded-2xl bg-[#0E131F] border border-white/10 hover:border-red-500/50 transition-all cursor-pointer group flex flex-col justify-between hover:scale-[1.02] duration-300"
            >
              <div>
                <div className="relative overflow-hidden rounded-xl h-44 mb-5 border border-white/5">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E131F] via-transparent to-transparent opacity-80" />
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-red-950/90 border border-red-500/40 flex items-center justify-center text-red-400">
                    <Layers className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="font-heading font-bold text-lg text-white group-hover:text-red-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-gray-400 mt-2 line-clamp-2 leading-relaxed">
                  {service.shortDesc}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-heading font-semibold text-red-400">
                <span>EXPLORE</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={() => onNavigate('services')}
            className="px-8 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-heading font-bold text-xs tracking-wider inline-flex items-center space-x-2 transition-all hover:scale-105"
          >
            <span>VIEW ALL SERVICES</span>
            <ArrowRight className="w-4 h-4 text-red-400" />
          </button>
        </div>
      </section>

      {/* 4. OUR WORK / FEATURED SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left info column */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs font-mono text-red-500 tracking-widest uppercase font-bold">
              OUR WORK
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white leading-tight uppercase">
              CRAFTING VISUAL STORIES THAT INSPIRE
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              We create visual experiences that captivate audiences and bring stories to life.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('portfolio')}
                className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-heading font-bold text-xs tracking-wider inline-flex items-center space-x-2 transition-all hover:scale-105"
              >
                <span>VIEW ALL PROJECTS</span>
                <ArrowRight className="w-4 h-4 text-red-400" />
              </button>
            </div>
          </div>

          {/* Right project cards row */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {PORTFOLIO_DATA.slice(0, 4).map((item) => (
              <div
                key={item.id}
                onClick={() => onNavigate('portfolio', item.id)}
                className="group bg-[#0E131F] rounded-2xl overflow-hidden border border-white/10 hover:border-red-500/40 cursor-pointer transition-all duration-300"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={item.coverImage}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E131F] via-transparent to-transparent opacity-90" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="font-heading font-bold text-white text-base group-hover:text-red-400 transition-colors uppercase">
                      {item.title}
                    </h3>
                    <p className="text-[11px] font-mono text-gray-400">{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TRUST BADGES / PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-2xl bg-[#0E131F] border border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          <div className="flex items-start space-x-3">
            <div className="w-9 h-9 rounded-xl bg-red-950/80 border border-red-500/30 flex items-center justify-center text-red-500 shrink-0 mt-0.5">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-white text-xs uppercase">World Class Quality</h4>
              <p className="text-[11px] text-gray-400 mt-1 leading-snug">We follow global standards and best practices.</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="w-9 h-9 rounded-xl bg-red-950/80 border border-red-500/30 flex items-center justify-center text-red-500 shrink-0 mt-0.5">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-white text-xs uppercase">On-Time Delivery</h4>
              <p className="text-[11px] text-gray-400 mt-1 leading-snug">We value time and always deliver on time.</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="w-9 h-9 rounded-xl bg-red-950/80 border border-red-500/30 flex items-center justify-center text-red-500 shrink-0 mt-0.5">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-white text-xs uppercase">Dedicated Team</h4>
              <p className="text-[11px] text-gray-400 mt-1 leading-snug">Skilled artists, strong leadership & support.</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="w-9 h-9 rounded-xl bg-red-950/80 border border-red-500/30 flex items-center justify-center text-red-500 shrink-0 mt-0.5">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-white text-xs uppercase">Secure & Confidential</h4>
              <p className="text-[11px] text-gray-400 mt-1 leading-snug">Your data is 100% safe with us.</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="w-9 h-9 rounded-xl bg-red-950/80 border border-red-500/30 flex items-center justify-center text-red-500 shrink-0 mt-0.5">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-white text-xs uppercase">Scalable Solutions</h4>
              <p className="text-[11px] text-gray-400 mt-1 leading-snug">Flexible engagement models for all needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BEFORE & AFTER SLIDER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-mono text-red-500 tracking-widest uppercase font-bold">VFX TRANSFORMATIONS</span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white mt-1 uppercase">
            Raw Plate vs Final Visual Effect
          </h2>
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

      {/* 7. CLIENT TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0E131F] border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono text-red-500 tracking-widest uppercase font-bold">
              CLIENT TESTIMONIALS
            </span>

            <div className="relative">
              <Quote className="w-12 h-12 text-red-600/30 mb-2" />
              <p className="text-lg sm:text-2xl font-heading font-bold text-white leading-relaxed italic">
                "{TESTIMONIALS[activeTestimonial].quote}"
              </p>
            </div>

            <div className="flex items-center space-x-4 pt-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-rose-700 flex items-center justify-center font-heading font-bold text-white text-sm">
                {TESTIMONIALS[activeTestimonial].author[0]}
              </div>
              <div>
                <h4 className="font-heading font-bold text-white text-sm">
                  {TESTIMONIALS[activeTestimonial].author}
                </h4>
                <p className="text-xs text-gray-400 font-mono">
                  {TESTIMONIALS[activeTestimonial].role} - {TESTIMONIALS[activeTestimonial].company}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col items-end space-y-4">
            <div className="grid grid-cols-2 gap-3 w-full">
              <img
                src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80"
                alt="Studio 1"
                className="rounded-xl h-28 object-cover border border-white/10"
              />
              <img
                src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=600&q=80"
                alt="Studio 2"
                className="rounded-xl h-28 object-cover border border-white/10"
              />
            </div>

            <div className="flex space-x-2 pt-2">
              <button
                onClick={prevTestimonial}
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors border border-white/10"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors border border-white/10"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-red-950/80 via-[#121723] to-[#0E131F] border border-red-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
          <div className="space-y-2 text-center sm:text-left z-10">
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white uppercase tracking-tight">
              HAVE A PROJECT IN MIND?
            </h2>
            <p className="text-xs sm:text-sm text-gray-300">
              Let's create something extraordinary together.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 z-10">
            <button
              onClick={() => onNavigate('get-quote')}
              className="px-6 py-3.5 rounded-xl bg-[#E5101A] hover:bg-red-600 text-white font-heading font-bold text-xs tracking-wider flex items-center space-x-2 shadow-lg shadow-red-600/30 transition-all hover:scale-105"
            >
              <span>GET A QUOTE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-heading font-bold text-xs tracking-wider transition-all hover:scale-105"
            >
              <span>CONTACT US</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};


