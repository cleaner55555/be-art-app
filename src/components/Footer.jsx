import React from 'react';
import { Palette, Twitter, Instagram, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Palette className="w-8 h-8 text-indigo-500" />
              <span className="text-xl font-bold tracking-tighter text-white">BEART</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              The world's first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Marketplace</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">All NFTs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Art</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Music</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Domain Names</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Platform Status</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Partners</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Taxes</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Join Newsletter</h4>
            <p className="text-sm text-gray-400 mb-4">Stay updated with the latest drops and features.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-indigo-500 transition-colors"
              />
              <button className="bg-indigo-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
          <p className="text-sm text-gray-500">
            © 2024 BeArt Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Twitter className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer transition-colors" />
            <Instagram className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer transition-colors" />
            <Github className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
