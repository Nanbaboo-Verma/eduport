import "./button.css";
const Button = ({
    type,
    children,
    content,
    bgcolor,
    onClick = () => { },
    ondblClick = () => { },
    onMousedown = () => { },
    onMouseenter = () => { },
    onMouseleave = () => { },
    onMousemove = () => { },
    onMouseout = () => { },
    onMouseover = () => { },
    onMouseup = () => { },
    onFocus = () => { },
    className,
    color
}) => {
    const ButtonType = (type) => {
        switch (type) {
            case "primary":
                return "primary";
            case "secondary":
                return "secondary";
            case "danger":
                return "danger";
            case "success":
                return "success";
            case "info":
                return "info";
            case "warning":
                return "warning";
            case "dark":
                return "dark";
            case "light":
                return "light";
            case "link":
                return "link";
            default:
                return "";
        }
    };
    const Type = ButtonType(type);
    return (
        <button
            className={`${className} ${Type}`} style={{ color: color, background: bgcolor }}
            onClick={() => onClick()}
            onDoubleClick={() => ondblClick()}
            onMouseDown={() => onMousedown()}
            onMouseEnter={() => onMouseenter()}
            onMouseLeave={() => onMouseleave()}
            onMouseMove={() => onMousemove()}
            onMouseOut={() => onMouseout()}
            onMouseOver={() => onMouseover()}
            onMouseUp={() => onMouseup()}
            onFocus={() => onFocus()}
        >
            {content}

        </button>
    );
};
export default Button;
