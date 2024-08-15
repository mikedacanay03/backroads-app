// this component is using props to pass into Navbar.js and Footer.js
import React from 'react'

const SocialLink = ({href,icon, itemClass}) => {
  return (
    <li>
        <a href={href} target="_blank" rel='noreferrer' className={itemClass}>
        <i className={icon}></i>
      </a>
    </li>
  )
}

export default SocialLink
