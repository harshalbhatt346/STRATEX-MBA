import React from 'react';
import { Simulation } from '../types';
import { ArrowLeft, Play, ShieldAlert, Target, Briefcase, Building2, TrendingUp, Info, DollarSign } from 'lucide-react';

interface Props {
  simulation: Simulation;
  onBack: () => void;
  onStartSimulation: () => void;
}

export const SimulationBriefing: React.FC<Props> = ({ simulation, onBack, onStartSimulation }) => {
  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-fadeIn">
      {/* Back button */}
      <div>
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Subject Directory
        </button>
      </div>

      {/* Official Executive Appointment Dossier */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-indigo-950/60 border border-slate-800 rounded-3xl p-8 lg:p-10 shadow-2xl relative overflow-hidden">
        <div className="space-y-6 relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                Executive Assignment Dossier
              </span>
              <span className="text-xs text-slate-400">{simulation.industry}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400 font-semibold">{simulation.rounds.length} Decision Rounds</span>
              <span className="text-slate-600">•</span>
              <span className="text-xs font-bold text-amber-400">{simulation.difficulty} Track</span>
            </div>
          </div>

          <div>
            <h1 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              {simulation.title}
            </h1>
            <p className="text-base text-indigo-300 font-medium mt-2">
              {simulation.tagline}
            </p>
          </div>

          {/* Role Appointment Box */}
          <div className="bg-slate-950/90 border border-indigo-500/30 rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Your Appointed Role:</span>
                <div className="text-lg font-bold text-white">{simulation.role}</div>
                <div className="text-xs text-slate-400 flex items-center gap-1.5 mt-0.5">
                  <Building2 className="w-3.5 h-3.5" /> {simulation.company}
                </div>
              </div>
            </div>

            <button
              onClick={onStartSimulation}
              className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-sm py-3.5 px-8 rounded-xl shadow-xl shadow-indigo-600/30 hover:scale-[1.02] transition-all"
            >
              <Play className="w-4 h-4 fill-current" />
              Accept Assignment & Enter Round 1
            </button>
          </div>
        </div>
      </div>

      {/* Baseline Business Performance Scorecard */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 shadow-xl space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-indigo-400" /> Initial Business Scorecard (Day 0 Baseline)
          </h2>
          <span className="text-xs text-slate-400">Your managerial decisions will directly drive these metrics</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {simulation.initialMetrics.map(m => (
            <div key={m.key} className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1">
              <span className="text-[10px] text-slate-400 uppercase font-semibold block">{m.label}</span>
              <div className="text-2xl font-black text-white">
                {m.format === 'currency' ? `${m.value} ${m.unit}` : `${m.value}${m.unit}`}
              </div>
              {m.benchmark !== undefined && (
                <div className="text-[10px] text-slate-500">
                  Target: {m.benchmark}{m.unit}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Two Column Narrative: Context vs Objectives */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Background & Context (2 cols) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 shadow-xl space-y-6">
            <div className="space-y-2">
              <h3 className="text-base font-bold text-white uppercase tracking-wider text-xs text-indigo-400">
                1. Company History & Foundational Moat
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {simulation.background.companyHistory}
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-slate-800">
              <h3 className="text-base font-bold text-white uppercase tracking-wider text-xs text-indigo-400">
                2. Industry Competitive Battlefield
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {simulation.background.industryContext}
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-slate-800">
              <h3 className="text-base font-bold text-white uppercase tracking-wider text-xs text-rose-400 flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4" /> 3. Current Business Crisis & Immediate Challenge
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-rose-900/30">
                {simulation.background.currentSituation}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Objectives & Constraints (1 col) */}
        <div className="space-y-6">
          {/* Objectives */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
              <Target className="w-4 h-4" /> Board Strategic Mandate
            </h3>
            <ul className="space-y-3">
              {simulation.objectives.map((obj, i) => (
                <li key={i} className="text-xs text-slate-300 flex items-start gap-2.5 leading-relaxed">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 text-[10px] font-bold mt-0.5">
                    {i + 1}
                  </div>
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Constraints */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
              <ShieldAlert className="w-4 h-4" /> Operational & Financial Constraints
            </h3>
            <ul className="space-y-3">
              {simulation.constraints.map((con, i) => (
                <li key={i} className="text-xs text-slate-300 flex items-start gap-2.5 leading-relaxed bg-slate-950/80 p-2.5 rounded-lg border border-slate-800">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>{con}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Related Concepts */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Evaluated MBA Concepts
            </span>
            <div className="flex flex-wrap gap-1.5">
              {simulation.relatedConcepts.map(c => (
                <span key={c} className="text-xs bg-slate-950 text-indigo-300 px-2.5 py-1 rounded-lg border border-indigo-900/40">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
