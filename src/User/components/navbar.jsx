import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {useState} from 'react'
import "../styles/navbar.css";
import logo from "../../assets/logo.png";
function Navbar({ searchTerm, setSearchTerm }) {
  

  return (
    
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
  <div className="container-fluid">
     {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            alt="TalentGrid Logo"
            className="navbar-logo"
          />
        </Link>
   
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 me-auto gap-5">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/contact">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/Job">Jobs</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/terms">Terms & Conditions</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/blogs">Blog</a>
        </li>
         </ul>
        
         <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3 ">
           <form className="search-form" role="search">
             
              <input
                className="form-control search-input"
                type="search"
                placeholder="Search jobs..."
                aria-label="Search jobs"
                 value={searchTerm}
                 onChange={(e) => setSearchTerm(e.target.value)}
              />

              <button className="search-icon-btn" type="submit" aria-label="Search">
                <i className="bi bi-search"></i>
              </button>
            </form>
         <li className="nav-item">
          <a className="btn btn-outline-primary " href="/login">Login</a>
        </li>
       
     
      </ul>
     
    </div>
  </div>
</nav>
    
  )
}

export default Navbar;