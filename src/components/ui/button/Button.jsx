const Button = ({
    width = "100%",
    padding = "",
    color = "white",
    bg = "",
    bgColor = "",
    textAlign = "left",
    fontFamily = "NeoSansCyr",
    fontSize = "1rem",
    fontWeight = "normal",
    textTransform = "uppercase",
    borderRadius = "0",
    children,
}) => {

    const btnStyles = {
        display: "flex", // for children
        width: width,
        padding: padding,
        background: bg,
        color: color,
        backgroundColor: bgColor,
        textAlign: textAlign,
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