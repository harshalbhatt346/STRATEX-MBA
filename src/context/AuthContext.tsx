import React, { createContext, useContext, useState, useEffect } from 'react';
import { StudentAccount } from '../types';
import { authService } from '../services/authService';

interface AuthContextType {
  currentUser: StudentAccount | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (studentId: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  register: (params: {
    studentId: string;
    name: string;
    email: string;
    password: string;
    securityQuestion: string;
    securityAnswer: string;
  }) => Promise<{ success: boolean; error?: string; student?: StudentAccount }>;
  getRecoveryDetails: (studentId: string) => Promise<{
    success: boolean;
    error?: string;
    securityQuestion?: string;
    maskedEmail?: string;
  }>;
  resetPassword: (
    studentId: string,
    securityAnswer: string,
    newPassword: string
  ) => Promise<{ success: boolean; error?: string }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<StudentAccount | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const checkSession = async () => {
      try {
        const student = await authService.validateSession();
        if (isMounted) {
          setCurrentUser(student);
        }
      } catch (err) {
        console.error('Session validation error:', err);
        if (isMounted) {
          setCurrentUser(null);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    checkSession();

    return () => {
      isMounted = false;
    };
  }, []);

  const login = async (studentId: string, password: string) => {
    setIsLoading(true);
    try {
      const result = await authService.login(studentId, password);
      if (result.success && result.student) {
        setCurrentUser(result.student);
        return { success: true };
      }
      return { success: false, error: result.error || 'Authentication failed.' };
    } catch {
      return { success: false, error: 'A network or system error occurred. Please try again.' };
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    authService.logout();
    setCurrentUser(null);
  };

  const register = async (params: {
    studentId: string;
    name: string;
    email: string;
    password: string;
    securityQuestion: string;
    securityAnswer: string;
  }) => {
    return await authService.register(params);
  };

  const getRecoveryDetails = async (studentId: string) => {
    return await authService.getRecoveryDetails(studentId);
  };

  const resetPassword = async (studentId: string, securityAnswer: string, newPassword: string) => {
    return await authService.resetPassword(studentId, securityAnswer, newPassword);
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        isAuthenticated: !!currentUser,
        isLoading,
        login,
        logout,
        register,
        getRecoveryDetails,
        resetPassword
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
