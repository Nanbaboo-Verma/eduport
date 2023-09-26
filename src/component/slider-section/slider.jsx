import Container from '../container/container';
import Row from '../row/row';
import Col from '../col/col'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { crsArr } from "../array/coursestype";
import '../slider-section/slider.css'
import Button from '../button/button';
const Slider = () => {
    return <>

        <Container>
            <Row>
                <Col xl='xl-100' className="d-flex flex-column a-c">
                    <div className='mt-7 mb-3 text-center'>
                        <h1 className='font-size43'>Our Trending Courses</h1>
                        <p className='font-size13 mt-2'>Check out most 🔥 courses in the market</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xl="xl-100">
                    <Swiper
                        slidesPerView={3}
                        loop={true}
                        pagination={{
                            clickable: true
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {crsArr.map((items) => {
                            return (
                                <SwiperSlide>
                                    <Col xl='33' className="m-2">
                                        <div className='coursestype-container rounded'>
                                            <img alt='' src={items.img} />
                                            <div className="pr-2 pl-2 mt-2 pb-2">
                                                <div className='ml-2 mr-2 pb-4'>
                                                    <div className="d-flex s-b">
                                                        <div className='d-flex'>
                                                            <div className='mr-2'>
                                                                <Button
                                                                    content={items.design}
                                                                    type="dark"
                                                                    className='font-size10 fw-bold'
                                                                    color={items.color}
                                                                    bgcolor={items.bgcolor}
                                                                />
                                                            </div>
                                                            <div>
                                                                <Button
                                                                    content={items.badge}
                                                                    type="dark"
                                                                    className='font-size10 fw-bold'
                                                                />
                                                            </div>
                                                        </div>
                                                        <i className="fa fa-bookmark-o" style={{ color: 'gray' }}></i>
                                                    </div>
                                                    <div className="fw-bold mt-3 mb-3 font-size15">{items.title}</div>
                                                    <div><p className='font-size13'>{items.text}</p></div>
                                                    <div className="d-flex s-b mt-2">
                                                        <div className='d-flex'>
                                                            <span className='slider-reating'>
                                                                <span className='font-size13'>{items.sliderate}</span>
                                                                <i class={`${items.star} ml-1`}></i>
                                                            </span>
                                                            <p className='ml-2'>{items.number}</p>
                                                        </div>
                                                        <div>
                                                            <p className='font-size13'>{items.student}</p>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex mt-3">
                                                        <small><i class="fa fa-clock-o mr-2" style={{ color: 'red' }}></i>{items.time}</small>
                                                        <small className="ml-3"><i class="fa mr-2" style={{ color: '#FDAD00' }}>&#xf073;</i>{items.lecture}</small>
                                                    </div>
                                                </div>
                                                <div className="card-footer-section pt-3 pb-2 d-flex s-b a-c">
                                                    <div className="d-flex a-c">
                                                        <img alt='' src={items.img} className="footer-image rounded" />
                                                        <span className="ml-2"><p>Lori Stevens</p></span>
                                                    </div>
                                                    <div className='footer-price'>$255</div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </SwiperSlide>
                            )
                        })}

                    </Swiper>
                </Col>
            </Row>
        </Container>
    </>
}
export default Slider;