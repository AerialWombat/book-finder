import React from "react";
import styles from "./ResultViewer.module.scss";

const ResultViewer = ({ volumes }) => {
  return (
    <main className={styles.container}>
      <h1>Thing!</h1>

      {volumes.map(volume => {
        return (
          <div>
            <img
              src={volume.volumeInfo.imageLinks.smallThumbnail}
              alt="Cover art"
            />
            <p>Title: {volume.volumeInfo.title}</p>
            <p>Author: {volume.volumeInfo.authors[0]}</p>
            <p>Publishing Company: {volume.volumeInfo.publisher}</p>
            <p>
              <a
                target="_blank"
                href={volume.volumeInfo.canonicalVolumeLink}
                rel="noopener noreferrer"
              >
                Learn More
              </a>
            </p>
          </div>
        );
      })}
    </main>
  );
};

export default ResultViewer;
