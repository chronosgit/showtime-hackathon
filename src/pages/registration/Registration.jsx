import { useState } from "react";
import Auth from "../../components/layout/auth/Auth";
import {
    isValidEmail,
    isValidPassword,
    isValidUsername,
    areSame
} from "../../utils/validators.js";
import {
    emailValidationMsg, 
    passwordValidationMsg,
    usernameValidationMsg,
    samePasswordsValidationMsg
} from "../../utils/feedbackMessages.js";
import styles from "./registration.module.css";

const Registration = () => {

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    const [pwd, setPwd] = useState("");
    const [rePwd, setRePwd] = useState("");
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const inputs = [
        {
            value: username,
            placeholder: "Пользователь",
            onChange: (newVal) => setUsername(newVal),
        },
        {
            value: email,
            placeholder: "Почта",
            onChange: (newVal) => setEmail(newVal),
        },
        {
            value: phone,
            placeholder: "Телефон",
            type: "tel",
            pattern: "[0-9]{11}", // 8 701 982 91 82
            onChange: (newVal) => setPhone(newVal),
        },
        {
            value: pwd,
            placeholder: "Пароль",
            type: "password",
            onChange: (newVal) => setPwd(newVal),
        },
        {
            value: rePwd,
            placeholder: "Повторите пароль",
            type: "password",
            onChange: (newVal) => setRePwd(newVal),
        },
    ];

    const validate = () => {
        const errorsArr = [];

        if(!isValidUsername(username)) {
            errorsArr.push(usernameValidationMsg);
        }
        if(!isValidEmail(email)) {
            errorsArr.push(emailValidationMsg);
        }
        if(!areSame(pwd, rePwd)) {
            errorsArr.push(samePasswordsValidationMsg);
        }
        if(!isValidPassword(pwd) || !isValidPassword(rePwd)) {
            errorsArr.push(passwordValidationMsg);
        }

        return errorsArr;
    }

    const clearInputs = () => {
        setEmail("");
        setUsername("");
        setPhone("");
        setPwd("");
        setRePwd("");
    }

    const register = () => {
        const errorsArr = validate();

        if(errorsArr.length !== 0) {
            setErrors(errorsArr);
            console.error(errorsArr);
            return;
        }

        // Handle download state

        console.log("Registered!")

        clearInputs();
    }

    return (
        <div className={styles.page}>
            <div className={styles.auth_wrapper}>
                <Auth 
                    inputs={inputs}
                    isLogin={false}
                    errors={errors}
                    isLoading={loading}
                    isSuccess={success}
                    onSubmit={register} 
                />
            </div>
        </div> 
    );
};

export default Registration;