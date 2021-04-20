import React from "react";
import {Button, Col, Container, Row} from "react-bootstrap";

function Home() {
    return(
        <Container>
            <Row className="justify-content-lg-center mt-5 mb-5">
                <Col className={"text-center"}>
                    <h3 className={"mb-3"}>Example heading</h3>
                    <p>Sed rutrum id lorem ut elementum. Sed ullamcorper lacinia velit. Phasellus vitae tempus tortor. Quisque feugiat bibendum mollis. Morbi dictum velit convallis dolor congue hendrerit. Aliquam vitae tellus dignissim odio elementum luctus ac ac sem.
                        Donec mauris urna, finibus quis magna at, pharetra aliquam magna. Donec molestie mi ac finibus semper. In dapibus tempus eros, et suscipit lectus venenatis quis.</p>
                    <Button variant={"outline-info mr-4"}>First example button</Button>
                    <Button variant={"info"}>Second example button</Button>
                </Col>
            </Row>
            <Row>
                <Col lg={4} md={4} sm={12} className={"text-left"}>
                    <h4 className={"mb-3"}>Heading</h4>
                    <p className={"text-start"}>Nulla pretium, justo ut tristique bibendum, magna dolor aliquet quam, at placerat nisi quam sed libero. Vivamus mollis tortor augue, nec rhoncus tellus ultrices ut. Aenean non semper tellus.</p>
                    <Button variant={"info"}>Details</Button>
                </Col>
                <Col lg={4} md={4} sm={12} className={"text-left"}>
                    <h4 className={"mb-3"}>Heading</h4>
                    <p>Maecenas efficitur, nibh et maximus scelerisque, eros justo blandit libero, vitae imperdiet felis metus in felis. Mauris mi quam, malesuada at arcu vitae, vestibulum scelerisque sem.</p>
                    <Button variant={"info"}>Details</Button>
                </Col>
                <Col lg={4} md={4} sm={12} className={"text-left"}>
                    <h4 className={"mb-3"}>Heading</h4>
                    <p>Phasellus a nibh felis. Vestibulum a cursus ante. Sed tempus tellus ac consectetur euismod. Morbi ut orci sollicitudin orci ultrices mollis non non dolor.</p>
                    <Button variant={"info"}>Details</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;