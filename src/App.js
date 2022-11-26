import './App.css'
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Landing from "./components/landing/Landing";
import ProducList from "./components/productlist/ProductList"
import Toggle from './components/toggle/Toggle';
import { useContext } from 'react'
import { ThemeContext } from './context';

function App() {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode ;
  return (
    <>
    <div style={{ backgroundColor : darkMode ? "#222" : "#FFF"  , color : darkMode && '#FFF' }}>
      <Toggle/>
      <Landing/>
      <About />
      <ProducList />
      <Contact />
    </div>

    </>
  );
}

export default App;
