// src/app/ThemeContext.js
"use client";
import React, { createContext, useState, useMemo, useContext } from "react";
import { ThemeProvider } from "@mui/material";
import { lightTheme, darkTheme } from "./themes";

const ThemeModeContext = createContext();

export const ThemeModeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  const theme = useMemo(() => (mode === "light" ? lightTheme : darkTheme), [mode]);

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ThemeModeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeModeContext.Provider>
  );
};

export const useThemeMode = () => useContext(ThemeModeContext);
