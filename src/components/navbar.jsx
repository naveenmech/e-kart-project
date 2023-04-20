import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
        <img 
          src="https://www.freepnglogos.com/uploads/flipkart-logo-png/flipkart-com-logo-internet-ltd-state-of-kerala-10.png"
          alt="https://www.freepnglogos.com/uploads/flipkart-logo-png/flipkart-com-logo-internet-ltd-state-of-kerala-10.png" id="flipimage"
        />
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/"> Shop </Link>

        <Link to="/cart">
          <ShoppingCart size={50} />
        </Link>
      </div>
    </div>
  );
};
