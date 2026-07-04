/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FaqItem } from '../types';
import { FAQ_DATA } from '../data';
import {
  ChevronDown,
  User,
  Shield,
  MessagesSquare,
  FileText,
  Truck,
  RotateCcw,
  Utensils,
  CreditCard,
  Gift,
  Clock,
  Store,
  ChefHat,
  Search,
  FilterX,
  Compass,
} from 'lucide-react';

interface FaqSectionProps {
  searchQuery: string;
  selectedRole: 'all' | 'customer' | 'restaurant';
  setSelectedRole: (role: 'all' | 'customer' | 'restaurant') => void;
}

// Map categories to relevant icons
const getCategoryIcon = (category: string) => {
  const c = category.toLowerCase();
  if (c.includes('account') || c.includes('profile')) return User;
  if (c.includes('billing') || c.includes('security') || c.includes('finance')) return CreditCard;
  if (c.includes('feedback') || c.includes('support')) return MessagesSquare;
  if (c.includes('refund') || c.includes('cancel')) return RotateCcw;
  if (c.includes('tracking') || c.includes('delivery') || c.includes('logistics')) return Truck;
  if (c.includes('dietary') || c.includes('allergy')) return Shield;
  if (c.includes('onboarding') || c.includes('registration')) return Store;
  if (c.includes('kitchen') || c.includes('menu')) return ChefHat;
  if (c.includes('marketing') || c.includes('promo') || c.includes('sale')) return Gift;
  return FileText;
};

