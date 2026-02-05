import React from 'react';
import { AnalysisReport, DetectionResult } from '../types';
import { Shield, AlertTriangle, CheckCircle2, XCircle, RefreshCw, Zap } from 'lucide-react';

interface ResultViewProps {
  report: AnalysisReport;
  onReset: () => void;
}

export const ResultView: React.FC<ResultViewProps> = ({ report, onReset }) => {
  const isSpoof = report.decision === DetectionResult.SPOOF;
  const isBonafide = report.decision === DetectionResult.BONAFIDE;

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      {/* Verdict Header */}
      <div className={`relative p-12 rounded-[3rem] border-4 ${
        isSpoof ? 'bg-red-950/20 border-red-500/50' : 'bg-emerald-950/20 border-emerald-500/50'
      }`}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-8">
            {isSpoof ? (
              <AlertTriangle className="w-20 h-20 text-red-500 animate-pulse" />
            ) : (
              <CheckCircle2 className="w-20 h-20 text-emerald-500" />
            )}
            <div>
              <div className="flex items-center gap-4 mb-2">
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em] mono">
                  VERDICT
                </span>
              </div>
              <h3 className={`text-6xl font-black uppercase tracking-tighter italic ${
                isSpoof ? 'text-red-500' : 'text-emerald-500'
              }`}>
                {report.decision}
              </h3>
              <p className="text-lg text-slate-400 mt-3 mono">
                {report.summary}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="px-8 py-4 bg-black/40 border border-white/10 rounded-2xl">
              <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mono mb-2">
                Confidence
              </div>
              <div className="text-4xl font-black text-white mono italic">
                {(report.scores.confidence * 100).toFixed(1)}%
              </div>
            </div>
            <div className="px-8 py-4 bg-black/40 border border-white/10 rounded-2xl">
              <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mono mb-2">
                Authenticity
              </div>
              <div className="text-4xl font-black text-white mono italic">
                {(report.scores.authenticity_score * 100).toFixed(1)}%
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Explanation */}
      <div className="p-12 bg-black/40 border border-white/10 rounded-[3rem]">
        <div className="flex items-center gap-4 mb-6">
          <Shield className="w-6 h-6 text-orange-500" />
          <h4 className="text-xl font-black text-white uppercase tracking-wider mono">
            Forensic Analysis
          </h4>
        </div>
        <p className="text-lg text-slate-300 leading-relaxed">
          {report.explanation}
        </p>
      </div>

      {/* Provenance Scores */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-12 bg-emerald-950/20 border border-emerald-500/30 rounded-[3rem]">
          <div className="flex items-center gap-4 mb-6">
            <CheckCircle2 className="w-6 h-6 text-emerald-500" />
            <h4 className="text-lg font-black text-emerald-500 uppercase tracking-wider mono">
              Human Probability
            </h4>
          </div>
          <div className="text-5xl font-black text-white mono italic mb-4">
            {(report.provenance.human_probability * 100).toFixed(2)}%
          </div>
          <div className="w-full h-3 bg-black/40 rounded-full overflow-hidden">
            <div 
              className="h-full bg-emerald-500 transition-all duration-1000"
              style={{ width: `${report.provenance.human_probability * 100}%` }}
            />
          </div>
        </div>

        <div className="p-12 bg-red-950/20 border border-red-500/30 rounded-[3rem]">
          <div className="flex items-center gap-4 mb-6">
            <XCircle className="w-6 h-6 text-red-500" />
            <h4 className="text-lg font-black text-red-500 uppercase tracking-wider mono">
              Synthetic Probability
            </h4>
          </div>
          <div className="text-5xl font-black text-white mono italic mb-4">
            {(report.provenance.synthetic_probability * 100).toFixed(2)}%
          </div>
          <div className="w-full h-3 bg-black/40 rounded-full overflow-hidden">
            <div 
              className="h-full bg-red-500 transition-all duration-1000"
              style={{ width: `${report.provenance.synthetic_probability * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Technical Details */}
      <div className="p-12 bg-black/40 border border-white/10 rounded-[3rem]">
        <h4 className="text-2xl font-black text-white uppercase tracking-wider mono mb-8">
          Technical Findings
        </h4>
        
        <div className="space-y-8">
          {report.technicalDetails.spectralAnomalies.length > 0 && (
            <div>
              <h5 className="text-sm font-black text-orange-500 uppercase tracking-wider mono mb-4">
                Spectral Anomalies
              </h5>
              <ul className="space-y-2">
                {report.technicalDetails.spectralAnomalies.map((item, idx) => (
                  <li key={idx} className="text-slate-400 flex items-start gap-3">
                    <span className="text-orange-500 mt-1">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {report.technicalDetails.temporalInconsistencies.length > 0 && (
            <div>
              <h5 className="text-sm font-black text-[#4aa3b8] uppercase tracking-wider mono mb-4">
                Temporal Inconsistencies
              </h5>
              <ul className="space-y-2">
                {report.technicalDetails.temporalInconsistencies.map((item, idx) => (
                  <li key={idx} className="text-slate-400 flex items-start gap-3">
                    <span className="text-[#4aa3b8] mt-1">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {report.technicalDetails.syntheticArtifacts.length > 0 && (
            <div>
              <h5 className="text-sm font-black text-red-500 uppercase tracking-wider mono mb-4">
                Synthetic Artifacts
              </h5>
              <ul className="space-y-2">
                {report.technicalDetails.syntheticArtifacts.map((item, idx) => (
                  <li key={idx} className="text-slate-400 flex items-start gap-3">
                    <span className="text-red-500 mt-1">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Reset Button */}
      <div className="flex justify-center pt-8">
        <button
          onClick={onReset}
          className="group flex items-center gap-6 px-16 py-8 bg-black border-2 border-[#4aa3b8]/50 hover:border-[#4aa3b8] text-[#4aa3b8] hover:text-white hover:bg-[#4aa3b8] rounded-2xl font-black transition-all hover:scale-105 shadow-[0_20px_60px_rgba(74,163,184,0.2)] mono uppercase tracking-[0.3em]"
        >
          <RefreshCw className="w-6 h-6 group-hover:rotate-180 transition-transform duration-500" />
          <span className="text-xl">New Analysis</span>
        </button>
      </div>
    </div>
  );
};
