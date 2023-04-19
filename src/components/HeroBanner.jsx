import { Col, Container, Row } from "react-bootstrap";

export default function HeroBanner (){
    return (
        <section>
            <Container fluid className="bg-danger">
                <Row>
                    <Col className="text-center">
                        <HeroBanner><img src="../public/images/herobanner.jpg" alt="" /></HeroBanner>
                     </Col>
                </Row>
            </Container>
        </section>
    )
}