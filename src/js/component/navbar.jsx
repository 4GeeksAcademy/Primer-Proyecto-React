
import React from "react";

let Cabecera = () => {
  return (
    <nav className="navbar bg-dark">
      <div className="container-fluid dflex justify-content-space-between">
        <a className="navbar-brand text-white" href="#">
          <img src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg" alt="Logo" style={{ width: "30px" }} className="d-inline-block align-text-top text-white" />
          Bootstrap
        </a>
        <div className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link text-white active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
};

function PieDePagina() {
  return (
    <nav className="navbar bg-dark">
      <div className="container-fluid text-white fw-bold d-flex justify-content-center">
        <p>Made by<a href="http://www.4geeksacademy.com">RVSolutions</a>, 💟 withlove!</p>
      </div>
    </nav>
  );
}

export { PieDePagina, Cabecera };
