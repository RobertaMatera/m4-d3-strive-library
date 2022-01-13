import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Registration = () => {
  const [inputForm, setInputForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleUserInput = (e) => {
    inputForm({ ...inputForm, firstName: e, lastName: e});
    console.log(setInputForm({ ...inputForm, firstName: e, lastName: e}));
  };

  /*  const nameValidation = (fieldName, fieldValue) => {
    if (fieldValue.trim() === "") {
      return `${fieldName} is required`;
    }
    if (/[^a-zA-Z -]/.test(fieldValue)) {
      return "Invalid characters";
    }
    if (fieldValue.trim().length < 2) {
      return `${fieldName} needs to be at least three characters`;
    }
    return null;
  }

  const emailValidation = (email) => {
    if (
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      )
    ) {
      return null;
    }
    if (email.trim() === "") {
      return "Email is required";
    }
    return "Please enter a valid email";
  }

  const passwordValidation = (password) => {
    if (password.lenght < 8) {
      return `${password} needs to be at least eight characters`;
    }
    return false;
  }

  const confirmPasswordValidation = (confirmPassword) => {
      if (confirmPassword !== password) {
          return "Should have the same value as Password"
      }
      return false;
  }

  const validate = {
      firstName: name => nameValidation('first name', name),
      lastName: name => nameValidation('Last Name', name),
      email: emailValidation,
      password: passwordValidation,
      confirmPassword: confirmPasswordValidation

  } */

  const handleSubmit = () => {
      console.log ("here I'll validate my form")
  }


  return (
    <Container className="my-5">
      <Row>
        <Col md={6} className="offset-md-3 my-5">
          <Form onSubmit={handleSubmit()}>
            <Row>
              <Col>
                <Form.Group controlId="formBasicFirstName">
                  <Form.Label className="d-flex justify-content-start">
                    First Name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your First Name"
                    onChange={(e) => handleUserInput(e.currentTarget.value)}
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
                    onChange={(e) => handleUserInput(e.currentTarget.value)}
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
