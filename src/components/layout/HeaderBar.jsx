import React from 'react';
import { useClock } from '../../hooks/useClock';
import { User } from 'lucide-react';
import halLogo from '../../assets/hal_logo.png';

const HeaderBar = ({ activeModuleName }) => {
  const { formattedTime, formattedDate } = useClock();

  return (
    <header className="w-full z-50 shadow-lg">
      {/* Top strip — HAL branding + user info */}
      <div className="bg-hal-navy-dark flex items-center justify-between px-3 md:px-6 py-1.5 border-b border-white/10">
        {/* Left: HAL logo area */}
        <div className="flex items-center gap-2">
          {/* Real HAL logo */}
          <img
            src={halLogo}
            alt="HAL Logo"
            className="h-10 md:h-12 lg:h-14 w-auto object-contain"
          />
        </div>

        {/* Center: Portal title */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <h1 className="font-rajdhani font-bold text-white text-sm sm:text-base md:text-lg lg:text-xl tracking-widest uppercase whitespace-nowrap">
            HAL Accessories Division, Lucknow
          </h1>
          <p className="text-hal-sky text-[10px] md:text-xs text-center tracking-[0.15em] uppercase font-bold opacity-80 whitespace-nowrap">
            Employee Self Service Portal
          </p>
        </div>

        {/* Right: User info + time */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex flex-col items-end leading-tight">
            <span className="text-white font-bold text-xs md:text-sm font-mono">{formattedTime}</span>
            <span className="text-white/60 text-[10px] uppercase tracking-widest">{formattedDate}</span>
          </div>
          <div className="flex items-center gap-2 pl-3 border-l border-white/20">
            <div className="w-8 h-8 md:w-10 h-10 rounded-full bg-hal-sky/20 border-2 border-hal-sky/40 flex items-center justify-center overflow-hidden">
              <User className="w-5 h-5 text-hal-sky" />
            </div>
            <div className="hidden lg:flex flex-col leading-tight">
              <span className="text-white font-bold text-xs tracking-wider">ADMIN USER</span>
              <span className="text-white/50 text-[9px] uppercase tracking-widest">Information Technology</span>
            </div>
          </div>
        </div>
      </div>

      {/* Welcome bar */}
      <div className="bg-hal-navy px-3 md:px-6 py-1 flex items-center justify-between">
        <span className="text-white/80 font-rajdhani font-semibold text-sm tracking-wide">
          Welcome, <span className="text-hal-sky font-bold">Admin User</span>
        </span>
        <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest hidden sm:block">
          {activeModuleName}
        </span>
      </div>
    </header>
  );
};

export default React.memo(HeaderBar);
