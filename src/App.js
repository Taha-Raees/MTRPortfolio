import Contacts from "./components/Contacts/Contacts"
import Hero from "./components/Hero/Hero"
import Who from "./components/Who/Who"
import Works from "./components/Works/Works"
import './App.scss'
import Navbar from "./components/Navbar/Navbar"


function App() {

  return (
    <div className="app">
   
     <Navbar/>
    <Hero/>
    <Who/>
     <Works/>
    <Contacts/> 
    </div>
  )
}

export default App