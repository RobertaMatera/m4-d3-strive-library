import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

const MyNav = () => {
    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">
                    <img
                        alt="strive library logo"
                        src="https://www.pngall.com/wp-content/uploads/2017/01/Colored-Smoke-PNG-Pic.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Strive Library
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}

export default MyNav;