import Image from "next/image";
import React from "react";

import styles from "./Index.module.scss";

interface Props {
  children?: React.ReactNode;
  image: string;
}

const Button: React.FC<Props> = ({ children, image }) => {
  return (
    <>
    <div className={styles.button}>
      <button>
        <Image src={image} width="32" height="32"></Image>
      </button>
      <div className={styles.info}>
          <h3>BITCOIN</h3>
          <hr />
          <small>&#183; $323,4356</small>
          <p>O Bitcoin está valendo o olho do c++</p>
      </div>
      </div>
    </>
  );
};

export default Button;
