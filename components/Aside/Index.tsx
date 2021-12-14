import { useEffect, useState } from "react";
import Button from "../hoverableButton/Index";

import bitcoin from "../../assets/images/2844381_bitoin_btc_coin_crypto_icon.svg";
import ethereum from "../../assets/images/2907504_coin_cryptocurrency_eth_ethereum_icon.svg";

import styles from "./Index.module.scss";
import axios from "axios";

const baseURL =
  "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH&tsyms=USD,BRL";

const Aside = () => {
  const [price, setPrice] = useState<any>(null);

  const btc = [
    {
      image: bitcoin.src,
      currencyName: "BITCOIN",
      lastUpdate: price?.DISPLAY.BTC.BRL.LASTUPDATE,
      priceBRL: price?.DISPLAY.BTC.BRL.PRICE,
      priceUSD: price?.DISPLAY.BTC.USD.PRICE,
      lowPriceBRL: price?.DISPLAY.BTC.BRL.LOW24HOUR,
      lowPriceUSD: price?.DISPLAY.BTC.USD.LOW24HOUR,
      highPriceBRL: price?.DISPLAY.BTC.BRL.HIGH24HOUR,
      highPriceUSD: price?.DISPLAY.BTC.USD.HIGH24HOUR,
    },
    {
      image: ethereum.src,
      currencyName: "ETHEREUM",
      lastUpdate: price?.DISPLAY.ETH.BRL.LASTUPDATE,
      priceBRL: price?.DISPLAY.ETH.BRL.PRICE,
      priceUSD: price?.DISPLAY.ETH.USD.PRICE,
      lowPriceBRL: price?.DISPLAY.ETH.BRL.LOW24HOUR,
      lowPriceUSD: price?.DISPLAY.ETH.USD.LOW24HOUR,
      highPriceBRL: price?.DISPLAY.ETH.BRL.HIGH24HOUR,
      highPriceUSD: price?.DISPLAY.ETH.USD.HIGH24HOUR,
    },
  ];

  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setPrice(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <aside className={styles.aside}>
        {price &&
          btc.map(
            ({
              image,
              currencyName,
              lastUpdate,
              priceBRL,
              priceUSD,
              lowPriceBRL,
              lowPriceUSD,
              highPriceBRL,
              highPriceUSD,
            }) => {
              return (
                <Button
                  image={image}
                  currencyName={currencyName}
                  lastUpdate={lastUpdate}
                  priceBRL={priceBRL}
                  lowPriceBRL={lowPriceBRL}
                  highPriceBRL={highPriceUSD}
                  priceUSD={priceUSD}
                  lowPriceUSD={lowPriceUSD}
                  highPriceUSD={highPriceUSD}
                ></Button>
              );
            }
          )}
      </aside>
    </>
  );
};

export default Aside;
