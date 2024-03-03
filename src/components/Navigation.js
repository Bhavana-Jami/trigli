import React, { useRef } from 'react';
import { Nav, Container, Navbar, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css'
import { RiMenu3Fill } from "react-icons/ri";

function Navigation() {
    // offcanvas is closed after clicking on the navlink
    const offCanvasRef = useRef();
    const word = "Trigli"
    const colorArray = ['#DAF7A6', '#FFC300', '#FF5733', '#C70039', '#900C3F', '#581845'];

    // const randomColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16);
    return (

        <>

            {['md'].map((expand) => (
                <Navbar key={expand} expand={expand} className="bg-body-primary mb-3 mt-2">
                    <Container fluid>
                        <Navbar.Brand as={Link} to="/" onClick={() => offCanvasRef.current.backdrop.click()}>{word.split('').map((letter, index) => (
                            <span key={index} style={{ color: colorArray[index % colorArray.length] }}>{letter}</span>
                        ))}</Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} >
                        <RiMenu3Fill />
                        </Navbar.Toggle>
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} as={Link} to="/" onClick={() => offCanvasRef.current.backdrop.click()}>
                                    Trigli
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 gap-2">
                                    <Nav.Link as={Link} to="/" onClick={() => offCanvasRef.current.backdrop.click()}>Home</Nav.Link>
                                    <Nav.Link as={Link} to="/about" onClick={() => offCanvasRef.current.backdrop.click()}>About</Nav.Link>
                                    {/* <Nav.Link as={Link} to="/profile" onClick={() => offCanvasRef.current.backdrop.click()}>Profile</Nav.Link> */}
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>

    );
}

export default Navigation;
