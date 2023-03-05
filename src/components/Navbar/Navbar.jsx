import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from 'react'
import'./Navbar.scss'
import MenuIcon from "@mui/icons-material/Menu";

import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [collapse,setCollapse]=useState("nav_menu")
  const [toggleIcon,setToggleIcon]= useState("toggler_icon")
  const onToggle=()=>{
    collapse === "nav_menu"?setCollapse("nav_menu nav_collapse")
    : setCollapse("nav_menu")
  
    toggleIcon==="toggler_icon"?setToggleIcon("toggler_icon toggle"):
    setToggleIcon("toggler_icon")}
  return (
    <div className="nav">
        <div className="container1">
        <div className="Logo">
                    <h1>MTR.</h1>
                    <p>The Developer</p>
                </div>
            <div className="links">
            <ul className={collapse}>
                    <li>Home</li>
                    <li>About Me</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
                <div className={toggleIcon} onClick={onToggle}>
      <MenuIcon className='icon'/>
      <CloseIcon className='icon2'/>
      </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar