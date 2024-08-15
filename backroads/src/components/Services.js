import React from 'react'
import Title from './CompUsingProps/Title'
import servicesData from '../data/servicesData'
// import Service from '../CompUsingProps/Service'
import Service from './CompUsingProps/Service'

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title='our' subtitle='services'/>
    
    <div className="section-center services-center">
      {servicesData.map((data)=> {
        
        return (
          // pass the id and get the data from the map params (used spread operator)
           <Service key={data.id} {...data} />
        )
      })}
      
    </div>
  </section>
  )
}

export default Services
