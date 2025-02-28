import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";
import { Link } from "react-scroll";

export default function NavBar() {
  return (
    <nav className="navbar sticky-nav navbar-expand-lg bg-dark navbar-dark text-white">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="home">
          DigiLR
        </a>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        {/* <div className="collapse navbar-collapse" id="navbarNav"> */}
        <ul className="navbar-nav w-auto d-flex justify-content-center">
          <li className="nav-item mx-3">
            <Link className="nav-link cursor-pointer" to="home" spy={true} smooth={true} duration={300} offset={0}>Home</Link>
          </li>
          <li className="nav-item mx-3">
            {/* <a className="nav-link" href="#features" offset="-100">
              Features
            </a> */}
            <Link className="nav-link cursor-pointer" to="features" spy={true} smooth={true} offset={-100} duration={200}>Features</Link>
          </li>
          <li className="nav-item mx-3">
          <Link className="nav-link cursor-pointer" to="about" spy={true} smooth={true} offset={-100} duration={200}>About</Link>
          </li>
          <li className="nav-item mx-3">
          <Link className="nav-link cursor-pointer" to="contact" spy={true} smooth={true} offset={-100} duration={200}>Contact</Link>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2 rounded-pill"
            type="search"
            placeholder="Search..."
            aria-label="Search"
          />
          <button className="btn btn-primary" type="submit">
            Search
          </button>
        </form>
      </div>
      {/* </div> */}
    </nav>
  );
}
