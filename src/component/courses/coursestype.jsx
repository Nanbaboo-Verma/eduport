import Col from "../col/col";
import Row from "../row/row";
import { crsArr } from "../array/coursestype";
import Button from '../button/button'
import '../courses/coursestype.css'
import '../common.css'
const CoursesType = () => {
    return <>
        <Row className='courser-type-wrap'>
            {crsArr.map((items) => {
                return (
                    <Col xl="xl-25" className="first-child-margin mt-5 rounded">
                        <div className="coursestype-container rounded">
                            <img src={items.img} href="#" alt='' className="courses-type-images" />
                            <div className="pr-2 pl-2 mt-2 pb-2">
                                <div className="content-container ml-2 mr-2">
                                    <div className="d-flex s-b">
                                        <Button
                                            content={items.badge}
                                            type="dark"
                                            className='font-size10 fw-bold'
                                            color={items.color}
                                            bgcolor={items.bgcolor}
                                        />
                                        <i className={items.heart} style={{ color: 'red' }}></i>
                                    </div>
                                    <div className="fw-bold mt-3 mb-3 font-size15">{items.title}</div>
                                    <div><p className="font-size13">{items.text}</p></div>
                                    <div className="mt-2">
                                        <span>
                                            <i class={`${items.star} mr-1`} style={{ color: 'orange' }}></i>
                                            <i class={`${items.star} mr-1`} style={{ color: 'orange' }}></i>
                                            <i class={`${items.star} mr-1`} style={{ color: 'orange' }}></i>
                                            <i class={`${items.star} mr-1`} style={{ color: 'orange' }}></i>
                                        </span>
                                        <span className="font-size13"> {items.point}</span>
                                    </div>
                                </div>
                                <div className="card-footer-section pt-3 pb-2 d-flex mt-3 s-b a-c">
                                    <small><i class="fa fa-clock-o mr-2" style={{ color: 'red' }}></i>{items.time}</small>
                                    <small className="ml-3"><i class="fa mr-2" style={{ color: '#FDAD00' }}>&#xf073;</i>{items.lecture}</small>
                                </div>
                            </div>
                        </div>
                    </Col>
                )
            })}
        </Row>

    </>
}
export default CoursesType;