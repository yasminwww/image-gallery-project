import React from "react";
import styles from "./Overlay.module.scss";

const Overlay = ({ selectedImage, close }) => {
  if (!selectedImage) return;
  const { download_url, author } = selectedImage;

  return (
    <div className={styles.OverlayContainer}>
      {download_url && (
        <div className={styles.ImageContainer}>
          <div className={styles.OverlayImage}>
            <img src={download_url} alt="artistic photograph" />
            <p>Author: {author}</p>
          </div>
          <button
            className={styles.OverlayCloseBtn}
            onClick={close}
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#fff"
              className={styles.CloseSvg}
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Overlay;
