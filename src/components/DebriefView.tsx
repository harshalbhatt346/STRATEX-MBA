import React, { useEffect } from 'react';
import { Simulation, DecisionHistoryRecord } from '../types';
import confetti from 'canvas-confetti';
import { Award, CheckCircle2, TrendingUp, Lightbulb, Compass, RotateCcw, ArrowRight, Printer, Share2, Building } from 'lucide-react';

interface Props {
  simulation: Simulation;
  decisions: DecisionHistoryRecord[];
  finalMetrics: Record<string, number>;
  finalScore: number;
  onReturnToDashboard: () => void;
  onReplay: () => void;
}

export const DebriefView: React.FC<Props> = ({
  simulation,
  decisions,
  finalMetrics,
  finalScore,
  onReturnToDashboard,
  onReplay
}) => {
  useEffect(() => {
    // Fire celebratory confetti!
    try {
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      console.log('Confetti effect failed gracefully:', e);
    }
  }, []);

  const debrief = simulation.educationalDebrief;

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-fadeIn pb-16">
      {/* Celebration Header Card */}
      <div className="bg-gradient-to-r from-emerald-950/60 via-slate-900 to-indigo-950/60 border border-emerald-500/30 rounded-3xl p-8 lg:p-10 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
              <CheckCircle2 className="w-4 h-4" /> Simulation Completed Successfully
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Executive Learning Debrief & Academic Synthesis
            </h1>
            <p className="text-sm text-slate-300">
              {simulation.title} • {simulation.role}
            </p>
          </div>

          <div className="bg-slate-950/90 border border-emerald-500/30 p-5 rounded-2xl text-center min-w-[160px] shadow-xl">
            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Executive Score</span>
            <div className="text-4xl font-black text-emerald-400 mt-1">{finalScore}/100</div>
            <span className="text-[11px] text-slate-400 font-medium">Performance Grade</span>
          </div>
        </div>

        <div className="flex items-center gap-3 pt-6 mt-6 border-t border-slate-800 flex-wrap">
          <button
            onClick={() => window.print()}
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 flex items-center gap-2 transition-all"
          >
            <Printer className="w-3.5 h-3.5" /> Print Learning Transcript
          </button>
          <button
            onClick={onReplay}
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 flex items-center gap-2 transition-all"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Replay Simulation
          </button>
          <button
            onClick={onReturnToDashboard}
            className="px-5 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white flex items-center gap-2 transition-all shadow-lg shadow-indigo-600/30 ml-auto"
          >
            <span>Return to Dashboard</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Decision Trajectory Recap */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 shadow-xl space-y-4">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <Compass className="w-5 h-5 text-indigo-400" /> Your Executive Decision Path Recap
        </h2>
        <div className="space-y-3">
          {decisions.map(d => (
            <div key={d.roundNumber} className="bg-slate-950/70 p-4 rounded-xl border border-slate-800 flex items-center justify-between flex-wrap gap-3">
              <div>
                <span className="text-[10px] uppercase font-bold text-indigo-400">Round {d.roundNumber}: {d.roundTitle}</span>
                <div className="text-sm font-semibold text-white mt-0.5">{d.choiceTitle}</div>
              </div>
              <div className="flex items-center gap-2">
                {Object.entries(d.metricDeltas).slice(0, 3).map(([key, delta]) => (
                  <span key={key} className={`text-xs font-bold px-2 py-0.5 rounded ${delta >= 0 ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>
                    {delta > 0 ? `+${delta}` : delta}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Core 6-Point Academic Debrief */}
      <div className="space-y-6">
        {/* Point 1: What Happened */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 shadow-xl space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
            1. What Happened? (Executive Trajectory Summary)
          </span>
          <p className="text-sm text-slate-300 leading-relaxed bg-slate-950/60 p-5 rounded-xl border border-slate-800/80">
            {debrief.whatHappened}
          </p>
        </div>

        {/* Point 2: Why Did It Happen */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 shadow-xl space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            2. Why Did It Happen? (Underlying Economic & Business Mechanisms)
          </span>
          <p className="text-sm text-slate-300 leading-relaxed bg-slate-950/60 p-5 rounded-xl border border-slate-800/80">
            {debrief.whyItHappened}
          </p>
        </div>

        {/* Point 3: Concepts Applied (Deep Dive Academic Frameworks) */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 shadow-xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
            3. Which Management Concepts Were Applied?
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {debrief.conceptsApplied.map((concept, i) => (
              <div key={i} className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-2 flex flex-col justify-between">
                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-white text-indigo-300">{concept.name}</h4>
                  {concept.formulaOrModel && (
                    <div className="text-xs font-mono text-emerald-400 bg-emerald-950/30 p-2 rounded border border-emerald-800/30">
                      {concept.formulaOrModel}
                    </div>
                  )}
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {concept.explanation}
                  </p>
                </div>
                <div className="text-[11px] text-slate-300 bg-slate-900 p-2.5 rounded-lg border border-slate-800 italic">
                  <span className="font-semibold text-slate-200 not-italic">Key Takeaway:</span> {concept.keyTakeaway}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Point 4: What Would an Experienced Executive Consider? */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 shadow-xl space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
            4. What Would an Experienced Fortune 500 Executive or Top Partner Consider?
          </span>
          <div className="text-sm text-slate-300 leading-relaxed bg-purple-950/20 border border-purple-500/30 p-5 rounded-xl">
            {debrief.expertExecutivePerspective}
          </div>
        </div>

        {/* Point 5: Alternative Counterfactual Paths */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 shadow-xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-400">
            5. What Could Have Been Done Differently? (Counterfactual Analysis)
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {debrief.alternativePaths.map((alt, i) => (
              <div key={i} className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1.5">
                <h5 className="text-xs font-bold text-slate-200">{alt.choiceTitle}</h5>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {alt.counterfactualConsequence}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Point 6: Real-World Corporate Parallels */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 shadow-xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-400 flex items-center gap-1.5">
            <Building className="w-4 h-4" /> 6. Real-World Corporate Parallels & Case Studies
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {debrief.realWorldParallels.map((corp, i) => (
              <div key={i} className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-2">
                <h4 className="text-sm font-bold text-teal-300">{corp.company}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {corp.caseStudySummary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Completion Action */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex items-center justify-between flex-wrap gap-4">
        <div>
          <h3 className="text-base font-bold text-white">Ready for your next management challenge?</h3>
          <p className="text-xs text-slate-400">Your profile and mastery analytics have been updated automatically.</p>
        </div>
        <button
          onClick={onReturnToDashboard}
          className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs py-3 px-6 rounded-xl transition-all shadow-lg shadow-indigo-600/30"
        >
          Return to Learning Dashboard
        </button>
      </div>
    </div>
  );
};
