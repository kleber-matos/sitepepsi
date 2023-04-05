import React from "react";
import logo from "./assets/logo.png";

function Menu() {
  return (
    <header>

      

        <nav className="logo">
          <img src={logo} />
        </nav>

        <nav className="textMenu">
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>What's New</li>
            <li>Newsletter</li>
            <li>Contact</li>
          </ul>
        </nav>

     

    </header>
  )

}


export default Menu;