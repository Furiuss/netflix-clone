import React from 'react'
import './style.css'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const imgURL = import.meta.env.VITE_IMG;

export const MovieRow = ({title, items}) => {
  return (
    <div className="movieRow">
      <h2>{title}</h2>

      <div className="movieRow--left">
        <NavigateBeforeIcon style={{fontSize: 50}} />
      </div>

      <div className="movieRow--right">
        <NavigateNextIcon style={{fontSize: 50}} />
      </div>
      <div className="movieRow--listarea">
        <div className="movieRow--list">
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
