/* eslint-disable @next/next/no-img-element */
import styles from "./Index.module.scss";
import Add from "../../assets/images/8679817_add_plus_icon.svg";
import MenuButton from "../MenuButton/Index";
import React, { useCallback, useEffect, useState } from "react";
import useReadLocalStorage from "../../hooks/useReadLocalStorage";
import AddItemsModal from "../AddItemsModal/Index";
import trash from "../../assets/images/1904654_cancel_close_cross_delete_reject_icon.svg";
import useLocalStorage from "../../hooks/useLocalStorage";

interface item {
  photo: string;
  alt: string;
  text: string;
}

const Header = () => {
  const getStorageItems = useReadLocalStorage<item[]>("items");
  const [, setStoredItems] = useLocalStorage<item[] | undefined>("items", []);
  const [modal, setModal] = useState(false);

  const modalBox = () => {
    return setModal((prevState) => !prevState);
  };

  const removeItem = (index: number) => {
    const setNewlyStoredItems: object | any = getStorageItems?.filter((value, i) => {
      return i != index;
    })
    setStoredItems(setNewlyStoredItems);
  }

  return (
    <>
      <header className={styles.header}>
        <MenuButton
          onClick={() => modalBox()}
          photo={Add.src}
          alt={"haha"}
          link={""}
          type={"button"}
        />

        <AddItemsModal Modal={modal} />

        <ul>
          {getStorageItems &&
              getStorageItems.map((e, index) => {
              return (
                <li key={index}>
                  <MenuButton
                    photo={e.photo}
                    alt={e.alt}
                    link={e.text}
                    type={"button"}
                    onClick={() => console.log(index)}
                  >
                  </MenuButton>
                  <div onClick={() => removeItem(index)} className={styles.clear}>
                    <img src={trash.src} alt={e.alt} />
                  </div>
                </li>
              );
            })}
        </ul>
      </header>
    </>
  );
};

export default Header;
