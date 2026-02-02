import React from "react";
import { Link } from "react-router-dom";

function Navbar({ totalItems }) {
  return (
    <nav className="custom-navbar px-4">
      <Link to="/" className="brand text-white text-decoration-none">
        Shop 2 <span className="brand-circle">R</span>eact
      </Link>

      <Link
        to="/cart"
        className="cart-link text-white text-decoration-none ms-auto d-flex align-items-center"
      >
        <i className="bi bi-cart-fill me-2"></i>
        {totalItems} items
      </Link>
    </nav>
  );
}

export default Navbar;
