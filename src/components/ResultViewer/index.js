import React from "react";
import BookCard from "../BookCard";
import styles from "./ResultViewer.module.scss";

const ResultViewer = ({ volumes }) => {
  return (
    <main className={styles.container}>
      <h1>Thing!</h1>

      {volumes.map(volume => {
        return <BookCard volumeInfo={volume.volumeInfo} />;
      })}
    </main>
  );
};

export default ResultViewer;
