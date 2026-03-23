import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { modules } from '../../data/modules';

const ModuleNavbar = ({ activeModuleId, onModuleChange }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current?.querySelector(`[data-id="${activeModuleId}"]`);
    if (el) el.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }, [activeModuleId]);

  return (
    /* Outer nav wrapper — solid navy with a subtle bottom shadow */
    <nav className="bg-[#003087] shadow-md border-b border-[#001F5B]">
      <div
        ref={scrollRef}
        className="flex items-center overflow-x-auto no-scrollbar px-2 py-2 md:px-4 md:py-2.5 gap-1 md:gap-2"
      >
        {modules.map((module) => {
          const isActive = activeModuleId === module.id;
          const Icon = module.icon;

          return (
            <button
              key={module.id}
              data-id={module.id}
              onClick={() => onModuleChange(module.id)}
              title={module.name}
              className={`
                relative flex flex-col items-center justify-center gap-0.5
                rounded-lg
                px-3 md:px-5 lg:px-7
                py-1.5 md:py-2.5 lg:py-3
                min-w-[80px] sm:min-w-[100px] md:min-w-[130px] lg:min-w-[155px]
                whitespace-nowrap shrink-0
                transition-all duration-200
                font-rajdhani font-bold
                text-[11px] sm:text-xs md:text-sm lg:text-base
                tracking-wide
                select-none
                ${isActive
                  ? 'bg-white text-[#003087] shadow-md ring-1 ring-white/60'
                  : 'bg-transparent text-white/85 hover:bg-white/15 hover:text-white'
                }
              `}
            >
              {/* Icon — coloured on active, white/muted on inactive */}
              <Icon
                className={`
                  w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7
                  mb-0.5
                  ${isActive ? 'text-[#003087]' : 'text-white/70'}
                `}
              />

              {/* Label */}
              <span className="leading-tight text-center">{module.name}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default React.memo(ModuleNavbar);
