import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"


const MyFooter = () => {
    return (
        <>
        <div id="footer" className="background py-1">
            <Container>
                <Row className="mt-4">
                    <Col sm={12} md={4}>
                        <div className="d-flex justify-content-left">
                            <img
                            alt="strive books logo"
                            src="https://www.pngall.com/wp-content/uploads/2017/01/Colored-Smoke-PNG-Pic.png"  
                            width="30"
                            height="30"
                            className="d-inline-block align-top mr-3"
                            />{' '}
                            <h5>StriveBookshop</h5>
                        </div>    
                        <p className="text-left mt-3"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, est? Eos consequatur voluptatibus ex sequi natus autem molestiae repellat quibusdam quidem rem delectus perspiciatis ut nobis modi, sunt enim mollitia.</p>    
                    </Col>
                    <Col sm={12} md={2}>
                        <h6>
                            Links
                        </h6>
                        <ul className="list-unstyled">
                            <li className="mb2" key={1}>
                                link
                            </li>
                            <li className="mb2">
                                link
                            </li>
                            <li className="mb2">
                                link
                            </li>
                            <li className="mb2">
                                link
                            </li>
                            <li className="mb2">
                                link
                            </li>
                            <li className="mb2">
                                link
                            </li>
                        </ul>
                    </Col>
                    <Col sm={12} md={2}>
                        <h6 >
                            Links
                        </h6>
                        <ul className="list-unstyled">
                            <li className="mb2" key={1}>
                                link
                            </li>
                            <li className="mb2">
                                link
                            </li>
                            <li className="mb2">
                                link
                            </li>
                            <li className="mb2">
                                link
                            </li>
                            <li className="mb2">
                                link
                            </li>
                            <li className="mb2">
                                link
                            </li>
                        </ul>
                    </Col>
                    <Col sm={12} md={2}>
                        <h6 >
                            Links
                        </h6>
                        <ul className="list-unstyled">
                            <li className="mb2" key={1}>
                                link
                            </li>
                            <li className="mb2">
                                link
                            </li>
                            <li className="mb2">
                                link
                            </li>
                            <li className="mb2">
                                link
                            </li>
                            <li className="mb2">
                                link
                            </li>
                            <li className="mb2">
                                link
                            </li>
                        </ul>
                    </Col>
                    <Col sm={12} md={2}>
                        <h6 >
                            Links
                        </h6>
                        <ul className="list-unstyled">
                            <li className="mb2" key={1}>
                                link
                            </li>
                            <li className="mb2">
                                link
                            </li>
                            <li className="mb2">
                                link
                            </li>
                            <li className="mb2">
                                link
                            </li>
                            <li className="mb2">
                                link
                            </li>
                            <li className="mb2">
                                link
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row className='my-2'>
                    <Col>
                        <h6>&copy; {new Date().getFullYear()} - StriveBooks</h6> 
                    </Col>
                </Row>
            </Container>
        </div>
        </>
        );
    }
    
    export default MyFooter