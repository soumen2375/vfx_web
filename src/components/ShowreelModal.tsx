import React from 'react';
import { X, Play, Volume2, ShieldCheck, Sparkles } from 'lucide-react';

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShowreelModal: React.FC<ShowreelModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-fadeIn">
      <div className="relative w-full max-w-5xl bg-[#141E30] rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0B1220]/80">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-heading font-bold text-white text-lg tracking-wide">
              RIGHT TIME FX STUDIO | OFFICIAL SHOWREEL
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video bg-black flex items-center justify-center group">
          <video
            controls
            autoPlay
            className="w-full h-full object-cover"
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            poster="https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1200&q=80"
          >
            Your browser does not support video tag.
          </video>
        </div>

        {/* Modal Footer info */}
        <div className="p-6 bg-[#0B1220]/60 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-400">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Features 4K HDR Feature Film Shots</span>
            </div>
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>TPN Security Compliant</span>
            </div>
          </div>
          <p>Audio Track: "Cinematic Transcendence" by Right Time FX</p>
        </div>
      </div>
    </div>
  );
};
