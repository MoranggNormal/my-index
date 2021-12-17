import React, { MouseEventHandler, useState } from "react";
import Image from "next/image";
import useLocalStorage from "../../hooks/useLocalStorage";
import Input from "../Input/Index";
import styles from "./Index.module.scss";
import close from "../../assets/images/1904654_cancel_close_cross_delete_reject_icon.svg";

interface item {
  photo: string;
  alt: string;
  url: string;
}

type test = {
  closeModal: MouseEventHandler<HTMLButtonElement> | any;
  Modal: any;
};

const AddItemsModal = ({ Modal, closeModal }: test) => {
  const [, setStoredItems] = useLocalStorage<item[]>("items", []);

  const [success, setSuccess] = useState(false);

  const [alt, setAlt] = useState("");
  const [url, seturl] = useState("");

  const addMenuItem: any = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    
    setStoredItems((prevState) => [
      ...prevState,
      {
        photo: `${url.substring(0, url.indexOf("/", 8))}/favicon.ico`,
        alt: alt || "Undefined",
        url: url,
      },
    ]);

    setSuccess((prevState) => !prevState);
    setTimeout(() => setSuccess((prevState) => !prevState), 2000);

    setAlt("");
    seturl("");

    closeModal()

  };

  return (
    <>
      <section
        className={styles.modal}
        style={Modal ? { top: "50%" } : { top: "-200%" }}
      >
        <article>
          <button className={styles.closeButton} onClick={closeModal}>
            <Image src={close.src} width={32} height={32} />
          </button>

          <h3>Add a new direct link and never lose your progress!</h3>

          <form onSubmit={addMenuItem}>
            <Input
              value={alt}
              name={alt}
              maxLength={15}
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                setAlt(e.target.value)
              }
              placeholder={"Here goes the new item name..."}
            />
            <Input
              value={url}
              name={url}
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                seturl(e.target.value)
              }
              placeholder={"...And here goes the new item link"}
            />

            <button type="submit">
              Add Item
            </button>
          </form>
        </article>
      </section>
      <div
        className={styles.success}
        style={success ? { top: "13%" } : { top: "-100%" }}
      >
        Added new item!
      </div>
    </>
  );
};

export default AddItemsModal;
