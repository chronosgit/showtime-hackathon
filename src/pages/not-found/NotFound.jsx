import { Link } from "react-router-dom";
import styles from "./not-found.module.css";

const NotFound = () => {

    return (
        <div className={styles.page}>
            <h1 className={styles.heading}>
                Страница не найдена...
            </h1>

            <Link to="/" className={styles.link}>
                Вернуться на главную страницу
            </Link>
        </div>
    );
};

export default NotFound;