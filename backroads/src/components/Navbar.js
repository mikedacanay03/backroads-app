import React from 'react'
import logo from '../images/logo.svg'
import socialLinks from '../data/data1.js'
import PageLinks from './CompUsingProps/PageLinks.js'
import SocialLink from './CompUsingProps/SocialLink.js'

const Navbar = () => {
  return (
    
       <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        
        {/* passing the props to className from the PageLinks components */}
         {/* passed the className that are used in css */}
        <PageLinks parentClass='nav-links' itemClass='nav-link' />

        <ul className="nav-icons">
            {socialLinks.map((link)=>{
                return (
                  // passing the props from SocialLink component
                     <SocialLink key={link.id} {...link} itemClass='nav-icon' />
                )
            })} 
            </ul>
      </div>
    </nav>

  )
}

export default Navbar
