
import React from 'react'
import { Nav, Navbar, NavDropdown, } from 'react-bootstrap';
import { useState, useRef } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { RxHamburgerMenu } from "react-icons/rx";
import Overlay from 'react-bootstrap/Overlay';

import logo from '../public/images/bsptcl.jpg'
import logo1 from '../public/images/logo.gif' /*animated logo*/
import bluebg from '../public/images/blue-bg.png' /*blue background*/
import Image from 'react-bootstrap/Image';
import { CiTextAlignCenter } from 'react-icons/ci';
import { MdSunny } from "react-icons/md"; /*for sun emoticon*/
import { FaMoon } from "react-icons/fa";/*for moon emoticon*/
import { RiEnglishInput } from "react-icons/ri";/*for English emoticon*/
import { FaSitemap } from "react-icons/fa6";/*for Sitemap emoticon*/
import { FaSearch } from "react-icons/fa";/*for Search emoticon*/
/* button group import statements*/
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
// import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
import './css/navigationBar.css'
// import './css/testcss.css'

function NavigationBar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

            <div className='design'>
                <div className='container-fluid'> {/* use container to shrink from both sides*/}
                    <div className='updiv'>
                        <div className='parentDepartment'>
                            {/* <p> ऊर्जा विभाग, बिहार सरकार</p>
                            <p> Energy Department, Govt. of Bihar</p> */}
                        </div>
                        {/* <div className='utilityLink'>
                            <a href="">Skip to Main Content</a>
                            <a href="">Screen Reader</a>
                            <a href="">A-</a>
                            <a href="">A</a>
                            <a href="">A+</a>
                            <a href=""><MdSunny /></a>
                            <a href=""><FaMoon /></a>
                            <a href=""><RiEnglishInput /></a>
                            <a href="">हि</a>
                            <a href=""><FaSitemap /></a>
                            <a href=""><FaSearch /></a>
                        </div> */}


                        {/* ---------------------------------Button group code that hosts utility tools------------------------------ */}
                        <div >
                            <ButtonToolbar aria-label="Toolbar with button groups">
                                <ButtonGroup className="me-1 " aria-label="First group">
                                    {/* <Button style={{fontSize:"0.5rem"}}>Skip to Main Content</Button> */}
                                    <Button >Skip to Main Content</Button>
                                </ButtonGroup>
                                <ButtonGroup className=" me-1 " aria-label="bwfirst and second group">
                                    <Button className="customButton" >Screen Reader</Button>
                                </ButtonGroup>
                                <ButtonGroup className="me-1" aria-label="Second group">
                                    <Button >A-</Button> <Button >A</Button > <Button>A+</Button>
                                </ButtonGroup>
                                <ButtonGroup className="me-1" aria-label="Third group">
                                    <Button><MdSunny /></Button> <Button><FaMoon /></Button>
                                </ButtonGroup>
                                <ButtonGroup className="me-1 " aria-label="Fourth group">
                                    <Button><RiEnglishInput /></Button> <Button>हि</Button>
                                </ButtonGroup>
                                <ButtonGroup className="me-1 " aria-label="Fifth group">
                                    <Button><FaSitemap /></Button>
                                </ButtonGroup>
                                <ButtonGroup className="me-1" aria-label="Sixth group">
                                    <Button><FaSearch /></Button>
                                </ButtonGroup>
                            </ButtonToolbar>
                        </div>
         



                        {/* ---------------------------------Button group------------------------------ */}

                    </div>
                    <div className='dndiv'>
                        <div className='navlogo'>
                            <div className="logoImg">
                                <Image src={logo} roundedCircle className='imgdim' />
                            </div>

                            <div className="deptName">
                                {/* <Image src={logo1} roundedCircle className='imgdim' /> */}
                                <h4 >बिहार स्टेट पावर ट्रांसमिशन कम्पनी लिमिटेड</h4>
                                <h4 id='engDeptName'>Bihar State Power Transmission Co. Ltd. </h4>
                                <p id='holdingDeptName'>(A Subsidiary of Bihar State Power (Holding) Co. Ltd.)</p>


                            </div>

                        </div>
                        <div className='link'>
                            {/* <div className='utility'> */}
                            {/* Here utility link*/}
                            {/* <Nav className="">
                                    <Nav.Item className=''>
                                        <Nav.Link href="" style={{ color: 'rgb(78, 76, 76)' }}> A</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="" style={{ color: 'rgb(78, 76, 76)' }}>Link1</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="link-2" style={{ color: 'rgb(78, 76, 76)' }}>Link2</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="link-3" style={{ color: 'rgb(78, 76, 76)' }}>Search</Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                        <Nav.Link href="link-3" style={{ color: 'rgb(78, 76, 76)' }}>Link3</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="link-3" style={{ color: 'rgb(78, 76, 76)' }}>Link4</Nav.Link>
                                    </Nav.Item>
                                </Nav> */}
                            {/* </div> */}
                            {/* Here main link  */}

                            <Image src={bluebg} className='bluebg' />


                        </div>
                    </div>
                    <div className='main'>
                        <Navbar collapseOnSelect expand="lg" className="w-100">
                            {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="ms-auto">
                                    <Nav.Link href="#features" className='navLinkcolor'>About Us</Nav.Link>
                                    <Nav.Link href="#pricing" className='navLinkcolor'>Transmission N/W</Nav.Link>
                                    <NavDropdown title="Employee" id="collapsible-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1" className='navLinkcolor'>Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2" className='navLinkcolor'>Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3" className='navLinkcolor'>Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4" className='navLinkcolor'>Separated link</NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link href="#deets" className='navLinkcolor'>Media</Nav.Link>
                                    <Nav.Link href="#memes" className='navLinkcolor'>Procurement</Nav.Link>
                                    <Nav.Link href="#memes" className='navLinkcolor'>SLDC</Nav.Link>
                                    <Nav.Link href="#" className='navLinkcolor'>STU</Nav.Link>

                                    {/* Hamberg section */}
                                    <Nav.Link href="#" className='navLinkcolor'>
                                        <RxHamburgerMenu onClick={handleShow} />


                                        <Offcanvas show={show} onHide={handleClose} style={{ background: 'linear-gradient(to right, #243B55, #141E30)', color: 'white' }}>
                                            <Offcanvas.Header closeButton>
                                                <Offcanvas.Title>UTILITY LINK</Offcanvas.Title>
                                            </Offcanvas.Header>
                                            <Offcanvas.Body style={{ backgroundColor: 'gray' }}>
                                                <div className="button-container">
                                                    <div className="row mb-2">
                                                        <div className="col">
                                                            <Button className="btn">Button 1</Button>
                                                        </div>
                                                        <div className="col">
                                                            <Button className="custom-button">Button 2</Button>
                                                        </div>
                                                        <div className="col">
                                                            <Button className="custom-button">Button 3</Button>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-2">
                                                        <div className="col">
                                                            <Button className="custom-button">Button 4</Button>
                                                        </div>
                                                        <div className="col">
                                                            <Button className="custom-button">Button 5</Button>
                                                        </div>
                                                        <div className="col">
                                                            <Button className="custom-button">Button 6</Button>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-2">
                                                        <div className="col">
                                                            <Button className="custom-button">Button 7</Button>
                                                        </div>
                                                        <div className="col">
                                                            <Button className="custom-button">Button 8</Button>
                                                        </div>
                                                        <div className="col">
                                                            <Button className="custom-button">Button 9</Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Offcanvas.Body>
                                        </Offcanvas>
                                    </Nav.Link>




                                    {/* <Nav.Link href="#memes">Career</Nav.Link>
                                <Nav.Link href="#memes">Others</Nav.Link> */}
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                </div>
            </div>


        </>
    );
}

export default NavigationBar;