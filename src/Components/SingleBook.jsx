import React from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

const SingleBook = ({changeSelectedBook, selectedBook, book}) => {
    return (
      <>
        <Card
          onClick={() => changeSelectedBook(book.asin)}
          style={{
            width: "18rem",
            border:
              selectedBook === book.asin
                ? "3px solid red"
                : "1px solid #93D5D9",
          }}
        >
          <Card.Img
            variant="top"
            src={book.img}
            style={{ width: "100%", height: "35vh", objectFit: "cover" }}
          />
          <Card.Body>
            <Card.Title
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {book.title}
            </Card.Title>
          </Card.Body>
          <div className="mb-2">
            <Card.Text>category: {book.category}</Card.Text>
            <Badge pill variant="warning" className="mb-3 p-2">
              {book.price} €
            </Badge>{" "}
            <br />
            <Button variant="info" style={{ borderRadius: "25px" }}>
              COMMENT
            </Button>
          </div>
        </Card>
      </>
    );
  }

export default SingleBook;