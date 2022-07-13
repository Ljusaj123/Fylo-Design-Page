import React from "react";
import { list } from "../const/NavbarList";
const Navbar = () => {
  return (
    <nav className="navigation">
      <div className="navigation-container">
        {list.map((li, index) => {
          return (
            <li className="list" key={index}>
              <a href="/" className="item">
                {li}
              </a>
            </li>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
