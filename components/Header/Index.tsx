/* eslint-disable @next/next/no-img-element */

/* HOOKS */
import React, {useState} from "react";
import useReadLocalStorage from "../../hooks/useReadLocalStorage";
import useLocalStorage from "../../hooks/useLocalStorage";
/* COMPONENTS */
import AddItemsModal from "../AddItemsModal/Index";
import MenuButton from "../MenuButton/Index";
/* IMAGES */
import trash from "../../assets/images/1904654_cancel_close_cross_delete_reject_icon.svg";
import Add from "../../assets/images/299068_add_sign_icon.svg";
/* STYLES */
import styles from "./Index.module.scss";
import useDate from "../../hooks/useDate";

interface item {
    photo: string;
    alt: string;
    text: string;
}

const Header = () => {
    const getStoredItems = useReadLocalStorage<item[]>("items");
    const [, setStoredItems] = useLocalStorage<item[] | undefined>("items", []);
    const [modal, setModal] = useState(false);

    const time = useDate();


    const modalBox = () => {
        return setModal((prevState) => !prevState);
    };

    const removeItem = (index: number) => {
        const setNewlyStoredItems: object | any = getStoredItems?.filter((value, i) => {
            return i != index;
        })
        setStoredItems(setNewlyStoredItems);
    }

    return (
        <>

            <header className={styles.headerTime}>
                {time}
            </header>

            <div className={styles.headerItems}>
                <div className={styles.addButton}>
                    <MenuButton
                        onClick={() => modalBox()}
                        photo={Add.src}
                        alt={"Add new menu item"}
                        type={"button"}
                    >
                        <div className={styles.itemInfo}><p>Add new item</p></div>
                    </MenuButton>
                </div>

                <AddItemsModal Modal={modal} onClick={modalBox}/>

                <ul>
                    {getStoredItems &&
                        getStoredItems.map((e, index) => {
                            return (
                                <li key={index}>
                                    <MenuButton
                                        photo={e.photo}
                                        alt={e.alt}
                                        link={e.text}
                                        type={"button"}
                                    >
                                    </MenuButton>
                                    <div onClick={() => removeItem(index)} className={styles.clear}>
                                        <img src={trash.src} alt={e.alt}/>
                                    </div>
                                    <div className={styles.itemInfo}><p>{e.alt}</p></div>
                                </li>
                            );
                        })}
                </ul>
            </div>
        </>
    );
};

export default Header;
