import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserPlus, AlertCircle } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { UserRole } from '../../types';

export const SignupForm: React.FC = () => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [cabinNumber, setCabinNumber] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password || !confirmPassword) {
      setError('Please fill in all required fields');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    try {
      setError('');
      setLoading(true);
      
      // Attempt signup (signup() is a Promise<void, so no result.error check)
      await signup(email, password, UserRole.VOYAGER, displayName, cabinNumber);
      
      navigate('/dashboard');
    } catch (err: any) {
      console.error('Signup error:', err);
      
      // Enhanced error handling with specific messages
      const errorMessage = (() => {
        switch (err?.code) {
          case 'auth/email-already-in-use':
            return 'This email is already registered. Please use a different email or sign in.';
          case 'auth/invalid-email':
            return 'Invalid email address format.';
          case 'auth/operation-not-allowed':
            return 'Email/password accounts are not enabled. Please contact support.';
          case 'auth/weak-password':
            return 'Password is too weak. Please use a stronger password.';
          case 'permission-denied':
            return 'Unable to create account due to permission settings. Please try again later.';
          default:
            return 'Failed to create an account. Please try again later.';
        }
      })();
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md w-full mx-auto p-6 bg-white rounded-xl shadow-card">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-primary-700">Create Account</h2>
        <p className="text-neutral-600 mt-2">Join us for an exceptional voyage</p>
      </div>

      {error && (
        <div className="mb-4 bg-error-50 text-error-800 p-3 rounded-lg flex items-start">
          <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="displayName" className="form-label">Full Name</label>
          <input
            id="displayName"
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            className="form-input"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="email" className="form-label">Email Address <span className="text-error-600">*</span></label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
            placeholder="your.email@example.com"
            required
          />
        </div>
        
        <div>
          <label htmlFor="password" className="form-label">Password <span className="text-error-600">*</span></label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
            placeholder="••••••••"
            required
          />
          <p className="text-xs text-neutral-500 mt-1">Password must be at least 6 characters</p>
        </div>

        <div>
          <label htmlFor="confirmPassword" className="form-label">Confirm Password <span className="text-error-600">*</span></label>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="form-input"
            placeholder="••••••••"
            required
          />
        </div>

        <div>
          <label htmlFor="cabinNumber" className="form-label">Cabin Number</label>
          <input
            id="cabinNumber"
            type="text"
            value={cabinNumber}
            onChange={(e) => setCabinNumber(e.target.value)}
            className="form-input"
            placeholder="A123"
          />
        </div>

        <div>
          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full flex items-center justify-center"
          >
            {loading ? (
              <span className="inline-block h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
            ) : (
              <UserPlus className="h-5 w-5 mr-2" />
            )}
            Create Account
          </button>
        </div>
      </form>

      <div className="mt-6 text-center">
        <p className="text-neutral-600">
          Already have an account?{' '}
          <Link to="/login" className="text-primary-600 hover:text-primary-800 font-medium">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};