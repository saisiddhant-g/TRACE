import React from 'react';
import { Shield } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen relative">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex items-center justify-between backdrop-blur-xl bg-black/40 border-b border-white/5">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <Shield className="w-10 h-10 text-orange-500" />
            <div className="flex flex-col">
              <h1 className="text-3xl font-black text-white tracking-tighter italic uppercase">
                TRACE
              </h1>
              <span className="text-[9px] font-black text-slate-600 uppercase tracking-[0.3em] mono">
                Signal Intelligence Unit
              </span>
            </div>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest mono">
              SYSTEM ACTIVE
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-32 px-4 md:px-12 pb-20 max-w-[1800px] mx-auto">
        {children}
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 z-40 px-8 py-4 backdrop-blur-xl bg-black/60 border-t border-white/5">
        <div className="flex items-center justify-between max-w-[1800px] mx-auto">
          <div className="flex items-center gap-4">
            <span className="text-[9px] font-black text-slate-600 uppercase tracking-[0.3em] mono">
              © 2024 TEAM STRATAGEM
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-[9px] font-black text-slate-600 uppercase tracking-[0.2em] mono">
              AASIST HtrgGAT v2.5
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};
