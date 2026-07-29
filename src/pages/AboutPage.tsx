import React from 'react';
import { 
  Target, 
  Eye, 
  Rocket, 
  Trophy, 
  Compass, 
  Share2, 
  Lightbulb, 
  Heart, 
  Globe2, 
  ArrowRight, 
  Play, 
  Linkedin, 
  Mail, 
  MapPin, 
  Sparkles,
  Users,
  Film
} from 'lucide-react';
import { PageId } from '../types';
import { TEAM_MEMBERS } from '../data/mockData';

interface AboutPageProps {
  onNavigate: (page: PageId, detailId?: string) => void;
  onOpenReel?: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenReel }) => {
  const roadmapSteps = [
    {
      year: '2014',
      icon: Compass,
      title: 'The Genesis',
      description: 'Right Time FX Studio was founded in a small studio in West Bengal with a team of 5 visionaries.'
    },
    {
      year: '2017',
      icon: Rocket,
      title: 'First Major Feature',
      description: 'Secured our first international project, delivering 600+ shots for a sci-fi epic.'
    },
    {
      year: '2021',
      icon: Trophy,
      title: 'Academy Recognition',
      description: 'Awarded for Technical Innovation in Best-in-Class Rendering workflows.'
    },
    {
      year: '2024',
      icon: Sparkles,
      title: 'Global Studio Scaling',
      description: 'Expanded infrastructure to 100+ creative artists servicing major global entertainment clients.'
    }
  ];

  const coreValues = [
    {
      icon: Target,
      title: 'Uncompromising Precision',
      description: 'We believe every frame is an opportunity to perfect.'
    },
    {
      icon: Share2,
      title: 'Radical Collaboration',
      description: 'The best ideas are born in teamwork. We co-create, challenge, and elevate.'
    },
    {
      icon: Lightbulb,
      title: 'Fearless Innovation',
      description: 'We embrace new technologies to solve complex visual challenges.'
    },
    {
      icon: Heart,
      title: 'Passion for Storytelling',
      description: 'Stories drive us. We bring emotion, depth, and realism to every pixel.'
    }
  ];

  return (
    <div className="space-y-24 pb-20 bg-[#050811] text-gray-200">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[500px] sm:min-h-[580px] flex items-center justify-center overflow-hidden border-b border-white/10 pt-12 pb-16">
        {/* Cinematic Background Art */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1920&q=80"
            alt="Right Time FX Studio Sci-Fi Artwork"
            className="w-full h-full object-cover object-center opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050811] via-[#050811]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050811] via-transparent to-[#050811]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#e5101a]/15 rounded-full blur-[160px] pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <span className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#e5101a]/15 border border-[#e5101a]/40 text-[#e5101a] text-xs font-mono font-bold tracking-widest uppercase animate-fadeIn">
            <span>ABOUT RIGHT TIME FX STUDIO</span>
          </span>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold text-white tracking-tight leading-none">
            Crafting Realities. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e5101a] via-rose-500 to-red-400">
              Beyond Imagination.
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-sm sm:text-base text-gray-300 leading-relaxed font-body">
            Founded at the intersection of technical rigor and boundless imagination, Right Time FX Studio stands as a global powerhouse of VFX innovation. From blockbuster films to immersive digital experiences, we orchestrate light, time, and emotion to tell stories that resonate across dimensions.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('portfolio')}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#e5101a] via-rose-600 to-[#c00010] hover:from-[#f01c26] hover:to-[#a0000d] text-white font-heading text-xs font-bold tracking-wider flex items-center space-x-2 shadow-lg shadow-red-600/30 hover:shadow-red-500/50 transition-all hover:scale-105 active:scale-95"
            >
              <span>OUR WORK</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                if (onOpenReel) onOpenReel();
                else onNavigate('portfolio');
              }}
              className="px-6 py-3.5 rounded-xl bg-white/5 border border-white/15 hover:bg-white/10 text-white font-heading text-xs font-bold tracking-wider flex items-center space-x-2 transition-all hover:scale-105 active:scale-95"
            >
              <Play className="w-4 h-4 text-[#e5101a] fill-[#e5101a]" />
              <span>WATCH SHOWREEL</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. MISSION & VISION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#090e1a] border border-white/10 hover:border-[#e5101a]/50 transition-all space-y-4 relative overflow-hidden group shadow-xl">
            <div className="w-14 h-14 rounded-2xl bg-[#e5101a]/15 border border-[#e5101a]/40 flex items-center justify-center text-[#e5101a] group-hover:scale-110 transition-transform">
              <Target className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-heading font-extrabold text-white">Our Mission</h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-body">
              To empower stories with state-of-the-art technology and uncompromising creativity. We transform ideas into breathtaking visuals that capture audiences and set new benchmarks in the world of entertainment.
            </p>
          </div>

          {/* Vision Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#090e1a] border border-white/10 hover:border-[#e5101a]/50 transition-all space-y-4 relative overflow-hidden group shadow-xl">
            <div className="w-14 h-14 rounded-2xl bg-[#e5101a]/15 border border-[#e5101a]/40 flex items-center justify-center text-[#e5101a] group-hover:scale-110 transition-transform">
              <Eye className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-heading font-extrabold text-white">Our Vision</h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-body">
              To redefine the boundaries of visual experiences through innovation, collaboration, and a relentless pursuit of perfection. We envision a future where imagination meets technology seamlessly, inspiring the world.
            </p>
          </div>
        </div>
      </section>

      {/* 3. EVOLUTIONARY ROADMAP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono text-[#e5101a] font-bold uppercase tracking-widest">
            OUR JOURNEY
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white">
            Evolutionary Roadmap
          </h2>
          <p className="text-xs sm:text-sm text-gray-400">
            A decade of pushing pixels and redefining limits.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {roadmapSteps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#090e1a] border border-white/10 hover:border-[#e5101a]/50 transition-all space-y-4 relative group shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-heading font-extrabold text-[#e5101a]">
                    {step.year}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#e5101a]/10 border border-[#e5101a]/30 flex items-center justify-center text-[#e5101a]">
                    <step.icon className="w-5 h-5" />
                  </div>
                </div>
                <h4 className="font-heading font-bold text-white text-base group-hover:text-[#e5101a] transition-colors">
                  {step.title}
                </h4>
                <p className="text-xs text-gray-300 mt-2 leading-relaxed font-body">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. LEADERSHIP (VISIONARIES BEHIND THE MAGIC) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono text-[#e5101a] font-bold uppercase tracking-widest">
            LEADERSHIP
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white">
            Visionaries Behind the Magic
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 max-w-2xl mx-auto">
            Meet the leaders driving creative excellence, operations, and technical innovation at Right Time FX Studio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="group rounded-2xl bg-[#090e1a] border border-white/10 hover:border-[#e5101a]/70 overflow-hidden transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-red-600/20 flex flex-col justify-between"
            >
              {/* Photo Box */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#070c17]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#090e1a] to-transparent pointer-events-none" />
              </div>

              {/* Text Info Box */}
              <div className="p-6 bg-[#090e1a] border-t border-[#e5101a]/30 flex flex-col justify-between flex-1 space-y-4">
                <div>
                  <span className="inline-block px-2.5 py-1 rounded-md bg-[#e5101a]/15 border border-[#e5101a]/40 text-[#e5101a] text-[11px] font-mono font-bold uppercase tracking-wider mb-2">
                    {member.role}
                  </span>
                  <h3 className="font-heading font-extrabold text-white text-xl group-hover:text-[#e5101a] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed font-body mt-2">
                    {member.bio}
                  </p>
                </div>

                {/* Social Contact Buttons */}
                <div className="pt-3 flex items-center space-x-2 border-t border-white/10">
                  {member.socials.linkedin && (
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn"
                      className="p-2.5 rounded-xl bg-white/5 hover:bg-[#e5101a] text-gray-300 hover:text-white transition-all shadow-md"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {member.socials.email && (
                    <a
                      href={member.socials.email}
                      aria-label="Email"
                      className="p-2.5 rounded-xl bg-white/5 hover:bg-[#e5101a] text-gray-300 hover:text-white transition-all shadow-md flex items-center space-x-1.5 text-xs font-mono"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Contact</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. GLOBAL PRESENCE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#090e1a] border border-white/10 relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono text-[#e5101a] font-bold uppercase tracking-widest">
              GLOBAL PRESENCE
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white">
              Global Reach, Local Soul.
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-body">
              From our roots in India to our clients around the world, we collaborate across borders to create visual masterpieces.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
              <div>
                <span className="text-2xl sm:text-3xl font-heading font-extrabold text-[#e5101a] block">
                  20+
                </span>
                <span className="text-[11px] font-mono text-gray-400 uppercase">Countries</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-heading font-extrabold text-[#e5101a] block">
                  100+
                </span>
                <span className="text-[11px] font-mono text-gray-400 uppercase">Global Clients</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-heading font-extrabold text-[#e5101a] block">
                  500+
                </span>
                <span className="text-[11px] font-mono text-gray-400 uppercase">Projects Delivered</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="p-6 rounded-2xl bg-[#050811] border border-white/10 relative overflow-hidden space-y-4">
              <div className="flex items-center space-x-2 text-white font-heading text-xs font-bold uppercase">
                <MapPin className="w-4 h-4 text-[#e5101a]" />
                <span>STUDIO HEADQUARTERS</span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed font-body">
                Mondal Building 4th Floor, Dakbanglow-Moyna Rd, Sudampur, Balaipanda Bazar, Moyna, Purba Medinipur, West Bengal 721644, India
              </p>
              <div className="p-3 rounded-xl bg-[#e5101a]/15 border border-[#e5101a]/40 text-xs text-[#e5101a] font-mono font-bold flex items-center justify-between">
                <span>HEAD OFFICE: West Bengal, India</span>
                <span className="w-2 h-2 rounded-full bg-[#e5101a] animate-ping" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CORE VALUES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((val, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#090e1a] border border-white/10 hover:border-[#e5101a]/50 transition-all space-y-3 shadow-lg group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#e5101a]/15 border border-[#e5101a]/40 flex items-center justify-center text-[#e5101a] group-hover:scale-110 transition-transform">
                <val.icon className="w-6 h-6" />
              </div>
              <h4 className="font-heading font-bold text-white text-base group-hover:text-[#e5101a] transition-colors">
                {val.title}
              </h4>
              <p className="text-xs text-gray-300 leading-relaxed font-body">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. STUDIO PULSE / GALLERY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono text-[#e5101a] font-bold uppercase tracking-widest">
            STUDIO PULSE
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white">
            Where Creativity Meets Craftsmanship.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl overflow-hidden border border-white/10 aspect-video relative group">
            <img
              src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80"
              alt="VFX Artist at Work"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10 aspect-video relative group">
            <img
              src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=800&q=80"
              alt="CGI Production Studio"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#e5101a]/20 via-[#090e1a] to-[#050811] border border-[#e5101a]/40 flex flex-col justify-between shadow-xl">
            <div>
              <span className="text-[10px] font-mono text-[#e5101a] bg-[#e5101a]/20 px-2.5 py-1 rounded uppercase font-bold border border-[#e5101a]/30">
                INSIDE OUR WORLD
              </span>
              <h4 className="font-heading font-bold text-white text-lg mt-3">
                Glimpses of passion, people, and progress.
              </h4>
            </div>
            <button
              onClick={() => onNavigate('portfolio')}
              className="mt-6 px-4 py-2.5 rounded-xl bg-[#e5101a] hover:bg-[#c00010] text-white text-xs font-heading font-bold flex items-center justify-between transition-all shadow-md shadow-red-600/30 hover:scale-[1.02]"
            >
              <span>VIEW SHOWCASE GALLERY</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 8. CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-red-950/90 via-[#0d1424] to-[#050811] border border-[#e5101a]/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
              Ready to define the next frame?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 max-w-xl font-body">
              Whether you're looking for a world-class VFX partner or your next career-defining role, the time is right.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate('get-quote')}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#e5101a] via-rose-600 to-[#c00010] text-white font-heading font-bold text-xs tracking-wider hover:from-[#f01c26] hover:to-[#a0000d] transition-all shadow-lg shadow-red-600/30 hover:scale-105 active:scale-95"
            >
              START A PROJECT
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-heading font-bold text-xs tracking-wider transition-all hover:scale-105 active:scale-95"
            >
              EXPLORE CAREERS
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

