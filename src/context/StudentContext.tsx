import React, { createContext, useContext, useState, useEffect } from 'react';
import { StudentProfile, SimulationAttempt, DecisionChoice, Simulation, StudentAccount } from '../types';
import { ALL_SIMULATIONS } from '../data/simulations';
import { useAuth } from './AuthContext';

interface StudentContextType {
  profile: StudentProfile;
  updateProfile: (updates: Partial<StudentProfile>) => void;
  recordAttempt: (attempt: SimulationAttempt, choices: DecisionChoice[]) => void;
  getAdaptiveRecommendation: () => { recommendedSim: Simulation; reason: string };
  resetProgress: () => void;
  exportProfileJson: () => string;
  importProfileJson: (jsonString: string) => boolean;
}

const LEGACY_STORAGE_KEY = 'apex_mba_student_profile_v2';

const DEFAULT_PROFILE: StudentProfile = {
  name: 'Alex Mercer',
  roleTitle: 'MBA Candidate (Class of 2027)',
  experienceLevel: 'Intermediate',
  difficultyPreference: 'Intermediate',
  enrolledSubjects: ['marketing', 'product', 'microeconomics', 'ob', 'strategy', 'finance', 'statistics', 'operations'],
  attempts: {},
  behavioralTraits: {
    riskAppetite: 50, // 0 = conservative, 100 = aggressive
    strategicHorizon: 60, // 0 = short-term, 100 = long-term structural
    customerVsMargin: 55, // 0 = margin-first, 100 = customer-centric
    analyticalPrudence: 65, // 0 = gut intuitive, 100 = data-driven
  },
  conceptMastery: {
    'STP Framework': 40,
    'Price Elasticity': 35,
    'Jobs to Be Done': 45,
    'Theory of Constraints': 30,
    'DuPont Analysis': 25,
    'Psychological Safety': 50,
    'Porters Five Forces': 40,
    'Hypothesis Testing': 30,
    'Cash Conversion Cycle': 35,
    'Little\'s Law': 20,
    'RICE Prioritization': 40,
    'Kotter Change Model': 35
  },
  completedSimulationIds: []
};

const StudentContext = createContext<StudentContextType | undefined>(undefined);

