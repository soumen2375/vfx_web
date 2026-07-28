import React, { useState, useEffect } from 'react';
import { Film, Play, Award, Sparkles, Filter, X, Calculator, ArrowRight, Layers } from 'lucide-react';
import { PageId, PortfolioItem } from '../types';
import { PORTFOLIO_DATA } from '../data/mockData';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';

interface PortfolioPageProps {
  initialProjectId?: string;
  onNavigate: (page: PageId, id?: string) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ initialProjectId, onNavigate }) => {
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  useEffect(() => {
    if (initialProjectId) {
      const match = PORTFOLIO_DATA.find(p => p.id === initialProjectId);
      if (match) setSelectedProject(match);
    }
  }, [initialProjectId]);

  const categories = ['All', 'Feature Film', 'Episodic TV', 'Commercial', 'Virtual Production', 'CGI & Creatures'];

  const filteredProjects = PORTFOLIO_DATA.filter(p => {
    if (activeCategory === 'All') return true;
    return p.category === activeCategory;
  });

  return (
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section className="relative py-16 border-b border-white/10 bg-gradient-to-b from-red-950/40 via-[#0B0E17] to-[#0B0E17]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-mono text-red-500 tracking-widest uppercase font-bold">RIGHT TIME FX STUDIO SHOWCASE</span>
          <h1 className="text-4xl sm:text-6xl font-heading font-extrabold text-white mt-3 leading-tight">
            Visual Effects & <br />
            <span className="text-red-500 drop-shadow-[0_4px_20px_rgba(220,38,38,0.4)]">
              CGI Portfolio
            </span>
          </h1>
          <p className="mt-4 text-gray-200 max-w-2xl mx-auto text-sm sm:text-base">
            Explore our work across feature films, episodic TV, advertising, rotoscoping, matchmove, and high-end visual effects composites.
          </p>

          {/* Category Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full font-heading text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-red-600 to-rose-700 text-white shadow-lg shadow-red-600/30'
                    : 'bg-white/5 text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(proj => (
            <div
              key={proj.id}
              onClick={() => setSelectedProject(proj)}
              className="group bg-[#121723] rounded-2xl overflow-hidden border border-white/10 hover:border-red-500/50 shadow-xl cursor-pointer transition-all hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 overflow-hidden">
                  <img src={proj.coverImage} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121723] via-transparent to-transparent opacity-80" />
                  
                  <span className="absolute top-3 left-3 text-[10px] font-mono text-red-400 font-bold bg-black/80 backdrop-blur-md px-2.5 py-1 rounded uppercase border border-red-500/40">
                    {proj.category}
                  </span>

                  {proj.awards && proj.awards.length > 0 && (
                    <span className="absolute top-3 right-3 text-[10px] font-mono text-white bg-red-950/90 backdrop-blur-md px-2.5 py-1 rounded flex items-center gap-1 border border-red-500/50 font-bold">
                      <Award className="w-3 h-3 text-red-400" />
                      <span>{proj.awards[0]}</span>
                    </span>
                  )}
                </div>

                <div className="p-6">
                  <span className="text-xs font-mono text-gray-400">{proj.client} • {proj.year}</span>
                  <h3 className="font-heading font-bold text-xl text-white mt-1 group-hover:text-red-400 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-gray-300 mt-2 line-clamp-2 leading-relaxed">
                    {proj.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between text-xs text-red-400 font-heading font-bold">
                <span>View Project Breakdown</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FULLSCREEN PROJECT DETAILS MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-fadeIn overflow-y-auto">
          <div className="relative w-full max-w-5xl max-h-[90vh] bg-[#121723] border border-red-500/30 rounded-2xl shadow-2xl overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-[#0B0E17]/95 backdrop-blur-md border-b border-white/10">
              <div className="flex items-center space-x-2">
                <Film className="w-4 h-4 text-red-400" />
                <span className="text-xs font-mono text-white uppercase tracking-wider font-bold">
                  PROJECT BREAKDOWN • {selectedProject.title}
                </span>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1 text-gray-400 hover:text-white rounded-lg hover:bg-white/10"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-8">
              {/* Interactive Before/After Split Slider or Video Player */}
              {selectedProject.beforeImage && selectedProject.afterImage ? (
                <div>
                  <h4 className="font-heading font-bold text-white text-base mb-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-red-400" />
                    <span>Interactive VFX Comparison (Drag Slider)</span>
                  </h4>
                  <BeforeAfterSlider
                    beforeImage={selectedProject.beforeImage}
                    afterImage={selectedProject.afterImage}
                    beforeLabel="RAW CAMERA PLATE"
                    afterLabel="FINAL VFX COMPOSITE"
                    className="h-[420px]"
                  />
                </div>
              ) : (
                <div className="relative rounded-xl overflow-hidden aspect-video bg-black">
                  <img src={selectedProject.coverImage} alt={selectedProject.title} className="w-full h-full object-cover" />
                </div>
              )}

              {/* Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-xl bg-[#0B0E17] border border-white/5 text-xs">
                <div>
                  <span className="text-gray-500 block font-mono">CLIENT</span>
                  <span className="text-white font-bold">{selectedProject.client}</span>
                </div>
                <div>
                  <span className="text-gray-500 block font-mono">CATEGORY</span>
                  <span className="text-red-400 font-bold">{selectedProject.category}</span>
                </div>
                <div>
                  <span className="text-gray-500 block font-mono">YEAR</span>
                  <span className="text-white font-bold">{selectedProject.year}</span>
                </div>
                <div>
                  <span className="text-gray-500 block font-mono">DIRECTOR</span>
                  <span className="text-white font-bold">{selectedProject.director || 'N/A'}</span>
                </div>
              </div>

              {/* Description & Technical Breakdown */}
              <div className="space-y-4">
                <h4 className="font-heading font-bold text-white text-lg">Project Synopsis</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{selectedProject.description}</p>

                <h4 className="font-heading font-bold text-white text-lg pt-2">VFX Supervisor Breakdown Notes</h4>
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-xs text-gray-300 leading-relaxed font-mono">
                  {selectedProject.breakdownNotes}
                </div>
              </div>

              {/* Software Used */}
              <div>
                <h4 className="font-heading font-bold text-white text-base mb-3">Software & Hardware Rigs</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.softwareUsed.map((sw, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-lg bg-red-950/80 border border-red-500/40 text-xs text-red-300 font-mono font-bold">
                      {sw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project CTA */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-red-950/80 via-[#18101C] to-[#0B0E17] border border-red-500/40 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-heading font-bold text-white text-base">Planning a Similar Production?</h4>
                  <p className="text-xs text-gray-300">Consult with our team for shot breakdowns and day rates.</p>
                </div>
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    onNavigate('get-quote');
                  }}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 text-white font-heading text-xs font-bold flex items-center space-x-2 shrink-0 shadow-lg shadow-red-600/30"
                >
                  <Calculator className="w-4 h-4" />
                  <span>START PROJECT QUOTE</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
