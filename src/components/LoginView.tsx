import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  Compass,
  Lock,
  User,
  Eye,
  EyeOff,
  AlertCircle,
  CheckCircle,
  KeyRound,
  ShieldCheck,
  UserPlus,
  Loader2,
  HelpCircle,
  X
} from 'lucide-react';

export const LoginView: React.FC = () => {
  const { login, register, getRecoveryDetails, resetPassword } = useAuth();

  // Form state
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Modals state
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  // Forgot password flow state
  const [recoveryStep, setRecoveryStep] = useState<1 | 2>(1);
  const [recoveryStudentId, setRecoveryStudentId] = useState('');
  const [recoveryQuestion, setRecoveryQuestion] = useState('');
  const [maskedEmail, setMaskedEmail] = useState('');
  const [recoveryAnswer, setRecoveryAnswer] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [recoveryError, setRecoveryError] = useState('');
  const [recoverySuccess, setRecoverySuccess] = useState('');
  const [isRecovering, setIsRecovering] = useState(false);

  // Register / Provision flow state
  const [regStudentId, setRegStudentId] = useState('');
  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regConfirmPassword, setRegConfirmPassword] = useState('');
  const [regQuestion, setRegQuestion] = useState('What was the name of your first elementary school?');
  const [regAnswer, setRegAnswer] = useState('');
  const [regError, setRegError] = useState('');
  const [regSuccess, setRegSuccess] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  // Handle standard login submit
  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!studentId.trim() || !password) {
      setErrorMessage('Please enter both your Student ID and Password.');
      return;
    }

    setIsSubmitting(true);
    const result = await login(studentId.trim(), password);
    setIsSubmitting(false);

    if (!result.success) {
      setErrorMessage(result.error || 'Invalid Student ID or Password. Please try again.');
    }
  };

  // Handle recovery step 1: verify student ID
  const handleVerifyStudentId = async (e: React.FormEvent) => {
    e.preventDefault();
    setRecoveryError('');
    if (!recoveryStudentId.trim()) {
      setRecoveryError('Please enter your Student ID.');
      return;
    }

    setIsRecovering(true);
    const result = await getRecoveryDetails(recoveryStudentId.trim());
    setIsRecovering(false);

    if (result.success && result.securityQuestion) {
      setRecoveryQuestion(result.securityQuestion);
      setMaskedEmail(result.maskedEmail || '');
      setRecoveryStep(2);
    } else {
      setRecoveryError(result.error || 'Student ID not recognized.');
    }
  };

  // Handle recovery step 2: answer and set new password
  const handleResetPasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setRecoveryError('');

    if (!recoveryAnswer.trim()) {
      setRecoveryError('Please provide your security answer.');
      return;
    }
    if (newPassword.length < 6) {
      setRecoveryError('Password must be at least 6 characters in length.');
      return;
    }
    if (newPassword !== confirmNewPassword) {
      setRecoveryError('Passwords do not match.');
      return;
    }

    setIsRecovering(true);
    const result = await resetPassword(recoveryStudentId.trim(), recoveryAnswer.trim(), newPassword);
    setIsRecovering(false);

    if (result.success) {
      setRecoverySuccess('Password reset successfully! You may now sign in.');
      setTimeout(() => {
        setShowForgotModal(false);
        setRecoveryStep(1);
        setRecoveryStudentId('');
        setRecoveryAnswer('');
        setNewPassword('');
        setConfirmNewPassword('');
        setRecoverySuccess('');
        setPassword('');
      }, 1500);
    } else {
      setRecoveryError(result.error || 'Password reset failed.');
    }
  };

  // Handle account registration / provisioning
  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setRegError('');

    if (!regStudentId.trim() || !regName.trim() || !regEmail.trim() || !regPassword) {
      setRegError('All fields are required.');
      return;
    }
    if (regPassword.length < 6) {
      setRegError('Password must be at least 6 characters in length.');
      return;
    }
    if (regPassword !== regConfirmPassword) {
      setRegError('Passwords do not match.');
      return;
    }
    if (!regAnswer.trim()) {
      setRegError('Please provide a security answer for account recovery.');
      return;
    }

    setIsRegistering(true);
    const result = await register({
      studentId: regStudentId.trim(),
      name: regName.trim(),
      email: regEmail.trim(),
      password: regPassword,
      securityQuestion: regQuestion,
      securityAnswer: regAnswer.trim()
    });
    setIsRegistering(false);

    if (result.success && result.student) {
      setRegSuccess(`Account provisioned successfully for ${result.student.name}!`);
      setStudentId(result.student.studentId);
      setTimeout(() => {
        setShowRegisterModal(false);
        setRegSuccess('');
        setRegStudentId('');
        setRegName('');
        setRegEmail('');
        setRegPassword('');
        setRegConfirmPassword('');
        setRegAnswer('');
      }, 1500);
    } else {
      setRegError(result.error || 'Failed to provision account.');
    }
  };

  // Quick fill helper for testers/evaluators
  const handleQuickFill = (id: string, pass: string) => {
    setStudentId(id);
    setPassword(pass);
    setErrorMessage('');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-indigo-500 selection:text-white relative overflow-hidden">
      {/* Background ambient decorative glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="flex-1 flex items-center justify-center px-4 py-12 relative z-10">
        <div className="w-full max-w-md space-y-6">
          {/* Top Section: Logo & Branding */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 shadow-xl shadow-indigo-600/25">
              <Compass className="w-8 h-8 text-white" />
            </div>
            <div>
              <div className="text-2xl font-black text-white tracking-tight flex items-center justify-center gap-2">
                <span>STRATEX</span>
                <span className="text-xs uppercase font-bold tracking-widest px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                  MBA LAB
                </span>
              </div>
              <p className="text-xs text-slate-400 tracking-wider font-semibold uppercase mt-1">
                Experiential Management System
              </p>
            </div>
          </div>

          {/* Main Login Card */}
          <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 shadow-2xl space-y-6">
            <div className="text-center space-y-1">
              <h1 className="text-xl font-bold text-white tracking-tight">Welcome Back</h1>
              <p className="text-xs text-slate-400">
                Sign in to continue your management learning journey.
              </p>
            </div>

            {/* Error Message Alert */}
            {errorMessage && (
              <div className="bg-rose-950/40 border border-rose-800/60 rounded-xl p-3.5 flex items-start gap-3 text-xs text-rose-300 animate-fadeIn">
                <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <div className="leading-relaxed">{errorMessage}</div>
              </div>
            )}

            {/* Login Form */}
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              {/* Field 1: Student ID */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Student ID
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    value={studentId}
                    onChange={e => setStudentId(e.target.value)}
                    placeholder="Enter your Student ID."
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-3.5 py-2.5 text-xs text-white placeholder-slate-500 font-medium focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all uppercase"
                    autoComplete="username"
                  />
                </div>
              </div>

              {/* Field 2: Password */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-semibold text-slate-300">
                    Password
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      setShowForgotModal(true);
                      setRecoveryStep(1);
                      setRecoveryStudentId(studentId);
                      setRecoveryError('');
                    }}
                    className="text-[11px] text-indigo-400 hover:text-indigo-300 font-medium transition-colors cursor-pointer"
                  >
                    Forgot Password?
                  </button>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Enter your password."
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-10 py-2.5 text-xs text-white placeholder-slate-500 font-medium focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-500 hover:text-slate-300 transition-colors cursor-pointer"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Primary Sign In Button */}
              <button
                type="submit"
                disabled={isSubmitting || !studentId.trim() || !password}
                className="w-full py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 disabled:text-slate-500 disabled:cursor-not-allowed text-white text-xs font-bold shadow-lg shadow-indigo-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Signing In...</span>
                  </>
                ) : (
                  <span>Sign In</span>
                )}
              </button>
            </form>

            {/* Account Provisioning Option */}
            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span>New MBA cohort member?</span>
              <button
                type="button"
                onClick={() => {
                  setShowRegisterModal(true);
                  setRegError('');
                }}
                className="text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1 transition-colors cursor-pointer"
              >
                <UserPlus className="w-3.5 h-3.5" />
                <span>Activate Account</span>
              </button>
            </div>
          </div>

          {/* Quick Demo Credentials Assistant (for evaluators and test cohorts) */}
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4 text-xs space-y-2">
            <div className="flex items-center justify-between text-slate-400 font-semibold">
              <span className="flex items-center gap-1.5 text-slate-300 text-[11px] uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
                Authorized Demo Cohort Credentials
              </span>
              <span className="text-[10px] text-slate-500">Click to fill</span>
            </div>
            <div className="grid grid-cols-3 gap-2 pt-1">
              <button
                type="button"
                onClick={() => handleQuickFill('MBA2026001', 'Password@123')}
                className="p-2 rounded-xl bg-slate-950/80 hover:bg-slate-850 border border-slate-800/80 text-left transition-all group"
              >
                <div className="font-bold text-slate-200 group-hover:text-indigo-400 text-[11px]">Alex Mercer</div>
                <div className="text-[10px] text-slate-400 font-mono">MBA2026001</div>
              </button>
              <button
                type="button"
                onClick={() => handleQuickFill('MBA2026002', 'Password@123')}
                className="p-2 rounded-xl bg-slate-950/80 hover:bg-slate-850 border border-slate-800/80 text-left transition-all group"
              >
                <div className="font-bold text-slate-200 group-hover:text-indigo-400 text-[11px]">Priya Sharma</div>
                <div className="text-[10px] text-slate-400 font-mono">MBA2026002</div>
              </button>
              <button
                type="button"
                onClick={() => handleQuickFill('MBA2026003', 'Password@123')}
                className="p-2 rounded-xl bg-slate-950/80 hover:bg-slate-850 border border-slate-800/80 text-left transition-all group"
              >
                <div className="font-bold text-slate-200 group-hover:text-indigo-400 text-[11px]">Rohan Mehta</div>
                <div className="text-[10px] text-slate-400 font-mono">MBA2026003</div>
              </button>
            </div>
            <div className="text-[10px] text-slate-500 text-center pt-1 font-mono">
              Default password: <span className="text-slate-400">Password@123</span>
            </div>
          </div>
        </div>
      </div>

      {/* Small Footer (Prompt Requirement: "STRATEX MBA LAB | Experiential Learning Platform") */}
      <footer className="py-6 text-center text-xs text-slate-500 relative z-10 border-t border-slate-900/60">
        STRATEX MBA LAB | Experiential Learning Platform
      </footer>

      {/* ================= FORGOT PASSWORD MODAL ================= */}
      {showForgotModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-7 max-w-md w-full shadow-2xl relative space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center">
                  <KeyRound className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Student Account Recovery</h3>
                  <p className="text-[11px] text-slate-400">Identity-verified password reset</p>
                </div>
              </div>
              <button
                onClick={() => setShowForgotModal(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {recoveryError && (
              <div className="p-3 bg-rose-950/40 border border-rose-800/60 rounded-xl text-xs text-rose-300 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>{recoveryError}</span>
              </div>
            )}

            {recoverySuccess && (
              <div className="p-3 bg-emerald-950/40 border border-emerald-800/60 rounded-xl text-xs text-emerald-300 flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{recoverySuccess}</span>
              </div>
            )}

            {recoveryStep === 1 ? (
              <form onSubmit={handleVerifyStudentId} className="space-y-4">
                <p className="text-xs text-slate-300 leading-relaxed">
                  Enter your registered Student ID to retrieve your identity verification question.
                </p>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Student ID
                  </label>
                  <input
                    type="text"
                    value={recoveryStudentId}
                    onChange={e => setRecoveryStudentId(e.target.value)}
                    placeholder="e.g. MBA2026001"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 font-medium uppercase focus:outline-none focus:border-indigo-500"
                    autoFocus
                  />
                </div>
                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowForgotModal(false)}
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isRecovering || !recoveryStudentId.trim()}
                    className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold disabled:bg-slate-800 disabled:text-slate-500 transition-all flex items-center gap-1.5"
                  >
                    {isRecovering && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                    <span>Verify Identity</span>
                  </button>
                </div>
              </form>
            ) : (
              <form onSubmit={handleResetPasswordSubmit} className="space-y-4">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">
                    Student: <span className="text-indigo-400 font-mono">{recoveryStudentId.toUpperCase()}</span>
                    {maskedEmail && <span className="ml-2 text-slate-400">({maskedEmail})</span>}
                  </div>
                  <div className="text-xs text-white font-medium flex items-center gap-1.5 pt-1">
                    <HelpCircle className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                    <span>{recoveryQuestion}</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Security Answer
                  </label>
                  <input
                    type="text"
                    value={recoveryAnswer}
                    onChange={e => setRecoveryAnswer(e.target.value)}
                    placeholder="Enter your answer"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    New Password
                  </label>
                  <div className="relative">
                    <input
                      type={showNewPassword ? 'text' : 'password'}
                      value={newPassword}
                      onChange={e => setNewPassword(e.target.value)}
                      placeholder="At least 6 characters"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-3.5 pr-10 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                    />
                    <button
                      type="button"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-500 hover:text-slate-300"
                    >
                      {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Confirm New Password
                  </label>
                  <input
                    type={showNewPassword ? 'text' : 'password'}
                    value={confirmNewPassword}
                    onChange={e => setConfirmNewPassword(e.target.value)}
                    placeholder="Re-enter new password"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div className="flex justify-between items-center pt-2">
                  <button
                    type="button"
                    onClick={() => setRecoveryStep(1)}
                    className="text-xs text-slate-400 hover:text-white"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={isRecovering || !recoveryAnswer || !newPassword}
                    className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold disabled:bg-slate-800 disabled:text-slate-500 transition-all flex items-center gap-1.5"
                  >
                    {isRecovering && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                    <span>Save New Password</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* ================= REGISTER / PROVISION ACCOUNT MODAL ================= */}
      {showRegisterModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-7 max-w-lg w-full shadow-2xl relative space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-purple-600/20 text-purple-400 flex items-center justify-center">
                  <UserPlus className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Activate Student Account</h3>
                  <p className="text-[11px] text-slate-400">Authorized STRATEX MBA Candidate Setup</p>
                </div>
              </div>
              <button
                onClick={() => setShowRegisterModal(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {regError && (
              <div className="p-3 bg-rose-950/40 border border-rose-800/60 rounded-xl text-xs text-rose-300 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>{regError}</span>
              </div>
            )}

            {regSuccess && (
              <div className="p-3 bg-emerald-950/40 border border-emerald-800/60 rounded-xl text-xs text-emerald-300 flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{regSuccess}</span>
              </div>
            )}

            <form onSubmit={handleRegisterSubmit} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Student ID *
                  </label>
                  <input
                    type="text"
                    value={regStudentId}
                    onChange={e => setRegStudentId(e.target.value)}
                    placeholder="e.g. MBA2026004"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white uppercase placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={regName}
                    onChange={e => setRegName(e.target.value)}
                    placeholder="e.g. Sarah Connor"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  University / Academic Email *
                </label>
                <input
                  type="email"
                  value={regEmail}
                  onChange={e => setRegEmail(e.target.value)}
                  placeholder="e.g. s.connor@stratex.edu"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Password *
                  </label>
                  <input
                    type="password"
                    value={regPassword}
                    onChange={e => setRegPassword(e.target.value)}
                    placeholder="At least 6 characters"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Confirm Password *
                  </label>
                  <input
                    type="password"
                    value={regConfirmPassword}
                    onChange={e => setRegConfirmPassword(e.target.value)}
                    placeholder="Re-enter password"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Account Recovery Security Question *
                </label>
                <select
                  value={regQuestion}
                  onChange={e => setRegQuestion(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-500"
                >
                  <option value="What was the name of your first elementary school?">
                    What was the name of your first elementary school?
                  </option>
                  <option value="What is your mother's maiden name?">
                    What is your mother's maiden name?
                  </option>
                  <option value="What city were you born in?">
                    What city were you born in?
                  </option>
                  <option value="What was the model of your first car?">
                    What was the model of your first car?
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Security Answer *
                </label>
                <input
                  type="text"
                  value={regAnswer}
                  onChange={e => setRegAnswer(e.target.value)}
                  placeholder="Answer for identity recovery"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setShowRegisterModal(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isRegistering}
                  className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold disabled:bg-slate-800 disabled:text-slate-500 transition-all flex items-center gap-1.5"
                >
                  {isRegistering && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                  <span>Activate Account</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
