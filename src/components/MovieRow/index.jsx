import React from 'react'
import './style.css'

const imgURL = import.meta.env.VITE_IMG;

export const MovieRow = ({title, items}) => {
  return (
    <div>
      <h2>{title}</h2>
      <div className="movieRow--listarea">
        {items.results.length > 0 &&
          items.results.map((item, key) => (
            <img src={imgURL + item.poster_path} />
          ))  
        }
      </div>
    </div>
  )
}
