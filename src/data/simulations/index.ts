import { Simulation } from '../../types';
import { marketingSimulations } from './marketingSimulations';
import { productSimulations } from './productSimulations';
import { microeconomicsSimulations } from './microeconomicsSimulations';
import { obSimulations } from './obSimulations';
import { strategySimulations } from './strategySimulations';
import { financeSimulations } from './financeSimulations';
import { statisticsSimulations } from './statisticsSimulations';
import { operationsSimulations } from './operationsSimulations';

export const ALL_SIMULATIONS: Simulation[] = [
  ...marketingSimulations,
  ...productSimulations,
  ...microeconomicsSimulations,
  ...obSimulations,
  ...strategySimulations,
  ...financeSimulations,
  ...statisticsSimulations,
  ...operationsSimulations,
];

export const getSimulationById = (id: string): Simulation | undefined => {
  return ALL_SIMULATIONS.find(sim => sim.id === id);
};

export const getSimulationsBySubject = (subjectId: string): Simulation[] => {
  return ALL_SIMULATIONS.filter(sim => sim.subjectId === subjectId);
};

export const getSimulationsByConcept = (conceptId: string): Simulation[] => {
  return ALL_SIMULATIONS.filter(sim => sim.conceptId === conceptId || sim.relatedConcepts.some(c => c.toLowerCase().includes(conceptId.toLowerCase())));
};
