import { Link } from "react-router-dom";
import styles from "./mobile-menu-item.module.css";

const MobileMenuItem = ({item}) => {

    return (
        <Link to={item.href || "/"} className={styles.item}>
            <img 
                src={item.src} 
                alt={item.alt || ""} 
                className={styles.icon} 
            />

            <p className={styles.text}>
                {item.text}
            </p>
        </Link>
    );
};

export default MobileMenuItem;