import Container from "../container/container"
import { serviesArr } from '../array/servicesarray'
import Row from "../row/row"
import Col from "../col/col"
import './services.css'
const Services = () => {
    return <>
        <Container className="me-auto ">
            <Row className="services-container">
                {serviesArr.map((items, index) => {
                    return <>
                        <Col className="first-child-margin mb-5" xl="xl-25">
                            <div className="feedback-divs rounded border-0 p-4" style={{ background: items.color }}>
                                <div className="d-flex a-c j-c">
                                    <span><i style={{ fontSize: '45px', color: items.iconcolor }} className={`${items.icons} mr-3 servies-icon-container`}></i></span>
                                    <div>
                                        <div className="fw-bold font-size18 pb-1">{items.count}</div>
                                        <div className="servies-name font-size13">{items.name}</div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </>
                })}
            </Row>
        </Container>
    </>
}
export default Services