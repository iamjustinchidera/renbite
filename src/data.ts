/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FaqItem } from './types';

export const FAQ_DATA: FaqItem[] = [
  // --- GENERAL / COMMON ---
  {
    id: 'gen-1',
    question: 'How do I create an account on Renbite?',
    answer: 'Signing up on Renbite is quick and free. Download the app, tap "Get Started", and register using your email or a social login. During sign-up, you will choose your role — either a Diner looking to discover restaurants, or a Restaurant Owner who wants to list and grow their business. You can switch roles or manage both under a single account at any time from your profile settings.',
    role: 'all',
    category: 'Account & Profile'
  },
  {
    id: 'gen-2',
    question: 'Does Renbite deliver food to my door?',
    answer: 'No — Renbite is a restaurant discovery platform, not a food delivery service. We help you find amazing local restaurants near you, see their menus, check live wait times, discover events and deals, and even get AI-powered recommendations based on what you\'re craving. Once you find your perfect spot, you visit the restaurant yourself or contact them directly.',
    role: 'all',
    category: 'About Renbite'
  },
  {
    id: 'gen-3',
    question: 'Is Renbite free to use?',
    answer: 'Yes! Renbite is completely free to download and use for diners. You can discover restaurants, browse menus, save favourites, chat with the AI, and explore the map at no cost. Restaurant owners have access to a free listing tier and can upgrade to a premium plan for enhanced visibility, analytics, and boosting tools.',
    role: 'all',
    category: 'About Renbite'
  },
  {
    id: 'gen-4',
    question: 'How does the rating and review system work?',
    answer: 'After visiting a restaurant you discovered through Renbite, you can rate your experience from 1 to 5 stars and leave a written review. Reviews are visible to the entire community and help other diners make informed choices. Restaurant owners can view all reviews from their dashboard and reply publicly to engage with their customers.',
    role: 'all',
    category: 'Feedback & Support'
  },

  // --- CUSTOMERS (DINERS) ---
  {
    id: 'cust-1',
    question: 'How does the AI chatbot recommend restaurants?',
    answer: 'Renbite\'s AI chatbot is your personal dining assistant. Just tell it what you\'re in the mood for — "I want something spicy and affordable near me" or "Find me a cozy Italian restaurant for a date night" — and it will instantly suggest nearby restaurants that match your craving, budget, and vibe. The more you use it, the better its recommendations get based on your preferences.',
    role: 'customer',
    category: 'AI & Discovery'
  },
  {
    id: 'cust-2',
    question: 'How do I explore restaurants on the map?',
    answer: 'Tap the Map icon in the app to see all nearby restaurants plotted around your current location. You can filter by cuisine type, price range, or current operating hours. Tapping any pin on the map opens that restaurant\'s full profile, including photos, menus, wait times, and any active deals or events.',
    role: 'customer',
    category: 'AI & Discovery'
  },
  {
    id: 'cust-3',
    question: 'How accurate are the live wait times shown on restaurant profiles?',
    answer: 'Wait times on Renbite are updated by restaurant owners directly through their dashboard in real time. Owners can set their current busyness level and estimated wait, so you always have the latest picture before you head out. This saves you from turning up at a packed restaurant without knowing ahead of time.',
    role: 'customer',
    category: 'Restaurant Info'
  },
  {
    id: 'cust-4',
    question: 'How do I save my favourite restaurants?',
    answer: 'On any restaurant\'s profile page, tap the heart icon (❤️) to save it to your Favourites. Your saved restaurants are collected in the "Favourites" tab of your profile, so you can quickly revisit the places you love. You\'ll also get notified when a saved restaurant posts a new deal or event.',
    role: 'customer',
    category: 'Account & Profile'
  },
  {
    id: 'cust-5',
    question: 'How do I find restaurant events and special deals?',
    answer: 'Restaurant owners publish their events, limited-time offers, and special promotions directly on their Renbite profile. You can find these in two places: on the restaurant\'s individual profile page under the "Events & Deals" tab, or in the Explore feed on the home screen where trending events and offers near you are highlighted.',
    role: 'customer',
    category: 'Events & Deals'
  },

  // --- RESTAURANTS (OWNERS) ---
  {
    id: 'rest-1',
    question: 'How do I list my restaurant on Renbite?',
    answer: 'Getting your restaurant on Renbite is simple. Download the app, select "I\'m a Restaurant Owner" during sign-up, and fill in your restaurant details — name, location, cuisine type, opening hours, and photos. Our team reviews new listings within 24 to 48 hours, and once approved, your profile goes live and is immediately discoverable by local diners.',
    role: 'restaurant',
    category: 'Registration & Onboarding'
  },
  {
    id: 'rest-2',
    question: 'What analytics can I see about my restaurant\'s performance?',
    answer: 'Your Restaurant Dashboard gives you powerful insights into how your profile is performing. You can track the number of profile views, how many users saved your restaurant, engagement with your events and deals, and how customers found you (map, AI recommendation, search, etc.). Use these insights to understand what is attracting diners and refine your strategy.',
    role: 'restaurant',
    category: 'Analytics & Insights'
  },
  {
    id: 'rest-3',
    question: 'How do I boost my restaurant\'s visibility on Renbite?',
    answer: 'Renbite offers a "Boost" feature that elevates your restaurant to appear higher in discovery results, the AI\'s recommendations, and the home screen explore feed. You can activate a boost for a set duration from your dashboard. Boosted restaurants are also shown a "Promoted" badge, increasing trust and click-through from curious diners.',
    role: 'restaurant',
    category: 'Visibility & Boosting'
  },
  {
    id: 'rest-4',
    question: 'How do I update my menu, photos, and opening hours?',
    answer: 'From your Restaurant Dashboard, you can update your menu items, adjust prices, add or remove photos, and set your daily opening hours at any time. Changes go live immediately so your profile always reflects accurate, up-to-date information. Keeping your profile fresh with new photos and seasonal menu updates helps attract more diners.',
    role: 'restaurant',
    category: 'Profile Management'
  },
  {
    id: 'rest-5',
    question: 'How do I publish events, specials, or limited-time offers?',
    answer: 'In your dashboard, navigate to "Events & Promotions" and tap "Create New". You can post upcoming dining events (live music nights, tasting menus, themed evenings), limited-time dishes, happy hour specials, or exclusive discount offers. These appear on your profile and are featured in the Explore feed so nearby diners can discover them easily.',
    role: 'restaurant',
    category: 'Events & Promotions'
  },
  {
    id: 'rest-6',
    question: 'How can I update the live wait time or busyness level for my restaurant?',
    answer: 'In your Restaurant Dashboard, there is a "Live Status" panel where you can update your current wait time and busyness level with a single tap. Options include "Quiet", "Moderate", "Busy", and a custom estimated wait time in minutes. Diners who have saved your restaurant can see this information in real time before deciding to visit.',
    role: 'restaurant',
    category: 'Profile Management'
  }
];
