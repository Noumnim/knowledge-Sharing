import './App.css';
import LangProvider from './components/context/LangPovider';
import Header from './components/Header/Header';
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

