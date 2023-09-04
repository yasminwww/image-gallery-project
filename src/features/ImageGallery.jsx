import React from "react";
import ImageCard from "../components/ImageCard";
import styles from "./ImageGallery.module.scss";

const ImageGallery = ({ images, getSelectedImage }) => {
  return (
    <div className={styles.ImageGalleryContainer}>
      <div className={styles.ImageGallery}>
        {!!images.length &&
          images.map((image) => (
            <ImageCard image={image} getSelectedImage={getSelectedImage} />
          ))}
      </div>
    </div>
  );
};

export default ImageGallery;
