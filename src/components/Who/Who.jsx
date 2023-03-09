import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'

import {HashLink as Link } from 'react-router-hash-link';

import './Who.scss'
import Cube2 from '../Cube/Cube2';

const Who = (props) => {
  return (
    <div className={props.font} id='who'>
        <div className="container">
            <div className="left">
                
            
              <Cube2/>
            
            </div>
            <div className="right">
            <h1>Think-Design-Develop </h1>
                <h3> - What I do</h3>
                <p>Front-end Developer who cares deeply about user experience with serious passion for UI design and new technologies. </p>
                <Link to='#work'><button>See My Works</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Who