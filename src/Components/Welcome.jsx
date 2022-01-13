import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"


const Welcome = () => {
    return (
        <>
            <Jumbotron fluid>
                <Container>
                    <div>
                        <h1 className="">StriveBooks shop</h1>
                        <h4 className="my-3">
                            Only the best books of the year!
                        </h4>
                        <div>
                            <Button id="buy-now-btn" type="submit" variant="info" className="px-3 py-2 bg-welcome bg-btn">BUY NOW!</Button>{' '}
                        </div>
                    </div>
                </Container>
            </Jumbotron>
        </>
    )
}

export default Welcome;