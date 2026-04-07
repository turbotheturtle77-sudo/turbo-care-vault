export const getStatusColor = (daysPassed: number, limit: number): string => {
  const ratio = daysPassed / limit;
  if (ratio > 1) return 'text-red-600 font-bold';
  if (ratio > 0.8) return 'text-orange-500';
  return 'text-green-600';
};

export const daysSince = (dateString: string): number => {
  const start = new Date(dateString).getTime();
  const now = new Date().getTime();
  return Math.floor((now - start) / (1000 * 60 * 60 * 24));
};

export const getParameterStatus = (type: 'ammonia' | 'nitrite' | 'nitrate', value: number): string => {
  if (type === 'ammonia' || type === 'nitrite') {
    if (value > 0.5) return 'text-red-600 font-bold animate-pulse';
    if (value > 0) return 'text-orange-500 font-medium';
    return 'text-green-600';
  }
  if (type === 'nitrate') {
    if (value > 40) return 'text-red-600 font-bold';
    if (value > 20) return 'text-orange-500';
    return 'text-green-600';
  }
  return 'text-slate-600';
};
