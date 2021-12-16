import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import SingleBook from "./SingleBook"
import { render } from "@testing-library/react"

class BookList extends React.Component {

    state = {
        searchQuery: "",
    }

    render() {
        return (
            <Container fluid>
                <Row className="d-flex justify-content-center">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Search</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Search here"
                            value={this.state.searchQuery}
                            onChange={e => this.setState({ searchQuery: e.target.value })}
                        />
                    </Form.Group>
                </Row>
                <Row className="d-flex justify-content-center"> 
                    {
                        this.props.books.filter( book => book.title.toLowerCase().includes(this.state.searchQuery)).map( book => (
                            <Col xs={12} md={3} lg={2} className="my-2 p-0 mx-1 d-flex justify-content-center" key={book.asin}>
                                <SingleBook book={book}/>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        )
    }

}



export default BookList;

//previous functional component
/* const BookList = (props) => {
    return (
        <>
            <Container fluid>
                <Row className="d-flex justify-content-center">
                    {
                        props.books.map( book => (
                            <Col xs={12} md={3} lg={2} className="my-2 p-0 mx-1 d-flex justify-content-center">
                                <SingleBook book={book} key={book.asin}/>
                            </Col>
                        )
                        )
                    }
                </Row>
            </Container>
        </>
    )
} */
