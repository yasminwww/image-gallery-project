import React from "react";
import styles from "./Pagination.module.scss";

export const Pagination = ({
  imagesPerPage,
  totalImages,
  clickPageNumber,
  currentPage,
}) => {
  console.log("currentPage: ", currentPage);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalImages / imagesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <ul className={styles.Pagination}>
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              className={`${styles.PageButton} ${
                currentPage === number ? styles.CurrentButton : ""
              }`}
              onClick={() => clickPageNumber(number)}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
