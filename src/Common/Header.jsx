import React, { useEffect } from 'react'
import "./header.scss"
import logo from "../images/logo-1.svg"
import { Link } from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router-dom';


const Header = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/trending" ) {
      const trendingSection = document.getElementById("trending");
      if (trendingSection) {
        trendingSection.scrollIntoView();
      }
    }
  }, [location.pathname]);


  function handleClick() {
    const trendingSection = document.getElementById('trending');
    if (trendingSection) {
      trendingSection.scrollIntoView();
    }
  }
 
  return (
    <div className='header-container'>
      <div className='flex-box container'>
        <div className='logo-container'>
          <Link to="/">
          <img src={logo} alt="logo" /></Link></div>
        <div className='col mt-auto'>
          <ul className='row'>
            <li className='col' >
              <Link to="/trending" onClick={handleClick}>
              Allah's Name</Link>
            </li>
            <li className='col'>
            <Link to="/trending" onClick={handleClick}>
              Trending Name</Link>
            </li >
            <li className='col'> 
            <Link to="/trending" onClick={handleClick}>
            New Added</Link>
          </li>
            <li className='col' >
            <Link to="/trending" onClick={handleClick}>
            Polular Name</Link>
            </li>
            <li className='col' >
            <Link to="/trending" onClick={handleClick}>
            Quranic Name</Link>
            </li>
            <li className='col'>
            <div className="form-check form-switch mt-auto d-flex justify-content-end">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <span className='dark-mode'>Dark</span>
            </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}


export default Header