import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import cryptoData from "../../utils/cryptoData";
import convertEpoche from "../../utils/convertEpoche"


import Button from "../hoverableButton/Index";

import bitcoin from "../../assets/images/2844381_bitoin_btc_coin_crypto_icon.svg";
import ethereum from "../../assets/images/2907504_coin_cryptocurrency_eth_ethereum_icon.svg";

import styles from "./Index.module.scss";
import axios from "axios";

// API's

const baseURL =
  "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,LTC&tsyms=USD,BRL";
// BTC //
const getBTCUSDHistoryInMinutes =
  "https://min-api.cryptocompare.com/data/v2/histominute?fsym=BTC&tsym=USD&limit=60";
const getBTCBRLHistoryInMinutes = 
  "https://min-api.cryptocompare.com/data/v2/histominute?fsym=BTC&tsym=BRL&limit=60";


// GET TOP 5 CRYPTO MARKET CAP //
const getTopFive = (currency: string) => {
  return `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=5&tsym=${currency}`; 
}


// COMPONENT

const Aside = () => {
  const [price, setPrice] = useState<any>(null);
  const lastUpdate = new Date().toTimeString().slice(0,5);

  // FETCH API - PRICE AND TIME HISTORY
  const getBTCUSDHistory = useFetch<any>(getBTCUSDHistoryInMinutes);
  const getBTCBRLHistory = useFetch<any>(getBTCBRLHistoryInMinutes);


  const getTopFiveUSD = useFetch<any>(getTopFive("USD"))
  const getTopFiveBRL = useFetch<any>(getTopFive("BRL"))

  // GET PRICES
  const pricesBTCUSD = getBTCUSDHistory?.data?.Data.Data.map((obj: any) => obj.high);
  const pricesBTCBRL = getBTCBRLHistory?.data?.Data.Data.map((obj: any) => obj.high);

  
  
  // CONVERT UNIX TIMESTAMP TO CURRENT DATE
  const timesBTCBRL = getBTCBRLHistory?.data?.Data.Data.map((obj: any) => convertEpoche(obj.time));
  const timesBTCUSD = getBTCUSDHistory?.data?.Data.Data.map((obj: any) => convertEpoche(obj.time));


  // GRAPH PATTERN
  const dataBTCUSD = cryptoData(
    timesBTCUSD,
    `Change per hour: ${getTopFiveUSD.data?.Data[0].DISPLAY.USD.CHANGEHOUR}%`,
    pricesBTCUSD,
    "#fb8500",
    "#fb86001f"
  );
  const dataBTCBRL = cryptoData(
    timesBTCBRL,
    `Change per hour: ${price?.DISPLAY.BTC.BRL.CHANGEPCTHOUR}%`,
    pricesBTCBRL,
    "#210ebc",
    "#219dbc2a"
  );



  // CRYPTO DATA
  const cryptoPrices = [
    {
      image: `https://www.cryptocompare.com/${getTopFiveUSD.data?.Data[0].CoinInfo.ImageUrl}`,
      currencyName: getTopFiveUSD.data?.Data[0].CoinInfo.FullName,
      lastUpdate: lastUpdate,
      priceBRL: getTopFiveBRL.data?.Data[0].DISPLAY.BRL.PRICE,
      priceUSD: getTopFiveUSD.data?.Data[0].DISPLAY.USD.PRICE,
      lowPriceBRL: getTopFiveBRL.data?.Data[0].DISPLAY.BRL.LOW24HOUR,
      lowPriceUSD: getTopFiveUSD.data?.Data[0].DISPLAY.USD.LOW24HOUR,
      highPriceBRL: getTopFiveBRL.data?.Data[0].DISPLAY.BRL.HIGH24HOUR,
      highPriceUSD: getTopFiveUSD.data?.Data[0].DISPLAY.USD.HIGH24HOUR,
      dataBTCBRL: dataBTCUSD,
      dataBTCUSD: dataBTCBRL,
    },
    {
      image: `https://www.cryptocompare.com/${getTopFiveUSD.data?.Data[1].CoinInfo.ImageUrl}`,
      currencyName: getTopFiveUSD.data?.Data[1].CoinInfo.FullName,
      lastUpdate: lastUpdate,
      priceBRL: getTopFiveBRL.data?.Data[1].DISPLAY.BRL.PRICE,
      priceUSD: getTopFiveUSD.data?.Data[1].DISPLAY.USD.PRICE,
      lowPriceBRL: getTopFiveBRL.data?.Data[1].DISPLAY.BRL.LOW24HOUR,
      lowPriceUSD: getTopFiveUSD.data?.Data[1].DISPLAY.USD.LOW24HOUR,
      highPriceBRL: getTopFiveBRL.data?.Data[1].DISPLAY.BRL.HIGH24HOUR,
      highPriceUSD: getTopFiveUSD.data?.Data[1].DISPLAY.USD.HIGH24HOUR,
      dataBTCBRL: dataBTCUSD,
      dataBTCUSD: dataBTCBRL,
    },
    {
      image: `https://www.cryptocompare.com/${getTopFiveUSD.data?.Data[2].CoinInfo.ImageUrl}`,
      currencyName: getTopFiveUSD.data?.Data[2].CoinInfo.FullName,
      lastUpdate: lastUpdate,
      priceBRL: getTopFiveBRL.data?.Data[2].DISPLAY.BRL.PRICE,
      priceUSD: getTopFiveUSD.data?.Data[2].DISPLAY.USD.PRICE,
      lowPriceBRL: getTopFiveBRL.data?.Data[2].DISPLAY.BRL.LOW24HOUR,
      lowPriceUSD: getTopFiveUSD.data?.Data[2].DISPLAY.USD.LOW24HOUR,
      highPriceBRL: getTopFiveBRL.data?.Data[2].DISPLAY.BRL.HIGH24HOUR,
      highPriceUSD: getTopFiveUSD.data?.Data[2].DISPLAY.USD.HIGH24HOUR,
      dataBTCBRL: dataBTCUSD,
      dataBTCUSD: dataBTCBRL,
    },
    {
      image: `https://www.cryptocompare.com/${getTopFiveUSD.data?.Data[3].CoinInfo.ImageUrl}`,
      currencyName: getTopFiveUSD.data?.Data[3].CoinInfo.FullName,
      lastUpdate: lastUpdate,
      priceBRL: getTopFiveBRL.data?.Data[3].DISPLAY.BRL.PRICE,
      priceUSD: getTopFiveUSD.data?.Data[3].DISPLAY.USD.PRICE,
      lowPriceBRL: getTopFiveBRL.data?.Data[3].DISPLAY.BRL.LOW24HOUR,
      lowPriceUSD: getTopFiveUSD.data?.Data[3].DISPLAY.USD.LOW24HOUR,
      highPriceBRL: getTopFiveBRL.data?.Data[3].DISPLAY.BRL.HIGH24HOUR,
      highPriceUSD: getTopFiveUSD.data?.Data[3].DISPLAY.USD.HIGH24HOUR,
      dataBTCBRL: dataBTCUSD,
      dataBTCUSD: dataBTCBRL,
    },
    {
      image: `https://www.cryptocompare.com/${getTopFiveUSD.data?.Data[4].CoinInfo.ImageUrl}`,
      currencyName: getTopFiveUSD.data?.Data[4].CoinInfo.FullName,
      lastUpdate: lastUpdate,
      priceBRL: getTopFiveBRL.data?.Data[4].DISPLAY.BRL.PRICE,
      priceUSD: getTopFiveUSD.data?.Data[4].DISPLAY.USD.PRICE,
      lowPriceBRL: getTopFiveBRL.data?.Data[4].DISPLAY.BRL.LOW24HOUR,
      lowPriceUSD: getTopFiveUSD.data?.Data[4].DISPLAY.USD.LOW24HOUR,
      highPriceBRL: getTopFiveBRL.data?.Data[4].DISPLAY.BRL.HIGH24HOUR,
      highPriceUSD: getTopFiveUSD.data?.Data[4].DISPLAY.USD.HIGH24HOUR,
      dataBTCBRL: dataBTCUSD,
      dataBTCUSD: dataBTCBRL,
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

  console.log(getTopFiveUSD.data?.Data);
  

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
