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
    }, 300);

    return () => clearInterval(intervalId); //This is important
  }, [activeImage]);

  return (
    <div className="header-block" style={{ color: 'white' }}>
      <div className="columns is-7">
        <div className="column ">
          <img className="image" src={data.primaryLogo} alt="The Half Dead" />
          <p>{data.description}</p>
        </div>
        <div className="column is-5">
          <img
            className="header-images"
            src={images[activeImage].frontmatter.image.childImageSharp.fixed.srcWebp}
            alt={images[activeImage].frontmatter.name}
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderBlock;
