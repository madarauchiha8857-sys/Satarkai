
export enum AppView {
  HOME = 'home',
  CHAT = 'chat',
  MAPS = 'maps',
  RESOURCES = 'resources',
  RIGHTS = 'rights',
  SUBSCRIPTION = 'subscription',
  MONEY_BACK = 'money_back',
  COMPLAINT = 'complaint',
  COMPLAINT_HISTORY = 'history',
  LOGIN = 'login',
  PROFILE = 'profile',
  VOICE_CHAT = 'voice_chat'
}

export interface User {
  phone: string;
  name: string;
  password?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export interface GroundingSource {
  title?: string;
  uri?: string;
}

export interface ActiveSubscription {
  planId: string;
  expiryDate: number;
  utr: string;
}

export interface Complaint {
  id: string;
  type: string;
  dateTime: string;
  location: string;
  description: string;
  victimName?: string;
  contact: string;
  timestamp: number;
  screenshots: string[];
  isCompleted?: boolean;
}
