import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" class="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Background Tech Orbs */}
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse-slow" />
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] animate-pulse-slow" />

      <div class="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span class="inline-block px-4 py-1.5 rounded-full bg-gray-900/80 border border-gray-800 text-xs font-semibold tracking-wider text-yellow-400 mb-6 uppercase">
            🚀 The Future of Digital Growth
          </span>
          <h1 class="text-4xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.15]">
            Transforming Brands Through <br />
            <span class="bg-gradient-to-r from-yellow-400 via-blue-500 to-emerald-400 bg-clip-text text-transparent">
              Creativity & Digital Innovation
            </span>
          </h1>
          <p class="max-w-3xl mx-auto text-gray-400 text-lg md:text-xl font-light mb-10 leading-relaxed">
            We engineer high-end digital experiences, comprehensive branding blueprints, and elite growth solutions crafted for ambitious startups, organizations, and businesses worldwide.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          class="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <a href="#contact" class="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500 font-bold text-white shadow-xl shadow-blue-500/20 hover:opacity-90 transition transform hover:-y-0.5">
            Get Started
          </a>
          <a href="#portfolio" class="w-full sm:w-auto px-8 py-4 rounded-full bg-gray-900 border border-gray-800 font-bold text-gray-300 hover:text-white hover:bg-gray-800 transition">
            View Portfolio
          </a>
        </motion.div>
      </div>
    </section>
  );
}