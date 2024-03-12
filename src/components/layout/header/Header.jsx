import { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../ui/logo/Logo";
import styles from "./header.module.css";
import Search from "../../ui/search/Search";
import BtnsSocial from "../btns-social/BtnsSocial";
import HeaderBtns from "./header-btns/HeaderBtns";
import MobileMenuToggler from "../../ui/mobile-menu-toggler/MobileMenuToggler";

const Header = () => {

    return (
        <header className={styles.header}>
            <Link to="/">
                <Logo 
                    src="/src/assets/images/logo_white.png"
                    alt="tompson rifle with showtime sign on it"
                    width="150" 
                />
            </Link>

            <div className={styles.header_features}>
                <div className={styles.search_wrapper}>
                    <Search />
                </div>

                <BtnsSocial />

                <HeaderBtns />

                <MobileMenuToggler />
            </div>
        </header>
    );
};

export default Header;