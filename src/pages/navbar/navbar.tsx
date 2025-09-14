import { useState } from "react";
import "../../styles/navbar/navbar.css";
const Navbar = () => {
  const [sideBar, setSideBar] =useState(false);
  const ToggleNavbarSideBar = () => {
    setSideBar(!sideBar);
  }
  
  return (
    <nav className="navbar">
      {
      (<div className={`navbarSideBar ${sideBar ? 'open' : 'closed'} `}>
        <ul className="navbarSideBarList">
          <li>Home</li>
          <li>Library</li>
          <li>Downloads</li>
          <li>Settings</li>
        </ul>
      </div>)
      }
      <h3>ReadersParadise</h3>

      <svg
        className="hamburgerIcon"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        onClick={ToggleNavbarSideBar}
        
      >
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="18" x2="21" y2="18" />
        
      </svg>
      
    </nav>
  );
};
export default Navbar;
