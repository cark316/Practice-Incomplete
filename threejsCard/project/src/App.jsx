import React from 'react'
import './app.css'
import Canvas_Model from './Canvas'
import { Canvas } from "@react-three/fiber"
import * as THREE from 'three';


const App = () => {
  return (
    <div className='bg'>
      <Canvas
        shadows
        camera = {{
          fov: 75,
          near: 0.1,
          far: 200,
          position: [-4,3,6],
        }}
      >
        <Canvas_Model />
      </Canvas>
    </div>
  )
}

export default App