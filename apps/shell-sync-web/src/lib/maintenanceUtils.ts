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
