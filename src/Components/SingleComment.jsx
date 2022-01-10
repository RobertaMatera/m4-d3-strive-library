import Button from "react-bootstrap/Button"
import ListGroup from "react-bootstrap/ListGroup"

const deleteComment = async (asin) => {
    try {
        let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + asin, 
        {
            headers: {
                Authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYjA2MDRjZmY1ZjAwMTU5MGJkYjIiLCJpYXQiOjE2NDE4MjIzOTcsImV4cCI6MTY0MzAzMTk5N30.wU2A-cS0_YhexhiialDI85BVXuu-0viuF1jaSDR1-ec"
            },
            method: "DELETE",
        })
        if(response.ok) {
            alert("comment successfully deleted!")
        } else {
            alert("comment NOT deleted!")
        }
    } catch(error) {
        alert("THE COMMENT HASN\'T BEEN DELETED!")
    }
}

const SingleComment = ({ comment }) => (
    <ListGroup.Item className="d-flex flex-column">
        {comment.comment}
        <Button variant="danger" className="ml-2" onClick={() => deleteComment(comment._id)}>Delete</Button>
    </ListGroup.Item>
)

export default SingleComment