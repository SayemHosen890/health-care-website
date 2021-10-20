import React from 'react';
import logo from '../image/logo/images-removebg-preview.png'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import useAuth from '../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top" className="header">
                <Container>
                    <img className="img-fluid" src={logo} alt="" />
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#doctors">Doctors</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#contact">Contact</Nav.Link>
                        {
                            user.email ?
                                <button className="rounded" onClick={logOut}>Logout</button>
                                :
                                <Nav.Link as={HashLink} to="/login">Login</Nav.Link>
                        }
                        {/* <Nav.Link as={HashLink} to="/home#login">login</Nav.Link> */}
                        {/* <Link to="/login">Login</Link> */}
                        {/* {user?.email ?
                            <Button>Logout</Button> :
                            <Link to="/login">Login</Link>
                        } */}
                        <Navbar.Text className="text-dark">
                            <small>  Signed in as</small>: <a href="#login" className="text-dark">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
                {/* <Container>
                    <img src={logo} alt="" />
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Link to="/home">Home</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/doctors">Doctors</Link>
                        <Link to="/contact">Contact</Link>
                        {user?.email ?
                            <Button>Logout</Button> :
                            <Link to="/login">Login</Link>
                        }
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container> */}
            </Navbar>
        </>
    );
};

export default Header;

