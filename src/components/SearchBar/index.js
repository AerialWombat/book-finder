import React from "react";

const SearchBar = () => {
  return (
    <form>
      <input type="text" placeholder="book title..." />
      <input type="submit" value="Search" />
    </form>
  );
};

export default SearchBar;
