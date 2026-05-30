import React from 'react';

export default function Footer() {
  return (
    <footer class="border-t border-gray-900 bg-[#02050b] py-12">
      <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <span class="text-xl font-black bg-gradient-to-r from-yellow-400 to-emerald-400 bg-clip-text text-transparent">
            BLESSED SOLUTIONS
          </span>
          <p class="text-gray-500 text-xs mt-1">Transforming Brands Through Creativity & Digital Innovation</p>
        </div>
        
        <div class="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
          <a href="#about" class="hover:text-white transition">About</a>
          <a href="#services" class="hover:text-white transition">Services</a>
          <a href="#portfolio" class="hover:text-white transition">Portfolio</a>
          <a href="#contact" class="hover:text-white transition">Contact</a>
        </div>

        <p class="text-gray-600 text-xs">
          &copy; {new Date().getFullYear()} Blessed Solutions Consultancy. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}