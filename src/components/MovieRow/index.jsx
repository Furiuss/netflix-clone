import React from 'react'
import './style.css'

const imgURL = import.meta.env.VITE_IMG;

export const MovieRow = ({title, items}) => {
  return (
    <div>
      <h2>{title}</h2>
      <div className="movieRow--listarea">
        <div className="movieRow-list">
          {items.results.length > 0 &&
            items.results.map((item, key) => (              
                <div className="movieRow--item">
                  <img src={imgURL + item.poster_path} />
                </div>
          ))}          
        </div>
      </div>
    </div>
  )
}
