import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import {HashLink as Link } from 'react-router-hash-link';

import './Hero.scss'

const Hero = (props) => {
  return (
  
    <div className={props.font} id='hero'>
        
        <div className="container">
            <div className="left">
                <h1>Welcome to my portfolio! </h1>
                <h3> - Who am I</h3>
                <p> From Mechanical Engineering to Front-End Development: I'm a skilled front-end developer with a passion for creating visually stunning and user-friendly websites. My portfolio is a testament to my expertise in HTML, CSS, JavaScript, and UI/UX design, and showcases my ability to create dynamic and interactive websites using React.</p>
                <Link to='#contact'><button>Contact</button></Link>

            </div>
            <div className="right">
           <div className="canvas">
           <Canvas>
              <OrbitControls enableZoom={false}/>
              <ambientLight intensity={0}/>
              <directionalLight position={[2,3,4]}/>
              <Sphere args={[1,100,200]} scale={2.4}>
              <MeshDistortMaterial color='#88156f' attach='material' distort={0.5} speed={1}/>
              </Sphere>
             
            </Canvas>
           </div>
            
                 <img src="/Portfolio/images/moon.png" alt="" /> 
            </div>
        </div>
    </div>
  )
}

export default Hero