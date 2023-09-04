import React, { useState } from "react";
import ImageCard from "../components/ImageCard";
import styles from "./ImageGallery.module.scss";
import { Pagination } from "../components/Pagination";

const IMAGES_PER_PAGE = 12;

const ImageGallery = ({ images, getSelectedImage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastImage = currentPage * IMAGES_PER_PAGE;
  const indexOfFirstImage = indexOfLastImage - IMAGES_PER_PAGE;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  const clickPageNumber = (number) => {
    setCurrentPage(number);
  };

  return (
    <div className={styles.ImageGalleryContainer}>
      <div className={styles.ImageGallery}>
        {!!currentImages.length &&
          currentImages.map((image) => (
            <ImageCard image={image} getSelectedImage={getSelectedImage} />
          ))}
      </div>
      <Pagination
        imagesPerPage={IMAGES_PER_PAGE}
        totalImages={images.length}
        clickPageNumber={clickPageNumber}
        currentPage={currentPage}
      />
    </div>
  );
};

export default ImageGallery;
