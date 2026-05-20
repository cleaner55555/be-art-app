import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Gem } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: "Secure Transactions",
      description: "Every piece of art is backed by blockchain technology for absolute ownership and provenance.",
      icon: <ShieldCheck className="w-8 h-8 text-indigo-500" />
    },
    {
      title: "Low Gas Fees",
      description: "Our optimized smart contracts ensure you pay the absolute minimum for every transaction.",
      icon: <Zap className="w-8 h-8 text-purple-500" />
    },
    {
      title: "Creator Royalties",
      description: "Artists earn a guaranteed percentage of every secondary sale, automatically tracked forever.",
      icon: <Gem className="w-8 h-8 text-pink-500" />
    }
  ];

  return (
    <section className="py-24 bg-neutral-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.07] hover:border-indigo-500/50 transition-all duration-300 group overflow-hidden"
            >
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-indigo-500/10 blur-3xl group-hover:bg-indigo-500/20 transition-colors" />
              <div className="mb-6 p-3 bg-white/5 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-indigo-400 transition-colors">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
