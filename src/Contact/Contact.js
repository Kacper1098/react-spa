import {Col, Container, Row} from "react-bootstrap";
import React from "react";

function Contact() {
    return(
        <div className={"pt-5 pb-5 bg-light text-center"}>
            <Row className={"mb-4"}>
                <Col>
                    <h1>Get in touch with us</h1>
                </Col>
            </Row>
            <Row className="justify-content-lg-center">
                <Col md={4} lg={4} sm={12}>
                    <h3>Address</h3>
                    <p><strong>Michał M Kamiński</strong><br/>ul. Koszykowa 45 <br/> 00-562 Warszawa</p>
                    <br/>
                    <p><strong>Włodzisław J Nowak</strong><br/>ul. Cyprysowa 138 <br/> 15-822 Białystok</p>
                    <br/>
                    <p><strong>Bratumił W Ostrowski</strong><br/>ul. Mieszka I 37 <br/> 42-605 Tarnowskie Góry</p>
                </Col>
                <Col md={4} lg={4} sm={12}>
                    <h3>Phone</h3>
                    <p><strong>Michał M Kamiński</strong><br/>67 605 66923</p>
                    <br/>
                    <p><strong>Włodzisław J Nowak</strong><br/>67 483 76704</p>
                    <br/>
                    <p><strong>Bratumił W Ostrowski</strong><br/>72 604 23397</p>
                </Col>
                <Col md={4} lg={4} sm={12}>
                    <h3>Email</h3>
                    <p><strong>Michał M Kamiński</strong><br/>8wkvucvkpyp@temporary-mail.net</p>
                    <br/>
                    <p><strong>Włodzisław J Nowak</strong><br/>h5f88ndn8zi@temporary-mail.net</p>
                    <br/>
                    <p><strong>Bratumił W Ostrowski</strong><br/>917f47bbc8r@temporary-mail.net</p>
                </Col>
            </Row>
        </div>

    )
}

export default Contact;