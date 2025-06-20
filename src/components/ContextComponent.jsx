import React, { useContext } from 'react'
import { LangContext } from './context/LangContext';
const texts = {
  en: 'Hello',
  lao: 'ສະບາຍດີ',
};
export default function ContextComponent() {
    const { lang, toggleLang } = useContext(LangContext);
  return (
    <div>
      <h1>{texts[lang]}</h1>
       <button onClick={toggleLang}>{lang ==='en'?'Lao':'English'}</button>
    </div>
  )
}
