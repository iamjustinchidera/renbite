/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { MessagesSquare, PhoneCall, ArrowUpRight } from 'lucide-react';

interface ContactCardsProps {
  onContactClick: (subject: string, emailRole?: 'customer' | 'restaurant') => void;
}

export const ContactCards: React.FC<ContactCardsProps> = ({ onContactClick }) => {
  const cards = [
    {
      id: 'support',
      icon: MessagesSquare,
      title: 'Chat to support',
      description: 'Need help discovering restaurants, using the AI, or managing your listing?',
      contact: 'compellsolutions@gmail.com',
      actionLabel: 'Submit Support Ticket',
      onClick: () => onContactClick('Renbite App Support', 'customer'),
      bgGradient: 'from-[#29d854] to-[#1fd143]', // iOS iMessage style vibrant green gradient
      iconShadow: 'shadow-[0_8px_24px_rgba(31,209,67,0.35)]',
    },
    {
      id: 'call',
      icon: PhoneCall,
      title: 'Call us',
      description: 'Mon-Fri from 8am to 5pm standard EST hours.',
      contact: '+1 (317) 266-9720',
      actionLabel: 'Call Support Line',
      onClick: () => {
        window.location.href = 'tel:+13172669720';
      },
      bgGradient: 'from-[#007aff] to-[#0056b3]', // iOS standard Link Blue gradient
      iconShadow: 'shadow-[0_8px_24px_rgba(0,122,255,0.35)]',
    },
  ];

  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12" id="contact-channels-section">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-white rounded-[32px] border border-gray-150/80 p-8 flex flex-col justify-between shadow-[0_16px_40px_-12px_rgba(0,0,0,0.06)] transition-all duration-300 relative overflow-hidden"
              id={`contact-card-${card.id}`}
            >
              {/* Subtle light reflections to mimic glassmorphic iOS interface */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none" />

              <div>
                {/* iOS App-Icon Styled Icon Wrapper */}
                <div className={`w-14 h-14 bg-gradient-to-tr ${card.bgGradient} ${card.iconShadow} rounded-2xl flex items-center justify-center text-white mb-6 border border-white/10`}>
                  <Icon className="w-7 h-7 stroke-[2.2]" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                  {card.title}
                </h3>
                
                {/* Description */}
                <p className="mt-3 text-sm text-gray-500 leading-relaxed font-medium">
                  {card.description}
                </p>
                
                {/* Contact detail block with pill styling */}
                <div className="mt-4 inline-flex items-center bg-gray-50 px-3.5 py-1.5 rounded-full border border-gray-100">
                  <p className="text-xs font-semibold text-brand-600 truncate break-all selection:bg-brand-100 selection:text-brand-700">
                    {card.contact}
                  </p>
                </div>
              </div>

              {/* Action trigger button */}
              <div className="mt-8 pt-5 border-t border-gray-100/80 flex items-center justify-between">
                <button
                  onClick={card.onClick}
                  className="text-sm font-bold text-gray-950 hover:text-brand-600 flex items-center gap-1.5 group transition-colors cursor-pointer"
                >
                  <span>{card.actionLabel}</span>
                  <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-brand-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all stroke-[2.5]" />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
