import React from 'react'

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