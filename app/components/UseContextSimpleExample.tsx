"use client";
import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext<any>(null);

const ThemeButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={toggleTheme}
      className={`px-4 py-2 rounded-lg mt-4 font-medium ${
        theme === "light"
          ? "bg-black text-white hover:bg-gray-800"
          : "bg-white text-black hover:bg-gray-300"
      }`}
    >
      Toggle Theme
    </button>
  );
};
const ThemeText = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <p className="mt-6 text-lg">
      Current Theme:{" "}
      <span className="font-semibold text-green-500">{theme}</span>
    </p>
  );
};

const UseContextSimpleExample = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        className={`p-6 rounded-2xl shadow-lg text-center items-center justify-center transition-all duration-500 
     ${theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"}`}
      >
        <h1 className="text-2xl font-bold mb-6">useContext Simple Example </h1>
        <ThemeButton />
        <ThemeText />
      </div>
    </ThemeContext.Provider>
  );
};

export default UseContextSimpleExample;
