import React, { useState, useRef } from 'react';
import { 
  ArrowRight, 
  PlayCircle,
  Calculator,
  ChevronDown,
  Layers,
  Box,
  Focus,
  Scissors,
  Image,
  Sliders,
  Sparkles,
  Star
} from 'lucide-react';
import { PageId } from '../types';
import founderImg from '../../assets/images/FOUNDER_headshot.jpeg';

interface HomePageProps {
  onNavigate: (page: PageId, id?: string) => void;
  onOpenReel: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenReel }) => {
  // Before / After Comparison Slider State
  const [sliderPos, setSliderPos] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current && e.buttons !== 1) return;
    handleMove(e.clientX);
  };

  return (
    <div className="bg-[#0c1321] text-[#dce2f6] min-h-screen selection:bg-[#e5101a] selection:text-white font-['Sora',sans-serif] overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        {/* Background Video/Image Visual Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div 
            className="w-full h-full bg-cover bg-center scale-105 transition-transform duration-10000"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=2000&q=80')`
            }}
          />
          {/* Hero linear gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c1321]/30 via-[#0c1321]/70 to-[#0c1321] z-20" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#e5101a]/15 rounded-full blur-[160px] pointer-events-none z-20" />
        </div>

        {/* Hero Content */}
        <div className="relative z-30 px-6 md:px-16 text-center max-w-5xl mx-auto pt-24 pb-20">
          <span className="inline-block text-[#e5101a] text-xs font-mono font-semibold tracking-[0.25em] uppercase mb-6 bg-[#e5101a]/10 border border-[#e5101a]/30 px-4 py-1.5 rounded-full backdrop-blur-md">
            Next-Generation Post-Production
          </span>

          <h1 className="font-heading font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight leading-[1.1] mb-8">
            Crafting <span className="text-[#e5101a] text-glow drop-shadow-[0_0_25px_rgba(229,16,26,0.5)]">Hollywood-Level</span> Visual Effects.
          </h1>

          <p className="text-[#dce2f6]/90 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed font-body">
            Premier VFX outsourcing studio in India. We blend top artistic talent with state-of-the-art pipelines to deliver photorealistic CGI, compositing, roto, matchmove, and virtual production.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <button
              onClick={() => onNavigate('portfolio')}
              className="w-full sm:w-auto bg-[#e5101a] hover:bg-[#c00010] text-white px-10 py-5 rounded-lg font-heading font-bold text-sm tracking-wider bloom-hover transition-all flex items-center justify-center gap-3 shadow-xl shadow-[#e5101a]/30 hover:scale-105 active:scale-95"
            >
              <span>View Portfolio</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={onOpenReel}
              className="w-full sm:w-auto bg-[#070e1c]/80 hover:bg-[#070e1c] border border-white/20 hover:border-white/40 text-white px-10 py-5 rounded-lg font-heading font-bold text-sm tracking-wider transition-all flex items-center justify-center gap-3 backdrop-blur-md hover:scale-105 active:scale-95"
            >
              <PlayCircle className="w-5 h-5 text-[#e5101a]" />
              <span>Watch Showreel</span>
            </button>

            <button
              onClick={() => onNavigate('get-quote')}
              className="w-full sm:w-auto bg-[#070e1c]/60 hover:bg-[#070e1c] border border-[#e5101a]/50 text-white px-10 py-5 rounded-lg font-heading font-bold text-sm tracking-wider transition-all flex items-center justify-center gap-3 backdrop-blur-md hover:scale-105 active:scale-95"
            >
              <Calculator className="w-5 h-5 text-[#e5101a]" />
              <span>Get a Quote</span>
            </button>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce z-30 text-[#e8bcb7]">
          <ChevronDown className="w-6 h-6" />
        </div>
      </section>

      {/* 2. TRUSTED CLIENTS (LOGO REEL MARQUEE) */}
      <section className="py-20 bg-[#0c1321] border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
          <p className="text-xs font-mono text-[#e8bcb7] tracking-[0.2em] uppercase opacity-60 font-semibold">
            Trusted by Global Studios & Directors
          </p>
        </div>

        <div className="relative w-full overflow-hidden flex whitespace-nowrap">
          <div className="flex animate-marquee space-x-16 items-center shrink-0">
            {['NEBULA PICTURES', 'ORION DIGITAL', 'TITAN STUDIOS', 'APEX MEDIA', 'QUANTUM VFX', 'PARAMOUNT', 'WARNER BROS', 'NETFLIX'].map((brand, idx) => (
              <span key={idx} className="font-heading font-bold text-2xl sm:text-3xl text-white/40 hover:text-white transition-colors cursor-default tracking-tighter">
                {brand.split(' ')[0]}<span className="text-[#e5101a]">{brand.split(' ')[1] || ''}</span>
              </span>
            ))}
          </div>
          <div className="flex animate-marquee space-x-16 items-center shrink-0" aria-hidden="true">
            {['NEBULA PICTURES', 'ORION DIGITAL', 'TITAN STUDIOS', 'APEX MEDIA', 'QUANTUM VFX', 'PARAMOUNT', 'WARNER BROS', 'NETFLIX'].map((brand, idx) => (
              <span key={`dup-${idx}`} className="font-heading font-bold text-2xl sm:text-3xl text-white/40 hover:text-white transition-colors cursor-default tracking-tighter">
                {brand.split(' ')[0]}<span className="text-[#e5101a]">{brand.split(' ')[1] || ''}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICES OVERVIEW (GRID) */}
      <section className="py-24 bg-[#0c1321] px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-mono text-[#e5101a] tracking-[0.2em] uppercase block mb-4 font-semibold">
                Core Competencies
              </span>
              <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight">
                Precision in Every Frame.
              </h2>
            </div>

            <button
              onClick={() => onNavigate('services')}
              className="flex items-center gap-2 text-[#e5101a] font-heading text-sm font-bold hover:underline underline-offset-8 transition-all shrink-0"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Sub-Services Quick Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
            {[
              { id: 'vfx-compositing', name: 'VFX Compositing', icon: Layers },
              { id: 'cgi', name: 'CGI & 3D', icon: Box },
              { id: 'matchmove-tracking', name: 'Matchmove', icon: Focus },
              { id: 'rotoscoping', name: 'Rotoscoping', icon: Scissors },
              { id: 'matte-painting', name: 'Matte Painting', icon: Image },
              { id: 'color-grading', name: 'Color Grading', icon: Sliders },
            ].map((sub) => (
              <button
                key={sub.id}
                onClick={() => onNavigate('services', sub.id)}
                className="p-3.5 rounded-xl bg-[#070e1c]/60 border border-white/5 hover:border-[#e5101a]/50 hover:bg-[#070e1c] transition-all flex items-center justify-center gap-2 text-xs font-heading font-semibold text-[#dce2f6] hover:text-white group"
              >
                <sub.icon className="w-4 h-4 text-[#e5101a] group-hover:scale-110 transition-transform" />
                <span>{sub.name}</span>
              </button>
            ))}
          </div>

          {/* Core Services Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div 
              onClick={() => onNavigate('services', 'cgi')}
              className="glass-card rounded-xl p-8 group hover:border-[#e5101a]/50 transition-all duration-500 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="w-16 h-16 bg-[#e5101a]/10 rounded-lg flex items-center justify-center mb-6 text-[#e5101a] group-hover:scale-110 transition-transform">
                  <Box className="w-8 h-8" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-white mb-4 group-hover:text-[#e5101a] transition-colors">
                  CGI & 3D Environment
                </h3>
                <p className="text-sm text-[#e8bcb7] mb-6 leading-relaxed">
                  Photorealistic world-building, from sprawling alien landscapes to hyper-detailed urban simulations.
                </p>
              </div>
              <div className="h-1 w-0 bg-[#e5101a] group-hover:w-full transition-all duration-500" />
            </div>

            {/* Service 2 */}
            <div 
              onClick={() => onNavigate('services', '3d-animation')}
              className="glass-card rounded-xl p-8 group hover:border-[#e5101a]/50 transition-all duration-500 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="w-16 h-16 bg-[#e5101a]/10 rounded-lg flex items-center justify-center mb-6 text-[#e5101a] group-hover:scale-110 transition-transform">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-white mb-4 group-hover:text-[#e5101a] transition-colors">
                  Character Animation
                </h3>
                <p className="text-sm text-[#e8bcb7] mb-6 leading-relaxed">
                  Award-winning creature work and realistic human performance capture that breathes life into stories.
                </p>
              </div>
              <div className="h-1 w-0 bg-[#e5101a] group-hover:w-full transition-all duration-500" />
            </div>

            {/* Service 3 */}
            <div 
              onClick={() => onNavigate('services', 'vfx-compositing')}
              className="glass-card rounded-xl p-8 group hover:border-[#e5101a]/50 transition-all duration-500 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="w-16 h-16 bg-[#e5101a]/10 rounded-lg flex items-center justify-center mb-6 text-[#e5101a] group-hover:scale-110 transition-transform">
                  <Layers className="w-8 h-8" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-white mb-4 group-hover:text-[#e5101a] transition-colors">
                  Dynamic Compositing
                </h3>
                <p className="text-sm text-[#e8bcb7] mb-6 leading-relaxed">
                  Seamless integration of live-action footage with digital assets using high-end 32-bit workflows.
                </p>
              </div>
              <div className="h-1 w-0 bg-[#e5101a] group-hover:w-full transition-all duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. BEFORE/AFTER SHOWCASE (INTERACTIVE SLIDER) */}
      <section className="py-24 bg-[#070e1c] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="font-heading font-semibold text-3xl sm:text-5xl text-white mb-4">
              The Alchemy of Visuals.
            </h2>
            <p className="text-base sm:text-lg text-[#e8bcb7] leading-relaxed">
              See the transformation from raw footage to final cinematic masterpiece. Slide to reveal the magic.
            </p>
          </div>

          {/* Comparison Slider */}
          <div 
            ref={sliderRef}
            onMouseDown={() => (isDragging.current = true)}
            onMouseUp={() => (isDragging.current = false)}
            onMouseLeave={() => (isDragging.current = false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative w-full aspect-video rounded-2xl overflow-hidden group border border-white/5 select-none cursor-ew-resize shadow-2xl"
          >
            {/* After Image (Bottom - Final Composite) */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ 
                backgroundImage: `url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1600&q=80')` 
              }}
            />

            {/* Before Image (Top Clip - Raw Plate) */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-none"
              style={{ 
                backgroundImage: `url('https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80')`,
                clipPath: `inset(0 ${100 - sliderPos}% 0 0)`
              }}
            />

            {/* Handle */}
            <div 
              className="absolute inset-y-0 w-1 bg-[#e5101a] z-20 flex items-center justify-center group-hover:shadow-[0_0_15px_rgba(229,16,26,0.8)] transition-shadow"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="w-10 h-10 bg-[#e5101a] rounded-full flex items-center justify-center shadow-lg border-2 border-white text-white">
                <span className="text-xs font-bold font-mono">◄►</span>
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-6 left-6 z-30 text-xs font-mono font-bold bg-black/60 text-white px-4 py-2 rounded-full backdrop-blur-md">
              RAW FOOTAGE
            </div>
            <div className="absolute top-6 right-6 z-30 text-xs font-mono font-bold bg-[#e5101a]/80 text-white px-4 py-2 rounded-full backdrop-blur-md">
              FINAL RENDER
            </div>
          </div>
        </div>
      </section>

      {/* 5. FEATURED PROJECTS (MASONRY-STYLE GRID) */}
      <section className="py-24 bg-[#0c1321] px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-16">
            <h2 className="font-heading font-semibold text-3xl sm:text-5xl text-white">
              Global Reel Highlights
            </h2>
            <button
              onClick={() => onNavigate('portfolio')}
              className="hidden sm:flex items-center gap-2 text-[#e5101a] font-heading text-sm font-bold hover:underline"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Large Project */}
            <div 
              onClick={() => onNavigate('portfolio', 'the-last-wyvern')}
              className="md:col-span-8 group relative aspect-[16/9] rounded-2xl overflow-hidden cursor-pointer border border-white/5 shadow-2xl"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-10 transform transition-transform duration-500 group-hover:translate-y-[-10px]">
                <span className="text-xs font-mono text-[#e5101a] uppercase font-bold tracking-widest block mb-2">Feature Film</span>
                <h3 className="font-heading font-semibold text-2xl sm:text-4xl text-white">The Last Wyvern</h3>
              </div>
            </div>

            {/* Vertical Project */}
            <div 
              onClick={() => onNavigate('portfolio', 'apex-motion')}
              className="md:col-span-4 group relative aspect-[9/16] md:aspect-auto rounded-2xl overflow-hidden cursor-pointer border border-white/5 shadow-2xl min-h-[320px]"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-8 transform transition-transform duration-500 group-hover:translate-y-[-10px]">
                <span className="text-xs font-mono text-[#e5101a] uppercase font-bold tracking-widest block mb-2">Brand Commercial</span>
                <h3 className="font-heading font-semibold text-xl sm:text-2xl text-white">Apex Motion 2024</h3>
              </div>
            </div>

            {/* Square Project */}
            <div 
              onClick={() => onNavigate('portfolio', 'fluidity')}
              className="md:col-span-4 group relative aspect-square rounded-2xl overflow-hidden cursor-pointer border border-white/5 shadow-2xl"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80')` }}
              />
              <div className="absolute bottom-0 left-0 p-8 z-10">
                <span className="text-xs font-mono text-[#e5101a] uppercase font-bold tracking-widest block mb-1">Motion Graphics</span>
                <h3 className="font-heading font-semibold text-xl text-white">Fluidity</h3>
              </div>
            </div>

            {/* Long Project */}
            <div 
              onClick={() => onNavigate('portfolio', 'beyond-the-void')}
              className="md:col-span-8 group relative aspect-[21/9] rounded-2xl overflow-hidden cursor-pointer border border-white/5 shadow-2xl"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80')` }}
              />
              <div className="absolute bottom-0 left-0 p-10 z-10">
                <span className="text-xs font-mono text-[#e5101a] uppercase font-bold tracking-widest block mb-2">Streaming Series</span>
                <h3 className="font-heading font-semibold text-2xl sm:text-3xl text-white">Beyond the Void</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. COMPANY STATISTICS */}
      <section className="py-32 bg-[#070e1c] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            <div>
              <div className="font-heading font-extrabold text-4xl sm:text-6xl text-[#e5101a] mb-2 animate-pulse">
                500+
              </div>
              <p className="text-xs font-mono text-[#e8bcb7] uppercase tracking-wider font-semibold">
                Shots Delivered
              </p>
            </div>

            <div>
              <div className="font-heading font-extrabold text-4xl sm:text-6xl text-[#e5101a] mb-2 animate-pulse">
                12
              </div>
              <p className="text-xs font-mono text-[#e8bcb7] uppercase tracking-wider font-semibold">
                Global Awards
              </p>
            </div>

            <div>
              <div className="font-heading font-extrabold text-4xl sm:text-6xl text-[#e5101a] mb-2 animate-pulse">
                85
              </div>
              <p className="text-xs font-mono text-[#e8bcb7] uppercase tracking-wider font-semibold">
                Artists Worldwide
              </p>
            </div>

            <div>
              <div className="font-heading font-extrabold text-4xl sm:text-6xl text-[#e5101a] mb-2 animate-pulse">
                24/7
              </div>
              <p className="text-xs font-mono text-[#e8bcb7] uppercase tracking-wider font-semibold">
                Pipeline Support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PRODUCTION WORKFLOW */}
      <section className="py-24 bg-[#0c1321] px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="text-xs font-mono text-[#e5101a] tracking-[0.2em] uppercase block mb-4 font-semibold">
              Our Process
            </span>
            <h2 className="font-heading font-semibold text-3xl sm:text-5xl text-white">
              Concept to Cinema.
            </h2>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2" />
            <div className="space-y-24">
              {/* Step 1 */}
              <div className="relative flex flex-col lg:flex-row items-center gap-12 group">
                <div className="lg:w-1/2 lg:text-right">
                  <span className="font-heading font-black text-6xl text-white/5 block lg:mb-2">01</span>
                  <h3 className="font-heading font-semibold text-xl text-white mb-4">Discovery & Strategy</h3>
                  <p className="text-sm text-[#e8bcb7] max-w-md lg:ml-auto leading-relaxed">
                    We analyze your creative vision and technical requirements to build a bulletproof VFX roadmap.
                  </p>
                </div>
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[#e5101a] rounded-full border-4 border-[#0c1321] z-10 group-hover:scale-150 transition-transform" />
                <div className="lg:w-1/2">
                  <div className="aspect-video glass-card rounded-xl overflow-hidden p-2">
                    <img 
                      src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80" 
                      alt="Discovery & Strategy" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex flex-col lg:flex-row-reverse items-center gap-12 group">
                <div className="lg:w-1/2">
                  <span className="font-heading font-black text-6xl text-white/5 block lg:mb-2">02</span>
                  <h3 className="font-heading font-semibold text-xl text-white mb-4">The Digital Build</h3>
                  <p className="text-sm text-[#e8bcb7] max-w-md leading-relaxed">
                    Our specialized artists begin modeling, texturing, and rigging the assets required for your scenes.
                  </p>
                </div>
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[#e5101a] rounded-full border-4 border-[#0c1321] z-10 group-hover:scale-150 transition-transform" />
                <div className="lg:w-1/2">
                  <div className="aspect-video glass-card rounded-xl overflow-hidden p-2">
                    <img 
                      src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80" 
                      alt="The Digital Build" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex flex-col lg:flex-row items-center gap-12 group">
                <div className="lg:w-1/2 lg:text-right">
                  <span className="font-heading font-black text-6xl text-white/5 block lg:mb-2">03</span>
                  <h3 className="font-heading font-semibold text-xl text-white mb-4">Rendering & Review</h3>
                  <p className="text-sm text-[#e8bcb7] max-w-md lg:ml-auto leading-relaxed">
                    Utilizing our massive cloud-render farm, we process high-fidelity frames for final collaborative review.
                  </p>
                </div>
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[#e5101a] rounded-full border-4 border-[#0c1321] z-10 group-hover:scale-150 transition-transform" />
                <div className="lg:w-1/2">
                  <div className="aspect-video glass-card rounded-xl overflow-hidden p-2">
                    <img 
                      src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80" 
                      alt="Rendering & Review" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS */}
      <section className="py-24 bg-[#070e1c] px-6 md:px-16 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="font-heading font-semibold text-3xl sm:text-5xl text-white mb-8">
                What Directors Say.
              </h2>
              <div className="space-y-12">
                <div className="relative">
                  <p className="text-lg sm:text-xl text-[#dce2f6] italic relative z-10 leading-relaxed font-body">
                    "The level of detail Right Time FX brings to our environments is unparalleled. They don't just add effects; they add depth and soul to our stories."
                  </p>
                  <div className="mt-6 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#e5101a] to-rose-700 flex items-center justify-center font-heading font-bold text-white text-lg shadow-lg">
                      SD
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-[#dce2f6] text-base">Soumadip Dinda (Vijay Souma)</p>
                      <p className="text-xs font-mono text-[#e8bcb7]">CEO & Founder, Right Time FX Studio</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] sm:aspect-square glass-card rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={founderImg} 
                  alt="Soumadip Dinda (Vijay Souma) - CEO & Founder" 
                  className="w-full h-full object-cover object-top hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 p-8 glass-card rounded-2xl hidden md:block border border-white/10 shadow-2xl">
                <div className="flex items-center gap-1 text-[#e5101a] mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs font-mono font-bold text-[#dce2f6]">Leading VFX Studio Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. LATEST NEWS (BENTO) */}
      <section className="py-24 bg-[#0c1321] px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-16">
            <h2 className="font-heading font-semibold text-3xl sm:text-5xl text-white">
              Studio Insights.
            </h2>
            <button 
              onClick={() => onNavigate('blog')}
              className="text-xs font-mono text-[#e8bcb7] hover:text-[#e5101a] transition-colors uppercase tracking-widest font-bold"
            >
              Read All Articles
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              onClick={() => onNavigate('blog', 'blog-1')}
              className="md:col-span-2 glass-card rounded-2xl overflow-hidden group cursor-pointer"
            >
              <div className="aspect-video bg-cover bg-center overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80" 
                  alt="Render Farm" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex gap-4 mb-4">
                  <span className="text-xs font-mono bg-[#e5101a]/10 text-[#e5101a] px-3 py-1 rounded border border-[#e5101a]/30">Technology</span>
                  <span className="text-xs font-mono text-[#e8bcb7]">May 12, 2024</span>
                </div>
                <h3 className="font-heading font-semibold text-xl sm:text-2xl text-white mb-4 group-hover:text-[#e5101a] transition-colors">
                  Scaling for the Unreal: Our New 20,000-Core Render Farm.
                </h3>
                <p className="text-sm text-[#e8bcb7] leading-relaxed">
                  Discover how we've upgraded our infrastructure to handle the next wave of 8K real-time cinematic productions.
                </p>
              </div>
            </div>

            <div 
              onClick={() => onNavigate('blog', 'blog-2')}
              className="glass-card rounded-2xl overflow-hidden group flex flex-col cursor-pointer"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=800&q=80" 
                  alt="Subsurface Scattering" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex-grow">
                <div className="flex gap-4 mb-4">
                  <span className="text-xs font-mono bg-white/5 text-[#e8bcb7] px-3 py-1 rounded">Workflow</span>
                </div>
                <h3 className="font-heading font-semibold text-lg text-white mb-4 group-hover:text-[#e5101a] transition-colors">
                  The Art of the Light: Perfecting Subsurface Scattering.
                </h3>
                <p className="text-sm text-[#e8bcb7] leading-relaxed">
                  A deep dive into our proprietary skin shading techniques for hyper-realistic digital humans.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FINAL CONTACT CTA */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-b from-[#0c1321] to-[#070e1c] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-heading font-extrabold text-4xl sm:text-6xl text-white mb-8 tracking-tight">
            Ready to <span className="text-[#e5101a] text-glow">Evolve</span> Your Project?
          </h2>
          <p className="text-base sm:text-lg text-[#e8bcb7] mb-12 max-w-2xl mx-auto leading-relaxed">
            From boutique commercials to global franchise blockbusters, we bring cinematic excellence to every frame.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              onClick={() => onNavigate('get-quote')}
              className="w-full sm:w-auto bg-[#e5101a] hover:bg-[#c00010] text-white px-12 py-5 rounded-lg font-heading font-bold text-base bloom-hover transition-all shadow-2xl shadow-[#e5101a]/40 hover:scale-105 active:scale-95"
            >
              Start Your Quote
            </button>

            <button
              onClick={() => onNavigate('services')}
              className="w-full sm:w-auto border border-white/20 glass-card px-12 py-5 rounded-lg font-heading font-bold text-base text-white hover:bg-white/5 transition-all hover:scale-105 active:scale-95"
            >
              Our Services
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
