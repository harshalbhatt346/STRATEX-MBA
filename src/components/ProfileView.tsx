import React, { useState } from 'react';
import { useStudent } from '../context/StudentContext';
import { useAuth } from '../context/AuthContext';
import { ALL_SIMULATIONS } from '../data/simulations';
import { Difficulty } from '../types';
import { User, Award, Shield, Compass, Brain, Download, Upload, RotateCcw, CheckCircle, BarChart3, Clock, AlertTriangle, LogOut } from 'lucide-react';

interface Props {
  onSelectSimulation: (simulationId: string) => void;
}

export const ProfileView: React.FC<Props> = ({ onSelectSimulation }) => {
  const { profile, updateProfile, resetProgress, exportProfileJson, importProfileJson } = useStudent();
  const { logout, currentUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(profile.name);
  const [editDifficulty, setEditDifficulty] = useState<Difficulty>(profile.difficultyPreference);
  const [importText, setImportText] = useState('');
  const [showImportModal, setShowImportModal] = useState(false);
  const [importStatus, setImportStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Compute stats
  const totalSims = ALL_SIMULATIONS.length;
  const completedCount = profile.completedSimulationIds.length;
  const completionPct = Math.round((completedCount / totalSims) * 100);

  // Flatten attempts
  const allAttempts = Object.values(profile.attempts).flat();
  const avgScore = allAttempts.length > 0
    ? Math.round(allAttempts.reduce((sum, a) => sum + a.finalScore, 0) / allAttempts.length)
    : 0;

  const handleSaveProfile = () => {
    updateProfile({
      name: editName,
      difficultyPreference: editDifficulty
    });
    setIsEditing(false);
  };

  const handleExport = () => {
    const json = exportProfileJson();
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `apex_mba_profile_${profile.name.replace(/\s+/g, '_').toLowerCase()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportSubmit = () => {
    const success = importProfileJson(importText);
    if (success) {
      setImportStatus('success');
      setTimeout(() => {
        setShowImportModal(false);
        setImportStatus('idle');
        setImportText('');
      }, 1200);
    } else {
      setImportStatus('error');
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header Profile Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 shadow-xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white text-2xl font-black shadow-lg shadow-indigo-600/20">
              {profile.name.charAt(0)}
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-2xl font-bold text-white">{profile.name}</h1>
                {profile.studentId && (
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    ID: {profile.studentId}
                  </span>
                )}
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  {profile.difficultyPreference} Track
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                {profile.roleTitle} {currentUser?.email ? `• ${currentUser.email}` : ''}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all cursor-pointer"
            >
              {isEditing ? 'Cancel Edit' : 'Edit Preferences'}
            </button>
            <button
              onClick={handleExport}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" /> Export JSON
            </button>
            <button
              onClick={() => setShowImportModal(true)}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Upload className="w-3.5 h-3.5" /> Import
            </button>
            <button
              onClick={() => {
                if (window.confirm('Are you sure you want to reset your simulation progress? This cannot be undone.')) {
                  resetProgress();
                }
              }}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-rose-950/40 hover:bg-rose-900/60 text-rose-300 border border-rose-800/40 flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reset
            </button>
            <button
              onClick={() => logout()}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-rose-600 hover:bg-rose-500 text-white shadow-lg shadow-rose-600/20 flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" /> Sign Out
            </button>
          </div>
        </div>

        {/* Edit Modal / Inline View */}
        {isEditing && (
          <div className="mt-6 pt-6 border-t border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">Display Name</label>
              <input
                type="text"
                value={editName}
                onChange={e => setEditName(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">Target Difficulty Preference</label>
              <select
                value={editDifficulty}
                onChange={e => setEditDifficulty(e.target.value as Difficulty)}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-500"
              >
                <option value="Beginner">Beginner (Foundational)</option>
                <option value="Intermediate">Intermediate (Standard MBA)</option>
                <option value="Advanced">Advanced (C-Suite Pressure)</option>
              </select>
            </div>
            <div className="flex items-end">
              <button
                onClick={handleSaveProfile}
                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs py-2 px-4 rounded-lg transition-all"
              >
                Save Preferences
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Progress & Summary Bar */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold text-white">{completedCount} / {totalSims}</div>
            <div className="text-xs text-slate-400">Simulations Completed</div>
          </div>
        </div>

        <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
            <CheckCircle className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold text-white">{completionPct}%</div>
            <div className="text-xs text-slate-400">Curriculum Progress</div>
          </div>
        </div>

        <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
            <BarChart3 className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold text-white">{avgScore} / 100</div>
            <div className="text-xs text-slate-400">Avg Business Score</div>
          </div>
        </div>

        <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
            <Brain className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold text-white">{allAttempts.length}</div>
            <div className="text-xs text-slate-400">Total Rounds Played</div>
          </div>
        </div>
      </div>

      {/* Behavioral Decision-Making Profile */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 shadow-xl">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Compass className="w-5 h-5 text-indigo-400" /> Behavioral Decision-Making Profile
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Dynamically updated based on real managerial trade-offs chosen during simulations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Trait 1: Risk Appetite */}
          <div className="space-y-2 bg-slate-950/60 p-4 rounded-xl border border-slate-800">
            <div className="flex justify-between text-xs">
              <span className="text-slate-400">Risk-Averse / Conservative</span>
              <span className="font-bold text-white">Risk Appetite: {profile.behavioralTraits.riskAppetite}/100</span>
              <span className="text-slate-400">Bold / Risk-Seeking</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
              <div
                className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2.5 rounded-full transition-all duration-500"
                style={{ width: `${profile.behavioralTraits.riskAppetite}%` }}
              />
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed pt-1">
              {profile.behavioralTraits.riskAppetite > 65
                ? 'High willingness to take disruptive gambles and enter price wars.'
                : profile.behavioralTraits.riskAppetite < 35
                ? 'High prudence; avoids volatile bets in favor of preserving capital reserves.'
                : 'Balanced calculated risk approach.'}
            </p>
          </div>

          {/* Trait 2: Strategic Horizon */}
          <div className="space-y-2 bg-slate-950/60 p-4 rounded-xl border border-slate-800">
            <div className="flex justify-between text-xs">
              <span className="text-slate-400">Short-Term Quarterly Fixes</span>
              <span className="font-bold text-white">Strategic Horizon: {profile.behavioralTraits.strategicHorizon}/100</span>
              <span className="text-slate-400">Long-Term Moat Building</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
              <div
                className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2.5 rounded-full transition-all duration-500"
                style={{ width: `${profile.behavioralTraits.strategicHorizon}%` }}
              />
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed pt-1">
              {profile.behavioralTraits.strategicHorizon > 60
                ? 'Strong architectural foresight; willing to take short-term margin hits to build permanent moats.'
                : 'Focuses heavily on immediate quarterly cash flow generation.'}
            </p>
          </div>

          {/* Trait 3: Customer vs Margin */}
          <div className="space-y-2 bg-slate-950/60 p-4 rounded-xl border border-slate-800">
            <div className="flex justify-between text-xs">
              <span className="text-slate-400">Margin & Profitability Focus</span>
              <span className="font-bold text-white">Customer vs Margin: {profile.behavioralTraits.customerVsMargin}/100</span>
              <span className="text-slate-400">Customer Centricity</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
              <div
                className="bg-gradient-to-r from-amber-500 to-orange-500 h-2.5 rounded-full transition-all duration-500"
                style={{ width: `${profile.behavioralTraits.customerVsMargin}%` }}
              />
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed pt-1">
              {profile.behavioralTraits.customerVsMargin > 60
                ? 'Customer-advocate posture; prioritizes user retention, NPS, and product experience.'
                : 'Financial guardian; protects unit economics and gross contribution margins.'}
            </p>
          </div>

          {/* Trait 4: Analytical Prudence */}
          <div className="space-y-2 bg-slate-950/60 p-4 rounded-xl border border-slate-800">
            <div className="flex justify-between text-xs">
              <span className="text-slate-400">Intuitive / Qualitative</span>
              <span className="font-bold text-white">Analytical Prudence: {profile.behavioralTraits.analyticalPrudence}/100</span>
              <span className="text-slate-400">Deeply Data-Driven</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
              <div
                className="bg-gradient-to-r from-purple-500 to-rose-500 h-2.5 rounded-full transition-all duration-500"
                style={{ width: `${profile.behavioralTraits.analyticalPrudence}%` }}
              />
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed pt-1">
              {profile.behavioralTraits.analyticalPrudence > 60
                ? 'High reliance on statistical significance, regression metrics, and empirical data tests.'
                : 'Comfortable making strategic executive decisions under imperfect data.'}
            </p>
          </div>
        </div>
      </div>

      {/* Concept Mastery Radar / Progress Bars */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 shadow-xl">
        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Brain className="w-5 h-5 text-emerald-400" /> Academic Concept Mastery Tracker
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(profile.conceptMastery).map(([concept, score]) => (
            <div key={concept} className="bg-slate-950/70 p-4 rounded-xl border border-slate-800 space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-white">{concept}</span>
                <span className={`font-bold ${score >= 70 ? 'text-emerald-400' : score >= 40 ? 'text-amber-400' : 'text-slate-400'}`}>
                  {score}%
                </span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                <div
                  className={`h-2 rounded-full transition-all duration-500 ${
                    score >= 70 ? 'bg-emerald-500' : score >= 40 ? 'bg-amber-500' : 'bg-slate-600'
                  }`}
                  style={{ width: `${score}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Simulation Attempt History */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 shadow-xl">
        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Clock className="w-5 h-5 text-indigo-400" /> Executive Attempt History
        </h2>

        {allAttempts.length === 0 ? (
          <div className="text-center py-12 text-slate-500">
            <Clock className="w-10 h-10 mx-auto mb-3 opacity-30" />
            <p className="text-sm font-medium">No simulation attempts logged yet.</p>
            <p className="text-xs text-slate-600 mt-1">Select any subject from the dashboard to launch your first management challenge.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {allAttempts.map((attempt, idx) => {
              const sim = ALL_SIMULATIONS.find(s => s.id === attempt.simulationId);
              return (
                <div key={idx} className="bg-slate-950/80 border border-slate-800 p-5 rounded-xl flex items-center justify-between flex-wrap gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-white">{sim?.title || attempt.simulationId}</span>
                      <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                        {sim?.industry}
                      </span>
                    </div>
                    <div className="text-xs text-slate-400">
                      Completed {attempt.roundsCompleted} rounds on {new Date(attempt.completedAt).toLocaleDateString()}
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-lg font-extrabold text-emerald-400">{attempt.finalScore}/100</div>
                      <span className="text-[10px] text-slate-500">Executive Performance</span>
                    </div>
                    {sim && (
                      <button
                        onClick={() => onSelectSimulation(sim.id)}
                        className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs font-semibold rounded-lg text-white border border-slate-700 transition-all"
                      >
                        Replay
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Import Modal */}
      {showImportModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-2xl">
            <h3 className="text-lg font-bold text-white">Import Student Learning Profile</h3>
            <p className="text-xs text-slate-400">Paste your exported JSON profile string below to restore all simulation progress:</p>
            <textarea
              rows={6}
              value={importText}
              onChange={e => setImportText(e.target.value)}
              placeholder="Paste JSON profile here..."
              className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-xs text-white font-mono focus:outline-none focus:border-indigo-500"
            />
            {importStatus === 'error' && (
              <div className="text-xs text-rose-400 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4" /> Invalid profile JSON format. Please verify and try again.
              </div>
            )}
            {importStatus === 'success' && (
              <div className="text-xs text-emerald-400 flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4" /> Profile successfully restored!
              </div>
            )}
            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={() => setShowImportModal(false)}
                className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                onClick={handleImportSubmit}
                className="px-4 py-2 text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-all"
              >
                Confirm Import
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
