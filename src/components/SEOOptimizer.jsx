import React, { useEffect } from 'react';

const SEOOptimizer = ({ darkMode, portfolioData }) => {
  useEffect(() => {
    // Update document title
    document.title = `${portfolioData.name} - ${portfolioData.title}`;
    
    // Update or create meta tags
    const updateMetaTag = (name, content, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector);
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Basic Meta Tags
    updateMetaTag('description', portfolioData.bio);
    updateMetaTag('keywords', 'Software Engineer, Full Stack Developer, React, Node.js, Machine Learning, Portfolio, Developer, JavaScript, TypeScript, Python, Java');
    updateMetaTag('author', portfolioData.name);
    updateMetaTag('robots', 'index, follow');
    
    // Open Graph Meta Tags
    updateMetaTag('og:title', `${portfolioData.name} - ${portfolioData.title}`, true);
    updateMetaTag('og:description', portfolioData.bio, true);
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:url', window.location.href, true);
    updateMetaTag('og:image', '/jonasptfl.jpg', true);
    updateMetaTag('og:image:alt', `${portfolioData.name} - Portfolio`, true);
    updateMetaTag('og:site_name', `${portfolioData.name} Portfolio`, true);
    
    // Twitter Card Meta Tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', `${portfolioData.name} - ${portfolioData.title}`);
    updateMetaTag('twitter:description', portfolioData.bio);
    updateMetaTag('twitter:image', '/jonasptfl.jpg');
    updateMetaTag('twitter:image:alt', `${portfolioData.name} - Portfolio`);
    
    // Additional Meta Tags
    updateMetaTag('theme-color', darkMode ? "#0f172a" : "#3b82f6");
    updateMetaTag('msapplication-TileColor', darkMode ? "#0f172a" : "#3b82f6");
    
    // Update HTML lang attribute
    document.documentElement.lang = 'en';
    
    // Add canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.href);
    
    // Add preconnect links
    const addPreconnect = (href, crossOrigin = null) => {
      let preconnect = document.querySelector(`link[rel="preconnect"][href="${href}"]`);
      if (!preconnect) {
        preconnect = document.createElement('link');
        preconnect.setAttribute('rel', 'preconnect');
        preconnect.setAttribute('href', href);
        if (crossOrigin) {
          preconnect.setAttribute('crossorigin', crossOrigin);
        }
        document.head.appendChild(preconnect);
      }
    };
    
    addPreconnect('https://fonts.googleapis.com');
    addPreconnect('https://fonts.gstatic.com', 'anonymous');
    
    // Add structured data
    let structuredData = document.querySelector('script[type="application/ld+json"]');
    if (!structuredData) {
      structuredData = document.createElement('script');
      structuredData.setAttribute('type', 'application/ld+json');
      document.head.appendChild(structuredData);
    }
    
    const jsonData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": portfolioData.name,
      "jobTitle": portfolioData.title,
      "description": portfolioData.bio,
      "url": window.location.href,
      "email": portfolioData.email,
      "sameAs": [
        portfolioData.github,
        portfolioData.linkedin
      ],
      "knowsAbout": [
        "JavaScript", "TypeScript", "React", "Node.js", "Python", "Java", 
        "Full Stack Development", "Machine Learning", "Web Development"
      ],
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "Ton Duc Thang University"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ho Chi Minh City",
        "addressCountry": "Vietnam"
      }
    };
    
    structuredData.textContent = JSON.stringify(jsonData);
    
  }, [darkMode, portfolioData]);

  return null; // This component doesn't render anything visible
};

export default SEOOptimizer;