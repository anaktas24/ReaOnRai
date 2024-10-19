import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import correctly
import Navbar from './components/Navbar/Navbar'
import About from './pages/About/About';
import Home from './pages/Home/Home'

const App: React.FC = () => {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Navbar />
    </Router>
  );
}

export default App;