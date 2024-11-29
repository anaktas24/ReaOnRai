import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three'; 
import { Sphere } from '@react-three/drei'; 

const Earth = () => {
  const meshRef = useRef();
  
  // Load texture using useLoader hook
  const texture = useLoader(TextureLoader, '/assets/textures/earth/day.jpg'); // Make sure path is correct
  const clouds = useLoader(TextureLoader, '/assets/textures/earth/specularClouds.jpg'); // Night texture

  
  // Rotate the globe on each frame
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y -= 0.004; // Adjust rotation speed here
    }
  });

  return (
    <>
    {/* Ambient light for overall scene illumination */}
    <ambientLight intensity={0.3} color="#ffffff" />

    {/* Directional light to simulate sunlight */}
    <directionalLight
      intensity={1}
      position={[10, 10, 10]}
      castShadow
      color="#ffffff"
    />
    
    {/* The Earth Globe */}
    <Sphere ref={meshRef} args={[3, 64, 64]} position={[0, 0, 0]}>
      {/* Apply material as a JSX element */}
      <meshStandardMaterial
        map={texture} // Apply texture here
        roughness={0.3}
        metalness={0.1}
      />
    </Sphere>
    
  </>
  );
};

export default Earth