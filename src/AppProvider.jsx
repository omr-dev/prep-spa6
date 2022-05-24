import { createContext,useState } from "react";
export const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [theme,setTheme]=useState('dark');
  return <AppContext.Provider value={{theme}}>{children}</AppContext.Provider>;
};
