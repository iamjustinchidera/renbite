/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Logo } from './Logo';
import { Search, X, Compass } from 'lucide-react';

interface HeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedRole: 'all' | 'customer' | 'restaurant';
  onClearSearch: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  searchQuery,
  setSearchQuery,
  selectedRole,
  onClearSearch,
}) => {
  const suggestions = [
    { label: 'Track Delivery', query: 'track', role: 'customer' },
    { label: 'Refund Policy', query: 'refund', role: 'customer' },
    { label: 'Platform Fees', query: 'commission', role: 'restaurant' },
    { label: 'Weekly Payouts', query: 'payout', role: 'restaurant' },
    { label: 'Menu Updates', query: 'menu', role: 'restaurant' },
    { label: 'Allergies', query: 'allergy', queryLabel: 'allergy', role: 'customer' },
  ];

  return (
    <section className="relative overflow-hidden py-16 sm:py-24 bg-gradient-to-b from-orange-50/40 via-white to-white" id="hero-section">
      {/* Background grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      
      {/* Dynamic light gradient background circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] sm:w-[600px] sm:h-[600px] bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Rounded badge logo wrapper */}
        <div className="mb-6 p-2 bg-white rounded-2xl shadow-md border border-gray-100 flex items-center justify-center animate-bounce-slow" id="hero-logo-badge">
          <Logo className="w-12 h-12" />
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight max-w-2xl" id="hero-title">
          Contact our friendly team
        </h1>
        
        {/* Subtitle */}
        <p className="mt-4 text-lg text-gray-600 max-w-xl font-medium" id="hero-subtitle">
          Let us know how we can help. Search our FAQs, switch between buyer & seller guides, or contact us directly.
        </p>

        {/* Search bar wrapper (iOS Spotlight style) */}
        <div className="mt-8 w-full max-w-xl relative group" id="search-bar-container">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400 group-focus-within:text-brand-500 transition-colors stroke-[2]" />
          </div>
          
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={`Search help for ${
              selectedRole === 'all'
                ? 'customers & restaurant owners'
                : selectedRole === 'customer'
                ? 'ordering food & deliveries'
                : 'managing menus & payouts'
            }...`}
            className="block w-full pl-11 pr-12 py-4 bg-gray-100/90 hover:bg-gray-150/80 focus:bg-white border border-transparent focus:border-brand-500/20 focus:ring-4 focus:ring-brand-500/10 rounded-2xl text-gray-950 placeholder-gray-400 text-base shadow-[0_4px_24px_rgba(0,0,0,0.03)] focus:shadow-[0_12px_36px_rgba(0,0,0,0.06)] transition-all duration-300 font-medium"
            id="faq-search-input"
          />

          {searchQuery && (
            <button
              onClick={onClearSearch}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 cursor-pointer"
              id="clear-search-btn"
              title="Clear search"
            >
              <X className="h-5 w-5 stroke-[2.25]" />
            </button>
          )}
        </div>

        {/* Suggestion tags with iOS capsule pill style */}
        <div className="mt-5 flex flex-wrap justify-center gap-2 max-w-2xl px-2" id="search-suggestions-container">
          <span className="text-xs text-gray-400 flex items-center gap-1 font-bold py-1.5 px-2 tracking-wide">
            <Compass className="w-3.5 h-3.5 text-brand-500 stroke-[2]" />
            POPULAR SEARCHES:
          </span>
          {suggestions.map((sug) => (
            <button
              key={sug.label}
              onClick={() => setSearchQuery(sug.query)}
              className="text-xs font-semibold px-4 py-1.5 rounded-full border border-gray-150 bg-white text-gray-600 hover:text-brand-600 hover:border-brand-500 hover:bg-brand-50 hover:scale-105 active:scale-95 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-md transition-all duration-200 cursor-pointer"
            >
              {sug.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
