import { ArrowBackIos, ArrowForwardIos, GitHub, KeyboardArrowDown, KeyboardArrowUp, Launch } from '@mui/icons-material'
import React, { useState } from 'react'
import './Works.scss'

const Works = () => {
  const data=[
    {
      id:1,
      Image:"/Portfolio/images/Little_Lemon.gif",
      Title:"Little Lemon",
      Desc:"Purpose of this project was to create wire frames and high fidelity prototype, then implement those to react app. Website is also fully responsive.",
      Source:"https://github.com/Taha-Raees/Little-Lemon.git",
      Link:"https://taha-raees.github.io/Little-Lemon/"
    },
    {
      id:2,
      Image:"/Portfolio/images/Mangata_Gallo___The_Jewller.gif",
      Title:"The Jeweller",
      Desc:"HTML, CSS, and JavaScript is used to design this project. The web page is entirely responsive to all devices and contains some attractive animations.",
      Source:"https://github.com/Taha-Raees/Myfirstwebpage.git",
      Link:"https://taha-raees.github.io/Myfirstwebpage/"
    },
    {
      id:3,
      Image:"/Portfolio/images/MTR_Store.gif",
      Title:"MTR. Store",
      Desc:"The project is an e-commerce react app that uses (S)CSS styling and the Redux library to implement a functional add-to-cart feature and the Strapi CMS to provide complete dynamic functionality.",
      Source:"https://github.com/Taha-Raees/MTR.Store.git",
      Link:"https://taha-raees.github.io/MTR.Store/"
    },
    {
      id:4,
      Image:"/Portfolio/images/TODO.gif",
      Title:"TODO App",
      Desc:"Classic TO-Do app with filter and drag & drop features",
      Source:"https://github.com/Taha-Raees/todo-app-main.git",
      Link:"https://taha-raees.github.io/todo-app-main/"
    },
    
  ]

  const [currentProjIndex, setCurrentProjIndex] = useState(0);

  const scrollForward = () => {
    document.querySelector('.container').classList.add('transition');
    setTimeout(() => {
      setCurrentProjIndex((prevIndex) =>
        prevIndex + 2 === data.length - 1 ? 0 : prevIndex + 1
      );
      document.querySelector('.container').classList.remove('transition');
    }, 300);
  };
  
  const scrollBackward = () => {
    document.querySelector('.container').classList.add('transition');
    setTimeout(() => {
      setCurrentProjIndex((prevIndex) =>
        prevIndex === 0 ? data.length - 3 : prevIndex - 1
      );
      document.querySelector('.container').classList.remove('transition');
    }, 300);
  };

  return (
    <section id='work' className="work"> 
      <div className="Title">
        <h1>My Latest Projects</h1>
      </div>
      <div className="container">
        {data.slice(currentProjIndex, currentProjIndex + 3).map((proj)=>{
          return (
            <div className="project" key={proj.id}>
              <img src={proj.Image} alt="" />
              <h2>{proj.Title}</h2>
              <p>{proj.Desc}</p>
              <div className="icons">
                <a href={proj.Source} target="_blank" rel="noopener noreferrer"><GitHub className='icon'/></a>
                <a href={proj.Link} target="_blank" rel="noopener noreferrer"><Launch className='icon'/></a>
              </div>
            </div>
          )
        })}
      </div>
      <div className="scroll">
        <ArrowBackIos className='desktop' onClick={scrollBackward} />
        <ArrowForwardIos className='desktop' onClick={scrollForward} />
        <KeyboardArrowUp className='Mobile' onClick={scrollBackward}/>
        <KeyboardArrowDown className='Mobile'onClick={scrollForward}/>
      </div>
    </section>
  )
}

export default Works;

