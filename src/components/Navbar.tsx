import React from 'react';
import { useStudent } from '../context/StudentContext';
import { useAuth } from '../context/AuthContext';
import { Compass, BookOpen, User, Layers, Award, Sparkles, LogOut } from 'lucide-react';

interface Props {
  currentView: 'dashboard' | 'subject' | 'briefing' | 'arena' | 'debrief' | 'concepts' | 'profile';
  onNavigate: (view: 'dashboard' | 'concepts' | 'profile') => void;
}

export const Navbar: React.FC<Props> = ({ currentView, onNavigate }) => {
  const { profile } = useStudent();
  const { logout } = useAuth();

  return (
    <header className="sticky top-0 z-40 bg-slate-950/85 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <div
          onClick={() => onNavigate('dashboard')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center text-white font-black shadow-lg shadow-indigo-600/25 group-hover:scale-105 transition-all">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <div className="text-base font-extrabold text-white tracking-tight flex items-center gap-1.5">
              <span>STRATEX</span>
              <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.2 rounded bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                MBA LAB
              </span>
            </div>
            <p className="text-[9px] text-slate-400 tracking-wider font-semibold uppercase -mt-0.5">
              Experiential Management System
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-slate-800 text-xs font-semibold">
          <button
            onClick={() => onNavigate('dashboard')}
            className={`px-3.5 py-1.5 rounded-lg transition-all ${
              currentView === 'dashboard' || currentView === 'subject'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Dashboard
          </button>
          <button
            onClick={() => onNavigate('concepts')}
            className={`px-3.5 py-1.5 rounded-lg transition-all ${
              currentView === 'concepts'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Concept Vault
          </button>
          <button
            onClick={() => onNavigate('profile')}
            className={`px-3.5 py-1.5 rounded-lg transition-all ${
              currentView === 'profile'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Decision Analytics
          </button>
        </nav>

        {/* Right Student Profile Pill & Sign Out */}
        <div className="flex items-center gap-2">
          <div
            onClick={() => onNavigate('profile')}
            className="flex items-center gap-3 bg-slate-900/80 hover:bg-slate-850 p-1.5 pr-3 rounded-xl border border-slate-800 cursor-pointer transition-all hover:border-slate-700"
            title="View Decision Analytics & Profile"
          >
            <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center text-white text-xs font-bold">
              {profile.name.charAt(0)}
            </div>
            <div className="text-left hidden sm:block">
              <div className="text-xs font-bold text-white leading-tight">{profile.name}</div>
              <div className="text-[10px] text-slate-400 leading-tight">
                {profile.studentId ? `${profile.studentId} • ` : ''}{profile.completedSimulationIds.length} Completed
              </div>
            </div>
          </div>

          <button
            onClick={() => logout()}
            className="p-2 rounded-xl bg-slate-900/80 hover:bg-rose-950/40 text-slate-400 hover:text-rose-400 border border-slate-800 hover:border-rose-800/50 transition-all flex items-center gap-1.5 text-xs font-medium cursor-pointer"
            title="Sign Out"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span className="hidden lg:inline text-[11px]">Sign Out</span>
          </button>
        </div>
      </div>
    </header>
  );
};
