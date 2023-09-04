import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css"; // Blurring effect of loading images
import styles from "./ImageCard.module.scss";

const ImageCard = ({ image, getSelectedImage }) => {
  const { download_url, author } = image;
  const getImage = () => {
    getSelectedImage(image);
  };
  return (
    <div className={styles.ImageCard} onClick={getImage} key={download_url}>
      <div className={styles.ImageWrapper}>
        <LazyLoadImage
          src={download_url}
          height={200}
          width={200}
          alt="artistic photograph"
          effect="blur"
        />
      </div>
      <p className={styles.ImageCardAuthor}>{author}</p>
    </div>
  );
};

export default ImageCard;
