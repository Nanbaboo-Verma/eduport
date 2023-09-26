import Container from '../container/container';
import Row from '../row/row';
import Col from '../col/col';
import logo from '../images/logo.svg'
import google from '../images/google.png'
import apple from '../images/apple.png'
import '../footer-section/footer.css'
import '../common.css'
const Footer = () => {
    return <>
        <Container className="mt-4 mb-4">
            <Row className="d-flex s-b footer-wrap-section">
                <Col xl="xl-20" className='footer-width'>
                    <ul>
                        <li className="">
                            <img width="130" height="40" alt="171x180" src={logo} />
                        </li>
                        <li className="mt-4"><p className='pb-1'>Lorem ipsum dolor sit amet</p><p className='pb-1'>Lorem ipsum dolor sit amet</p><p>Lorem ipsum dolor sit amet</p></li>
                        <li className="mt-3">
                            <a href="facebook"> <i class="fa fa-facebook-f m-2" style={{ fontSize: '20px', color: '#0069D9' }}></i></a>
                            <a href="instagram"><i class="fa fa-instagram m-2" style={{ fontSize: '20px', color: '#742DDD' }}></i></a>
                            <a href="twitter"><i style={{ fontSize: '20px', color: '#60D9F9' }} class="fa m-2">&#xf099;</i></a>
                            <a href="lin"> <i class="fa fa-linkedin m-2" style={{ fontSize: '20px', color: '#0D6EFD' }}></i></a>
                        </li>
                    </ul>
                </Col>
                <Col xl="xl-60" className="d-flex s-a footer-width footer-list">
                    <ul className='company-container'>
                        <li className="mb-5"><h2>Company</h2></li>
                        <li className="btn pb-3"><a href="##">About us</a></li>
                        <li className="btn pb-3"><a href="##">Contact us</a></li>
                        <li className="btn pb-3"><a href="##">News and Blogs</a></li>
                        <li className="btn pb-3"><a href="##">Library</a></li>
                        <li className="btn pb-3"><a href="##">Career</a></li>
                    </ul>
                    <ul className='company-container'>
                        <li className="mb-5"><h2>Community</h2></li>
                        <li className="btn pb-3"><a href="##">Documentation</a></li>
                        <li className="btn pb-3"><a href="##">Faq</a></li>
                        <li className="btn pb-3"><a href="##">Forum</a></li>
                        <li className="btn pb-3"><a href="##">Sitemap</a></li>
                    </ul>
                    <ul className='company-container'>
                        <li className="mb-5"><h2>Teaching</h2></li>
                        <li className="btn pb-3"><a href="##">Become a teacher</a></li>
                        <li className="btn pb-3"><a href="##">How to guide</a></li>
                        <li className="btn pb-3"><a href="##">Teams & Conditions</a></li>
                    </ul>
                </Col>
                <Col xl="20" className='footer-width'>
                    <ul className='company-container'>
                        <li className="mb-5"><h2>Contact</h2></li>
                        <li className="btn pb-3"><a href="##" className='fw-bold'>Toll free: + 1234 568 963</a></li>
                        <li className="btn pb-3"> <a href="d">(9:AM to 8:PM IST)</a></li>
                        <li className="btn pb-3"><a href="d" className='fw-bold'>Email: example@gmail.com.com</a></li>
                    </ul>
                    <div className='d-flex j-c'>
                        <div className='google mr-2'>
                            <img src={google} alt="" className='google-image' />
                        </div>
                        <div className='apple'>
                            <img src={apple} alt="" className='apple-image' />
                        </div>
                    </div>
                </Col>
            </Row>
            <div className='d-flex s-b a-c copyright-container mt-3 pt-5 pb-3'>
                <div><p>Copyrights 2021 Eduport, All rights reserved.</p></div>
                <div className='d-flex a-c footer-arrow-container'>
                    <ul className='d-flex s-b a-c'>
                        <li className='mr-5'><a href="#lan"><p><i class="fa fa-globe mr-2"></i>Language <i className="fa fa-angle-up ml-2"></i></p></a></li>
                        <li className='mr-5'><a href="terms"><p>Terms of use</p></a></li>
                        <li><a href="privacy"><p>Privacy policy</p></a></li>
                    </ul>
                    <div><a href="#top"><i class="fa fa-arrow-up footer-arrow-btn p-3 rounded"></i></a></div>
                </div>
            </div>
        </Container>
    </>
}
export default Footer;