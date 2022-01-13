import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Registration = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col md={6} className="offset-md-3 my-5">
          <Form>
            <Row>
              <Col>
                <Form.Group controlId="formBasicFirstName">
                  <Form.Label className="d-flex justify-content-start">
                    First Name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your First Name"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formBasicLastName">
                  <Form.Label className="d-flex justify-content-start">
                    Last Name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your Last Name"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label className="d-flex justify-content-start">
                    Password
                  </Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="formConfirmPassword">
                  <Form.Label className="d-flex justify-content-start">
                    Confirm Password
                  </Form.Label>
                  <Form.Control
                    type="confirm password"
                    placeholder="Confirm Password"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button
                  variant="primary"
                  type="submit"
                  className="py-2 px-3 bg-welcome bg-btn"
                >
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Registration;
