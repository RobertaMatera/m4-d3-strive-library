import "./App.css";
import "./MyStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";

import books from "./Components/Data/books.json";

import MyNav from "./Components/MyNav";
import Welcome from "./Components/Welcome";
import WarningSign from "./Components/WarningSign";
import MyBadge from "./Components/MyBadge";
import BookList from "./Components/BookList";
import CommentArea from "./Components/CommentArea";
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
      <BookList books={books} />
      <MyFooter />
    </div>
  );
}

export default App;
