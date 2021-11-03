import React, { useState, useEffect } from 'react';

const HeaderBlock = ({ data, images }) => {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      //assign interval to a variable to clear it.
      if (!images[activeImage + 1]) {
        setActiveImage(0);
      } else {
        setActiveImage(activeImage + 1);
      }
    }, 250);

    return () => clearInterval(intervalId); //This is important
  }, [activeImage]);

  return (
    <div className="header-block container" style={{ color: 'white' }}>
      <div className="columns">
        <div className="column">
          <img className="image" src={data.primaryLogo} alt="The Half Dead" />
          <p>{data.description}</p>
        </div>
        <div className="column">
          <img
            src={images[activeImage].frontmatter.image.childImageSharp.fixed.srcWebp}
            alt={images[activeImage].frontmatter.name}
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderBlock;
