import Row from '../row/row'
import ContainerFluid from '../container-fluid/containerfluid'
import Col from '../col/col'
import img1 from '../images/img1.png'
import './header.css'
import '../common.css'
import Button from '../button/button'
import { useState } from 'react'
const Header = ({ logo }) => {
    const [check, setCheck] = useState(false);
    const [barchk, setBarChk] = useState(false);
    const navArr = [
        {
            nav: 'Demos',
            href: '#'
        },
        {
            nav: 'Pages',
            href: '#'
        },
        {
            nav: 'Accounts',
            href: '#'
        },
        {
            nav: 'Megamenu',
            href: '#'
        },
    ];
    const SearchField = () => {
        if (!check) {
            setCheck(true);
        } else {
            setCheck(false)
        }
    }

    const BarsField = () => {
        if (!barchk) {
            setBarChk(true);

        } else {
            setBarChk(false);
        }
    }

    return <>
        <ContainerFluid className='pt-3 pb-3 header-section'>
            <Row>
                <Col className="d-flex ml-4 mr-4" xl="xl-30">
                    <header className="d-flex a-c s-b">
                        <img src={logo} width="115" alt="logo" className='mr-3' />
                        <Button
                            content='Category'
                            type="secondary"
                            className='font-size13 pt-2 pb-2 pl-3 pr-3 header-btn'
                            color='blue'

                        />
                    </header>
                </Col>
                <Col className="d-flex a-c s-a" xl="xl-40">
                    <ul className='d-flex ul-list-container'>
                        {navArr.map((items) => {
                            return (
                                <li className='font-size13 nav-header fw-bold pr-3 pl-3'>
                                    <a href={items.href} className='header-nav'>{items.nav}</a>
                                    <i class="fa fa-angle-down"></i>
                                </li>
                            )
                        })}
                    </ul>
                </Col>
                <Col className="d-flex ml-4 mr-4 flex-end" xl="xl-30">
                    <header className="d-flex a-c">
                        <div className='search-container'>
                            <input type="text" placeholder='Search' name="" id="" className='search-area p-2 mr-2 rounded  outline-0' />
                            <i class="fa search-icon">&#xf002;</i>
                        </div>

                        <div className='d-flex a-c right-side-bars-container'>
                            <div>{(check === true) ? <input type="text" placeholder='Search' name="" id="" className='search-area p-2 mr-2 rounded  outline-0 serach-field-wrap' /> : null}</div>
                            <div onClick={() => SearchField()}><i class="fa search-icon mr-3">&#xf002;</i></div>
                            <div>
                                <div onClick={() => BarsField()}><i className="fa fa-bars mr-3"></i></div>
                                {(barchk === true) ?
                                    <div className='bar-nav-list-container'>
                                        <ul className='ul-bars-nav-list-show rounded p-2'>
                                            {navArr.map((items) => {
                                                return (
                                                    <li className='font-size13 nav-header ul-bars-nav-list-show-hover fw-bold p-2'>
                                                        <a href={items.href} className='header-navs'>{items.nav}</a>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                    : null}
                            </div>
                        </div>
                        <div><img src={img1} alt="img1" height="28" width="28" className='border-50 search-imager' /></div>
                    </header>
                </Col>
            </Row>
        </ContainerFluid>
    </>
}
export default Header;