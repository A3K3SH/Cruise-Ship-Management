import React from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import { useAuth } from '../../context/AuthContext';
import { UserRole } from '../../types';
import { VoyagerDashboard } from './VoyagerDashboard';
import { AdminDashboard } from './AdminDashboard';
import { ManagerDashboard } from './ManagerDashboard';
import { HeadCookDashboard } from './HeadCookDashboard';
import { SupervisorDashboard } from './SupervisorDashboard';
import { LoadingSpinner } from '../../components/ui/LoadingSpinner';

export const DashboardPage: React.FC = () => {
  const { userDetails, loading } = useAuth();
  if (loading) return <LoadingSpinner />;
  if (!userDetails) return <div>Please log in</div>;

  const renderDashboard = () => {
    if (!userDetails || !userDetails.role) return <div>Unknown role</div>;
    switch (userDetails.role) {
      case UserRole.VOYAGER:
        return <VoyagerDashboard />;
      case UserRole.ADMIN:
        return <AdminDashboard />;
      case UserRole.MANAGER:
        return <ManagerDashboard />;
      case UserRole.HEAD_COOK:
        return <HeadCookDashboard />;
      case UserRole.SUPERVISOR:
        return <SupervisorDashboard />;
      default:
        return <div>Unknown role</div>;
    }
  };

  return (
    <MainLayout>
      <div className="bg-neutral-50 min-h-screen py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-primary-800 mb-6">
            {userDetails?.role
              ? (userDetails.role === UserRole.VOYAGER
                  ? 'My Voyage Dashboard'
                  : `${userDetails.role.charAt(0).toUpperCase()}${userDetails.role.slice(1).replace('_', ' ')} Dashboard`)
              : 'Dashboard'}
          </h1>
          {renderDashboard()}
        </div>
      </div>
    </MainLayout>
  );
};