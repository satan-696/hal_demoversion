import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderBar from './HeaderBar';
import ModuleNavbar from './ModuleNavbar';
import BottomBar from './BottomBar';
import { useActiveModule } from '../../hooks/useActiveModule';
import { useIdleTimer } from '../../hooks/useIdleTimer';

const AppShell = () => {
  const { activeModule, activeModuleId, setModule } = useActiveModule();
  
  useIdleTimer(4 * 60 * 1000);

  return (
    <div className="h-screen bg-hal-content-bg flex flex-col font-inter selection:bg-hal-sky selection:text-white overflow-hidden">
      {/* Fixed top bars: header (~70px) + navbar (~50px) = ~120px total */}
      <HeaderBar activeModuleName={activeModule.name} />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <ModuleNavbar
          activeModuleId={activeModuleId}
          onModuleChange={setModule}
        />

        <main 
          className="flex-1 px-3 md:px-6 pt-4 md:pt-6 kiosk-scroll overflow-y-auto"
          style={{ 
            overscrollBehavior: 'contain',
            WebkitOverflowScrolling: 'touch',
            touchAction: 'pan-y',
          }}
        >
          <Outlet context={{ activeModule, setModule }} />
        </main>

        <BottomBar />
      </div>
    </div>
  );
};

export default AppShell;
