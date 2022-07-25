import {NavLink} from 'react-router-dom'

import "./syle.css";

export const Header = ({ black }) => {
  return (
    <header className={black ? "black" : ""}>
      <div className="header--left">
        <div className="header--logo">
          <a href="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
              alt=""
            />
          </a>

          <span>
            <NavLink
              to="/movies"
            >
              Movies
            </NavLink>
          </span>
          <span>
            <NavLink
              to="/movies"
            >
              Series
            </NavLink>
          </span>
        </div>

        
        
      </div>

      <div className="header--right">
        <div className="header--user">
          <a href="/">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPsVAeFlYeYOEUzb3TV1ML91_LPkkFML5lRQcMdr9nQu2CqO-WzT-RLmkM5_cOKvkaBkI&usqp=CAU"
              alt=""
            />
          </a>
        </div>
      </div>
    </header>
  );
};
