import { useState } from "react";
import Auth from "../../components/layout/auth/Auth";
import {
    isValidPassword,
    isValidUsername,
} from "../../utils/validators.js";
import { 
    passwordValidationMsg,
    usernameValidationMsg,
} from "../../utils/feedbackMessages.js";
import styles from "./login.module.css";

const Login = () => {

    const [username, setUsername] = useState("");
    const [pwd, setPwd] = useState("");
    const [errors, setErrors] = useState("");

    const inputs = [
        {
            value: username,
            placeholder: "Пользователь",
            onChange: (newVal) => setUsername(newVal),
        },
        {
            value: pwd,
            placeholder: "Пароль",
            type: "password",
            onChange: (newVal) => setPwd(newVal),
        },
    ];

    const validate = () => {
        let errorsArr = [];

        if(!isValidUsername(username)) {
            errorsArr.push(usernameValidationMsg);
        }
        if(!isValidPassword(pwd)) {
            errorsArr.push(passwordValidationMsg);
        }

        return errorsArr;
    }

    const clearInputs = () => {
        setUsername("");
        setPwd("");
    }

    const login = () => {
        const errorsArr = validate();
        
        if(errorsArr.length !== 0) {
            setErrors(errorsArr);
            console.error(errorsArr);
            return;
        }

        // Handle download state

        console.log("Logined!")

        clearInputs();
    }

    return (
        <div className={styles.page}>
            <div className={styles.auth_wrapper}>
                <Auth 
                    inputs={inputs}
                    isLogin
                    errors={errors}
                    onSubmit={login} 
                />
            </div>
        </div>
    );
};

export default Login;