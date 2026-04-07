import React from 'react';
import { useWaterStore } from '@/store/useWaterStore';
import { getParameterStatus } from '@/lib/maintenanceUtils';

const WaterParameterList: React.FC = () => {
  const logs = useWaterStore((state) => state.logs);

  if (logs.length === 0) return (
    <div className="mt-8 p-6 bg-slate-50 border rounded-xl text-center text-slate-500 italic">
      No water logs yet. Start by adding one to the vault!
    </div>
  );

  return (
    <div className="mt-8 space-y-4">
      <h2 className="text-xl font-bold text-slate-800 px-2">Parameter History</h2>
      <div className="overflow-hidden border rounded-xl bg-white shadow-sm">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b">
            <tr>
              <th className="p-3 text-sm font-semibold text-slate-600">Date</th>
              <th className="p-3 text-sm font-semibold text-slate-600">Ammonia</th>
              <th className="p-3 text-sm font-semibold text-slate-600">Nitrite</th>
              <th className="p-3 text-sm font-semibold text-slate-600">Nitrate</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {logs.map((log) => (
              <tr key={log.date} className="hover:bg-slate-50">
                <td className="p-3 text-sm text-slate-500 font-mono">
                  {new Date(log.date).toLocaleDateString()}
                </td>
                <td className={`p-3 text-sm ${getParameterStatus('ammonia', log.ammonia)}`}>
                  {log.ammonia} ppm
                </td>
                <td className={`p-3 text-sm ${getParameterStatus('nitrite', log.nitrite)}`}>
                  {log.nitrite} ppm
                </td>
                <td className={`p-3 text-sm ${getParameterStatus('nitrate', log.nitrate)}`}>
                  {log.nitrate} ppm
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WaterParameterList;
