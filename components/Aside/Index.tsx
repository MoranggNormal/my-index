import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import cryptoData from "../../utils/cryptoData";

import Button from "../hoverableButton/Index";

import bitcoin from "../../assets/images/2844381_bitoin_btc_coin_crypto_icon.svg";
import ethereum from "../../assets/images/2907504_coin_cryptocurrency_eth_ethereum_icon.svg";

import styles from "./Index.module.scss";
import axios from "axios";

// API's

const baseURL =
  "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH&tsyms=USD,BRL";
// BTC //
const getBTCUSDHistoryInMinutes =
  "https://min-api.cryptocompare.com/data/v2/histominute?fsym=BTC&tsym=USD&limit=10";
const getBTCBRLHistoryInMinutes =
  "https://min-api.cryptocompare.com/data/v2/histominute?fsym=BTC&tsym=BRL&limit=10";
// ETH //
  const getETHUSDHistoryInMinutes =
  "https://min-api.cryptocompare.com/data/v2/histominute?fsym=ETH&tsym=USD&limit=10";
  const getETHBRLHistoryInMinutes =
  "https://min-api.cryptocompare.com/data/v2/histominute?fsym=ETH&tsym=BRL&limit=10";

// COMPONENT

const Aside = () => {
  const [price, setPrice] = useState<any>(null);

  const getBTCUSDHistory = useFetch<any>(getBTCUSDHistoryInMinutes);
  const getBTCBRLHistory = useFetch<any>(getBTCBRLHistoryInMinutes);

  const getETHUSDHistory = useFetch<any>(getETHUSDHistoryInMinutes);
  const getETHBRLHistory = useFetch<any>(getETHBRLHistoryInMinutes);

  const pricesBTCUSD = getBTCUSDHistory?.data?.Data.Data.map((obj: any) => obj.high);
  const pricesBTCBRL = getBTCBRLHistory?.data?.Data.Data.map((obj: any) => obj.high);

  const pricesETHUSD = getETHUSDHistory?.data?.Data.Data.map((obj: any) => obj.high);
  const pricesETHBRL = getETHBRLHistory?.data?.Data.Data.map((obj: any) => obj.high);

  const dataBTCUSD = cryptoData(
    pricesBTCUSD,
    "USD",
    pricesBTCUSD,
    "#fb8500",
    "#fb86001f"
  );
  const dataBTCBRL = cryptoData(
    pricesBTCBRL,
    "BRL",
    pricesBTCBRL,
    "#210ebc",
    "#219dbc2a"
  );

  const dataETHUSD = cryptoData(
    pricesETHUSD,
    "USD",
    pricesETHUSD,
    "#fb8500",
    "#fb86001f"
  );
  const dataETHBRL = cryptoData(
    pricesETHBRL,
    "BRL",
    pricesETHBRL,
    "#210ebc",
    "#219dbc2a"
  );


  const cryptoPrices = [
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
      dataBTCBRL: dataBTCUSD,
      dataBTCUSD: dataBTCBRL,
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
      dataBTCBRL: dataETHUSD,
      dataBTCUSD: dataETHBRL,
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
          cryptoPrices.map(
            (
              {
                image,
                currencyName,
                lastUpdate,
                priceBRL,
                priceUSD,
                lowPriceBRL,
                lowPriceUSD,
                highPriceBRL,
                highPriceUSD,
                dataBTCUSD,
                dataBTCBRL,
              },
              index
            ) => {
              return (
                <Button
                  key={index}
                  image={image}
                  currencyName={currencyName}
                  lastUpdate={lastUpdate}
                  priceBRL={priceBRL}
                  lowPriceBRL={lowPriceBRL}
                  highPriceBRL={highPriceBRL}
                  priceUSD={priceUSD}
                  lowPriceUSD={lowPriceUSD}
                  highPriceUSD={highPriceUSD}
                  dataBTCBRL={dataBTCUSD}
                  dataBTCUSD={dataBTCBRL}
                ></Button>
              );
            }
          )}
      </aside>
    </>
  );
};

export default Aside;
