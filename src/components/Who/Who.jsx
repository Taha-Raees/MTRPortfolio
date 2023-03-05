import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Cube from '../Cube/Cube'

import './Who.scss'

const Who = () => {
  return (
    <div className="who">
        <div className="container">
            <div className="left">
                
            <Canvas camera={{fov:25, position:[5,5,5]}}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1}/>
              <directionalLight position={[3,2,1]}/>
              <Cube/>
            </Canvas>
            </div>
            <div className="right">
            <h1>Think outside the square space </h1>
                <h3> - Who we are</h3>
                <p>A creative designer and developer with a passion for new technologies </p>
                <button>See Our Works</button>
            </div>
        </div>
    </div>
  )
}

export default Who