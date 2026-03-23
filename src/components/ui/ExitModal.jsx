import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LogOut, TriangleAlert, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ExitModal = ({ onClose }) => {
  const navigate = useNavigate();

  const handleExit = () => {
    navigate('/');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-hal-navy/60 backdrop-blur-sm"
        />
        
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative bg-white rounded-2xl md:rounded-[2rem] shadow-2xl p-6 md:p-10 max-w-sm w-full border border-hal-border overflow-hidden"
        >
          {/* Accent bar */}
          <div className="absolute top-0 left-0 w-full h-1 bg-red-500" />
          
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-6">
              <LogOut className="w-8 h-8 text-red-500" />
            </div>
            
            <h3 className="font-rajdhani font-bold text-2xl text-hal-text mb-2 uppercase tracking-wide">
              Exit Terminal?
            </h3>
            <p className="text-hal-muted mb-8 leading-relaxed">
              Are you sure you want to end your session? You will be logged out of the HAL Kiosk terminal.
            </p>
            
            <div className="flex flex-col w-full gap-3">
              <button
                onClick={handleExit}
                className="w-full bg-red-500 text-white font-rajdhani font-bold py-3 rounded-xl hover:bg-red-600 active:scale-95 transition-all shadow-lg shadow-red-500/20 uppercase tracking-widest"
              >
                Yes, Exit Session
              </button>
              
              <button
                onClick={onClose}
                className="w-full bg-hal-offwhite text-hal-text font-rajdhani font-bold py-3 rounded-xl hover:bg-hal-border active:scale-95 transition-all uppercase tracking-widest"
              >
                Cancel
              </button>
            </div>
          </div>
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-hal-muted hover:text-hal-text rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ExitModal;
