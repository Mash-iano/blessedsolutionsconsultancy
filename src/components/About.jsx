import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const stats = [
    { value: '150+', label: 'Successful Projects' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '5+', label: 'Years Experience' },
  ];

  return (
    <section id="about" class="py-24 relative bg-gradient-to-b from-transparent to-[#050b14]">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span class="text-sm font-bold text-emerald-400 uppercase tracking-widest">Who We Are</span>
            <h2 class="text-3xl md:text-5xl font-extrabold mt-2 mb-6 text-white">
              We design paths for modern scalable businesses.
            </h2>
            <p class="text-gray-400 leading-relaxed mb-6">
              Blessed Solutions Consultancy is a premium multi-disciplinary agency where visual artistry converges seamlessly with modern technology. We turn standard frameworks into immersive online environments.
            </p>
            <p class="text-gray-400 highway-relaxed">
              Whether you are an aspiring enterprise ecosystem or an established community structure, our mission remains fixed: unlocking authentic modern positioning.
            </p>
          </motion.div>

          <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                class="glass-panel p-6 rounded-2xl glow-blue text-center lg:text-left flex flex-col justify-center"
              >
                <h3 class="text-4xl font-extrabold bg-gradient-to-r from-yellow-400 to-blue-500 bg-clip-text text-transparent">
                  {stat.value}
                </h3>
                <p class="text-gray-400 text-sm mt-1 uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}