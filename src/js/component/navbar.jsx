import React from "react";

const Navbar = () =>{
    return (
        <nav className="navbar navbar-expand-lg bg-dark  ">
  <div className="container-fluid mx-5">
    <a className="navbar-brand text-light" href="#"><b>Start Bootstrap</b></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link text-light" aria-current="page" href="#"><b>Home</b></a>
        <a className="nav-link disabled" href="#"><b>About</b></a>
        <a className="nav-link disabled" href="#"><b>Services</b></a>
        <a className="nav-link disabled"><b>Contact</b></a>
      </div>
    </div>
  </div>
</nav>
    
    
    );
  }

  export default Navbar;