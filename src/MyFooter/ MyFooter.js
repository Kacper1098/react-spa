import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

function MyFooter() {
    return (
        <Container>
            <hr/>
            <footer className={"mt-5"}>
                <Row>
                    <Col>
                        Company © SGGW.
                        <br/>
                        All rights reserved.
                    </Col>
                    <Col>
                        <h5>Team</h5>
                        <ul>
                            <li>
                                <Link to={"/team"}>Join us</Link>
                            </li>
                            <li>
                                <Link to={"/team"}>Our team</Link>
                            </li>
                            <li>
                                <Link to={"/team"}>Our representatives</Link>
                            </li>
                            <li>
                                <Link to={"/team"}>Galery</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col>
                        <h5>Pricing</h5>
                        <ul>
                            <li>
                                <Link to={"/pricing"}>Free</Link>
                            </li>
                            <li>
                                <Link to={"/pricing"}>Pro</Link>
                            </li>
                            <li>
                                <Link to={"/pricing"}>Enterprise</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col>
                        <h5>Contact</h5>
                        <ul>
                            <li>
                                <Link to={"/contact"}>Location</Link>
                            </li>
                            <li>
                                <Link to={"/contact"}>Privacy</Link>
                            </li>
                            <li>
                                <Link to={"/contact"}>Write to us</Link>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </footer>
        </Container>
    )
}

export default MyFooter;