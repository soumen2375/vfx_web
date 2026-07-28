import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ShieldAlert, Globe2, MessageSquare, CheckCircle2, Send } from 'lucide-react';
import { PageId } from '../types';
import { LOCATIONS_DATA } from '../data/mockData';

interface ContactDetailsPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactDetailsPage: React.FC<ContactDetailsPageProps> = ({ onNavigate }) => {
  const [selectedLoc, setSelectedLoc] = useState(LOCATIONS_DATA[0]);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section className="relative py-16 border-b border-white/10 bg-gradient-to-b from-red-950/40 via-[#0B0E17] to-[#0B0E17]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-mono text-red-500 tracking-widest uppercase font-bold">STUDIO DETAILS & CONTACTS</span>
          <h1 className="text-4xl sm:text-6xl font-heading font-extrabold text-white mt-3 leading-tight">
            Right Time FX Studio <br />
            <span className="text-red-500 drop-shadow-[0_4px_20px_rgba(220,38,38,0.4)]">
              Direct Contact & Map
            </span>
          </h1>
          <p className="mt-4 text-gray-200 max-w-2xl mx-auto text-sm sm:text-base">
            Dedicated post-production facility equipped for seamless global collaboration.
          </p>

          {/* Location Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {LOCATIONS_DATA.map(loc => (
              <button
                key={loc.id}
                onClick={() => setSelectedLoc(loc)}
                className={`px-5 py-2.5 rounded-xl font-heading text-xs font-bold transition-all ${
                  selectedLoc.id === loc.id
                    ? 'bg-gradient-to-r from-red-600 to-rose-700 text-white shadow-lg shadow-red-600/30'
                    : 'bg-white/5 text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {loc.city}, {loc.country}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Location Card & Simulated Map */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Studio Info Card */}
          <div className="p-8 rounded-3xl bg-[#121723] border border-white/10 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-red-400 font-bold uppercase">STUDIO FACILITY</span>
                <h2 className="text-3xl font-heading font-extrabold text-white">{selectedLoc.city}, {selectedLoc.country}</h2>
              </div>
              {selectedLoc.isHeadquarters && (
                <span className="text-xs font-mono text-red-400 bg-red-950 px-3 py-1 rounded border border-red-500/30 font-bold uppercase">
                  HEADQUARTERS
                </span>
              )}
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-gray-300 pt-2">
              <div className="flex items-start space-x-3 p-3 rounded-xl bg-[#0B0E17] border border-white/5">
                <MapPin className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-gray-500 font-mono block text-[10px]">ADDRESS</span>
                  <span className="text-white font-medium">{selectedLoc.address}</span>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 rounded-xl bg-[#0B0E17] border border-white/5">
                <Phone className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-gray-500 font-mono block text-[10px]">DIRECT PHONE</span>
                  <span className="text-white font-medium">{selectedLoc.phone}</span>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 rounded-xl bg-[#0B0E17] border border-white/5">
                <Mail className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-gray-500 font-mono block text-[10px]">INQUIRIES EMAIL</span>
                  <span className="text-white font-medium">{selectedLoc.email}</span>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 rounded-xl bg-[#0B0E17] border border-white/5">
                <Clock className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-gray-500 font-mono block text-[10px]">STUDIO HOURS</span>
                  <span className="text-white font-medium">{selectedLoc.hours}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Simulated Google Maps View */}
          <div className="relative rounded-3xl overflow-hidden border border-white/10 h-96 bg-[#0B0E17] shadow-2xl flex flex-col items-center justify-center p-6 group">
            <img src={selectedLoc.image} alt={selectedLoc.city} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E17] via-[#0B0E17]/60 to-transparent" />

            <div className="relative z-10 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center mx-auto shadow-xl shadow-red-600/50 animate-bounce">
                <MapPin className="w-6 h-6" />
              </div>
              <h4 className="font-heading font-bold text-white text-xl">{selectedLoc.city} Studio Location</h4>
              <p className="text-xs text-gray-300 font-mono">{selectedLoc.mapCoordinates.lat}° N, {selectedLoc.mapCoordinates.lng}° E</p>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(selectedLoc.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 text-white font-heading text-xs font-bold shadow-lg shadow-red-600/30 transition-all"
              >
                <span>OPEN IN GOOGLE MAPS</span>
                <Globe2 className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact & Producer Hotline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-2xl bg-gradient-to-r from-red-950 via-[#18101C] to-[#0B0E17] border border-red-500/40 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-start space-x-4">
            <ShieldAlert className="w-8 h-8 text-red-500 shrink-0 mt-1" />
            <div>
              <h4 className="font-heading font-bold text-white text-lg">Direct Production Line</h4>
              <p className="text-xs text-gray-300 mt-1">
                For active project updates, sequence delivery emergencies, or shot turnover inquiries: <span className="text-red-400 font-mono font-bold">+91 7319574918</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
