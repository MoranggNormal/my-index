import Link from 'next/link'
import styles from './Index.module.scss'

type ButtonProps = {
    photo: string,
    alt: string,
    link: string,
    type: "submit" | "button" | "reset" | undefined,
    onClick: () => void,
    children?: any,

}

const MenuButton = (props: ButtonProps) => {
    return (

        <button className={styles.addMore}
                onClick={props.onClick}
                type={props.type}
        >

            {props.link ?
                <Link href={props.link}>
                    <a>
                        <img
                            alt={props.alt}
                            src={props.photo}
                            width={36}
                            height={36}
                        />
                    </a>
                </Link>
                :
                <img
                    alt={props.alt}
                    src={props.photo}
                    width={36}
                    height={36}
                />
            }
            {props.children}

        </button>

    )
}

export default MenuButton;