import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Navbar.css';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = (e) => {
    e.preventDefault(); // Prevent the default link behavior
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDarkModeToggle = (isChecked) => {
    if (isChecked) {
      toast.info('Coming Soon', {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container py-2">
          <Link className="navbar-brand" to="/Home">
            Social Event Management
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse align-middle" id="navbarNav">
            <ul className="navbar-nav ms-auto nav_ul align-items-center">
              <li className="nav-item">
                <Link className="nav-link" to="/About">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/portfolio">
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  onClick={toggleDropdown}
                >
                  More
                </a>
                <ul
                  className={`dropdown-menu${isDropdownOpen ? ' show' : ''}`}
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="/">
                      Option 1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Option 2
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Option 3
                    </a>
                  </li>
                </ul>
              </li>
              <Link to="/">
                <div className="mx-3">
                  <button
                    type="button"
                    className="btn2 mx-2"
                    onClick={() => {
                      
                      toast.success('Logged out successfully', {
                        position: 'top-right',
                        autoClose: 3000, 
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                      });
                    }}
                  >
                    Log out
                  </button>
                </div>
              </Link>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                  onChange={(e) => handleDarkModeToggle(e.target.checked)}
                  
                />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                
                  Dark Mode
                </label>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
