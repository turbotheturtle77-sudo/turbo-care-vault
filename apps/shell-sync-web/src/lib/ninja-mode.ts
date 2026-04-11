import { useState, useEffect } from 'react';

/**
 * Custom hook to detect the "Sneaky" key combo
 * Rule: Always use arrow functions and absolute paths.
 */
export const useNinjaMode = (): boolean => {
  const [isSneaky, setIsSneaky] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Shift + T for Turbo
      if (e.shiftKey && e.key === 'T') {
        setIsSneaky((prev) => !prev);
        console.log(
          '%c 🐢 NINJA MODE ACTIVATED: Turbo is watching... ',
          'background: #4B0082; color: #EE82EE; font-weight: bold; border: 2px solid #9400D3;'
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return isSneaky;
};
