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
                At Renbite, managed by Compell Solutions LLC, we take your privacy and security seriously. This privacy policy describes how we collect, use, and safeguard your data.
              </p>

              <div>
                <h3 className="font-bold text-gray-900 text-base mb-1">1. Information We Collect</h3>
                <p>
                  We collect information necessary to provide and secure our support services. This includes your name, email address, support role (Customer or Restaurant Merchant), and any message details you submit to us via our ticket systems.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 text-base mb-1">2. How We Use Your Information</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>To provide user assistance and process technical or delivery support tickets.</li>
                  <li>To coordinate resolution with restaurant operators or customer services.</li>
                  <li>To contact you regarding account inquiries, billing details, or urgent resolutions.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 text-base mb-1">3. Direct Email Routing & Security</h3>
                <p>
                  Our system facilitates support requests by routing ticket submissions directly to our designated support email inbox at <span className="font-semibold text-brand-600">compellsolutions@gmail.com</span> using secure, authenticated transmission.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 text-base mb-1">4. Third-Party Sharing</h3>
                <p>
                  Compell Solutions LLC does not sell, lease, or rent your personal information to third parties. Data is only shared with active delivery riders or restaurant kitchens as required to resolve active order errors.
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
                Welcome to the Renbite Support Center. By using our services and accessing this site, you agree to comply with the terms defined below by Compell Solutions LLC.
              </p>

              <div>
                <h3 className="font-bold text-gray-900 text-base mb-1">1. User Agreements</h3>
                <p>
                  Users must provide truthful, complete, and accurate information when registering, requesting support, or submitting a platform ticket. Using false names or unauthorized emails is strictly prohibited.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 text-base mb-1">2. Support Ticket Fair Use</h3>
                <p>
                  Our priority ticket routing to <span className="font-semibold text-brand-600">compellsolutions@gmail.com</span> is intended to resolve genuine order issues, restaurant payouts, kitchen modifications, and related inquiries. Abuse of support tickets or harassment of agents will result in immediate suspension of account privileges.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 text-base mb-1">3. Limitation of Liability</h3>
                <p>
                  Compell Solutions LLC coordinates third-party food preparation and local delivery logistics. We are not directly responsible for food safety, rider timing, or kitchen operations, but we will actively mediate disputes and offer standard refunds for incomplete orders.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 text-base mb-1">4. Refund and Cancellation Rules</h3>
                <p>
                  Order modifications or cancellations are only supported within the first 2 minutes of placing an order. Refunds for legitimate delivery failures are processed back to the user's original payment method or stored as App Credit within 3–5 business days.
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
                Renbite is a state-of-the-art logistics and food delivery assistance application owned, managed, and developed by Compell Solutions LLC.
              </p>

              <div>
                <h3 className="font-bold text-gray-900 text-base mb-1">Our Mission</h3>
                <p>
                  We aim to bridge local merchant kitchens with passionate diners. By providing elegant ordering flows, live GPS coordinates, and fair pricing models, we empower independent restaurant owners to compete and scale their operations seamlessly.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 text-base mb-1">Who We Are</h3>
                <p>
                  Compell Solutions LLC is a high-grade software systems provider based in Indiana. We build highly accessible, responsive web systems that secure user data, simplify order-taking, and optimize customer support pathways.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 text-base mb-1">Our Support Commitment</h3>
                <p>
                  We strive for absolute customer satisfaction. If you encounter any delivery disputes or operational hiccups, our dedicated team is reachable via phone at <span className="font-semibold text-brand-600">+1 (317) 266-9720</span> or via direct ticketing directly to <span className="font-semibold text-brand-600">compellsolutions@gmail.com</span>.
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
