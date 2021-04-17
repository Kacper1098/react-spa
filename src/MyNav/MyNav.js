import {Button, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

function MyNav() {
    return (
        <Navbar className="bg-dark ml-auto" variant={"dark"}>
            <Nav className={"mr-auto"}>
                <Navbar.Brand>SggwKacperStefanowicz</Navbar.Brand>
            </Nav>
            <Nav className={"justify-content-between"}>
                <Nav.Link as={Link} to={"/home"}>
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
        </Navbar>
    )
}

export default MyNav;