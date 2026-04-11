import nutritionData from '../../../../data/nutrition-table.json';

export interface FoodItem {
  item: string;
  type: string;
  frequency: 'Daily' | 'Weekly' | 'Treat' | 'Avoid';
  ca_p_ratio: string;
  notes: string;
}

export const getSafetyColor = (frequency: string): string => {
  switch (frequency) {
    case 'Daily':
      return 'text-green-600 font-bold';
    case 'Weekly':
      return 'text-blue-500';
    case 'Treat':
      return 'text-orange-400';
    case 'Avoid':
      return 'text-red-600 underline';
    default:
      return 'text-gray-500';
  }
};

export const searchNutrition = (query: string): FoodItem[] => {
  if (!query) return [];
  return (nutritionData as unknown as FoodItem[]).filter(f =>
    f.item.toLowerCase().includes(query.toLowerCase())
  );
};
