import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Col } from "react-bootstrap";
export default function About () {
  return (
    <main>
      <Container>
        <Row className="text-center">
          <Col sm={12} md={6}>
          <img src="https://picsum.photos/300/300" alt="Profile" className="rounded-circle"/>
          </Col>
          <Col>
          <h1 className="mt-3">Brian Pinney</h1>
          <p>I am a person of many hobbies, including but not limited to Homebrewing, bushcrafting, knife making, video games, whitewater kayaking, cigar enthusiast. </p>
          
          </Col>
        </Row>
      </Container>
    </main>
  );
}