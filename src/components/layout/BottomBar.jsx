import React from 'react';

// Approvals pending data — matches the colored pill buttons in the reference screenshots
const APPROVALS = [
  { id: 'vl',      label: 'VL Encashment',  color: 'bg-hal-approve-green',  count: 0 },
  { id: 'leave',   label: 'Leave / Punch',   color: 'bg-hal-approve-yellow', count: 0 },
  { id: 'extra',   label: 'Extra Hours',      color: 'bg-hal-approve-teal',   count: 0 },
  { id: 'salary',  label: 'Salary Advance',   color: 'bg-hal-approve-blue',   count: 0 },
  { id: 'medical', label: 'Medical',           color: 'bg-hal-approve-darkgreen', count: 0 },
  { id: 'conv',    label: 'Conveyance',        color: 'bg-hal-approve-grey',   count: 0 },
];

const BottomBar = () => {
  return (
    <div className="w-full z-50 bg-hal-content-bg border-t-2 border-hal-border shadow-[0_-4px_20px_rgba(0,0,0,0.12)]">
      {/* Section label */}
      <div className="text-center py-1.5 bg-white border-b border-hal-border">
        <span className="text-hal-navy font-rajdhani font-bold text-sm md:text-base uppercase tracking-widest">
          Approvals Pending
        </span>
      </div>

      {/* Approval pill buttons */}
      <div className="flex items-center justify-center gap-2 md:gap-4 px-3 py-2 md:py-3 overflow-x-auto no-scrollbar">
        {APPROVALS.map((item) => (
          <button
            key={item.id}
            className={`
              ${item.color} text-white
              flex items-center gap-2 px-4 md:px-7 py-2 md:py-2.5
              rounded text-xs md:text-base font-bold uppercase tracking-wider
              whitespace-nowrap min-w-[90px] md:min-w-[130px]
              justify-between transition-all hover:opacity-90 active:scale-95
            `}
          >
            <span>{item.label}</span>
            <span className="bg-black/30 rounded-full w-5 h-5 md:w-6 h-6 flex items-center justify-center text-[10px] md:text-xs font-black">
              {item.count}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default React.memo(BottomBar);
