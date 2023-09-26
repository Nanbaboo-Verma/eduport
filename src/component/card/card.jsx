import './card.css';
const Card = ({ children }) => {
    return <>
        <div className="card-outer-section rounded">
            {children}
        </div>
    </>
}
export default Card;