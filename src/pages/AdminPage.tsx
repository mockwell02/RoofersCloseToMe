import React, { useState } from 'react';
import { Plus, List } from 'lucide-react';
import { RooferForm } from '../components/admin/RooferForm';
import { RooferList } from '../components/admin/RooferList';

export function AdminPage() {
  const [editingRooferId, setEditingRooferId] = useState<string | null>(null);
  const [activeView, setActiveView] = useState<'list' | 'form'>('list');
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleEdit = (id: string) => {
    setEditingRooferId(id);
    setActiveView('form');
  };

  const handleFormSuccess = () => {
    setEditingRooferId(null);
    setActiveView('list');
    // Trigger a refresh of the list
    setRefreshTrigger(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <h1 className="text-xl font-bold">Admin Dashboard</h1>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-4">
            <button
              onClick={() => setActiveView('list')}
              className={`flex items-center px-4 py-2 rounded-md ${
                activeView === 'list' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              <List className="h-5 w-5 mr-2" />
              Roofer Listings
            </button>
            <button
              onClick={() => {
                setEditingRooferId(null);
                setActiveView('form');
              }}
              className={`flex items-center px-4 py-2 rounded-md ${
                activeView === 'form' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Plus className="h-5 w-5 mr-2" />
              {editingRooferId ? 'Edit Roofer' : 'Add Roofer'}
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          {activeView === 'list' ? (
            <RooferList 
              onEdit={handleEdit} 
              refreshTrigger={refreshTrigger}
            />
          ) : (
            <RooferForm 
              rooferId={editingRooferId}
              onSuccess={handleFormSuccess}
            />
          )}
        </div>
      </div>
    </div>
  );
}