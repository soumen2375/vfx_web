import React, { useEffect } from 'react';
import { PageId } from '../types';
import { SERVICES_DATA, BLOG_POSTS, CASE_STUDIES_DATA } from '../data/mockData';
import {
  STUDIO_BASE_URL,
  getOrganizationSchema,
  getWebSiteSchema,
  getServiceSchema,
  getFaqSchema,
  getBreadcrumbSchema,
  getArticleSchema
} from '../utils/seoSchemas';

interface SEOHeadProps {
  currentPage: PageId;
  detailId?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({ currentPage, detailId }) => {
  useEffect(() => {
    let title = 'Right Time FX Studio | Leading VFX Outsourcing Studio in India';
    let description = 'Right Time FX Studio is the premier VFX Outsourcing Studio in India providing Rotoscoping, Matchmove, Paint Cleanup, 3D Animation, CGI, and Compositing for global feature films & TV.';
    let keywords = 'VFX Outsourcing, VFX Company India, Rotoscoping Services, Matchmove Studio, Paint Cleanup, 3D Animation, CGI Studio, Compositing Services, Right Time FX';
    let canonicalUrl = `${STUDIO_BASE_URL}/`;
    let ogImage = `${STUDIO_BASE_URL}/android-chrome-512x512.png`;
    let schemas: object[] = [getOrganizationSchema(), getWebSiteSchema()];

    switch (currentPage) {
      case 'home':
        title = 'Right Time FX Studio | Leading VFX Outsourcing Studio in India';
        description = 'Top-rated VFX outsourcing partner for Hollywood, Bollywood & streaming studios. Expert Rotoscoping, Matchmove, Paint Cleanup, CGI, and Compositing with 99.9% on-time delivery.';
        canonicalUrl = `${STUDIO_BASE_URL}/`;
        schemas.push(getBreadcrumbSchema([{ name: 'Home', url: `${STUDIO_BASE_URL}/` }]));
        break;

      case 'about':
        title = 'About Us | Right Time FX Studio - Premiere Indian VFX Company';
        description = 'Discover Right Time FX Studio, India’s top VFX outsourcing hub with 250+ artists delivering Hollywood-grade rotoscoping, camera tracking, and CGI for feature films.';
        canonicalUrl = `${STUDIO_BASE_URL}/about`;
        keywords = 'About Right Time FX, VFX Studio India, RIK NOVA TECHNOLOGY, VFX Team, Rotoscoping Artists';
        schemas.push(getBreadcrumbSchema([
          { name: 'Home', url: `${STUDIO_BASE_URL}/` },
          { name: 'About Us', url: `${STUDIO_BASE_URL}/about` }
        ]));
        break;

      case 'services': {
        const activeService = detailId ? SERVICES_DATA.find(s => s.id === detailId) : undefined;
        if (activeService) {
          title = `${activeService.title} Services | Right Time FX Studio India`;
          description = `${activeService.shortDesc} ISO & TPN compliant visual effects outsourcing.`;
          canonicalUrl = `${STUDIO_BASE_URL}/services/${activeService.id}`;
          ogImage = activeService.image;
          schemas.push(getServiceSchema({
            name: activeService.title,
            description: activeService.fullDesc,
            serviceType: activeService.category,
            url: canonicalUrl
          }));
          if (activeService.faqs && activeService.faqs.length > 0) {
            schemas.push(getFaqSchema(activeService.faqs));
          }
          schemas.push(getBreadcrumbSchema([
            { name: 'Home', url: `${STUDIO_BASE_URL}/` },
            { name: 'Services', url: `${STUDIO_BASE_URL}/services` },
            { name: activeService.title, url: canonicalUrl }
          ]));
        } else {
          title = 'VFX Services | Rotoscoping, Matchmove, Paint & CGI Studio';
          description = 'Comprehensive VFX production services including Rotoscoping, Camera Tracking, Digital Cleanup, 3D Animation, Hard-Surface CGI, and Nuke Compositing.';
          canonicalUrl = `${STUDIO_BASE_URL}/services`;
          schemas.push(getBreadcrumbSchema([
            { name: 'Home', url: `${STUDIO_BASE_URL}/` },
            { name: 'Services', url: `${STUDIO_BASE_URL}/services` }
          ]));
        }
        break;
      }

      case 'portfolio':
        title = 'VFX Portfolio & Showreel | Right Time FX Studio';
        description = 'Explore before-and-after VFX breakdowns across feature films, sci-fi series, commercial ads, and creature animation executed by Right Time FX Studio.';
        canonicalUrl = `${STUDIO_BASE_URL}/portfolio`;
        schemas.push(getBreadcrumbSchema([
          { name: 'Home', url: `${STUDIO_BASE_URL}/` },
          { name: 'Portfolio', url: `${STUDIO_BASE_URL}/portfolio` }
        ]));
        break;

      case 'case-studies': {
        const activeCase = detailId ? CASE_STUDIES_DATA.find(c => c.id === detailId) : undefined;
        if (activeCase) {
          title = `${activeCase.title} Case Study | Right Time FX Studio`;
          description = `Technical breakdown of ${activeCase.title}. ${activeCase.subtitle}`;
          canonicalUrl = `${STUDIO_BASE_URL}/case-studies/${activeCase.id}`;
          ogImage = activeCase.heroImage;
        } else {
          title = 'VFX Production Case Studies | Right Time FX Studio';
          description = 'In-depth case studies showcasing how our studio solved complex rotoscoping, creature FX, and 3D camera tracking challenges for global film clients.';
          canonicalUrl = `${STUDIO_BASE_URL}/case-studies`;
        }
        schemas.push(getBreadcrumbSchema([
          { name: 'Home', url: `${STUDIO_BASE_URL}/` },
          { name: 'Case Studies', url: canonicalUrl }
        ]));
        break;
      }

      case 'blog': {
        const activeBlog = detailId ? BLOG_POSTS.find(b => b.id === detailId) : undefined;
        if (activeBlog) {
          title = `${activeBlog.title} | Right Time FX VFX Insights`;
          description = activeBlog.excerpt;
          canonicalUrl = `${STUDIO_BASE_URL}/blog/${activeBlog.id}`;
          ogImage = activeBlog.image;
          schemas.push(getArticleSchema({
            title: activeBlog.title,
            description: activeBlog.excerpt,
            url: canonicalUrl,
            imageUrl: activeBlog.image,
            datePublished: activeBlog.date,
            authorName: activeBlog.author.name
          }));
          schemas.push(getBreadcrumbSchema([
            { name: 'Home', url: `${STUDIO_BASE_URL}/` },
            { name: 'Blog', url: `${STUDIO_BASE_URL}/blog` },
            { name: activeBlog.title, url: canonicalUrl }
          ]));
        } else {
          title = 'VFX Blog & Industry Technical Guides | Right Time FX';
          description = 'Expert visual effects tutorials, Rotoscoping deep-dives, Nuke compositing tips, matchmove workflows, and CGI trends from industry veterans.';
          canonicalUrl = `${STUDIO_BASE_URL}/blog`;
          schemas.push(getBreadcrumbSchema([
            { name: 'Home', url: `${STUDIO_BASE_URL}/` },
            { name: 'Blog', url: `${STUDIO_BASE_URL}/blog` }
          ]));
        }
        break;
      }

      case 'faq':
        title = 'Frequently Asked Questions (FAQ) | Right Time FX Studio';
        description = 'Get fast answers regarding VFX outsourcing rates, turnaround times, security protocols (TPN), turnaround capacity, and client communication workflows.';
        canonicalUrl = `${STUDIO_BASE_URL}/faq`;
        schemas.push(getFaqSchema([
          {
            question: 'What is Right Time FX Studio?',
            answer: 'Right Time FX Studio is a premier VFX outsourcing studio in India offering Rotoscoping, Matchmove, Paint & Cleanup, 3D Animation, CGI, and Compositing services.'
          },
          {
            question: 'How do I submit shots for a project quote?',
            answer: 'You can submit your shot breakdown and plate specifications directly through our Get Quote portal or by emailing contact@righttimefx.com.'
          },
          {
            question: 'Are your studio facilities TPN and ISO security compliant?',
            answer: 'Yes, our infrastructure strictly enforces TPN (Trusted Partner Network) security standards with air-gapped workstations and encrypted data transfers.'
          }
        ]));
        schemas.push(getBreadcrumbSchema([
          { name: 'Home', url: `${STUDIO_BASE_URL}/` },
          { name: 'FAQ', url: `${STUDIO_BASE_URL}/faq` }
        ]));
        break;

      case 'contact':
        title = 'Contact Us | Right Time FX Studio - Start Your VFX Project';
        description = 'Contact Right Time FX Studio for production inquiries, shot quotas, test shots, and partnership opportunities. Direct studio helpline: +91-8509587525.';
        canonicalUrl = `${STUDIO_BASE_URL}/contact`;
        schemas.push(getBreadcrumbSchema([
          { name: 'Home', url: `${STUDIO_BASE_URL}/` },
          { name: 'Contact Us', url: `${STUDIO_BASE_URL}/contact` }
        ]));
        break;

      case 'get-quote':
        title = 'Get Instant VFX Quote | Right Time FX Studio India';
        description = 'Calculate estimated budget and turnaround time for Rotoscoping, Matchmove, Paint Cleanup, and 3D CGI shots. Instant quote calculator.';
        canonicalUrl = `${STUDIO_BASE_URL}/get-quote`;
        schemas.push(getBreadcrumbSchema([
          { name: 'Home', url: `${STUDIO_BASE_URL}/` },
          { name: 'Get Quote', url: `${STUDIO_BASE_URL}/get-quote` }
        ]));
        break;

      default:
        title = 'Right Time FX Studio | Leading VFX Outsourcing Studio in India';
        description = 'Premier Visual Effects, CGI, 3D Animation, Virtual Production and Post-Production studio.';
        canonicalUrl = `${STUDIO_BASE_URL}/`;
    }

    // Update document title
    document.title = title;

    // Helper function to set meta attribute
    const setMetaTag = (selector: string, attrName: string, attrVal: string, contentVal: string) => {
      let element = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute('content', contentVal);
    };

    // Standard Meta Tags
    setMetaTag('meta[name="description"]', 'name', 'description', description);
    setMetaTag('meta[name="keywords"]', 'name', 'keywords', keywords);

    // Open Graph Tags
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', title);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    setMetaTag('meta[property="og:image"]', 'property', 'og:image', ogImage);
    setMetaTag('meta[property="og:type"]', 'property', 'og:type', 'website');

    // Twitter Card Tags
    setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', ogImage);

    // Canonical Tag
    let canonicalLink = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // Dynamic Schema injection
    let schemaScript = document.head.querySelector('script[data-type="dynamic-seo-schema"]') as HTMLScriptElement | null;
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.setAttribute('type', 'application/ld+json');
      schemaScript.setAttribute('data-type', 'dynamic-seo-schema');
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(schemas);

  }, [currentPage, detailId]);

  return null;
};
