import './App.css';
import ContextComponent from './components/context/ContextComponent';
import Header from './components/Header/Header';
import { createContext } from 'react';
import { data } from './data';
import Navbar from './components/nav/navbar';

export const DataContext = createContext();
function App() {

  return (
    <DataContext.Provider value={data}>
      <Header/>
      <Navbar/>
    </DataContext.Provider>
  )
}
export default App;

