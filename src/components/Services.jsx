import React from 'react';
import { motion } from 'framer-motion';

const servicesList = [
  { title: 'Graphic Design', desc: 'Premium publication vector layouts and modern high-end assets.', color: 'glow-yellow', border: 'hover:border-yellow-500/50' },
  { title: 'Web Design & Development', desc: 'Futuristic responsive web systems with pristine code architectures.', color: 'glow-blue', border: 'hover:border-blue-500/50' },
  { title: 'Branding & Identity', desc: 'Complete high-end target corporate profile assets and style matrices.', color: 'glow-green', border: 'hover:border-emerald-500/50' },
  { title: 'Social Media Management', desc: 'Strategic cross-channel expansion architectures boosting retention rates.', color: 'glow-blue', border: 'hover:border-blue-500/50' },
  { title: 'Digital Marketing', desc: 'High ROI targeted multi-platform computational customer generation models.', color: 'glow-yellow', border: 'hover:border-yellow-500/50' },
  { title: 'SEO Optimization', desc: 'Elite structural standard integrations boosting absolute domain visibility.', color: 'glow-green', border: 'hover:border-emerald-500/50' },
  { title: 'UI/UX Design', desc: 'Immersive low-friction custom web interfaces mapping user logic pathways.', color: 'glow-blue', border: 'hover:border-blue-500/50' },
  { title: 'Printing Services', desc: 'Ultra-high fidelity luxury material brand production pipelines.', color: 'glow-yellow', border: 'hover:border-yellow-500/50' },
];

export default function Services() {
  return (
    <section id="services" class="py-24 relative bg-[#050b14]">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <span class="text-sm font-bold text-yellow-400 uppercase tracking-widest">Our Capabilities</span>
          <h2 class="text-3xl md:text-5xl font-extrabold mt-2 text-white">Elite Multi-Channel Vectors</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesList.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              class={`glass-panel p-8 rounded-2xl cursor-pointer transition-all duration-300 ${service.color} ${service.border}`}
            >
              <div class="w-10 h-10 rounded-lg bg-gray-800/80 mb-6 border border-gray-700/50 flex items-center justify-center text-xl" />
              <h3 class="text-xl font-bold mb-3 text-white">{service.title}</h3>
              <p class="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}