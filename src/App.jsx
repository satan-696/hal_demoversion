import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

const AppShell = lazy(() => import('./components/layout/AppShell'));
const HomePage = lazy(() => import('./pages/HomePage'));
const IRSLoginPage = lazy(() => import('./pages/IRSLoginPage'));

const LoadingFallback = () => (
  <div className="fixed inset-0 bg-hal-navy flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-hal-sky border-t-transparent rounded-full animate-spin" />
  </div>
);

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<AppShell />}>
            <Route index element={<Navigate to="home" replace />} />
            <Route path="home" element={<HomePage />} />
            <Route path="*" element={<Navigate to="home" replace />} />
          </Route>
          <Route path="/irs-login" element={<IRSLoginPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
