import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Item from './pages/Item'
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import NavBar from "./components/Navbar"
import Footer from "./components/Footer"
import SearchBar from "./components/SearchBar"
//import { ToastContainer,toast } from "react-toastify"
//import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      {/*<ToastContainer/>*/}
      <NavBar/>
      <SearchBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/item/:itemId" element={<Item/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      <Footer/>
    </div>
    
  )
}

export default App