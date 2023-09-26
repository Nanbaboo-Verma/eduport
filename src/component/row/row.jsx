import '../common.css'
const Row = ({ children, className }) => {
    return <>
        <div className={`d-flex ${className} `}>
            {children}
        </div>
    </>
}
export default Row;