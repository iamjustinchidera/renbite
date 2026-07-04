/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  role: 'all' | 'customer' | 'restaurant';
  category: string;
}

export interface SupportTicket {
  id: string;
  name: string;
  email: string;
  role: 'customer' | 'restaurant';
  subject: string;
  message: string;
  createdAt: string;
  status: 'open' | 'resolved';
}
