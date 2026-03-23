import React, { useState } from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SubOptionCard from '../components/ui/SubOptionCard';
import SubOptionModal from '../components/ui/SubOptionModal';

const HomePage = () => {
  const { activeModule } = useOutletContext();
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    if (option.id === 'irs') {
      navigate('/irs-login');
    } else {
      setSelectedOption(option);
    }
  };

  return (
    <div className="max-w-[1900px] mx-auto">
      {/* Module label */}
      <div className="mb-4 md:mb-6">
        <h2 className="font-rajdhani font-bold text-hal-navy text-xl md:text-2xl lg:text-3xl uppercase tracking-widest border-b-2 border-hal-gold pb-2 inline-block">
          {activeModule.name}
        </h2>
      </div>

      {/* Sub-options grid */}
      <motion.div
        layout
        className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 md:gap-6 lg:gap-8"
      >
        <AnimatePresence mode="popLayout">
          {activeModule.subOptions.map((option, index) => (
            <SubOptionCard
              key={`${activeModule.id}-${option.id}`}
              option={option}
              index={index}
              onClick={handleOptionClick}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty state */}
      {activeModule.subOptions.length === 0 && (
        <div className="flex flex-col items-center justify-center py-24 text-hal-muted">
          <p className="font-rajdhani font-bold text-lg uppercase tracking-widest">No options available</p>
        </div>
      )}

      {/* Modal */}
      {selectedOption && (
        <SubOptionModal
          option={selectedOption}
          onClose={() => setSelectedOption(null)}
        />
      )}
    </div>
  );
};

export default HomePage;
