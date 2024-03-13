import allExist from "/src/utils/allExist.js";
import styles from "./auth-input.module.css";

const AuthInput = ({
    value,
    placeholder = "Текст",
    type = "text",
    onChange,
}) => {

    if(!allExist(value, onChange)) {
        return <></>
    }

    return (
        <input 
            type={type}
            value={value} 
            placeholder={placeholder}
            className={styles.input}
            onChange={(e) => onChange(e.target.value)}
        />
    );
};

export default AuthInput;