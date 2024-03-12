import { useContext } from "react";
import MobileMenuToggler from "../../ui/mobile-menu-toggler/MobileMenuToggler.jsx";
import MobileMenuItem from "./mobile-menu-item/MobileMenuItem";
import MobileMenuContext from "../../../contexts/MobileMenuContext.jsx";
import items from "./api/mobileMenuItems.js";
import styles from "./mobile-menu.module.css";

const MobileMenu = () => {

    const {isMobileMenuOpen} = useContext(MobileMenuContext);

    const offsetStyles = {
        transform: isMobileMenuOpen 
                    ? "var(--no-offset)"
                    : "var(--offset-off-screen-right)"
    }

    return (
        <aside 
            className={styles.menu}
            style={offsetStyles}
        >
            <div className={styles.close_icon_wrapper}>
                <MobileMenuToggler isMenuOpen />
            </div>

            {
            items.map((item, i) => 
                <MobileMenuItem 
                    key={i} 
                    item={item} 
                />
            )
            }
        </aside>
    );
};

export default MobileMenu;