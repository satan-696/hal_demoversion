import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, ArrowLeft } from 'lucide-react';
import halLogo from '../assets/hal_logo.png';

const IRSLoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login and go back to dashboard
    navigate('/');
  };

  return (
    <div className="h-screen w-full bg-white flex flex-col items-center justify-center font-serif p-4 kiosk-scroll overflow-y-auto" style={{ overscrollBehavior: 'contain' }}>
      {/* Back Button */}
      <button 
        onClick={() => navigate('/')}
        className="fixed top-6 left-6 flex items-center gap-2 text-hal-navy hover:text-hal-sky transition-colors font-sans font-bold uppercase tracking-widest text-sm"
      >
        <ArrowLeft className="w-5 h-5" />
        Back to Dashboard
      </button>

      {/* Header Section */}
      <div className="flex flex-col items-center mb-8 text-center">
        <img 
          src={halLogo} 
          alt="HAL Logo" 
          className="h-24 md:h-32 mb-4 object-contain"
        />
        <h1 className="text-xl md:text-2xl text-gray-800 font-normal">
          (IRS) Dimensional Inspection
        </h1>
      </div>

      {/* Login Box */}
      <div className="w-full max-w-[450px] bg-[#F5F5DC] border border-[#dcdcdc] rounded shadow-sm overflow-hidden">
        {/* Box Header */}
        <div className="bg-[#EFEEE0] px-4 py-2 border-b border-[#dcdcdc]">
          <h2 className="text-[#666] text-sm font-bold">Please Login</h2>
        </div>

        {/* Form Body */}
        <form onSubmit={handleLogin} className="p-6 space-y-4">
          <div className="space-y-1.5">
            <label className="block text-[#003399] font-bold text-sm">User Name</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.setCustomValidity(''))}
              className="w-full px-2 py-1.5 bg-white border border-[#99CC99] rounded outline-none focus:ring-1 focus:ring-[#99CC99]"
              required
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-[#003399] font-bold text-sm">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-2 py-1.5 bg-white border border-[#99CC99] rounded outline-none focus:ring-1 focus:ring-[#99CC99]"
              required
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="flex items-center gap-2 px-4 py-1.5 bg-[#B0C4DE] border border-[#778899] rounded shadow-sm hover:bg-[#A9B9D1] transition-colors group"
            >
              <div className="bg-gray-700 rounded-sm p-0.5">
                <User className="w-3 h-3 text-white" />
              </div>
              <span className="text-[#333] font-bold text-sm">Login</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default IRSLoginPage;
