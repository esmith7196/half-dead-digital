import * as React from 'react';
import instagram from '../img/social/instagram.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <div className="footer-link">
          <a href="https://www.instagram.com/halfdeaddigital" alt="Half Dead Digital">
            @halfdeaddigital
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
      </div>
    </footer>
  );
};

export default Footer;
