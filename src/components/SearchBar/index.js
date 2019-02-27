import React from "react";
import styles from "./SearchBar.module.scss";

const SearchBar = () => {
  return (
    <form className={styles.searchForm}>
      <input
        className={styles.textInput}
        type="text"
        placeholder="book title..."
      />
      <input className={styles.submitBtn} type="submit" value="Search" />
    </form>
  );
};

export default SearchBar;
