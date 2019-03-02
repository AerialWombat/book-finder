import React from "react";
import BookCard from "../BookCard";
import styles from "./ResultViewer.module.scss";

const ResultViewer = ({ volumes }) => {
  return (
    <main className={styles.container}>
      <ul>
        {volumes.map(volume => {
          return <BookCard volumeInfo={volume.volumeInfo} />;
        })}
      </ul>
    </main>
  );
};

export default ResultViewer;
