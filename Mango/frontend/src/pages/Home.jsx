import { Canvas } from '@react-three/fiber';
import Earth from '../components/Earth';
import Hero from '../components/Hero';
import InfoCards from '../components/InfoCards';
import NewsLetterBox from '../components/NewsLetterBox';

const Home = () => {
  return (
    <div className="relative h-screen w-screen">
      {/* Background 3D Canvas */}
      <div className="absolute inset-0 z-0">
        <Canvas className="w-full h-full">
          <Earth />
        </Canvas>
      </div>

      {/* Foreground Content */}
      <div className="absolute inset-0 z-10">
        <Hero />
        <InfoCards />
        <NewsLetterBox />
      </div>
    </div>
  );
};

export default Home;