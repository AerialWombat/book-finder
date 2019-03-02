import React from "react";
import BookCard from "../BookCard";
import ErrorBoundary from "../ErrorBoundary";
import styles from "./ResultViewer.module.scss";

const ResultViewer = ({ volumes }) => {
  return (
    <main className={styles.container}>
      <ErrorBoundary>
        <ul>
          {volumes.map(volume => {
            return <BookCard volumeInfo={volume.volumeInfo} />;
          })}
        </ul>
      </ErrorBoundary>
    </main>
  );
};

export default ResultViewer;
