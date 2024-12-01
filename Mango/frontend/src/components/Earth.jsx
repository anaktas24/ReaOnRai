import React from 'react'
 import { useFrame} from '@react-three/fiber'
import { useRef } from 'react'
import { OrbitControls } from '@react-three/drei'

const Earth = () => {

  const sphereRef = useRef()
  const cubeRef = useRef()


  useFrame((state,delta)=>{
    sphereRef.current.rotation.x += delta
    cubeRef.current.rotation.y += delta

  })



  return (
    <>
      <OrbitControls/>
      <directionalLight position={[1,2,3]} intensity={4.5}/>
      <ambientLight intensity={1.5}/>
      <mesh ref={cubeRef}position-x={3} rotation-y={Math.PI * 0.23} scale={1.5}>
        <boxGeometry args={[5 , 1, 2]}/>
        <meshStandardMaterial color="blue"  />
      </mesh>
      
      <mesh ref={sphereRef} position-x={3} rotation-y={Math.PI * 0.23} scale={1.5}>
        <sphereGeometry args={[1.4 , 50, 32]}/>
        <meshStandardMaterial color="red"/>
      </mesh>
    </>
  )
}

export default Earth