'use client';

import { useRef, Suspense, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture, Sphere, Stars } from '@react-three/drei';

function Earth() {
  const earthRef = useRef();
  const texture = useTexture('https://s3-us-west-2.amazonaws.com/s.cdpn.io/141228/earthmap1k.jpg');

  useFrame(({ clock }) => {
    earthRef.current.rotation.y = clock.getElapsedTime() * 0.05;
  });

  return (
    <Sphere ref={earthRef} args={[1.5, 64, 64]}>
      <meshStandardMaterial map={texture} />
    </Sphere>
  );
}

export default function Login() {
  const [activeForm, setActiveForm] = useState('login'); // State to toggle between login and signup forms

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-indigo-900 to-black">
      {/* 3D Earth Animation */}
      <Canvas className="absolute inset-0" camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Suspense fallback={null}>
          <Earth />
          <Stars radius={300} depth={60} count={20000} factor={7} saturation={0} fade speed={1} />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.4} autoRotate autoRotateSpeed={0.5} />
      </Canvas>

      {/* Form Section */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[400px] bg-white bg-opacity-10 p-8 rounded-lg shadow-lg backdrop-blur-md space-y-8">
          <div className="flex justify-center space-x-4">
            {/* Toggle Buttons */}
            <button
              onClick={() => setActiveForm('login')}
              className={`px-4 py-2 rounded ${
                activeForm === 'login'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-transparent text-indigo-300 hover:text-white'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setActiveForm('signup')}
              className={`px-4 py-2 rounded ${
                activeForm === 'signup'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-transparent text-indigo-300 hover:text-white'
              }`}
            >
              Signup
            </button>
          </div>

          {/* Conditional Rendering for Forms */}
          {activeForm === 'login' && (
            <div className="space-y-4">
              <h1 className="text-3xl font-bold text-center text-white">Welcome Back</h1>
              <div className="space-y-2">
                <label htmlFor="email" className="text-white block">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  className="w-full bg-white bg-opacity-20 text-white placeholder-gray-300 border-indigo-300 focus:border-indigo-500 rounded px-3 py-2"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="password" className="text-white block">Password</label>
                <input
                  id="password"
                  type="password"
                  required
                  className="w-full bg-white bg-opacity-20 text-white placeholder-gray-300 border-indigo-300 focus:border-indigo-500 rounded px-3 py-2"
                />
              </div>
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded py-2">Login</button>
            </div>
          )}

          {activeForm === 'signup' && (
            <div className="space-y-4">
              <h1 className="text-3xl font-bold text-center text-white">Create Account</h1>
              <div className="space-y-2">
                <label htmlFor="signup-email" className="text-white block">Email</label>
                <input
                  id="signup-email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  className="w-full bg-white bg-opacity-20 text-white placeholder-gray-300 border-indigo-300 focus:border-indigo-500 rounded px-3 py-2"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="signup-password" className="text-white block">Password</label>
                <input
                  id="signup-password"
                  type="password"
                  required
                  className="w-full bg-white bg-opacity-20 text-white placeholder-gray-300 border-indigo-300 focus:border-indigo-500 rounded px-3 py-2"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="confirm-password" className="text-white block">Confirm Password</label>
                <input
                  id="confirm-password"
                  type="password"
                  required
                  className="w-full bg-white bg-opacity-20 text-white placeholder-gray-300 border-indigo-300 focus:border-indigo-500 rounded px-3 py-2"
                />
              </div>
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded py-2">Sign Up</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
