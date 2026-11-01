export interface StudentAccount {
  studentId: string; // e.g. "MBA2026001" (unique, case-insensitive)
  name: string; // Full Name, e.g. "Alex Mercer"
  email: string; // University Email, e.g. "alex.mercer@stratex.edu"
  roleTitle: string; // e.g. "MBA Candidate (Class of 2027)"
  passwordHash: string; // PBKDF2 hash (hex)
  passwordSalt: string; // 16-byte salt (hex)
  securityQuestion: string;
  securityAnswerHash: string;
  securityAnswerSalt: string;
  accountStatus: 'active' | 'suspended';
  createdAt: string;
  lastLoginAt?: string;
}

export interface AuthSession {
  token: string;
  studentId: string;
  createdAt: string;
  expiresAt: string;
}

export interface AuthState {
  currentUser: StudentAccount | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}
