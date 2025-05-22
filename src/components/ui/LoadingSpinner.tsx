import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: number;
  color?: string;
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 24, 
  color = 'text-primary-600',
  className = ''
}) => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Loader2 
        size={size} 
        className={`animate-spin ${color} ${className}`} 
      />
    </div>
  );
};