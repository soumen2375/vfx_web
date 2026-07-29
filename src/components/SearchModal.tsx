import React, { useState } from 'react';
import { Search, X, Layers, Film, FileText, ArrowRight } from 'lucide-react';
import { SERVICES_DATA, PORTFOLIO_DATA, BLOG_POSTS, CASE_STUDIES_DATA } from '../data/mockData';
import { PageId } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: PageId, id?: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filteredServices = SERVICES_DATA.filter(
    s => s.title.toLowerCase().includes(query.toLowerCase()) || s.shortDesc.toLowerCase().includes(query.toLowerCase())
  );

  const filteredPortfolio = PORTFOLIO_DATA.filter(
    p => p.title.toLowerCase().includes(query.toLowerCase()) || p.client.toLowerCase().includes(query.toLowerCase())
  );

  const filteredBlogs = BLOG_POSTS.filter(
    b => b.title.toLowerCase().includes(query.toLowerCase()) || b.excerpt.toLowerCase().includes(query.toLowerCase())
  );

  const filteredCases = CASE_STUDIES_DATA.filter(
    c => c.title.toLowerCase().includes(query.toLowerCase()) || c.subtitle.toLowerCase().includes(query.toLowerCase())
  );

  const totalResults = filteredServices.length + filteredPortfolio.length + filteredBlogs.length + filteredCases.length;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-[#141E30] border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
        {/* Search Input Bar */}
        <div className="flex items-center px-6 py-4 border-b border-white/10 bg-[#0B1220]/80">
          <Search className="w-5 h-5 text-cyan-400 mr-3" />
          <input
            type="text"
            autoFocus
            placeholder="Search services, portfolio projects, case studies, articles..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="w-full bg-transparent text-white placeholder-gray-500 font-body outline-none text-base"
          />
          {query && (
            <button onClick={() => setQuery('')} className="mr-2 text-gray-400 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2.5 py-1 text-xs font-heading font-semibold bg-white/10 text-gray-300 rounded hover:bg-white/20 transition-colors"
          >
            ESC
          </button>
        </div>

        {/* Search Results Container */}
        <div className="max-h-[60vh] overflow-y-auto p-6 space-y-6">
          {query.trim() === '' ? (
            <div className="text-center py-10 text-gray-400 text-sm">
              <p className="mb-2">Type to search across all studio services, projects, and articles...</p>
              <div className="flex justify-center gap-2 flex-wrap text-xs text-cyan-400 mt-4">
                {['VFX Compositing', '3D Creatures', 'Virtual Production', 'Color Grading', 'Unreal 5'].map(term => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 hover:border-cyan-400 transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : totalResults === 0 ? (
            <div className="text-center py-12 text-gray-400 text-sm">
              No results found for "<span className="text-white">{query}</span>". Try another search term.
            </div>
          ) : (
            <>
              {/* Services Results */}
              {filteredServices.length > 0 && (
                <div>
                  <div className="flex items-center space-x-2 text-xs font-heading text-cyan-400 tracking-wider mb-3">
                    <Layers className="w-4 h-4" />
                    <span>SERVICES ({filteredServices.length})</span>
                  </div>
                  <div className="space-y-2">
                    {filteredServices.slice(0, 3).map(s => (
                      <div
                        key={s.id}
                        onClick={() => {
                          onNavigate('services', s.id);
                          onClose();
                        }}
                        className="p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-cyan-500/30 flex items-center justify-between cursor-pointer group transition-all"
                      >
                        <div>
                          <h4 className="text-white font-medium text-sm group-hover:text-cyan-400 transition-colors">
                            {s.title}
                          </h4>
                          <p className="text-xs text-gray-400 line-clamp-1">{s.shortDesc}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors shrink-0 ml-2" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Portfolio Results */}
              {filteredPortfolio.length > 0 && (
                <div>
                  <div className="flex items-center space-x-2 text-xs font-heading text-blue-400 tracking-wider mb-3">
                    <Film className="w-4 h-4" />
                    <span>PORTFOLIO PROJECTS ({filteredPortfolio.length})</span>
                  </div>
                  <div className="space-y-2">
                    {filteredPortfolio.slice(0, 3).map(p => (
                      <div
                        key={p.id}
                        onClick={() => {
                          onNavigate('portfolio', p.id);
                          onClose();
                        }}
                        className="p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-blue-500/30 flex items-center justify-between cursor-pointer group transition-all"
                      >
                        <div className="flex items-center space-x-3">
                          <img src={p.coverImage} alt={p.title} className="w-10 h-10 rounded object-cover" />
                          <div>
                            <h4 className="text-white font-medium text-sm group-hover:text-blue-400 transition-colors">
                              {p.title}
                            </h4>
                            <p className="text-xs text-gray-400">{p.client} • {p.category}</p>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-blue-400 transition-colors shrink-0 ml-2" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Case Studies */}
              {filteredCases.length > 0 && (
                <div>
                  <div className="flex items-center space-x-2 text-xs font-heading text-purple-400 tracking-wider mb-3">
                    <FileText className="w-4 h-4" />
                    <span>CASE STUDIES ({filteredCases.length})</span>
                  </div>
                  <div className="space-y-2">
                    {filteredCases.map(c => (
                      <div
                        key={c.id}
                        onClick={() => {
                          onNavigate('case-studies', c.id);
                          onClose();
                        }}
                        className="p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-purple-500/30 flex items-center justify-between cursor-pointer group transition-all"
                      >
                        <div>
                          <h4 className="text-white font-medium text-sm group-hover:text-purple-400 transition-colors">
                            {c.title}
                          </h4>
                          <p className="text-xs text-gray-400 line-clamp-1">{c.subtitle}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-purple-400 transition-colors shrink-0 ml-2" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Blog Posts */}
              {filteredBlogs.length > 0 && (
                <div>
                  <div className="flex items-center space-x-2 text-xs font-heading text-emerald-400 tracking-wider mb-3">
                    <FileText className="w-4 h-4" />
                    <span>ARTICLES & INSIGHTS ({filteredBlogs.length})</span>
                  </div>
                  <div className="space-y-2">
                    {filteredBlogs.map(b => (
                      <div
                        key={b.id}
                        onClick={() => {
                          onNavigate('blog', b.id);
                          onClose();
                        }}
                        className="p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-emerald-500/30 flex items-center justify-between cursor-pointer group transition-all"
                      >
                        <div>
                          <h4 className="text-white font-medium text-sm group-hover:text-emerald-400 transition-colors">
                            {b.title}
                          </h4>
                          <p className="text-xs text-gray-400">{b.category} • {b.date}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-emerald-400 transition-colors shrink-0 ml-2" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
