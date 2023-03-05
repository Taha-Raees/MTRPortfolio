import { PerspectiveCamera, RenderTexture, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'


const Cube = () => {
  const textRef=useRef()
  useFrame(
    (state)=>
    (textRef.current.position.x=Math.sin(state.clock.elapsedTime)*3)
  )
    return (
    <mesh>
        <boxGeometry />
        <meshStandardMaterial>
        <RenderTexture attach='map'>
            <PerspectiveCamera makeDefault position={[0,0,9]}/>
            <color attach='background' args={["#b171a4"]}/>
            <Text ref={textRef} fontSize={3} color="#555555">
                Designer
            </Text>
            </RenderTexture >
        
        </meshStandardMaterial>
    </mesh>
  )
}

export default Cube