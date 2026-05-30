import React, { useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
  { title: 'Nexus Enterprise Rebrand', category: 'Branding', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80' },
  { title: 'Apex Crypto Dashboard', category: 'Development', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80' },
  { title: 'Ethereal App UI/UX', category: 'UI/UX', img: 'https://images.unsplash.com/photo-1581291518655-9523c932dedf?auto=format&fit=crop&w=600&q=80' },
  { title: 'Vanguard Campaign Matrix', category: 'Marketing', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80' },
];

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Branding', 'Development', 'UI/UX', 'Marketing'];

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" class="py-24 bg-gradient-to-b from-[#050b14] to-brand-darkBg">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <span class="text-sm font-bold text-blue-400 uppercase tracking-widest">Case Files</span>
            <h2 class="text-3xl md:text-5xl font-extrabold mt-2 text-white">Recent Work Showcase</h2>
          </div>
          {/* Navigation Filters */}
          <div class="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button 
                key={cat} onClick={() => setFilter(cat)}
                class={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 ${filter === cat ? 'bg-gradient-to-r from-blue-600 to-emerald-500 text-white' : 'bg-gray-900 text-gray-400 border border-gray-800'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Interface */}
        <motion.div layout class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((project, idx) => (
            <motion.div 
              layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} key={idx}
              class="group relative rounded-2xl overflow-hidden border border-gray-800 bg-gray-900"
            >
              <div class="aspect-square w-full overflow-hidden relative">
                <img src={project.img} alt={project.title} class="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500 opacity-80" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end" />
              </div>
              <div class="p-5">
                <span class="text-xs text-emerald-400 font-semibold uppercase tracking-wider">{project.category}</span>
                <h4 class="text-lg font-bold text-white mt-1">{project.title}</h4>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}