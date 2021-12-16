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
                    Authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWJiNDA1YmNhMTZlYjAwMTU2Yzk3NmUiLCJpYXQiOjE2Mzk2NjE2NjAsImV4cCI6MTY0MDg3MTI2MH0.vSdQ-UKH0peErJ2ypiqx8YtUZvRoJmDXsmNZ7-feTpE"
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


