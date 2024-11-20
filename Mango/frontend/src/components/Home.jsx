import { assets } from "../assets/assets/assets"
import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useTexture, Sphere } from '@react-three/drei'
import * as THREE from 'three'

const Earth = () => {
  const earthRef = useRef()
  const texture = useTexture('https://s3-us-west-2.amazonaws.com/s.cdpn.io/141228/earthmap1k.jpg')

  useFrame((state) => {
    earthRef.current.rotation.y += 0.002
  })
  return (
    <Sphere args={[1, 64, 64]} ref={earthRef}>
      <meshStandardMaterial map={texture} />
    </Sphere>
  )
}
const Planet = ({ radius, distance, speed, texture }) => {
  const planetRef = useRef()
  //const planetTexture = useTexture(texture)

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed
    planetRef.current.position.x = Math.cos(t) * distance
    planetRef.current.position.z = Math.sin(t) * distance
    planetRef.current.rotation.y += 0.005
  })

  return (
    <Sphere ref={planetRef} args={[radius, 32, 32]} position={[distance, 0, 0]}>
      <meshStandardMaterial />
    </Sphere>
  )
}
const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Earth />
      <Planet radius={0.1} distance={2} speed={0.5} />
      <Planet radius={0.08} distance={2.5} speed={0.3} />
      <Planet radius={0.12} distance={3} speed={0.2} />
      <OrbitControls enableZoom={false} enablePan={false} />
    </>
  )
}

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
       {/*Hero Left Side */}
       <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
            <div className="text-[#414141]">
                <div className="flex items-center gap-2">
                    <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
                    <p className="font-medium text-sm md:text-base">WELCOME TO</p>
                </div>
                <h1 className=" poppins-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">MIGRATING MANGO</h1>
                <div className="flex items-center gap-2">
                    <p className="font-semibold text-sm md:text-base">FOR A BETTER LIFE</p>
                    <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
                </div>
            </div>
       </div>
       {/*Hero Right Side */}
       <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
           <Scene />
         </Canvas>
    </div>
  )
}

export default Hero