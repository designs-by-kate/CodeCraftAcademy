import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ setSelectedModule }) {
  // Function to handle module selection
  const handleModuleSelect = (module) => {
    setSelectedModule(module);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">Navbar</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item dropdown">
              <button className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Module
              </button>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {/* Pass module name to handleModuleSelect */}
                <li><button className="dropdown-item" onClick={() => handleModuleSelect('HTML')}>HTML</button></li>
                <li><button className="dropdown-item" onClick={() => handleModuleSelect('CSS')}>CSS</button></li>
                <li><button className="dropdown-item" onClick={() => handleModuleSelect('JavaScript')}>JavaScript</button></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
