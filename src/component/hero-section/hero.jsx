import Container from "../container/container";
import Row from '../row/row'
import img1 from '../images/img1.png'
import react from '../images/reactjs.png'
import angular from '../images/angular.png'
import certi from '../images/certi.webp'
import figma from '../images/figma.png'
import Button from '../button/button'
import './hero.css'
import '../common.css'
import Col from "../col/col";
const Hero = () => {
    return <>
        <Container className="mt-auto hero-outer-section">
            <Row className='hero-wrap-container'>
                <Col xl="xl-50" className="d-flex flex-column j-c hero-wrap-width">
                    <i className="fa fa-certificate fa-fa-star-top-hero"></i>
                    <h1 className="hero-heading-section">Limitless learning at your fingertips</h1>
                    < div className="mt-3 mb-3">
                        <p className="pb-2">Perferendis quis is odit corporis similique assumenda voluptas</p>
                        <p>Quidem nihil ab? Sapiente alias aliquam quos totam at. Id fugit</p>
                    </div>
                    <div className="d-flex membership-container font-size13">
                        <span className="d-flex a-c font-size13">
                            <img src={certi} alt="" height='13' width='13' className="mr-1" />
                            Learn with experts</span>
                        <span className="d-flex a-c mr-2 ml-2">
                            <img src={certi} alt="" height='13' width='13' className="mr-1" />
                            Get certificate</span>
                        <span className="d-flex a-c">
                            <img src={certi} alt="" height='13' width='13' className="mr-1" />
                            Get membership</span>
                    </div>
                    <div className='mt-3'>
                        <Button
                            type='danger'
                            content='Get Started'
                            className='font-size13 p-2'
                        />
                        <a href="play" className='ml-3'>
                            <i class="fa play-btn p-2 mr-2" >&#xf144;</i>
                            <span className="playtext font-size13 fw-bold">Watch video</span>
                        </a>
                    </div>

                    <i class="fa fa-star star-hero-icon"></i>
                </Col>
                <Col xl="xl-50" className='hero-wrap-width'>
                    <div className="d-flex j-c">
                        <img src={react} alt="" className="react-image" />
                        <img width={200}
                            height={400}
                            alt="300x150"
                            src={img1}
                            className='hero-image'
                        />
                        <div className='hero-avatar-container text-center rounded'>
                            <div className='image-avatar-container'>
                                <p className='avatar-para'>Lorem ipsum dolor sit amet.</p>
                                <div className='d-flex j-c image-avatar-inner-container mt-2 mb-2'>
                                    <img
                                        alt="#"
                                        src={img1}
                                        className='avatar-images avatar'
                                    />
                                    <img
                                        alt="#"
                                        src={img1}
                                        className='avatar-images avatar'
                                    />
                                    <img
                                        alt="#"
                                        src={img1}
                                        className='avatar-images avatar'
                                    />
                                    <img
                                        alt="#"
                                        src={img1}
                                        className='avatar-images avatar'
                                    />
                                    <img
                                        alt="#"
                                        src={img1}
                                        className='avatar-images avatar'
                                    />
                                    <span className='more-avatar avatar'>1K+ </span>
                                </div>
                            </div>
                        </div>
                        <img src={angular} alt="" className="angular-image" />
                        <img src={figma} alt="" className="figma-image" />
                    </div>
                </Col>
            </Row>
        </Container>

    </>
}
export default Hero;