import React from 'react';
import './SearchBar.css';

import '@fortawesome/fontawesome-free/css/all.min.css';

const SearchBar = () => {
  return (
    <div className="search-box">
     <button className="btn-search">
  <i className="fas fa-search"></i>
</button>
      <input type="text" className="input-search" placeholder="Type to Search..."/>
    </div>
  );
};

export default SearchBar;
