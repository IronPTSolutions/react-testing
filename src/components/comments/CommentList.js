import React, { Component, Fragment } from 'react'
import CommentsService from '../../services/CommentsService';
import CommentItem from './CommentItem';

class CommentList extends Component {
  state = {
    comments : [],
    globalError: ''
  }

  componentDidMount() {
    CommentsService.list()
      .then(
        comments => this.setState({ comments }),
        error => {
          console.error(error);
          this.setState({ globalError: error })
        }
      )
  }

  handleCommentDelete = (id) => {
    CommentsService.remove(id)
      .then(
        () => this.setState({ comments: this.state.comments.filter(comment => comment.id !== id) }),
        error => {
          console.error(error);
          this.setState({ globalError: error })
        }
      )
  }

  render() {
    const { comments } = this.state;
    
    const commentsView = comments.map(comment => <CommentItem key={comment.id} {...comment} onClickDelete={this.handleCommentDelete.bind(this, comment.id)}/>)

    return (
      <div className="row">
        <h1 className="col-12 mb-2">Comments List</h1>
        <div className="col-12">
          {commentsView}
        </div>
      </div>
    );
  }
}

export default CommentList