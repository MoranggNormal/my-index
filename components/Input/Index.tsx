import React, {FC, InputHTMLAttributes} from "react";
import {inspect} from "util";
import styles from './Index.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string,
    placeholder: string,
    maxLength?: number,
}

const Input: FC<InputProps> = ({name, placeholder, maxLength, onChange}) => {
    return(
        <input
            className={styles.input}
            type="text"
            name={name}
            value={name}
            maxLength={maxLength}
            placeholder={placeholder}
            onChange={onChange}/>
    )
}

export default Input