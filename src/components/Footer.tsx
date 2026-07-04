/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Logo } from './Logo';

interface FooterProps {
  onSearchSelect: (query: string) => void;
  onRoleSelect: (role: 'all' | 'customer' | 'restaurant') => void;
  onLegalPageOpen: (page: 'privacy' | 'terms' | 'about') => void;
}

export const Footer: React.FC<FooterProps> = ({ onSearchSelect, onRoleSelect, onLegalPageOpen }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const selectAndScroll = (query: string, role: 'all' | 'customer' | 'restaurant') => {
    onSearchSelect(query);
    onRoleSelect(role);
    document.getElementById('faq-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-gray-100/80" id="app-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        
        {/* Main upper content: Tagline + App badges */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-10 border-b border-gray-100">
          <div className="max-w-xl">
            <Logo showText={true} className="w-8 h-8" />
            <p className="mt-4 text-sm text-gray-500 leading-relaxed font-medium">
              Renbite connects diners with delicious fresh meals from premium local kitchens. Designed and maintained by Compell Solutions LLC to power seamless mobile and restaurant logistics with round-the-clock priority customer support.
            </p>
          </div>
          
          {/* App Store / Google Play Buttons */}
          <div className="flex flex-wrap gap-3.5" id="download-app-badges">
            {/* App Store */}
            <a
              href="https://apps.apple.com/ng/app/renbite/id6764725322"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:-translate-y-0.5 transition-all cursor-pointer block"
            >
              <img 
                src="/appstore.png" 
                alt="Download on the App Store" 
                className="h-[44px] w-auto object-contain" 
              />
            </a>

            {/* Google Play */}
            <a
              href="https://play.google.com/store/apps/details?id=com.restafood.kennygee&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:-translate-y-0.5 transition-all cursor-pointer block"
            >
              <img 
                src="/playstore.png" 
                alt="Get it on Google Play" 
                className="h-[44px] w-auto object-contain" 
              />
            </a>
          </div>
        </div>

        {/* Links Navigation Row */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-between items-start sm:items-center gap-6 py-8">
          <nav className="flex flex-wrap gap-x-6 gap-y-3" id="footer-links-nav">
            <button
              onClick={scrollToTop}
              className="text-sm font-semibold text-gray-500 hover:text-brand-500 transition-colors cursor-pointer"
            >
              Overview
            </button>
            <button
              onClick={() => selectAndScroll('track', 'customer')}
              className="text-sm font-semibold text-gray-500 hover:text-brand-500 transition-colors cursor-pointer"
            >
              Track Deliveries
            </button>
            <button
              onClick={() => selectAndScroll('refund', 'customer')}
              className="text-sm font-semibold text-gray-500 hover:text-brand-500 transition-colors cursor-pointer"
            >
              Refund Policies
            </button>
            <button
              onClick={() => onLegalPageOpen('about')}
              className="text-sm font-semibold text-gray-500 hover:text-brand-500 transition-colors cursor-pointer"
            >
              About Compell Solutions
            </button>
            <button
              onClick={() => onLegalPageOpen('terms')}
              className="text-sm font-semibold text-gray-500 hover:text-brand-500 transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <button
              onClick={() => onLegalPageOpen('privacy')}
              className="text-sm font-semibold text-gray-500 hover:text-brand-500 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
          </nav>
        </div>

        {/* Legal licensing without social icons */}
        <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400 font-semibold text-center sm:text-left">
            © 2026 Renbite. Managed and supported by Compell Solutions LLC. All rights reserved.
          </p>
          <p className="text-[10px] text-gray-300 font-bold uppercase tracking-wider">
            All Systems Secure
          </p>
        </div>

      </div>
    </footer>
  );
};
