'use client';

import React, { useState } from 'react';
import { searchNutrition, getSafetyColor, FoodItem } from '@/lib/nutritionUtils';

const SnackSearch: React.FC = () => {
  const [results, setResults] = useState<FoodItem[]>([]);

  return (
    <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 w-full max-w-md">
      <h3 className="text-lg font-bold mb-4 text-slate-800">🐢 Snack Bar Search</h3>
      <input
        type="text"
        placeholder="Search food (e.g. 'Kale')..."
        className="w-full p-2 border rounded-md mb-4 text-slate-900"
        onChange={(e) => setResults(searchNutrition(e.target.value))}
      />
      <div className="space-y-2">
        {results.length > 0 ? (
          results.map((food) => (
            <div key={food.item} className="p-2 bg-white rounded border flex justify-between items-center shadow-sm">
              <div className="flex-1 mr-4">
                <span className="font-bold text-slate-900">{food.item}</span>
                <p className="text-xs text-slate-500 line-clamp-2">{food.notes}</p>
              </div>
              <span className={`text-[10px] font-mono uppercase whitespace-nowrap ${getSafetyColor(food.frequency)}`}>
                {food.frequency}
              </span>
            </div>
          ))
        ) : (
          <p className="text-xs text-slate-400 text-center italic">Type to search the nutrition database...</p>
        )}
      </div>
    </div>
  );
};

export default SnackSearch;
