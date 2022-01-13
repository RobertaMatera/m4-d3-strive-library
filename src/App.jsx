import "./App.css";
import "./MyStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* import books from "./Components/Data/books.json"; */

import MyNav from "./Components/MyNav";
import Home from "./Components/Home";
import Registration from "./Components/Registration";
import NotFound from "./Components/NotFound";
import MyFooter from "./Components/MyFooter";
import { Container, Row, Col } from "react-bootstrap";

const App = () => {
  return (
    <div className="App">
      <Container fluid className="px-0">
        <Row>
          <Col className="px-0">
            <BrowserRouter>
              <MyNav />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Registration />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </Col>
        </Row>
        <Row>
          <Col className="px-0">
            <MyFooter />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
