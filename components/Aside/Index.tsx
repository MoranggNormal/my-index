import Button from "../hoverableButton/Index";
import styles from "./Index.module.scss";

import crypto from '../../assets/images/2844381_bitoin_btc_coin_crypto_icon.svg'
import dev from '../../assets/images/4519024_dev_icon.svg'

const Aside = () => {
  return (
    <>
      <aside className={styles.aside}>
       

        <Button image={crypto.src}>
        </Button>

        <Button image={dev.src}>
        </Button>

      </aside>
    </>
  );
};

export default Aside;
