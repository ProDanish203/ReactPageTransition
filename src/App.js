import './App.css';
import { Header } from './Components/Header'
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {

  const location = useLocation();

  return (
    <>
    <Header/>
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>  
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </AnimatePresence>
    </>
  );
}

export default App;
