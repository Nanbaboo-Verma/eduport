import './cardbody.css'
// import crsArr from './array/coursestype'

const CardBody = ({ children, title }) => {
    return <>
        <div className="body-container">
            {title ?
                <>
                    {/* {crsArr.map(() => {
                        return <>
                        </>
                    })} */}
                </>
                : children}
        </div>
    </>
}
export default CardBody;