export const FaqSection: React.FC<FaqSectionProps> = ({
  searchQuery,
  selectedRole,
  setSelectedRole,
}) => {
  const [openId, setOpenId] = useState<string | null>('gen-1'); // Default open first general item
  const [displayCount, setDisplayCount] = useState<number>(6);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleFeedback = (isPositive: boolean) => {
    setToastMessage(isPositive ? "Thanks for your feedback! Glad we could help." : "Thanks for your feedback! We'll work on improving this.");
    setTimeout(() => setToastMessage(null), 3500);
  };

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  // Filter FAQ items based on selected role AND search query
  const filteredFaqs = useMemo(() => {
    return FAQ_DATA.filter((faq) => {
      // Role filter: 'all' matches general questions.
      // If role is customer, show 'all' and 'customer' FAQs.
      // If role is restaurant, show 'all' and 'restaurant' FAQs.
      const matchesRole =
        selectedRole === 'all' ||
        faq.role === 'all' ||
        faq.role === selectedRole;

      if (!matchesRole) return false;

      // Search filter
      if (!searchQuery) return true;

      const q = searchQuery.toLowerCase();
      return (
        faq.question.toLowerCase().includes(q) ||
        faq.answer.toLowerCase().includes(q) ||
        faq.category.toLowerCase().includes(q)
      );
    });
  }, [selectedRole, searchQuery]);

  // Highlight search term
  const highlightText = (text: string, search: string) => {
    if (!search) return <span>{text}</span>;
    
    const parts = text.split(new RegExp(`(${search})`, 'gi'));
    return (
      <span>
        {parts.map((part, i) => {
          const isMatch = part.toLowerCase() === search.toLowerCase();
          return isMatch ? (
            <mark
              key={i}
              className="bg-orange-100 text-brand-700 font-semibold px-0.5 rounded-sm"
              id={`match-${i}`}
            >
              {part}
            </mark>
          ) : (
            <span key={i}>{part}</span>
          );
        })}
      </span>
    );
  };

  const hasMore = filteredFaqs.length > displayCount;
  const shownFaqs = filteredFaqs.slice(0, displayCount);

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16" id="faq-section">
      
      {/* Role Switcher Tab Container */}
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight text-center" id="faq-title">
          Frequently asked questions
        </h2>
        <p className="mt-3 text-sm text-gray-500 font-medium text-center" id="faq-subtitle">
          Can't find the answers? Switch roles to view seller guides or search above.
        </p>

        {/* Tab Segment Controller */}
        <div className="mt-8 bg-gray-100/80 p-1.5 rounded-2xl flex w-full max-w-lg shadow-inner border border-gray-200/50" id="role-selector-tabs">
          <button
            onClick={() => {
              setSelectedRole('all');
              setDisplayCount(6);
            }}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
              selectedRole === 'all'
                ? 'bg-white text-gray-900 shadow-md scale-[1.02]'
                : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>All Help</span>
          </button>
          
          <button
            onClick={() => {
              setSelectedRole('customer');
              setDisplayCount(6);
            }}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
              selectedRole === 'customer'
                ? 'bg-white text-brand-600 shadow-md scale-[1.02]'
                : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            <User className="w-4 h-4" />
            <span>Customers</span>
          </button>

          <button
            onClick={() => {
              setSelectedRole('restaurant');
              setDisplayCount(6);
            }}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
              selectedRole === 'restaurant'
                ? 'bg-white text-brand-600 shadow-md scale-[1.02]'
                : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            <Store className="w-4 h-4" />
            <span>Restaurants</span>
          </button>
        </div>
      </div>

      {/* Accordion Questions List */}
      <div className="space-y-4" id="faq-accordions-list">
        <AnimatePresence mode="popLayout">
          {shownFaqs.length > 0 ? (
            shownFaqs.map((faq, idx) => {
              const CategoryIcon = getCategoryIcon(faq.category);
              const isOpen = openId === faq.id;
              
              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  layout
                  className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen 
                      ? 'border-brand-500/30 ring-4 ring-orange-500/5 shadow-md' 
                      : 'border-gray-100 hover:border-gray-200 hover:shadow-sm'
                  }`}
                  id={`faq-item-${faq.id}`}
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                    id={`faq-btn-${faq.id}`}
                  >
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className={`p-2.5 rounded-xl border flex items-center justify-center transition-colors ${
                        isOpen 
                          ? 'bg-orange-500 text-white border-orange-600' 
                          : 'bg-gray-50 text-gray-500 border-gray-100'
                      }`}>
                        <CategoryIcon className="w-5 h-5 stroke-[1.75]" />
                      </div>
                      
                      {/* Title */}
                      <div className="pt-1.5">
                        <span className="text-xs font-bold text-brand-500 uppercase tracking-wider block mb-1">
                          {faq.category}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-tight">
                          {highlightText(faq.question, searchQuery)}
                        </h3>
                      </div>
                    </div>

                    {/* Chevron toggler */}
                    <div className={`mt-2 p-1.5 rounded-lg border border-gray-100 bg-gray-50/50 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-orange-50 text-brand-500' : ''}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-1 ml-0 sm:ml-14 border-t border-gray-50 mt-1">
                          <p className="text-gray-600 leading-relaxed text-sm sm:text-base font-medium selection:bg-brand-100 selection:text-brand-700">
                            {highlightText(faq.answer, searchQuery)}
                          </p>
                          <div className="mt-4 flex items-center gap-4">
                            <span className="text-xs text-gray-400 font-medium">Was this article helpful?</span>
                            <div className="flex items-center gap-1.5">
                              <button onClick={() => handleFeedback(true)} className="text-xs font-bold text-gray-600 hover:text-brand-500 bg-gray-50 hover:bg-orange-50/50 border border-gray-100 px-3 py-1 rounded-lg transition-all cursor-pointer">Yes</button>
                              <button onClick={() => handleFeedback(false)} className="text-xs font-bold text-gray-600 hover:text-brand-500 bg-gray-50 hover:bg-orange-50/50 border border-gray-100 px-3 py-1 rounded-lg transition-all cursor-pointer">No</button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-orange-50/50 border border-orange-100/50 rounded-2xl p-8 text-center flex flex-col items-center"
              id="faq-empty-state"
            >
              <div className="p-3 bg-white border border-orange-100 rounded-xl text-brand-500 mb-3 shadow-sm">
                <FilterX className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">No matching questions found</h3>
              <p className="mt-2 text-sm text-gray-500 font-medium max-w-md">
                We couldn't find any results for "{searchQuery}" under the selected role. Try checking your spelling or selecting the "All Help" tab.
              </p>
              <button
                onClick={() => {
                  setSelectedRole('all');
                  // We also clear search inside parent, so we'll just wait for the user to click
                }}
                className="mt-4 text-xs font-bold text-brand-600 hover:text-brand-700 underline cursor-pointer"
              >
                Reset filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Load More Button */}
      {filteredFaqs.length > 6 && (
        <div className="mt-10 flex justify-center" id="faq-load-more-container">
          <button
            onClick={() => {
              if (hasMore) {
                setDisplayCount(displayCount + 6);
              } else {
                setDisplayCount(6);
                // Scroll back to top of FAQ smoothly
                document.getElementById('faq-title')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-6 py-3 bg-gray-900 hover:bg-brand-600 text-white font-semibold text-sm rounded-xl transition-all shadow-md hover:shadow-lg active:scale-95 cursor-pointer flex items-center gap-2"
            id="faq-toggle-expand-btn"
          >
            {hasMore ? (
              <>
                <span>Load More FAQs</span>
                <ChevronDown className="w-4 h-4" />
              </>
            ) : (
              <span>Show Less FAQs</span>
            )}
          </button>
        </div>
      )}

      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-gray-900 text-white px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-gray-800 w-max max-w-[90vw]"
          >
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <p className="text-sm font-medium">{toastMessage}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
