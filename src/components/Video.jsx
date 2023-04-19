import { Container, Row, Col } from "react-bootstrap";

export default function Video(){
    return (
        <section>
        <Container className="bg-secondary vide-container"> 
            <Row>
                <Col>
                <h2>Video</h2>
                <p></p>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/PAX6Zt1BPkY?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </Col>
            </Row>
        </Container>
        </section>
    )
}