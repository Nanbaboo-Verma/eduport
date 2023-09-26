import './col.css'
const Col = ({ children, className, md, xl }) => {
    const MediumDevices = (md) => {
        switch (md) {
            case "md-1":
                return "md-d10";
            case "md-20":
                return "md-d20";
            case "md-25":
                return "md-d25";
            case "md-30":
                return "md-d30";
            case "md-33":
                return "md-d33";
            case "md-40":
                return "md-d40";
            case "md-50":
                return "md-d50";
            case "md-60":
                return "md-d60";
            case "md-70":
                return "md-d70";
            case "md-80":
                return "md-d80";
            case "xl-90":
                return "md-d90";
            case "md-100":
                return "md-d100";
            default:
                return "";
        }
    };

    const XlargeDevices = (xl) => {
        switch (xl) {
            case "xl-1":
                return "xl-d10";
            case "xl-20":
                return "xl-d20";
            case "xl-25":
                return "xl-d25";
            case "xl-30":
                return "xl-d30";
            case "xl-33":
                return "xl-d33";
            case "xl-40":
                return "xl-d40";
            case "xl-50":
                return "xl-d50";
            case "xl-60":
                return "xl-d60";
            case "xl-70":
                return "xl-d70";
            case "xl-80":
                return "xl-d80";
            case "xl-90":
                return "xl-d90";
            case "xl-100":
                return "xl-d100";
            default:
                return "";
        }
    };
    const md1 = MediumDevices(md)
    const xl1 = XlargeDevices(xl)
    return <>
        <div className={`col-container ${className} ${xl1} ${md1}`}>
            {children}
        </div>
    </>
}
export default Col;

