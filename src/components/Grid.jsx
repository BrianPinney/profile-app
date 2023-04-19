import { Col, Container, Row } from "react-bootstrap";

export default function Grid(){
    return (
        <section> 
        <Container className="grid-container">
            <Row>
                <Col sm={12} md={4}>
                <h2>Why Boca Code</h2>
                <p></p>
                </Col>

                <Col sm={12} md={4}>
                <h2>Exciting Project</h2>
                <p></p>
                </Col>

                <Col>
                <h2>Ideal Work Place</h2>
                <p></p>
                </Col>
            </Row>
        </Container>
        </section>
    )
}