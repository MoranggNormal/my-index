import React, {MouseEventHandler, useState} from "react";
import Image from 'next/image'
import useLocalStorage from "../../hooks/useLocalStorage";
import Input from "../Input/Index";
import noImage from "../../assets/images/interrogation-mark.png"
import styles from "./Index.module.scss";
import close from "../../assets/images/1904654_cancel_close_cross_delete_reject_icon.svg";

interface item {
    photo: string;
    alt: string;
    text: string;
}

type test = {
    onClick: MouseEventHandler<HTMLButtonElement>,
    Modal: any
}

const AddItemsModal = ({Modal, onClick}: test, ) => {
    const [, setStoredItems] = useLocalStorage<item[]>("items", []);

    const [success, setSuccess] = useState(false);

    const [photo, setPhoto] = useState("");
    const [alt, setAlt] = useState("");
    const [text, setText] = useState("");

    const addMenuItem = () => {


        setStoredItems((prevState) => [
            ...prevState,
            {
                photo: photo || noImage.src,
                alt: alt || "Undefined",
                text: text,
            },
        ]);

        setSuccess(prevState => !prevState)
        setTimeout(() => setSuccess(prevState => !prevState), 2000)

        setPhoto("");
        setAlt("");
        setText("");

    };

    return (
        <>
            <section
                className={styles.modal}
                style={Modal ? {top: "50%"} : {top: "-200%"}}
                
            >
                <article>
                <button className={styles.closeButton} onClick={onClick}>
                    <Image src={close.src} width={32} height={32}/>
                </button>
                    <form>
                        <Input
                            value={photo}
                            name={photo}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                                setPhoto(e.target.value)
                            }
                            placeholder={"Type image URL"}
                        />
                        <Input
                            value={alt}
                            name={alt}
                            maxLength={15}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                                setAlt(e.target.value)
                            }
                            placeholder={"Type new item Alt"}
                        />
                        <Input
                            value={text}
                            name={text}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                                setText(e.target.value)
                            }
                            placeholder={"Type item redirect link"}
                        />

                        <button onClick={() => addMenuItem()} type="button">
                            Add Item
                        </button>
                    </form>
                </article>

            </section>
            <div className={styles.success}
                 style={success ? {top: '-90%'} : {top: '-400%'}}
            >Added new item!
            </div>

        </>
    );
};

export default AddItemsModal;
