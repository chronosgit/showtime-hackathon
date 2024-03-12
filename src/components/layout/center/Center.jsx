import styles from "./center.module.css";

// Relies on flex
const Center = ({children}) => {

    return (
        <div className={styles.center}>
            {children}
        </div>
    );
};

export default Center;