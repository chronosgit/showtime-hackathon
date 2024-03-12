import styles from "./btns-social.module.css";

const BtnsSocial = () => {

    const socials = [
        {
            href: "https://www.instagram.com/mafiashowtime/?hl=ru",
            src: "/src/assets/icons/instagram.svg",
            alt: "instagram icon",
        },
        {
            href: "https://www.tiktok.com/ru-RU/",
            src: "/src/assets/icons/tiktok.svg",
            alt: "tiktok icon",
        },
    ];

    return (
        <div className={styles.btns}>
        {
            socials.map((item, i) => {
                return (
                    <a key={i} href={item.href}>
                        <img 
                            src={item.src}
                            alt={item.alt} 
                            className={styles.icon}
                        />
                    </a>
                )
            })  
        }
        </div>
    );
};

export default BtnsSocial;