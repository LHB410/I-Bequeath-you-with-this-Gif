import React from 'react';
import Gif from './Gif';

const GifList = ({ gifIDs, setSelectedID }) => {
  return (
    <div className="gif-list">
      {gifIDs.map((id) => <Gif gifID={id} setSelectedID={setSelectedID} key={id} />) }
    </div>
  );
};

export default GifList;
