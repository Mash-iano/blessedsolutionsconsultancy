import React from 'react';
import { motion } from 'framer-motion';

const tiers = [
  { name: 'Basic Tier', price: '$499', features: ['Core Brand Identity Package', '3 Page Custom Component Website', 'Basic SEO Configuration', 'Bi-Weekly Support Channels'] },
  { name: 'Standard Suite', price: '$1,299', features: ['Full Corporate Branding Matrix', '8 Page High-Fidelity Website', 'Advanced Automation Setup', 'Priority Response Layer'] },
  { name: 'Premium Cloud', price: '$2,999', features: ['Comprehensive Multi-Channel Campaigns', 'Unlimited Platform Architectures', 'Custom Machine Integration Systems', 'Dedicated Strategist Channel'] }
];

export default function Pricing() {
  return (
    <section id="pricing" class="py-24 relative bg-brand-darkBg">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <span class="text-sm font-bold text-emerald-400 uppercase tracking-widest">Pricing Structure</span>
          <h2 class="text-3xl md:text-5xl font-extrabold mt-2 text-white">Optimized ROI Scalings</h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tiers.map((tier, idx) => (
            <motion.div 
              key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
              class={`glass-panel rounded-3xl p-8 relative flex flex-col justify-between ${idx === 1 ? 'border-blue-500 glow-blue lg:-translate-y-4' : 'glow-yellow'}`}
            >
              <div>
                <h4 class="text-xl font-bold text-white mb-2">{tier.name}</h4>
                <div class="flex items-baseline my-4">
                  <span class="text-5xl font-extrabold tracking-tight text-white">{tier.price}</span>
                  <span class="text-gray-400 text-sm ml-2">/ project entry</span>
                </div>
                <ul class="space-y-4 my-6">
                  {tier.features.map((f, i) => (
                    <li key={i} class="text-gray-400 text-sm flex items-center">
                      <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2.5" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <button class={`w-full py-3 rounded-xl font-bold text-sm transition-all mt-6 ${idx === 1 ? 'bg-gradient-to-r from-blue-600 to-emerald-500 text-white shadow-lg shadow-blue-500/20' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}>
                Initialize Matrix
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}