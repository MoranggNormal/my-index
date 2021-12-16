import Button from "../hoverableButton/Index";

import cryptoPattern from "../../utils/cryptoPattern";

import styles from "./Index.module.scss";


// COMPONENT

const Aside = () => {

    const allData = cryptoPattern()

    return (
        <>
            <aside className={styles.aside}>
                {allData &&
                    allData.map(
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
