import Image from "next/image";
import styles from "./Index.module.scss";

import googleIcon from "../../assets/images/google_icon.svg";
import wikipediaIcon from "../../assets/images/wikipedia_icon.svg";
import React, { CSSProperties, useRef, useState } from "react";
import GoogleResults from "../GoogleResults/Index";
import searchIcon from "../../assets/images/5094671_find_glass_search_zoom_icon.svg";

const GoogleSearch = () => {



  const [searchEngine, setSearchEngine] = useState<CSSProperties | boolean>(false);
  const [openResults, setOpenResults] = useState(false)

  const userSearch = useRef<HTMLInputElement | any>(null);


  const handleSubmit: any = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setOpenResults(true)

    console.log(userSearch.current.value);

  };

  return (
    <>
      <div className={styles.googleSearchContainer}>
        <div className={styles.chooseSearch}>
          <button
            type="button"
            onClick={() => setSearchEngine(true)}
            style={
              searchEngine
                ? { filter: "opacity(1)" }
                : { filter: "opacity(0.3)" }
            }
          >
            <Image src={googleIcon.src} width={42} height={42} />
          </button>

          <button
            type="button"
            onClick={() => setSearchEngine(false)}
            style={
              !searchEngine
                ? { filter: "opacity(1)" }
                : { filter: "opacity(0.3)" }
            }
          >
            <Image src={wikipediaIcon.src} width={42} height={42} />
          </button>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <button type="submit">
            <Image src={searchIcon.src} width={24} height={24} />
          </button>

          <input
            type="text"
            id="search"
            placeholder={`Search on ${searchEngine ? "Google" : "Wikipedia"}...`}
            ref={userSearch}
          />
        </form>
      </div>
x
      <GoogleResults isOpen={openResults} onClick={ () => setOpenResults(false)} />
    </>
  );
};

export default GoogleSearch;
