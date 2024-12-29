import React from 'react';
import { Star, Edit, Trash2 } from 'lucide-react';
import { Roofer } from '../../types/roofer';
import { useDeleteRoofer } from '../../hooks/useDeleteRoofer';

interface RooferListItemProps {
  roofer: Roofer;
  onEdit: () => void;
  onDelete: () => void;
}

export function RooferListItem({ roofer, onEdit, onDelete }: RooferListItemProps) {
  const { deleteRoofer, loading } = useDeleteRoofer();

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this listing?')) {
      const success = await deleteRoofer(roofer.id);
      if (success) {
        onDelete();
      }
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {roofer.logo ? (
            <img 
              src={roofer.logo} 
              alt={`${roofer.name} logo`}
              className="h-12 w-12 object-contain rounded-md"
            />
          ) : (
            <div className="h-12 w-12 bg-gray-100 rounded-md flex items-center justify-center">
              <span className="text-gray-400 text-xs">No logo</span>
            </div>
          )}
          <div>
            <h3 className="font-medium">{roofer.name}</h3>
            <div className="flex items-center text-sm text-gray-600">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="ml-1">{roofer.rating} ({roofer.reviewCount} reviews)</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={onEdit}
            className="p-2 text-blue-600 hover:bg-blue-50 rounded-md"
          >
            <Edit className="h-5 w-5" />
          </button>
          <button
            onClick={handleDelete}
            disabled={loading}
            className="p-2 text-red-600 hover:bg-red-50 rounded-md disabled:opacity-50"
          >
            <Trash2 className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}