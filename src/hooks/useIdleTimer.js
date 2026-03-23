import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export const useIdleTimer = (timeoutMs = 4 * 60 * 1000) => {
  const navigate = useNavigate();
  const timer = useRef(null);

  const reset = () => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      navigate('/login');
    }, timeoutMs);
  };

  useEffect(() => {
    const events = ['touchstart', 'touchmove', 'click', 'keydown', 'mousemove'];
    events.forEach(e => window.addEventListener(e, reset));
    reset();
    return () => {
      clearTimeout(timer.current);
      events.forEach(e => window.removeEventListener(e, reset));
    };
  }, []);
};
