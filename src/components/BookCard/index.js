import React from "react";
import styles from "./BookCard.module.scss";

const BookCard = ({ volumeInfo }) => {
  return (
    <article>
      <div>
        <img src={volumeInfo.imageLinks.smallThumbnail} alt="Cover art" />
        <p>Title: {volumeInfo.title}</p>
        <p>Author: {volumeInfo.authors[0]}</p>
        <p>Publishing Company: {volumeInfo.publisher}</p>
        <p>
          <a
            target="_blank"
            href={volumeInfo.canonicalVolumeLink}
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        </p>
      </div>
    </article>
  );
};

export default BookCard;
