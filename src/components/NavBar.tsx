import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img
            src="/play-button.svg"
            alt="Logo"
            width="30"
            height="30"
            className="d-inline-block align-text-top"
          />
          Movie Finder
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" // fix target to match id
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                end
                to="/"
                className={({ isActive }) =>
                  `nav-link${isActive ? " active" : ""}`
                }
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/favourites"
                className={({ isActive }) =>
                  `nav-link${isActive ? " active" : ""}`
                }
              >
                Favourites
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/popular"
                className={({ isActive }) =>
                  `nav-link${isActive ? " active" : ""}`
                }
              >
                Popular
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle btn btn-link"
                id="navbarDropdownMenuLink"
                data-bs-toggle="dropdown" // Bootstrap 5
                aria-expanded="false"
                type="button"
              >
                Genres
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <NavLink className="dropdown-item" to="/genre/action">
                    Action
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/genre/adventure">
                    Adventure
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/genre/comedy">
                    Comedy
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
