import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" class="py-24 relative bg-gradient-to-b from-brand-darkBg to-[#02050b]">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <span class="text-sm font-bold text-yellow-400 uppercase tracking-widest">Contact Gateway</span>
            <h2 class="text-3xl md:text-5xl font-extrabold mt-2 mb-6 text-white">Let's Construct Something Remarkable</h2>
            <p class="text-gray-400 text-base leading-relaxed mb-8">
              Have questions or ready to launch your next project? Get in touch with our team for tailored creative strategies and high-performance business transformations.
            </p>
            <div class="space-y-4">
              <div class="flex items-center space-x-4">
                <div class="w-10 h-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-blue-400" />
                <span class="text-gray-300">hello@blessedsolutions.com</span>
              </div>
              <div class="flex items-center space-x-4">
                <div class="w-10 h-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-emerald-400" />
                <span class="text-gray-300">+254 700 000 000</span>
              </div>
            </div>
          </motion.div>

          {/* Form Gateway Module */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} class="glass-panel p-8 rounded-3xl glow-green">
            <form onSubmit={(e) => e.preventDefault()} class="space-y-6">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label class="block text-xs font-semibold uppercase text-gray-400 tracking-wider mb-2">Name</label>
                  <input type="text" required class="w-full bg-gray-900/60 border border-gray-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors" />
                </div>
                <div>
                  <label class="block text-xs font-semibold uppercase text-gray-400 tracking-wider mb-2">Email Address</label>
                  <input type="email" required class="w-full bg-gray-900/60 border border-gray-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors" />
                </div>
              </div>
              <div>
                <label class="block text-xs font-semibold uppercase text-gray-400 tracking-wider mb-2">Message Payload</label>
                <textarea rows="4" required class="w-full bg-gray-900/60 border border-gray-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-yellow-500 transition-colors" />
              </div>
              <button type="submit" class="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-500 text-white font-bold text-sm tracking-wide hover:opacity-95 transition shadow-lg shadow-emerald-500/10">
                Transmit Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}