// Import React and necessary MDB components
import React, { useEffect } from 'react';
import { Collapse, Ripple, initMDB } from 'mdb-ui-kit';
import 'mdb-ui-kit/css/mdb.min.css'; // Ensure MDB CSS is imported

const Navbar = () => {
  useEffect(() => {
    // Initialize MDB components
    initMDB({ Collapse, Ripple });
  }, []);

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <a className="navbar-brand" href="#">Navbar</a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">Disabled</a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                type="search"
                className="form-control me-2"
                placeholder="Type query"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-primary"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
