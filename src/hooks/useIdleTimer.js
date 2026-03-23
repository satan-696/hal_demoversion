import { useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const useIdleTimer = (timeoutMs = 4 * 60 * 1000) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleIdle = useCallback(() => {
    if (location.pathname !== '/login' && location.pathname !== '/animation') {
      navigate('/login');
    }
  }, [navigate, location]);

  useEffect(() => {
    let timer;

    const resetTimer = () => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(handleIdle, timeoutMs);
    };

    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
    
    events.forEach(event => {
      window.addEventListener(event, resetTimer);
    });

    resetTimer();

    return () => {
      if (timer) clearTimeout(timer);
      events.forEach(event => {
        window.removeEventListener(event, resetTimer);
      });
    };
  }, [handleIdle, timeoutMs]);
};
