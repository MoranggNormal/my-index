import styles from './index.module.scss'
import Dev from './../../assets/images/4519024_dev_icon.svg'
import Add from '../../assets/images/8679817_add_plus_icon.svg'
import MenuButton from "../MenuButton/Index";
import React, {useCallback, useEffect, useState} from "react";
import Input from "../Input/Index";
import useLocalStorage from "../../hooks/useLocalStorage";
import useReadLocalStorage from "../../hooks/useReadLocalStorage";
import AddItemsModal from "../AddItemsModal/Index";
import trash from '../../assets/images/2849797_trash_basket_multimedia_icon.svg'

interface item {
    photo: string,
    alt: string,
    text: string
}

const Header = () => {

    const teste = useReadLocalStorage<item[]>('items');
    const [modal, setModal] = useState(false);

    const modalBox = () =>{
        return setModal(prevState => !prevState)
    }

    return (
        <>
            <header className={styles.header}>
                <MenuButton onClick={() => modalBox()} photo={Add.src}  alt={'haha'} link={""} type={'button'}/>


                <AddItemsModal Modal={modal}/>

                <ul>
                {teste && teste.map((e, index) => {
                    return <li key={index}>
                        <MenuButton
                                    photo={e.photo}
                                    alt={e.alt}
                                    link={e.text}
                                    type={"button"}
                                    onClick={() => console.log(index)}> <div className={styles.clear}>
                            <img src={trash.src} alt={e.alt}  />
                        </div></MenuButton>
                    </li>
                })}
                </ul>
            </header>
        </>
    )
}

export default Header;