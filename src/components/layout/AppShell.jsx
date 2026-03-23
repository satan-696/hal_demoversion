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
    <div className="min-h-screen bg-hal-content-bg flex flex-col font-inter selection:bg-hal-sky selection:text-white">
      {/* Fixed top bars: header (~70px) + navbar (~50px) = ~120px total */}
      <HeaderBar activeModuleName={activeModule.name} />
      
      <div className="mt-[90px] sm:mt-[95px] md:mt-[100px] flex flex-col flex-1">
        <ModuleNavbar
          activeModuleId={activeModuleId}
          onModuleChange={setModule}
        />

        <main className="flex-1 px-3 md:px-6 pt-4 md:pt-6 pb-28 md:pb-32 overflow-y-auto">
          <Outlet context={{ activeModule, setModule }} />
        </main>

        <BottomBar />
      </div>
    </div>
  );
};

export default AppShell;
