import React from "react"
import Card from "react-bootstrap/Card"
import Badge from "react-bootstrap/Badge"
import Button from "react-bootstrap/Button"
import CommentArea from "./CommentArea"

class SingleBook extends React.Component {
    state = {
        selected: false
    }

    render() {
        return (
            <>
                <Card 
                    onClick={() => this.setState({ selected: !this.state.selected })}
                    style={{ width: '18rem', border: this.state.selected ? '3px solid red' : '.5px solid grey' }}>
                        
                    <Card.Img variant="top" src={this.props.book.img} style={{ width: '100%', height: '35vh', objectFit: 'cover'}}/>
                    <Card.Body>
                        <Card.Title style={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
                            {this.props.book.title}
                        </Card.Title>
                    </Card.Body>
                    <div className="mb-2">
                        <Card.Text>
                            category: {this.props.book.category}
                        </Card.Text>
                            <Badge pill variant="warning" className="mb-3 p-2">
                                {this.props.book.price} €
                            </Badge>{' '}
                            <br />
                            <Button variant="info" style ={{borderRadius: '25px'}}>COMMENT</Button>
                    </div>
                </Card>
                {
                    this.state.selected && <CommentArea asin={this.props.book.asin} />
                }
            </>
        )
    }
}


export default SingleBook

// first code using functional component
/* const SingleBook = (props) => {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.book.img} />
                <Card.Body>
                    <Card.Title>{props.book.title}</Card.Title>
                    <Card.Text>
                    category: {props.book.category}
                    </Card.Text>
                    <Badge pill variant="warning" className="mb-3 p-2">
                        {props.book.price} €
                    </Badge>{' '}
                    <br />
                    <Button variant="primary">BUY</Button>
                </Card.Body>
            </Card>
        </>
    )
} */