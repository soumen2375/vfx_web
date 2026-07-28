import React, { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('aetheris_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('aetheris_cookie_consent', 'accepted');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-40 max-w-sm p-5 bg-[#141E30]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl text-xs text-gray-300 animate-slideUp">
      <div className="flex items-start justify-between gap-3 mb-2">
        <div className="flex items-center space-x-2 text-cyan-400 font-heading font-semibold">
          <Cookie className="w-4 h-4" />
          <span>COOKIE PREFERENCES</span>
        </div>
        <button onClick={() => setVisible(false)} className="text-gray-400 hover:text-white">
          <X className="w-4 h-4" />
        </button>
      </div>
      <p className="leading-relaxed mb-4 text-gray-400">
        We use essential cookies to optimize showreel video streaming, analyze pipeline analytics, and provide a personalized experience.
      </p>
      <div className="flex items-center space-x-2">
        <button
          onClick={acceptCookies}
          className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-medium rounded-lg shadow-md transition-all text-xs"
        >
          Accept All
        </button>
        <button
          onClick={() => setVisible(false)}
          className="px-3 py-2 bg-white/5 hover:bg-white/10 text-gray-300 rounded-lg transition-colors text-xs"
        >
          Essential Only
        </button>
      </div>
    </div>
  );
};
