import Button from "react-bootstrap/Button"
import ListGroup from "react-bootstrap/ListGroup"

const deleteComment = async (asin) => {
    try {
        let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + asin, 
        {
            headers: {
                Authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWJiNDA1YmNhMTZlYjAwMTU2Yzk3NmUiLCJpYXQiOjE2Mzk2NjE2NjAsImV4cCI6MTY0MDg3MTI2MH0.vSdQ-UKH0peErJ2ypiqx8YtUZvRoJmDXsmNZ7-feTpE"
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
    <ListGroup.Item>
        {comment.comment}
        <Button variant="danger" className="ml-2" onClick={() => deleteComment(comment._id)}>D</Button>
    </ListGroup.Item>
)

export default SingleComment