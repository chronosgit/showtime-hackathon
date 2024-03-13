import { Link } from "react-router-dom";
import styles from "./admin-sidebar.module.css";

const AdminSidebar = () => {

    return (
        <aside className={styles.sidebar}>
            <Link to="/">
                <img 
                    src="/src/assets/images/logo_white.png" 
                    alt="tompson rifle with company name on it"
                    width="180"
                    height="180" 
                    className={styles.logo}
                />
            </Link>
        </aside>
    );
};

export default AdminSidebar;