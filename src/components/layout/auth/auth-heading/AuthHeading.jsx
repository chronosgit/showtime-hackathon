import styles from "./auth-heading.module.css";

const AuthHeading = () => {

    return (
        <h2 className={styles.heading}>
            Добро пожаловать в&nbsp;
            <span className={styles.heading_span}>
                ShowTime!
            </span>
        </h2>
    );
};

export default AuthHeading;