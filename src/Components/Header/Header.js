import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignout = () => {
        signOut(auth)
    }
    return (
        <div className='sticky-top'>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/Home'>EYE MASTER</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="Home#Services">Services</Nav.Link>
                            <Nav.Link as={Link} to='/Blogs'>Blogs</Nav.Link>
                            <Nav.Link as={Link} to='/About'>About</Nav.Link>
                            <Nav.Link as={Link} to='/CheckOut'>CheckOut</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user ?
                                    <button onClick={handleSignout}>Sign Out</button>
                                    :
                                    <Nav.Link as={Link} to='/LogIn'>Log In</Nav.Link>
                            }
                            <Nav.Link as={Link} to='/Register'>
                                Register
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;