import React from "react";
import SearchBar from "../SearchBar";
import styles from "./Header.module.scss";

const Header = ({ searchChange, fetchVolumes }) => {
  return (
    <header className={styles.container}>
      <h1 className={styles.title}>Book Finder</h1>
      <SearchBar searchChange={searchChange} fetchVolumes={fetchVolumes} />
    </header>
  );
};

export default Header;
