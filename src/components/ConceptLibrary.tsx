import React, { useState } from 'react';
import { MBA_SUBJECTS } from '../data/curriculumData';
import { ConceptDefinition } from '../types';
import { BookOpen, Search, ArrowRight, Play, CheckCircle2, Bookmark, Lightbulb } from 'lucide-react';

interface Props {
  onSelectSimulation: (simulationId: string) => void;
  onSelectSubject: (subjectId: string) => void;
}

export const ConceptLibrary: React.FC<Props> = ({ onSelectSimulation, onSelectSubject }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubjectFilter, setSelectedSubjectFilter] = useState<string>('all');

  // Aggregate all concepts from all 8 subjects
  const allConcepts = MBA_SUBJECTS.flatMap(sub => 
    sub.concepts.map(c => ({ ...c, subjectTitle: sub.title, subjectCode: sub.code, accentColor: sub.accentColor }))
  );

  const filteredConcepts = allConcepts.filter(c => {
    const matchesSearch = 
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.tagline.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.keyFramework.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesSubject = selectedSubjectFilter === 'all' || c.subjectId === selectedSubjectFilter;

    return matchesSearch && matchesSubject;
  });

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-indigo-900/40 via-purple-900/30 to-slate-900 border border-indigo-500/20 rounded-2xl p-8 relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5" /> Core MBA Knowledge Vault
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            Academic Concept & Framework Vault
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            Every management concept in our curriculum is directly mapped to an interactive real-world business simulation. Review theoretical frameworks, mathematical formulas, and jump immediately into executive decision scenarios.
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative w-full sm:w-96">
          <Search className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
          <input
            type="text"
            placeholder="Search concepts, frameworks, formulas (e.g. STP, DuPont, RICE)..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
          />
        </div>

        {/* Subject Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1">
          <button
            onClick={() => setSelectedSubjectFilter('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
              selectedSubjectFilter === 'all'
                ? 'bg-indigo-600 text-white'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            All Subjects ({allConcepts.length})
          </button>
          {MBA_SUBJECTS.map(sub => (
            <button
              key={sub.id}
              onClick={() => setSelectedSubjectFilter(sub.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                selectedSubjectFilter === sub.id
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {sub.code}
            </button>
          ))}
        </div>
      </div>

      {/* Concept Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredConcepts.map(concept => (
          <div
            key={concept.id}
            className="bg-slate-900/90 border border-slate-800 hover:border-indigo-500/40 rounded-2xl p-6 transition-all duration-200 flex flex-col justify-between group shadow-lg hover:shadow-indigo-500/5"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  {concept.subjectCode}
                </span>
                <span className="text-xs text-slate-500 font-medium">{concept.subjectTitle}</span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">
                  {concept.name}
                </h3>
                <p className="text-xs text-indigo-300/80 font-medium mt-1">
                  {concept.tagline}
                </p>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                {concept.description}
              </p>

              {/* Framework & Formula pill */}
              <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-3 space-y-2">
                <div className="flex items-center gap-1.5 text-xs text-slate-300 font-semibold">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                  <span>Key Framework:</span>
                </div>
                <div className="text-xs font-mono text-slate-400 pl-5">
                  {concept.keyFramework}
                </div>
                {concept.formula && (
                  <div className="text-xs font-mono text-emerald-400 bg-emerald-950/30 px-2 py-1 rounded border border-emerald-800/30">
                    Formula: {concept.formula}
                  </div>
                )}
              </div>

              {/* Real World Example */}
              <div className="text-xs text-slate-400 leading-relaxed border-l-2 border-indigo-500/50 pl-3 italic">
                <span className="font-semibold text-slate-300 not-italic">Real-World Application:</span> {concept.realWorldExample}
              </div>
            </div>

            {/* Simulation Trigger button */}
            <div className="pt-5 mt-5 border-t border-slate-800/80">
              <button
                onClick={() => onSelectSimulation(concept.simulationId)}
                className="w-full flex items-center justify-center gap-2 bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white border border-indigo-500/30 hover:border-indigo-500 py-2.5 px-4 rounded-xl text-xs font-bold transition-all shadow-sm"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                Launch Related Simulation
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
