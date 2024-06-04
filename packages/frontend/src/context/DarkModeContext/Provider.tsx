import { ReactNode, useContext, useState } from "react";
import { DarkModeContext } from "./Context";

type Props = {
  children: ReactNode;
};

export const DarkModeProvider = ({ children }: Props): JSX.Element => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleIsDarkMode = () => setIsDarkMode(!isDarkMode);

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
