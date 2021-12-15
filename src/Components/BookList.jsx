import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SingleBook from './SingleBook';

const BookList = (props) => {
    return (
        <>
            <Container>
                <Row>
                    {
                        props.books.map( book => (
                            <Col xs={12} md={3} lg={2}  className="my-5 p-0 mx-1 d-flex justify-content-center">
                                <SingleBook book={book} key={book.asin}/>
                            </Col>
                        )
                        )
                    }
                </Row>
            </Container>
        </>
    )
}
        


export default BookList;

{/* {props.books.map((book) => <SingleBook book={book} />} */}