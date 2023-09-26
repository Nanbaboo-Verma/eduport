
import Col from '../col/col';
import Container from '../container/container';
import Row from '../row/row';
import Button from '../button/button'
import './instructor.css';
const Instructor = () => {
    return <>
        <Container>
            <Row>
                <div className="d-flex  a-c s-a instructor-container mt-8 mb-5 pt-6 pb-6 rounded">
                    <Col xl="xl-60" className="instructor-heading3-section">
                        <h2 className='instructor-heading3 mb-2'>Become an Instructor</h2>
                        <p className='instructor-para mb-2 font-size13'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet tempore voluptas Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet tempore voluptas Lorem, ipsum dolor sit amet consectetur adipisicing</p>
                    </Col>
                    <Col xl="40" className="m-auto">
                        <Button
                            content='Start Teaching Today'
                            className='font-size13  p-2 feedback-btn'
                        />
                    </Col>
                </div>
            </Row>
        </Container>
    </>
}
export default Instructor;