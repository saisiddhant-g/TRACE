import React, { useState, useEffect } from 'react';
import { Activity, Cpu, Zap, Radio } from 'lucide-react';

export const ProcessingView: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [currentStage, setCurrentStage] = useState(0);

  const stages = [
    'Initializing AASIST Engine',
    'Extracting Spectral Features',
    'Building Graph Attention Network',
    'Computing HtrgGAT Embeddings',
    'Analyzing Temporal Patterns',
    'Detecting Synthetic Artifacts',
    'Generating Forensic Report'
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 100;
        return prev + 2;
      });
    }, 80);

    const stageInterval = setInterval(() => {
      setCurrentStage(prev => {
        if (prev >= stages.length - 1) return stages.length - 1;
        return prev + 1;
      });
    }, 600);

    return () => {
      clearInterval(progressInterval);
      clearInterval(stageInterval);
    };
  }, []);

  return (
    <div className="max-w-5xl mx-auto space-y-16">
      {/* Processing Header */}
      <div className="text-center space-y-8">
        <div className="flex flex-col items-center gap-6">
          <div className="relative">
            <Cpu className="w-32 h-32 text-orange-500 animate-pulse" />
            <div className="absolute inset-0 w-32 h-32 bg-orange-500/30 blur-3xl rounded-full animate-pulse" />
          </div>
          <div>
            <h3 className="text-6xl font-black text-white uppercase tracking-tighter italic mb-4">
              Processing
            </h3>
            <p className="text-xl text-slate-400 mono">
              Deep forensic analysis in progress...
            </p>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <span className="text-sm font-black text-slate-500 uppercase tracking-wider mono">
            Analysis Progress
          </span>
          <span className="text-3xl font-black text-orange-500 mono italic">
            {progress}%
          </span>
        </div>
        <div className="w-full h-6 bg-black/60 border border-white/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 transition-all duration-300 relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-white/20 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Processing Stages */}
      <div className="space-y-4">
        {stages.map((stage, index) => (
          <div
            key={index}
            className={`
              flex items-center gap-6 p-6 rounded-2xl border-2 transition-all duration-500
              ${index === currentStage 
                ? 'bg-orange-950/30 border-orange-500/50 scale-105' 
                : index < currentStage 
                  ? 'bg-emerald-950/20 border-emerald-500/30' 
                  : 'bg-black/20 border-white/5 opacity-40'
              }
            `}
          >
            <div className="flex items-center gap-4">
              {index < currentStage ? (
                <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
              ) : index === currentStage ? (
                <div className="w-8 h-8 rounded-full bg-orange-500 animate-pulse flex items-center justify-center">
                  <Activity className="w-5 h-5 text-white animate-pulse" />
                </div>
              ) : (
                <div className="w-8 h-8 rounded-full bg-slate-700/50 border border-slate-600" />
              )}
              <span className={`
                text-lg font-bold mono uppercase tracking-wide
                ${index === currentStage ? 'text-orange-500' : index < currentStage ? 'text-emerald-500' : 'text-slate-600'}
              `}>
                {stage}
              </span>
            </div>
            {index === currentStage && (
              <div className="ml-auto">
                <Radio className="w-6 h-6 text-orange-500 animate-pulse" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Processing Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-8 bg-black/40 border border-white/10 rounded-2xl text-center">
          <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mono mb-3">
            Nodes Analyzed
          </div>
          <div className="text-4xl font-black text-[#4aa3b8] mono italic">
            {Math.floor(progress * 157 / 100)}
          </div>
        </div>
        <div className="p-8 bg-black/40 border border-white/10 rounded-2xl text-center">
          <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mono mb-3">
            Features Extracted
          </div>
          <div className="text-4xl font-black text-orange-500 mono italic">
            {Math.floor(progress * 2048 / 100)}
          </div>
        </div>
        <div className="p-8 bg-black/40 border border-white/10 rounded-2xl text-center">
          <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mono mb-3">
            Graph Layers
          </div>
          <div className="text-4xl font-black text-emerald-500 mono italic">
            {Math.min(6, Math.floor(progress * 6 / 100))}
          </div>
        </div>
      </div>
    </div>
  );
};
