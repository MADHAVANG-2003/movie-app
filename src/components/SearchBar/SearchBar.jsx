import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInput = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="search-wrapper">
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={handleInput}
      />
    </div>
  );
};

export default SearchBar;
