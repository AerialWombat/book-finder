import React from "react";
import styles from "./SearchBar.module.scss";

const SearchBar = ({ searchChange, fetchVolumes }) => {
  return (
    <form className={styles.searchForm} onSubmit={fetchVolumes}>
      <input
        className={styles.textInput}
        name="searchQuery"
        type="text"
        placeholder="Search by book title, author, or ISBN... "
        onChange={searchChange}
      />
      <input className={styles.submitBtn} type="submit" value="Search" />
    </form>
  );
};

export default SearchBar;
