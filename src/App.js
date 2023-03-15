import Contacts from "./components/Contacts/Contacts"
import Hero from "./components/Hero/Hero"
import Who from "./components/Who/Who"
import Works from "./components/Works/Works"
import './App.scss'
import Navbar from "./components/Navbar/Navbar"
import { BrowserRouter } from "react-router-dom"
import { useState } from "react"


function App() {
  const [theme, setTheme] = useState('dark');
  const [font1, setFont1] = useState('dark1');
  const [font2, setFont2] = useState('dark2');
  const [font3, setFont3] = useState('dark3');
const toggleTheme=(e)=>{
  
  setTheme(theme === 'dark' ? 'light' : 'dark');
  setFont1(font1 === 'dark1' ? 'light1' : 'dark1');
  setFont2(font2 === 'dark2' ? 'light2' : 'dark2');
  setFont3(font3 === 'dark3' ? 'light3' : 'dark3');
}
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
  )
}

export default App