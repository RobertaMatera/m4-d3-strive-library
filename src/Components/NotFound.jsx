import { Container, Row, Col } from "react-bootstrap";

const NotFound = () => {
  return (
    <Container className="my-5 py-5" style={{ height: "40vh" }}>
      <Row>
        <Col>
          <h1>404 - Page not found!</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
