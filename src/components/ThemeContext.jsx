import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("standard");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
// export {ThemeContextProvider, ThemeContext} <= Alternative zu export aus Zeile 3 und 6 (named export anstatt export default)
