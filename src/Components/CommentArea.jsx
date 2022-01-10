import React from "react"
import CommentList from "./CommentList"
import AddComment from "./AddComment"
import Loading from "./Loading"
import Error from "./Error"

class CommentArea extends React.Component {

    state = {
        comments: [],
        isLoading: true,
        isError: false,
    }

    fetchData = async () => {
        try {
            let response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`, 
            {
                headers: {
                    Authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYjA2MDRjZmY1ZjAwMTU5MGJkYjIiLCJpYXQiOjE2NDE4MjIzOTcsImV4cCI6MTY0MzAzMTk5N30.wU2A-cS0_YhexhiialDI85BVXuu-0viuF1jaSDR1-ec"
                }
            })
            console.log('RESPONSE', response)
            if (response.ok) {
                let comments = await response.json()
                this.setState({ 
                    comments: comments,
                    isLoading: false,
                    isError: false,
                }) 
            } else {
                console.log("error")
                this.setState({
                    isLoading: false,
                    isError: true,
                })
            }
        } catch (error) {
            console.log(error)
            this.setState({
                isLoading: false,
                isError: true,
            })
        }
    } 
    
    componentDiMount = async () => {
        this.fetchData ()
    }

    render() {
        return (
            <div>
                {this.state.isLoading && <Loading />}
                {this.state.isError && <Error />}
                <AddComment asin={this.props.asin}/>
                <CommentList commentsToShow={this.state.comments} />
            </div>
        )
    }
}

export default CommentArea


