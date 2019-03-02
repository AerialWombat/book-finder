import React from "react";
import styles from "./BookCard.module.scss";

const BookCard = ({ volumeInfo }) => {
  return (
    <li className={styles.container}>
      <img
        className={styles.thumbnail}
        src={volumeInfo.imageLinks.smallThumbnail}
        alt="Cover art"
      />
      <h1 className={styles.title}>{volumeInfo.title}</h1>
      <div>
        <h2 className={styles.subtitle}>Author</h2>
        <p>{volumeInfo.authors[0]}</p>
      </div>
      <div>
        <h2 className={styles.subtitle}>Publishing Company</h2>{" "}
        <p>{volumeInfo.publisher}</p>
      </div>
      <div className={styles.subtitle}>
        <a
          target="_blank"
          href={volumeInfo.canonicalVolumeLink}
          rel="noopener noreferrer"
        >
          Learn More...
        </a>
      </div>
    </li>
  );
};

export default BookCard;
