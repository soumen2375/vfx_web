import React, { useState, useEffect } from 'react';
import { Search, FileText, ArrowRight, Calendar, Clock, User, X, CheckCircle } from 'lucide-react';
import { PageId, BlogPost } from '../types';
import { BLOG_POSTS } from '../data/mockData';

interface BlogPageProps {
  initialArticleId?: string;
  onNavigate: (page: PageId, id?: string) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ initialArticleId, onNavigate }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    if (initialArticleId) {
      const match = BLOG_POSTS.find(b => b.id === initialArticleId);
      if (match) setSelectedPost(match);
    }
  }, [initialArticleId]);

  const categories = ['All', 'Pipeline & Tech', 'Virtual Production', 'AI in VFX', 'Behind The Scenes'];

  const filteredPosts = BLOG_POSTS.filter(p => {
    const matchesCat = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section className="relative py-16 border-b border-white/10 bg-gradient-to-b from-red-950/40 via-[#0B0E17] to-[#0B0E17]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-mono text-red-500 tracking-widest uppercase font-bold">TECHNICAL PAPERS & INDUSTRY INSIGHTS</span>
          <h1 className="text-4xl sm:text-6xl font-heading font-extrabold text-white mt-3 leading-tight">
            Right Time FX <br />
            <span className="text-red-500 drop-shadow-[0_4px_20px_rgba(220,38,38,0.4)]">
              Blog & Tech Insights
            </span>
          </h1>
          <p className="mt-4 text-gray-200 max-w-2xl mx-auto text-sm sm:text-base">
            In-depth insights into rotoscoping, matchmove, compositing pipelines, Houdini FX simulations, and AI-assisted production workflows.
          </p>

          {/* Search Bar */}
          <div className="mt-8 max-w-md mx-auto relative">
            <Search className="absolute left-4 top-3.5 w-4 h-4 text-red-400" />
            <input
              type="text"
              placeholder="Search articles by keyword or tech..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full bg-[#121723] border border-white/10 rounded-full pl-11 pr-4 py-3 text-xs text-white placeholder-gray-500 outline-none focus:border-red-500/50"
            />
          </div>

          {/* Category Filter Tabs */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full font-heading text-xs font-bold transition-all ${
                  selectedCategory === cat
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

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <div
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="group bg-[#121723] rounded-2xl overflow-hidden border border-white/10 hover:border-red-500/50 cursor-pointer transition-all hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-52 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <span className="absolute top-3 left-3 text-[10px] font-mono text-red-400 font-bold bg-black/80 backdrop-blur-md px-2.5 py-1 rounded uppercase border border-red-500/40">
                    {post.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-3 text-xs text-gray-400 font-mono mb-2">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-white group-hover:text-red-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-gray-300 mt-2 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between border-t border-white/5 mt-4 text-xs">
                <div className="flex items-center space-x-2">
                  <img src={post.author.avatar} alt={post.author.name} className="w-6 h-6 rounded-full object-cover" />
                  <span className="text-gray-300 font-medium">{post.author.name}</span>
                </div>
                <span className="text-red-400 font-heading font-bold flex items-center gap-1">
                  Read <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-red-950/80 via-[#18101C] to-[#0B0E17] border border-red-500/40 text-center space-y-4">
          <span className="text-xs font-mono text-red-400 font-bold uppercase tracking-widest">STAY AHEAD OF VFX INNOVATION</span>
          <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">Subscribe to Right Time FX Dispatch</h3>
          <p className="text-xs text-gray-300 max-w-lg mx-auto">
            Get technical insights on roto/prep pipelines, Houdini simulations, and ACES color workflows delivered to your inbox.
          </p>

          {subscribed ? (
            <div className="p-4 bg-red-950/80 border border-red-500/40 rounded-xl text-xs text-red-300 inline-flex items-center space-x-2 font-mono">
              <CheckCircle className="w-4 h-4 text-red-400 shrink-0" />
              <span>Subscribed! Thank you for joining our insider list.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex gap-2">
              <input
                type="email"
                required
                placeholder="supervisor@studio.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 outline-none focus:border-red-500/50"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 text-white font-heading text-xs font-bold rounded-xl shadow-lg shadow-red-600/30 transition-all shrink-0"
              >
                SUBSCRIBE
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FULL ARTICLE MODAL */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-fadeIn overflow-y-auto">
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#121723] border border-red-500/30 rounded-2xl shadow-2xl overflow-y-auto">
            <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-[#0B0E17]/95 backdrop-blur-md border-b border-white/10">
              <span className="text-xs font-mono text-red-400 font-bold uppercase">RIGHT TIME FX ARTICLE</span>
              <button onClick={() => setSelectedPost(null)} className="p-1 text-gray-400 hover:text-white rounded-lg hover:bg-white/10">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 sm:p-10 space-y-6">
              <div className="relative rounded-xl overflow-hidden h-72 border border-white/10">
                <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-full object-cover" />
              </div>

              <div>
                <span className="text-xs font-mono text-red-400 font-bold uppercase bg-red-950 px-3 py-1 rounded border border-red-500/30">
                  {selectedPost.category}
                </span>
                <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-white mt-3">{selectedPost.title}</h1>
                <div className="flex items-center space-x-4 text-xs text-gray-400 font-mono mt-2">
                  <span>By {selectedPost.author.name} ({selectedPost.author.role})</span>
                  <span>•</span>
                  <span>{selectedPost.date}</span>
                </div>
              </div>

              <div className="text-gray-300 text-xs sm:text-sm leading-relaxed whitespace-pre-line border-t border-white/10 pt-6 font-body">
                {selectedPost.content}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
