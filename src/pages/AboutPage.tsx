import React from 'react';
import { Sparkles, Award, Shield, Users, Globe2, Cpu, CheckCircle, ArrowRight, Mail, Phone } from 'lucide-react';
import { PageId } from '../types';
import { STUDIO_INFO, TEAM_MEMBERS } from '../data/mockData';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-20 pb-16">
      {/* Hero Banner */}
      <section className="relative py-20 border-b border-white/10 bg-gradient-to-b from-red-950/40 via-[#0B0E17] to-[#0B0E17]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl font-heading font-extrabold text-white mt-3 leading-tight">
            About <span className="text-red-500">Right Time FX Studio</span>
          </h1>
          <p className="mt-6 text-gray-200 max-w-4xl mx-auto text-base sm:text-lg leading-relaxed font-body">
            As a premier VFX outsourcing studio, we blend talent and technology to craft stunning visual experiences across films, episodic, advertising, and more.
          </p>
        </div>
      </section>

      {/* Main About Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-500/40 text-red-400 text-xs font-mono uppercase">
              <Sparkles className="w-3.5 h-3.5 text-red-500" />
              <span>WHO WE ARE</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white leading-tight">
              As the Leading VFX Outsourcing Studios in India
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed font-body">
              <p className="p-4 rounded-xl bg-white/5 border-l-4 border-red-500">
                We blend talent and technology to craft stunning visual experiences across films, episodic, advertising, and more.
              </p>
              <p>
                Our team of passionate artists and technologists pushes the boundaries of creativity, delivering visual effects that inspire and engage.
              </p>
              <p>
                Every project is executed through structured post-production workflows focused on quality and consistency.
              </p>
            </div>

            {/* Direct Contact Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-red-950/60 to-[#121723] border border-red-500/30 flex flex-wrap items-center justify-between gap-4 mt-6">
              <div>
                <span className="text-[10px] font-mono text-red-400 uppercase tracking-widest block">DIRECT STUDIO CONTACT</span>
                <span className="text-sm font-heading font-bold text-white">Soumadip Dinda • Right Time FX Studio</span>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
                <a href="mailto:soumadipdinda18@gmail.com" className="px-3.5 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold flex items-center gap-2 transition-all">
                  <Mail className="w-4 h-4" />
                  <span>soumadipdinda18@gmail.com</span>
                </a>
                <a href="tel:+917319574918" className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold flex items-center gap-2 transition-all">
                  <Phone className="w-4 h-4 text-red-400" />
                  <span>+91 7319574918</span>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-red-500/30 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1000&q=80"
                alt="Right Time FX Studio Artist at Work"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E17] via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-panel border border-red-500/40">
                <p className="text-xs font-mono text-red-400 font-bold">POST-PRODUCTION WORKFLOWS</p>
                <p className="text-sm font-heading font-bold text-white mt-1">Structured Execution • Uncompromising Quality</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Right Time FX Studio? */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#121723] border border-red-500/20 relative overflow-hidden">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono text-red-500 tracking-widest uppercase font-bold">
              THE RIGHT TIME FX DIFFERENCE
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white mt-2">
              Why Choose Right Time FX Studio?
            </h2>
            <p className="text-base text-gray-300 mt-3 leading-relaxed">
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

      {/* Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-2xl bg-gradient-to-r from-red-950/80 via-[#18101C] to-[#0B0E17] border border-red-500/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <span className="text-xs font-mono text-red-400 uppercase font-bold">READY TO PARTNER?</span>
            <h3 className="text-2xl font-heading font-bold text-white mt-1">Transform Your Project With Right Time FX Studio</h3>
            <p className="text-xs text-gray-300 mt-1">Get in touch for custom outsourcing bids, sequence evaluations, and shot breakdowns.</p>
          </div>
          <button
            onClick={() => onNavigate('get-quote')}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-700 text-white font-heading font-bold text-xs tracking-wider hover:from-red-500 hover:to-rose-600 transition-all shrink-0 shadow-lg shadow-red-600/30"
          >
            REQUEST A QUOTE
          </button>
        </div>
      </section>
    </div>
  );
};

