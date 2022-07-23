import React from 'react'
import './style.css'

export const FeatureMovie = ({item}) => {
  return (
    <div>
      {item &&
        <section className="featured">
          <div>{item.original_name}</div>
        </section>
      }
    </div>
  )
}