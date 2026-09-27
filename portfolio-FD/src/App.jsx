import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './Portfolio/Nav';
import Hero from './Portfolio/Hero';
import About from './Portfolio/About';
import Projects from './Portfolio/Projects';
import Contact from './Portfolio/Contact';

function App() {
  return (
    <>
    <Nav/>
    <Hero/>
    <About/>
    <Projects/>
    <Contact/>
    </>
  );
}

export default App;
