export interface Patient {
  age: number;
  mainComplaint: string;
  painLevel?: number;
  symptoms: string[];
  duration: string;
  medicalHistory?: string[];
}

export interface ChatMessage {
  id: string;
  content: string;
  timestamp: number;
  sender: 'user' | 'avatar';
}

export interface TriageCase {
  id: string;
  patient: Patient;
  status: 'active' | 'completed' | 'referred';
  urgencyLevel: 'U4' | 'U5' | 'higher';
  chatHistory: ChatMessage[];
  createdAt: number;
  updatedAt: number;
}