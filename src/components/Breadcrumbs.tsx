import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { PageId } from '../types';

interface BreadcrumbsProps {
  currentPage: PageId;
  subTitle?: string;
  onNavigate: (page: PageId) => void;
}

const PAGE_NAMES: Record<PageId, string> = {
  home: 'Home',
  about: 'About Us',
  services: 'Services',
  portfolio: 'Portfolio',
  'case-studies': 'Case Studies',
  blog: 'Blog & Insights',
  faq: 'FAQ',
  contact: 'Contact Us',
  'get-quote': 'Get a Quote',
  'privacy-policy': 'Privacy Policy',
  'terms-conditions': 'Terms & Conditions',
  'refund-policy': 'Refund & Revision Policy',
  sitemap: 'Sitemap'
};

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ currentPage, subTitle, onNavigate }) => {
  if (currentPage === 'home') return null;

  return (
    <nav className="flex items-center space-x-2 text-xs text-gray-400 py-3 px-4 sm:px-8 bg-[#0B1220]/80 border-b border-white/5">
      <button
        onClick={() => onNavigate('home')}
        className="flex items-center space-x-1 hover:text-cyan-400 transition-colors"
      >
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </button>

      <ChevronRight className="w-3.5 h-3.5 text-gray-600" />

      <button
        onClick={() => onNavigate(currentPage)}
        className={`${!subTitle ? 'text-cyan-400 font-medium' : 'hover:text-cyan-400'} transition-colors`}
      >
        {PAGE_NAMES[currentPage] || currentPage}
      </button>

      {subTitle && (
        <>
          <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
          <span className="text-cyan-400 font-medium truncate max-w-[200px] sm:max-w-xs">{subTitle}</span>
        </>
      )}
    </nav>
  );
};
