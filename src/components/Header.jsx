import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.Header}>
      <img
        width="48"
        height="48"
        src="https://img.icons8.com/sf-regular/48/image.png"
        alt="icon"
      />
      <h1>Image gallery</h1>
    </header>
  );
};

export default Header;
