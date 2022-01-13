import Container from "react-bootstrap/Container";
import { Link, useLocation } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const MyNav = () => {
  const location = useLocation();
  return (
    <>
      <Navbar className="background">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="strive library logo"
              src="https://www.pngall.com/wp-content/uploads/2017/01/Colored-Smoke-PNG-Pic.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Strive Library
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Link to="/">
              <div
                className={`nav-link mr-2 black-text ${
                  location.pathname === "/" ? "active" : " "
                }`}
              >
                <b>Home</b>
              </div>
            </Link>
            <Link to="/register">
              <div className={`nav-link bg-btn black-text ${location.pathname === "/register" ? "active" : " "}`}>
                <b>Register</b>
              </div>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNav;
