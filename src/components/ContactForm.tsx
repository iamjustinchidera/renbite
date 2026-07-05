/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SupportTicket } from '../types';
import {
  Send,
  CheckCircle,
  Clock,
  User,
  MessageSquare,
  AlertTriangle,
  ChevronRight,
  ShieldCheck,
  XCircle,
} from 'lucide-react';

interface ContactFormProps {
  initialSubject?: string;
  initialRole?: 'customer' | 'restaurant';
}

export const ContactForm: React.FC<ContactFormProps> = ({
  initialSubject = '',
  initialRole = 'customer',
}) => {
  const formRef = useRef<HTMLDivElement>(null);
  
  // Form fields state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<'customer' | 'restaurant'>(initialRole);
  const [subject, setSubject] = useState(initialSubject);
  const [message, setMessage] = useState('');

  // UI state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTicket, setActiveTicket] = useState<SupportTicket | null>(() => {
    // Restore ticket from localStorage so returning from email app on mobile shows the dashboard
    try {
      const saved = localStorage.getItem('renbite_active_ticket');
      return saved ? (JSON.parse(saved) as SupportTicket) : null;
    } catch {
      return null;
    }
  });
  const [agentStatus, setAgentStatus] = useState<'waiting' | 'assigned' | 'typing' | 'replied'>(() => {
    try {
      return (localStorage.getItem('renbite_agent_status') as 'waiting' | 'assigned' | 'typing' | 'replied') || 'waiting';
    } catch {
      return 'waiting';
    }
  });
  const [agentResponse, setAgentResponse] = useState(() => {
    try {
      return localStorage.getItem('renbite_agent_response') || '';
    } catch {
      return '';
    }
  });
  
  // Timer for ticket simulation
  const [secondsRemaining, setSecondsRemaining] = useState(900); // 15 minutes = 900s

  // Sync initial props when they change
  useEffect(() => {
    if (initialSubject) {
      setSubject(initialSubject);
      if (formRef.current) {
        formRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [initialSubject]);

  useEffect(() => {
    if (initialRole) {
      setRole(initialRole);
    }
  }, [initialRole]);

  // Handle support timer countdown
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (activeTicket && secondsRemaining > 0) {
      interval = setInterval(() => {
        setSecondsRemaining((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [activeTicket, secondsRemaining]);

  // Persist ticket state to localStorage whenever it changes
  useEffect(() => {
    try {
      if (activeTicket) {
        localStorage.setItem('renbite_active_ticket', JSON.stringify(activeTicket));
      } else {
        localStorage.removeItem('renbite_active_ticket');
        localStorage.removeItem('renbite_agent_status');
        localStorage.removeItem('renbite_agent_response');
      }
    } catch {}
  }, [activeTicket]);

  useEffect(() => {
    try {
      localStorage.setItem('renbite_agent_status', agentStatus);
    } catch {}
  }, [agentStatus]);

  useEffect(() => {
    try {
      if (agentResponse) localStorage.setItem('renbite_agent_response', agentResponse);
    } catch {}
  }, [agentResponse]);

  // Simulate support agent actions — only run if we don't already have a replied state restored
  useEffect(() => {
    let t1: NodeJS.Timeout, t2: NodeJS.Timeout, t3: NodeJS.Timeout;
    
    if (activeTicket && agentStatus !== 'replied') {
      // 1. Assign agent after 4 seconds
      t1 = setTimeout(() => {
        setAgentStatus('assigned');
        
        // 2. Agent starts typing after 8 seconds
        t2 = setTimeout(() => {
          setAgentStatus('typing');
          
          // 3. Agent sends automatic helpful reply after 14 seconds
          t3 = setTimeout(() => {
            setAgentStatus('replied');
            const firstName = activeTicket.name.split(' ')[0] || 'there';
            
            if (activeTicket.role === 'customer') {
              setAgentResponse(
                `Hi ${firstName}! I'm Sarah from the Renbite Support team. I can see you're reaching out about "${activeTicket.subject}." I'm looking into this for you right now — whether it's a question about the AI recommendations, saving favourites, or exploring restaurants on the map, I've got you covered. I'll follow up with a full answer in less than 2 minutes!`
              );
            } else {
              setAgentResponse(
                `Hello ${firstName}! I'm Marcus from our Restaurant Partner team. Thanks for getting in touch about "${activeTicket.subject}." I've flagged this for our dedicated owner support desk. Whether it's your listing, analytics, boosting visibility, or publishing events, a specialist will be with you shortly. Hang tight!`
              );
            }
          }, 6000);
        }, 4000);
      }, 4000);
    }

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [activeTicket]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) return;

    setIsSubmitting(true);

    // Simulate short network delay
    setTimeout(() => {
      const generatedTicketId = `RENB-${Math.floor(10000 + Math.random() * 90000)}`;
      
      const newTicket: SupportTicket = {
        id: generatedTicketId,
        name,
        email,
        role,
        subject,
        message,
        createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: 'open',
      };

      // Open mailto as a new window/tab so mobile treats it as external
      // and does NOT reload this page when the user returns from the email app
      const mailtoSubject = `[Renbite Support Request] ${subject}`;
      const mailtoBody = `Renbite Support Ticket Details:\n--------------------------------\nTicket ID: ${generatedTicketId}\nName: ${name}\nEmail: ${email}\nRole: ${role === 'customer' ? 'Diner' : 'Restaurant Owner'}\n\nMessage:\n${message}\n\n--------------------------------\nSubmitted via Renbite Support Center`;
      window.open(`mailto:compellsolutions@gmail.com?subject=${encodeURIComponent(mailtoSubject)}&body=${encodeURIComponent(mailtoBody)}`);

      setActiveTicket(newTicket);
      setIsSubmitting(false);
      setSecondsRemaining(900); // Reset timer
      setAgentStatus('waiting');
      setAgentResponse('');
    }, 1200);
  };

  const handleCloseTicket = () => {
    // Clear persisted state from localStorage
    try {
      localStorage.removeItem('renbite_active_ticket');
      localStorage.removeItem('renbite_agent_status');
      localStorage.removeItem('renbite_agent_response');
    } catch {}
    setActiveTicket(null);
    setAgentStatus('waiting');
    setAgentResponse('');
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  // Convert seconds to mm:ss format
  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <section ref={formRef} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-20" id="contact-form-section">
      <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-5">
          
          {/* Left Column: Visual instructions / Callouts */}
          <div className="bg-brand-500 p-8 sm:p-10 md:col-span-2 text-white flex flex-col justify-between relative overflow-hidden">
            {/* Background absolute abstract decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-600/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative">
              <span className="bg-orange-600/30 text-orange-100 text-xs font-bold px-3 py-1.5 rounded-full inline-block uppercase tracking-wider mb-4 border border-white/10">
                24/7 Priority Support
              </span>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">
                Still have questions?
              </h2>
              <p className="mt-4 text-orange-50/90 text-sm leading-relaxed font-medium">
                Can't find the answer in our help articles? Submit a ticket and our team will help — whether you're a diner or a restaurant owner, we're here to make your Renbite experience seamless.
              </p>
            </div>

            <div className="mt-8 space-y-4 relative">
              <div className="flex items-start gap-3">
                <div className="p-1.5 bg-orange-600/30 rounded-lg border border-white/10 mt-0.5">
                  <Clock className="w-4 h-4 text-orange-200" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Average Response Time</h4>
                  <p className="text-xs text-orange-100 font-medium">Under 15 minutes during active hours.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1.5 bg-orange-600/30 rounded-lg border border-white/10 mt-0.5">
                  <User className="w-4 h-4 text-orange-200" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Direct Escalations</h4>
                  <p className="text-xs text-orange-100 font-medium">Bypasses bots directly to a real support specialist.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1.5 bg-orange-600/30 rounded-lg border border-white/10 mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-orange-200" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Encrypted Tickets</h4>
                  <p className="text-xs text-orange-100 font-medium">Fully protected user details & order receipts.</p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-white/10 text-xs text-orange-100 font-semibold flex items-center gap-1">
              <span>Managed and supported by</span>
              <span className="text-white font-bold">
                Compell Solutions LLC
              </span>
            </div>
          </div>

          {/* Right Column: Form / Success view */}
          <div className="p-8 sm:p-10 md:col-span-3 bg-white" id="contact-form-body">
            <AnimatePresence mode="wait">
              {!activeTicket ? (
                /* Submit Form View */
                <motion.form
                  key="support-form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-gray-900 tracking-tight">Submit a ticket</h3>
                    <p className="text-xs text-gray-500 font-medium">Fill in the form to start a secure live ticket thread.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="ticket-name" className="text-xs font-bold text-gray-700">Full Name</label>
                      <input
                        id="ticket-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 bg-white border border-gray-200 focus:border-brand-500 focus:ring-4 focus:ring-orange-500/10 rounded-xl text-sm transition-all placeholder-gray-400 font-medium"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="ticket-email" className="text-xs font-bold text-gray-700">Email Address</label>
                      <input
                        id="ticket-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="w-full px-3.5 py-2.5 bg-white border border-gray-200 focus:border-brand-500 focus:ring-4 focus:ring-orange-500/10 rounded-xl text-sm transition-all placeholder-gray-400 font-medium"
                      />
                    </div>
                  </div>

                  {/* Role Selector dropdown */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="ticket-role" className="text-xs font-bold text-gray-700">Account Role / Purpose</label>
                    <select
                      id="ticket-role"
                      value={role}
                      onChange={(e) => setRole(e.target.value as 'customer' | 'restaurant')}
                      className="w-full px-3.5 py-2.5 bg-white border border-gray-200 focus:border-brand-500 focus:ring-4 focus:ring-orange-500/10 rounded-xl text-sm font-semibold text-gray-700 transition-all"
                    >
                      <option value="customer">I am a Diner (Discovery, AI, Favourites, Map)</option>
                      <option value="restaurant">I am a Restaurant Owner (Listing, Analytics, Boost, Events)</option>
                    </select>
                  </div>

                  {/* Subject */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="ticket-subject" className="text-xs font-bold text-gray-700">Subject / Topic</label>
                    <input
                      id="ticket-subject"
                      type="text"
                      required
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="e.g. Can't see my restaurant on the map"
                      className="w-full px-3.5 py-2.5 bg-white border border-gray-200 focus:border-brand-500 focus:ring-4 focus:ring-orange-500/10 rounded-xl text-sm transition-all placeholder-gray-400 font-medium"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="ticket-message" className="text-xs font-bold text-gray-700">How can we help?</label>
                    <textarea
                      id="ticket-message"
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Explain your situation in details..."
                      className="w-full px-3.5 py-2.5 bg-white border border-gray-200 focus:border-brand-500 focus:ring-4 focus:ring-orange-500/10 rounded-xl text-sm transition-all placeholder-gray-400 font-medium resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-500 hover:bg-brand-600 disabled:bg-gray-200 disabled:text-gray-400 text-white font-bold text-sm py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                    id="submit-ticket-btn"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-1.5">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>Starting secure socket...</span>
                      </div>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Support Ticket</span>
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                /* Interactive Live Support Ticket Dashboard View */
                <motion.div
                  key="success-dashboard"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                  id="ticket-dashboard"
                >
                  {/* Top success alert banner */}
                  <div className="flex items-start gap-3 p-4 bg-emerald-50 border border-emerald-100 rounded-2xl">
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-emerald-950">Secure Ticket Thread Opened</h4>
                      <p className="text-xs text-emerald-700 mt-0.5 font-medium">Your issue has been logged. Live help is active below.</p>
                    </div>
                  </div>

                  {/* Ticket Header Metadata */}
                  <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-gray-400 block font-semibold">TICKET ID</span>
                      <span className="font-mono text-gray-900 font-bold">{activeTicket.id}</span>
                    </div>
                    <div>
                      <span className="text-gray-400 block font-semibold">SUBMITTED AT</span>
                      <span className="text-gray-900 font-bold">{activeTicket.createdAt}</span>
                    </div>
                    <div>
                      <span className="text-gray-400 block font-semibold">ROLE</span>
                      <span className="text-gray-900 font-bold uppercase">{activeTicket.role === 'customer' ? 'Diner' : 'Restaurant Owner'}</span>
                    </div>
                    <div>
                      <span className="text-gray-400 block font-semibold">EST. WAIT TIME</span>
                      <span className="text-brand-600 font-extrabold flex items-center gap-1">
                        <Clock className="w-3 h-3 animate-spin" />
                        {formatTime(secondsRemaining)}
                      </span>
                    </div>
                  </div>

                  {/* Chat / Transcript Simulator */}
                  <div className="border border-gray-100 rounded-2xl overflow-hidden shadow-inner">
                    <div className="bg-gray-100/50 px-4 py-2.5 border-b border-gray-100 flex items-center justify-between text-xs">
                      <span className="text-gray-500 font-semibold flex items-center gap-1.5">
                        <span className={`w-2 h-2 rounded-full ${agentStatus === 'replied' ? 'bg-emerald-500' : 'bg-orange-500 animate-pulse'}`} />
                        {agentStatus === 'waiting' && 'Connecting to representative...'}
                        {agentStatus === 'assigned' && 'Agent connected'}
                        {agentStatus === 'typing' && 'Agent is typing...'}
                        {agentStatus === 'replied' && 'Sarah (Support Agent)'}
                      </span>
                      <span className="text-gray-400 font-medium">100% Secure SSL</span>
                    </div>

                    <div className="p-4 space-y-4 max-h-72 overflow-y-auto bg-gray-50/20">
                      {/* User's Message (iOS iMessage blue style) */}
                      <div className="flex flex-col items-end">
                        <div className="bg-gradient-to-br from-[#007aff] to-[#0063db] text-white rounded-2xl rounded-tr-none px-4 py-3 text-sm max-w-[85%] font-medium shadow-[0_2px_8px_rgba(0,122,255,0.25)]">
                          <p className="font-bold border-b border-white/20 pb-1 mb-1 text-xs text-blue-100">
                            Subject: {activeTicket.subject}
                          </p>
                          <p className="whitespace-pre-line">{activeTicket.message}</p>
                        </div>
                        <span className="text-[10px] text-gray-400 mt-1 font-semibold">Sent at {activeTicket.createdAt}</span>
                      </div>

                      {/* Agent Response */}
                      <AnimatePresence>
                        {agentStatus !== 'waiting' && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex flex-col items-start"
                          >
                            <div className="bg-white border border-gray-100 rounded-2xl rounded-tl-none p-4 text-sm max-w-[85%] shadow-sm relative">
                              {agentStatus === 'assigned' && (
                                <div className="flex items-center gap-2 text-gray-500">
                                  <svg className="animate-spin h-4 w-4 text-brand-500" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                  </svg>
                                  <span className="text-xs font-semibold">Assigning specialized helper...</span>
                                </div>
                              )}

                              {agentStatus === 'typing' && (
                                <div className="flex items-center gap-1.5 py-1">
                                  <span className="text-xs font-semibold text-gray-400">Sarah is typing</span>
                                  <div className="flex gap-1">
                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                  </div>
                                </div>
                              )}

                              {agentStatus === 'replied' && (
                                <div>
                                  <p className="text-gray-700 leading-relaxed font-medium">{agentResponse}</p>
                                </div>
                              )}
                            </div>
                            {agentStatus === 'replied' && (
                              <span className="text-[10px] text-gray-400 mt-1 font-semibold">Sarah (Agent) • Just now</span>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Actions to reset or cancel */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleCloseTicket}
                      className="flex-1 text-center bg-gray-900 hover:bg-gray-800 text-white font-bold text-xs py-3.5 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <XCircle className="w-4 h-4" />
                      Close & Withdraw Ticket
                    </button>
                    <button
                      onClick={() => alert("Simulated: You have requested an instant call-back. A helper will ring your verified phone in 2 minutes.")}
                      className="flex-1 text-center bg-white border border-gray-200 hover:border-brand-500 hover:text-brand-500 font-bold text-xs py-3.5 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-sm text-gray-700"
                    >
                      <Clock className="w-4 h-4 text-brand-500" />
                      Request Urgent Callback
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};
