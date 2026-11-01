import React from 'react';
import { MBA_SUBJECTS } from '../data/curriculumData';
import { ALL_SIMULATIONS } from '../data/simulations';
import { useStudent } from '../context/StudentContext';
import {
  Play,
  ArrowRight,
  Sparkles,
  BookOpen,
  Award,
  CheckCircle,
  TrendingUp,
  Brain,
  Compass,
  Megaphone,
  Layers,
  Users,
  DollarSign,
  BarChart3,
  Boxes,
  ChevronRight
} from 'lucide-react';

interface Props {
  onSelectSubject: (subjectId: string) => void;
  onSelectSimulation: (simulationId: string) => void;
  onOpenConcepts?: () => void;
}

export const Dashboard: React.FC<Props> = ({
  onSelectSubject,
  onSelectSimulation,
  onOpenConcepts
}) => {
  const { profile, getAdaptiveRecommendation } = useStudent();
  const adaptive = getAdaptiveRecommendation();

  // Stats calculation
  const totalSims = ALL_SIMULATIONS.length;
  const completedCount = profile.completedSimulationIds.length;
  const completionPercentage = Math.round((completedCount / totalSims) * 100);

  // Icon mapping helper
  const getSubjectIcon = (iconName: string) => {
    switch (iconName) {
      case 'Megaphone': return <Megaphone className="w-5 h-5 text-indigo-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-emerald-400" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-amber-400" />;
      case 'Users': return <Users className="w-5 h-5 text-rose-400" />;
      case 'Compass': return <Compass className="w-5 h-5 text-violet-400" />;
      case 'DollarSign': return <DollarSign className="w-5 h-5 text-cyan-400" />;
      case 'BarChart3': return <BarChart3 className="w-5 h-5 text-teal-400" />;
      case 'Boxes': return <Boxes className="w-5 h-5 text-orange-400" />;
      default: return <BookOpen className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <div className="space-y-10 animate-fadeIn">
      {/* Welcome Banner & Executive Personalization */}
      <div className="bg-gradient-to-r from-indigo-950/70 via-slate-900 to-slate-900 border border-indigo-500/20 rounded-3xl p-8 lg:p-10 shadow-2xl relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" /> Next-Gen Experiential MBA Laboratory
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Welcome back, {profile.name}
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            "Don't just teach me how businesses work. Put me in charge of one." Step into realistic management assignments, execute strategic decisions under uncertainty, and master core academic concepts through live business consequences.
          </p>

          <div className="flex items-center gap-6 pt-2 text-xs text-slate-400 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span>Track: <strong className="text-white font-semibold">{profile.difficultyPreference}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-400" />
              <span>Completed: <strong className="text-white font-semibold">{completedCount} / {totalSims} Simulations</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-400" />
              <span>Curriculum Progress: <strong className="text-white font-semibold">{completionPercentage}%</strong></span>
            </div>
          </div>
        </div>
      </div>

      {/* Adaptive Learning Recommendation Widget (Step 1 requirement) */}
      {adaptive && adaptive.recommendedSim && (
        <div className="bg-gradient-to-r from-purple-950/40 via-slate-900 to-slate-900 border border-purple-500/30 rounded-2xl p-6 lg:p-7 shadow-xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20">
                  AI Adaptive Recommendation
                </span>
                <span className="text-xs text-slate-400">{adaptive.reason}</span>
              </div>
              <h2 className="text-xl font-bold text-white">
                {adaptive.recommendedSim.title}
              </h2>
              <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                {adaptive.recommendedSim.background.currentSituation}
              </p>
              <div className="flex items-center gap-2 pt-1">
                <span className="text-[10px] text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                  Role: {adaptive.recommendedSim.role}
                </span>
                <span className="text-[10px] text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                  {adaptive.recommendedSim.rounds.length} Decision Rounds
                </span>
                <span className="text-[10px] text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                  {adaptive.recommendedSim.difficulty}
                </span>
              </div>
            </div>

            <button
              onClick={() => onSelectSimulation(adaptive.recommendedSim.id)}
              className="inline-flex items-center gap-2.5 bg-purple-600 hover:bg-purple-500 text-white font-extrabold text-xs py-3.5 px-6 rounded-xl shadow-lg shadow-purple-600/30 hover:scale-[1.02] transition-all whitespace-nowrap"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Launch Recommended Simulation</span>
            </button>
          </div>
        </div>
      )}

      {/* The 8 MBA Subjects Curriculum Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-white">Available MBA Subjects & Disciplines</h2>
            <p className="text-xs text-slate-400">Choose a subject to explore its academic concepts and corresponding simulations</p>
          </div>
          <button
            onClick={onOpenConcepts}
            className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1 transition-colors"
          >
            <span>View Full Concept Vault</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MBA_SUBJECTS.map(subject => {
            const subjectSims = ALL_SIMULATIONS.filter(s => s.subjectId === subject.id);
            const completedInSubject = subjectSims.filter(s => profile.completedSimulationIds.includes(s.id)).length;

            return (
              <div
                key={subject.id}
                onClick={() => onSelectSubject(subject.id)}
                className="bg-slate-900 border border-slate-800 hover:border-indigo-500/40 rounded-2xl p-6 transition-all duration-200 cursor-pointer flex flex-col justify-between group shadow-lg hover:shadow-indigo-500/5 hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center">
                      {getSubjectIcon(subject.icon)}
                    </div>
                    <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      {subject.code}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-indigo-400 transition-colors">
                      {subject.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                      {subject.description}
                    </p>
                  </div>

                  {/* Concept tags */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                    <span className="text-[10px] uppercase font-bold text-slate-500">Key Concepts:</span>
                    <div className="flex flex-wrap gap-1">
                      {subject.concepts.slice(0, 3).map(c => (
                        <span key={c.id} className="text-[10px] text-slate-300 bg-slate-950 px-2 py-0.5 rounded border border-slate-800 truncate max-w-[180px]">
                          {c.name.split('(')[0]}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">
                    {completedInSubject}/{subjectSims.length} Finished
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-800 group-hover:bg-indigo-600 flex items-center justify-center text-slate-300 group-hover:text-white transition-all">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
