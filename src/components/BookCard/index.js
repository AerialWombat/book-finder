import React from "react";
import styles from "./BookCard.module.scss";

const BookCard = ({ volumeInfo }) => {
  return (
    <li className={styles.container}>
      {volumeInfo.imageLinks ? (
        <img
          className={styles.thumbnail}
          src={volumeInfo.imageLinks.smallThumbnail}
          alt="Cover art"
        />
      ) : (
        <p className={styles.missingThumbnail}>Missing Image</p>
      )}
      <h1 className={styles.title}>
        {volumeInfo.title ? volumeInfo.title : "Missing title data"}
      </h1>
      <div>
        <h2 className={styles.subtitle}>Author(s)</h2>
        <div>
          {volumeInfo.authors ? (
            volumeInfo.authors.map(author => <p>{author}</p>)
          ) : (
            <p>Missing author data</p>
          )}
        </div>
      </div>
      <div>
        <h2 className={styles.subtitle}>Publishing Company</h2>{" "}
        <p>
          {volumeInfo.publisher
            ? volumeInfo.publisher
            : "Missing publisher data"}
        </p>
      </div>

      <a
        target="_blank"
        href={volumeInfo.canonicalVolumeLink}
        rel="noopener noreferrer"
      >
        Learn More...
      </a>
    </li>
  );
};

export default BookCard;
