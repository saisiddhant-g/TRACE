import React, { useCallback } from 'react';
import { Upload, FileAudio } from 'lucide-react';
import { FileData } from '../types';

interface UploaderProps {
  onFileSelect: (file: FileData | null) => void;
  isLoading: boolean;
}

export const Uploader: React.FC<UploaderProps> = ({ onFileSelect, isLoading }) => {
  const handleFileChange = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file) {
        onFileSelect(null);
        return;
      }

      // Validate file type
      if (!file.type.startsWith('audio/')) {
        alert('Please select a valid audio file');
        onFileSelect(null);
        return;
      }

      // Convert to base64
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = (reader.result as string).split(',')[1];
        const fileData: FileData = {
          name: file.name,
          size: file.size,
          type: file.type,
          base64,
          previewUrl: URL.createObjectURL(file)
        };
        onFileSelect(fileData);
      };
      reader.readAsDataURL(file);
    },
    [onFileSelect]
  );

  return (
    <div className="relative">
      <input
        type="file"
        accept="audio/*"
        onChange={handleFileChange}
        disabled={isLoading}
        className="hidden"
        id="audio-upload"
      />
      <label
        htmlFor="audio-upload"
        className={`
          group relative flex flex-col items-center justify-center
          w-full h-96 px-12 py-16
          bg-black/40 border-4 border-dashed border-white/10
          hover:border-orange-500/50 hover:bg-black/60
          rounded-[3rem] cursor-pointer transition-all
          ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.02]'}
        `}
      >
        <div className="flex flex-col items-center gap-8">
          <div className="relative">
            <Upload className="w-24 h-24 text-orange-500 group-hover:text-orange-400 transition-colors" />
            <div className="absolute inset-0 w-24 h-24 bg-orange-500/20 blur-3xl rounded-full group-hover:bg-orange-400/30 transition-all" />
          </div>
          
          <div className="text-center space-y-4">
            <p className="text-2xl font-black text-white uppercase tracking-wider mono">
              Drop Audio Signal
            </p>
            <p className="text-sm text-slate-500 mono">
              Supported formats: WAV, MP3, M4A, FLAC, OGG
            </p>
          </div>

          <div className="flex items-center gap-4 px-8 py-4 bg-orange-500/10 border border-orange-500/30 rounded-2xl">
            <FileAudio className="w-5 h-5 text-orange-500" />
            <span className="text-xs font-black text-orange-500 uppercase tracking-wider mono">
              Select File
            </span>
          </div>
        </div>
      </label>
    </div>
  );
};
