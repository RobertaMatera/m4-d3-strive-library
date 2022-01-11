import { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const AddComment = ({ asin }) => {
  const [comment, setComment] = useState({
    comment: "",
    rate: 1,
    elementId: null,
  });
  /*   state = {
    comment: {
      comment: "",
      rate: 1,
      elementId: null,
    },
  };

  componentDidUpdate(prevProps) {
    if (prevProps.asin !== this.props.asin) {
      this.setState({
        comment: {
          ...this.state.comment,
          elementId: this.props.asin,
        },
      });
    } */
  /* 
  useEffect(() => {
    setComment(
      {...comment,
      elementId: asin,
    }
    )
  }, [asin]) */

  const sendComment = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify({ ...comment, elementId: asin }),
          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYjA2MDRjZmY1ZjAwMTU5MGJkYjIiLCJpYXQiOjE2NDE4MjIzOTcsImV4cCI6MTY0MzAzMTk5N30.wU2A-cS0_YhexhiialDI85BVXuu-0viuF1jaSDR1-ec",
          },
        }
      );
      if (response.ok) {
        alert("Comment was sent!");
      } else {
        console.log("error");
        alert("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Form onSubmit={(e) => sendComment(e)}>
        <Form.Group>
          <Form.Label>ADD A COMMENT</Form.Label>
          <Form.Control
            type="text"
            placeholder="Add comment here"
            value={comment.comment}
            onChange={(e) =>
              setComment({
                ...comment,
                comment: e.target.value,
              })
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Rating</Form.Label>
          <Form.Control
            as="select"
            value={comment.rate}
            onChange={(e) =>
              setComment({
                ...comment,
                rate: e.target.value,
              })
            }
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit" style={{ borderRadius: "25px", background: "#17A2B8", border:"none" }} className="py-2 px-3">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddComment;
