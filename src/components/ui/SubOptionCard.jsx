import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

// Gradient exactly matches reference: dark navy bottom-left → vivid royal blue top-right
// with a subtle lighter-blue inner glow at center-top
const CARD_CLASS = [
  'bg-gradient-to-tr from-[#0a1760] via-[#1034a6] to-[#1e56d9]',
  'shadow-[inset_0_1px_30px_rgba(80,150,255,0.12)]', // soft inner glow at top
].join(' ');

const SubOptionCard = React.memo(React.forwardRef(function SubOptionCard({ option, index, onClick }, ref) {
  const Icon = option.icon;

  return (
    <motion.button
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.03, type: 'spring', stiffness: 120, damping: 18 }}
      whileTap={{ scale: 0.97 }}
      onClick={() => onClick(option)}
      className={`
        ${CARD_CLASS}
        group relative flex flex-col items-center justify-center
        p-5 md:p-8 lg:p-10
        rounded-xl md:rounded-2xl
        border border-white/20
        shadow-lg hover:shadow-2xl hover:brightness-110
        transition-all duration-300
        min-h-[170px] md:min-h-[220px] lg:min-h-[260px]
        w-full text-center
        cursor-pointer
      `}
    >
      {/* Star bookmark — top right, like the reference */}
      <div className="absolute top-2.5 right-2.5 md:top-3 md:right-3 opacity-40 group-hover:opacity-90 transition-opacity">
        <Star className="w-4 h-4 md:w-5 h-5 text-white" />
      </div>

      {/* Icon — colorful, just like in the screenshots */}
      <div className="mb-3 md:mb-5">
        <Icon className="w-10 h-10 md:w-14 h-14 lg:w-16 h-16 text-white group-hover:scale-110 transition-transform duration-300" />
      </div>

      {/* Title */}
      <h3 className="font-rajdhani font-bold text-base md:text-xl lg:text-2xl text-white uppercase tracking-wider leading-tight mb-1.5 px-1">
        {option.name}
      </h3>

      {/* Description */}
      <p className="text-white/65 text-[10px] md:text-xs lg:text-sm font-inter leading-snug max-w-[160px] md:max-w-[200px]">
        {option.desc}
      </p>

      {/* Bottom hover accent line */}
      <div className="absolute inset-x-0 bottom-0 h-0.5 md:h-1 bg-white/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-b-2xl" />
    </motion.button>
  );
}));

export default SubOptionCard;
