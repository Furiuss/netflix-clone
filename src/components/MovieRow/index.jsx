import React, {useState} from 'react'
import './style.css'
import {MdNavigateNext} from 'react-icons/md'
import {MdNavigateBefore} from 'react-icons/md'

const imgURL = import.meta.env.VITE_IMG;

export const MovieRow = ({title, items}) => {

  const [scrollX, setScrollX] = useState(0)

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2)
    if (x > 0) {
      x = 0
    };
    setScrollX(x);
  }

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2)
    let listW = items.results.length * 150;
     if((window.innerWidth - listW) > x) {
      x = (window.innerWidth - listW) - 60
     }
     setScrollX(x);
  }

  return (
    <div className="movieRow">
      <h2>{title}</h2>

      <div className="movieRow--left" onClick={handleLeftArrow}>
        <MdNavigateBefore style={{fontSize: 50}} />
      </div>

      <div className="movieRow--right" onClick={handleRightArrow}>
        <MdNavigateNext style={{fontSize: 50}} />
      </div>
      <div className="movieRow--listarea">
        <div className="movieRow--list" style={{
              marginLeft: scrollX,
              width: items.results.length * 150,
            }}>
          {items.results.length > 0 &&
            items.results.map((item, key) => (              
                <div key={key} className="movieRow--item">
                  <img src={imgURL + item.poster_path} />
                </div>
          ))}          
        </div>
      </div>
    </div>
  )
}
