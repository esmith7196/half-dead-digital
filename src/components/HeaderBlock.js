import React, { useState, useEffect } from 'react';
import video from '../img/video.mp4';
import { AiOutlineTwitter, AiOutlineYoutube, AiOutlineInstagram } from 'react-icons/ai';
import { BsDiscord } from 'react-icons/bs';

import artemisLogo from '../img/logos/artemis-logo.png';
import magicEdenLogo from '../img/logos/magic-eden-logo.svg';
import solanaLogo from '../img/logos/solana-logo.png';
import SolSeaLogo from '../img/logos/solsea-logo.svg';

const HeaderBlock = ({ data, images }) => {
  const [activeImage, setActiveImage] = useState(0);

  const socialLinks = [
    {
      url: 'https://twitter.com/halfdeaddigital',
      icon: () => <AiOutlineTwitter color={'#fff'} size={50} />,
    },
    {
      url: 'https://www.youtube.com/channel/UC_13dFM0WeKhNCsBTeuqs_Q',
      icon: () => <AiOutlineYoutube color={'#fff'} size={50} />,
    },
    {
      url: 'https://www.instagram.com/halfdeaddigital/channel/',
      icon: () => <AiOutlineInstagram color={'#fff'} size={50} />,
    },
    {
      url: 'https://discord.com/invite/KBsVb7ajxw',
      icon: () => <BsDiscord color={'#fff'} size={50} />,
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      //assign interval to a variable to clear it.
      if (!images[activeImage + 1]) {
        setActiveImage(0);
      } else {
        setActiveImage(activeImage + 1);
      }
    }, 300);

    return () => clearInterval(intervalId); //This is important
  }, [activeImage]);

  return (
    <div className="header-block" style={{ color: 'white' }}>
      <div className="columns is-7">
        <div className="column ">
          <img className="image" src={data.primaryLogo} alt="The Half Dead" />
          {/* <p>{data.description}</p> */}
        </div>
        <div className="column is-5">
          <div className="social-container">
            {socialLinks.map(itm => (
              <div>
                <a target="_blank" rel="noopener noreferrer" href={itm.url}>
                  {itm.icon()}
                </a>
              </div>
            ))}
          </div>

          {/* <p>{data.description}</p> */}

          {/* <img
            className="header-images"
            src={images[activeImage].frontmatter.image.childImageSharp.fixed.srcWebp}
            alt={images[activeImage].frontmatter.name}
          /> */}
        </div>
      </div>
      <div className="content">
        <div className="columns">
          <div className="column">
            <video width="100%" height="500" controls>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="column">
            <h4 className="about-title">The Half Dead Collection</h4>
            <div className="spacer">
              <a
                href="https://www.halfdeaddigitallivemint.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <button className="button btn">Now Minting</button>
              </a>
            </div>
            <p>
              This collection was created by Dan Yatsinko, inspired by the delicate balance between
              life and death. Half Dead is a collection of 6,666 randomly generated, unique artworks
              encoded on the Solana blockchain.
            </p>
            <div className="columns is-vcentered black-bg">
              <div className="column">
                <img src={artemisLogo} alt="artemisLogo" />
              </div>
              <div className="column">
                <img src={magicEdenLogo} alt="magicEdenLogo" />
              </div>
              <div className="column">
                <img src={solanaLogo} alt="solanaLogo" />
              </div>
              <div className="column">
                <img src={SolSeaLogo} alt="SolSeaLogo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBlock;
