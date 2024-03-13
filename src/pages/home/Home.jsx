import Header from "../../components/layout/header/Header";
import MobileMenu from "../../components/layout/mobile-menu/MobileMenu";
import HomeHero from "./home-hero/HomeHero";
import MobileMenuContext from "../../contexts/MobileMenuContext";
import useToggle from "../../hooks/useToggle";
import styles from "./home.module.css";

const Home = () => {

    const [isMobileMenuOpen, toggleMobileMenu] = useToggle();
    const mobileMenuContext = {
        isMobileMenuOpen, 
        toggleMobileMenu
    };

    return (
        <div className={styles.home}>
            <MobileMenuContext.Provider value={mobileMenuContext}>
                <Header />

                <MobileMenu />
            </MobileMenuContext.Provider>

            <HomeHero />
        </div>
    );
};

export default Home;