import React, {useState} from 'react'
import './App.css';
import Navbar from './Components/navBar';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import SideBar from './Components/SideBar';

function App() {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen)
  }

  return (
    <div style={{ background: "#0A192E",}}>
      <Navbar toggle={toggle}/>
      <SideBar isOpen={isOpen} toggle={toggle}/>
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
