export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';

export type StrategicOrientation = 
  | 'Customer-Centric' 
  | 'Financial/Margin' 
  | 'Risk-Averse' 
  | 'Aggressive/Disruptive'
  | 'Operational-Efficiency';

export type RiskLevel = 'Low' | 'Moderate' | 'High' | 'Aggressive';

export interface BusinessMetric {
  key: string;
  label: string;
  value: number;
  unit: string;
  format?: 'currency' | 'percentage' | 'number' | 'ratio';
  change?: number;
  benchmark?: number;
  description?: string;
  isGoodWhenHigh?: boolean;
}

export interface MetricDelta {
  [metricKey: string]: number;
}

export interface DecisionChoice {
  id: string;
  title: string;
  description: string;
  tradeOffs: {
    pros: string[];
    cons: string[];
  };
  riskLevel: RiskLevel;
  strategicOrientation: StrategicOrientation;
  outcome: {
    summary: string;
    detailedAnalysis: string;
    metricDeltas: MetricDelta;
    competitorReaction: string;
    stakeholderFeedback: string;
    theorySnippet?: {
      framework: string;
      takeaway: string;
    };
  };
}

export interface SimulationRound {
  roundNumber: number;
  title: string;
  quarterOrTimeline: string;
  briefing: string;
  marketIntel: {
    headline: string;
    competitorMove: string;
    macroEnvironment: string;
    internalWhisper?: string;
  };
  urgentQuestion: string;
  choices: DecisionChoice[];
}

export interface EducationalDebrief {
  whatHappened: string;
  whyItHappened: string;
  conceptsApplied: Array<{
    name: string;
    formulaOrModel?: string;
    explanation: string;
    keyTakeaway: string;
  }>;
  expertExecutivePerspective: string;
  alternativePaths: Array<{
    choiceTitle: string;
    counterfactualConsequence: string;
  }>;
  realWorldParallels: Array<{
    company: string;
    caseStudySummary: string;
  }>;
}

export interface Simulation {
  id: string;
  subjectId: string;
  conceptId: string;
  relatedConcepts: string[];
  title: string;
  tagline: string;
  role: string;
  company: string;
  industry: string;
  difficulty: Difficulty;
  estimatedMinutes: number;
  background: {
    companyHistory: string;
    industryContext: string;
    currentSituation: string;
  };
  objectives: string[];
  constraints: string[];
  initialMetrics: BusinessMetric[];
  rounds: SimulationRound[];
  educationalDebrief: EducationalDebrief;
  // Optional dataset for data-driven simulations (e.g. Business Statistics)
  dataset?: Array<Record<string, string | number>>;
}

export interface ConceptDefinition {
  id: string;
  subjectId: string;
  name: string;
  tagline: string;
  description: string;
  keyFramework: string;
  formula?: string;
  realWorldExample: string;
  simulationId: string;
}

export interface Subject {
  id: string;
  code: string;
  title: string;
  description: string;
  icon: string;
  accentColor: string;
  concepts: ConceptDefinition[];
  simulationIds: string[];
}

export interface DecisionHistoryRecord {
  roundNumber: number;
  roundTitle: string;
  choiceId: string;
  choiceTitle: string;
  metricDeltas: MetricDelta;
  metricsAfter: Record<string, number>;
  timestamp: string;
}

export interface SimulationAttempt {
  simulationId: string;
  completedAt: string;
  finalScore: number;
  roundsCompleted: number;
  totalRounds: number;
  decisions: DecisionHistoryRecord[];
  finalMetrics: Record<string, number>;
  feedbackSummary: string;
}

export interface StudentProfile {
  studentId?: string;
  name: string;
  roleTitle: string;
  experienceLevel: 'Novice' | 'Intermediate' | 'Experienced';
  difficultyPreference: Difficulty;
  enrolledSubjects: string[];
  attempts: Record<string, SimulationAttempt[]>; // simulationId -> attempts
  behavioralTraits: {
    riskAppetite: number; // 0 (extreme conservative) - 100 (high risk-seeking)
    strategicHorizon: number; // 0 (short-term tactical) - 100 (long-term structural)
    customerVsMargin: number; // 0 (margin-maximizer) - 100 (customer-first)
    analyticalPrudence: number; // 0 (gut-intuitive) - 100 (deeply data-driven)
  };
  conceptMastery: Record<string, number>; // conceptName -> 0-100%
  completedSimulationIds: string[];
}

export * from './auth';
