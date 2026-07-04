/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FaqItem } from './types';

export const FAQ_DATA: FaqItem[] = [
  // --- GENERAL / COMMON ---
  {
    id: 'gen-1',
    question: 'How do I create or switch between customer and seller accounts?',
    answer: 'You can register an account using your email or social log-ins. If you want to order food, you can use our standard Customer profile. If you want to sell food, you can tap "Register Restaurant" or "Sell Food" inside your account settings. This allows you to manage both profiles under a single email address, making it seamless to order and manage your shop.',
    role: 'all',
    category: 'Account & Profile'
  },
  {
    id: 'gen-2',
    question: 'Is my payment information secure on this platform?',
    answer: 'Absolutely. We use industry-standard SSL encryption and process all transactions through certified Level 1 PCI-compliant payment gateways. Your credit card information is never stored directly on our servers, ensuring your transactions are safe and fully encrypted.',
    role: 'all',
    category: 'Billing & Security'
  },
  {
    id: 'gen-3',
    question: 'How does the customer rating and review system work?',
    answer: 'Transparency is vital to our community. Customers can rate their overall experience (1 to 5 stars) and leave written feedback for both the food quality and delivery service within 7 days of placing their order. Restaurant owners can view and reply to reviews directly from their dashboard.',
    role: 'all',
    category: 'Feedback & Support'
  },
  {
    id: 'gen-4',
    question: 'What is your refund policy for orders with issues?',
    answer: 'If your order is incorrect, missing items, or arrives in poor condition, you can request a refund. Go to "Order History", tap "Report an Issue", upload a photo if applicable, and submit your request. Our support team reviews all disputes within 15 minutes, issuing refunds to your original payment method or as App Credit.',
    role: 'all',
    category: 'Orders & Refunds'
  },

  // --- CUSTOMERS (ORDERING FOOD) ---
  {
    id: 'cust-1',
    question: 'How do I track my food delivery in real-time?',
    answer: 'Once your order is accepted by the restaurant, you will see a real-time tracking map on your dashboard. You can watch the restaurant prepare your food, see when the driver picks up your meal, and monitor the driver\'s live GPS coordinates directly to your doorstep.',
    role: 'customer',
    category: 'Order Tracking'
  },
  {
    id: 'cust-2',
    question: 'Can I cancel or modify my food order after placing it?',
    answer: 'You can cancel or make changes to your order within a 2-minute "grace period" after submission. After 2 minutes, the restaurant begins preparing your fresh ingredients, and cancellations are no longer permitted to avoid food waste and protect our kitchen partners.',
    role: 'customer',
    category: 'Orders & Refunds'
  },
  {
    id: 'cust-3',
    question: 'What should I do if I have specific dietary requirements or food allergies?',
    answer: 'Before adding an item to your cart, please check the allergen tags (e.g., Gluten-Free, Nut-Free, Vegan) on the item details. You can also use the "Special Instructions" box at checkout to notify the kitchen of severe allergies. We recommend calling the restaurant directly for critical allergy concerns.',
    role: 'customer',
    category: 'Dietary & Allergies'
  },
  {
    id: 'cust-4',
    question: 'How are delivery fees, platform surcharges, and driver tips calculated?',
    answer: 'Delivery fees are calculated based on your physical distance to the restaurant. A small platform service fee is added to help us secure transactions and maintain our customer support team. 100% of driver tips go directly to the courier who delivers your food.',
    role: 'customer',
    category: 'Billing & Security'
  },
  {
    id: 'cust-5',
    question: 'How do I apply coupon codes or referral discounts?',
    answer: 'At checkout, look for the "Promo Code" input box in the order summary section. Type your active discount code and click "Apply". If you received a referral discount, it is automatically saved to your account and applied as a discount on your next eligible order over $15.',
    role: 'customer',
    category: 'Billing & Security'
  },

  // --- RESTAURANTS (SELLING FOOD) ---
  {
    id: 'rest-1',
    question: 'How long does it take for my restaurant to be approved and onboarded?',
    answer: 'After filling out our restaurant registration form and submitting your food service permits and bank details, our review team will verify your business documents. Onboarding typically takes 24 to 48 hours, after which you will receive your login details to access the Restaurant Dashboard and upload your menu.',
    role: 'restaurant',
    category: 'Registration & Onboarding'
  },
  {
    id: 'rest-2',
    question: 'What are the platform commission fees and pricing structures?',
    answer: 'We believe in fair pricing. We charge a flat 15% commission fee on orders delivered by our driver network, and a reduced 5% commission on customer pickup/takeaway orders. These fees cover all payment gateway processing, platform maintenance, customer acquisition, and 24/7 support.',
    role: 'restaurant',
    category: 'Commission & Pricing'
  },
  {
    id: 'rest-3',
    question: 'When and how do I receive payouts for my restaurant sales?',
    answer: 'All completed orders are aggregated weekly. Payouts are directly deposited into your registered bank account every Monday via bank transfer. You can download complete accounting logs, invoices, and tax summaries directly from the "Finance" tab in your Restaurant Dashboard.',
    role: 'restaurant',
    category: 'Payouts & Finance'
  },
  {
    id: 'rest-4',
    question: 'How do I update my menu, opening hours, or temporarily pause incoming orders?',
    answer: 'From your Restaurant Dashboard, you can add, edit, or remove menu items, set pricing, toggle allergens, and adjust opening hours instantly. If your kitchen gets extremely busy during rush hour, you can tap the "Busy Mode" or "Pause Orders" button to temporarily stop taking new orders for 15, 30, or 60 minutes.',
    role: 'restaurant',
    category: 'Kitchen Management'
  },
  {
    id: 'rest-5',
    question: 'Can we use our own in-house delivery riders instead of your driver network?',
    answer: 'Yes! We support self-delivery for restaurants that already employ their own delivery staff. In your onboarding settings, simply choose "Self-Delivery Mode." This reduces your platform commission fee to 8% since you are managing your own routing, and lets you customize your own delivery zones.',
    role: 'restaurant',
    category: 'Delivery & Logistics'
  },
  {
    id: 'rest-6',
    question: 'How can I run promotional campaigns or offer discounts to boost sales?',
    answer: 'Inside the "Marketing" tab of your dashboard, you can design and run custom campaigns. You can offer flat-rate discounts, percentage-off deals, "Buy One Get One" (BOGO) items, or free delivery. You control the budget, duration, and eligible menu items, and you can track campaign performance in real-time.',
    role: 'restaurant',
    category: 'Marketing & Sales'
  }
];
