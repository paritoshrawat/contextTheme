import { useContext } from "react";
import { createContext } from "react";

export const themeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeContextProvider = themeContext.Provider;

export default function usetheme() {
  return useContext(themeContext);
}
