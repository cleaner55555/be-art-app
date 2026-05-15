import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { cn } from '../lib/utils';

const ArtCard = ({ image, title, artist, price, likes }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300"
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <button
          onClick={(e) => {
            e.preventDefault();
            setIsLiked(!isLiked);
          }}
          className={cn(
            "absolute top-4 right-4 p-2.5 backdrop-blur-md rounded-full transition-all duration-300 transform active:scale-90",
            isLiked
              ? "bg-red-500 text-white shadow-lg shadow-red-500/30"
              : "bg-black/40 text-white/70 hover:text-white hover:bg-black/60"
          )}
        >
          <Heart className={cn("w-5 h-5 transition-transform", isLiked && "fill-current animate-pulse")} />
        </button>

        <div className="absolute bottom-4 left-4 right-4 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button className="w-full py-2.5 bg-white text-black text-sm font-bold rounded-xl hover:bg-indigo-50 transition-colors shadow-xl">
            Quick Bid
          </button>
        </div>
      </div>

      <div className="p-5">
        <div className="flex justify-between items-start mb-4">
          <div className="space-y-1">
            <h3 className="font-bold text-white group-hover:text-indigo-400 transition-colors truncate max-w-[140px]">{title}</h3>
            <p className="text-xs text-gray-400 font-medium">@{artist}</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider mb-1">Current Price</p>
            <div className="flex items-center gap-1 justify-end">
              <span className="text-indigo-400 font-bold">{price}</span>
              <span className="text-[10px] text-indigo-400/70 font-bold uppercase">ETH</span>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-white/5 flex justify-between items-center">
          <div className="flex items-center gap-1.5">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-5 h-5 rounded-full border-2 border-black bg-neutral-800" />
              ))}
            </div>
            <span className="text-[10px] text-gray-500 font-medium">{likes}</span>
          </div>
          <button className="text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors uppercase tracking-widest">
            View Details
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ArtCard;
