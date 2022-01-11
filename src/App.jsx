import "./App.css";
import "./MyStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";

import books from "./Components/Data/books.json";

import MyNav from "./Components/MyNav";
import Welcome from "./Components/Welcome";
import BookList from "./Components/BookList";
import MyFooter from "./Components/MyFooter";
import { Container, Row, Col } from "react-bootstrap";

const App = () => {
  return (
    <div className="App">
      <Container fluid className="px-0">
        <Row>
          <Col className="px-0">
            <MyNav />
          </Col>
        </Row>
        <Row>
          <Col className="px-0">
            <Welcome />
          </Col>
        </Row>
      </Container>
      <BookList books={books} />
      <MyFooter />
    </div>
  );
}

export default App;
