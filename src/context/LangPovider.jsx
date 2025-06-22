import { createContext, useState } from "react";

// Create the context
export const LangContext = createContext();

export default function LangProvider({ children }) {
  const [lang, setLang] = useState('en'); // State for current language

  const toggleLang = () => {
    // Toggle between 'en' and 'lao'
    setLang((prev) => (prev === 'en' ? 'lao' : 'en'));
  };

  return (
    // Provide lang and toggle function to children
    <LangContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}
