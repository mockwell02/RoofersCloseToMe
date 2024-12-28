import React, { useState } from 'react';
import { RooferForm } from '../components/admin/RooferForm';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/Tabs';

export function AdminPage() {
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
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-6">Create New Roofer Listing</h2>
            <RooferForm />
          </div>
        </div>
      </div>
    </div>
  );
}