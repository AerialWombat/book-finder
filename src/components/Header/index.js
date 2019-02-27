import React from "react";
import SearchBar from "../SearchBar";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.container}>
      <h1 className={styles.title}>Book Finder</h1>
      <SearchBar />
    </header>
  );
};

export default Header;
