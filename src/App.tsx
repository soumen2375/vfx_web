import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Breadcrumbs } from './components/Breadcrumbs';
import { SearchModal } from './components/SearchModal';
import { ShowreelModal } from './components/ShowreelModal';
import { LiveChatWidget } from './components/LiveChatWidget';
import { FloatingActions } from './components/FloatingActions';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { BlogPage } from './pages/BlogPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';
import { GetQuotePage } from './pages/GetQuotePage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { RefundPolicyPage } from './pages/RefundPolicyPage';
import { SitemapPage } from './pages/SitemapPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [detailId, setDetailId] = useState<string | undefined>(undefined);
  const [searchOpen, setSearchOpen] = useState(false);
  const [reelOpen, setReelOpen] = useState(false);

  // Scroll to top on page change
  const handleNavigate = (page: PageId, id?: string) => {
    setCurrentPage(page);
    setDetailId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Keyboard shortcut for search (Cmd/Ctrl + K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B1220] text-[#E5E7EB] font-body flex flex-col selection:bg-cyan-500 selection:text-black">
      {/* Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenReel={() => setReelOpen(true)}
      />

      {/* Breadcrumbs Navigation */}
      <Breadcrumbs
        currentPage={currentPage}
        subTitle={detailId}
        onNavigate={handleNavigate}
      />

      {/* Main Page View Renderer */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenReel={() => setReelOpen(true)}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage 
            onNavigate={handleNavigate}
            onOpenReel={() => setReelOpen(true)}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            initialServiceId={detailId}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'portfolio' && (
          <PortfolioPage
            initialProjectId={detailId}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'case-studies' && (
          <CaseStudiesPage
            initialCaseId={detailId}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'blog' && (
          <BlogPage
            initialArticleId={detailId}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'faq' && (
          <FaqPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'contact' && (
          <ContactPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'get-quote' && (
          <GetQuotePage onNavigate={handleNavigate} />
        )}

        {currentPage === 'privacy-policy' && (
          <PrivacyPolicyPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'terms-conditions' && (
          <TermsPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'refund-policy' && (
          <RefundPolicyPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'sitemap' && (
          <SitemapPage
            onNavigate={handleNavigate}
            onOpenReel={() => setReelOpen(true)}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} onOpenReel={() => setReelOpen(true)} />

      {/* Modals & Floating Components */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onNavigate={handleNavigate}
      />

      <ShowreelModal
        isOpen={reelOpen}
        onClose={() => setReelOpen(false)}
      />

      <LiveChatWidget />
      <FloatingActions />
    </div>
  );
}
