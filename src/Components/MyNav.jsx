import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const MyNav = () => {
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
              <div className="nav-link mr-2" style={{ color:"black" }}>
                <b>Home</b>
              </div >
            </Link>
            <Link to="/register">
              <div className="nav-link" style={{ borderRadius: "25px", background: "#A8D7DB", border:"none", color:"black" }}>
                <b>Register</b>
              </div >
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNav;
