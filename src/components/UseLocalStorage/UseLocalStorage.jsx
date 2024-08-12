import React, { useState, useEffect } from 'react';

// Custom hook to implement
const useLocalStorage = (key, initialValue) => {
  // Implementation here
  // Инициализируем состояние с помощью функции, которая проверяет, есть ли значение в localStorage
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Проверяем, есть ли значение в localStorage по ключу
      const item = localStorage.getItem(key);
      // Если есть, парсим его и возвращаем, иначе используем initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Error reading from localStorage", error);
      return initialValue;
    }
  });

  // Обновляем localStorage при изменении storedValue
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error("Error saving to localStorage", error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];

};

const App = () => {
    const [name, setName] = useLocalStorage('name', '');
    // onchange будет устанавливать новое велью в хуке и запускать юзэффект

  return (
    <div>
      <h1>useLocalStorage Hook Example</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <p>Name in localStorage: {name}</p>
    </div>
  );
};

export default App;
