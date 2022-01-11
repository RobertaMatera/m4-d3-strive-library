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
    <ListGroup.Item className="d-flex flex-column mt-3" style={{ border: "none", background: "#F7F7F7", borderRadius: "25px" }}>
        {comment.comment}
        <Button variant="danger" style={{ borderRadius: "25px" }} className="my-1 mx-5" onClick={() => deleteComment(comment._id)}>Delete</Button>
    </ListGroup.Item>
)

export default SingleComment