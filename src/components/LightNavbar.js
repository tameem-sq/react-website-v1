import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LightNavbar.css';

function Navbar() {

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    
    <>
      <nav className='lightnavbar'>

        <div className='navbar-container'>
          <Link to='/' className='navbar-logo-light' onClick={closeMobileMenu}>
            Hi, I'm Tameem
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/light-mode' className='nav-links-light' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/experience-light-mode'
                className='nav-links-light'
                onClick={closeMobileMenu}
              >
                Experience
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/education-light-mode'
                className='nav-links-light'
                onClick={closeMobileMenu}
              >
                Education
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                  to='/'
                  className='nav-links-light'
                  onClick={closeMobileMenu}
              >
                Dark Mode
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
    
  );
}

export default Navbar;
