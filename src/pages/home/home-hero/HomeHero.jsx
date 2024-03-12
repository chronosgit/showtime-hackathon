import Button from "../../../components/ui/button/Button";
import Center from "../../../components/layout/center/Center";
import styles from "./home-hero.module.css";

const HomeHero = () => {

    return (
        <section className={styles.hero}>
            <h2 className={styles.heading}>
                Как отметить День рождения или корпоратив? <br />
                Устройте праздник с легендарной <br />
                <span className={styles.heading_span}>ИГРОЙ МАФИЯ</span>
            </h2>

            <p className={styles.slogan}>
                Оригинально. Весело. Атмосферно
            </p>

            <Center>
                <Button
                    padding="1.25rem"
                    fontWeight="500"
                    borderRadius="2rem"
                    bgColor="var(--clr-red)"
                >
                    Заказать мафию
                </Button>
            </Center>
        </section>
    );
};

export default HomeHero;