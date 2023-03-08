import Contacts from "./components/Contacts/Contacts"
import Hero from "./components/Hero/Hero"
import Who from "./components/Who/Who"
import Works from "./components/Works/Works"
import './App.scss'
import Navbar from "./components/Navbar/Navbar"
import Cube2 from "./components/Cube/Cube2"
import { BrowserRouter } from "react-router-dom"


function App() {

  return (
  <BrowserRouter>
    <div className="app">
   
      <Navbar/>
    <Hero/>
    <Who/>
     <Works/>
    <Contacts/>  
    </div>
    </BrowserRouter>
  )
}

export default App