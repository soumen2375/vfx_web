import React, { useState, useRef, useEffect } from 'react';
import { 
  ArrowRight, 
  Star, 
  PlayCircle,
  Calculator,
  ChevronDown,
  Layers,
  Box,
  Focus,
  Scissors,
  Image,
  Sliders,
  Sparkles
} from 'lucide-react';
import { PageId } from '../types';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';

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
    <div className="bg-[#0c1321] text-[#dce2f6] min-h-screen selection:bg-[#e5101a] selection:text-white font-sans overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <div 
            className="w-full h-full bg-cover bg-center scale-105 transition-transform duration-10000 animate-pulse"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=2000&q=80')`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c1321]/40 via-[#0c1321]/70 to-[#0c1321] z-20" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#e5101a]/15 rounded-full blur-[160px] pointer-events-none z-20" />
        </div>

        {/* Hero Content */}
        <div className="relative z-30 px-6 md:px-16 text-center max-w-5xl mx-auto pt-20 pb-16">
          <h1 className="font-heading font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight leading-[1.1] mb-8">
            Crafting <span className="text-[#e5101a] text-glow drop-shadow-[0_0_25px_rgba(229,16,26,0.5)]">Hollywood-Level</span> Visual Effects.
          </h1>

          <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed font-body">
            Leading VFX outsourcing studio in India. We blend top artistic talent with state-of-the-art pipelines to deliver photorealistic CGI, compositing, roto, and virtual production.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <button
              onClick={() => onNavigate('portfolio')}
              className="w-full sm:w-auto bg-[#e5101a] hover:bg-[#c00010] text-white px-9 py-4 rounded-xl font-heading font-bold text-sm tracking-wider bloom-hover transition-all flex items-center justify-center gap-3 shadow-xl shadow-[#e5101a]/30 hover:scale-105 active:scale-95"
            >
              <span>View Portfolio</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={onOpenReel}
              className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 text-white px-9 py-4 rounded-xl font-heading font-bold text-sm tracking-wider transition-all flex items-center justify-center gap-3 backdrop-blur-md hover:scale-105 active:scale-95"
            >
              <PlayCircle className="w-5 h-5 text-[#e5101a]" />
              <span>Watch Showreel</span>
            </button>

            <button
              onClick={() => onNavigate('get-quote')}
              className="w-full sm:w-auto bg-[#070e1c]/80 hover:bg-[#070e1c] border border-[#e5101a]/50 text-white px-9 py-4 rounded-xl font-heading font-bold text-sm tracking-wider transition-all flex items-center justify-center gap-3 backdrop-blur-md hover:scale-105 active:scale-95"
            >
              <Calculator className="w-5 h-5 text-[#e5101a]" />
              <span>Get a Quote</span>
            </button>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce z-30 text-gray-400">
          <ChevronDown className="w-6 h-6" />
        </div>
      </section>

      {/* 2. TRUSTED CLIENTS (INFINITE MARQUEE) */}
      <section className="py-16 bg-[#0c1321] border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
          <p className="text-xs font-mono text-[#e8bcb7] tracking-[0.2em] uppercase opacity-70">
            Trusted by Global Studios, Producers & Directors
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

      {/* 3. CORE COMPETENCIES (SERVICES OVERVIEW GRID) */}
      <section className="py-24 bg-[#0c1321] px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-mono text-[#e5101a] tracking-[0.2em] uppercase block mb-3 font-semibold">
                Core Competencies
              </span>
              <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight">
                Precision in Every Frame.
              </h2>
            </div>

            <button
              onClick={() => onNavigate('services')}
              className="flex items-center gap-2 text-[#e5101a] font-heading text-sm font-bold hover:underline decoration-2 underline-offset-8 transition-all shrink-0"
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
                className="p-3.5 rounded-xl bg-[#070e1c]/60 border border-white/5 hover:border-[#e5101a]/50 hover:bg-[#070e1c] transition-all flex items-center justify-center gap-2 text-xs font-heading font-semibold text-gray-300 hover:text-white group"
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
              className="bg-[#070e1c]/40 backdrop-blur-xl border border-white/5 rounded-2xl p-8 group hover:border-[#e5101a]/50 transition-all duration-500 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 bg-[#e5101a]/10 rounded-xl flex items-center justify-center mb-6 text-[#e5101a] group-hover:scale-110 transition-transform border border-[#e5101a]/20">
                  <Box className="w-7 h-7" />
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-4 group-hover:text-[#e5101a] transition-colors">
                  CGI & 3D Environment
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6 font-body">
                  Photorealistic world-building, from sprawling alien landscapes and futuristic architecture to hyper-detailed urban simulations.
                </p>
              </div>
              <div className="h-1 w-0 bg-[#e5101a] group-hover:w-full transition-all duration-500 rounded-full" />
            </div>

            {/* Service 2 */}
            <div 
              onClick={() => onNavigate('services', '3d-animation')}
              className="bg-[#070e1c]/40 backdrop-blur-xl border border-white/5 rounded-2xl p-8 group hover:border-[#e5101a]/50 transition-all duration-500 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 bg-[#e5101a]/10 rounded-xl flex items-center justify-center mb-6 text-[#e5101a] group-hover:scale-110 transition-transform border border-[#e5101a]/20">
                  <Sparkles className="w-7 h-7" />
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-4 group-hover:text-[#e5101a] transition-colors">
                  Character Animation
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6 font-body">
                  Award-winning creature work, muscle deformation, and realistic human performance capture that breathes life into stories.
                </p>
              </div>
              <div className="h-1 w-0 bg-[#e5101a] group-hover:w-full transition-all duration-500 rounded-full" />
            </div>

            {/* Service 3 */}
            <div 
              onClick={() => onNavigate('services', 'vfx-compositing')}
              className="bg-[#070e1c]/40 backdrop-blur-xl border border-white/5 rounded-2xl p-8 group hover:border-[#e5101a]/50 transition-all duration-500 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 bg-[#e5101a]/10 rounded-xl flex items-center justify-center mb-6 text-[#e5101a] group-hover:scale-110 transition-transform border border-[#e5101a]/20">
                  <Layers className="w-7 h-7" />
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-4 group-hover:text-[#e5101a] transition-colors">
                  Dynamic Compositing
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6 font-body">
                  Seamless integration of live-action footage with digital assets, volumetric pyrotechnics, and optical lens effects in 32-bit ACEScg pipelines.
                </p>
              </div>
              <div className="h-1 w-0 bg-[#e5101a] group-hover:w-full transition-all duration-500 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. BEFORE / AFTER SHOWCASE (INTERACTIVE SLIDER) */}
      <section className="py-24 bg-[#070e1c] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-xs font-mono text-[#e5101a] tracking-[0.2em] uppercase block mb-3 font-semibold">
              Interactive Showcase
            </span>
            <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight mb-4">
              The Alchemy of Visuals.
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              See the transformation from raw green-screen production plate to final cinematic masterpiece. Slide to reveal the magic.
            </p>
          </div>

          {/* Interactive Comparison Slider */}
          <div 
            ref={sliderRef}
            onMouseDown={() => (isDragging.current = true)}
            onMouseUp={() => (isDragging.current = false)}
            onMouseLeave={() => (isDragging.current = false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative w-full aspect-video rounded-2xl overflow-hidden group border border-white/10 select-none shadow-2xl cursor-ew-resize"
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

            {/* Vertical Slider Handle Line */}
            <div 
              className="absolute inset-y-0 w-1 bg-[#e5101a] z-20 flex items-center justify-center shadow-[0_0_20px_rgba(229,16,26,0.8)]"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="w-10 h-10 bg-[#e5101a] rounded-full flex items-center justify-center shadow-2xl border-2 border-white text-white">
                <span className="text-xs font-bold font-mono">◄►</span>
              </div>
            </div>

            {/* Badges */}
            <div className="absolute top-6 left-6 z-30 text-xs font-mono font-bold bg-black/70 text-white px-4 py-2 rounded-full backdrop-blur-md border border-white/10">
              RAW FOOTAGE PLATE
            </div>
            <div className="absolute top-6 right-6 z-30 text-xs font-mono font-bold bg-[#e5101a]/90 text-white px-4 py-2 rounded-full backdrop-blur-md shadow-lg">
              FINAL VFX RENDER
            </div>
          </div>
        </div>
      </section>

      {/* 5. FEATURED PROJECTS (MASONRY GRID) */}
      <section className="py-24 bg-[#0c1321] px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-16">
            <div>
              <span className="text-xs font-mono text-[#e5101a] tracking-[0.2em] uppercase block mb-3 font-semibold">
                Showcase Works
              </span>
              <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight">
                Global Reel Highlights
              </h2>
            </div>
            <button
              onClick={() => onNavigate('portfolio')}
              className="hidden sm:flex items-center gap-2 text-[#e5101a] font-heading text-sm font-bold hover:underline"
            >
              <span>View Portfolio ({PORTFOLIO_ITEMS.length})</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Large Project */}
            <div 
              onClick={() => onNavigate('portfolio', 'the-last-wyvern')}
              className="md:col-span-8 group relative aspect-[16/9] rounded-2xl overflow-hidden cursor-pointer border border-white/10 shadow-2xl"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-8 sm:p-10 transform transition-transform duration-500 group-hover:translate-y-[-6px]">
                <span className="text-xs font-mono text-[#e5101a] uppercase font-bold tracking-widest block mb-2">Feature Film</span>
                <h3 className="font-heading font-bold text-2xl sm:text-4xl text-white">The Last Wyvern</h3>
                <p className="text-gray-300 text-xs sm:text-sm mt-2 max-w-xl hidden sm:block">420 CG shots, dragon creature animation, and volumetric fire simulation.</p>
              </div>
            </div>

            {/* Vertical Project */}
            <div 
              onClick={() => onNavigate('portfolio', 'apex-motion')}
              className="md:col-span-4 group relative aspect-[9/16] md:aspect-auto rounded-2xl overflow-hidden cursor-pointer border border-white/10 shadow-2xl min-h-[320px]"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-8 transform transition-transform duration-500 group-hover:translate-y-[-6px]">
                <span className="text-xs font-mono text-[#e5101a] uppercase font-bold tracking-widest block mb-2">Brand Commercial</span>
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">Apex Motion 2024</h3>
              </div>
            </div>

            {/* Square Project */}
            <div 
              onClick={() => onNavigate('portfolio', 'fluidity')}
              className="md:col-span-4 group relative aspect-square rounded-2xl overflow-hidden cursor-pointer border border-white/10 shadow-2xl"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 p-8 z-10">
                <span className="text-xs font-mono text-[#e5101a] uppercase font-bold tracking-widest block mb-1">Motion Graphics</span>
                <h3 className="font-heading font-bold text-xl text-white">Fluidity</h3>
              </div>
            </div>

            {/* Long Project */}
            <div 
              onClick={() => onNavigate('portfolio', 'beyond-the-void')}
              className="md:col-span-8 group relative aspect-[21/9] rounded-2xl overflow-hidden cursor-pointer border border-white/10 shadow-2xl"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 p-8 sm:p-10 z-10">
                <span className="text-xs font-mono text-[#e5101a] uppercase font-bold tracking-widest block mb-2">Streaming Series</span>
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white">Beyond the Void</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. COMPANY STATISTICS */}
      <section className="py-24 bg-[#070e1c] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            <div className="space-y-2">
              <div className="text-4xl sm:text-6xl font-heading font-extrabold text-[#e5101a] drop-shadow-[0_0_15px_rgba(229,16,26,0.4)]">
                500+
              </div>
              <p className="text-xs sm:text-sm font-mono text-gray-300 uppercase tracking-wider font-semibold">
                Shots Delivered
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-4xl sm:text-6xl font-heading font-extrabold text-[#e5101a] drop-shadow-[0_0_15px_rgba(229,16,26,0.4)]">
                12
              </div>
              <p className="text-xs sm:text-sm font-mono text-gray-300 uppercase tracking-wider font-semibold">
                Global Awards
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-4xl sm:text-6xl font-heading font-extrabold text-[#e5101a] drop-shadow-[0_0_15px_rgba(229,16,26,0.4)]">
                250+
              </div>
              <p className="text-xs sm:text-sm font-mono text-gray-300 uppercase tracking-wider font-semibold">
                Artists & Technologists
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-4xl sm:text-6xl font-heading font-extrabold text-[#e5101a] drop-shadow-[0_0_15px_rgba(229,16,26,0.4)]">
                24/7
              </div>
              <p className="text-xs sm:text-sm font-mono text-gray-300 uppercase tracking-wider font-semibold">
                Pipeline & Client Sync
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PRODUCTION WORKFLOW (STEP-BY-STEP) */}
      <section className="py-24 bg-[#0c1321] px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono text-[#e5101a] tracking-[0.2em] uppercase block mb-3 font-semibold">
              Our Process
            </span>
            <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight">
              Concept to Cinema.
            </h2>
          </div>

          <div className="space-y-20">
            {/* Step 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <span className="font-heading font-black text-6xl sm:text-8xl text-white/10 block">01</span>
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white">Discovery & Strategy</h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-body">
                  We analyze your creative vision and technical requirements to build a bulletproof VFX roadmap, color pipeline (ACEScg), and frame delivery schedule.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden border border-white/10 p-3 bg-[#070e1c]/60 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80" 
                  alt="Discovery & Strategy" 
                  className="w-full h-64 sm:h-80 object-cover rounded-xl"
                />
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
              <div className="rounded-2xl overflow-hidden border border-white/10 p-3 bg-[#070e1c]/60 shadow-2xl lg:order-2">
                <img 
                  src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80" 
                  alt="The Digital Build" 
                  className="w-full h-64 sm:h-80 object-cover rounded-xl"
                />
              </div>
              <div className="space-y-4 lg:order-1">
                <span className="font-heading font-black text-6xl sm:text-8xl text-white/10 block">02</span>
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white">The Digital Build</h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-body">
                  Our specialized roto, matchmove, 3D sculptors, and FX artists construct intricate assets, articulate splines, and camera solve trajectories.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <span className="font-heading font-black text-6xl sm:text-8xl text-white/10 block">03</span>
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white">Rendering & Review</h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-body">
                  Utilizing our high-performance render farm and deep compositing suites, we process high-fidelity 4K/8K frames for collaborative real-time review.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden border border-white/10 p-3 bg-[#070e1c]/60 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80" 
                  alt="Rendering & Review" 
                  className="w-full h-64 sm:h-80 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS */}
      <section className="py-24 bg-[#070e1c] px-6 md:px-16 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <span className="text-xs font-mono text-[#e5101a] tracking-[0.2em] uppercase block font-semibold">
                Client Voices
              </span>
              <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight">
                What Directors Say.
              </h2>
              
              <div className="p-8 rounded-2xl bg-[#0c1321] border border-white/10 space-y-6 relative">
                <p className="text-gray-200 text-lg sm:text-xl font-body italic leading-relaxed">
                  "The level of detail Right Time FX brings to our environments is unparalleled. They don't just add effects; they add depth, emotion, and soul to our stories."
                </p>
                <div className="flex items-center gap-4 pt-2">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#e5101a] to-rose-700 flex items-center justify-center font-heading font-bold text-white text-lg shadow-lg">
                    JT
                  </div>
                  <div>
                    <p className="font-heading font-bold text-white text-base">Julian Thorne</p>
                    <p className="text-xs font-mono text-[#e5101a]">Director, 'Beyond the Void'</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80" 
                  alt="Director Review" 
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 p-6 rounded-2xl bg-[#0c1321]/95 border border-[#e5101a]/40 backdrop-blur-xl hidden sm:block shadow-2xl">
                <div className="flex items-center gap-1 text-[#e5101a] mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs font-mono font-bold text-white">Top-Rated VFX Outsourcing Studio</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. STUDIO INSIGHTS / BLOG PREVIEW */}
      <section className="py-24 bg-[#0c1321] px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-16">
            <div>
              <span className="text-xs font-mono text-[#e5101a] tracking-[0.2em] uppercase block mb-3 font-semibold">
                R&D & Pipeline
              </span>
              <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight">
                Studio Insights.
              </h2>
            </div>
            <button
              onClick={() => onNavigate('blog')}
              className="text-[#e5101a] font-heading text-sm font-bold hover:underline"
            >
              Read All Articles
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              onClick={() => onNavigate('blog', 'blog-1')}
              className="md:col-span-2 rounded-2xl overflow-hidden bg-[#070e1c] border border-white/10 hover:border-[#e5101a]/50 transition-all cursor-pointer group flex flex-col justify-between"
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
                  <span className="text-xs font-mono bg-[#e5101a]/10 text-[#e5101a] px-3 py-1 rounded font-semibold border border-[#e5101a]/30">Technology</span>
                  <span className="text-xs font-mono text-gray-400">July 2026</span>
                </div>
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mb-3 group-hover:text-[#e5101a] transition-colors">
                  Scaling for the Unreal: Our New 20,000-Core Render Farm.
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Discover how we've upgraded our infrastructure to handle the next wave of 8K real-time cinematic productions.
                </p>
              </div>
            </div>

            <div 
              onClick={() => onNavigate('blog', 'blog-2')}
              className="rounded-2xl overflow-hidden bg-[#070e1c] border border-white/10 hover:border-[#e5101a]/50 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=800&q=80" 
                  alt="Subsurface Scattering" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono bg-white/5 text-gray-300 px-3 py-1 rounded font-semibold mb-4 inline-block">Workflow</span>
                  <h3 className="font-heading font-bold text-lg text-white mb-3 group-hover:text-[#e5101a] transition-colors">
                    The Art of Light: Subsurface Scattering.
                  </h3>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    A deep dive into skin shading techniques for hyper-realistic digital double actors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FINAL CONTACT CTA */}
      <section className="py-28 relative overflow-hidden bg-gradient-to-b from-[#0c1321] to-[#070e1c] border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#e5101a]/15 rounded-full blur-[180px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-8">
          <h2 className="font-heading font-extrabold text-4xl sm:text-6xl text-white tracking-tight">
            Ready to <span className="text-[#e5101a]">Evolve</span> Your Project?
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            From boutique commercials to global franchise blockbusters, we bring cinematic excellence to every frame.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4">
            <button
              onClick={() => onNavigate('get-quote')}
              className="w-full sm:w-auto bg-[#e5101a] hover:bg-[#c00010] text-white px-10 py-5 rounded-xl font-heading font-bold text-base tracking-wider bloom-hover transition-all shadow-2xl shadow-[#e5101a]/40 hover:scale-105 active:scale-95"
            >
              Start Your Quote
            </button>

            <button
              onClick={() => onNavigate('services')}
              className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/20 text-white px-10 py-5 rounded-xl font-heading font-bold text-base tracking-wider transition-all hover:scale-105 active:scale-95"
            >
              Our Services
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

const PORTFOLIO_ITEMS = [
  { id: 'the-last-wyvern', title: 'The Last Wyvern' },
  { id: 'apex-motion', title: 'Apex Motion 2024' },
  { id: 'fluidity', title: 'Fluidity' },
  { id: 'beyond-the-void', title: 'Beyond the Void' }
];
