import React, { useState } from 'react';
import { Table, BarChart2, Search, ArrowUpDown, ChevronDown, CheckCircle, Info } from 'lucide-react';

interface DatasetRow {
  cohortId: string;
  region: string;
  sampleSize: number;
  avgCsat: number;
  latencyMs: number;
  supportHoldMin: number;
  billingErrorPct: number;
  monthlySpend: number;
}

interface Props {
  dataset?: Array<Record<string, string | number>>;
  simulationId: string;
}

export const InteractiveDataLab: React.FC<Props> = ({ dataset = [], simulationId }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState<string>('avgCsat');
  const [sortAsc, setSortAsc] = useState<boolean>(false);
  const [varX, setVarX] = useState<string>('supportHoldMin');
  const [varY, setVarY] = useState<string>('avgCsat');

  const rows = dataset as unknown as DatasetRow[];

  // Filtered rows
  const filteredRows = rows.filter(r => {
    return (
      r.region.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.cohortId.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  // Sorted rows
  const sortedRows = [...filteredRows].sort((a, b) => {
    const valA = (a as unknown as Record<string, string | number>)[sortField];
    const valB = (b as unknown as Record<string, string | number>)[sortField];
    if (typeof valA === 'number' && typeof valB === 'number') {
      return sortAsc ? valA - valB : valB - valA;
    }
    return sortAsc
      ? String(valA).localeCompare(String(valB))
      : String(valB).localeCompare(String(valA));
  });

  // Calculate descriptive stats for a column
  const getStats = (field: keyof DatasetRow) => {
    const nums = rows.map(r => Number(r[field])).filter(n => !isNaN(n));
    if (nums.length === 0) return { mean: 0, median: 0, sd: 0, min: 0, max: 0 };

    const sum = nums.reduce((acc, val) => acc + val, 0);
    const mean = sum / nums.length;

    const sorted = [...nums].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    const median = sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;

    const variance = nums.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / (nums.length - 1);
    const sd = Math.sqrt(variance);

    return {
      mean,
      median,
      sd,
      min: sorted[0],
      max: sorted[sorted.length - 1]
    };
  };

  // Calculate Pearson correlation between varX and varY
  const calculateCorrelation = (fieldX: string, fieldY: string) => {
    const xVals = rows.map(r => Number((r as unknown as Record<string, string | number>)[fieldX])).filter(n => !isNaN(n));
    const yVals = rows.map(r => Number((r as unknown as Record<string, string | number>)[fieldY])).filter(n => !isNaN(n));

    if (xVals.length !== yVals.length || xVals.length === 0) return 0;

    const meanX = xVals.reduce((a, b) => a + b, 0) / xVals.length;
    const meanY = yVals.reduce((a, b) => a + b, 0) / yVals.length;

    let numerator = 0;
    let sumSqX = 0;
    let sumSqY = 0;

    for (let i = 0; i < xVals.length; i++) {
      const diffX = xVals[i] - meanX;
      const diffY = yVals[i] - meanY;
      numerator += diffX * diffY;
      sumSqX += diffX * diffX;
      sumSqY += diffY * diffY;
    }

    const denominator = Math.sqrt(sumSqX * sumSqY);
    return denominator === 0 ? 0 : numerator / denominator;
  };

  const correlation = calculateCorrelation(varX, varY);
  const csatStats = getStats('avgCsat');
  const holdStats = getStats('supportHoldMin');
  const errorStats = getStats('billingErrorPct');
  const latencyStats = getStats('latencyMs');

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(false);
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
            <BarChart2 className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Live Decision Science & Statistical Data Lab</h2>
            <p className="text-xs text-slate-400">Empirical multivariate dataset with real calculations ({rows.length} cohort clusters)</p>
          </div>
        </div>

        {/* Search */}
        <div className="relative min-w-[220px]">
          <Search className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Search cohort or region..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-500"
          />
        </div>
      </div>

      {/* Summary KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="bg-slate-950/70 border border-slate-800 p-3 rounded-xl">
          <span className="text-[10px] text-slate-400 uppercase font-semibold">Mean CSAT</span>
          <div className="text-xl font-bold text-teal-400 mt-1">{csatStats.mean.toFixed(1)} / 100</div>
          <span className="text-[10px] text-slate-500">SD: ±{csatStats.sd.toFixed(1)} | Median: {csatStats.median}</span>
        </div>
        <div className="bg-slate-950/70 border border-slate-800 p-3 rounded-xl">
          <span className="text-[10px] text-slate-400 uppercase font-semibold">Mean Support Hold</span>
          <div className="text-xl font-bold text-rose-400 mt-1">{holdStats.mean.toFixed(1)} mins</div>
          <span className="text-[10px] text-slate-500">Range: {holdStats.min} - {holdStats.max} mins</span>
        </div>
        <div className="bg-slate-950/70 border border-slate-800 p-3 rounded-xl">
          <span className="text-[10px] text-slate-400 uppercase font-semibold">Mean Billing Error Rate</span>
          <div className="text-xl font-bold text-amber-400 mt-1">{errorStats.mean.toFixed(1)}%</div>
          <span className="text-[10px] text-slate-500">Max Error: {errorStats.max}% in Pune IT</span>
        </div>
        <div className="bg-slate-950/70 border border-slate-800 p-3 rounded-xl">
          <span className="text-[10px] text-slate-400 uppercase font-semibold">Mean Network Latency</span>
          <div className="text-xl font-bold text-indigo-400 mt-1">{latencyStats.mean.toFixed(1)} ms</div>
          <span className="text-[10px] text-slate-500">Low variance across cities</span>
        </div>
      </div>

      {/* Interactive Correlation Calculator Tool */}
      <div className="bg-slate-950/80 border border-teal-500/20 p-4 rounded-xl flex items-center justify-between flex-wrap gap-4">
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-400 flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5" /> Bivariate Pearson Correlation Engine
          </span>
          <p className="text-xs text-slate-400">Select any two variables to calculate the real-time Pearson correlation coefficient (r):</p>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-1.5">
            <span className="text-xs text-slate-400">Var X:</span>
            <select
              value={varX}
              onChange={e => setVarX(e.target.value)}
              className="bg-slate-900 border border-slate-700 text-xs text-white rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-teal-500"
            >
              <option value="supportHoldMin">Support Hold Time</option>
              <option value="billingErrorPct">Billing Dispute Rate</option>
              <option value="latencyMs">Network Latency (ms)</option>
              <option value="monthlySpend">Monthly Spend (₹)</option>
              <option value="sampleSize">Sample Size</option>
            </select>
          </div>

          <span className="text-xs text-slate-500 font-bold">vs</span>

          <div className="flex items-center gap-1.5">
            <span className="text-xs text-slate-400">Var Y:</span>
            <select
              value={varY}
              onChange={e => setVarY(e.target.value)}
              className="bg-slate-900 border border-slate-700 text-xs text-white rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-teal-500"
            >
              <option value="avgCsat">Customer Satisfaction (CSAT)</option>
              <option value="billingErrorPct">Billing Error Rate (%)</option>
              <option value="supportHoldMin">Support Hold Time</option>
              <option value="latencyMs">Network Latency</option>
            </select>
          </div>

          <div className="bg-slate-900 px-3 py-1.5 rounded-lg border border-teal-500/30 flex items-center gap-2">
            <span className="text-xs text-slate-400 font-medium">Pearson r =</span>
            <span className={`text-sm font-extrabold ${correlation < -0.7 ? 'text-rose-400' : correlation > 0.7 ? 'text-emerald-400' : 'text-amber-400'}`}>
              {correlation.toFixed(3)}
            </span>
            <span className="text-[10px] text-slate-400">
              ({Math.abs(correlation) > 0.7 ? 'Strong' : Math.abs(correlation) > 0.3 ? 'Moderate' : 'Weak'})
            </span>
          </div>
        </div>
      </div>

      {/* Raw Data Table */}
      <div className="overflow-x-auto rounded-xl border border-slate-800">
        <table className="w-full text-left text-xs text-slate-300">
          <thead className="bg-slate-950 text-slate-400 uppercase text-[10px] tracking-wider border-b border-slate-800">
            <tr>
              <th onClick={() => handleSort('cohortId')} className="py-3 px-4 cursor-pointer hover:text-white">
                <div className="flex items-center gap-1">Cohort ID <ArrowUpDown className="w-3 h-3" /></div>
              </th>
              <th onClick={() => handleSort('region')} className="py-3 px-4 cursor-pointer hover:text-white">
                <div className="flex items-center gap-1">Region / Cluster <ArrowUpDown className="w-3 h-3" /></div>
              </th>
              <th onClick={() => handleSort('sampleSize')} className="py-3 px-4 cursor-pointer hover:text-white">
                <div className="flex items-center gap-1">Sample Size (n) <ArrowUpDown className="w-3 h-3" /></div>
              </th>
              <th onClick={() => handleSort('avgCsat')} className="py-3 px-4 cursor-pointer hover:text-white">
                <div className="flex items-center gap-1">Avg CSAT (/100) <ArrowUpDown className="w-3 h-3" /></div>
              </th>
              <th onClick={() => handleSort('supportHoldMin')} className="py-3 px-4 cursor-pointer hover:text-white">
                <div className="flex items-center gap-1">Support Hold (min) <ArrowUpDown className="w-3 h-3" /></div>
              </th>
              <th onClick={() => handleSort('billingErrorPct')} className="py-3 px-4 cursor-pointer hover:text-white">
                <div className="flex items-center gap-1">Billing Error (%) <ArrowUpDown className="w-3 h-3" /></div>
              </th>
              <th onClick={() => handleSort('latencyMs')} className="py-3 px-4 cursor-pointer hover:text-white">
                <div className="flex items-center gap-1">Latency (ms) <ArrowUpDown className="w-3 h-3" /></div>
              </th>
              <th onClick={() => handleSort('monthlySpend')} className="py-3 px-4 cursor-pointer hover:text-white">
                <div className="flex items-center gap-1">Monthly ARPU (₹) <ArrowUpDown className="w-3 h-3" /></div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 bg-slate-900/60 font-mono">
            {sortedRows.map(row => (
              <tr key={row.cohortId} className="hover:bg-slate-800/40 transition-colors">
                <td className="py-2.5 px-4 font-semibold text-teal-400">{row.cohortId}</td>
                <td className="py-2.5 px-4 font-sans text-white font-medium">{row.region}</td>
                <td className="py-2.5 px-4 text-slate-400">{row.sampleSize.toLocaleString()}</td>
                <td className="py-2.5 px-4">
                  <span className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                    row.avgCsat >= 75 ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                    row.avgCsat >= 60 ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                    'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                  }`}>
                    {row.avgCsat}
                  </span>
                </td>
                <td className="py-2.5 px-4 text-slate-300">{row.supportHoldMin.toFixed(1)} min</td>
                <td className="py-2.5 px-4">
                  <span className={row.billingErrorPct > 10 ? 'text-rose-400 font-semibold' : 'text-slate-300'}>
                    {row.billingErrorPct.toFixed(1)}%
                  </span>
                </td>
                <td className="py-2.5 px-4 text-slate-400">{row.latencyMs} ms</td>
                <td className="py-2.5 px-4 text-slate-400">₹{row.monthlySpend}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between text-xs text-slate-400 px-1">
        <span>Showing {sortedRows.length} of {rows.length} cohort observations</span>
        <span className="text-slate-500">Data source: Skyline Telecom Customer Experience Data Warehouse</span>
      </div>
    </div>
  );
};
