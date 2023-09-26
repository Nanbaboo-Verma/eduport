import './containerfluid.css'
import '../common.css'
const ContainerFluid = ({ children, className }) => {
    return <>
        <div className={`${className} ' fluid-container '`}>
            {children}
        </div>
    </>
}
export default ContainerFluid;