export const StudentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentUser } = useAuth();
  const studentKey = currentUser ? `stratex_profile_${currentUser.studentId}` : null;

  const loadProfileForStudent = (student: StudentAccount): StudentProfile => {
    const key = `stratex_profile_${student.studentId}`;
    try {
      const saved = localStorage.getItem(key);
      if (saved) {
        return JSON.parse(saved);
      }
      // Check legacy storage for Alex Mercer (MBA2026001)
      if (student.studentId === 'MBA2026001') {
        const legacy = localStorage.getItem(LEGACY_STORAGE_KEY);
        if (legacy) {
          const parsed = JSON.parse(legacy);
          localStorage.setItem(key, JSON.stringify(parsed));
          return parsed;
        }
      }
    } catch (e) {
      console.error('Failed to parse student profile from localStorage:', e);
    }

    // Default clean profile for newly registered / seeded students
    return {
      studentId: student.studentId,
      name: student.name,
      roleTitle: student.roleTitle,
      experienceLevel: 'Intermediate',
      difficultyPreference: 'Intermediate',
      enrolledSubjects: ['marketing', 'product', 'microeconomics', 'ob', 'strategy', 'finance', 'statistics', 'operations'],
      attempts: {},
      behavioralTraits: {
        riskAppetite: 50,
        strategicHorizon: 60,
        customerVsMargin: 55,
        analyticalPrudence: 65,
      },
      conceptMastery: {
        'STP Framework': 30,
        'Price Elasticity': 30,
        'Jobs to Be Done': 30,
        'Theory of Constraints': 30,
        'DuPont Analysis': 30,
        'Psychological Safety': 30,
        'Porters Five Forces': 30,
        'Hypothesis Testing': 30,
        'Cash Conversion Cycle': 30,
        'Little\'s Law': 30,
        'RICE Prioritization': 30,
        'Kotter Change Model': 30
      },
      completedSimulationIds: []
    };
  };

  const [profile, setProfile] = useState<StudentProfile>(() => {
    if (currentUser) {
      return loadProfileForStudent(currentUser);
    }
    return DEFAULT_PROFILE;
  });

  // Reload profile when authenticated student changes
  useEffect(() => {
    if (currentUser) {
      setProfile(loadProfileForStudent(currentUser));
    } else {
      setProfile(DEFAULT_PROFILE);
    }
  }, [currentUser?.studentId]);

  // Persist profile changes to the authenticated student's unique profile key
  useEffect(() => {
    if (studentKey && profile) {
      try {
        localStorage.setItem(studentKey, JSON.stringify(profile));
      } catch (e) {
        console.error('Failed to save student profile to localStorage:', e);
      }
    }
  }, [profile, studentKey]);

  const updateProfile = (updates: Partial<StudentProfile>) => {
    setProfile(prev => ({ ...prev, ...updates }));
  };

  const recordAttempt = (attempt: SimulationAttempt, choices: DecisionChoice[]) => {
    setProfile(prev => {
      const existingAttempts = prev.attempts[attempt.simulationId] || [];
      const updatedAttempts = {
        ...prev.attempts,
        [attempt.simulationId]: [...existingAttempts, attempt]
      };

      const updatedCompleted = prev.completedSimulationIds.includes(attempt.simulationId)
        ? prev.completedSimulationIds
        : [...prev.completedSimulationIds, attempt.simulationId];

      // Update behavioral traits based on decision choices
      let newRisk = prev.behavioralTraits.riskAppetite;
      let newHorizon = prev.behavioralTraits.strategicHorizon;
      let newCustomerVsMargin = prev.behavioralTraits.customerVsMargin;
      let newPrudence = prev.behavioralTraits.analyticalPrudence;

      choices.forEach(c => {
        if (c.riskLevel === 'Aggressive') newRisk = Math.min(100, newRisk + 5);
        if (c.riskLevel === 'High') newRisk = Math.min(100, newRisk + 3);
        if (c.riskLevel === 'Low') newRisk = Math.max(0, newRisk - 3);

        if (c.strategicOrientation === 'Customer-Centric') {
          newCustomerVsMargin = Math.min(100, newCustomerVsMargin + 4);
          newHorizon = Math.min(100, newHorizon + 3);
        } else if (c.strategicOrientation === 'Financial/Margin') {
          newCustomerVsMargin = Math.max(0, newCustomerVsMargin - 4);
        } else if (c.strategicOrientation === 'Operational-Efficiency') {
          newPrudence = Math.min(100, newPrudence + 4);
        } else if (c.strategicOrientation === 'Aggressive/Disruptive') {
          newRisk = Math.min(100, newRisk + 4);
          newHorizon = Math.max(0, newHorizon - 2);
        }
      });

      // Update concept mastery
      const sim = ALL_SIMULATIONS.find(s => s.id === attempt.simulationId);
      const updatedMastery = { ...prev.conceptMastery };
      if (sim) {
        sim.relatedConcepts.forEach(c => {
          const current = updatedMastery[c] || 30;
          const boost = attempt.finalScore >= 80 ? 25 : attempt.finalScore >= 60 ? 15 : 8;
          updatedMastery[c] = Math.min(100, current + boost);
        });
      }

      return {
        ...prev,
        attempts: updatedAttempts,
        completedSimulationIds: updatedCompleted,
        behavioralTraits: {
          riskAppetite: Math.round(newRisk),
          strategicHorizon: Math.round(newHorizon),
          customerVsMargin: Math.round(newCustomerVsMargin),
          analyticalPrudence: Math.round(newPrudence)
        },
        conceptMastery: updatedMastery
      };
    });
  };

  const getAdaptiveRecommendation = (): { recommendedSim: Simulation; reason: string } => {
    // 1. Look for uncompleted simulations first
    const uncompleted = ALL_SIMULATIONS.filter(s => !profile.completedSimulationIds.includes(s.id));
    
    if (uncompleted.length > 0) {
      const matchingSubjectSim = uncompleted.find(s => profile.enrolledSubjects.includes(s.subjectId));
      if (matchingSubjectSim) {
        return {
          recommendedSim: matchingSubjectSim,
          reason: `Recommended next challenge for your ${matchingSubjectSim.difficulty} level in ${matchingSubjectSim.industry}.`
        };
      }
      return {
        recommendedSim: uncompleted[0],
        reason: `Build breadth across key executive management domains.`
      };
    }

    // If all completed, recommend based on lowest concept mastery
    let lowestConcept = '';
    let lowestScore = 999;
    Object.entries(profile.conceptMastery).forEach(([concept, score]) => {
      if (score < lowestScore) {
        lowestScore = score;
        lowestConcept = concept;
      }
    });

    const simForConcept = ALL_SIMULATIONS.find(s => s.relatedConcepts.includes(lowestConcept)) || ALL_SIMULATIONS[0];
    return {
      recommendedSim: simForConcept,
      reason: `Mastery booster: Deepen your strategic understanding of ${lowestConcept || 'core business trade-offs'}.`
    };
  };

  const resetProgress = () => {
    if (currentUser) {
      const fresh: StudentProfile = {
        studentId: currentUser.studentId,
        name: currentUser.name,
        roleTitle: currentUser.roleTitle,
        experienceLevel: 'Intermediate',
        difficultyPreference: 'Intermediate',
        enrolledSubjects: ['marketing', 'product', 'microeconomics', 'ob', 'strategy', 'finance', 'statistics', 'operations'],
        attempts: {},
        behavioralTraits: {
          riskAppetite: 50,
          strategicHorizon: 60,
          customerVsMargin: 55,
          analyticalPrudence: 65,
        },
        conceptMastery: {
          'STP Framework': 30,
          'Price Elasticity': 30,
          'Jobs to Be Done': 30,
          'Theory of Constraints': 30,
          'DuPont Analysis': 30,
          'Psychological Safety': 30,
          'Porters Five Forces': 30,
          'Hypothesis Testing': 30,
          'Cash Conversion Cycle': 30,
          'Little\'s Law': 30,
          'RICE Prioritization': 30,
          'Kotter Change Model': 30
        },
        completedSimulationIds: []
      };
      setProfile(fresh);
      if (studentKey) {
        localStorage.setItem(studentKey, JSON.stringify(fresh));
      }
    } else {
      setProfile(DEFAULT_PROFILE);
    }
  };

  const exportProfileJson = () => {
    return JSON.stringify(profile, null, 2);
  };

  const importProfileJson = (jsonString: string): boolean => {
    try {
      const parsed = JSON.parse(jsonString);
      if (parsed.name && parsed.attempts) {
        setProfile(parsed);
        return true;
      }
    } catch (e) {
      console.error('Failed to import profile:', e);
    }
    return false;
  };

  return (
    <StudentContext.Provider
      value={{
        profile,
        updateProfile,
        recordAttempt,
        getAdaptiveRecommendation,
        resetProgress,
        exportProfileJson,
        importProfileJson
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export const useStudent = () => {
  const context = useContext(StudentContext);
  if (!context) {
    throw new Error('useStudent must be used within a StudentProvider');
  }
  return context;
};
