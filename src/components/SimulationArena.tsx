import React, { useState } from 'react';
import { Simulation, SimulationRound, DecisionChoice, BusinessMetric, MetricDelta, DecisionHistoryRecord } from '../types';
import { InteractiveDataLab } from './InteractiveDataLab';
import { TrendingUp, TrendingDown, AlertCircle, ArrowRight, ShieldCheck, Flame, Users, CheckCircle2, MessageSquare, BookOpen, BarChart2 } from 'lucide-react';

interface Props {
  simulation: Simulation;
  onCompleteSimulation: (
    decisions: DecisionHistoryRecord[],
    finalMetrics: Record<string, number>,
    finalScore: number
  ) => void;
  onExit: () => void;
}

export const SimulationArena: React.FC<Props> = ({ simulation, onCompleteSimulation, onExit }) => {
  const [currentRoundIdx, setCurrentRoundIdx] = useState(0);
  const [selectedChoiceId, setSelectedChoiceId] = useState<string | null>(null);
  const [managerNotes, setManagerNotes] = useState<string>('');
  const [showOutcome, setShowOutcome] = useState<boolean>(false);
  const [showDataLab, setShowDataLab] = useState<boolean>(false);

  // Dynamic live metrics dictionary: key -> value
  const [metrics, setMetrics] = useState<Record<string, number>>(() => {
    const initial: Record<string, number> = {};
    simulation.initialMetrics.forEach(m => {
      initial[m.key] = m.value;
    });
    return initial;
  });

  // Keep track of metric deltas per round
  const [lastDeltas, setLastDeltas] = useState<MetricDelta>({});

  // Decision history
  const [history, setHistory] = useState<DecisionHistoryRecord[]>([]);

  const currentRound: SimulationRound = simulation.rounds[currentRoundIdx];
  const selectedChoice = currentRound.choices.find(c => c.id === selectedChoiceId);

  const handleConfirmDecision = () => {
    if (!selectedChoice) return;

    // Apply deltas to live metrics
    const newMetrics = { ...metrics };
    Object.entries(selectedChoice.outcome.metricDeltas).forEach(([key, delta]) => {
      const prev = newMetrics[key] ?? 0;
      newMetrics[key] = Math.round((prev + delta) * 100) / 100;
    });

    setMetrics(newMetrics);
    setLastDeltas(selectedChoice.outcome.metricDeltas);

    // Record decision history
    const record: DecisionHistoryRecord = {
      roundNumber: currentRound.roundNumber,
      roundTitle: currentRound.title,
      choiceId: selectedChoice.id,
      choiceTitle: selectedChoice.title,
      metricDeltas: selectedChoice.outcome.metricDeltas,
      metricsAfter: newMetrics,
      timestamp: new Date().toISOString()
    };

    setHistory(prev => [...prev, record]);
    setShowOutcome(true);
  };

  const handleNextRound = () => {
    setShowOutcome(false);
    setSelectedChoiceId(null);
    setManagerNotes('');

    if (currentRoundIdx + 1 < simulation.rounds.length) {
      setCurrentRoundIdx(prev => prev + 1);
    } else {
      // Simulation Finished! Calculate score based on final metrics performance
      let score = 75; // baseline score
      simulation.initialMetrics.forEach(m => {
        const initialVal = m.value;
        const finalVal = metrics[m.key] ?? initialVal;
        const diff = finalVal - initialVal;
        if (m.isGoodWhenHigh) {
          if (diff > 0) score += 5;
          if (diff < 0) score -= 5;
        } else {
          if (diff < 0) score += 5;
          if (diff > 0) score -= 5;
        }
      });

      const clampedScore = Math.max(40, Math.min(98, score));
      onCompleteSimulation(history, metrics, clampedScore);
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn max-w-6xl mx-auto pb-16">
      {/* Top Header & Progress Stepper */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl flex items-center justify-between flex-wrap gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              {simulation.role}
            </span>
            <span className="text-xs text-slate-400 font-semibold">{simulation.company}</span>
          </div>
          <h1 className="text-xl font-bold text-white mt-1">{simulation.title}</h1>
        </div>

        {/* Round Progress Stepper */}
        <div className="flex items-center gap-2">
          {simulation.rounds.map((r, i) => (
            <div
              key={r.roundNumber}
              className={`flex items-center justify-center w-8 h-8 rounded-xl text-xs font-bold transition-all ${
                i < currentRoundIdx
                  ? 'bg-emerald-600 text-white'
                  : i === currentRoundIdx
                  ? 'bg-indigo-600 text-white ring-2 ring-indigo-400/40 shadow-lg shadow-indigo-600/30'
                  : 'bg-slate-950 text-slate-500 border border-slate-800'
              }`}
            >
              {r.roundNumber}
            </div>
          ))}
          <span className="text-xs text-slate-400 font-semibold pl-2">
            Round {currentRoundIdx + 1} of {simulation.rounds.length}
          </span>
        </div>

        <button
          onClick={onExit}
          className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
        >
          Exit Simulation
        </button>
      </div>

      {/* Live Business Scorecard Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-1.5">
            <TrendingUp className="w-4 h-4" /> Real-Time Business Scorecard
          </span>
          <span className="text-[11px] text-slate-500">Live variables reflecting consequences of executive decisions</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {simulation.initialMetrics.map(m => {
            const currentVal = metrics[m.key] ?? m.value;
            const delta = lastDeltas[m.key];
            const isGood = m.isGoodWhenHigh ? (delta ?? 0) >= 0 : (delta ?? 0) <= 0;

            return (
              <div key={m.key} className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800 space-y-1">
                <span className="text-[10px] text-slate-400 uppercase font-semibold block truncate">
                  {m.label}
                </span>
                <div className="flex items-baseline justify-between">
                  <span className="text-xl font-black text-white">
                    {m.format === 'currency' ? `${currentVal} ${m.unit}` : `${currentVal}${m.unit}`}
                  </span>
                  {delta !== undefined && delta !== 0 && (
                    <span
                      className={`text-xs font-bold flex items-center ${
                        isGood ? 'text-emerald-400' : 'text-rose-400'
                      }`}
                    >
                      {delta > 0 ? `+${delta}` : delta}
                    </span>
                  )}
                </div>
                {m.benchmark !== undefined && (
                  <div className="text-[9px] text-slate-500">
                    Target: {m.benchmark}{m.unit}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Optional Interactive Data Lab Toggle (for Statistics / Data simulations) */}
      {simulation.dataset && simulation.dataset.length > 0 && (
        <div>
          <button
            onClick={() => setShowDataLab(!showDataLab)}
            className="w-full flex items-center justify-between bg-teal-950/30 hover:bg-teal-950/50 border border-teal-500/30 p-4 rounded-xl text-teal-300 font-semibold text-xs transition-all shadow-lg"
          >
            <span className="flex items-center gap-2">
              <BarChart2 className="w-4 h-4 text-teal-400" />
              {showDataLab ? 'Hide Live Dataset & Statistical Calculations' : 'Open Live Dataset & Statistical Correlation Matrix'}
            </span>
            <span className="text-[11px] bg-teal-900/60 px-2 py-0.5 rounded text-teal-200">
              {simulation.dataset.length} Cohort Rows Available
            </span>
          </button>
          {showDataLab && (
            <div className="mt-4">
              <InteractiveDataLab dataset={simulation.dataset} simulationId={simulation.id} />
            </div>
          )}
        </div>
      )}

      {/* Main Situation & Intelligence Briefing */}
      {!showOutcome ? (
        <div className="space-y-6">
          {/* Situation Memo */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                  {currentRound.quarterOrTimeline}
                </span>
                <h2 className="text-2xl font-bold text-white mt-1">{currentRound.title}</h2>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
              {currentRound.briefing}
            </p>

            {/* Market Intelligence Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5" /> Competitor Intelligence
                </span>
                <p className="text-xs text-slate-300 leading-relaxed font-medium">
                  {currentRound.marketIntel.competitorMove}
                </p>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" /> Macro Environment
                </span>
                <p className="text-xs text-slate-300 leading-relaxed font-medium">
                  {currentRound.marketIntel.macroEnvironment}
                </p>
              </div>

              {currentRound.marketIntel.internalWhisper && (
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1">
                    <MessageSquare className="w-3.5 h-3.5" /> Internal Whisper
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed font-medium italic">
                    {currentRound.marketIntel.internalWhisper}
                  </p>
                </div>
              )}
            </div>

            {/* Urgent Question Prompt */}
            <div className="bg-gradient-to-r from-indigo-950/80 to-purple-950/80 border border-indigo-500/40 p-5 rounded-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-300 block mb-1">
                Executive Decision Prompt:
              </span>
              <p className="text-base font-bold text-white">
                {currentRound.urgentQuestion}
              </p>
            </div>
          </div>

          {/* Decision Choices Arena */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-white">Evaluate Strategic Alternatives</h3>
              <span className="text-xs text-slate-400">Select the strategic path that best aligns with your objectives and constraints</span>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {currentRound.choices.map((choice, idx) => {
                const isSelected = selectedChoiceId === choice.id;
                return (
                  <div
                    key={choice.id}
                    onClick={() => setSelectedChoiceId(choice.id)}
                    className={`p-6 rounded-2xl border transition-all duration-200 cursor-pointer text-left shadow-lg ${
                      isSelected
                        ? 'bg-slate-900 border-indigo-500 ring-2 ring-indigo-500/30'
                        : 'bg-slate-900/80 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-2 max-w-3xl">
                        <div className="flex items-center gap-2.5 flex-wrap">
                          <span className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold ${
                            isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'
                          }`}>
                            {String.fromCharCode(65 + idx)}
                          </span>
                          <h4 className="text-base font-bold text-white">{choice.title}</h4>
                          <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                            choice.riskLevel === 'Low' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                            choice.riskLevel === 'Moderate' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' :
                            choice.riskLevel === 'High' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                            'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                          }`}>
                            {choice.riskLevel} Risk
                          </span>
                          <span className="text-[10px] font-semibold text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                            {choice.strategicOrientation}
                          </span>
                        </div>

                        <p className="text-xs text-slate-300 leading-relaxed">
                          {choice.description}
                        </p>

                        {/* Trade-offs Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                          <div className="bg-slate-950/60 p-3 rounded-lg border border-slate-800/80">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                              Strategic Upsides (Pros)
                            </span>
                            <ul className="space-y-1">
                              {choice.tradeOffs.pros.map((p, i) => (
                                <li key={i} className="text-[11px] text-slate-300 flex items-start gap-1.5 leading-tight">
                                  <span className="text-emerald-400 font-bold">+</span>
                                  <span>{p}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="bg-slate-950/60 p-3 rounded-lg border border-slate-800/80">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-rose-400 block mb-1">
                              Strategic Drawbacks & Trade-offs (Cons)
                            </span>
                            <ul className="space-y-1">
                              {choice.tradeOffs.cons.map((c, i) => (
                                <li key={i} className="text-[11px] text-slate-300 flex items-start gap-1.5 leading-tight">
                                  <span className="text-rose-400 font-bold">-</span>
                                  <span>{c}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Selection Radio Circle */}
                      <div className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 mt-1 transition-all ${
                        isSelected ? 'border-indigo-500 bg-indigo-600 text-white' : 'border-slate-700 bg-slate-950'
                      }`}>
                        {isSelected && <CheckCircle2 className="w-4 h-4 fill-current" />}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Optional Managerial Rationale Note */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-2">
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider">
                Managerial Decision Rationale (Optional)
              </label>
              <textarea
                rows={2}
                value={managerNotes}
                onChange={e => setManagerNotes(e.target.value)}
                placeholder="Record your executive reasoning, trade-off evaluation, and risk hypothesis..."
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500"
              />
            </div>

            {/* Decision Confirmation Button */}
            <div className="flex justify-end pt-2">
              <button
                disabled={!selectedChoiceId}
                onClick={handleConfirmDecision}
                className={`inline-flex items-center gap-2.5 font-bold text-sm py-3.5 px-8 rounded-xl shadow-xl transition-all ${
                  selectedChoiceId
                    ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/30 hover:scale-[1.02]'
                    : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
                }`}
              >
                <span>Execute Strategic Decision</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Step 5: Consequence & Outcome Stage */
        selectedChoice && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-slate-900 border border-indigo-500/40 rounded-3xl p-8 lg:p-10 shadow-2xl space-y-8">
              <div className="border-b border-slate-800 pb-5">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    Consequence & Performance Outcome
                  </span>
                  <span className="text-xs text-slate-400">{currentRound.title}</span>
                </div>
                <h2 className="text-2xl font-black text-white mt-2">
                  {selectedChoice.title}
                </h2>
              </div>

              {/* Immediate Summary */}
              <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                  Immediate Market Impact
                </span>
                <p className="text-sm font-semibold text-slate-200 leading-relaxed">
                  {selectedChoice.outcome.summary}
                </p>
              </div>

              {/* Business Logic Analysis */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Why This Happened (Underlying Business Logic)
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed bg-slate-950/50 p-5 rounded-2xl border border-slate-800/80">
                  {selectedChoice.outcome.detailedAnalysis}
                </p>
              </div>

              {/* Metric Impact Deltas */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Quantitative Impact on Business Scorecard
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                  {Object.entries(selectedChoice.outcome.metricDeltas).map(([key, delta]) => {
                    const metricMeta = simulation.initialMetrics.find(m => m.key === key);
                    const isGood = metricMeta?.isGoodWhenHigh ? delta >= 0 : delta <= 0;
                    return (
                      <div key={key} className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center">
                        <span className="text-[10px] text-slate-400 uppercase font-semibold block truncate">
                          {metricMeta?.label || key}
                        </span>
                        <div className={`text-xl font-extrabold mt-1 ${isGood ? 'text-emerald-400' : 'text-rose-400'}`}>
                          {delta > 0 ? `+${delta}` : delta} {metricMeta?.unit}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Competitor & Stakeholder Reactions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                    <Flame className="w-4 h-4" /> Competitor Reaction
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed font-medium">
                    {selectedChoice.outcome.competitorReaction}
                  </p>
                </div>

                <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-400 flex items-center gap-1.5">
                    <MessageSquare className="w-4 h-4" /> Stakeholder Memorandum
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed font-medium italic">
                    "{selectedChoice.outcome.stakeholderFeedback}"
                  </p>
                </div>
              </div>

              {/* Academic Theory Snippet */}
              {selectedChoice.outcome.theorySnippet && (
                <div className="bg-indigo-950/40 border border-indigo-500/40 p-5 rounded-2xl space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-indigo-400 uppercase tracking-wider">
                    <BookOpen className="w-4 h-4" /> Academic Concept in Action: {selectedChoice.outcome.theorySnippet.framework}
                  </div>
                  <p className="text-xs text-indigo-200 leading-relaxed">
                    {selectedChoice.outcome.theorySnippet.takeaway}
                  </p>
                </div>
              )}

              {/* Advance to Next Round Button */}
              <div className="flex justify-end pt-4 border-t border-slate-800">
                <button
                  onClick={handleNextRound}
                  className="inline-flex items-center gap-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-sm py-4 px-9 rounded-xl shadow-xl shadow-indigo-600/30 hover:scale-[1.02] transition-all"
                >
                  <span>
                    {currentRoundIdx + 1 < simulation.rounds.length
                      ? `Advance to Round ${currentRoundIdx + 2}`
                      : 'Complete Simulation & View Educational Debrief'}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};
