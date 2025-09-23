import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialValue) {
  const initialIsSet = initialValue instanceof Set;

  const [state, setState] = useState(() => {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) return initialValue;
      const parsed = JSON.parse(raw);
      return initialIsSet ? new Set(parsed) : parsed;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      const toSave = state instanceof Set ? Array.from(state) : state;
      localStorage.setItem(key, JSON.stringify(toSave));
    } catch {
      // ignore
    }
  }, [key, state]);

  return [state, setState];
}

export default useLocalStorage;
