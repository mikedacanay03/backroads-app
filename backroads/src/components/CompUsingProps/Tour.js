// this component is using props to pass into Tours.js 
import React from 'react'


const Tour = ({img,title,text,icon,location,days,price,date}) => {
  return (
    <article className="tour-card">
          <div className="tour-img-container">
            <img src={img} class="tour-img" alt={title} />
            <p className="tour-date">{date}</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">
              <h4>{title}</h4>
            </div>
            <p>
             {text}
            </p>
            <div className="tour-footer">
              <p>
                <span><i className={icon}></i></span> {location}
              </p>
              <p>{days}</p>
              <p>{price}</p>
            </div>
          </div>
        </article>
  )
}

export default Tour
