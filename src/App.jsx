import './App.css';
import LangProvider from './context/LangPovider';
import Header from './components/header/Header';
import Navbar from './components/nav/Navbar';

function App() {

  return (
    <LangProvider>
      <Header/>
      <Navbar/>
    </LangProvider>
  )
}
export default App;

