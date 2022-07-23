import React from 'react'
import './style.css'

export const FeatureMovie = ({item}) => {
  return (
    <div>
      {item &&
        <section className="featured" style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
          <div>{item.original_name}</div>
        </section>
      }
    </div>
  )
}