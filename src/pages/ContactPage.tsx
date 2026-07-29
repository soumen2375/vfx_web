import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { PageId } from '../types';
import { LOCATIONS_DATA } from '../data/mockData';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: 'Feature Film Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section className="relative py-16 border-b border-white/10 bg-gradient-to-b from-red-950/40 via-[#0B0E17] to-[#0B0E17]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl font-heading font-extrabold text-white leading-tight">
            Connect With Our <br />
            <span className="text-red-500 drop-shadow-[0_4px_20px_rgba(220,38,38,0.4)]">
              VFX Producers & Team
            </span>
          </h1>
          <p className="mt-4 text-gray-200 max-w-2xl mx-auto text-sm sm:text-base">
            Whether you are prepping a feature film, television series, commercial campaign, or outsourcing sequence, we are ready to assist.
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Studio Locations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#121723] border border-white/10 shadow-2xl space-y-6">
            <div className="flex items-center space-x-2 text-red-400 font-mono text-xs uppercase font-bold">
              <MessageSquare className="w-4 h-4" />
              <span>SEND A DIRECT INQUIRY</span>
            </div>

            {submitted ? (
              <div className="p-8 bg-red-950/80 border border-red-500/40 rounded-2xl text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-red-400 mx-auto animate-bounce" />
                <h3 className="text-2xl font-heading font-bold text-white">Inquiry Received!</h3>
                <p className="text-xs text-gray-300 max-w-md mx-auto">
                  Thank you, <span className="text-white font-semibold">{formData.name}</span>. A Right Time FX Studio producer will contact you shortly to review your shot specs.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-white/10 text-white font-heading text-xs font-semibold hover:bg-white/20 transition-all mt-4"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Marcus Vance"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#0B0E17] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 outline-none focus:border-red-500/50"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-1">Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="m.vance@studio.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#0B0E17] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 outline-none focus:border-red-500/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-1">Company / Studio</label>
                    <input
                      type="text"
                      placeholder="Studio / Production Company"
                      value={formData.company}
                      onChange={e => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-[#0B0E17] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 outline-none focus:border-red-500/50"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+91 8509587525"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#0B0E17] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 outline-none focus:border-red-500/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-400 mb-1">Inquiry Subject</label>
                  <select
                    value={formData.subject}
                    onChange={e => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-[#0B0E17] border border-white/10 rounded-xl px-4 py-3 text-xs text-white outline-none focus:border-red-500/50"
                  >
                    <option value="Feature Film Inquiry">Feature Film Outsourcing</option>
                    <option value="Episodic Series">Episodic TV Series</option>
                    <option value="Rotoscoping & Paint">Rotoscoping & Clean-Up</option>
                    <option value="3D & Matchmove">3D Animation & Camera Tracking</option>
                    <option value="General Careers">Careers & Vendor Portal</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-400 mb-1">Project Details & Shot Notes *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Provide shot counts, target delivery timeline, key VFX requirements (rotoscoping, matchmove, compositing, paint)..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#0B0E17] border border-white/10 rounded-xl p-4 text-xs text-white placeholder-gray-500 outline-none focus:border-red-500/50"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-red-600 via-rose-700 to-red-800 hover:from-red-500 hover:to-rose-600 text-white font-heading font-bold text-xs tracking-wider flex items-center justify-center space-x-2 shadow-xl shadow-red-600/30 transition-all hover:scale-[1.01]"
                >
                  <Send className="w-4 h-4" />
                  <span>TRANSMIT INQUIRY</span>
                </button>
              </form>
            )}
          </div>

          {/* Studio Hubs Quick Cards & Map Link */}
          <div className="space-y-6">
            <div className="p-8 rounded-3xl bg-[#121723] border border-white/10 space-y-4">
              <span className="text-xs font-mono text-red-400 uppercase font-bold">STUDIO HUB & CONTACTS</span>
              <h3 className="text-2xl font-heading font-bold text-white">Direct Contacts</h3>

              <div className="space-y-4 pt-2">
                {LOCATIONS_DATA.slice(0, 2).map(loc => (
                  <div key={loc.id} className="p-4 rounded-2xl bg-[#0B0E17] border border-white/5 space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-heading font-bold text-white text-sm">{loc.city}, {loc.country}</span>
                      {loc.isHeadquarters && (
                        <span className="text-[10px] font-mono text-red-400 bg-red-950 px-2 py-0.5 rounded border border-red-500/30 font-bold">HQ</span>
                      )}
                    </div>
                    <p className="text-gray-300 flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-red-400 shrink-0" /> {loc.address}</p>
                    <p className="text-gray-300 flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-red-400 shrink-0" /> {loc.phone}</p>
                    <p className="text-gray-300 flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-red-400 shrink-0" /> {loc.email}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
