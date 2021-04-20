import {Button, Card, Col, Container, Row} from "react-bootstrap";
import React from "react";

function Pricing() {
    return (
        <Container className={"mb-5"}>
            <Row className={"mt-5 mb-5"}>
                <Col className={"text-center"}>
                    <h1 className={"mb-3"}>Pricing</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus et nibh sed pulvinar. Aenean ut massa vel velit pretium vestibulum. Nulla mi ligula, scelerisque sed metus ac, pulvinar varius mauris. Integer rutrum eget quam nec iaculis. Integer a felis eu arcu lobortis gravida. Integer sit amet dui hendrerit, congue nulla vitae, malesuada ex.</p>
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={4} lg={4}>
                    <Card className={"text-center"}>
                        <Card.Body>
                            <Card.Header><h2>Free</h2></Card.Header>
                            <Card.Title className={"mb-4 mt-4"}><h2>0 PLN <small>/ mo</small></h2></Card.Title>
                            <Card.Text>
                                Nam vitae nisi maximus, sodales ligula non, vulputate arcu. Cras eros dolor, scelerisque a rutrum id, pharetra a lectus.
                            </Card.Text>
                            <Button variant={"outline-info"}>Sign up for free</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={4} lg={4}>
                    <Card className={"text-center"}>
                        <Card.Body>
                            <Card.Header><h2>Pro</h2></Card.Header>
                            <Card.Title className={"mb-4 mt-4"}><h2>20 PLN <small>/ mo</small></h2></Card.Title>
                            <Card.Text>
                                Integer at scelerisque metus. Etiam id ornare massa. Phasellus ut risus eu metus suscipit finibus.
                            </Card.Text>
                            <Button variant={"info"}>Get started</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={4} lg={4}>
                    <Card className={"text-center"}>
                        <Card.Body>
                            <Card.Header><h2>Enterprise</h2></Card.Header>
                            <Card.Title className={"mb-4 mt-4"}><h2>50 PLN <small>/ mo</small></h2></Card.Title>
                            <Card.Text>
                                Vestibulum eu gravida nibh, et posuere augue. Quisque id enim nec diam lobortis venenatis eu ac lacus
                            </Card.Text>
                            <Button variant={"info"}>Get started</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Pricing;