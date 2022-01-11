import React from "react";

import { useState, useEffect } from "react"; 

import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";

const CommentArea = ({ asin }) => {
  const [commentAreaState, setCommentAreaState] = useState({
    comments: [],
    isLoading: false,
    isError: false,
  });


  useEffect(() => {
    fetchComments()
  }, [asin])

  const fetchComments = async () => {
 
      setCommentAreaState({
        isLoading: true,
        ...commentAreaState
      });
      try {
        let response = await fetch(
          `https://striveschool-api.herokuapp.com/api/comments/${asin}`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYjA2MDRjZmY1ZjAwMTU5MGJkYjIiLCJpYXQiOjE2NDE4MjIzOTcsImV4cCI6MTY0MzAzMTk5N30.wU2A-cS0_YhexhiialDI85BVXuu-0viuF1jaSDR1-ec",
            },
          }
        );
        console.log("RESPONSE", response);
        if (response.ok) {
          let comments = await response.json();
          setCommentAreaState({
            comments: comments,
            isLoading: false,
            isError: false,
          });
        } else {
          console.log("error");
          setCommentAreaState({
            isLoading: false,
            isError: true,
          });
        }
      } catch (error) {
        console.log(error);
        setCommentAreaState({
          isLoading: false,
          isError: true,
        });
      }
    
  };

  return (
    <div>
      {commentAreaState.isLoading && <Loading />}
      {commentAreaState.isError && <Error />}
      <AddComment asin={asin} />
      <CommentList commentsToShow={commentAreaState.comments} />
    </div>
  );
};


export default CommentArea;
