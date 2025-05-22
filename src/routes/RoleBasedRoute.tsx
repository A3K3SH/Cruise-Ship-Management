import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { UserRole } from '../types';
import { LoadingSpinner } from '../components/ui/LoadingSpinner';

interface RoleBasedRouteProps {
  children: React.ReactNode;
  roles: UserRole[];
}

export const RoleBasedRoute: React.FC<RoleBasedRouteProps> = ({ children, roles }) => {
  const { userDetails, loading } = useAuth();

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <LoadingSpinner size={40} />
      </div>
    );
  }

  // If no user details or role doesn't match required roles, redirect to dashboard
  if (!userDetails || !roles.includes(userDetails.role)) {
    return <Navigate to="/dashboard" />;
  }

  return <>{children}</>;
};