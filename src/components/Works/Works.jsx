import { GitHub, Launch } from '@mui/icons-material'
import React from 'react'
import './Works.scss'

const Works = () => {
  
  return (
    <section id='work' className="work"> 
    <div className="Title">
          <h1>My Latest Projects</h1>
        </div>
      <div className="container">
       
      <div className="project">
       
          <img src="/Portfolio/images/Little_Lemon.gif" alt="" />
           <h2>Little Lemon</h2>
          <p>Purpose of this project was to create wire frames and high
fidelity prototype, then implement those to react app. Website is also
fully responsive.</p>
          <div className="icons">
            <a href="https://github.com/Taha-Raees/Little-Lemon.git" target="_blank"><GitHub/></a>
            <a href="https://taha-raees.github.io/Little-Lemon/" target="_blank"><Launch/></a>
          </div>
        </div>
      <div className="project">
          <img src="/Portfolio/images/Mangata_Gallo___The_Jewller.gif" alt="" />
          <h2>The Jeweller</h2>
          <p>HTML, CSS, and JavaScript is used to design this project. The web page is entirely responsive to all devices and
contains some attractive animations.</p>
          <div className="icons">
          <a href="https://github.com/Taha-Raees/Myfirstwebpage.git" target="_blank"><GitHub/></a>
            <a href="https://taha-raees.github.io/Myfirstwebpage/" target="_blank"><Launch/></a>
          </div>
        </div>
      <div className="project">
          <img src="/Portfolio/images/MTR_Store.gif" alt="" />
          <h2>MTR. Store</h2>
          <p>The project is an e-commerce react app that uses (S)CSS styling
and the Redux library to implement a functional add-to-cart
feature and the Strapi CMS to provide complete dynamic
functionality.
</p>
          <div className="icons">
          <a href="https://github.com/Taha-Raees/MTR.Store.git" target="_blank"><GitHub/></a>
            <a href="https://taha-raees.github.io/MTR.Store/" target="_blank"><Launch/></a>
          </div>
        </div>
      </div>
        
    </section>
  )
}

export default Works