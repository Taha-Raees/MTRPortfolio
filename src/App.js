import Contacts from "./components/Contacts/Contacts";
import Hero from "./components/Hero/Hero";
import Who from "./components/Who/Who";
import Works from "./components/Works/Works";
import './App.scss';
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [font1, setFont1] = useState(localStorage.getItem('font1') || 'dark1');
  const [font2, setFont2] = useState(localStorage.getItem('font2') || 'dark2');
  const [font3, setFont3] = useState(localStorage.getItem('font3') || 'dark3');

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    const newFont1 = font1 === 'dark1' ? 'light1' : 'dark1';
    const newFont2 = font2 === 'dark2' ? 'light2' : 'dark2';
    const newFont3 = font3 === 'dark3' ? 'light3' : 'dark3';
    
    setTheme(newTheme);
    setFont1(newFont1);
    setFont2(newFont2);
    setFont3(newFont3);

    localStorage.setItem('theme', newTheme);
    localStorage.setItem('font1', newFont1);
    localStorage.setItem('font2', newFont2);
    localStorage.setItem('font3', newFont3);
  }

  useEffect(() => {
    localStorage.setItem('theme', theme);
    localStorage.setItem('font1', font1);
    localStorage.setItem('font2', font2);
    localStorage.setItem('font3', font3);
  }, [theme, font1, font2, font3]);

  return (
    <BrowserRouter>
      <div className={`App ${theme}`}>
        <Navbar tg={toggleTheme} font={font1}  /> 
        <Hero font={font2} />
        <Who font={font3} />
        <Works  />
        <Contacts  />  
      </div>
    </BrowserRouter>
  );
}

export default App;
