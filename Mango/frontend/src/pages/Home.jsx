import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import Earth from '../components/Earth'
import Hero from '../components/Hero'
import InfoCards from '../components/InfoCards'
import NewsLetterBox from '../components/NewsLetterBox'

const Home = () => {
  return (
    <div>
    <Canvas
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        width: '100vw',
        height: '100vh',
      }}
      camera={{ position: [0, 0, 10], fov: 75 }}
    >
      {/* Ambient light to illuminate the scene */}
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      
      {/* Earth */}
      <Earth />
      
      {/* Orbit Controls to move around the Earth */}
      <OrbitControls />
    </Canvas> 
    <Hero/>
    <InfoCards/>
    <NewsLetterBox/>
  </div>
  )
}

export default Home