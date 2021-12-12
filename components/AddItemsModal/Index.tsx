import styles from "./Index.module.scss";
import Input from "../Input/Index";
import React, { FC, useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

interface item {
  photo: string;
  alt: string;
  text: string;
}

const AddItemsModal = ({ Modal }: any) => {
  const [, setStoredItems] = useLocalStorage<item[]>("items", []);

  const [photo, setPhoto] = useState("");
  const [alt, setAlt] = useState("");
  const [text, setText] = useState("");

  const addMenuItem = () => {
    setStoredItems((prevState) => [
      ...prevState,
      {
        photo: photo,
        alt: alt,
        text: text,
      },
    ]);

    setPhoto("");
    setAlt("");
    setText("");
  };

  return (
    <>
      <section
        className={styles.modal}
        style={Modal ? { top: "50%" } : { top: "-500%" }}
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
    </>
  );
};

export default AddItemsModal;
