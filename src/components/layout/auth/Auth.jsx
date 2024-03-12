import { Link } from "react-router-dom";
import Logo from "../../ui/logo/Logo";
import AuthInput from "./auth-input/AuthInput";
import AuthHeading from "./auth-heading/AuthHeading";
import styles from "./auth.module.css";

const Auth = ({
    isLogin,
    inputs
}) => {

    if(isLogin === undefined || !inputs) {
        return <></>
    }

    return (
        <div className={styles.auth}>
            <Link 
                to="/"
                className={styles.logo_wrapper}
            >
                <Logo
                    src="/src/assets/images/logo_black.jpg"
                    alt="tompson rifle with company name"
                    width="200"
                    height="100"
                />
            </Link>

            <div className={styles.container}>
                <AuthHeading />

                <div className={styles.inputs}>
                    {
                    inputs.map((input, i) => 
                        <div key={i} className={styles.input}>
                            <AuthInput
                                placeholder={input.placeholder}
                                type={input.type}
                                value={input.value}
                                onChange={input.onChange}
                            />
                        </div>
                    )
                    }
                </div>

                {
                isLogin &&
                    <p className={styles.forgot_pwd}>
                        Забыли пароль?
                    </p>
                }

                <button className={styles.btn + " " + styles.btn_main}>
                    Войти
                </button>

                <p className={styles.or}>
                    или
                </p>

                <div className={styles.btns_social}>
                    <button className={styles.btn + " " + styles.btn_social}>
                        <img 
                            src="/src/assets/icons/google.svg" 
                            alt="google logo" 
                            className={styles.social_icon}
                        />

                        <p>Продолжить через Google</p>
                    </button>
                </div>

                <p className={styles.question}>
                    {
                    isLogin
                        ? "Нет аккаунта?"
                        : "Уже есть аккаунт?"
                    }
                    &nbsp;
                    <span className={styles.proposition}>
                        {
                        isLogin
                            ? "Зарегистрироваться"
                            : "Войти"
                        }
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Auth;