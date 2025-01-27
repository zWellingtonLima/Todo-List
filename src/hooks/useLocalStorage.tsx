import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (err) {
      console.error("Erro ao acessar o armazenamento local", err);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
        localStorage.setItem(key, JSON.stringify(storedValue))
    } catch (err) {
        console.error("Erro ao salvar no armazenamento local", err)
    }
  }, [key, storedValue])

  return [storedValue, setStoredValue] as const
}
