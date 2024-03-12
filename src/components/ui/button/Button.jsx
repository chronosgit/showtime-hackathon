const Button = ({
    padding = "",
    color = "white",
    bg = "",
    bgColor = "",
    fontFamily = "NeoSansCyr",
    fontSize = "1rem",
    fontWeight = "normal",
    textTransform = "uppercase",
    borderRadius = "0",
    children,
}) => {

    const btnStyles = {
        padding: padding,
        background: bg,
        color: color,
        backgroundColor: bgColor,
        fontFamily: fontFamily,
        fontSize: fontSize,
        fontWeight: fontWeight,
        textTransform: textTransform,
        borderRadius: borderRadius,
    };

    return (
        <button style={btnStyles}>
            {children}
        </button>
    );
};

export default Button;