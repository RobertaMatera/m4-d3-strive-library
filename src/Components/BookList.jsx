import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";

class BookList extends React.Component {
  state = {
    searchQuery: "",
    selectedBook: null,
  };

  render() {
    return (
      <Container fluid className="my-3">
        <Row>
          <Col md={10}>
            <Row className="d-flex justify-content-center">
              <Col md={4}>
                <Form.Group controlId="formSearch">
                  <Form.Label>
                    {" "}
                    <b>SEARCH</b>{" "}
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Search here"
                    value={this.state.searchQuery}
                    onChange={(e) =>
                      this.setState({ searchQuery: e.target.value })
                    }
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="d-flex justify-content-center">
              {this.props.books
                .filter((book) =>
                  book.title.toLowerCase().includes(this.state.searchQuery)
                )
                .map((book) => (
                  <Col
                    xs={12}
                    md={3}
                    lg={2}
                    className="my-2 p-0 mx-1 d-flex justify-content-center"
                    key={book.asin}
                  >
                    <SingleBook
                      book={book}
                      selectedBook={this.state.selectedBook}
                      changeSelectedBook={(asin) =>
                        this.setState({ selectedBook: asin })
                      }
                    />
                  </Col>
                ))}
            </Row>
          </Col>
          <Col md={2} className="d-flex flex-column align-items-start px-0">
            <h4 className="my-4">Comments</h4>
            <CommentArea asin={this.state.selectedBook} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BookList;
