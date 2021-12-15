import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';

const MyBadge = (props) => {
    return (
        <>
           <Row>
               <Col>
                    <Badge pill variant={props.color} className="p-3"> 
                        {props.text}
                    </Badge>{' '}
               </Col>
           </Row>
        </>
    )
}

export default MyBadge;