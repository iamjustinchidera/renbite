/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck, Scale, Info, Mail, Phone, MapPin } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  pageType: 'privacy' | 'terms' | 'about' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, pageType, onClose }) => {
  if (!isOpen || !pageType) return null;

  const renderContent = () => {
    switch (pageType) {
      case 'privacy':
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
              <div className="p-2.5 bg-orange-50 text-brand-500 rounded-xl">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Privacy Policy</h2>
                <p className="text-xs text-gray-500 font-medium">Last updated: July 2026</p>
              </div>
            </div>

            <div className="prose prose-sm text-gray-600 space-y-4 leading-relaxed text-sm">
              <p className="font-medium text-gray-900">
                At Renbite, managed by Compell Solutions LLC, we take your privacy and security seriously. This privacy policy describes how we collect, use, and safeguard your data when you use our restaurant discovery platform.
              </p>

              <div>
                <h3 className="font-bold text-gray-900 text-base mb-1">1. Information We Collect</h3>
                <p>
                  We collect information necessary to power your discovery experience. This includes your name, email address, location (to show nearby restaurants), saved favourites, and any support messages you submit via our ticket system. Restaurant owners additionally provide their business details, menu information, and event data.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 text-base mb-1">2. How We Use Your Information</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>To personalise restaurant recommendations and AI chatbot responses based on your preferences.</li>
                  <li>To show you relevant nearby restaurants, events, and deals on the map and explore feed.</li>
                  <li>To contact you regarding your account, saved favourites notifications, or support tickets.</li>
                  <li>To help restaurant owners understand their audience through anonymised analytics.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 text-base mb-1">3. Direct Email Routing & Security</h3>
                <p>
                  Our support system routes ticket submissions directly to <span className="font-semibold text-brand-600">compellsolutions@gmail.com</span> using secure, authenticated transmission. We do not share your personal information with third-party advertisers.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 text-base mb-1">4. Third-Party Sharing</h3>
                <p>
                  Compell Solutions LLC does not sell, lease, or rent your personal information to third parties. Restaurant profile information that owners publish (menus, photos, events) is intentionally public and visible to all users of the platform.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 text-base mb-1">5. Contact Information</h3>
                <p>
                  If you have questions about our privacy guidelines, please reach out to us at:
                </p>
                <div className="mt-2 p-3 bg-gray-50 border border-gray-100 rounded-xl space-y-1 text-xs">
                  <p className="flex items-center gap-2 text-gray-700 font-semibold">
                    <Mail className="w-3.5 h-3.5 text-brand-500" />
                    compellsolutions@gmail.com
                  </p>
                  <p className="flex items-center gap-2 text-gray-700 font-semibold">
                    <Phone className="w-3.5 h-3.5 text-brand-500" />
                    +1 (317) 266-9720
                  </p>
                  <p className="flex items-center gap-2 text-gray-700 font-semibold">
                    <MapPin className="w-3.5 h-3.5 text-brand-500" />
                    Compell Solutions LLC • Indianapolis, IN
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'terms':
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
              <div className="p-2.5 bg-orange-50 text-brand-500 rounded-xl">
                <Scale className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Terms of Service</h2>
                <p className="text-xs text-gray-500 font-medium">Last updated: July 2026</p>
              </div>
            </div>

            <div className="prose prose-sm text-gray-600 space-y-4 leading-relaxed text-sm">
              <p className="font-medium text-gray-900">
                Welcome to the Renbite Support Center. By using our restaurant discovery platform and accessing this site, you agree to comply with the terms defined below by Compell Solutions LLC.
              </p>

              <div>
                <h3 className="font-bold text-gray-900 text-base mb-1">1. Platform Purpose</h3>
                <p>
                  Renbite is a restaurant discovery platform. We help diners find local restaurants through AI-powered recommendations, map exploration, and curated feeds. We do not facilitate food delivery. Users are responsible for independently visiting or contacting restaurants they find on Renbite.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 text-base mb-1">2. User Agreements</h3>
                <p>
                  Users must provide truthful, complete, and accurate information when registering, submitting reviews, or requesting support. Using false names or unauthorized emails is strictly prohibited. Reviews must reflect genuine personal experiences.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 text-base mb-1">3. Restaurant Owner Responsibilities</h3>
                <p>
                  Restaurant owners are responsible for ensuring their listed information — including menus, opening hours, photos, wait times, and events — is accurate and up to date. Misleading listings or false promotions may result in account suspension.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 text-base mb-1">4. Support Ticket Fair Use</h3>
                <p>
                  Our priority ticket routing to <span className="font-semibold text-brand-600">compellsolutions@gmail.com</span> is intended to resolve genuine app issues, listing queries, account problems, and related platform inquiries. Abuse of support tickets or harassment of agents will result in immediate suspension of account privileges.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 text-base mb-1">5. Escalations & Inquiries</h3>
                <p>
                  For immediate support or questions regarding our user guidelines, please contact our dedicated assistance team at <span className="font-semibold text-brand-600">+1 (317) 266-9720</span>.
                </p>
              </div>
            </div>
          </div>
        );

      case 'about':
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
              <div className="p-2.5 bg-orange-50 text-brand-500 rounded-xl">
                <Info className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">About Renbite & Compell Solutions</h2>
                <p className="text-xs text-gray-500 font-medium">Indianapolis, IN</p>
              </div>
            </div>

            <div className="prose prose-sm text-gray-600 space-y-4 leading-relaxed text-sm">
              <p className="font-medium text-gray-900">
                Renbite is a restaurant discovery platform built and managed by Compell Solutions LLC, designed to connect hungry diners with amazing local restaurants.
              </p>

              <div>
                <h3 className="font-bold text-gray-900 text-base mb-1">Our Mission</h3>
                <p>
                  We believe the best restaurants are often the ones you haven't found yet. Renbite exists to help people discover their next favourite local restaurant while giving restaurant owners powerful tools to reach more customers. We are the app people open before asking: "Where should I eat today?"
                </p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 text-base mb-1">What Renbite Does</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>AI-powered restaurant recommendations tailored to your cravings.</li>
                  <li>Interactive map to explore local restaurants near you.</li>
                  <li>Live wait times and busyness indicators so you visit at the right time.</li>
                  <li>Events, deals, and specials from restaurants in your area.</li>
                  <li>Save and revisit your favourite spots with one tap.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 text-base mb-1">For Restaurant Owners</h3>
                <p>
                  Renbite gives local restaurants the tools to grow — from analytics tracking profile views and customer saves, to a Boost feature that elevates visibility in recommendations and the explore feed. Owners can publish events, manage their listing, and connect directly with diners discovering them for the first time.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 text-base mb-1">Our Support Commitment</h3>
                <p>
                  If you have any questions or need help with your Renbite experience, our dedicated team is reachable at <span className="font-semibold text-brand-600">+1 (317) 266-9720</span> or via direct ticketing to <span className="font-semibold text-brand-600">compellsolutions@gmail.com</span>.
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
                <span>© 2026 Compell Solutions LLC</span>
                <span>All Systems Operational</span>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" id="legal-modal-container">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm"
        />

        {/* Modal body */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className="bg-white rounded-3xl shadow-2xl border border-gray-100 w-full max-w-2xl max-h-[85vh] overflow-y-auto relative z-10 p-6 sm:p-8"
        >
          {/* Close button top right */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-xl text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {renderContent()}

          {/* Footer close trigger */}
          <div className="mt-8 pt-4 border-t border-gray-100 flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2.5 bg-gray-900 hover:bg-gray-800 text-white text-sm font-semibold rounded-xl transition-all cursor-pointer"
            >
              Close Window
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
