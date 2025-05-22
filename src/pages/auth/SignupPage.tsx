import React from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import { SignupForm } from '../../components/auth/SignupForm';
import { Ship } from 'lucide-react';

export const SignupPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="bg-neutral-50 min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Ship className="mx-auto h-14 w-14 text-primary-600" />
            <h1 className="mt-4 text-3xl font-bold text-primary-800">Join Our Voyage</h1>
          </div>
          <SignupForm />
        </div>
      </div>
    </MainLayout>
  );
};