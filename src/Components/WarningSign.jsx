import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

const WarningSign = ({text}) => {
    return (
        <>
            <Row>
                <Col xs={12} md={6} className="offset-md-3 my-3">
                    <Alert variant="danger">
                        {text}
                    </Alert>
                </Col>
            </Row>
        </>
    )
}

export default WarningSign;