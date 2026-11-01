import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { StudentProvider, useStudent } from './context/StudentContext';
import { Navbar } from './components/Navbar';
import { LoginView } from './components/LoginView';
import { Dashboard } from './components/Dashboard';
import { SubjectView } from './components/SubjectView';
import { SimulationBriefing } from './components/SimulationBriefing';
import { SimulationArena } from './components/SimulationArena';
import { DebriefView } from './components/DebriefView';
import { ConceptLibrary } from './components/ConceptLibrary';
import { ProfileView } from './components/ProfileView';
import { MBA_SUBJECTS } from './data/curriculumData';
import { ALL_SIMULATIONS, getSimulationById } from './data/simulations';
import { Simulation, Subject, DecisionHistoryRecord, SimulationAttempt } from './types';
import { Compass } from 'lucide-react';

function AppContent() {
  const { isAuthenticated, isLoading } = useAuth();
  const [currentView, setCurrentView] = useState<'dashboard' | 'subject' | 'briefing' | 'arena' | 'debrief' | 'concepts' | 'profile'>('dashboard');
  const [selectedSubjectId, setSelectedSubjectId] = useState<string | null>(null);
  const [selectedSimulationId, setSelectedSimulationId] = useState<string | null>(null);

  // Completed simulation attempt state for Debrief
  const [lastAttemptDecisions, setLastAttemptDecisions] = useState<DecisionHistoryRecord[]>([]);
  const [lastAttemptFinalMetrics, setLastAttemptFinalMetrics] = useState<Record<string, number>>({});
  const [lastAttemptFinalScore, setLastAttemptFinalScore] = useState<number>(85);

  const { recordAttempt } = useStudent();

  const handleSelectSubject = (subjectId: string) => {
    setSelectedSubjectId(subjectId);
    setCurrentView('subject');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectSimulation = (simulationId: string) => {
    setSelectedSimulationId(simulationId);
    setCurrentView('briefing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartSimulation = () => {
    setCurrentView('arena');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCompleteSimulation = (
    decisions: DecisionHistoryRecord[],
    finalMetrics: Record<string, number>,
    finalScore: number
  ) => {
    setLastAttemptDecisions(decisions);
    setLastAttemptFinalMetrics(finalMetrics);
    setLastAttemptFinalScore(finalScore);

    const activeSim = getSimulationById(selectedSimulationId || '');
    if (activeSim) {
      const selectedChoices = decisions.map(d => {
        const round = activeSim.rounds.find(r => r.roundNumber === d.roundNumber);
        return round?.choices.find(c => c.id === d.choiceId);
      }).filter(Boolean);

      const attemptRecord: SimulationAttempt = {
        simulationId: activeSim.id,
        completedAt: new Date().toISOString(),
        finalScore,
        roundsCompleted: decisions.length,
        totalRounds: activeSim.rounds.length,
        decisions,
        finalMetrics,
        feedbackSummary: `Executive performance evaluated across ${decisions.length} operational rounds.`
      };

      recordAttempt(attemptRecord, selectedChoices as any);
    }

    setCurrentView('debrief');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeSubject: Subject | undefined = selectedSubjectId
    ? MBA_SUBJECTS.find(s => s.id === selectedSubjectId)
    : undefined;

  const activeSimulation: Simulation | undefined = selectedSimulationId
    ? getSimulationById(selectedSimulationId)
    : undefined;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-slate-400">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white mb-4 shadow-xl shadow-indigo-600/30 animate-pulse">
          <Compass className="w-6 h-6 animate-spin" />
        </div>
        <div className="text-xs uppercase tracking-widest font-semibold text-slate-500">
          Authenticating STRATEX Session...
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <LoginView />;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* Top Navbar */}
      <Navbar
        currentView={currentView}
        onNavigate={(view) => {
          setCurrentView(view);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {currentView === 'dashboard' && (
          <Dashboard
            onSelectSubject={handleSelectSubject}
            onSelectSimulation={handleSelectSimulation}
            onOpenConcepts={() => {
              setCurrentView('concepts');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentView === 'subject' && activeSubject && (
          <SubjectView
            subject={activeSubject}
            onBack={() => {
              setCurrentView('dashboard');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectSimulation={handleSelectSimulation}
          />
        )}

        {currentView === 'briefing' && activeSimulation && (
          <SimulationBriefing
            simulation={activeSimulation}
            onBack={() => {
              if (selectedSubjectId) {
                setCurrentView('subject');
              } else {
                setCurrentView('dashboard');
              }
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onStartSimulation={handleStartSimulation}
          />
        )}

        {currentView === 'arena' && activeSimulation && (
          <SimulationArena
            simulation={activeSimulation}
            onCompleteSimulation={handleCompleteSimulation}
            onExit={() => {
              setCurrentView('dashboard');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentView === 'debrief' && activeSimulation && (
          <DebriefView
            simulation={activeSimulation}
            decisions={lastAttemptDecisions}
            finalMetrics={lastAttemptFinalMetrics}
            finalScore={lastAttemptFinalScore}
            onReturnToDashboard={() => {
              setCurrentView('dashboard');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onReplay={() => {
              setCurrentView('briefing');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentView === 'concepts' && (
          <ConceptLibrary
            onSelectSimulation={handleSelectSimulation}
            onSelectSubject={handleSelectSubject}
          />
        )}

        {currentView === 'profile' && (
          <ProfileView onSelectSimulation={handleSelectSimulation} />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950/80 py-8 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-400">STRATEX MBA</span>
            <span>•</span>
            <span>Experiential Learning & Decision Laboratory</span>
          </div>
          <div>
            <span>"Don't just teach me how businesses work. Put me in charge of one."</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <StudentProvider>
        <AppContent />
      </StudentProvider>
    </AuthProvider>
  );
}
