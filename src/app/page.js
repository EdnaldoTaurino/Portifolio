"use client";
import Home from "./Screens/Home/";
import { ThemeModeProvider } from "./components/themeDarkLight/ThemeContext";

export default function App() {
  return (
    <>
      <ThemeModeProvider>
        <Home />
      </ThemeModeProvider>
    </>
  );
}
