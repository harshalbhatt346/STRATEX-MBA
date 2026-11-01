import React, { useState } from 'react';
import { Subject, Simulation } from '../types';
import { getSimulationsBySubject } from '../data/simulations';
import { useStudent } from '../context/StudentContext';
import { ArrowLeft, Play, BookOpen, Clock, Shield, Award, CheckCircle, ChevronRight, BarChart2, Layers } from 'lucide-react';

interface Props {
  subject: Subject;
  onBack: () => void;
  onSelectSimulation: (simulationId: string) => void;
}

export const SubjectView: React.FC<Props> = ({ subject, onBack, onSelectSimulation }) => {
  const [activeTab, setActiveTab] = useState<'simulations' | 'concepts'>('simulations');
  const { profile } = useStudent();
  const simulations = getSimulationsBySubject(subject.id);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Back button */}
      <div>
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Executive Dashboard
        </button>
      </div>

      {/* Subject Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-900/90 to-indigo-950/40 border border-slate-800 rounded-3xl p-8 relative overflow-hidden shadow-2xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
          <div className="space-y-3 max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">
                {subject.code}
              </span>
              <span className="text-xs text-slate-400 font-semibold">{simulations.length} Full Simulations Available</span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              {subject.title}
            </h1>
            <p className="text-sm text-slate-300 leading-relaxed">
              {subject.description}
            </p>
          </div>

          <div className="flex items-center gap-2 bg-slate-950/80 p-1.5 rounded-2xl border border-slate-800">
            <button
              onClick={() => setActiveTab('simulations')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'simulations'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Simulations ({simulations.length})
            </button>
            <button
              onClick={() => setActiveTab('concepts')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'concepts'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Curriculum Concepts ({subject.concepts.length})
            </button>
          </div>
        </div>
      </div>

      {/* Tab 1: Simulations List */}
      {activeTab === 'simulations' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-white">Interactive Management Simulations</h2>
              <p className="text-xs text-slate-400">Step into the driver's seat of actual organizations facing critical strategic dilemmas</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {simulations.map(sim => {
              const isCompleted = profile.completedSimulationIds.includes(sim.id);
              const attempts = profile.attempts[sim.id] || [];
              const bestScore = attempts.length > 0 ? Math.max(...attempts.map(a => a.finalScore)) : null;

              return (
                <div
                  key={sim.id}
                  className="bg-slate-900 border border-slate-800 hover:border-indigo-500/40 rounded-2xl p-6 lg:p-7 transition-all duration-200 flex flex-col justify-between group shadow-xl hover:shadow-indigo-500/5 relative overflow-hidden"
                >
                  {isCompleted && (
                    <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                      <CheckCircle className="w-3.5 h-3.5" /> Completed ({bestScore}/100)
                    </div>
                  )}

                  <div className="space-y-4">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                        {sim.industry}
                      </span>
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                        sim.difficulty === 'Beginner' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                        sim.difficulty === 'Intermediate' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                        'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                      }`}>
                        {sim.difficulty}
                      </span>
                      <span className="text-xs text-slate-500 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> {sim.estimatedMinutes} mins
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                        {sim.title}
                      </h3>
                      <p className="text-xs text-indigo-300 font-medium mt-1">
                        Role: {sim.role}
                      </p>
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                      {sim.background.currentSituation}
                    </p>

                    {/* Related Concepts pills */}
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Academic Concepts Tested:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {sim.relatedConcepts.map(c => (
                          <span key={c} className="text-[10px] font-medium bg-slate-950 text-slate-300 px-2 py-0.5 rounded border border-slate-800">
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between">
                    <div className="text-xs text-slate-500">
                      <span className="font-semibold text-slate-400">{sim.rounds.length} Decision Rounds</span>
                    </div>
                    <button
                      onClick={() => onSelectSimulation(sim.id)}
                      className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs py-2.5 px-5 rounded-xl transition-all shadow-md shadow-indigo-600/20 group-hover:translate-x-1"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      {isCompleted ? 'Re-Enter Briefing' : 'Accept Role & Start'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Tab 2: Curriculum Concepts */}
      {activeTab === 'concepts' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-white">Underlying Theoretical Frameworks</h2>
              <p className="text-xs text-slate-400">Master the management science behind this subject's simulations</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {subject.concepts.map(concept => (
              <div
                key={concept.id}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-xl flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                      {concept.name}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 font-medium">
                    {concept.tagline}
                  </p>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {concept.description}
                  </p>

                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Key Framework / Tool:</span>
                    <p className="text-xs font-mono text-slate-300">{concept.keyFramework}</p>
                    {concept.formula && (
                      <p className="text-xs font-mono text-emerald-400 pt-1">Formula: {concept.formula}</p>
                    )}
                  </div>

                  <div className="text-xs text-slate-400 border-l-2 border-indigo-500/60 pl-3 italic">
                    <span className="font-semibold text-slate-300 not-italic">Real-World Benchmark:</span> {concept.realWorldExample}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <button
                    onClick={() => onSelectSimulation(concept.simulationId)}
                    className="w-full flex items-center justify-center gap-2 bg-slate-800 hover:bg-indigo-600 text-slate-300 hover:text-white py-2 px-4 rounded-xl text-xs font-semibold transition-all border border-slate-700"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" /> Practice in Simulation
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
