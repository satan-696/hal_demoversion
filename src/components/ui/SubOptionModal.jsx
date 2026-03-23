import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Info, Settings } from 'lucide-react';

const SubOptionModal = ({ option, onClose }) => {
  if (!option) return null;

  const Icon = option.icon;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-hal-navy/50 backdrop-blur-sm"
        />

        {/* Modal card */}
        <motion.div
          initial={{ scale: 0.88, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.88, opacity: 0, y: 30 }}
          transition={{ type: 'spring', stiffness: 320, damping: 26 }}
          className="relative bg-white rounded-2xl shadow-2xl p-6 md:p-8 max-w-md w-full border border-hal-border overflow-hidden"
        >
          {/* Top accent gradient */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-hal-sky via-hal-navy to-hal-gold" />

          <div className="flex flex-col items-center text-center">
            {/* Icon circle */}
            <div className="w-16 h-16 md:w-20 h-20 bg-hal-offwhite rounded-full flex items-center justify-center mb-5 ring-4 ring-hal-offwhite/60 border border-hal-border">
              <Icon className="w-8 h-8 md:w-10 h-10 text-hal-navy" />
            </div>

            <h3 className="font-rajdhani font-bold text-xl md:text-2xl text-hal-text mb-4 uppercase tracking-widest">
              {option.name}
            </h3>

            {/* Status notice */}
            <div className="bg-hal-offwhite p-4 md:p-5 rounded-xl mb-6 w-full border border-hal-border/50">
              <div className="flex items-start gap-3 text-left">
                <div className="bg-hal-sky/10 p-1.5 rounded-lg mt-0.5 shrink-0">
                  <Info className="w-4 h-4 text-hal-sky" />
                </div>
                <div>
                  <h4 className="font-rajdhani font-bold text-xs text-hal-muted uppercase tracking-wider mb-1">
                    Status: Under Development
                  </h4>
                  <p className="text-hal-text/80 text-sm leading-relaxed">
                    The <span className="font-bold text-hal-navy">{option.name}</span> module is currently under development.
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full bg-hal-navy text-white font-rajdhani font-bold py-3 rounded-xl hover:bg-hal-navy-light active:scale-95 transition-all shadow-lg uppercase tracking-[0.2em] text-sm"
            >
              Back to Dashboard
            </button>

            <div className="mt-4 flex items-center gap-2 text-hal-muted text-[10px] uppercase font-bold tracking-widest">
              <Settings className="w-3 h-3 animate-spin-slow" />
              HAL PPS — Terminal V2.0
            </div>
          </div>

          {/* Close X button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 text-hal-muted hover:text-hal-text bg-hal-offwhite rounded-lg transition-colors hover:bg-hal-border"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default SubOptionModal;
