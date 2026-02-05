import { GoogleGenerativeAI } from '@google/genai';
import { AnalysisReport, DetectionResult } from '../types';

// Get API key from environment variable
const API_KEY = import.meta.env.VITE_API_KEY || '';

if (!API_KEY) {
  console.warn('VITE_API_KEY not found. Please add it to your .env file.');
}

const genAI = new GoogleGenerativeAI(API_KEY);

export async function analyzeAudio(
  base64Audio: string,
  mimeType: string
): Promise<AnalysisReport> {
  if (!API_KEY) {
    throw new Error('API key not configured. Please set VITE_API_KEY in your environment.');
  }

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-exp' });

    const prompt = `You are an advanced audio forensics AI trained to detect synthetic/AI-generated speech vs. authentic human speech.

Analyze this audio file and provide a detailed forensic report in the following JSON format:

{
  "decision": "BONAFIDE" or "SPOOF",
  "explanation": "A detailed technical explanation of your decision (2-3 sentences)",
  "summary": "A brief one-sentence summary of the verdict",
  "scores": {
    "authenticity_score": 0.0-1.0,
    "confidence": 0.0-1.0
  },
  "provenance": {
    "human_probability": 0.0-1.0,
    "synthetic_probability": 0.0-1.0
  },
  "technicalDetails": {
    "spectralAnomalies": ["array of detected spectral anomalies or artifacts"],
    "temporalInconsistencies": ["array of temporal pattern issues"],
    "syntheticArtifacts": ["array of AI/synthetic speech indicators"]
  }
}

Analyze the audio for:
- Spectral characteristics and anomalies
- Temporal consistency in speech patterns
- Pitch and formant naturalness
- Breathing patterns and micro-pauses
- Background noise characteristics
- Artifacts typical of AI speech synthesis (GAN artifacts, vocoder artifacts, etc.)

Be thorough and technical in your analysis.`;

    const result = await model.generateContent([
      {
        inlineData: {
          mimeType: mimeType,
          data: base64Audio
        }
      },
      { text: prompt }
    ]);

    const response = await result.response;
    const text = response.text();

    // Extract JSON from the response
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('Failed to parse AI response');
    }

    const analysisData = JSON.parse(jsonMatch[0]);

    // Validate and return the report
    return {
      decision: analysisData.decision as DetectionResult,
      explanation: analysisData.explanation,
      summary: analysisData.summary,
      scores: {
        authenticity_score: analysisData.scores.authenticity_score,
        confidence: analysisData.scores.confidence
      },
      provenance: {
        human_probability: analysisData.provenance.human_probability,
        synthetic_probability: analysisData.provenance.synthetic_probability
      },
      technicalDetails: {
        spectralAnomalies: analysisData.technicalDetails.spectralAnomalies || [],
        temporalInconsistencies: analysisData.technicalDetails.temporalInconsistencies || [],
        syntheticArtifacts: analysisData.technicalDetails.syntheticArtifacts || []
      }
    };
  } catch (error) {
    console.error('Gemini API Error:', error);
    throw new Error(`Audio analysis failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}
