import * as React from 'react';
import instagram from '../img/social/instagram.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <div className="footer-link">
          <a href="https://www.instagram.com/halfdeaddigital" alt="Half Dead Digital">
            Instagram
          </a>
        </div>

        <div className="footer-link">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://solo.to/nycrypto"
            alt="nycrypto"
          >
            NYCrypto
          </a>
        </div>
        <dv className="footer-link">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/halfdeaddigital"
            alt="halfdeaddigital"
          >
            Twitter
          </a>
        </dv>
      </div>
    </footer>
  );
};

export default Footer;
