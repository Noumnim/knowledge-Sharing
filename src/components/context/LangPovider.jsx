import { useState } from "react";
import { LangContext } from "./LangContext";


export default function LangProvider({ children }) {
  const [lang, setLang] = useState('en');

  const toggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'lao' : 'en'));
  };
  return (
    <LangContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}
