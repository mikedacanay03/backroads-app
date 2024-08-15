import React from 'react'
// import pageLinks from '../data/data.js'
import socialLinks from '../data/data1.js'
import PageLinks from './CompUsingProps/PageLinks.js'
import SocialLink from './CompUsingProps/SocialLink.js'

const Footer = () => {
  return (
    <footer className="section footer">

      {/* passing the props to className from the PageLinks components */}
      {/* passed the className that are used in css */}
      <PageLinks parentClass='footer-links' itemClass='footer-link' />
      
      <ul className="footer-icons">
        {socialLinks.map((data)=>{
          return (
          <SocialLink key={data.id} {...data} itemClass='footer-icon' />
          )
        })}
       
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  )
}

export default Footer
