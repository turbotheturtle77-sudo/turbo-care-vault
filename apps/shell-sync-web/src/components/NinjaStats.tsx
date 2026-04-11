'use client';

import React from 'react';
import { useNinjaMode } from '@/lib/ninja-mode';
import { useWaterStore } from '@/store/useWaterStore';

const NinjaStats: React.FC = () => {
  const isSneaky = useNinjaMode();
  const logs = useWaterStore((state) => state.logs);

  if (!isSneaky) return null;

  return (
    <div className="fixed bottom-4 right-4 p-4 bg-slate-900 text-purple-400 font-mono text-xs rounded-lg border border-purple-500 shadow-2xl z-50">
      <h4 className="font-bold border-b border-purple-800 mb-2 uppercase">Raw Tank Telemetry</h4>
      <pre className="overflow-auto max-h-48">
        {JSON.stringify(logs[0] || "No logs found", null, 2)}
      </pre>
      <div className="mt-2 text-[10px] text-purple-600 animate-pulse text-center">
        SNEAKY MODE ACTIVE
      </div>
    </div>
  );
};

export default NinjaStats;
