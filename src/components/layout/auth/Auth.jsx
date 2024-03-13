import { Link } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import Logo from "../../ui/logo/Logo";
import Alert from "../../ui/alert/Alert";
import AuthInput from "./auth-input/AuthInput";
import AuthHeading from "./auth-heading/AuthHeading";
import allExist from "/src/utils/allExist.js";
import styles from "./auth.module.css";

const Auth = ({
    isLogin,
    inputs,
    onSubmit,
    errors,
    isLoading,
    isSuccess
}) => {

    if(!allExist(onSubmit, isLogin) || !inputs) {
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
                                pattern={input.pattern}
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
                
                {
                errors.length != 0 &&
                    <Alert
                        error
                        // text={errorMsg}
                        messages={errors}
                    />
                }

                {
                isSuccess !== "" &&
                    <Alert
                        success
                        messages={errors}
                    />
                }

                {
                isLoading &&
                    <div className={styles.loading_wrapper}>
                        <TailSpin
                            visible={true}
                            height="40"
                            width="40"
                            color="#1777f2"
                            ariaLabel="tail-spin-loading"
                            radius="1"
                            wrapperClass={styles.loading_wrapper}
                        />
                    </div>
                }

                <button 
                    className={styles.btn + " " + styles.btn_main}
                    onClick={onSubmit}
                >
                {
                    isLogin ? "Войти" : "Зарегистрироваться"
                }
                </button>

                <p className={styles.or}>
                    или
                </p>

                <button className={styles.btn + " " + styles.btn_social}>
                    <img 
                        src="/src/assets/icons/google.svg" 
                        alt="google logo" 
                        className={styles.social_icon}
                    />

                    <p className={styles.btn_social_text}>
                        Продолжить через Google
                    </p>
                </button>

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
                            ? <Link to="/register">Зарегистрироваться</Link>
                            : <Link to="/login">Войти</Link>
                        }
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Auth;