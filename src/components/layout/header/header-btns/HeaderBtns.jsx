import { Link } from "react-router-dom";
import styles from "./header-btns.module.css";

const HeaderBtns = () => {

    return (
        <div className={styles.btns}>
            <Link to="/register">
                <button className={styles.btn + " " + styles.btn_register}>
                    Регистрация
                </button>
            </Link>

            <Link to="/login">
                <button className={styles.btn + " " + styles.btn_login}>
                    Войти
                </button>
            </Link>
        </div>
    );
};

export default HeaderBtns;