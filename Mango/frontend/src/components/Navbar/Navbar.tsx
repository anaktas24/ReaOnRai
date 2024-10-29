// src/components/Navbar.tsx
import React, { useState } from 'react'
import { Link, /*useLocation*/ useNavigate } from 'react-router-dom'
import { faHome, faBook, faGavel, faUsers, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navbar.css'

type NavigationProps = { 
    content?: JSX.Element
}

const Navigationbar = (props: NavigationProps) =>{
  const [redirectToHome, setRedirectHome] = useState<boolean>(false)
  //const location = useLocation()
  const navigate = useNavigate()
  
  const redirectHome = () => {
      
      setRedirectHome(true)
    }
    if (redirectToHome) {
        setRedirectHome(false);
        navigate("/home");
      }
    
        return (
            <div className="navbar">
              <div className="sidebar">
                <Link
                to={'/home'}
                onClick={(e) => {
                    e.preventDefault()
                    redirectHome()
                }}
                />
                <div className={`innercontainer-content ${location.pathname === '/einstellungen' && "settings"}`}>{props.content}</div>

        <a href="#home" className="nav-item">
            <FontAwesomeIcon icon={faHome} className="icon" />
            
        </a>
        <a href="#resources" className="nav-item">
            <FontAwesomeIcon icon={faBook} className="icon" />
        </a>
        <a href="#legal" className="nav-item">
            <FontAwesomeIcon icon={faGavel} className="icon" />
        </a>
        <a href="#community" className="nav-item">
            <FontAwesomeIcon icon={faUsers} className="icon" />
        </a>
        <a href="#profile" className="nav-item">
            <FontAwesomeIcon icon={faUser} className="icon" />
        </a>
        </div>
    </div>
  );
  
};

export default Navigationbar;