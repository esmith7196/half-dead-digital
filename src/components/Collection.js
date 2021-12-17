import React from 'react';

const Collection = ({ data }) => {
  return (
    <div className="collection-container">
      <div className="with-underline">
        <h1 className="title has-text-centered">The Half Dead Collection</h1>
        <span></span>
      </div>

      <div className="columns is-multiline">
        {data
          .filter(bear => bear.frontmatter.name !== 'NFT Steps')
          .map(bear => (
            <div key={bear.frontmatter.name} className="column is-4">
              <img
                src={bear.frontmatter.image.childImageSharp.fixed.srcWebp}
                alt={bear.frontmatter.name}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Collection;
