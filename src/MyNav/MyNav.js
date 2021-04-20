import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import React from "react";

function MyNav() {
    return (
        <Navbar className="bg-dark ml-auto" variant={"dark"} expand={"sm"} collapseOnSelect>
            <Navbar.Brand>SggwKacperStefanowicz</Navbar.Brand>
            <Navbar.Toggle aria-controls={"responsive-navbar-nav"}/>
            <Navbar.Collapse id={"responsive-navbar-nav"}>
                <span className={"mr-auto"}></span>
                <Nav className={"justify-content-between d-flex align-items-center"}>
                    <Nav.Link as={Link} to={""}>
                        <Button variant={"outline-info"}>Home</Button>
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/team"}>
                        <Button variant={"outline-info"}>Team</Button>
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/pricing"}>
                        <Button variant={"outline-info"}>Pricing</Button>
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/contact"}>
                        <Button variant={"outline-info"}>Contact</Button>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default MyNav;