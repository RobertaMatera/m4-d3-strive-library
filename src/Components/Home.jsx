import React, { Component } from "react";
import Welcome from "./Welcome";
import BookList from "./BookList";
import books from "./Data/books.json";
import { Container, Row, Col } from "react-bootstrap";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col className="px-0">
              <Welcome />
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row>
            <Col>
              <BookList books={books} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
