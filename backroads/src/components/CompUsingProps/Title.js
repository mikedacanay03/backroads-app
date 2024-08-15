//components using props for title and subtitle (about, services, tours)
import React from 'react'

const Title = ({title, subtitle}) => {
  return (
    <div class="section-title">
    <h2>{title} <span>{subtitle}</span></h2>
  </div>
  )
}

export default Title
