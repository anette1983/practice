import React, { useState, useContext } from 'react';

const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

const ThemeContext = React.createContext({
  theme: themes.light,
  toggleTheme: () => {},
});

function ContextThemeToggle() {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    setTheme(prevTheme =>
      prevTheme === themes.light ? themes.dark : themes.light
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return (
    <div>
      <ThemedButton />
      <ThemeToggleButton />
    </div>
  );
}

function ThemedButton() {
  const { theme } = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}

function ThemeToggleButton() {
  const { toggleTheme } = useContext(ThemeContext);
  return <button onClick={toggleTheme}>Toggle Theme</button>;
}

export default ContextThemeToggle;
