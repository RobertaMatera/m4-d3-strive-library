import React from "react"
import Form from"react-bootstrap/Form"
import Button from "react-bootstrap/Button"

class AddComment extends React.Component {
    
    state = {
        comment: {
            comment: "",
            rate: 1,
            elementId: this.props.asin
        }
    }

    sendComment = async (e) => {
        e.preventDefault()
        try {
            let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", 
            {
                headers: {
                    Authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWJiNDA1YmNhMTZlYjAwMTU2Yzk3NmUiLCJpYXQiOjE2Mzk2NjE2NjAsImV4cCI6MTY0MDg3MTI2MH0.vSdQ-UKH0peErJ2ypiqx8YtUZvRoJmDXsmNZ7-feTpE",
                    "Content-type": "application/json",
                },
                method: "POST",
                body: JSON.stringify(this.state.comment),
            })
            if (response.ok) {
                alert('Comment was sent!')
            } else {
                console.log("error")
                alert('something went wrong')
            }
        } catch(error) {
            console.log("error")
        }
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.sendComment}>
                    <Form.Group>
                        <Form.Label>Comment text</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Add comment here"
                            value={this.state.comment.comment}
                            onChange={e => this.setState({
                                comment: {
                                    ...this.state.comment,
                                    comment: e.target.value
                                }
                            })}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Rating</Form.Label>
                        <Form.Control as="select" value={this.state.comment.rate}
                            onChange={e => this.setState({
                                comment: {
                                    ...this.state.comment,
                                    rate: e.target.value
                                }
                            })}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

export default AddComment