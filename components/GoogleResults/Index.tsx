import {CSSProperties, MouseEventHandler, MutableRefObject} from "react";
import styles from "./Index.module.scss";

import Image from "next/image";
import Link from "next/link";

import close from "../../assets/images/1904654_cancel_close_cross_delete_reject_icon.svg";
import useFetch from "../../hooks/useFetch";

type pos = {
    isOpen: boolean | CSSProperties;
    onClick: MouseEventHandler<HTMLButtonElement>;
    itemTitle?: string;
    itemSnippet?: string;
    itemDisplayLink?: string;
    ItemImage?: string;
    itemFormatedLink?: string;
    text: MutableRefObject<any>;
};

const GoogleResults = ({isOpen, onClick, text}: pos) => {
    const getData: any = useFetch(
        `https://www.googleapis.com/customsearch/v1?key=AIzaSyCq6yvMY3Z-hmHsjlJfkpBOJh6i98gn3WU&cx=d03456418204f3dcf&q=${text}`
    );

    console.log(getData.data?.items.map((obj: any) => obj));

    return (
        <>
            <section
                className={styles.googleResults}
                style={
                    isOpen
                        ? {top: "0", transition: "0.4s"}
                        : {top: "-200vw", transition: "1.2s"}
                }
            >
                <button className={styles.closeButton} onClick={onClick}>
                    <Image src={close.src} width={32} height={32}/>
                </button>
            </section>

            <section
                className={styles.results}
                style={
                    isOpen
                        ? {top: "50%", transition: "0.7s"}
                        : {top: "-200vw", transition: "0.4s"}
                }
            >
                <h2>Results: </h2>
                <hr/>

                <nav>
                    <ul>
                        {getData &&
                            getData?.data?.items?.map((result: any) => {
                                return (
                                    <>
                                        <li key={result.snippet}>
                                            <Link href={result.formattedUrl}>
                                                <a>
                                                    <div className={styles.resultText}>
                                                        <h3>{result.title}</h3>
                                                        <br/>
                                                        <p>{result.snippet}</p>
                                                        <br/>
                                                    </div>
                                                    <div className={styles.resultImage}>
                                                        <img
                                                            src={result.pagemap.metatags[0]["og:image"]}
                                                            alt={result.title}
                                                        ></img>
                                                    </div>
                                                </a>
                                            </Link>
                                            <Link href={result.displayLink}>
                                                <a>
                                                    <small>Result from: {result.displayLink}</small>
                                                </a>
                                            </Link>
                                        </li>
                                    </>
                                );
                            })}
                    </ul>
                </nav>
            </section>
        </>
    );
};

export default GoogleResults;
