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

            <button className={styles.btn}>
                Заказать мафию
            </button>
        </section>
    );
};

export default HomeHero;