import React from "react";
import {Link} from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <Link
            className="nav-link active white-text"
            aria-current="page"
            to="/">
            Home
          </Link>

          <Link className="nav-link active" aria-current="page" to="/login">
            User Support
          </Link>
        </div>
      </nav>
    </div>
  );
}
