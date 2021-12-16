import React, {useState} from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import Input from "../Input/Index";
import noImage from "../../assets/images/interrogation-mark.png"
import styles from "./Index.module.scss";

interface item {
    photo: string;
    alt: string;
    text: string;
}

const AddItemsModal = ({Modal}: any) => {
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
