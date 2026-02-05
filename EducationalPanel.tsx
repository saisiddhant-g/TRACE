import React from 'react';
import { Network, Layers, Waves, BrainCircuit } from 'lucide-react';

export const EducationalPanel: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-16">
      <div className="text-center space-y-6">
        <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter italic">
          AASIST Methodology
        </h2>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Advanced Audio Anti-Spoofing using Integrated Spectro-Temporal Graph Attention Networks
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1 */}
        <div className="group p-12 bg-black/40 border border-white/10 hover:border-orange-500/50 rounded-[3rem] transition-all hover:scale-[1.02]">
          <div className="flex items-center gap-6 mb-8">
            <div className="p-4 bg-orange-500/10 border border-orange-500/30 rounded-2xl">
              <Waves className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-2xl font-black text-white uppercase tracking-wider mono">
              Sinc-Convolutional Front-end
            </h3>
          </div>
          <p className="text-lg text-slate-400 leading-relaxed">
            Processes raw waveforms directly using learnable Sinc filters to extract low-level acoustic features. 
            This approach captures fine-grained temporal patterns that traditional mel-spectrograms might miss, 
            making it particularly effective at detecting subtle synthetic artifacts.
          </p>
        </div>

        {/* Card 2 */}
        <div className="group p-12 bg-black/40 border border-white/10 hover:border-[#4aa3b8]/50 rounded-[3rem] transition-all hover:scale-[1.02]">
          <div className="flex items-center gap-6 mb-8">
            <div className="p-4 bg-[#4aa3b8]/10 border border-[#4aa3b8]/30 rounded-2xl">
              <Network className="w-8 h-8 text-[#4aa3b8]" />
            </div>
            <h3 className="text-2xl font-black text-white uppercase tracking-wider mono">
              Graph Attention Network
            </h3>
          </div>
          <p className="text-lg text-slate-400 leading-relaxed">
            Models audio features as nodes in a heterogeneous graph, where edges represent spectro-temporal relationships. 
            The HtrgGAT layer learns attention weights to focus on the most discriminative patterns, 
            enabling robust detection of deepfake audio and TTS-generated speech.
          </p>
        </div>

        {/* Card 3 */}
        <div className="group p-12 bg-black/40 border border-white/10 hover:border-emerald-500/50 rounded-[3rem] transition-all hover:scale-[1.02]">
          <div className="flex items-center gap-6 mb-8">
            <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl">
              <Layers className="w-8 h-8 text-emerald-500" />
            </div>
            <h3 className="text-2xl font-black text-white uppercase tracking-wider mono">
              Multi-Scale Pooling
            </h3>
          </div>
          <p className="text-lg text-slate-400 leading-relaxed">
            Employs an attention-based graph pooling mechanism that aggregates information across multiple temporal scales. 
            This hierarchical approach ensures that both short-term anomalies (like glitches) and long-term patterns 
            (like unnatural prosody) are captured in the final decision.
          </p>
        </div>

        {/* Card 4 */}
        <div className="group p-12 bg-black/40 border border-white/10 hover:border-purple-500/50 rounded-[3rem] transition-all hover:scale-[1.02]">
          <div className="flex items-center gap-6 mb-8">
            <div className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-2xl">
              <BrainCircuit className="w-8 h-8 text-purple-500" />
            </div>
            <h3 className="text-2xl font-black text-white uppercase tracking-wider mono">
              End-to-End Training
            </h3>
          </div>
          <p className="text-lg text-slate-400 leading-relaxed">
            The entire pipeline is trained jointly on massive datasets of authentic and synthetic speech. 
            This allows the model to learn optimal feature representations without manual engineering, 
            achieving state-of-the-art performance on ASVspoof 2019 and 2021 benchmarks.
          </p>
        </div>
      </div>

      {/* Research Reference */}
      <div className="p-12 bg-gradient-to-br from-black/60 to-slate-900/40 border border-white/10 rounded-[3rem]">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h4 className="text-xl font-black text-white uppercase tracking-wider mono mb-4">
              Research Foundation
            </h4>
            <p className="text-slate-400 leading-relaxed max-w-2xl">
              This implementation is based on the paper "AASIST: Audio Anti-Spoofing using Integrated Spectro-Temporal Graph Attention Networks" 
              by Jung et al. (2022), which achieved top performance on the ASVspoof challenge series.
            </p>
          </div>
          <div className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl">
            <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mono mb-2">
              Benchmark
            </div>
            <div className="text-3xl font-black text-orange-500 mono italic">
              0.83% EER
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
