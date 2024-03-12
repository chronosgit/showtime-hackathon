
const Logo = ({
    src = "",
    alt = "",
    width = "",
    height = "",
}) => {

    return (
        <img 
            src={src}
            alt={alt}
            width={width}
            height={height}
        />
    );
};

export default Logo;