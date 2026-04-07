import React, { useState } from 'react';
import { useWaterStore, WaterLog } from '@/store/useWaterStore';

const WaterParameterForm: React.FC = () => {
  const addLog = useWaterStore((state) => state.addLog);
  const [formData, setFormData] = useState({
    ammonia: 0,
    nitrite: 0,
    nitrate: 0,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newEntry: WaterLog = {
      date: new Date().toISOString(),
      ...formData,
    };
    addLog(newEntry);
    alert("Parameters logged to the Vault!");
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded-xl shadow-md border border-slate-200">
      <h2 className="text-xl font-bold mb-4 text-slate-800">Log Water Chemistry</h2>
      
      <div className="space-y-4">
        {/* Ammonia Field */}
        <div>
          <label className="block text-sm font-medium text-slate-700">Ammonia (NH₃) - Target: 0ppm</label>
          <input 
            type="number" step="0.25"
            className="w-full mt-1 p-2 border rounded"
            onChange={(e) => setFormData({...formData, ammonia: parseFloat(e.target.value) || 0})}
          />
        </div>

        {/* Nitrite Field */}
        <div>
          <label className="block text-sm font-medium text-slate-700">Nitrite (NO₂⁻) - Target: 0ppm</label>
          <input 
            type="number" step="0.25"
            className="w-full mt-1 p-2 border rounded"
            onChange={(e) => setFormData({...formData, nitrite: parseFloat(e.target.value) || 0})}
          />
        </div>

        {/* Nitrate Field */}
        <div>
          <label className="block text-sm font-medium text-slate-700">Nitrate (NO₃⁻) - Target: &lt; 40ppm</label>
          <input 
            type="number" step="5"
            className="w-full mt-1 p-2 border rounded"
            onChange={(e) => setFormData({...formData, nitrate: parseFloat(e.target.value) || 0})}
          />
        </div>
      </div>

      <button 
        type="submit"
        className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        Save to Logbook
      </button>
    </form>
  );
};

export default WaterParameterForm;
