import Image from "next/image";
import React from "react";
import Chart from "../Chart/Index";

import styles from "./Index.module.scss";

interface Props {
  children?: React.ReactNode;
  image: string;
  currencyName: string;
  lastUpdate: string;
  priceBRL: string;
  priceUSD: string;
  lowPriceBRL: string;
  lowPriceUSD: string;
  highPriceBRL: string;
  highPriceUSD: string;
  graphDataUSD: any;
  graphDataBRL: any;
}

const Button: React.FC<Props> = ({
  children,
  image,
  currencyName,
  lastUpdate,
  priceBRL,
  priceUSD,
  lowPriceBRL,
  lowPriceUSD,
  highPriceBRL,
  highPriceUSD,
  graphDataUSD,
  graphDataBRL
}) => {
  return (
    <>
      <div className={styles.button}>
        <button>
          <Image src={image} width="32" height="32"></Image>
        </button>
        <div className={styles.info}>
          <div className={styles.text}>
          <h3>{currencyName}</h3>
          <hr />
          <p>
          Last Update: {' '}
            <small>{lastUpdate}</small>
          </p>
          <p>
          Price: {' '}
            <small>{priceBRL}</small>
            {' '} - {' '}
            <small>{priceUSD}</small>
          </p>
          <p>
          Lowest price on 24h: {' '} 
            <small>{lowPriceBRL}</small>
            {' '} - {' '}
            <small>{lowPriceUSD}</small>
          </p>
          <p>
          Highest price on 24h: {' '}
            <small>{highPriceBRL}</small>
            {' '} - {' '}
            <small>{highPriceUSD}</small>
          </p>
          </div>
          
          
          <Chart data={graphDataUSD}></Chart>
          <Chart data={graphDataBRL}></Chart>
        </div>
      </div>
    </>
  );
};

export default Button;
