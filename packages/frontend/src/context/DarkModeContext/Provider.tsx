import { ReactNode, useContext, useEffect, useState } from "react";
import { DarkModeContext } from "./Context";

type Props = {
  children: ReactNode;
};

export const DarkModeProvider = ({ children }: Props): JSX.Element => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleIsDarkMode = () => {
    const isDarkModePreffered = localStorage.getItem("THEME") === "DARK";

    if (isDarkModePreffered) {
      setIsDarkMode(false);
      localStorage.setItem("THEME", "LIGHT");
    } else {
      setIsDarkMode(true);
      localStorage.setItem("THEME", "DARK");
    }
  };

  useEffect(() => {
    const isDarkModePreffered = localStorage.getItem("THEME") === "DARK";
    const isDarkModePrefferdedSystem = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const isThemeSet = "THEME" in localStorage;

    if (!isThemeSet && !isDarkModePrefferdedSystem) {
      setIsDarkMode(false);
      return;
    }

    if (!isThemeSet && isDarkModePrefferdedSystem) {
      setIsDarkMode(true);
      return;
    }

    if (isThemeSet && !isDarkModePreffered) {
      setIsDarkMode(false);
      return;
    }

    if (isThemeSet && isDarkModePreffered) {
      setIsDarkMode(true);
      return;
    }

    console.log(isDarkModePrefferdedSystem);
  }, []);

  useEffect(() => {
    const MediaQueryList = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    const handlePrefferedColorSchemeChange = (event: MediaQueryListEvent) => {
      const isThemeSet = "THEME" in localStorage;
      if (isThemeSet) return;
      setIsDarkMode(event.matches);
    }

    MediaQueryList.addEventListener("change", handlePrefferedColorSchemeChange);

    return () => MediaQueryList.removeEventListener("change", handlePrefferedColorSchemeChange);
  });

  return (
    <DarkModeContext.Provider
      value={{
        isDarkMode,
        toggleIsDarkMode,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkModeContext = () => useContext(DarkModeContext);
