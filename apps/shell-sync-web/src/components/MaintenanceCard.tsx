import React from 'react';
import { useMaintenanceStore } from '../store/useMaintenanceStore';
import { daysSince, getStatusColor } from '../lib/maintenanceUtils';

const MaintenanceCard: React.FC = () => {
  const { 
    lastWaterChange, 
    lastFilterClean, 
    lastUVBReplacement, 
    performWaterChange, 
    cleanFilter, 
    replaceUVB 
  } = useMaintenanceStore();

  const tasks = [
    { label: 'Water Change', days: daysSince(lastWaterChange), limit: 7, action: performWaterChange },
    { label: 'Filter Scrub', days: daysSince(lastFilterClean), limit: 30, action: cleanFilter },
    { label: 'UVB Bulb', days: daysSince(lastUVBReplacement), limit: 180, action: replaceUVB },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-3 p-4">
      {tasks.map((task) => (
        <div key={task.label} className="p-4 border rounded-lg bg-white shadow-sm">
          <h3 className="text-gray-500 text-sm uppercase tracking-wider">{task.label}</h3>
          <p className={`text-2xl my-2 ${getStatusColor(task.days, task.limit)}`}>
            {task.days} Days Ago
          </p>
          <button 
            onClick={task.action}
            className="w-full py-1 text-sm border border-blue-500 text-blue-500 rounded hover:bg-blue-50 transition"
          >
            Reset Timer
          </button>
        </div>
      ))}
    </div>
  );
};

export default MaintenanceCard;
