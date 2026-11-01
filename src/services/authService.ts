/**
 * Authentication and Student Account Database Service for STRATEX MBA.
 * Manages persistent student accounts, sessions, password hashing,
 * account provisioning, and identity-verified password recovery.
 */

import { StudentAccount, AuthSession } from '../types';
import { generateSalt, generateSessionToken, hashPassword, verifyHash } from './authCrypto';

const ACCOUNTS_STORAGE_KEY = 'stratex_mba_accounts_v1';
const SESSION_STORAGE_KEY = 'stratex_mba_session_v1';
const SESSION_EXPIRY_MS = 24 * 60 * 60 * 1000; // 24 hours

// Pre-seeded authorized MBA candidate accounts
const SEED_STUDENTS = [
  {
    studentId: 'MBA2026001',
    name: 'Alex Mercer',
    email: 'alex.mercer@stratex.edu',
    roleTitle: 'MBA Candidate (Class of 2027)',
    initialPassword: 'Password@123',
    securityQuestion: 'What was the name of your first elementary school?',
    securityAnswer: 'Stratex Academy'
  },
  {
    studentId: 'MBA2026002',
    name: 'Priya Sharma',
    email: 'priya.sharma@stratex.edu',
    roleTitle: 'MBA Candidate (Class of 2027)',
    initialPassword: 'Password@123',
    securityQuestion: "What is your mother's maiden name?",
    securityAnswer: 'Kapoor'
  },
  {
    studentId: 'MBA2026003',
    name: 'Rohan Mehta',
    email: 'rohan.mehta@stratex.edu',
    roleTitle: 'MBA Candidate (Class of 2027)',
    initialPassword: 'Password@123',
    securityQuestion: 'What city were you born in?',
    securityAnswer: 'Mumbai'
  }
];

class AuthService {
  private initialized = false;

  /**
   * Initializes the student account database if not already populated.
   * Migrates legacy progress for Alex Mercer (MBA2026001) if available.
   */
  async init(): Promise<void> {
    if (this.initialized) return;

    try {
      const rawAccounts = localStorage.getItem(ACCOUNTS_STORAGE_KEY);
      if (!rawAccounts) {
        const seededAccounts: StudentAccount[] = [];

        for (const seed of SEED_STUDENTS) {
          const passwordSalt = generateSalt(16);
          const passwordHash = await hashPassword(seed.initialPassword, passwordSalt);

          const securityAnswerSalt = generateSalt(16);
          const securityAnswerHash = await hashPassword(
            seed.securityAnswer.trim().toLowerCase(),
            securityAnswerSalt
          );

          seededAccounts.push({
            studentId: seed.studentId,
            name: seed.name,
            email: seed.email,
            roleTitle: seed.roleTitle,
            passwordHash,
            passwordSalt,
            securityQuestion: seed.securityQuestion,
            securityAnswerHash,
            securityAnswerSalt,
            accountStatus: 'active',
            createdAt: new Date().toISOString()
          });
        }

        localStorage.setItem(ACCOUNTS_STORAGE_KEY, JSON.stringify(seededAccounts));

        // Backward compatibility: migrate existing unauthenticated profile to MBA2026001
        const legacyProfile = localStorage.getItem('apex_mba_student_profile_v2');
        if (legacyProfile && !localStorage.getItem('stratex_profile_MBA2026001')) {
          localStorage.setItem('stratex_profile_MBA2026001', legacyProfile);
        }
      }
    } catch (err) {
      console.error('Error initializing student account database:', err);
    } finally {
      this.initialized = true;
    }
  }

