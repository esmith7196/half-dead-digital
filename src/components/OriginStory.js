import React from 'react';

const OriginStory = ({ data }) => {
  return (
    <div className="content">
      <div
        dangerouslySetInnerHTML={{
          __html: data,
        }}
      />
      ;
    </div>
  );
};

export default OriginStory;
