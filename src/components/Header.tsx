/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './Logo';
import { ChevronDown, MessagesSquare, Utensils, HelpCircle, LogIn, Store, UserPlus, Menu, X } from 'lucide-react';

interface HeaderProps {
  onSearchSelect: (query: string) => void;
  onRoleSelect: (role: 'all' | 'customer' | 'restaurant') => void;
  onContactClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onSearchSelect, onRoleSelect, onContactClick }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (menu: string) => {
    if (activeDropdown === menu) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(menu);
    }
  };

  const selectCategoryAndSearch = (query: string, role: 'all' | 'customer' | 'restaurant') => {
    onSearchSelect(query);
    onRoleSelect(role);
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100" id="app-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => selectCategoryAndSearch('', 'all')}>
            <Logo showText={true} className="w-8 h-8 sm:w-9 sm:h-9" />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-1 lg:space-x-4">
            <button
              onClick={() => selectCategoryAndSearch('', 'all')}
              className="text-gray-600 hover:text-brand-500 px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer"
              id="nav-home"
            >
              Support Home
            </button>

            {/* Ordering Guides Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('ordering')}
                className={`flex items-center gap-1 text-gray-600 hover:text-brand-500 px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                  activeDropdown === 'ordering' ? 'text-brand-500' : ''
                }`}
                id="nav-ordering-btn"
              >
                <span>For Customers</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'ordering' ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'ordering' && (
                  <>
                    <div className="fixed inset-0 z-10" onClick={() => setActiveDropdown(null)} />
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 mt-2 w-72 rounded-xl bg-white shadow-xl border border-gray-100 p-4 z-20"
                      id="dropdown-ordering"
                    >
                      <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-2">Ordering Help</h3>
                      <div className="space-y-1">
                        <button
                          onClick={() => selectCategoryAndSearch('track', 'customer')}
                          className="flex items-start gap-3 w-full text-left p-2 rounded-lg hover:bg-orange-50/50 group transition-colors cursor-pointer"
                        >
                          <div className="p-2 rounded-lg bg-orange-50 text-brand-500 group-hover:bg-brand-100 transition-colors">
                            <Utensils className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">Track Food Order</p>
                            <p className="text-xs text-gray-500">Live GPS tracking help</p>
                          </div>
                        </button>
                        <button
                          onClick={() => selectCategoryAndSearch('cancel', 'customer')}
                          className="flex items-start gap-3 w-full text-left p-2 rounded-lg hover:bg-orange-50/50 group transition-colors cursor-pointer"
                        >
                          <div className="p-2 rounded-lg bg-orange-50 text-brand-500 group-hover:bg-brand-100 transition-colors">
                            <X className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">Cancel & Refund</p>
                            <p className="text-xs text-gray-500">Refund policies and rules</p>
                          </div>
                        </button>
                        <button
                          onClick={() => selectCategoryAndSearch('allergy', 'customer')}
                          className="flex items-start gap-3 w-full text-left p-2 rounded-lg hover:bg-orange-50/50 group transition-colors cursor-pointer"
                        >
                          <div className="p-2 rounded-lg bg-orange-50 text-brand-500 group-hover:bg-brand-100 transition-colors">
                            <HelpCircle className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">Dietary & Allergies</p>
                            <p className="text-xs text-gray-500">Kitchen instructions guide</p>
                          </div>
                        </button>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* Restaurant Guides Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('restaurant')}
                className={`flex items-center gap-1 text-gray-600 hover:text-brand-500 px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                  activeDropdown === 'restaurant' ? 'text-brand-500' : ''
                }`}
                id="nav-restaurant-btn"
              >
                <span>For Restaurants</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'restaurant' ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'restaurant' && (
                  <>
                    <div className="fixed inset-0 z-10" onClick={() => setActiveDropdown(null)} />
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 mt-2 w-72 rounded-xl bg-white shadow-xl border border-gray-100 p-4 z-20"
                      id="dropdown-restaurant"
                    >
                      <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-2">Merchant Help</h3>
                      <div className="space-y-1">
                        <button
                          onClick={() => selectCategoryAndSearch('commission', 'restaurant')}
                          className="flex items-start gap-3 w-full text-left p-2 rounded-lg hover:bg-orange-50/50 group transition-colors cursor-pointer"
                        >
                          <div className="p-2 rounded-lg bg-orange-50 text-brand-500 group-hover:bg-brand-100 transition-colors">
                            <Store className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">Commission & Payouts</p>
                            <p className="text-xs text-gray-500">Rates, schedules & deposits</p>
                          </div>
                        </button>
                        <button
                          onClick={() => selectCategoryAndSearch('menu', 'restaurant')}
                          className="flex items-start gap-3 w-full text-left p-2 rounded-lg hover:bg-orange-50/50 group transition-colors cursor-pointer"
                        >
                          <div className="p-2 rounded-lg bg-orange-50 text-brand-500 group-hover:bg-brand-100 transition-colors">
                            <Utensils className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">Menu & Kitchen</p>
                            <p className="text-xs text-gray-500">Pause orders and updates</p>
                          </div>
                        </button>
                        <button
                          onClick={() => selectCategoryAndSearch('promotion', 'restaurant')}
                          className="flex items-start gap-3 w-full text-left p-2 rounded-lg hover:bg-orange-50/50 group transition-colors cursor-pointer"
                        >
                          <div className="p-2 rounded-lg bg-orange-50 text-brand-500 group-hover:bg-brand-100 transition-colors">
                            <UserPlus className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">Marketing & Sales</p>
                            <p className="text-xs text-gray-500">Grow order volume</p>
                          </div>
                        </button>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={onContactClick}
              className="text-gray-600 hover:text-brand-500 px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer"
              id="nav-contact"
            >
              Contact Team
            </button>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center">
            <button
              onClick={onContactClick}
              className="bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all shadow-sm hover:shadow-md cursor-pointer flex items-center gap-1.5"
              id="btn-get-started"
            >
              <MessagesSquare className="w-4 h-4" />
              Contact Support
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-500 hover:text-gray-900 p-2 rounded-md"
              aria-label="Toggle Menu"
              id="btn-mobile-menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
            id="mobile-navigation"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              <div className="space-y-1">
                <button
                  onClick={() => selectCategoryAndSearch('', 'all')}
                  className="block w-full text-left px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:bg-orange-50/50 hover:text-brand-500 transition-all"
                >
                  Support Home
                </button>
                <div className="py-2 border-t border-b border-gray-50">
                  <p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">For Customers</p>
                  <button
                    onClick={() => selectCategoryAndSearch('track', 'customer')}
                    className="block w-full text-left px-6 py-2 text-sm font-medium text-gray-600 hover:text-brand-500"
                  >
                    Track Food Order
                  </button>
                  <button
                    onClick={() => selectCategoryAndSearch('cancel', 'customer')}
                    className="block w-full text-left px-6 py-2 text-sm font-medium text-gray-600 hover:text-brand-500"
                  >
                    Cancel & Refund Help
                  </button>
                  <button
                    onClick={() => selectCategoryAndSearch('allergy', 'customer')}
                    className="block w-full text-left px-6 py-2 text-sm font-medium text-gray-600 hover:text-brand-500"
                  >
                    Dietary & Allergies
                  </button>
                </div>

                <div className="py-2 border-b border-gray-50">
                  <p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">For Restaurants</p>
                  <button
                    onClick={() => selectCategoryAndSearch('commission', 'restaurant')}
                    className="block w-full text-left px-6 py-2 text-sm font-medium text-gray-600 hover:text-brand-500"
                  >
                    Commission & Payouts
                  </button>
                  <button
                    onClick={() => selectCategoryAndSearch('menu', 'restaurant')}
                    className="block w-full text-left px-6 py-2 text-sm font-medium text-gray-600 hover:text-brand-500"
                  >
                    Menu & Kitchen Management
                  </button>
                  <button
                    onClick={() => selectCategoryAndSearch('promotion', 'restaurant')}
                    className="block w-full text-left px-6 py-2 text-sm font-medium text-gray-600 hover:text-brand-500"
                  >
                    Promotions & Marketing
                  </button>
                </div>

                <button
                  onClick={() => {
                    onContactClick();
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:bg-orange-50/50 hover:text-brand-500 transition-all"
                >
                  Contact Support Team
                </button>
              </div>

              {/* Mobile CTA buttons */}
              <div className="pt-4 border-t border-gray-100 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    onContactClick();
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-center gap-1.5 w-full bg-brand-500 text-white text-base font-semibold py-2.5 rounded-xl shadow-sm"
                >
                  <MessagesSquare className="w-5 h-5" />
                  Contact Support
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
