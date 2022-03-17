import React from 'react';

const SearchBar = ({ changeGifs }) => {
  const handleChange = (event) => {
    changeGifs(event.currentTarget.value);
  };
  return (
    <input className="form-search form-control" type="text" placeholder="Search for a gif" onChange={handleChange} />
  );
};

export default SearchBar;
