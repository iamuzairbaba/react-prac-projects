import React from "react";

const Search = ({ search, setSearch, handleSearch }) => {
  return (
    <div className="search-input">
      <input
        type="text"
        placeholder="Search for a city"
        name="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button onClick={handleSearch}> Search </button>
    </div>
  );
};

export default Search;
