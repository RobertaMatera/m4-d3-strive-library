import "./App.css";
import "./MyStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./Components/MyNav";
import Welcome from "./Components/Welcome";
import WarningSign from "./Components/WarningSign";
import MyBadge from "./Components/MyBadge";
import books from "./Components/Data/books.json";
import BookList from "./Components/BookList";
import MyFooter from "./MyFooter";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Container fluid className="px-0">
        <Row>
          <Col className="px-0">
            <MyNav></MyNav>
          </Col>
        </Row>
        <Row>
          <Col className="px-0">
            <Welcome />
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col className="px-0">
            <WarningSign text="This is a danger alert!" />
            <MyBadge text="MY BUDGE" color="info" />
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <Row className="mt-5">
          <Col xs={12} md={10} className="px-0">
            <BookList books={books} />
          </Col>
          <Col xs={12} md={2} className="px-0">
            <h4 className="my-auto">Comments Area</h4>
          </Col>
        </Row>
      </Container>

      <MyFooter />
    </div>
  );
}

export default App;
