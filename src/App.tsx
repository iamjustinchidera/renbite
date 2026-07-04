/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ContactCards } from './components/ContactCards';
import { FaqSection } from './components/FaqSection';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState<'all' | 'customer' | 'restaurant'>('all');
  
  // States to pass subject/role context to the Contact Form when contact buttons are clicked
  const [formSubject, setFormSubject] = useState('');
  const [formRole, setFormRole] = useState<'customer' | 'restaurant'>('customer');

  // State to control legal pages modals
  const [activeLegalPage, setActiveLegalPage] = useState<'privacy' | 'terms' | 'about' | null>(null);

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  const handleContactTrigger = (subject: string, emailRole?: 'customer' | 'restaurant') => {
    setFormSubject(subject);
    if (emailRole) {
      setFormRole(emailRole);
    }
    
    // Smooth scroll to the contact form
    document.getElementById('contact-form-section')?.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  };

  const handleGeneralContactClick = () => {
    handleContactTrigger('General Support Inquiry', 'customer');
  };

  return (
    <div className="min-h-screen bg-[#f5f5f7] text-gray-900 flex flex-col justify-between overflow-x-hidden w-full" id="app-root-container">
      <div>
        {/* Navigation Header */}
        <Header
          onSearchSelect={setSearchQuery}
          onRoleSelect={setSelectedRole}
          onContactClick={handleGeneralContactClick}
        />

        {/* Hero Area & Search */}
        <Hero
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedRole={selectedRole}
          onClearSearch={handleClearSearch}
        />

        {/* Channels / Contact Cards Grid */}
        <ContactCards onContactClick={handleContactTrigger} />

        {/* FAQs Accordion */}
        <FaqSection
          searchQuery={searchQuery}
          selectedRole={selectedRole}
          setSelectedRole={setSelectedRole}
        />

        {/* Interactive Support Ticket / Message Form */}
        <ContactForm
          initialSubject={formSubject}
          initialRole={formRole}
        />
      </div>

      {/* Footer Branding & Badges */}
      <Footer
        onSearchSelect={setSearchQuery}
        onRoleSelect={setSelectedRole}
        onLegalPageOpen={(page) => setActiveLegalPage(page)}
      />

      {/* Pop-up modal pages for Privacy Policy, Terms of Service, and About */}
      <LegalModal
        isOpen={activeLegalPage !== null}
        pageType={activeLegalPage}
        onClose={() => setActiveLegalPage(null)}
      />
    </div>
  );
}

