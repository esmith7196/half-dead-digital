import React from 'react';

const AboutBlock = ({ data }) => {
  return (
    <div className="columns columns__about">
      <div className="column is-4">
        <img src={data.aboutImage} alt="" />
      </div>
      <div className="column">
        <div className="about-content">
          <h2 className="about-title">{data.aboutTitle}</h2>
          <p className="about-drop-date">Drop Date: {data.dropDate}</p>
          <p className="about-desc">{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutBlock;
