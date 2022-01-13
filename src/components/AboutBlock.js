import React from 'react';
import inventor from '../img/logos/inventor.png';
import { FaSpotify } from 'react-icons/fa';

const AboutBlock = ({ data }) => {
  return (
    <>
      <div className="columns columns__about">
        <div className="column is-4">
          <img src={data.aboutImage} alt="" />
        </div>
        <div className="column">
          <div className="about-content">
            <h2 className="about-title">{data.aboutTitle}</h2>
            <h2 className="subtitle">Origin Story</h2>
            <p className="about-desc">{data.aboutDescription}</p>
          </div>
        </div>
      </div>
      <div className="columns" style={{ marginTop: '40px' }}>
        <div className="column">
          <div style={{ background: 'rgba(0,0,0,.4)', padding: '10px' }}>
            <img src={inventor} alt="Inventor" />
          </div>
        </div>
        <div className="column">
          <h3 className="about-title">The Creator</h3>
          <div className="spacer content">
            <p>
              Danimal Lector is a Connecticut based artist whose focus for the past 20+ years was
              strictly music production and scoring. Dan - who is completely self taught - dove head
              first into graphic design 5 years ago in an attempt to get out of the corporate 9-5
              rat race. He is now the lead designer at a tech company called GoNation where his main
              job is to brand new and existing companies. The Half Dead world is the culmination of
              all of Dan’s passions - horror, graphics, music, animation/videos and sound design!
              You can check out some of his music here….
            </p>
          </div>

          <a
            href="https://open.spotify.com/artist/4ABo5W10eNgXbcp34npyWZ?si=co2VIyObTWqSAN2TmWJOYQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSpotify color="rgba(38, 215, 96)" size={60} />
          </a>
        </div>
      </div>
    </>
  );
};

export default AboutBlock;
