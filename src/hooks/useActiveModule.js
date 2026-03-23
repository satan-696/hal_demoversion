import { useState, useCallback } from 'react';
import { modules } from '../data/modules';

export const useActiveModule = () => {
  const [activeModuleId, setActiveModuleId] = useState(modules[0].id);

  const activeModule = modules.find(m => m.id === activeModuleId) || modules[0];

  const setModule = useCallback((id) => {
    setActiveModuleId(id);
  }, []);

  return {
    activeModuleId,
    activeModule,
    setModule
  };
};
