import { describe, it, expect } from 'vitest';
import { searchNutrition, getSafetyColor } from './nutritionUtils';

describe('nutritionUtils', () => {
  describe('searchNutrition', () => {
    it('returns empty array for empty query', () => {
      expect(searchNutrition('')).toEqual([]);
    });

    it('finds Dandelion Greens', () => {
      const results = searchNutrition('Dandelion');
      expect(results.length).toBeGreaterThan(0);
      expect(results[0].item).toBe('Dandelion Greens');
    });

    it('is case-insensitive', () => {
      const results = searchNutrition('carrots');
      expect(results.length).toBeGreaterThan(0);
      expect(results[0].item).toBe('Carrots');
    });
  });

  describe('getSafetyColor', () => {
    it('returns green for Daily', () => {
      expect(getSafetyColor('Daily')).toContain('green');
    });

    it('returns red for Avoid', () => {
      expect(getSafetyColor('Avoid')).toContain('red');
    });

    it('returns gray for unknown', () => {
      expect(getSafetyColor('Unknown')).toContain('gray');
    });
  });
});
