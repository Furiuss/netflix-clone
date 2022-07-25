import { NavLink } from "react-router-dom";
import { FaSearch, FaBell } from "react-icons/fa";
import { RiArrowDownSFill } from "react-icons/ri";

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
        </div>
        <span>
          <NavLink to="/movies">Homepage</NavLink>
        </span>
        <span>
          <NavLink to="/movies">Movies</NavLink>
        </span>
        <span>
          <NavLink to="/movies">Series</NavLink>
        </span>
        <span>
          <NavLink to="/movies">Popular</NavLink>
        </span>
        <span>
          <NavLink to="/movies">My List</NavLink>
        </span>
      </div>

      <div className="header--right">
        <FaSearch className="icon" />
        <FaBell className="icon"/>
        <div className="header--user">
          <a href="/">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPsVAeFlYeYOEUzb3TV1ML91_LPkkFML5lRQcMdr9nQu2CqO-WzT-RLmkM5_cOKvkaBkI&usqp=CAU"
              alt=""
            />
          </a>
        </div>
        <div className="profile">
          <RiArrowDownSFill className="icon" />
        </div>
      </div>
    </header>
  );
};
