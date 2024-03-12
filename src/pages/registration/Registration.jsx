import Auth from "../../components/layout/auth/Auth";
import useValue from "/src/hooks/useValue";
import styles from "./registration.module.css";

const Registration = () => {

    const [email, emailOnChange] = useValue();
    const [pwd, pwdOnChange] = useValue();
    const [rePwd, rePwdOnChange] = useValue();

    const inputs = [
        {
            value: email,
            placeholder: "Почта",
            onChange: emailOnChange,
        },
        {
            value: pwd,
            placeholder: "Пароль",
            type: "password",
            onChange: pwdOnChange,
        },
        {
            value: rePwd,
            placeholder: "Повторите пароль",
            type: "password",
            onChange: rePwdOnChange,
        },
    ];

    return (
        <div className={styles.page}>
            <div className={styles.auth_wrapper}>
                <Auth 
                    inputs={inputs}
                    isLogin={false} 
                />
            </div>
        </div> 
    );
};

export default Registration;