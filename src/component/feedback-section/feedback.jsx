import ContainerFluid from '../container-fluid/containerfluid'
import Container from '../container/container'
import Row from '../row/row'
import Col from '../col/col'
import Button from '../button/button'
import img6 from '../images/img1.png'
import shield from '../images/shield.png'
import './feedback.css'
const Feedback = () => {
    return <>
        <ContainerFluid className="feedback-outer-container pb-8 pt-8 mt-5">
            <Container>
                <Row className='feedback-wrap-section'>
                    <Col xl='xl-50' className="d-flex a-c feedback-wrap-width">
                        <Col xl="xl-50">
                            <div className='imge-container feedback-images-bg-circle-con m-2 p-3 rounded text-center'>
                                <div className='feedback-images-bg-circle'>
                                    <img src={img6} alt='' className="feedback-card-image rounded-circle feedback-img" />
                                    <div>
                                        <div>
                                            <p><i class="fa fa-quote-left"></i>Some quick example text to build on the card title and make up the bulk of
                                                the card's content.<i class="fa fa-quote-right"></i></p>
                                        </div>
                                        <div className='mt-3'>
                                            <span><i class="fa fa-star" style={{ color: 'orange' }}></i></span>
                                            <span><i class="fa fa-star" style={{ color: 'orange' }}></i></span>
                                            <span><i class="fa fa-star" style={{ color: 'orange' }}></i></span>
                                            <span><i class="fa fa-star" style={{ color: 'orange' }}></i></span>
                                            <span><i class="fa fa-star-half-o" style={{ color: 'orange' }}></i></span>
                                            <div className='mt-2 font-size13 fw-bold'>Carolyn Ortiz</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Col className="d-flex flex-end">
                                <Row >
                                    <Col xl="xl-100" className='ba rounded'>
                                        <div className='m-2 p-3 '>
                                            <div className="text-center">
                                                <h4 className="feedback-reacting-point">4.5/5.0</h4>
                                                <p className="feedback-rating">Based on 3265 ratings</p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Col>
                        <Col xl="xl-50" className="d-flex flex-column justify-content-between">
                            <div className="feedback-cards imge-container m-2 p-3 rounded">
                                <img src={shield} alt="" className="shield-check-image" />
                                <div className="text-center font-size13"><h4>100+ Verified Mentors</h4></div>
                                <div className="d-flex a-c pt-3">
                                    <img href="images" alt='' src={img6} className="rounded-circle feed-list-img mr-3" />
                                    <div className='some-example'>Some example </div>
                                </div>
                                <div className="d-flex a-c pt-3">
                                    <img href="images" alt='' src={img6} className="rounded-circle feed-list-img mr-3" />
                                    <div className='some-example'>Some example </div>
                                </div>
                            </div>
                            <div className="imge-container m-2 p-3 rounded text-center">
                                <img href="images" alt='' src={img6} className="feedback-card-image  rounded-circle feedback-img" />
                                <div>
                                    <div>
                                        <p><i class="fa fa-quote-left"></i>Some quick example text to build on the card title and make up the bulk of
                                            the card's content.<i class="fa fa-quote-right"></i>
                                        </p>
                                    </div>
                                    <div className='mt-3'>
                                        <span><i class="fa fa-star" style={{ color: 'orange' }}></i></span>
                                        <span><i class="fa fa-star" style={{ color: 'orange' }}></i></span>
                                        <span><i class="fa fa-star" style={{ color: 'orange' }}></i></span>
                                        <span><i class="fa fa-star" style={{ color: 'orange' }}></i></span>
                                        <span><i class="fa fa-star-half-o" style={{ color: 'orange' }}></i></span>
                                        <div className='mt-2 font-size13 fw-bold'>Dennis Barrett</div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Col>
                    <Col xl="xl-50" className="d-flex flex-column j-c feedback-wrap-width">
                        <div className='ml-5'>
                            <h1 className='font-size43'>Some valuable feedback from our student</h1>
                            <p className='mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, modi vel maiores repellendus similique, obcaecati et qui, cupiditate in culpa odio accusamus aperiam</p>
                            <div className='mt-4'>
                                <Button
                                    content='View Reviews'
                                    type="primary"
                                    className='font-size13 p-2'
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </ContainerFluid>
    </>
}
export default Feedback;