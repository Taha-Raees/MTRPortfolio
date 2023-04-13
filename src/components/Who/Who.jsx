import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'

import {HashLink as Link } from 'react-router-hash-link';

import './Who.scss'
import Cube2 from '../Cube/Cube2';

const Who = (props) => {
  const ResumeUrl='/Portfolio/images/Muhammad_Taha_Raees_-_Frontend_Developer.pdf'
  const downloadResume=(url)=>{
    
    const aTag= document.createElement('a')
    aTag.href=url
    aTag.setAttribute('download','Muhammad_Taha_Raees_-_Frontend_Developer.pdf')
    document.body.appendChild(aTag)
    aTag.click()
    aTag.remove()
  }
  return (
    <div className={props.font} id='who'>
        <div className="container">
            <div className="left">
              <Cube2/>
            </div>
            <div className="right">
            <h1>Think-Design-Develop-Test-Deploy </h1>
                <h3> - Who am I</h3>
                <p> I'm a skilled  front-end developer with a passion for creating visually stunning and user-friendly websites. My portfolio is a testament to my expertise in HTML, CSS, JavaScript, and UI/UX design.</p>
                <p>If you would like to learn more about my education and qualifications, please download my latest CV.</p>
                <div className="buttons">
                <Link to='#work'><button>See My Works</button></Link>
                <button onClick={()=>{downloadResume(ResumeUrl)}}>Download CV</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Who