import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import '../Navbar.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <h3>Social Event Management</h3>
            <p>
              The Social Events Management simplifies the process of planning,
              organizing, and executing events.
            </p>
          </div>
          <div className="col-md-4 text-center"> {/* Added text-center class here */}
            <h4>Connect with Us</h4>
            <div className="social-icons">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
              </a>
            </div>
          </div>
          <div className="col-md-4" >
            <h4 style={{ textAlign: 'center' }}>Contact Info</h4>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <p style={{ textAlign: 'center' }}>
                Address: Grant Road West
                <br />
                Email: socialevents@gmail.com
                <br />
                Phone: +123 456 7890
              </p>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
