import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['Home', 'About', 'Services', 'Portfolio', 'Pricing', 'Contact'];

  return (
    <nav class={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
      <div class="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          class="flex items-center space-x-2 cursor-pointer"
        >
          <span class="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-yellow-400 via-blue-500 to-emerald-400 bg-clip-text text-transparent">
            BLESSED SOLUTIONS
          </span>
        </motion.div>

        {/* Desktop Links */}
        <div class="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              class="text-sm font-medium text-gray-300 hover:text-yellow-400 transition-colors duration-200"
            >
              {link}
            </a>
          ))}
          <a href="#contact" class="px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 hover:scale-105 transition-transform">
            Get Started
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button onClick={() => setIsOpen(!isOpen)} class="md:hidden text-white focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            class="absolute top-full left-0 w-full bg-[#0b0f19] border-b border-gray-800 px-6 py-6 space-y-4 md:hidden flex flex-col shadow-2xl"
          >
            {links.map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`} 
                onClick={() => setIsOpen(false)}
                class="text-lg text-gray-300 hover:text-yellow-400"
              >
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}