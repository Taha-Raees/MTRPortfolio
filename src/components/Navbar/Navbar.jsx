
import React, { useState } from 'react'
import'./Navbar.scss'
import MenuIcon from "@mui/icons-material/Menu";


import CloseIcon from '@mui/icons-material/Close';
import {HashLink as Link } from 'react-router-hash-link';

const Navbar = (props) => {
  const [collapse,setCollapse]=useState("nav_menu")
  const [toggleIcon,setToggleIcon]= useState("toggler_icon")
  const onToggle=()=>{
    collapse === "nav_menu"?setCollapse("nav_menu nav_collapse")
    : setCollapse("nav_menu")
  
    toggleIcon==="toggler_icon"?setToggleIcon("toggler_icon toggle"):
    setToggleIcon("toggler_icon")}
  return (
    <div className={props.font}>
        <div className="container1">
        <Link to='#hero'  className ="link"> <div className="Logo">
                    <h1>MTR.</h1>
                    <p>The Developer</p>
                </div></Link>
            <div className="links">
            <ul className={collapse}>
                    
                    <li><Link to='#hero' className ="link">Home</Link></li>
                    <li><Link to='#who'  className ="link">About Me</Link></li>
                    <li><Link to='#work'  className ="link">Porjects</Link></li>
                    <li><Link to='#contact'   className ="link">Contact</Link></li>
                    <button onClick={props.tg}>Toggle Theme</button>
                    
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