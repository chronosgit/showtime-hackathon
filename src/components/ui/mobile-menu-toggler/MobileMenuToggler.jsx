import { useContext } from "react";
import MobileMenuContext from "../../../contexts/MobileMenuContext";
import styles from "./mobile-menu-toggler.module.css";

const MobileMenuToggler = () => {

    const {isMobileMenuOpen, toggleMobileMenu} = useContext(MobileMenuContext);

    const iconSrc = (
        isMobileMenuOpen ?
            "/src/assets/icons/cross.svg"
        :
            "/src/assets/icons/burger-menu.svg"
    );

    return (
        <button className={styles.btn} onClick={toggleMobileMenu}>
            <img 
                src={iconSrc}
                alt="" 
                className={styles.icon}
            />
        </button>
    );
};

export default MobileMenuToggler;