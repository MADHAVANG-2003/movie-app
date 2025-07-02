import React from 'react';
import Logo from '../../assets/logo.png';
import '../Navbar/Navbar.css';
import { NavLink } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { FaStar, FaFire  } from "react-icons/fa6";
import { MdUpcoming } from 'react-icons/md';	


const Navbar = ({title}) => {
  return (
    <div className="sidebar">
      <img src={Logo} className="sidebar-logo" alt="Logo" />
      <ul className="nav-links">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}><FaHome /> Home</NavLink>
        <NavLink to="/popular" className={({ isActive }) => isActive ? 'active' : ''}><FaFire  /> Popular Movies</NavLink>
        <NavLink to="/top" className={({ isActive }) => isActive ? 'active' : ''}><FaStar  /> Top Rated</NavLink>
        <NavLink to="/upcoming" className={({ isActive }) => isActive ? 'active' : ''}><MdUpcoming /> Upcoming Movies</NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
