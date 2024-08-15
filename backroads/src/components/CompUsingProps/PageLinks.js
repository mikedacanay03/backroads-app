// components using props for pageLinks on Navbar.js and Footer.js
// used props on className for dynamic purpose

import React from 'react'
import pageLinks from '../../data/data'

const PageLinks = ({parentClass, itemClass}) => {
  return (
    <ul className={parentClass} id="nav-links">
    {pageLinks.map((page)=>{
        return (
            <li key={page.id}>
            <a href={page.href} className={itemClass}> {page.text} </a>
          </li>
        )
    })}
</ul>
  )
}

export default PageLinks