  /**
   * Retrieves all accounts from persistent storage.
   */
  private getAccounts(): StudentAccount[] {
    try {
      const raw = localStorage.getItem(ACCOUNTS_STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  /**
   * Saves accounts array to persistent storage.
   */
  private saveAccounts(accounts: StudentAccount[]): void {
    localStorage.setItem(ACCOUNTS_STORAGE_KEY, JSON.stringify(accounts));
  }

  /**
   * Finds an account by case-insensitive Student ID.
   */
  findAccountById(studentId: string): StudentAccount | undefined {
    const normalized = studentId.trim().toUpperCase();
    return this.getAccounts().find(a => a.studentId.toUpperCase() === normalized);
  }

  /**
   * Authenticates student credentials.
   * Enforces security requirement: does not reveal whether ID or password was wrong.
   */
  async login(
    studentIdInput: string,
    passwordInput: string
  ): Promise<{ success: boolean; error?: string; session?: AuthSession; student?: StudentAccount }> {
    await this.init();

    const normalizedId = studentIdInput.trim().toUpperCase();
    if (!normalizedId || !passwordInput) {
      return {
        success: false,
        error: 'Please enter both your Student ID and Password.'
      };
    }

    const account = this.findAccountById(normalizedId);
    if (!account || account.accountStatus !== 'active') {
      return {
        success: false,
        error: 'Invalid Student ID or Password. Please try again.'
      };
    }

    // Verify password with PBKDF2 and student's stored salt
    const computedHash = await hashPassword(passwordInput, account.passwordSalt);
    const isMatch = verifyHash(computedHash, account.passwordHash);

    if (!isMatch) {
      return {
        success: false,
        error: 'Invalid Student ID or Password. Please try again.'
      };
    }

    // Generate secure session
    const sessionToken = generateSessionToken();
    const now = new Date();
    const session: AuthSession = {
      token: sessionToken,
      studentId: account.studentId,
      createdAt: now.toISOString(),
      expiresAt: new Date(now.getTime() + SESSION_EXPIRY_MS).toISOString()
    };

    localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(session));

    // Update lastLoginAt
    const accounts = this.getAccounts().map(a =>
      a.studentId === account.studentId
        ? { ...a, lastLoginAt: now.toISOString() }
        : a
    );
    this.saveAccounts(accounts);

    return {
      success: true,
      session,
      student: { ...account, lastLoginAt: now.toISOString() }
    };
  }

  /**
   * Validates the active session and returns authenticated student.
   */
  async validateSession(): Promise<StudentAccount | null> {
    await this.init();

    try {
      const rawSession = localStorage.getItem(SESSION_STORAGE_KEY);
      if (!rawSession) return null;

      const session: AuthSession = JSON.parse(rawSession);
      const expiresAt = new Date(session.expiresAt).getTime();

      // Check if session has expired
      if (Date.now() >= expiresAt) {
        this.logout();
        return null;
      }

      const account = this.findAccountById(session.studentId);
      if (!account || account.accountStatus !== 'active') {
        this.logout();
        return null;
      }

      return account;
    } catch {
      this.logout();
      return null;
    }
  }

  /**
   * Terminates active session.
   */
  logout(): void {
    localStorage.removeItem(SESSION_STORAGE_KEY);
  }

  /**
   * Provision a new student account with validation against duplicate IDs.
   */
  async register(params: {
    studentId: string;
    name: string;
    email: string;
    password: string;
    securityQuestion: string;
    securityAnswer: string;
  }): Promise<{ success: boolean; error?: string; student?: StudentAccount }> {
    await this.init();

    const normalizedId = params.studentId.trim().toUpperCase();
    const trimmedName = params.name.trim();
    const trimmedEmail = params.email.trim().toLowerCase();

    // Validation
    if (!normalizedId || normalizedId.length < 4) {
      return { success: false, error: 'Student ID must be at least 4 alphanumeric characters (e.g. MBA2026004).' };
    }
    if (!/^[A-Z0-9_-]+$/i.test(normalizedId)) {
      return { success: false, error: 'Student ID may only contain letters, numbers, and dashes.' };
    }
    if (!trimmedName || trimmedName.length < 2) {
      return { success: false, error: 'Please enter your full student name.' };
    }
    if (!trimmedEmail || !trimmedEmail.includes('@') || !trimmedEmail.includes('.')) {
      return { success: false, error: 'Please provide a valid university email address.' };
    }
    if (!params.password || params.password.length < 6) {
      return { success: false, error: 'Password must be at least 6 characters in length.' };
    }
    if (!params.securityAnswer.trim()) {
      return { success: false, error: 'Please provide an answer to your account recovery security question.' };
    }

    // Duplicate check
    const accounts = this.getAccounts();
    if (accounts.some(a => a.studentId.toUpperCase() === normalizedId)) {
      return {
        success: false,
        error: `Student ID "${normalizedId}" is already registered. Please sign in or use your unique ID.`
      };
    }
    if (accounts.some(a => a.email.toLowerCase() === trimmedEmail)) {
      return {
        success: false,
        error: `An account with email "${trimmedEmail}" is already registered.`
      };
    }

    // Hash password & security answer
    const passwordSalt = generateSalt(16);
    const passwordHash = await hashPassword(params.password, passwordSalt);

    const securityAnswerSalt = generateSalt(16);
    const securityAnswerHash = await hashPassword(
      params.securityAnswer.trim().toLowerCase(),
      securityAnswerSalt
    );

    const newStudent: StudentAccount = {
      studentId: normalizedId,
      name: trimmedName,
      email: trimmedEmail,
      roleTitle: 'MBA Candidate (Class of 2027)',
      passwordHash,
      passwordSalt,
      securityQuestion: params.securityQuestion,
      securityAnswerHash,
      securityAnswerSalt,
      accountStatus: 'active',
      createdAt: new Date().toISOString()
    };

    accounts.push(newStudent);
    this.saveAccounts(accounts);

    return { success: true, student: newStudent };
  }

  /**
   * Initiates password recovery for an existing student.
   * Returns security question and masked email for identity confirmation.
   */
  async getRecoveryDetails(
    studentIdInput: string
  ): Promise<{ success: boolean; error?: string; securityQuestion?: string; maskedEmail?: string }> {
    await this.init();

    const normalizedId = studentIdInput.trim().toUpperCase();
    const account = this.findAccountById(normalizedId);

    if (!account) {
      return {
        success: false,
        error: 'Student ID not recognized. Please check your credentials or contact MBA administration.'
      };
    }

    // Mask email for security (e.g. a***r@stratex.edu)
    const emailParts = account.email.split('@');
    let maskedEmail = account.email;
    if (emailParts.length === 2) {
      const userPart = emailParts[0];
      const domainPart = emailParts[1];
      if (userPart.length > 2) {
        maskedEmail = `${userPart[0]}***${userPart[userPart.length - 1]}@${domainPart}`;
      } else {
        maskedEmail = `${userPart[0]}***@${domainPart}`;
      }
    }

    return {
      success: true,
      securityQuestion: account.securityQuestion,
      maskedEmail
    };
  }

  /**
   * Resets password after verifying identity against stored security answer.
   */
  async resetPassword(
    studentIdInput: string,
    securityAnswerInput: string,
    newPasswordInput: string
  ): Promise<{ success: boolean; error?: string }> {
    await this.init();

    const normalizedId = studentIdInput.trim().toUpperCase();
    const account = this.findAccountById(normalizedId);

    if (!account) {
      return { success: false, error: 'Student ID not found.' };
    }

    if (!newPasswordInput || newPasswordInput.length < 6) {
      return { success: false, error: 'New password must be at least 6 characters.' };
    }

    // Verify security answer
    const computedAnswerHash = await hashPassword(
      securityAnswerInput.trim().toLowerCase(),
      account.securityAnswerSalt
    );
    const isAnswerCorrect = verifyHash(computedAnswerHash, account.securityAnswerHash);

    if (!isAnswerCorrect) {
      return {
        success: false,
        error: 'Verification failed. The security answer does not match our records.'
      };
    }

    // Generate new salt and hash for new password
    const newSalt = generateSalt(16);
    const newHash = await hashPassword(newPasswordInput, newSalt);

    const accounts = this.getAccounts().map(a =>
      a.studentId === account.studentId
        ? { ...a, passwordHash: newHash, passwordSalt: newSalt }
        : a
    );
    this.saveAccounts(accounts);

    // Invalidate current session
    this.logout();

    return { success: true };
  }
}

export const authService = new AuthService();
