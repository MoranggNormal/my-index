import axios from "axios";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import convertEpoche from "./convertEpoche";
import cryptoData from "./cryptoData";

import bitcoin from "../assets/images/2844381_bitoin_btc_coin_crypto_icon.svg";
import ethereum from "../assets/images/2907504_coin_cryptocurrency_eth_ethereum_icon.svg";


// API's

const baseURL =
  "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH&tsyms=USD,BRL";
// BTC //
const getBTCUSDHistoryInMinutes =
  "https://min-api.cryptocompare.com/data/v2/histominute?fsym=BTC&tsym=USD&limit=60";
const getBTCBRLHistoryInMinutes =
  "https://min-api.cryptocompare.com/data/v2/histominute?fsym=BTC&tsym=BRL&limit=60";
// ETH //
  const getETHUSDHistoryInMinutes =
  "https://min-api.cryptocompare.com/data/v2/histominute?fsym=ETH&tsym=USD&limit=60";
  const getETHBRLHistoryInMinutes =
  "https://min-api.cryptocompare.com/data/v2/histominute?fsym=ETH&tsym=BRL&limit=60";


const cryptoPattern = () => {
    
    const [price, setPrice] = useState<any>(null);
    const lastUpdate = new Date().toTimeString().slice(0,5);
  
    // FETCH API - PRICE AND TIME HISTORY
    const getBTCUSDHistory = useFetch<any>(getBTCUSDHistoryInMinutes);
    const getBTCBRLHistory = useFetch<any>(getBTCBRLHistoryInMinutes);
  
    const getETHUSDHistory = useFetch<any>(getETHUSDHistoryInMinutes);
    const getETHBRLHistory = useFetch<any>(getETHBRLHistoryInMinutes);
  
    // GET PRICES
    const pricesBTCUSD = getBTCUSDHistory?.data?.Data.Data.map((obj: any) => obj.high);
    const pricesBTCBRL = getBTCBRLHistory?.data?.Data.Data.map((obj: any) => obj.high);
  
    const pricesETHUSD = getETHUSDHistory?.data?.Data.Data.map((obj: any) => obj.high);
    const pricesETHBRL = getETHBRLHistory?.data?.Data.Data.map((obj: any) => obj.high);
    
    
    // CONVERT UNIX TIMESTAMP TO CURRENT DATE
    const timesBTCBRL = getBTCBRLHistory?.data?.Data.Data.map((obj: any) => convertEpoche(obj.time));
    const timesBTCUSD = getBTCUSDHistory?.data?.Data.Data.map((obj: any) => convertEpoche(obj.time));
  
    const timesETHUSD = getETHUSDHistory?.data?.Data.Data.map((obj: any) => convertEpoche(obj.time));
    const timesETHBRL = getETHBRLHistory?.data?.Data.Data.map((obj: any) => convertEpoche(obj.time));
  
    // GRAPH PATTERN
    const dataBTCUSD = cryptoData(
      timesBTCUSD,
      `Change per hour: ${price?.DISPLAY.BTC.USD.CHANGEPCTHOUR}%`,
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
    const dataETHUSD = cryptoData(
      timesETHUSD,
      `Change per hour: ${price?.DISPLAY.ETH.USD.CHANGEPCTHOUR}%`,
      pricesETHUSD,
      "#fb8500",
      "#fb86001f"
    );
    const dataETHBRL = cryptoData(
      timesETHBRL,
      `Change per hour: ${price?.DISPLAY.ETH.BRL.CHANGEPCTHOUR}%`,
      pricesETHBRL,
      "#210ebc",
      "#219dbc2a"
    );
  
  
    // CRYPTO DATA
    const cryptoPrices = [
      {
        image: bitcoin.src,
        currencyName: "BITCOIN",
        lastUpdate: lastUpdate,
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
        lastUpdate: lastUpdate,
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
  
  

    return cryptoPrices
}

export default cryptoPattern