import React from 'react'
import Title from './CompUsingProps/Title.js'
import toursData from '../data/toursData'
 import Tour from './CompUsingProps/Tour.js'

const Tours = () => {
  return (
  
    <section className="section" id="tours">
      <Title title='featured' subtitle='tours'/>

      <div className="section-center featured-center">
        {toursData.map((data)=>{
          return (
             // pass the id and get the data from the map params (used spread operator)
             <Tour key={data.id} {...data} />
          )
        })}
       
      </div>
    </section>
  )
}

export default Tours
