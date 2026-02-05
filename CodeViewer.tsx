import React from 'react';
import { Code2, GitBranch } from 'lucide-react';

export const CodeViewer: React.FC = () => {
  const codeSnippet = `# AASIST HtrgGAT Architecture Pseudo-code
class AASIST(nn.Module):
    def __init__(self):
        # Sinc-Convolutional Front-end
        self.sinc_conv = SincConv(
            out_channels=128,
            kernel_size=251
        )
        
        # Residual Blocks for Feature Extraction
        self.res_blocks = nn.Sequential(
            ResBlock(128, 256),
            ResBlock(256, 512),
            ResBlock(512, 512)
        )
        
        # Heterogeneous Graph Attention Network
        self.htrgat_layers = nn.ModuleList([
            HtrgGATLayer(
                in_features=512,
                out_features=256,
                num_heads=4
            ) for _ in range(3)
        ])
        
        # Attention-based Graph Pooling
        self.graph_pool = AttentionPooling(256)
        
        # Classification Head
        self.classifier = nn.Linear(256, 2)
    
    def forward(self, x):
        # Raw waveform → Spectral features
        x = self.sinc_conv(x)
        x = self.res_blocks(x)
        
        # Build graph from features
        graph = self.build_graph(x)
        
        # Apply HtrgGAT layers
        for layer in self.htrgat_layers:
            graph = layer(graph)
        
        # Pool graph to single vector
        x = self.graph_pool(graph)
        
        # Classify: bonafide vs spoof
        logits = self.classifier(x)
        return logits

# Training on ASVspoof 2019 LA Dataset
model = AASIST()
optimizer = Adam(model.parameters(), lr=0.0001)
criterion = WeightedCrossEntropyLoss()

for epoch in range(100):
    for batch in dataloader:
        audio, labels = batch
        logits = model(audio)
        loss = criterion(logits, labels)
        
        optimizer.zero_grad()
        loss.backward()
        optimizer.step()`;

  return (
    <div className="relative">
      <div className="p-12 bg-black/60 border border-white/10 rounded-[3rem] overflow-hidden">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Code2 className="w-6 h-6 text-orange-500" />
            <h3 className="text-xl font-black text-white uppercase tracking-wider mono">
              AASIST Architecture
            </h3>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full">
            <GitBranch className="w-4 h-4 text-[#4aa3b8]" />
            <span className="text-[10px] font-black text-[#4aa3b8] uppercase tracking-widest mono">
              PyTorch Implementation
            </span>
          </div>
        </div>

        <div className="relative">
          <pre className="text-sm text-emerald-400 font-mono overflow-x-auto p-8 bg-black/80 rounded-2xl border border-white/5">
            <code>{codeSnippet}</code>
          </pre>
          
          {/* Syntax highlighting overlay effect */}
          <div className="absolute top-4 right-4 flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
          </div>
        </div>

        <div className="mt-8 p-6 bg-orange-500/10 border border-orange-500/30 rounded-2xl">
          <p className="text-sm text-slate-400 leading-relaxed">
            <span className="font-black text-orange-500 uppercase tracking-wider mono">Note:</span> This is a simplified 
            pseudo-code representation. The actual implementation includes additional components like 
            max feature map (MFM) activation, batch normalization, and sophisticated attention mechanisms.
          </p>
        </div>
      </div>
    </div>
  );
};
