import { useState, useEffect } from "react";

function Theme() {
  // Load the theme from localStorage (if it exists)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  // Update localStorage whenever theme changes
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Remove the theme from storage
  const removeTheme = () => {
    localStorage.removeItem("theme");
    setTheme("light");
  };

  // Clear all localStorage (⚠️ use carefully)
  const clearStorage = () => {
    localStorage.clear();
    setTheme("light");
  };

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#222",
        color: theme === "light" ? "#000" : "#fff",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>{`Current Theme: ${theme}`}</h1>

      <div style={{ display: "flex", gap: "1rem" }}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <button onClick={removeTheme}>Remove Theme</button>
        <button onClick={clearStorage}>Clear Storage</button>
      </div>
    </div>
  );
}

export default Theme;
