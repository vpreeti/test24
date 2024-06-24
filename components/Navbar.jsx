import React from 'react';
import { Container, Row, Col, Nav, Navbar, NavDropdown, Stack } from 'react-bootstrap';
import './css/navbar.css';

function ResponsiveLayout() {
    return (
        <>
            <Stack>
                <div className='bg-danger'>
                    <Nav className="justify-content-end">
                        <Nav.Item>
                            <Nav.Link href="/home" className='navLinkcolor'>Skip to Main Content</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="" className='navLinkcolor'>Screen Reader</Nav.Link>
                        </Nav.Item>
                        {/* <Nav.Item>
                            <Nav.Link href="link-2" className='navLinkcolor'>A A+ A-</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="link-3" className='navLinkcolor'>Search</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link href="link-3" className='navLinkcolor'>Day/Night</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="link-3" className='navLinkcolor'>English/Hindi</Nav.Link>
                        </Nav.Item> */}
                    </Nav>
                </div>
                <div className='row2 bg-dark-subtle'>
                    <Navbar collapseOnSelect expand="lg" className="w-100">
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link href="#features">About Us</Nav.Link>
                                <Nav.Link href="#pricing">Transmission N/W</Nav.Link>
                                <NavDropdown title="Employee" id="collapsible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#deets">Media</Nav.Link>
                                <Nav.Link href="#memes">Procurement</Nav.Link>
                                <Nav.Link href="#memes">SLDC</Nav.Link>
                                <Nav.Link href="#memes">STU</Nav.Link>
                                <Nav.Link href="#memes">Career</Nav.Link>
                                <Nav.Link href="#memes">Others</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </Stack>
        </>
    );
}

export default ResponsiveLayout;
