import React from 'react';
import { Link } from 'react-router-dom';
import { MainLayout } from '../components/layout/MainLayout';
import { Anchor } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="min-h-[80vh] flex items-center justify-center bg-neutral-50 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Anchor className="mx-auto h-24 w-24 text-primary-600 mb-6" />
          <h1 className="text-6xl font-bold text-primary-800 mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-primary-700 mb-6">Page Not Found</h2>
          <p className="text-lg text-neutral-600 mb-8 max-w-md mx-auto">
            Looks like you've sailed into uncharted waters! The page you're looking for doesn't exist.
          </p>
          <Link to="/" className="btn-primary px-8 py-3">
            Return to Shore
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};