import React from 'react';
import { useTurtleStore } from '../store/useTurtleStore';

const Dashboard: React.FC = () => {
  const { name, waterTemp, markAsFed } = useTurtleStore();

  return (
    <div className="p-6 bg-green-50 rounded-xl border border-green-200">
      <h1 className="text-2xl font-bold text-green-800">{name}'s Habitat</h1>
      <p className="mt-2 text-lg">Current Temp: <span className="font-mono">{waterTemp}°F</span></p>
      <button 
        onClick={markAsFed}
        className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
      >
        Feed {name}
      </button>
    </div>
  );
};

export default Dashboard;
