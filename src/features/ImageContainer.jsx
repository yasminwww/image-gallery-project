import React, { useEffect, useState } from "react";
import { getImagesList } from "../network/imagesApi";
import styles from "./ImageContainer.module.scss";
import ImageGallery from "./ImageGallery";
import Overlay from "../components/Overlay";

const ImageContainer = () => {
  const [images, setImages] = useState([]);
  const [openImage, setOpenImage] = useState(null);

  const fetchImages = async () => {
    try {
      const imageList = await getImagesList();
      setImages(imageList.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!images.length) {
      fetchImages();
    }
  }, []);

  const getSelectedImage = (image) => {
    setOpenImage(image);
  };

  const closeImage = () => {
    setOpenImage(null);
  };

  return (
    <>
      <div className={styles.ImageContainer}>
        <ImageGallery images={images} getSelectedImage={getSelectedImage} />
      </div>
      <Overlay selectedImage={openImage} close={closeImage} />
    </>
  );
};

export default ImageContainer;
