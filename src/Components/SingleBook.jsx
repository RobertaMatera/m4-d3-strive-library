import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

const SingleBook = (props) => {
    return (
        <>
            <Container>
                <Row>
                    <Col className="my-5 d-flex justify-content-center">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={props.book.img} />
                            <Card.Body>
                                <Card.Title>{props.book.title}</Card.Title>
                                <Card.Text>
                                category: {props.book.category}
                                </Card.Text>
                                <Badge pill variant="warning" className="mb-3 p-2">
                                    {props.book.price} €
                                </Badge>{' '}
                                <br />
                                <Button variant="primary">BUY</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default SingleBook;