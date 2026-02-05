import React, { useState, useRef, useCallback } from 'react';
import { Mic, Square, Radio } from 'lucide-react';
import { FileData } from '../types';

interface AudioRecorderProps {
  onRecordingComplete: (file: FileData | null) => void;
  isLoading: boolean;
}

export const AudioRecorder: React.FC<AudioRecorderProps> = ({ onRecordingComplete, isLoading }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<number | null>(null);

  const startRecording = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = async () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
        const reader = new FileReader();
        
        reader.onload = () => {
          const base64 = (reader.result as string).split(',')[1];
          const fileData: FileData = {
            name: `recording-${Date.now()}.webm`,
            size: blob.size,
            type: 'audio/webm',
            base64,
            previewUrl: URL.createObjectURL(blob)
          };
          onRecordingComplete(fileData);
        };
        
        reader.readAsDataURL(blob);
        
        // Stop all tracks
        stream.getTracks().forEach(track => track.stop());
        setRecordingTime(0);
      };

      mediaRecorder.start();
      setIsRecording(true);

      // Start timer
      timerRef.current = window.setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);
    } catch (error) {
      console.error('Error accessing microphone:', error);
      alert('Could not access microphone. Please grant permission and try again.');
    }
  }, [onRecordingComplete]);

  const stopRecording = useCallback(() => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }
  }, [isRecording]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-96 px-12 py-16 bg-black/40 border-4 border-white/10 rounded-[3rem]">
      <div className="flex flex-col items-center gap-8">
        {!isRecording ? (
          <>
            <div className="relative">
              <Mic className="w-24 h-24 text-[#4aa3b8]" />
              <div className="absolute inset-0 w-24 h-24 bg-[#4aa3b8]/20 blur-3xl rounded-full" />
            </div>
            
            <div className="text-center space-y-4">
              <p className="text-2xl font-black text-white uppercase tracking-wider mono">
                Live Audio Capture
              </p>
              <p className="text-sm text-slate-500 mono">
                Record audio directly from your microphone
              </p>
            </div>

            <button
              onClick={startRecording}
              disabled={isLoading}
              className="flex items-center gap-4 px-12 py-6 bg-[#4aa3b8]/10 border-2 border-[#4aa3b8]/50 hover:border-[#4aa3b8] hover:bg-[#4aa3b8]/20 text-[#4aa3b8] rounded-2xl font-black transition-all hover:scale-105 mono uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Mic className="w-6 h-6" />
              <span className="text-lg">Start Recording</span>
            </button>
          </>
        ) : (
          <>
            <div className="relative">
              <Radio className="w-24 h-24 text-red-500 animate-pulse" />
              <div className="absolute inset-0 w-24 h-24 bg-red-500/30 blur-3xl rounded-full animate-pulse" />
            </div>
            
            <div className="text-center space-y-4">
              <p className="text-3xl font-black text-red-500 uppercase tracking-wider mono animate-pulse">
                RECORDING
              </p>
              <p className="text-5xl font-black text-white mono italic">
                {formatTime(recordingTime)}
              </p>
            </div>

            <button
              onClick={stopRecording}
              className="flex items-center gap-4 px-12 py-6 bg-red-500/10 border-2 border-red-500/50 hover:border-red-500 hover:bg-red-500/20 text-red-500 rounded-2xl font-black transition-all hover:scale-105 mono uppercase tracking-wider"
            >
              <Square className="w-6 h-6 fill-current" />
              <span className="text-lg">Stop Recording</span>
            </button>
          </>
        )}
      </div>
    </div>
  );
};
