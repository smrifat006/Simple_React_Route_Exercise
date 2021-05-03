import React from "react";
import { Link } from "react-router-dom";

const link = {
  color: "white",
  textDecoration: "none",
  backgroundColor: "green",
  padding: "8px",
  borderRadius: "5px",
  fontSize: "20px",
  fontStyle: "bold",
  margin: "20px",
};

function Nav() {
  return (
    <div>
      <nav style={{ backgroundColor: "crimson", padding: "30px" }}>
        <Link style={link} to="/">
          {" "}
          HOME{" "}
        </Link>
        <Link style={link} to="/about">
          ABOUT
        </Link>
        <Link style={link} to="/contact">
          CONTACT
        </Link>
      </nav>
    </div>
  );
}

export default Nav;
