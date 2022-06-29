import React from "react";
import { NavLink } from "react-router-dom";


const Nav = () => {

  return (
    <nav className="main-nav">
        {/* <NavLinks/> */}
       
        <h3>Logo</h3>
      <NavLink
        to="/"
        style={({ isActive }) => {
          return { color: isActive && "green" };
        }} >
            <li>Home</li>
      </NavLink>

      <NavLink
        to="/about"
        style={({ isActive }) => {
          return { color: isActive && "green" };
        }}
      >
        <li>About</li>
      </NavLink>

      <NavLink
        to="/cart"
        style={({ isActive }) => {
          return { color: isActive && "green" };
        }}
      >
        <li>Cart</li>
      </NavLink>
      <NavLink
        to="/events"
        style={({ isActive }) => {
          return { color: isActive && "green" };
        }}
      >
        <li>Events</li>
      </NavLink>

      {/* <ul className="nav-links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="about">About</NavLink>
        </li>
        <li>
          <NavLink to="events">Events</NavLink>
        </li>
      </ul> */}
    </nav>
  );
};

export default Nav;
