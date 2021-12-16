import { CSSProperties, MouseEventHandler, MutableRefObject } from "react";
import styles from "./Index.module.scss";
import wikiClean from "../../utils/wikiClean";

import Image from "next/image";

import close from "../../assets/images/1904654_cancel_close_cross_delete_reject_icon.svg";
import useFetch from "../../hooks/useFetch";

type pos = {
  isOpen: boolean | CSSProperties;
  onClick: MouseEventHandler<HTMLButtonElement>;
  title?: string;
  snippet?: string;
  timestamp?: string;
  text: MutableRefObject<any>;
};

const WikiResults = ({ isOpen, onClick, text }: pos) => {

    console.log(text);
    

  const getData: any = useFetch(
      `https://pt.wikipedia.org/w/api.php?action=query&origin=*&list=search&prop=info&inprop=url&utf8=&format=json&srsearch=${text}`
  );

  return (
    <>
      <section
        className={styles.WikiResults}
        style={
          isOpen
            ? { top: "0", transition: "0.4s" }
            : { top: "-200vw", transition: "1.2s" }
        }
      >
        <button className={styles.closeButton} onClick={onClick}>
          <Image src={close.src} width={32} height={32} />
        </button>
      </section>

      <section
        className={styles.results}
        style={
          isOpen
            ? { top: "50%", transition: "0.7s" }
            : { top: "-200vw", transition: "0.4s" }
        }
      >
        <h2>Results: </h2>
        <hr />

        <nav>
          <ul>
            {getData &&
              getData?.data?.query?.search.map((result: any) => {
                return (
                  <>
                    <li key={result.snippet}>
                      <a href={`https://pt.wikipedia.org/wiki/${result.title}`}>
                          <div className={styles.resultText}>
                            <h3>{result.title}</h3>
                            <br />
                            <p>{wikiClean(result.snippet)}</p>
                            <br />
                          </div>
                        <div>
                            <br />
                          <span>
                            <small>{result.timestamp.slice(0,10)}</small>
                          </span>
                        </div>
                      </a>
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

export default WikiResults;
