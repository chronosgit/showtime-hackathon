import oneExist from "/src/utils/oneExist.js";
import classes from "./alert.module.css";

const Alert = ({
    error,
    success,
    warning,
    info,
    messages = []
}) => {

    if(!oneExist(error, success, warning, info)) {
        return <></>
    }

    let iconSrc = getIconSrc();
    let bgColor = getBgColor();
    let color = getColor();

    function getIconSrc() {
        let src = "";
        
        if(error) {
            src = "/src/assets/icons/error.svg";
        } else if(success) {
            src = "/src/assets/icons/success.svg";
        } else if(warning) {
            src = "/src/assets/icons/warning.svg";
        } else if (info) {
            src = "/src/assets/icons/info-icon.svg";
        }

        return src;
    }

    function getBgColor() {
        let bgClr = "";
        
        if(error) {
            bgClr = "#fdeded";
        } else if(success) {
            bgClr = "#edf7ed";
        } else if(warning) {
            bgClr = "#fff4e5";
        } else if (info) {
            bgClr = "#edf7ed";
        }

        return bgClr;
    }

    function getColor() {
        let clr = "";
        
        if(error) {
            clr = "#8a5958";
        } else if(success) {
            clr = "#567657";
        } else if(warning) {
            clr = "#866330";
        } else if (info) {
            clr = "#2c512e";
        }

        return clr;
    }

    const styles = {
        color: color,
        backgroundColor: bgColor,
    }

    return (
        <div className={classes.box} style={styles}>
            <img 
                src={iconSrc} 
                alt="" 
                className={classes.icon}
            />

            <ul className={classes.messages}>
            {
                messages.map((msg, i) => 
                    <li
                        key={i}
                        className={classes.message}
                    >
                        {msg}
                    </li>
                )
            }
            </ul>
        </div>
    )
};

export default Alert;