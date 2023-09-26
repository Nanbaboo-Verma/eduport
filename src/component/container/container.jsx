import './container.css'
const Container = ({ children, className }) => {
    return <>
        <div className={`${className}  container-div `}>
            {children}
        </div>
    </>
}
export default Container;