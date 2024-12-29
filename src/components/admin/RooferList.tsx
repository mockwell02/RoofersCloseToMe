import React, { useEffect } from 'react';
import { useRooferList } from '../../hooks/useRooferList';
import { LoadingSpinner } from '../common/LoadingSpinner';
import { RooferListItem } from './RooferListItem';
import { AlertCircle, RefreshCw } from 'lucide-react';

interface RooferListProps {
  onEdit: (id: string) => void;
  refreshTrigger: number;
}

export function RooferList({ onEdit, refreshTrigger }: RooferListProps) {
  const { roofers, loading, error, refetch, isRetrying, retryCount } = useRooferList();

  useEffect(() => {
    refetch();
  }, [refreshTrigger, refetch]);

  if (loading) {
    return (
      <div className="flex justify-center py-8">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 text-red-700 p-4 rounded-md">
        <div className="flex items-center mb-2">
          <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
          <div>
            <p className="font-medium">Error loading roofers</p>
            <p className="text-sm">{error}</p>
          </div>
        </div>
        {isRetrying && (
          <div className="flex items-center text-sm mt-2 text-red-600">
            <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
            <span>Retrying... (Attempt {retryCount} of 3)</span>
          </div>
        )}
        {!isRetrying && (
          <button
            onClick={refetch}
            className="mt-2 text-sm text-red-700 hover:text-red-800 flex items-center"
          >
            <RefreshCw className="h-4 w-4 mr-1" />
            Try again
          </button>
        )}
      </div>
    );
  }

  if (roofers.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No roofers found. Click "Add Roofer" to create a new listing.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {roofers.map((roofer) => (
        <RooferListItem 
          key={roofer.id}
          roofer={roofer} 
          onEdit={() => onEdit(roofer.id)}
          onDelete={refetch}
        />
      ))}
    </div>
  );
}