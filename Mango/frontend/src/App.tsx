import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import correctly
import Navbar from './components/Navbar'
import About from './pages/About';
import Home from './pages/Home'

const App: React.FC = () => {
  return (
    <Router> {/* Use BrowserRouter to wrap the entire app */}
      <Navbar />
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;