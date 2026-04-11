import React from 'react';
import MaintenanceCard from './MaintenanceCard';
import WaterParameterForm from './WaterParameterForm';
import WaterParameterList from './WaterParameterList';
import { useTurtleStore } from '../store/useTurtleStore';

const Dashboard: React.FC = () => {
  const name = useTurtleStore((state) => state.name);

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <header className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-green-800 flex items-center gap-2">
          🐢 {name}'s Shell-Health Dashboard
        </h1>
        <div className="text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-200">
          Gold Standard Hub
        </div>
      </header>

      <section>
        <h2 className="text-xl font-semibold mb-4 text-slate-700">Equipment Lifecycles</h2>
        <MaintenanceCard />
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <WaterParameterForm />
        </div>
        <div className="lg:col-span-2">
          <WaterParameterList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
