import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar bg-dark">
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active-navlink">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/stock" activeClassName="active-navlink">
            Stock
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
