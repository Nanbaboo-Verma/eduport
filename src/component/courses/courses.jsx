import Col from "../col/col"
import Container from "../container/container"
import Row from "../row/row"
import CoursesNav from "./coursesnav"
import CoursesType from "./coursestype"

const Courses = () => {
    return <>
        <Container>
            <Row>
                <Col className="me-auto text-center" xl="xl-50">
                    <h1 className="font-size43 mt-8">Most Popular Courses</h1>
                    <p className="font-size13">Chooes from hundreds of coures from specialist organizations</p>
                </Col>
            </Row>
            <CoursesNav />
            <CoursesType />
        </Container>
    </>
}
export default Courses