import { CSSProperties, MouseEventHandler } from "react";
import styles from "./Index.module.scss";

import Image from "next/image";

import close from '../../assets/images/1904654_cancel_close_cross_delete_reject_icon.svg';

type pos = {
    isOpen: boolean | CSSProperties,
    onClick: MouseEventHandler<HTMLButtonElement>,
}

const GoogleResults = ({isOpen, onClick}: pos) => {

    return (
        <>
        <section className={styles.googleResults}
            style={isOpen ? {top: '0', transition: '0.4s'} : {top: '-200vw', transition: '1.2s'}}
        >
            <button 
            className={styles.closeButton}
            onClick={onClick}>

                <Image src={close.src} width={32} height={32} />
            </button>

        </section>

        <section className={styles.results}
        style={isOpen ? {top: '50%', transition: '0.7s'} : {top: '-200vw', transition: '0.4s'}}>

        </section>

        </>
    )
}


export default GoogleResults