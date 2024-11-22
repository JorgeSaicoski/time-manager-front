import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({items}) => {
  return (
    <div className="navbar bg-secondary text-text-primary">
      <div className="flex-1">
        <ul className="menu menu-horizontal px-1 text-text-secondary">
          {Object.entries(items).map(([name, path]) => (
            <li key={name}>
              <NavLink
                to={path} 
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium hover:text-accent ${
                    isActive
                      ? 'bg-primary text-btn-primary-text'
                      : 'text-text-primary '
                  }`
                }
              >
                {name}  
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;